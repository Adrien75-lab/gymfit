<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230223185458 extends AbstractMigration
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
        $this->addSql('ALTER TABLE customer DROP FOREIGN KEY FK_81398E09A76ED395');
        $this->addSql('DROP TABLE workout_partie_corps');
        $this->addSql('DROP TABLE customer');
        $this->addSql('ALTER TABLE exercises DROP cible, CHANGE id id INT AUTO_INCREMENT NOT NULL, CHANGE partie partie VARCHAR(255) NOT NULL, CHANGE description description LONGTEXT NOT NULL, CHANGE created_at created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', CHANGE updated_at updated_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\'');
        $this->addSql('ALTER TABLE exercises ADD CONSTRAINT FK_FA14991A6CCCFC9 FOREIGN KEY (workout_id) REFERENCES workout (id)');
        $this->addSql('CREATE INDEX IDX_FA14991A6CCCFC9 ON exercises (workout_id)');
        $this->addSql('ALTER TABLE partie_corps CHANGE id id INT AUTO_INCREMENT NOT NULL, CHANGE id_exercise id_exercise INT NOT NULL, CHANGE nom nom VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE partie_corps RENAME INDEX id_exercise TO IDX_7655A469FE013989');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D6493C105691');
        $this->addSql('DROP INDEX IDX_8D93D6493C105691 ON user');
        $this->addSql('ALTER TABLE user DROP coach_id, DROP age, DROP kilos, DROP calories');
        $this->addSql('ALTER TABLE workout DROP cible, DROP created_at, DROP updated_at, CHANGE id id INT AUTO_INCREMENT NOT NULL, CHANGE nom nom VARCHAR(255) DEFAULT NULL');
        $this->addSql('DROP INDEX IDX_2D7B2EC5A6CCCFC9 ON workout_exercises');
        $this->addSql('DROP INDEX `primary` ON workout_exercises');
        $this->addSql('ALTER TABLE workout_exercises DROP repetition, DROP serie, CHANGE workout_id workout_id INT NOT NULL, CHANGE exercise_id exercise_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE workout_exercises ADD PRIMARY KEY (workout_id)');
        $this->addSql('ALTER TABLE workout_exercises RENAME INDEX workout_exercise_ibfk_2 TO IDX_2D7B2EC5E934951A');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE workout_partie_corps (workout_id BIGINT UNSIGNED NOT NULL, partie_corps_id BIGINT UNSIGNED NOT NULL, INDEX workout_id (workout_id), INDEX partie_corps_id (partie_corps_id), PRIMARY KEY(workout_id, partie_corps_id)) DEFAULT CHARACTER SET utf8mb3 COLLATE `utf8mb3_general_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE customer (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, first_name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, last_name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, email VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, INDEX IDX_81398E09A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE workout_partie_corps ADD CONSTRAINT workout_partie_corps_ibfk_1 FOREIGN KEY (workout_id) REFERENCES workout (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE workout_partie_corps ADD CONSTRAINT workout_partie_corps_ibfk_2 FOREIGN KEY (partie_corps_id) REFERENCES partie_corps (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE customer ADD CONSTRAINT FK_81398E09A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('DROP INDEX `PRIMARY` ON workout_exercises');
        $this->addSql('ALTER TABLE workout_exercises ADD repetition INT DEFAULT NULL, ADD serie INT DEFAULT NULL, CHANGE workout_id workout_id BIGINT UNSIGNED NOT NULL, CHANGE exercise_id exercise_id BIGINT UNSIGNED NOT NULL');
        $this->addSql('CREATE INDEX IDX_2D7B2EC5A6CCCFC9 ON workout_exercises (workout_id)');
        $this->addSql('ALTER TABLE workout_exercises ADD PRIMARY KEY (workout_id, exercise_id)');
        $this->addSql('ALTER TABLE workout_exercises RENAME INDEX idx_2d7b2ec5e934951a TO workout_exercise_ibfk_2');
        $this->addSql('ALTER TABLE exercises DROP FOREIGN KEY FK_FA14991A6CCCFC9');
        $this->addSql('DROP INDEX IDX_FA14991A6CCCFC9 ON exercises');
        $this->addSql('ALTER TABLE exercises ADD cible TEXT NOT NULL, CHANGE id id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL, CHANGE description description TEXT NOT NULL, CHANGE created_at created_at DATETIME DEFAULT NULL, CHANGE updated_at updated_at DATETIME DEFAULT NULL, CHANGE partie partie VARCHAR(171) NOT NULL');
        $this->addSql('ALTER TABLE workout ADD cible VARCHAR(255) NOT NULL, ADD created_at DATETIME DEFAULT NULL, ADD updated_at DATETIME DEFAULT NULL, CHANGE id id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL, CHANGE nom nom VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE user ADD coach_id INT DEFAULT NULL, ADD age INT DEFAULT NULL, ADD kilos INT DEFAULT NULL, ADD calories INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D6493C105691 FOREIGN KEY (coach_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_8D93D6493C105691 ON user (coach_id)');
        $this->addSql('ALTER TABLE partie_corps CHANGE id id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL, CHANGE id_exercise id_exercise BIGINT UNSIGNED NOT NULL, CHANGE nom nom VARCHAR(171) NOT NULL');
        $this->addSql('ALTER TABLE partie_corps RENAME INDEX idx_7655a469fe013989 TO id_exercise');
    }
}
