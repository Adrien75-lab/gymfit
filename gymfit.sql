-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : db
-- Généré le : sam. 07 jan. 2023 à 10:57
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `gymfit`
--

-- --------------------------------------------------------

--
-- Structure de la table `coach`
--

CREATE TABLE `coach` (
  `id` int NOT NULL,
  `email` varchar(180) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:json)',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `coach`
--

INSERT INTO `coach` (`id`, `email`, `roles`, `password`, `first_name`, `last_name`) VALUES
(37, 'alombard@laurent.org', '[]', '$2y$13$1Jmz0BY0UQXcNEFHcWK3f.Tu4EAbVMx5.g3l0ZVLSa2skgzgFjO1q', 'Sophie', 'Lemaitre'),
(38, 'gerard.lopez@monnier.fr', '[]', '$2y$13$y5G4cIxBtEXgoC5stE88BOwoIlAh2csA4WMf4CR7PMcQnzDw0tTFu', 'Adrien', 'Test'),
(39, 'gerard48@laposte.net', '[]', '$2y$13$m6YSiDLrvk7Mor8J8whuHOVPcz7C/S7XSykcJQTiB3u8uz8hhS.CS', 'Bernard', 'Charles'),
(40, 'eugene30@hotmail.fr', '[]', '$2y$13$IBiL.xDJNnQ3LU2ZXQ38E.wUvTiEkStY.f.IuxW.027BJCcHQJh76', 'Pierre', 'Bourdon'),
(41, 'marin.auguste@launay.fr', '[]', '$2y$13$tBxhyKyr6szBht6UmFCmUeVpJpzrAqFXmNODDfbd/AmAYdysrso9C', 'Alexandre', 'Thomas'),
(42, 'arnaude08@free.fr', '[]', '$2y$13$CfsPu3FHPeMov6FHKdWAl.daFAghzeWNhxJU3mgRG7gRKzAN.4jaO', 'Sébastien', 'Goncalves'),
(43, 'jrenard@laposte.net', '[]', '$2y$13$mL3tjpsNBGzDpnznyclV9Or92ZCwu9rFowB2oX6FhlhKHIVr.5U06', 'Agathe', 'Chauvet'),
(44, 'isabelle.picard@yahoo.fr', '[]', '$2y$13$/SvhMpruOgl3hVmQxiXgv.sti43wOJAehRPaGWdjBuYAlHIoQbbHa', 'Luc', 'Lesage'),
(45, 'aime41@free.fr', '[]', '$2y$13$KVeqQL4LswlrKArBSVkjcuhJkVRVSuDV3aI5feecah3QfpYPahC7m', 'Grégoire', 'Tessier'),
(46, 'fernandes.celine@yahoo.fr', '[]', '$2y$13$GbQ/xw/mcKs4wmagqygjj.q5l0HTLl2IbiDfZDoHdmyG/Tgchp7Vm', 'Robert', 'Boucher'),
(65, 'adrichristophe@gmail.com', '[\"ROLE_COACH\"]', '$2y$13$wCwMA4N1ap9suR5l47OoSeKumUz81Q75Vvvsqz8iVHyDHwmsgFMPO', 'Adrien', 'Christophe');

-- --------------------------------------------------------

--
-- Structure de la table `coach_member`
--

CREATE TABLE `coach_member` (
  `coach_id` int NOT NULL,
  `member_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `customer`
--

CREATE TABLE `customer` (
  `id` int NOT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20221111095909', '2022-11-11 10:59:16', 93),
('DoctrineMigrations\\Version20221111100318', '2022-11-11 11:03:41', 67),
('DoctrineMigrations\\Version20221111101927', '2022-11-11 11:19:35', 975),
('DoctrineMigrations\\Version20221111102049', '2022-11-11 11:20:55', 69),
('DoctrineMigrations\\Version20221111103114', '2022-11-11 11:31:24', 167),
('DoctrineMigrations\\Version20221111103319', '2022-11-11 11:33:26', 95),
('DoctrineMigrations\\Version20221111103358', '2022-11-11 11:34:06', 116),
('DoctrineMigrations\\Version20221111104052', '2022-11-11 11:41:04', 195),
('DoctrineMigrations\\Version20221111110538', '2022-11-11 12:05:46', 374),
('DoctrineMigrations\\Version20221111180823', '2022-11-11 19:08:34', 481),
('DoctrineMigrations\\Version20221116074247', '2022-11-16 08:43:00', 280),
('DoctrineMigrations\\Version20221116074806', '2022-11-16 08:48:13', 91),
('DoctrineMigrations\\Version20221116080628', '2022-11-16 09:06:38', 1630),
('DoctrineMigrations\\Version20221116081839', '2022-11-16 09:18:47', 96),
('DoctrineMigrations\\Version20221116081926', '2022-11-16 09:19:31', 180),
('DoctrineMigrations\\Version20221116082820', '2022-11-16 09:28:28', 208),
('DoctrineMigrations\\Version20221116083017', '2022-11-16 09:30:23', 182),
('DoctrineMigrations\\Version20221116084708', '2022-11-16 09:47:15', 1282),
('DoctrineMigrations\\Version20221117080812', '2022-11-17 09:08:27', 612);

-- --------------------------------------------------------

--
-- Structure de la table `member`
--

CREATE TABLE `member` (
  `id` int NOT NULL,
  `email` varchar(180) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:json)',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `coach_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `member`
--

INSERT INTO `member` (`id`, `email`, `roles`, `password`, `first_name`, `last_name`, `coach_id`) VALUES
(273, 'zacharie46@ifrance.com', '[]', '$2y$13$9D6t/7pJRTMCjTkJg6XRyOFc5qWFQZoEgbab5NQhGg510DGS0vMT6', 'Michèle', 'Seguin', 37),
(274, 'thierry.courtois@bouygtel.fr', '[]', '$2y$13$aCiM09hptadwaSuFMUDV3ueTb/1s19INOGtxGxkoDW/sAbZ7Ua2a2', 'Laetitia', 'Bouvier', 37),
(275, 'jcordier@jacquot.com', '[]', '$2y$13$8WliW.M7KoWjAXn.wawDkOZfn8joGlSba7RSErYfuKNtMiWSqueEG', 'Michèle', 'Benard', 37),
(276, 'poirier.aimee@meunier.net', '[]', '$2y$13$NuI1jxKp/67XMp451ppiDOhZZvGsK9FWc/3xeO7pM2JD52mgOdZP6', 'Louis', 'Charles', 37),
(277, 'arnaud.thierry@roux.net', '[]', '$2y$13$cLjxuL224Vwnj/SBWNXFzuVnBDip3k9ZRnoWNexI9sKxnU90/.8HO', 'Guillaume', 'Chevallier', 37),
(278, 'fclerc@bazin.com', '[]', '$2y$13$OFpHrBChhbNSRY0BWFYBVOUqkAuYM6OEV3J.h7vaT00eSCsKwHlai', 'Patrick', 'Guyon', 37),
(279, 'bonnet.christiane@potier.fr', '[]', '$2y$13$PzT/vC7du6zlnAY8D55kxefXpp/18f9t8dAFWbyfm2nTeJzcF/Lxq', 'Nathalie', 'Joly', 37),
(280, 'albert.laetitia@boucher.fr', '[]', '$2y$13$0GUuCdBUmhbfTuS3NDUpW.hLsnjR2vT5c1oAXKHD/A0oKVstqyYG.', 'Maurice', 'Foucher', 37),
(281, 'patricia72@laposte.net', '[]', '$2y$13$vMlo7nrqDGrqE/2SCgXkIuGA2IKigHRRUEeIicbl41JsVfpWWrNiW', 'Thibault', 'Blanchet', 37),
(282, 'georges61@ifrance.com', '[]', '$2y$13$FomGtaZAv8RxantE70o.LOR0is8exnTo.rxUKcptmC/WS8GxHnO.G', 'Dominique', 'Bigot', 37),
(283, 'ollivier.helene@colas.com', '[]', '$2y$13$/OfsjC3FMt8vXuODMaBRnexoOZ17xwA/xI.EvscIjopW2sC9G8Z6.', 'Bertrand', 'Hebert', 38),
(284, 'dallard@roux.net', '[]', '$2y$13$oR/Zh93JczwfyGIgV3P8yuOZ8H.hVIkM4HM/PREIqO48sqKvCwmre', 'Paul', 'Monnier', 38),
(285, 'stephanie51@gmail.com', '[]', '$2y$13$KSOWEukOv5rTj6xILTsyq.XoRnFLutN.aTIIgyyvOC9OqGO.5Rqiu', 'Louis', 'Briand', 38),
(286, 'raymond.nicolas@ifrance.com', '[]', '$2y$13$f3t7dzXaJvw2w216S6sMmu6n1loN6HkZSEdUjqLhqS.bhhm6FjG0a', 'Renée', 'Renault', 38),
(287, 'mpelletier@langlois.net', '[]', '$2y$13$bWEPnaP1DYIu9EzaV6oN2eriI7SH1DMj7E5DqPS.6p9Ri.BGtUdUq', 'Amélie', 'Grenier', 38),
(288, 'suzanne41@tele2.fr', '[]', '$2y$13$xgz1K1KHGqgL2cTBe7MxFexJED9A78wUaKpBLVhDqx1ciyNMdk7y2', 'Alexandria', 'Bertrand', 38),
(289, 'marianne81@caron.fr', '[]', '$2y$13$kI9vJvVczMPTqbOZAt2nke7k8EWdZv1ASuO2JVDXuXGyc1kzVZjxu', 'Maurice', 'Marchand', 38),
(290, 'zgallet@millet.com', '[]', '$2y$13$chNfYPSszANwp4izWig7/eMVJEYTswJDfjqEwqiJE6xPkrJdo/uy6', 'Claire', 'Joubert', 38),
(291, 'pereira.michel@hamon.com', '[]', '$2y$13$r8GXPbmowGiHDOXssJ3v3.UmGRjDsW2qt.otkeoG.kQoWGLdPPiCS', 'Denise', 'Foucher', 39),
(292, 'dlouis@yahoo.fr', '[]', '$2y$13$YQjXVqygXVPtUokadeqvoOg6kkeVOz0kmkxNIq8Pr5Wemet63j36u', 'Diane', 'Regnier', 39),
(293, 'antoine94@leroux.net', '[]', '$2y$13$a0GB5W9DqCUO57UugId1eOCEj5N0ChAfNcot0lZxdhJ7SmOsVm6Vm', 'Franck', 'Schmitt', 39),
(294, 'zacharie27@bouygtel.fr', '[]', '$2y$13$Tt2LO/QB/AZwkl863kklIOaN5XW2yYA312WdxlCNwpwLbhCJ.CgQS', 'Théodore', 'Guillet', 39),
(295, 'honore01@sanchez.org', '[]', '$2y$13$qcOs4CWUFHXObDM2wj99ge8EgG9SWsOfdQ66eMl.TFmINeDAx6Nb6', 'Jérôme', 'Tessier', 39),
(296, 'merle.manon@lelievre.fr', '[]', '$2y$13$i1FKz/Ba8ex7rBhVR1O/kO60YA7MvhpVrkKNZ5vqLCGIFE3No47ye', 'Augustin', 'Perrin', 39),
(297, 'oleroux@moreno.fr', '[]', '$2y$13$stCiKs9xuqjEJag3KoaAXe.M2GTWjJA9pX3ERK./7QHu4a96Ye9v6', 'Simone', 'Dubois', 40),
(298, 'philippine25@club-internet.fr', '[]', '$2y$13$wO00EEjWuRELBdLJCbLDRO7md8mu9Jpt9VmNAR8uku8xhHHYEuIz.', 'Pauline', 'Pierre', 40),
(299, 'william96@sfr.fr', '[]', '$2y$13$wbO8Byo/BXQh0upkGwyBfOMsLY5OIvLk12bkJAWvYYIUS5HYqjPSG', 'Monique', 'Carre', 40),
(300, 'goncalves.william@peron.com', '[]', '$2y$13$SxXqBDUp8h5RNu8E9MyW6OrUdSSlrbfE3AT1iqwd4fcrmClDKXFXW', 'Nathalie', 'Carlier', 40),
(301, 'lmoreau@hotmail.fr', '[]', '$2y$13$5WJrx7SsClPkv5UfsUyqd.gaprUTEBs4PbPPV4T44g4HpXXer6.46', 'Alain', 'Mary', 40),
(302, 'duval.edith@hotmail.fr', '[]', '$2y$13$FjjLMCUX5U5eZfH54eWWD.KOx37MlkAtPTP55EQZJMwRVTQ3TsY1a', 'Thibault', 'Gauthier', 40),
(303, 'agathe.brun@orange.fr', '[]', '$2y$13$dPc6OpnB5xJbUl6jP8pzS.SFqLWIF111FLzwEOXz4IO5VqslWSBI.', 'Danielle', 'Fabre', 40),
(304, 'sophie24@yahoo.fr', '[]', '$2y$13$amG3.XdP/j11lAa/tVoIuOWIhgD6SOUXtDt9SPBfJXQy.b0syWYXa', 'Célina', 'Gaudin', 40),
(305, 'lebrun.alex@wanadoo.fr', '[]', '$2y$13$2B7ERlZ35a8XRSRg.JtngOKKk.nnL4D7j5kT00AvgObU0fXLSZkJW', 'Jacques', 'Marechal', 40),
(306, 'dasilva.pauline@dubois.fr', '[]', '$2y$13$inyzKhX9EGCcDl.bJEK8WeYOJRKn2rqQrv7ajAqiwqLzKQSXYdpay', 'Luc', 'Marin', 40),
(307, 'qjean@weiss.com', '[]', '$2y$13$0.sL/DfbuhJey5F3mXW6rukkTndGmH.CkEJk1MnHHfEKC1FTXfAcC', 'Robert', 'Girard', 41),
(308, 'nmoreno@laposte.net', '[]', '$2y$13$cEbAwzCdk9NLhNJ9J47EuePnVS3CnAeLsm82sf7a5YU2IicCaeipm', 'Nicolas', 'Dupuy', 41),
(309, 'ctecher@perret.fr', '[]', '$2y$13$NwDgXzGOeI7U.lV.axbEj.pAjlzC5c4bp3R4.Zd2Qf6Egy/wCFqPa', 'Célina', 'Regnier', 41),
(310, 'francois.susan@dbmail.com', '[]', '$2y$13$6I5YdB4Ug.JuMRxBOgbR6e7n/5ltrmiuFZ7fUPd5ZPOPqLrYzCCTu', 'Martine', 'Riou', 41),
(311, 'valerie.fournier@durand.fr', '[]', '$2y$13$AUdRtHKC0qGoJPkYKIkF/u4W.skdT10oNlFM4Lvftgn7Yq84SJNx.', 'Louis', 'Schneider', 41),
(312, 'ypineau@rousset.net', '[]', '$2y$13$mSD4PjqcwNolo.dBTrpsO.ACVdm9NlBXepbfLY2m0.QuQdiZ2PLPe', 'Luc', 'Gregoire', 41),
(313, 'delattre.alexandrie@noos.fr', '[]', '$2y$13$/zzxNN8SyuOTzwjdIApRDuzM1zkZcErSERaOj1lQ.4RQTduXfahy2', 'Théodore', 'Lemonnier', 41),
(314, 'fberthelot@prevost.fr', '[]', '$2y$13$YZW4/Vk/52DCYYKK3LD3F.TcE0gZ359Dbo/Xr850fC9lQpG6Sou1K', 'Henri', 'Hoareau', 41),
(315, 'gomes.tristan@club-internet.fr', '[]', '$2y$13$ppk.Mw.e.MvA/9BGorJ4jesExfk08dGQED2pv.flFDkh.m6k26x.m', 'Roger', 'Begue', 41),
(316, 'gmenard@laposte.net', '[]', '$2y$13$vIB8KYQbh6enupV/4JZ0xOM2ZVJp6aeuii7p1kxHyHvWlQ3X5mU9m', 'Matthieu', 'Ferrand', 42),
(317, 'riou.margaux@vincent.fr', '[]', '$2y$13$rNHvHPf6W34gutj5foUJEeVYxBQygpcYsnPUnkJTF7SUFeSRtHEyC', 'Richard', 'Hebert', 42),
(318, 'mroche@club-internet.fr', '[]', '$2y$13$KciSUVInoN8bo.Du2mySkeHcel2RisO7IOB9J/0mzaGS7eRMObHVm', 'Pénélope', 'Roy', 42),
(319, 'marie.ollivier@fischer.fr', '[]', '$2y$13$p3QiUgcTxHeIm.GLUCkgteTYO1KhfFXH3HE5BmU8EJbYVcmBIZPXS', 'Aurore', 'Loiseau', 42),
(320, 'jacqueline.normand@free.fr', '[]', '$2y$13$XQEg73yAC3c18zIF5JxyYe9JDhQN3R.q7zNfnj2uMr4tvpciGW1la', 'Alfred', 'Gilbert', 42),
(321, 'ebousquet@giraud.com', '[]', '$2y$13$TzTvqL3fHV0yVJWPrsUEj.GDH9kWR7s2Xq6JSgF6eflaib4W1X6rG', 'Michel', 'Allain', 42),
(322, 'mathieu.noemi@live.com', '[]', '$2y$13$YL.0bJimayEi5Rqu2xadg.1l4DrO.QRMqpUb/7MZKpfmrZYh8kEnO', 'Margaux', 'Dumont', 42),
(323, 'levy.philippine@dbmail.com', '[]', '$2y$13$CCb6WE8zLnp03MMH5SuIMOEo7HgFnHG/SGOL0.W5ln5QDw0C6r2Jq', 'Olivie', 'Blot', 42),
(324, 'emile.delattre@toussaint.com', '[]', '$2y$13$vjQ9yfWvruarEshLxilgIOO.A88TiFAWqIZfI9d7HJ8otjviCz2Ji', 'Paul', 'Descamps', 42),
(325, 'ipierre@simon.fr', '[]', '$2y$13$XkqKcGujsgZYMLazkIyI/.cWm6eHx9yhOhHjOZH3BLjn1W/3DVgPS', 'Marcelle', 'Barbe', 42),
(326, 'egeorges@perrin.fr', '[]', '$2y$13$BqNhFiIL5qTqosKhI6Nqn.281C07xEVDaMHJc4qiGa2sZF0/FLhqW', 'Thibaut', 'Leblanc', 42),
(327, 'bertrand.guichard@duval.fr', '[]', '$2y$13$ZlAfGtxsJRqBwqIFAXhcH.A/Z.PH/NoDHnebZaKGWx9TzSwqiWzbS', 'Jeannine', 'Rousseau', 42),
(328, 'kklein@gillet.fr', '[]', '$2y$13$MKvIWKkPxM1siGqvD3WpAeZsS75YO2PNExk47l4/PDknt5Hi77Q1a', 'Antoine', 'Garcia', 43),
(329, 'jourdan.antoinette@free.fr', '[]', '$2y$13$u/XkD9shZe0VyR4PHIj8HuVuuHEn08lbhBHGTwj9AQkvIKNvLgWiy', 'Capucine', 'Francois', 43),
(330, 'zoe88@voila.fr', '[]', '$2y$13$73bL6mf9LOX5IB/uDkolWujDV1UMLUooR8sfW0Heng5Ps1auHny7e', 'Louise', 'De Sousa', 43),
(331, 'theophile.devaux@yahoo.fr', '[]', '$2y$13$SwyhRX2kskahHn07W0vo4uxVL9kTV2Eo64V6q3FI5YNfXTzDcdsaC', 'Alexandre', 'Legrand', 43),
(332, 'jean.fischer@noos.fr', '[]', '$2y$13$mUVjRSKRe9QyGjeZN7LJCu3bpGbLhjR9Zic47GJMFz9nUT76EEyZa', 'Vincent', 'Charles', 43),
(333, 'renee65@gmail.com', '[]', '$2y$13$JCkKtjQUBMIRvmmgmmIBkuGVHZu3bfYwOgpRTSM74Q6FXZfUyYx4a', 'Patrick', 'Verdier', 43),
(334, 'eblanc@hoarau.fr', '[]', '$2y$13$lE0kH10kkQHWMMbEpW/VPeCnoSEqWHEhSF58/yiLznF.Wtr/9LWq.', 'Susan', 'Joly', 43),
(335, 'rocher.theophile@hotmail.fr', '[]', '$2y$13$GT5ImgFisTwI6TBypa2etukvTjQsDAYM0WeIShbXRaVOzfP3tbOGa', 'Marthe', 'Charles', 43),
(336, 'eollivier@lemaire.net', '[]', '$2y$13$.4ec6WFy1X0wtL5xeh8P7OPnDDZAKfUF0Kw72Ie8qQKxxAD1seqPi', 'Lucas', 'Allain', 43),
(337, 'eleonore62@tele2.fr', '[]', '$2y$13$BG7opCv9pPq.LJa835bki.YoQ3..NmREnZSnVh85whqoWoKVlbICa', 'Suzanne', 'Durand', 43),
(338, 'etienne.bertin@bouygtel.fr', '[]', '$2y$13$Ss7wbifQUgSW0mPTvqaBzuAwlu93rlKsxhh06l6ht0kuud.oR27eK', 'Franck', 'Nguyen', 43),
(339, 'alexandria14@lelievre.org', '[]', '$2y$13$MDsBEaHW/45TWaCJx3plH.NUzQ2ujRW9cJvYsXiv5yJDgRX8hzAMa', 'Constance', 'Daniel', 43),
(340, 'amelie.lefevre@lefort.org', '[]', '$2y$13$VKng28dE6DenVFeJFZMRm.6zK1acYwbSpEeiJQap0n4bQAT7rxz4q', 'Corinne', 'Hernandez', 43),
(341, 'isaac33@tele2.fr', '[]', '$2y$13$WTGVdutexEw32S.NXxOO3.uIzfsi2C72Pyn4xLFiuwX4wjKnYH2Zm', 'Océane', 'Martin', 44),
(342, 'peron.anastasie@live.com', '[]', '$2y$13$Fl8baJr8aPWdA12rR3ckBefs3k7MwXC0RwBH3r3vKgbVZLqx1RICm', 'Julie', 'Joly', 44),
(343, 'eric.caron@louis.org', '[]', '$2y$13$FNQYms07YSKE2R53C9kfMuh1ms1U1WA5nF39qdQXbvx9PM0pCKr8q', 'Pierre', 'Delmas', 44),
(344, 'cchauvin@rodrigues.fr', '[]', '$2y$13$oBV/QLHoqyY2tpslcfADX.exjlXVkqwHc7IeMGlzmprwWA2cHC78y', 'Isabelle', 'Delattre', 44),
(345, 'hortense.ribeiro@alexandre.com', '[]', '$2y$13$b5nPlPKkc.IZ84d16x0zSed4Rd5qs23EAPn2Q4mavxar3qnRIRzEO', 'Émile', 'Guillaume', 44),
(346, 'anouk52@noos.fr', '[]', '$2y$13$bouBmDc2V7xSHfABDSFsOuqalza5MaltopySTUYGW00h1mvdVdhla', 'Marie', 'Perrin', 44),
(347, 'tristan.deoliveira@diallo.fr', '[]', '$2y$13$0J7AMz33614rMqNCP.EKteb9luizRJyKl4iomOUMZLo.MTVRVYAa6', 'Nathalie', 'Martin', 44),
(348, 'lgrondin@boulay.fr', '[]', '$2y$13$hPGv5J13pTWLc.fmfYGCVeon0SwOx.vULgdq52uTFxozv1NcTvpGa', 'Marguerite', 'Ribeiro', 44),
(349, 'marcel97@club-internet.fr', '[]', '$2y$13$lp49nIx5ZgUw68oqzvGvMOjxRUNhdRzaz7t6Qb8lpNuuIjKGc7x0u', 'Émile', 'Sauvage', 44),
(350, 'sbouvet@dbmail.com', '[]', '$2y$13$iaVbJebG4/CJfkrp9B5QCOHiUsidRBOp.glwp.bzsaw0RZKsFTYMK', 'Laure', 'Begue', 44),
(351, 'noemi70@philippe.com', '[]', '$2y$13$Ly02RmhoxWjjz7tsMbGfi.RMDUPdBFUlPTJIChlHp1yR8gwuRoZfK', 'Anaïs', 'Blanchet', 45),
(352, 'legall.nicole@roy.com', '[]', '$2y$13$ZxRcCmXJ9.6E5zWxQ.0/veBr1OsYOoE5Vs.bv1nSe4jSJED0wn8oC', 'Victor', 'Loiseau', 45),
(353, 'suzanne54@orange.fr', '[]', '$2y$13$Uf1lQVmffVrG0kHuBpOSDurREBNaugwsJNtri2MlIT5i77ksezPt2', 'Marguerite', 'Laporte', 45),
(354, 'alexandre70@wanadoo.fr', '[]', '$2y$13$AC/liKgsT6MqdjRuBminlejNMZ/7CdK.xC2Hg8bPsYYbHTQRZtISW', 'Julien', 'Buisson', 45),
(355, 'aime37@wanadoo.fr', '[]', '$2y$13$E81MZVwZmIAVlevvjbOXperKxs/1mMXChK6EBt68/9mL682Mz9jM.', 'Alfred', 'Auger', 45),
(356, 'hpierre@samson.com', '[]', '$2y$13$UUvJVlUYgMMn2kaiwqESPO3ZTCTSY7LTWAZRnNozqOT5lQS16ACR2', 'Éric', 'Guillaume', 45),
(357, 'constance.thibault@aubert.com', '[]', '$2y$13$A/yzI.KU1BXDh/PAYMzi1uQEtK1bLdX5gmpid7krCl7drxp8ByZlW', 'Émilie', 'Couturier', 45),
(358, 'chantal16@delattre.com', '[]', '$2y$13$LNTXbuYUr1n6FkknURKaWeL9fpwbqFpIOV6vH8VImY.G16UawWKG6', 'Benjamin', 'Moreau', 45),
(359, 'tristan.louis@clement.com', '[]', '$2y$13$Mwi6RtIfIO.jHZ.1y7Yiyut4BcT135ipmQz68wwPNf7OOMvAJO3nG', 'Joseph', 'Lopez', 45),
(360, 'martine07@club-internet.fr', '[]', '$2y$13$eMLtxjXCf7x7XlRgZoPdjeUQagrzJi36VoOIh7IzOee.Q6Qa9jm5C', 'Michel', 'Fontaine', 45),
(361, 'gillet.guy@verdier.fr', '[]', '$2y$13$3.U7DpGrvz.M1xozbpViLOX5LssPvLM2vaDVEMdyZU53ZkHpchvmu', 'Colette', 'Poirier', 46),
(362, 'tristan34@laposte.net', '[]', '$2y$13$DC5wxRpuXBhp0wzefCE28uyBCaH7wkn6t6Pn1Ksb9Cf97g0532Qaq', 'Frédéric', 'Roux', 46),
(363, 'renard.noel@payet.com', '[]', '$2y$13$6xrN7e9Y7o3YW.elHpbtDe5rEsKjnW0uZFHDCXJh41BZulrzC1EV2', 'Simone', 'De Sousa', 46),
(364, 'jlaurent@lesage.fr', '[]', '$2y$13$TjeKu5dMTkXJpxfAwWiaR.DwEy.3If38.ufPzUDgBp2Qf4dSB.fNa', 'Nicolas', 'Techer', 46),
(365, 'itraore@boucher.org', '[]', '$2y$13$FHbj2RKFOggeXHojCtNFbuySdvWqcHGdCgoDRFm18qFIA5jO8A1My', 'Marc', 'Francois', 46),
(366, 'adrichristophe@gmail.com', '[]', '$2y$13$L7Tl74s4.rWo8cMFVj0sOOoPqWmabsYXJdHt4612TX1uZbFk9SHxG', 'Adrien', 'Christophe', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `messenger_messages`
--

CREATE TABLE `messenger_messages` (
  `id` bigint NOT NULL,
  `body` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `headers` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue_name` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `available_at` datetime NOT NULL,
  `delivered_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `roles` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:json)',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(180) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `coach`
--
ALTER TABLE `coach`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_3F596DCCE7927C74` (`email`);

--
-- Index pour la table `coach_member`
--
ALTER TABLE `coach_member`
  ADD PRIMARY KEY (`coach_id`,`member_id`),
  ADD KEY `IDX_AB4BB1CD3C105691` (`coach_id`),
  ADD KEY `IDX_AB4BB1CD7597D3FE` (`member_id`);

--
-- Index pour la table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_81398E09A76ED395` (`user_id`);

--
-- Index pour la table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_70E4FA78E7927C74` (`email`),
  ADD KEY `IDX_70E4FA783C105691` (`coach_id`);

--
-- Index pour la table `messenger_messages`
--
ALTER TABLE `messenger_messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_75EA56E0FB7336F0` (`queue_name`),
  ADD KEY `IDX_75EA56E0E3BD61CE` (`available_at`),
  ADD KEY `IDX_75EA56E016BA31DB` (`delivered_at`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `coach`
--
ALTER TABLE `coach`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- AUTO_INCREMENT pour la table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT pour la table `member`
--
ALTER TABLE `member`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=367;

--
-- AUTO_INCREMENT pour la table `messenger_messages`
--
ALTER TABLE `messenger_messages`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `coach_member`
--
ALTER TABLE `coach_member`
  ADD CONSTRAINT `FK_AB4BB1CD3C105691` FOREIGN KEY (`coach_id`) REFERENCES `coach` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_AB4BB1CD7597D3FE` FOREIGN KEY (`member_id`) REFERENCES `member` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `FK_81398E09A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `member`
--
ALTER TABLE `member`
  ADD CONSTRAINT `FK_70E4FA783C105691` FOREIGN KEY (`coach_id`) REFERENCES `coach` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
