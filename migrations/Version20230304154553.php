<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230304154553 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE coach DROP FOREIGN KEY FK_3F596DCC3C105691');
        $this->addSql('DROP INDEX UNIQ_3F596DCC3C105691 ON coach');
        $this->addSql('ALTER TABLE coach DROP coach_id, DROP speciality, DROP first_name');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE coach ADD coach_id INT DEFAULT NULL, ADD speciality VARCHAR(255) DEFAULT NULL, ADD first_name VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE coach ADD CONSTRAINT FK_3F596DCC3C105691 FOREIGN KEY (coach_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_3F596DCC3C105691 ON coach (coach_id)');
    }
}
