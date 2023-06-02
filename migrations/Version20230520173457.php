<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230520173457 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE availabilities (id INT AUTO_INCREMENT NOT NULL, coach_id INT DEFAULT NULL, start_rdv DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', end_rdv DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', is_booked TINYINT(1) NOT NULL, INDEX IDX_D7FC41EF3C105691 (coach_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE booking (id INT AUTO_INCREMENT NOT NULL, coach_id INT DEFAULT NULL, user_id INT DEFAULT NULL, state_rdv VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', duration VARCHAR(255) NOT NULL, start_rdv DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', end_rdv DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_E00CEDDE3C105691 (coach_id), INDEX IDX_E00CEDDEA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE coach (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, first_name VARCHAR(255) DEFAULT NULL, last_name VARCHAR(255) DEFAULT NULL, email VARCHAR(255) DEFAULT NULL, speciality VARCHAR(255) DEFAULT NULL, siret_number INT NOT NULL, degrees VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_3F596DCCA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE equipment (id INT AUTO_INCREMENT NOT NULL, name_equipment VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE evolution (id INT AUTO_INCREMENT NOT NULL, weight_evolution INT NOT NULL, height_evolution INT NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE exercises (id INT AUTO_INCREMENT NOT NULL, workout_id INT DEFAULT NULL, nom VARCHAR(171) NOT NULL, equipement VARCHAR(255) NOT NULL, description LONGTEXT NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', partie VARCHAR(255) NOT NULL, INDEX IDX_FA14991A6CCCFC9 (workout_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE gym (id INT AUTO_INCREMENT NOT NULL, name_gym VARCHAR(255) NOT NULL, postalcode_gym INT NOT NULL, city_gym VARCHAR(255) NOT NULL, comment LONGTEXT NOT NULL, adress_gym VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE `member` (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, first_name VARCHAR(255) DEFAULT NULL, last_name VARCHAR(255) DEFAULT NULL, phone_number VARCHAR(255) DEFAULT NULL, email VARCHAR(255) DEFAULT NULL, user_age INT DEFAULT NULL, size_user INT DEFAULT NULL, weight_user INT DEFAULT NULL, subscriber_date DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', UNIQUE INDEX UNIQ_70E4FA78A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE newsletter_subscriber (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE objective (id INT AUTO_INCREMENT NOT NULL, weight_objective INT NOT NULL, height_objective INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE partie_corps (id INT AUTO_INCREMENT NOT NULL, id_exercise INT NOT NULL, nom VARCHAR(255) NOT NULL, INDEX IDX_7655A469FE013989 (id_exercise), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, coach_id VARCHAR(36) DEFAULT NULL, confirmation_token VARCHAR(255) DEFAULT NULL, confirmation_token_expires_at DATETIME DEFAULT NULL, is_verified TINYINT(1) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), UNIQUE INDEX UNIQ_8D93D6493C105691 (coach_id), INDEX IDX_8D93D649A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE workout (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE workout_exercises (workout_id INT NOT NULL, exercise_id INT DEFAULT NULL, INDEX IDX_2D7B2EC5E934951A (exercise_id), PRIMARY KEY(workout_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE availabilities ADD CONSTRAINT FK_D7FC41EF3C105691 FOREIGN KEY (coach_id) REFERENCES coach (id)');
        $this->addSql('ALTER TABLE booking ADD CONSTRAINT FK_E00CEDDE3C105691 FOREIGN KEY (coach_id) REFERENCES coach (id)');
        $this->addSql('ALTER TABLE booking ADD CONSTRAINT FK_E00CEDDEA76ED395 FOREIGN KEY (user_id) REFERENCES `member` (id)');
        $this->addSql('ALTER TABLE coach ADD CONSTRAINT FK_3F596DCCA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE exercises ADD CONSTRAINT FK_FA14991A6CCCFC9 FOREIGN KEY (workout_id) REFERENCES workout (id)');
        $this->addSql('ALTER TABLE `member` ADD CONSTRAINT FK_70E4FA78A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE partie_corps ADD CONSTRAINT FK_7655A469FE013989 FOREIGN KEY (id_exercise) REFERENCES exercises (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE workout_exercises ADD CONSTRAINT FK_2D7B2EC5A6CCCFC9 FOREIGN KEY (workout_id) REFERENCES workout (id)');
        $this->addSql('ALTER TABLE workout_exercises ADD CONSTRAINT FK_2D7B2EC5E934951A FOREIGN KEY (exercise_id) REFERENCES exercises (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE availabilities DROP FOREIGN KEY FK_D7FC41EF3C105691');
        $this->addSql('ALTER TABLE booking DROP FOREIGN KEY FK_E00CEDDE3C105691');
        $this->addSql('ALTER TABLE booking DROP FOREIGN KEY FK_E00CEDDEA76ED395');
        $this->addSql('ALTER TABLE coach DROP FOREIGN KEY FK_3F596DCCA76ED395');
        $this->addSql('ALTER TABLE exercises DROP FOREIGN KEY FK_FA14991A6CCCFC9');
        $this->addSql('ALTER TABLE `member` DROP FOREIGN KEY FK_70E4FA78A76ED395');
        $this->addSql('ALTER TABLE partie_corps DROP FOREIGN KEY FK_7655A469FE013989');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649A76ED395');
        $this->addSql('ALTER TABLE workout_exercises DROP FOREIGN KEY FK_2D7B2EC5A6CCCFC9');
        $this->addSql('ALTER TABLE workout_exercises DROP FOREIGN KEY FK_2D7B2EC5E934951A');
        $this->addSql('DROP TABLE availabilities');
        $this->addSql('DROP TABLE booking');
        $this->addSql('DROP TABLE coach');
        $this->addSql('DROP TABLE equipment');
        $this->addSql('DROP TABLE evolution');
        $this->addSql('DROP TABLE exercises');
        $this->addSql('DROP TABLE gym');
        $this->addSql('DROP TABLE `member`');
        $this->addSql('DROP TABLE newsletter_subscriber');
        $this->addSql('DROP TABLE objective');
        $this->addSql('DROP TABLE partie_corps');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE workout');
        $this->addSql('DROP TABLE workout_exercises');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
