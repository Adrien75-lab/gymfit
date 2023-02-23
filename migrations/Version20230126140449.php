<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230126140449 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE workout (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE exercises ADD workout_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE exercises ADD CONSTRAINT FK_FA14991A6CCCFC9 FOREIGN KEY (workout_id) REFERENCES workout (id)');
        $this->addSql('CREATE INDEX IDX_FA14991A6CCCFC9 ON exercises (workout_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE exercises DROP FOREIGN KEY FK_FA14991A6CCCFC9');
        $this->addSql('DROP TABLE workout');
        $this->addSql('DROP INDEX IDX_FA14991A6CCCFC9 ON exercises');
        $this->addSql('ALTER TABLE exercises DROP workout_id');
    }
}
