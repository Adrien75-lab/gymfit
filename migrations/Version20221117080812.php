<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221117080812 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE coach_member (coach_id INT NOT NULL, member_id INT NOT NULL, INDEX IDX_AB4BB1CD3C105691 (coach_id), INDEX IDX_AB4BB1CD7597D3FE (member_id), PRIMARY KEY(coach_id, member_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE coach_member ADD CONSTRAINT FK_AB4BB1CD3C105691 FOREIGN KEY (coach_id) REFERENCES coach (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE coach_member ADD CONSTRAINT FK_AB4BB1CD7597D3FE FOREIGN KEY (member_id) REFERENCES member (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_customer DROP FOREIGN KEY FK_61B46A099395C3F3');
        $this->addSql('ALTER TABLE user_customer DROP FOREIGN KEY FK_61B46A09A76ED395');
        $this->addSql('DROP TABLE user_customer');
        $this->addSql('ALTER TABLE customer ADD user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE customer ADD CONSTRAINT FK_81398E09A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_81398E09A76ED395 ON customer (user_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user_customer (user_id INT NOT NULL, customer_id INT NOT NULL, INDEX IDX_61B46A099395C3F3 (customer_id), INDEX IDX_61B46A09A76ED395 (user_id), PRIMARY KEY(user_id, customer_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE user_customer ADD CONSTRAINT FK_61B46A099395C3F3 FOREIGN KEY (customer_id) REFERENCES customer (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_customer ADD CONSTRAINT FK_61B46A09A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE coach_member DROP FOREIGN KEY FK_AB4BB1CD3C105691');
        $this->addSql('ALTER TABLE coach_member DROP FOREIGN KEY FK_AB4BB1CD7597D3FE');
        $this->addSql('DROP TABLE coach_member');
        $this->addSql('ALTER TABLE customer DROP FOREIGN KEY FK_81398E09A76ED395');
        $this->addSql('DROP INDEX IDX_81398E09A76ED395 ON customer');
        $this->addSql('ALTER TABLE customer DROP user_id');
    }
}
