<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230126111029 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE workout_partie_corps DROP FOREIGN KEY workout_partie_corps_ibfk_1');
        $this->addSql('ALTER TABLE workout_partie_corps DROP FOREIGN KEY workout_partie_corps_ibfk_2');
        $this->addSql('ALTER TABLE workout_exercise DROP FOREIGN KEY workout_exercise_ibfk_1');
        $this->addSql('ALTER TABLE workout_exercise DROP FOREIGN KEY workout_exercise_ibfk_2');
        $this->addSql('DROP TABLE workout_partie_corps');
        $this->addSql('DROP TABLE workout_exercise');
        $this->addSql('DROP TABLE workout');
        $this->addSql('ALTER TABLE exercises DROP cible, CHANGE id id INT AUTO_INCREMENT NOT NULL, CHANGE partie partie VARCHAR(255) NOT NULL, CHANGE description description LONGTEXT NOT NULL, CHANGE created_at created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', CHANGE updated_at updated_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\'');
        $this->addSql('ALTER TABLE partie_corps CHANGE id id INT AUTO_INCREMENT NOT NULL, CHANGE id_exercise id_exercise INT NOT NULL, CHANGE nom nom VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE partie_corps RENAME INDEX id_exercise TO IDX_7655A469FE013989');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D6493C105691');
        $this->addSql('DROP INDEX IDX_8D93D6493C105691 ON user');
        $this->addSql('ALTER TABLE user DROP coach_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE workout_partie_corps (workout_id BIGINT UNSIGNED NOT NULL, partie_corps_id BIGINT UNSIGNED NOT NULL, INDEX partie_corps_id (partie_corps_id), INDEX workout_id (workout_id), PRIMARY KEY(workout_id, partie_corps_id)) DEFAULT CHARACTER SET utf8mb3 COLLATE `utf8mb3_general_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE workout_exercise (workout_id BIGINT UNSIGNED NOT NULL, exercise_id BIGINT UNSIGNED NOT NULL, repetition INT DEFAULT NULL, serie INT DEFAULT NULL, INDEX workout_exercise_ibfk_2 (exercise_id), INDEX IDX_76AB38AAA6CCCFC9 (workout_id), PRIMARY KEY(workout_id, exercise_id)) DEFAULT CHARACTER SET utf8mb3 COLLATE `utf8mb3_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE workout (id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL, nom VARCHAR(255) CHARACTER SET utf8mb3 NOT NULL COLLATE `utf8mb3_unicode_ci`, cible VARCHAR(255) CHARACTER SET utf8mb3 NOT NULL COLLATE `utf8mb3_unicode_ci`, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb3 COLLATE `utf8mb3_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE workout_partie_corps ADD CONSTRAINT workout_partie_corps_ibfk_1 FOREIGN KEY (workout_id) REFERENCES workout (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE workout_partie_corps ADD CONSTRAINT workout_partie_corps_ibfk_2 FOREIGN KEY (partie_corps_id) REFERENCES partie_corps (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE workout_exercise ADD CONSTRAINT workout_exercise_ibfk_1 FOREIGN KEY (workout_id) REFERENCES workout (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE workout_exercise ADD CONSTRAINT workout_exercise_ibfk_2 FOREIGN KEY (exercise_id) REFERENCES exercises (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE exercises ADD cible TEXT NOT NULL, CHANGE id id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL, CHANGE description description TEXT NOT NULL, CHANGE created_at created_at DATETIME DEFAULT NULL, CHANGE updated_at updated_at DATETIME DEFAULT NULL, CHANGE partie partie VARCHAR(171) NOT NULL');
        $this->addSql('ALTER TABLE user ADD coach_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D6493C105691 FOREIGN KEY (coach_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_8D93D6493C105691 ON user (coach_id)');
        $this->addSql('ALTER TABLE partie_corps CHANGE id id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL, CHANGE id_exercise id_exercise BIGINT UNSIGNED NOT NULL, CHANGE nom nom VARCHAR(171) NOT NULL');
        $this->addSql('ALTER TABLE partie_corps RENAME INDEX idx_7655a469fe013989 TO id_exercise');
    }
}
