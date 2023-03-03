<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230303172016 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE coach_user DROP FOREIGN KEY FK_EACB3553C105691');
        $this->addSql('ALTER TABLE coach_user DROP FOREIGN KEY FK_EACB355A76ED395');
        $this->addSql('DROP TABLE coach_user');
        $this->addSql('ALTER TABLE coach DROP speciality, CHANGE id id INT AUTO_INCREMENT NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE coach_user (coach_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_EACB355A76ED395 (user_id), INDEX IDX_EACB3553C105691 (coach_id), PRIMARY KEY(coach_id, user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE coach_user ADD CONSTRAINT FK_EACB3553C105691 FOREIGN KEY (coach_id) REFERENCES coach (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE coach_user ADD CONSTRAINT FK_EACB355A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE coach ADD speciality VARCHAR(255) DEFAULT NULL, CHANGE id id INT NOT NULL');
    }
}
