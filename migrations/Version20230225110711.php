<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230225110711 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE partie_corps (id INT AUTO_INCREMENT NOT NULL, id_exercise INT NOT NULL, nom VARCHAR(255) NOT NULL, INDEX IDX_7655A469FE013989 (id_exercise), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE workout_exercises (workout_id INT NOT NULL, exercise_id INT DEFAULT NULL, INDEX IDX_2D7B2EC5E934951A (exercise_id), PRIMARY KEY(workout_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E0FB7336F0 (queue_name), INDEX IDX_75EA56E0E3BD61CE (available_at), INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE partie_corps ADD CONSTRAINT FK_7655A469FE013989 FOREIGN KEY (id_exercise) REFERENCES exercises (id)');
        $this->addSql('ALTER TABLE workout_exercises ADD CONSTRAINT FK_2D7B2EC5A6CCCFC9 FOREIGN KEY (workout_id) REFERENCES workout (id)');
        $this->addSql('ALTER TABLE workout_exercises ADD CONSTRAINT FK_2D7B2EC5E934951A FOREIGN KEY (exercise_id) REFERENCES exercises (id)');
        $this->addSql('ALTER TABLE exercises ADD workout_id INT DEFAULT NULL, ADD partie VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE exercises ADD CONSTRAINT FK_FA14991A6CCCFC9 FOREIGN KEY (workout_id) REFERENCES workout (id)');
        $this->addSql('CREATE INDEX IDX_FA14991A6CCCFC9 ON exercises (workout_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE partie_corps DROP FOREIGN KEY FK_7655A469FE013989');
        $this->addSql('ALTER TABLE workout_exercises DROP FOREIGN KEY FK_2D7B2EC5A6CCCFC9');
        $this->addSql('ALTER TABLE workout_exercises DROP FOREIGN KEY FK_2D7B2EC5E934951A');
        $this->addSql('DROP TABLE partie_corps');
        $this->addSql('DROP TABLE workout_exercises');
        $this->addSql('DROP TABLE messenger_messages');
        $this->addSql('ALTER TABLE exercises DROP FOREIGN KEY FK_FA14991A6CCCFC9');
        $this->addSql('DROP INDEX IDX_FA14991A6CCCFC9 ON exercises');
        $this->addSql('ALTER TABLE exercises DROP workout_id, DROP partie');
    }
}
