<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230304152512 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE coach DROP INDEX IDX_3F596DCC3C105691, ADD UNIQUE INDEX UNIQ_3F596DCC3C105691 (coach_id)');
        $this->addSql('ALTER TABLE coach DROP FOREIGN KEY FK_3F596DCC3C105691');
        $this->addSql('ALTER TABLE coach DROP first_name, DROP last_name');
        $this->addSql('ALTER TABLE coach ADD CONSTRAINT FK_3F596DCC3C105691 FOREIGN KEY (coach_id) REFERENCES user (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE coach DROP INDEX UNIQ_3F596DCC3C105691, ADD INDEX IDX_3F596DCC3C105691 (coach_id)');
        $this->addSql('ALTER TABLE coach DROP FOREIGN KEY FK_3F596DCC3C105691');
        $this->addSql('ALTER TABLE coach ADD first_name VARCHAR(255) NOT NULL, ADD last_name VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE coach ADD CONSTRAINT FK_3F596DCC3C105691 FOREIGN KEY (coach_id) REFERENCES coach (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
    }
}
