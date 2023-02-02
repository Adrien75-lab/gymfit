<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230126111832 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE exercises DROP cible, CHANGE id id INT AUTO_INCREMENT NOT NULL, CHANGE partie partie VARCHAR(255) NOT NULL, CHANGE description description LONGTEXT NOT NULL, CHANGE created_at created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', CHANGE updated_at updated_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\'');
        $this->addSql('ALTER TABLE partie_corps DROP FOREIGN KEY partie_corps_ibfk_1');
        $this->addSql('DROP INDEX id_exercise ON partie_corps');
        $this->addSql('ALTER TABLE partie_corps CHANGE id id INT AUTO_INCREMENT NOT NULL, CHANGE id_exercise id_exercise INT NOT NULL, CHANGE nom nom VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D6493C105691');
        $this->addSql('DROP INDEX IDX_8D93D6493C105691 ON user');
        $this->addSql('ALTER TABLE user DROP coach_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE partie_corps CHANGE id id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL, CHANGE nom nom VARCHAR(171) NOT NULL, CHANGE id_exercise id_exercise BIGINT UNSIGNED NOT NULL');
        $this->addSql('ALTER TABLE partie_corps ADD CONSTRAINT partie_corps_ibfk_1 FOREIGN KEY (id_exercise) REFERENCES exercises (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX id_exercise ON partie_corps (id_exercise)');
        $this->addSql('ALTER TABLE exercises ADD cible TEXT NOT NULL, CHANGE id id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL, CHANGE description description TEXT NOT NULL, CHANGE created_at created_at DATETIME DEFAULT NULL, CHANGE updated_at updated_at DATETIME DEFAULT NULL, CHANGE partie partie VARCHAR(171) NOT NULL');
        $this->addSql('ALTER TABLE user ADD coach_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D6493C105691 FOREIGN KEY (coach_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_8D93D6493C105691 ON user (coach_id)');
    }
}
