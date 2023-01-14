<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230112133713 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE member_coach DROP FOREIGN KEY FK_5D78F83F3C105691');
        $this->addSql('ALTER TABLE member_coach DROP FOREIGN KEY FK_5D78F83F7597D3FE');
        $this->addSql('ALTER TABLE coach_member DROP FOREIGN KEY FK_AB4BB1CD3C105691');
        $this->addSql('ALTER TABLE coach_member DROP FOREIGN KEY FK_AB4BB1CD7597D3FE');
        $this->addSql('DROP TABLE member_coach');
        $this->addSql('DROP TABLE coach_member');
        $this->addSql('ALTER TABLE exercises ADD CONSTRAINT FK_FA14991570430F5 FOREIGN KEY (body_parts_id) REFERENCES body_parts (id)');
        $this->addSql('CREATE INDEX IDX_FA14991570430F5 ON exercises (body_parts_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE member_coach (member_id INT NOT NULL, coach_id INT NOT NULL, INDEX IDX_5D78F83F3C105691 (coach_id), INDEX IDX_5D78F83F7597D3FE (member_id), PRIMARY KEY(member_id, coach_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE coach_member (coach_id INT NOT NULL, member_id INT NOT NULL, INDEX IDX_AB4BB1CD7597D3FE (member_id), INDEX IDX_AB4BB1CD3C105691 (coach_id), PRIMARY KEY(coach_id, member_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE member_coach ADD CONSTRAINT FK_5D78F83F3C105691 FOREIGN KEY (coach_id) REFERENCES coach (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE member_coach ADD CONSTRAINT FK_5D78F83F7597D3FE FOREIGN KEY (member_id) REFERENCES `member` (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE coach_member ADD CONSTRAINT FK_AB4BB1CD3C105691 FOREIGN KEY (coach_id) REFERENCES coach (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE coach_member ADD CONSTRAINT FK_AB4BB1CD7597D3FE FOREIGN KEY (member_id) REFERENCES `member` (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE exercises DROP FOREIGN KEY FK_FA14991570430F5');
        $this->addSql('DROP INDEX IDX_FA14991570430F5 ON exercises');
    }
}