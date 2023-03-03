<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230303171831 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE coach_user (coach_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_EACB3553C105691 (coach_id), INDEX IDX_EACB355A76ED395 (user_id), PRIMARY KEY(coach_id, user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE coach_user ADD CONSTRAINT FK_EACB3553C105691 FOREIGN KEY (coach_id) REFERENCES coach (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE coach_user ADD CONSTRAINT FK_EACB355A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE coach DROP FOREIGN KEY FK_3F596DCCBF396750');
        $this->addSql('ALTER TABLE coach ADD email VARCHAR(180) NOT NULL, ADD roles JSON NOT NULL, ADD password VARCHAR(255) NOT NULL, ADD first_name VARCHAR(255) NOT NULL, ADD last_name VARCHAR(255) NOT NULL, CHANGE id id INT AUTO_INCREMENT NOT NULL');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_3F596DCCE7927C74 ON coach (email)');
        $this->addSql('ALTER TABLE user DROP discr');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE coach_user DROP FOREIGN KEY FK_EACB3553C105691');
        $this->addSql('ALTER TABLE coach_user DROP FOREIGN KEY FK_EACB355A76ED395');
        $this->addSql('DROP TABLE coach_user');
        $this->addSql('ALTER TABLE user ADD discr VARCHAR(255) NOT NULL');
        $this->addSql('DROP INDEX UNIQ_3F596DCCE7927C74 ON coach');
        $this->addSql('ALTER TABLE coach DROP email, DROP roles, DROP password, DROP first_name, DROP last_name, CHANGE id id INT NOT NULL');
        $this->addSql('ALTER TABLE coach ADD CONSTRAINT FK_3F596DCCBF396750 FOREIGN KEY (id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE CASCADE');
    }
}
