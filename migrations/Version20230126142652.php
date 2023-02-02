<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230126142652 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE partie_corps (id INT AUTO_INCREMENT NOT NULL, id_exercise INT NOT NULL, nom VARCHAR(255) NOT NULL, INDEX IDX_7655A469FE013989 (id_exercise), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE workout_exercises (id INT AUTO_INCREMENT NOT NULL, workout_id INT DEFAULT NULL, exercises_id INT DEFAULT NULL, INDEX IDX_2D7B2EC5A6CCCFC9 (workout_id), INDEX IDX_2D7B2EC51AFA70CA (exercises_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE partie_corps ADD CONSTRAINT FK_7655A469FE013989 FOREIGN KEY (id_exercise) REFERENCES exercises (id)');
        $this->addSql('ALTER TABLE workout_exercises ADD CONSTRAINT FK_2D7B2EC5A6CCCFC9 FOREIGN KEY (workout_id) REFERENCES workout (id)');
        $this->addSql('ALTER TABLE workout_exercises ADD CONSTRAINT FK_2D7B2EC51AFA70CA FOREIGN KEY (exercises_id) REFERENCES exercises (id)');
        $this->addSql('ALTER TABLE workout_exercise DROP FOREIGN KEY workout_exercise_ibfk_1');
        $this->addSql('ALTER TABLE workout_exercise DROP FOREIGN KEY workout_exercise_ibfk_2');
        $this->addSql('DROP TABLE workout_partie_corps');
        $this->addSql('DROP TABLE workout_exercise');
        $this->addSql('ALTER TABLE exercises ADD workout_id INT DEFAULT NULL, DROP cible, CHANGE id id INT AUTO_INCREMENT NOT NULL, CHANGE partie partie VARCHAR(255) NOT NULL, CHANGE description description LONGTEXT NOT NULL, CHANGE created_at created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', CHANGE updated_at updated_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\'');
        $this->addSql('ALTER TABLE exercises ADD CONSTRAINT FK_FA14991A6CCCFC9 FOREIGN KEY (workout_id) REFERENCES workout (id)');
        $this->addSql('CREATE INDEX IDX_FA14991A6CCCFC9 ON exercises (workout_id)');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D6493C105691');
        $this->addSql('DROP INDEX IDX_8D93D6493C105691 ON user');
        $this->addSql('ALTER TABLE user DROP coach_id');
        $this->addSql('ALTER TABLE workout DROP cible, DROP created_at, DROP updated_at, CHANGE id id INT AUTO_INCREMENT NOT NULL, CHANGE nom nom VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE workout_partie_corps (workout_id BIGINT UNSIGNED NOT NULL, partie_corps_id BIGINT UNSIGNED NOT NULL, INDEX partie_corps_id (partie_corps_id), INDEX workout_id (workout_id), PRIMARY KEY(workout_id, partie_corps_id)) DEFAULT CHARACTER SET utf8mb3 COLLATE `utf8mb3_general_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE workout_exercise (workout_id BIGINT UNSIGNED NOT NULL, exercise_id BIGINT UNSIGNED NOT NULL, repetition INT DEFAULT NULL, serie INT DEFAULT NULL, INDEX workout_exercise_ibfk_2 (exercise_id), INDEX IDX_76AB38AAA6CCCFC9 (workout_id), PRIMARY KEY(workout_id, exercise_id)) DEFAULT CHARACTER SET utf8mb3 COLLATE `utf8mb3_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE workout_exercise ADD CONSTRAINT workout_exercise_ibfk_1 FOREIGN KEY (workout_id) REFERENCES workout (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE workout_exercise ADD CONSTRAINT workout_exercise_ibfk_2 FOREIGN KEY (exercise_id) REFERENCES exercises (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE partie_corps DROP FOREIGN KEY FK_7655A469FE013989');
        $this->addSql('ALTER TABLE workout_exercises DROP FOREIGN KEY FK_2D7B2EC5A6CCCFC9');
        $this->addSql('ALTER TABLE workout_exercises DROP FOREIGN KEY FK_2D7B2EC51AFA70CA');
        $this->addSql('DROP TABLE partie_corps');
        $this->addSql('DROP TABLE workout_exercises');
        $this->addSql('ALTER TABLE exercises DROP FOREIGN KEY FK_FA14991A6CCCFC9');
        $this->addSql('DROP INDEX IDX_FA14991A6CCCFC9 ON exercises');
        $this->addSql('ALTER TABLE exercises ADD cible TEXT NOT NULL, DROP workout_id, CHANGE id id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL, CHANGE description description TEXT NOT NULL, CHANGE created_at created_at DATETIME DEFAULT NULL, CHANGE updated_at updated_at DATETIME DEFAULT NULL, CHANGE partie partie VARCHAR(171) NOT NULL');
        $this->addSql('ALTER TABLE workout ADD cible VARCHAR(255) NOT NULL, ADD created_at DATETIME DEFAULT NULL, ADD updated_at DATETIME DEFAULT NULL, CHANGE id id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL, CHANGE nom nom VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE user ADD coach_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D6493C105691 FOREIGN KEY (coach_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_8D93D6493C105691 ON user (coach_id)');
    }
}
