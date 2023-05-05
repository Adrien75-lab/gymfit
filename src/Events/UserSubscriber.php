<?

namespace App\Events;

use App\Entity\Coach;
use App\Entity\User;
use App\Entity\Member;
use Doctrine\ORM\Events;
use Doctrine\Persistence\Event\LifecycleEventArgs;
use Doctrine\Bundle\DoctrineBundle\EventSubscriber\EventSubscriberInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Uid\Uuid;
use Symfony\Component\Mailer\MailerInterface;

class UserSubscriber implements EventSubscriberInterface
{
    private $mailer; // Ajoutez cette propriété
    // Modifiez le constructeur pour injecter le service MailerInterface
    public function __construct(MailerInterface $mailer)
    {
        $this->mailer = $mailer;
    }

    public function postPersist(LifecycleEventArgs $args): void
    {
        $entity = $args->getObject();

        // Si l'entité n'est pas un User, ne faites rien
        if (!$entity instanceof User) {
            return;
        }

        $entityManager = $args->getObjectManager();
        // Persistez et enregistrez l'utilisateur


        // Vérifiez si l'utilisateur a le rôle ROLE_COACH
        if (in_array('ROLE_COACH', $entity->getRoles())) {
            // Générer un UUID pour les coachs
            // Créez un nouveau coach en utilisant les données de l'utilisateur
            $entity->setCoachId(Uuid::v4());
            $coach = new Coach();
            //$coach->setId($entity->getId());
            $coach->setFirstName($entity->getFirstName());
            $coach->hydrate($entity);
            $coach->setLastName($entity->getLastName());
            $coach->setEmail($entity->getEmail());
            // Générer un jeton unique
            $confirmationToken = bin2hex(random_bytes(32));

            // Définir la date d'expiration du jeton (par exemple, 24 heures après la création)
            $confirmationTokenExpiresAt = new \DateTime();
            $confirmationTokenExpiresAt->modify('+24 hours');

            // Stocker le jeton et la date d'expiration dans l'entité User
            $entity->setConfirmationToken($confirmationToken);
            $entity->setConfirmationTokenExpiresAt($confirmationTokenExpiresAt);

            // Ajoutez les autres propriétés nécessaires pour les coachs

            // Persistez et enregistrez le nouveau coach
            $entityManager->persist($coach);
            $entityManager->flush();


            // Envoyer un e-mail de confirmation avec le token pour les coachs
            $this->sendConfirmationEmailCoach($entity, $confirmationToken);
        }
        if (in_array('ROLE_USER', $entity->getRoles())) {
            // Créez un nouveau membre en utilisant les données de l'utilisateur
            $member = new Member();
            //$member->setId($entity->getId());
            $member->hydrate($entity);
            $member->setFirstName($entity->getFirstName());
            $member->setLastName($entity->getLastName());
            $member->setEmail($entity->getEmail());

            // Ajoutez les autres propriétés nécessaires pour les membres

            // Persistez et enregistrez le nouveau membre
            $entityManager->persist($member);
            $entityManager->flush();
            // Envoyer un e-mail de confirmation avec le token pour les coachs
            $this->sendConfirmationEmailMember($entity);
        }
    }

    private function sendConfirmationEmailCoach(User $user, string $confirmationToken)
    {
        $email = (new Email())
            ->from('hello@example.com')
            ->to($user->getEmail())
            ->subject('Confirmation d\'inscription et jeton de connexion')
            ->html('
                <!DOCTYPE html>
                <html lang="fr">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            color: #333;
                            background-color: #f9f9f9;
                            margin: 0;
                            padding: 0;
                        }
                        .email-container {
                            width: 100%;
                            max-width: 600px;
                            margin: 0 auto;
                            background-color: #ffffff;
                            padding: 20px;
                            box-sizing: border-box;
                            border-radius: 5px;
                        }
                        .logo {
                            width: 100%;
                            max-width: 200px;
                            display: block;
                            margin: 0 auto;
                        }
                        h1 {
                            text-align: center;
                            color: #2c3e50;
                        }
                        a {
                            color: #3498db;
                            text-decoration: none;
                        }
                        .button {
                            display: inline-block;
                            background-color: #3498db;
                            color: #ffffff;
                            text-decoration: none;
                            padding: 10px 20px;
                            border-radius: 5px;
                            font-size: 16px;
                        }
                    </style>
                </head>
                <body>
                    <div class="email-container">
                        <img src="https://yourapp.com/assets/logo.png" alt="Logo" class="logo">
                        <h1>Bienvenue sur notre plateforme !</h1>
                        <p>Merci de vous être inscrit !</p>
                        <p>Pour confirmer votre compte et terminer l\'inscription, veuillez cliquer sur le bouton ci-dessous :</p>
                        <p><a href="http://localhost:8000/#/verify-token/' . $confirmationToken . '" class="button">Confirmer mon compte</a></p>
                        <p>Une fois que votre compte est confirmé, vous aurez besoin du jeton suivant pour vous connecter en tant que coach :</p>
                        <p><strong>' . $confirmationToken . '</strong></p>
                        <p>Merci de conserver ce jeton en lieu sûr, car il vous sera demandé à chaque connexion. Si vous perdez ce jeton, vous devrez demander un nouveau jeton de connexion auprès de notre support.</p>
                        <p>Demandez votre numero d\'authentification à votre salle de sport préférée, il vous sera demandé lors de la connexion</p>
                        <p>Si vous avez des questions ou rencontrez des problèmes, n\'hésitez pas à <a href="mailto:support@example.com">contacter notre équipe d\'assistance</a>.</p>
                        <p>Bonne journée !</p>
                    </div>
                </body>
                </html>
            ');

        $this->mailer->send($email);
    }
    private function sendConfirmationEmailMember(User $user)
    {
        $email = (new Email())
            ->from('hello@example.com')
            ->to($user->getEmail())
            ->subject('Confirmation d\'inscription')
            ->html('
                <!DOCTYPE html>
                <html lang="fr">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            color: #333;
                            background-color: #f9f9f9;
                            margin: 0;
                            padding: 0;
                        }
                        .email-container {
                            width: 100%;
                            max-width: 600px;
                            margin: 0 auto;
                            background-color: #ffffff;
                            padding: 20px;
                            box-sizing: border-box;
                            border-radius: 5px;
                        }
                        .logo {
                            width: 100%;
                            max-width: 200px;
                            display: block;
                            margin: 0 auto;
                        }
                        h1 {
                            text-align: center;
                            color: #2c3e50;
                        }
                        a {
                            color: #3498db;
                            text-decoration: none;
                        }
                        .button {
                            display: inline-block;
                            background-color: #3498db;
                            color: #ffffff;
                            text-decoration: none;
                            padding: 10px 20px;
                            border-radius: 5px;
                            font-size: 16px;
                        }
                    </style>
                </head>
                <body>
                    <div class="email-container">
                        <img src="https://yourapp.com/assets/logo.png" alt="Logo" class="logo">
                        <h1>Bienvenue sur notre plateforme !</h1>
                        <p>Merci de vous être inscrit !</p>
                        <p>Pour confirmer votre compte et terminer l\'inscription, veuillez cliquer sur le bouton ci-dessous :</p>
                        <p><a href="http://localhost:8000/#/api/confirm-member/' . urlencode($user->getEmail()) . '" class="button">Confirmer mon compte</a></p>
                        <p>Si vous avez des questions ou rencontrez des problèmes, n\'hésitez pas à <a href="mailto:support@example.com">contacter notre équipe d\'assistance</a>.</p>
                        <p>Bonne journée !</p>
                    </div>
                </body>
                </html>
            ');

        $this->mailer->send($email);
    }


    public function getSubscribedEvents(): array
    {
        return [
            Events::postPersist,
        ];
    }
}
