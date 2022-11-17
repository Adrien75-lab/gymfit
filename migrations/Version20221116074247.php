<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221116074247 extends AbstractMigration
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
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE coach_member DROP FOREIGN KEY FK_AB4BB1CD3C105691');
        $this->addSql('ALTER TABLE coach_member DROP FOREIGN KEY FK_AB4BB1CD7597D3FE');
        $this->addSql('DROP TABLE coach_member');
    }
}
