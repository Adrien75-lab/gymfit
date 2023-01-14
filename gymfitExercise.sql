-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 10 jan. 2023 à 10:37
-- Version du serveur : 10.4.22-MariaDB
-- Version de PHP : 7.4.28

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
  `id` int(11) NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` longtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:json)',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `coach`
--

INSERT INTO `coach` (`id`, `email`, `roles`, `password`, `first_name`, `last_name`) VALUES
(103, 'constance97@martel.com', '[\"ROLE_COACH\"]', '$2y$13$Y50X0oDRaPtUtCSIpL5zjeceunFg.R6isxsmYHkK.DV7Zn826UOYC', 'Madeleine', 'Rousset'),
(104, 'bverdier@noos.fr', '[\"ROLE_COACH\"]', '$2y$13$4vN4xlen94yfU9Y7jfgmVOXfc9ckKcjJNYIFmwrRu2zu/0bRh6S06', 'Anaïs', 'Blin'),
(105, 'pierre.marcelle@laposte.net', '[\"ROLE_COACH\"]', '$2y$13$7b3VTZ0KqCVxSa/3j5NejOaxdHm5Z9ytjDB8CaSSu5AeKnJLsU7Cm', 'Rémy', 'Briand'),
(106, 'ttecher@yahoo.fr', '[\"ROLE_COACH\"]', '$2y$13$6rGXZV.QTNcx8bBj04sETeIm7fYJrevuV/pj.i2jlE0hvKiiGF82O', 'Bernadette', 'Torres'),
(107, 'agnes70@wanadoo.fr', '[\"ROLE_COACH\"]', '$2y$13$W0TkGJksrPyzALhgAHgZUuQT3nn8BxN207I8WOoIvLQEV.yDCTCyC', 'Marc', 'Vallee'),
(108, 'victoire.costa@texier.com', '[\"ROLE_COACH\"]', '$2y$13$kD7td2n9aUSwAr6WWgzjGODpvMHDbB1Tj7krMj0pZenTloFyfFeY2', 'Raymond', 'Maillard'),
(109, 'vletellier@tiscali.fr', '[\"ROLE_COACH\"]', '$2y$13$IcYBv4wNzmhA5/eLROpfJeCCLtDK8erIbbdkPzNjD3Lfhbi55.M22', 'Bertrand', 'Thomas'),
(110, 'noel35@sauvage.fr', '[\"ROLE_COACH\"]', '$2y$13$KVr84wCHcw5D1gxgN59MzOf8SyLWF4LdZfhL27OTB8TxGwqa.BvPO', 'Gérard', 'Remy'),
(111, 'alex.meyer@monnier.fr', '[\"ROLE_COACH\"]', '$2y$13$ybfW4wqRQz/pbf.EMUExx.UyMgLawNh4LBObWIoBbyFSzsLHX4qCe', 'Auguste', 'Barthelemy'),
(112, 'mmorel@caron.org', '[\"ROLE_COACH\"]', '$2y$13$8aUi0p//FitQeGWOsGnAweJ0lRdbAeYdScRb/Yyc32FKwPZfg.lm.', 'Gilbert', 'Diallo');

-- --------------------------------------------------------

--
-- Structure de la table `coach_member`
--

CREATE TABLE `coach_member` (
  `coach_id` int(11) NOT NULL,
  `member_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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
-- Structure de la table `exercises`
--

CREATE TABLE `exercises` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nom` varchar(171) COLLATE utf8_unicode_ci NOT NULL,
  `partie` varchar(171) COLLATE utf8_unicode_ci NOT NULL,
  `cible` text COLLATE utf8_unicode_ci NOT NULL,
  `equipement` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `exercises`
--

INSERT INTO `exercises` (`id`, `nom`, `partie`, `cible`, `equipement`, `description`, `created_at`, `updated_at`) VALUES
(1, 'curls en supination', 'bras', '[\"biceps\",\"deltoïdes\"]', '[\"haltère\",\"barre\"]', 'Saisissez l\'haltère d\'une main, alors que celle-ci se trouve en position neutre. En effectuant une ortation du poignet pour amener le pouce vers l\'extérieur, pliez le bras à la force du biceps.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(2, 'hammer curl', 'bras', '[\"biceps\",\"avant-bras\"]', '\"haltère\"', 'Saisissez l\'haltère d\'une main, alors que celle-ci se trouve en position neutre (pouce vers le haut, c\'est à dire en prise marteau, d\'ou le nom de l\'exercie). Pliez le bras en gardant toujours le pouce vers le haut. Montez l\'haltère le plus haut possible.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(3, 'stretch curls', 'bras', '\"biceps\"', '\"élastique\"', 'Debout, le pied droit en arrière, marchez sur l\'élastique afin de le tendre à votre convenance pour lui donner la résistance appropriée. Saisissez-le avec votre main droite. A la force du biceps, ramenez l\'avant-bras sur le bras en conservant la main en supination (auriculaire vers le corps).', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(4, 'curls sur banc incliné', 'bras', '[\"biceps\",\"avant-bras\"]', '\"haltère\"', 'Haltères en mains, allongez-vous sur un banc incliné le plus horizontal possible. A la force du biceps, ramenez l\'avant-bras sur le bras. Ne levez que légèrement le coude avant de redescendre.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(5, 'curls au pupitre \"Larry Scott\"', 'bras', '[\"biceps\",\"avant-bras\"]', '[\"haltère\",\"barre\"]', 'Assis, saississez une barre ou les haltères, main en supination (pouces à l\'extérieur). Placez les bras sur le pupitre. Remontez la charge à la force du biceps.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(6, 'brachial curls sur poulie basse', 'bras', '\"biceps\"', '\"poulie\"', 'Allongez-vous latéralement, côté droit sur un tapis de sol dans le prolongement de la poulie, tête vers la machine. Tendez le bras droit vers la poulie, puis fléchissez le bras pour amener la main à la base du cou. Puis retourner lentement dans la position initiale.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(7, 'biceps, bras en croix, à la poulie haute', 'bras', '\"biceps\"', '\"poulie\"', 'Debout au centre de la poulie vis-à-vis, bras écartés, poignées de la poulie haute saisies mains en supination: \n- inspirer et fléchir les avant-bras; \n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(8, 'power biceps curl à la poulie basse', 'bras', '\"biceps\"', '\"poulie\"', 'La poulie est derrière vous, la poignée réglée légèrement en hauteur afin que le levier formée avec la main soit agréable, sans avoir à donner d\'à-coup. Bloquez votre coude sur l\'appui dorsal de la machine ou un banc. Penchez -vous en avant pour rammaser la poignée et remettez-vous en place. En prennant appui sur le coude, à la force du poids 1 seconde dans la position de contraction avant de redescendre, puis répétez.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(9, 'extension des poignets à la barre', 'avant-bras', '\"avant-bras\"', '\"barre\"', 'Assis, les avants-bras reposant sur les cuisses ou sur un banc, la barre tenue mains en pronation, les poignets en flexion passive: \n- effectuer une extension des poignets.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(10, 'flexion des poignets à la barre', 'avant-bras', '\"avant-bras\"', '\"barre\"', 'Assis, les avants-bras reposant sur les cuisses ou sur un banc, la barre tenue mains en supination( c\'est à dire les pouces vers l\'extérieur), les poignets en flexion passive: \n- inspirer et fléchir les poignets.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(11, 'flexion des avant-bras à la barre, mains en pronation', 'avant-bras', '[\"avant-bras\",\"biceps\"]', '\"barre\"', 'Debout, jambes légèrement écartées, bras tendus, maisn en pronation (c\'est-à-dire pouces vers l\'intérieur): \n- inspirer et fléchir les avnts-bras, expirer en fin de mouvement; \n- revenir à la position de départ en contrôant la descente de la barre.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(12, 'triceps à la barre haute, mains en pronation', 'bras', '\"triceps\"', '\"poulie\"', 'Debout, face à l\'appareil, les mains sur la poignée coudes le long du corps: \n- inspirer et effectuer une extension des avant-bras en veillant à ne pas écarter les coudes du corps ;\n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(13, 'triceps à la poulie haute, mains en supination', 'bras', '[\"triceps\",\"avant-bras\"]', '\"poulie\"', 'Debout, face à l\'appareil, les bras le long du corps, les coudes fléchis, les mains sur les poignées:\r\n- inspirer et étendre les avant-bras en veillant à ne pas écarter les coudes du corps ;\r\n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(14, 'extension alternée des avant-bras à la poulie haute, main en supination', 'bras', '\"triceps\"', '\"poulie\"', 'Debout, face à l\'appareil, la poignée saisie en supination : \n- inspirer et effectuer une extension de l\'avant-bras; \n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(15, 'triceps à la poulie arrière atlas', 'bras', '\"triceps\"', '\"poulie\"', 'Assis sur la machine, dos à la poulie, la poignée saisie mains en pronation, les bras un peu plus haut que l\'horizontale, les coudes fléchis : \n- inspirer et effectuer une extension des avant-bras en veillant à ne pas trop écarter les coudes ; \n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(16, 'extension des avant-bras à la barre, couché sur un banc', 'bras', '\"triceps\"', '\"barre\"', 'Allongé sur un banc horizontal, la barre prise en pronation, les bras verticaux : \n- inspirer et effectuer une flexion des avant-bras, en veillant à ne pas trop écarter les coudes, pour descendre la barre au niveau du front ou derrière la tête; \n- revenir à la position de départ et expirer en fin d\'effort.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(17, 'tension des avant-bras, couché avec haltères', 'bras', '\"triceps\"', '\"haltère\"', 'Allongé sur un plan horizontal avec un haltère dans chaque main, bras verticaux: \n- inspirer et fléchir les avant-bras en contrôlant le mouvement; \n- revenir à la position de départ et expirer en fin d\'effort.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(18, 'extension vertical alternée des bras avec haltères', 'bras', '\"triceps\"', '\"haltère\"', 'Assis ou debout, l\'haltère saisi d\'une main, départ bras vertical : \n- inspirer et effectuer une flexion de l\'avant-bras pour amener l\'haltère derrière la nuque ; \n- revenir à la position de départ et expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(19, 'extension alternée des avant-bras avec un haltère, buste penché en avant', 'bras', '\"triceps\"', '\"haltère\"', 'Debout, les jambes légèrement fléchies, le buste penché en avant en conservant le dos droit. Le bras à l\'horizontale, le long du corps, coude fléchi:\n- inspirer et effectuer une extension de l\'avant-bras ;\n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(20, 'extension des avant-bras, assis, un haltère court tenu à deux mains', 'bras', '\"triceps\"', '\"haltère\"', 'Assis, l\'haltère saisi à deux mains derrière la nuque : \n- inspirer et effectuer une extension des avant-bras ; \n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(21, 'extension des avant-bras, assis à la barre', 'bras', '\"triceps\"', '\"haltère\"', 'Assis ou debout, barre tenue les mains en pronation, bras verticaux:\r\n- inspirer et effectuer une flexion des avant-bras pour amener la barre derrière la nuque ;\r\n- revenir à la position de départ et expirer en fin d\'extension.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(22, 'dips ou repulsion entre deux bancs', 'bras', '[\"triceps\",\"pectauraux\"]', '\"poid du corps\"', 'les mains sur le bord d\'un banc, les pieds reposant sur un autre banc, le corps dans le vide:\r\n- inspirer et effectuer une flexion des avant-bras suivie d\'une répulsion ou extension des avant-bras;\r\n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(23, 'développé derrière de la nuque à la barre', 'épaules', '[\"deltoïdes\",\"triceps\"]', '\"barre\"', 'Assis, le dos bien droit, la barre tenue derrière la nuque, saisie mains en pronation :\r\n- inspirer et développer la barre verticalement sans trop cambrer le dos ;\r\n- expirer en fin d\'effort.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(24, 'développé \"devant\" à la barre', 'épaules', '[\"deltoïdes\",\"triceps\"]', '\"barre\"', 'Assis, dos bien droit, la barre tenue mains en pronation, reposant sur le haut de la poitrine:\r\n-inspirer et développer la barre verticalement ;\r\n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(25, 'développé assis avec haltères', 'épaules', '[\"deltoïdes\",\"triceps\"]', '\"haltère\"', 'Assis sur un banc, le dos bien droit, les haltères au niveau des épaules, tenus mains en pronation (pouces vers l\'intérieur):\n- inspirer et développer jusqu\'à tendre les bras verticalement;\n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(26, 'développé \"devant\" avec rotation des poignets', 'épaules', '[\"deltoïdes\",\"triceps\"]', '\"haltère\"', 'Assis sur un banc, le dos bien droit, les bras fléchis, les coudes vers l\'avant, les haltères saisis mains en supination (c\'est-à-dire les pouces vers l\'extérieur) et maintenus au niveau des épaules: \n- inspirer et développer jusqu\'à tendre les bras verticalement en effectuant une rotation des poignets de 90° pour amener les mains en pronation (c\'est-à-dire les pouces vers l\'intérieur) ; \n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(27, 'élévation latérale, buste penchée en avant', 'épaules', '[\"deltoïdes\",\"trapèze haut\",\"trapèze bas\"]', '\"haltère\"', 'Debout, les jambes écartées et légèrement fléchies, le buste penché en avant en conservant le dos plat, les bras pendants, haltères en mains, coudes légèrement fléchis : \n- inspirer et élever les bras jusqu\'à l\'horizontale ; \n- expirer en fin d\'effort.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(28, 'élévation latérale des bras avec haltères', 'épaules', '[\"deltoïdes\",\"trapèze haut\"]', '\"haltère\"', 'Debout, jambes légèrement écartées, le dos bien droit, les bras le long du corps, un haltère dans chaque main : \n- élever les bras jusqu\'à l\'horizontale, coudes un peu fléchis ; \n- revenir à la position de départ', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(29, 'élévation alternée \"en avant\" ou frontal avec haltères', 'épaules', '\"deltoïdes\"', '\"haltère\"', 'Debout, les pieds légèrement écartés, les haltères pris en pronation reposant sur les cuisses ou légèrement sur les côtés : \n- inspirer et effectuer une élévation alternée des bras en avant (ou antépulsion) jusqu\'au niveau des yeux ; \n- expirer en fin d\'effort.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(30, 'élévation latérale, couché sur le côté', 'épaules', '\"deltoïdes\"', '\"haltère\"', 'Allongé sur le côté, au sol ou sur un banc, un haltère en main pris en pronation: \n- inspirer et élever le bras jusqu\'à la verticale ; jusqu\'à une intensité maximale en fin de mouvement (quand les bras arrivent à l\'horizontale); \n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(31, 'élévation \"en avant\" alternée à la poulie basse', 'épaules', '\"deltoïdes\"', '\"poulie\"', 'Debout, les pieds légèrement écartés, les bras le long du corps, la poignée en main, prise en pronation: \n- inspirer et élever en avant le bras jusqu\'au niveau des yeux; \n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(32, 'élévation \"en vant\" à la poulie basse, main en supination', 'épaules', '\"deltoïdes\"', '\"poulie\"', 'Debout, les pieds légèrement écartés, les bras le long du corps, la poignée saisie main en semi-pronation (cet exercice se réalise avec une poignée spécialement adaptée à la prise en semi-pronation) : \n- inspirer et élever le bras en avant, jusqu\'au niveau des yeux, expirer en fin de montée ; \n- revenir lentement en position de départ et recommencer.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(33, 'arrière des épaules aux poulies côte à côte', 'épaules', '[\"deltoïdes\",\"trapèze bas\"]', '\"poulie\"', 'Debout face aux poulies, les bras tendus en avant, la poignée droite saisie avec la main gauche et la poignée gauche saisie avec la main droite : \n- inspirer et écarter les bras, expirer en fin de mouvement ; \n- revenir à la position de départ en contrôlant le mouvement et recommencer.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(34, 'rotation externe du bras à la poulie', 'épaules', '[\"deltoïdes\",\"trapèze bas\"]', '\"poulie\"', 'La poulie descendue au niveau de la taille, le corps de profil par rapport à l\'appareil, la poignée en main, le bras le long du corps, le coude fléchi, l\'avant-bras contre le ventre : \n- effectuer une rotation externe du bras, en essayant si possible de maintenir le bras contre le corps et le coude fléchi.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(35, 'élévation latérale à la poulie basse, buste penché en avant', 'épaules', '[\"deltoïdes\",\"trapèze bas\"]', '\"poulie\"', 'Debout, les pieds écartés, jambes légèrement fléchies, le buste penché en avant en conservant le dos plat, les bras pendants, une poignée dans chaque main, les câbles se croisant : \n- inspirer et élever les bras jusqu\'à l\'horizontale ; \n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(36, 'élévation latérale alternée à la poulie basse', 'épaules', '\"deltoïdes\"', '\"poulie\"', 'La poignée en main, le bras le long du corps :\r\n- inspirer et élever le bras jusqu\'à l\'horizontale ;\r\n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(37, 'élévation \"en avant ou frontale\" avec un haltère', 'épaules', '[\"deltoïdes\",\"trapèze haut\"]', '\"haltère\"', 'Debout, jambes légèrement écartées, dos bien droit, les abdominaux contractés, un haltère reposant sur les cuisses, tenu les mains croisées sur la poignée, paumes face à face, les bras tendus: \n- inspirer et élever l\'haltère jusqu\'au niveau des yeux; \n- redescendre doucement en évitant toute secousse ; \n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(38, 'élévation \"en avant ou frontale\" à la barre', 'épaules', '[\"deltoïdes\",\"trapèze haut\"]', '\"barre\"', 'Debout, jambes légèrement écartées, la barre reposant sur les cuisses, saisie mains en pronation, le dos bien droit, les abdominaux contractés : \n- inspirer et élever la barre, bras tendus, jusqu\'au niveau des yeux; \n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(39, 'tirage vertical à la barre, mains écartées', 'épaules', '[\"deltoïdes\",\"trapèze haut\",\"abdominaux\"]', '\"barre\"', 'Debout, jambes légèrement écartées, le dos bien droit, la barre saisie en pronation reposant sur les cuisses, les mains un peu plus écartées que la largeur des épaules: \n- inspirer et tirer la barre le long du corps jusqu\'au menton en montant les coudes le plus haut possible ; \n- contrôler la descente de la barre en évitant toute secousse ; \n- expirer en fin d\'effort.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(40, 'élévation latérale à la machine', 'épaules', '\"deltoïdes\"', '\"machine assisté\"', 'Assis sur la machine, les poignées en main : \n- inspirer et élever les coudes jusqu\'à l\'horizontale; \n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(41, 'arrière des épaules à la machine', 'épaules', '\"deltoïdes\"', '\"machine assisté\"', 'Assis face à la machine, le buste appuyé sur le dossier, les bras tendus en avant, les poignées en main : \n- inspirer, écarter les bras et resserrer les omoplates en fin de mouvement ; \n- expirer.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(42, 'développé-incliné', 'pectauraux', '[\"pectauraux\",\"deltoïdes\",\"triceps\"]', '\"barre\"', 'Assis sur un banc incliné entre 45° et 60° , saisir la barre, mains en pronation, avec un écartement supérieur à celui des épaules: \n- inspirer et descendre la barre sur la fourchette sternale ; \n- développer, en expirant à la fin du mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(43, 'développé-couché ou \"bench press\"', 'pectauraux', '[\"pectauraux\",\"deltoïdes\",\"triceps\"]', '\"barre\"', 'Allongé sur un banc horizontal, les fessiers en contact avec le banc, les pieds au sol: \n- saisir la barre, mains en pronation en prenant un écartement supérieur à la largeur des épaules; \n- inspirer et descendre la barre en contrôlant le mouvement jusqu\'à la poitrine; \n- développer en expirant en fin d\'effort.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(44, 'développé-couché, mains resserrées', 'pectauraux', '[\"pectauraux\",\"deltoïdes\",\"triceps\"]', '\"barre\"', 'Allongé sur un banc horizontal, les fessiers en contact avec le banc, les pieds au sol, saisir la barre mains en pronation avec un écartement variable de 10 à 40 cm selon la souplesse des poignets: \n- inspirer et descendre la barre sur la poitrine, les coudes écartés, en contrôlant le mouvement ; \n- développer, expirer en fin d\'effort.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(45, 'développé-décliné', 'pectauraux', '[\"pectauraux\",\"deltoïdes\",\"triceps\"]', '\"barre\"', 'Allongé, tête en bas, sur un banc plus ou moins incliné (entre 20° et 40°), pieds fixés, saisir la barre, mains en pronation, avec un écartement égal ou supérieur à la largeur des épaules : \n- inspirer et descendre la barre sur le bas des pectoraux en contrôlant le mouvement; \n- développer en expirant en fin d\'effort.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(46, 'développé-couché à la machine convergente', 'pectauraux', '[\"pectauraux\",\"triceps\"]', '\"machine assisté\"', 'Allongé sur la machine, les fessiers en contact avec le banc, les pieds au sol, les poignées en mains: \n- inspirer et développer; \n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(47, '\"dips\" ou répulsions aux barres parallèles', 'pectauraux', '[\"pectauraux\",\"triceps\",\"deltoïdes\"]', '\"machine assisté\"', 'En appui sur les barres parallèles, les bras tendus, les jambes dans le vide: \n- inspirer et fléchir complètement les avant-bras pour amener la poitrine au niveau des barres; \n- effectuer la répulsion, expirer en fin d\'effort.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(48, 'pompes', 'pectauraux', '[\"pectauraux\",\"triceps\"]', '\"poid du corps\"', 'En appui face au sol, les bras tendus, mains écartées de la largeur des épaules (ou plus), les pieds serrés ou très légèrement écartés: \n- inspirer et fléchir les bras pour amener la cage thoracique près du sol en évitant de creuser excessivement la région lombaires; \n- pousser jusqu\'à l\'extension complète des bras ; \n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(49, 'développé-couché avec haltères', 'pectauraux', '[\"pectauraux\",\"deltoïdes\",\"triceps\"]', '\"haltère\"', 'Allongé sur un banc horizontal, les pieds au sol pour assurer la stabilité, coudes fléchis, mains en pronation en tenant les haltères au niveau de la poitrine : \n- inspirer et tendre les bras verticalement en effectuant une rotation des avant-bras pour ramener les mains face à face ; \n- lorsqu\'elles se retrouvent face à face, il est possible d\'effectuer une contraction isométrique pour localiser l\'effort sur la partie sternale des grands pectoraux ; \n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(50, 'écarté-couché avec haltères', 'pectauraux', '\"pectauraux\"', '\"haltère\"', 'Allongé sur un banc étroit pour ne pas gêner les mouvements des épaules, les haltères en mains, bras tendus ou coudes légèrement fléchis pour soulager l\'articulation : \n- inspirer, puis écarter les bras jusqu\'à l\'horizontale ; \n- relever les bras jusqu\'à la verticale en expirant; \n- provoquer une petite contraction isométrique en fin de mouvement pour accentuer le travail sur la partie sternale des pectoraux.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(51, 'développé-incliné avec haltères', 'pectauraux', '[\"pectauraux\",\"triceps\",\"deltoïdes\"]', '\"haltère\"', 'Assis sur un banc plus ou moins incliné (pas plus de 60° pour ne pas trop reporter le travail sur les deltoïdes), coudes fléchis, haltères saisis mains en pronation :\r\n- inspirer et tendre les bras verticalement en rapprochant les haltères ;\r\n- expirer en fin de mouvement', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(52, 'écarté-incliné avec haltères', 'pectauraux', '[\"pectauraux\",\"deltoïdes\"]', '\"haltère\"', 'Assis sur un banc incliné entre 45° et 60°, haltères en mains, bras tendus verticalement ou légèrement fléchis pour soulager l\'articulation du coude:\r\n- inspirer puis écarter les bras jusqu\'à l\'horizontale ;\r\n- relever les bras jusqu\'à la verticale en expirant.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(53, 'écarté à la machine', 'pectauraux', '\"pectauraux\"', '\"machine assisté\"', 'Assis sur la machine, bras écartés en position horizontale, coudes fléchis reposant sur le point d\'application de la force, avant-bras et poignets relâchés: \n- inspirer et resserrer les bras au maximum ; \n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(54, 'écarté debout à la poulie vis-à-vis', 'pectauraux', '\"pectauraux\"', '\"poulie\"', 'Debout, jambes légèrement écartées, le buste un peu incliné, bras écartés, poignées en mains, coudes légèrement fléchis : \n- inspirer et resserrer les bras pour amener les poignées en contact; \n- expirer en fin de contraction; \n- revenir sans à-coups à la position de départ et recommencer.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(55, '\"pull-over\" avec haltères', 'pectauraux', '\"pectauraux\"', '\"poulie\"', 'Allongé sur un banc, pieds au sol, un haltère pris à deux mains, bras tendus, les disques reposant sur les paumes, pouces et index enserrant la poignée : \n- inspirer et descendre l\'haltère derrière la tête en fléchissant légèrement les coudes ; \n- expirer en revenant à la position de départ', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(56, '\"pull-over\" à la barre, couché sur un banc horizontal', 'pectauraux', '[\"pectauraux\",\"grand dorsal\"]', '\"barre\"', 'Bras tendus, la barre prise en pronation, mains écartées de la largeur des épaules : \n- inspirer en gonflant la poitrine au maximum et descendre la barre derrière la tête en fléchissant légèrement les coudes ; \n- expirer en revenant à la position de départ.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(57, 'traction à la barre fixe', 'dos', '[\"grand dorsal\",\"biceps\",\"trapèze bas\"]', '\"barre de traction\"', 'En suspension, à la barre fixe, mains très écartées en pronation: \n- inspirer et effectuer une traction pour amener la poitrine presque au niveau de la barre ; \n- expirer en fin de mouvement ; \n- revenir à la position de départ en contrôlant la descente et recommencer.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(58, 'traction à la barre fixe, mains en supination', 'dos', '[\"grand dorsal\",\"trapèze bas\"]', '\"barre de traction\"', 'En suspension à la barre fixe, mains en supination écartées d\'une largeur d\'épaules; \n- inspirer et effectuer, en sortant la poitrine, une traction pour amener le menton à la hauteur de la barre; \n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(59, 'tirage-poitrine à la poulie haute', 'dos', '[\"grand dorsal\",\"trapèze bas\",\"deltoïdes\"]', '\"poulie\"', 'Assis face à l\'appareil, les jambes calées, la barre prise en pronation, mains très écartées : \n- inspirer et tirer la barre jusqu\'à la fourchette sternale en sortant la poitrine et en ramenant les coudes vers l\'arrière ; \n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(60, 'tirage à la poulie basse prise serrée, mains en semi-pronation', 'dos', '[\"grand dorsal\",\"trapèze bas\",\"trapèze haut\",\"deltoïdes\",\"lombaires\"]', '\"poulie\"', 'Assis, face à l\'appareil, les pieds sur les cales, buste fléchi: \n- inspirer et ramener la poignée à la base du sternum, en redressant le dos et en timnt les coudes en arrière le plus loin possible ; \n- expirer en fin de mouvement et revenir sans à-coups à la position de départ.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(61, 'tirage à la poulie basse avec une barre large, mains en pronation', 'dos', '[\"grand dorsal\",\"trapèze bas\",\"trapèze haut\",\"deltoïdes\",\"lombaires\"]', '\"poulie\"', 'Assis, face à l\'appareil, les pieds sur les cales, buste fléchi, la barre saisie les mains en pronations (pouces vers l\'intérieur) plus écartées que la largeur des épaules : \n- inspirer et tirer la barre vers la poitrine en redressant le dos et en maintenant les coudes levés ; \n- expirer en fin de mouvement et revenir sans à-coups à la position de départ.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(62, 'tirage-nuque à la poulie haute', 'dos', '[\"grand dorsal\",\"trapèze bas\",\"biceps\"]', '\"poulie\"', 'Assis face à l\'appareil, les cuisses calées sous les boudins, la barre prise en pronation, mains très écartées:\r\n- inspirer et tirer la barre jusqu\'à la nuque en ramenant les coudes le long du corps;\r\n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(63, 'tirage-poitrine à la poulie haute avec une poignée à ses prises rapprochées', 'dos', '[\"grand dorsal\",\"biceps\"]', '\"poulie\"', 'Assis, face à l\'appareil, les genoux bloqués:\r\n- inspirer et ramener la poignée jusqu\'au sternum en gonflant la poitrine et en inclinant légèrement le buste en arrière;\r\n- expirer en fin de mouvement', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(64, 'tirage bras tendus à la poulie haute', 'dos', '[\"grand dorsal\",\"triceps\"]', '\"poulie\"', 'Debout, face à l\'appareil, pieds légèrement écartés, barre saisie en pronation bras tendus, mains distantes d\'une largeur d\'épaules:\n- le dos fixé et la sangle abdominale contractée, inspirer et amener la barre jusqu\'aux cuisses en conservant les bras tendus (ou les coudes très légèrement fléchis);\n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(65, 'tirage horizontal avec un haltère', 'dos', '[\"grand dorsal\",\"biceps\",\"deltoïdes\",\"trapèze haut\"]', '\"haltère\"', 'L\'haltère en main, pris en semi-pronation, la main et le genou opposés en appui sur le banc :\r\n- le dos fixé, inspirer et tirer l\'haltère le plus haut possible, le bras le long du corps, en ramenant le coude bien en arrière ;\r\n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(66, 'tirage horizontal avec haltères', 'dos', '[\"grand dorsal\",\"biceps\",\"deltoïdes\",\"trapèze haut\",\"trapèze bas\",\"avant-bras\",\"lombaires\"]', '\"haltère\"', 'Debout, les genoux légèrement fléchis, le buste incliné plus ou moins à 45°, le dos bien plat, les bras relâchés le long du corps, un haltère dans chaque main, saisis mains en semi-pronation :\r\n- inspirer, effectuer un blocage respiratoire et une contraction isométrique de la sangle abdominale, tirer les haltères le plus haut possible en gardant les coudes le plus proches du corps et resserrer les omoplates en fin de mouvement ;\r\n- revenir à la position de départ et expirer', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(67, 'tirage horizontal à la barre', 'dos', '[\"grand dorsal\",\"biceps\",\"deltoïdes\",\"trapèze haut\",\"trapèze bas\",\"lombaires\",\"abdominaux\"]', '\"barre\"', 'Debout, les genoux légèrement fléchis, le buste incliné à 45°, dos bien plat, la barre saisie en pronation, mains plus écartées que la largeur des épaules et bras pendants:\r\n- inspirer, effectuer un blocage respiratoire et une contraction isométrique de la sangle abdominale, tirer la barre jusqu\'à la poitrine ;\r\n- reprendre la position de départ et expirer.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(68, 'tirage à la barre en T, sans appui ventral', 'dos', '[\"grand dorsal\",\"biceps\",\"deltoïdes\",\"trapèze haut\",\"trapèze bas\",\"lombaires\",\"abdominaux\"]', '\"barre\"', 'Genoux légèrement fléchis, la barre passant entre les jambes, les poignées saisies mains en pronation, le dos bien plat, le buste incliné à 45°: \n- inspirer et ramener la barre jusqu\'à la poitrine; \n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(69, 'tirage à la barre en T avec appui ventral', 'dos', '[\"grand dorsal\",\"biceps\",\"deltoïdes\",\"trapèze haut\",\"trapèze bas\"]', '\"machine assisté\"', 'En appui ventral sur le banc incliné :\r\n- inspirer et ramener la barre prise en pronation jusqu\'à la poitrine ;\r\n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(70, 'soulevé de terre, jambes tendues', 'dos', '[\"fessiers\",\"ischio-jambiers\",\"lombaires\"]', '\"barre\"', 'Debout, pieds légèrement écartés, face à la barre posée au sol :\n- inspirer, pencher le buste en avant, en gardant le dos cambré et, si possible, en conservant les jambes tendues ;\n- saisir la barre, mains en pronation, bras relâchés, et redresser le buste jusqu\'à la verticale, le dos toujours fixé, la bascule s\'effectuant au niveau des hanches ; expirer en fin de mouvement;\n- revenir à la position de départ, sans toutefois reposer la barre, et recommencer.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(71, 'soulevé de terre', 'dos', '[\"grand dorsal\",\"trapèze haut\",\"trapèze bas\",\"quadriceps\",\"adducteurs\",\"ischio-jambiers\",\"abdominaux\",\"fessiers\",\"mollets\",\"lombaires\"]', '\"barre\"', 'Debout, face à la barre, jambes écartées, pieds vers l\'extérieur, toujours dans l\'axe des genoux : \n-fléchir les jambes pour amener les cuisses à l\'horizontale ; saisir la barre, bras tendus, mains en pronation, à peu près écartées de la largeur des épaules (en inversant la prise d\'une main - soit une main en supination et l\'autre en pronation, on empêche la barre de rouler, ce qui permet de maintenir des charges extrêmement lourdes) ; \n- inspirer, bloquer la respiration, creuser légèrement le dos, contracter la sangle abdominale et tendre les jambes en redressant le buste pour se retrouver en position verticale, les épaules tirées en arrière ; expirer en fin de mouvement; \n- reposer la barre au sol en bloquant la respiration, sans jamais arrondir le dos.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(72, 'soulevé de terre à la trap barre', 'dos', '[\"grand dorsal\",\"trapèze haut\",\"trapèze bas\",\"quadriceps\",\"adducteurs\",\"ischio-jambiers\",\"abdominaux\",\"fessiers\",\"mollets\",\"lombaires\"]', '\"trap barre\"', 'Debout, bien centré dans la barre (attention : un mauvais centrage entraînera une instabilité latérale), jambes légèrement écartées, le dos bien fixé et un peu cambré : \n-fléchir les jambes pour amener les cuisses à peu près à l\'horizontale; \n- bras tendus, saisir les poignées de la barre en veillant à bien centrer la prise des mains; \n- inspirer, bloquer la respiration, contracter la sangle abdominale et la région lombaires et soulever la barre en tendant les jambes, sans jamais arrondir le bas du dos, expirer en fin d\'effort ; \n-maintenir l\'extension du corps deux secondes, puis reposer la barre en maintenant la sangle abdominale et la région lombaires contractées.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(73, 'extension du buste au banc', 'dos', '[\"quadriceps\",\"ischio-jambiers\",\"lombaires\"]', '\"machine assisté\"', 'Installé sur le banc, les chevilles bloquées, l\'axe de flexion passant par l\'articulation coxo-fémorale, le pubis en dehors du banc: \n- buste fléchi, effectuer une extension jusqu\'à l\'horizontale en relevant la tête ; \n- puis réaliser une hyperextension.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(74, 'extension du buste à la machine', 'dos', '\"lombaires\"', '\"machine assisté\"', 'Assis sur le siège de l\'appareil, le buste basculé en avant, le boudin de la machine placé au niveau des omoplates (ou scapulas): \n- inspirer et redresser le buste au maximum ; \n- revenir lentement en expirant à la position de départ et recommencer', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(75, 'tirage vertical à la barre, mains serrées', 'dos', '[\"trapèze haut\",\"trapèze bas\",\"deltoïdes\",\"lombaires\"]', '\"barre\"', 'Debout, jambes légèrement écartées, dos bien droit, la barre saisie mains en pronation, celles-ci écartées d\'une largeur de paume ou un peu plus:\r\n- inspirer et tirer la barre le long du corps jusqu\'au menton en montant les coudes le plus haut possible;\r\n- expirer et contrôler la descente de la barre en évitant toute secousse.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(76, 'haussement d\'épaules à la barre', 'dos', '\"trapèze haut\"', '\"barre\"', 'Debout, jambes légèrement écartées, face à la barre posée à même le sol ou sur un support: \n- la saisir mains en pronation ou en prise inversée si la charge est importante, avec un écartement un peu supérieur à la largeur des épaules; \n- les bras relâchés, le dos bien droit, les abdominaux contractés, effectuer des haussements d\'épaules.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(77, 'haussement et rotation des épaules avec haltères', 'dos', '\"trapèze haut\"', '\"haltère\"', 'Debout, jambes légèrement écartées, tête bien droite ou un peu penchée en avant, bras relâchés le long du corps un haltère dans chaque main: hausser les épaules en leur faisant effectuer une rotation antéro-postérieure, puis revenir à la position initiale.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(78, 'haussement d\'épaules à la trap barre', 'dos', '\"trapèze haut\"', '\"trap barre\"', 'Debout, jambes légèrement écartées, face à la barre posée au sol ou sur un support : \n- saisir la barre en veillant à bien centrer la prise en mains (attention : avec des charges importantes sur une trap barre, une prise en mains mal ajustée fera basculer la barre vers l\'avant ou l\'arrière) ; \n-la tête bien droite ou légèrement en avant, les bras relâchés, le dos bien droit, les abdominaux contractés, effectuer des haussements d\'épaules.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(79, 'haussement d\'épaules au cadre-guidé ou à la machine', 'dos', '\"trapèze haut\"', '\"machine assisté\"', 'Debout, face à l\'appareil, saisir la barre en pronation, mains un peu plus écartées que la largeur des épaules ou, si la machine le permet, en semi-pronation, paumes face à face: \n- tête et dos bien droits, effectuer des haussements d\'épaules', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(80, 'flexion des cuisses avec haltères', 'jambes', '[\"lombaires\",\"quadriceps\",\"ischio-jambiers\",\"fessier\",\"abdominaux\"]', '\"haltère\"', 'Debout, pieds légèrement écartés, un haltère dans chaque main, les bras relâchés:\n- regarder droit devant soi, inspirer, cambrer légèrement le dos et effectuer une flexion des cuisses;\n- quand les fémurs arrivent à l\'horizontale, réaliser une extension des jambes pour revenir à la position initiale;\n- expirer en fin d\'effort.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(81, 'flexion des cuisses avec un haltère tenu entre les jambes', 'jambes', '[\"lombaires\",\"quadriceps\",\"ischio-jambiers\",\"fessiers\",\"abdominaux\",\"trapèze haut\"]', '\"haltère\"', 'Debout, les jambes écartées, les pieds dirigés vers l\'extérieur, un haltère maintenu entre les jambes : \n- regarder droit devant soi, cambrer légèrement le dos, inspirer, bloquer la respiration et effectuer une flexion des cuisses;\n- quand les fémurs arrivent à l\'horizontale, réaliser une extension des jambes pour revenir à la position initiale ;\n- expirer en fin de mouvement', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(82, 'squat barre devant', 'jambes', '[\"lombaires\",\"quadriceps\",\"ischio-jambiers\",\"fessiers\",\"abdominaux\",\"adducteurs\"]', '\"barre\"', 'Debout, pieds plus ou moins écartés de la largeur des épaules, la barre saisie mains en pronation, reposant sur le haut des muscles pectoraux et sur les faisceaux antérieurs du deltoïde: \n- inspirer fortement pour maintenir une pression intra-thoracique qui empêchera le buste de s\'affaisser vers l\'avant, cambrer légèrement le dos, contracter la sangle abdominale et fléchir les cuisses pour les amener à l\'horizontale; \n- revenir à la position initiale ; expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(83, 'squat', 'jambes', '[\"lombaires\",\"quadriceps\",\"ischio-jambiers\",\"fessiers\",\"abdominaux\",\"adducteurs\"]', '\"barre\"', 'La barre posée sur le support, se glisser dessous et la placer sur les trapèzes un peu plus haut que les deltoïdes postérieurs ; saisir la barre à pleines mains avec un écartement variable selon les morphologies et tirer les coudes en arrière ; \n- inspirer fortement (pour maintenir une pression intra-thoracique qui empêchera le buste de s\'affaisser vers l\'avant), cambrer légèrement le dos, regarder droit devant soi et décoller la barre du support ; \n- reculer d\'un ou deux pas, s\'arrêter pieds parallèles (ou les pointes un peu vers l\'extérieur), plus ou moins écartés de la largeur des épaules, s\'accroupir en inclinant le dos vers l\'avant, en contrôlant la descente et sans jamais arrondir la colonne vertébrale;\n- quand les fémurs arrivent à l\'horizontale, effectuer une extension des jambes en redressant le buste pour se retrouver dans la position de départ; \n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(84, 'squat jambes écartées', 'jambes', '[\"quadriceps\",\"ischio-jambiers\",\"lombaires\",\"adducteurs\",\"abducteurs\",\"abdominaux\",\"fessiers\"]', '\"barre\"', 'Ce mouvement s\'effectue de la même façon que le squat classique, mais les jambes sont largement écartées et les pointes des pieds tournées vers l\'extérieur.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(85, 'presse à cuisses inclinée', 'jambes', '[\"ischio-jambiers\",\"quadriceps\",\"adducteurs\",\"lombaires\"]', '\"machine assisté\"', 'Installé sur l\'appareil, le dos bien calé sur le dossier, les pieds moyennement écartés:\r\n- inspirer, débloquer la sécurité et fléchir les genoux au maximum de façon à ramener les cuisses sur les côtés de la cage thoracique ;\r\n- revenir en position de départ en expirant en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(86, 'presse incliné ou \"hack squat\"', 'jambes', '[\"quadriceps\",\"lombaires\",\"fessiers\",\"abdominaux\",\"ischio-jambiers\"]', '\"presse à cuisse\"', 'Les jambes tendues, le dos contre le dossier, les épaules calées sous les boudins (hack signifie \"attelage\", les boudins rappelant le collier que l\'on passe aux animaux de trait), les pieds moyennement écartés: \n- inspirer, débloquer la sécurité et effectuer une flexion des jambes ; \n- revenir à la position de départ, expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(87, 'box squat', 'jambes', '[\"lombaires\",\"quadriceps\",\"ischio-jambiers\",\"fessiers\",\"abdominaux\"]', '\"barre\"', 'Cette technique consiste à réaliser un squat en s\'asseyant sur un banc pendant une ou deux secondes et en remontant.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(88, 'extension des jambes à la machine', 'jambes', '\"quadriceps\"', '\"machine assisté\"', 'Assis sur la machine, les mains agrippées aux poignées ou au siège pour maintenir le buste immobile, les genoux fléchis, les chevilles placées sous les boudins: \n- inspirer et effectuer une extension des jambes jusqu\'à l\'horizontale; \n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(89, 'ischio-jambiers, couhé à la machine, ou \"leg curl\"', 'jambes', '[\"ischio-jambiers\",\"mollets\"]', '\"machine assisté\"', 'Allongé à plat ventre sur la machine, mains sur les poignées, jambes tendues, chevilles engagées sous les boudins : \n- inspirer et effectuer une flexion simultanée des jambes, en essayant de toucher les fesses avec les talons ; expirer en fin d\'effort; \n- revenir à la position de départ en contrôlant le mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(90, 'ischio-jambiers, debout alternés à la machine', 'jambes', '[\"ischio-jambiers\",\"mollets\"]', '\"machine assisté\"', 'Debout, le buste reposant sur le support, le genou calé, la jambe en extension, la cheville placée sous le boudin:\r\n- inspirer et fléchir le genou ;\r\n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(91, 'ichio-jambiers, assis à la machine', 'jambes', '[\"ischio-jambiers\",\"mollets\"]', '\"machine assisté\"', 'Assise à la machine, jambes tendues, chevilles placées sur le boudin, cuisses calées, mains sur les poignées: \n- inspirer et effectuer une flexion des jambes ; \n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(92, 'flexion du buste en avant ou \"good morning\"', 'jambes', '[\"ischio-jambiers\",\"fessiers\",\"lombaires\"]', '\"barre\"', 'Debout, pieds légèrement écartés, la barre reposant sur les trapèzes ou un peu plus bas sur les deltoïdes postérieurs: \n- inspirer et fléchir le buste en avant jusqu\'à l\'horizontale en gardant le dos bien droit, l\'axe de flexion passant par l\'articulation coxo-fémorale ; \n- retrouver la position de départ et expirer.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(93, 'adducteurs à la poulie basse', 'jambes', '\"adducteurs\"', '\"poulie\"', 'Debout sur une jambe, l\'autre reliée à la sangle, la main opposée en appui sur le cadre de la machine ou sur un support quelconque : \n- ramener la jambe en croisant par-devant celle qui est en appui.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(94, 'adducteurs à la machine', 'jambes', '\"adducteurs\"', '\"machine assisté\"', 'Assis sur la machine, jambes écartées :\r\n- resserrer les cuisses ;\r\n- revenir à la position de départ en contrôlant le mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(95, 'flexion et extension des pieds', 'jambes', '\"mollets\"', '[\"poid du corps\",\"barre\"]', 'Debout, l\'avant des pieds engagé sur une marche, une main en appui sur le mur ou sur la rampe pour plus de stabilité:\r\n- effectuer lentement une flexion des pieds pour bien étirer les mollets:\r\n- puis enchaîner sur une extension des pieds (flexion plantaire) en maintenant l\'articulation des genoux en extension, ou légèrement fléchie', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(96, 'extension des pieds à la machine', 'jambes', '\"mollets\"', '[\"machine assisté\",\"presse à cuisse\"]', 'Debout, le dos bien droit, les épaules sous les parties rembourrées de l\'appareil, l\'avant des pieds engagé sur la cale, les chevilles en flexion passive: \n- effectuer une extension des pieds (flexion plantaire) en maintenant toujours l\'articulation des genoux en extension.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(97, 'extension d\'un pied avec haltère', 'jambes', '\"mollets\"', '\"haltère\"', 'Debout sur une jambe, l\'avant-pied engagé sur une cale, une main tenant un haltère, l\'autre agrippée à un support pour un meilleur équilibre : \n- effectuer une extension du pied (flexion plantaire) en maintenant l\'articulation du genou en extension ou très légèrement fléchie ; \n- revenir à la position initiale.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(98, 'mollets à la machine, poid reposant sur le bassin', 'jambes', '\"mollets\"', '\"machine assisté\"', 'Les pieds sur la cale en flexion passive, jambes tendues, buste incliné, avant-bras reposant sur le support antérieur, la partie rembourrée de la machine reposant sur le bassin :\n- effectuer une extension des pieds ou flexion plantaire.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(99, 'extension des pieds, assis à la machine, ou presse à soléaires', 'jambes', '\"mollets\"', '\"machine assisté\"', 'Assis sur l\'appareil, le bas des cuisses engagé sous la partie rembourrée, l\'avant des pieds sur le socle, les chevilles en flexion passive: effectuer une extension des pieds (flexion plantaire).', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(100, 'soléaires à la barre', 'jambes', '\"mollets\"', '\"barre\"', 'Assis sur un banc, une cale placée sous l\'avant des pieds, la barre posée sur le bas des cuisses: \n- effectuer une extension des pieds (flexion plantaire).', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(101, 'fente avant', 'fessiers', '[\"fessiers\",\"quadriceps\"]', '\"barre\"', 'Debout, jambes légèrement écartées, la barre derrière la nuque reposant sur les muscles trapèzes: \n- inspirer et effectuer un grand pas en avant en gardant le tronc le plus droit possible ; lors de la fente, la cuisse déplacée vers l\'avant doit se stabiliser à l\'horizontale ou légèrement en dessous ; \n- revenir en position initiale et expirer.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(102, 'fente avant avec haltères', 'fessiers', '[\"fessiers\",\"quadriceps\"]', '\"haltère\"', 'Debout, jambes légèrement écartées, un haltère dans chaque main: \n- inspirer et effectuer un grand pas en gardant le buste le plus droit possible ; \n- lorsque la cuisse portée en avant arrive à l\'horizontale ou légèrement en dessous, effectuer une extension tonique de celle-ci pour revenir à la position initiale ; \n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(103, 'extension de la hanche à la poulie basse', 'fessiers', '[\"fessiers\",\"ischio-jambiers\"]', '\"poulie\"', 'Debout face à l\'appareil, les mains sur la poignée, le bassin incliné en avant, une jambe en appui, l\'autre reliée à la poulie basse:\r\n- effectuer une extension de la hanche.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(104, 'extension de la hanche à la machine', 'fessiers', '[\"fessiers\",\"ischio-jambiers\"]', '\"machine assisté\"', 'Le buste un peu incliné vers l\'avant, les mains sur les poignées, une jambe en appui, l\'autre ramenée légèrement en avant, le boudin placé sous l\'articulation du genou à mi-distance de la cheville: \n- inspirer et ramener la cuisse en arrière pour porter la hanche en hyperextension ; \n- maintenir la contraction en isométrie pendant deux secondes, et revenir à la position de départ; expirer en fin d\'extension.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(105, 'extension de la hanche au sol', 'fessiers', '[\"fessiers\",\"ischio-jambiers\"]', '\"poid du corps\"', 'Agenouillé sur une jambe, l\'autre ramenée sous la poitrine, en appui sur les coudes ou sur les mains, bras tendus : \n- ramener la jambe fléchie sous la poitrine en arrière, jusqu\'à effectuer une extension complète de la hanche.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(106, 'relevé de bassin au sol', 'fessiers', '[\"fessiers\",\"ischio-jambiers\"]', '\"poid du corps\"', 'Allongé sur le dos, les mains à plat sur le sol, les bras Je long du corps, les genoux fléchis:\r\n- inspirer et décoller les fesses du sol en poussant à fond sur les pieds;\r\n- maintenir la position deux secondes et redescendre Je bassin sans toutefois poser les fesses au sol;\r\n- expirer et recommencer.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(107, 'abduction de la hanche, debout à la poulie basse', 'fessiers', '\"abducteurs\"', '\"poulie\"', 'Debout, une jambe en appui, l\'autre reliée à la poulie basse, la main opposée en appui pour stabiliser le corps :\r\n- élever latéralement la jambe le plus haut possible.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(108, 'abduction de la hanche, debout à la machine', 'fessiers', '\"abducteurs\"', '\"machine assisté\"', 'Debout sur la machine, une jambe en appui, le boudin placé sur la face externe de l\'autre jambe au-dessous de l\'articulation du genou: \n- élever latéralement la jambe le plus haut possible et revenir lentement à la position de départ.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(109, 'abduction de la hanche au sol', 'fessiers', '\"abducteurs\"', '\"poid du corps\"', 'Couché sur le côté, la tête maintenue : \n- effectuer une élévation latérale de la jambe, Je genou devant être toujours tendu et l\'abduction ne devant pas dépasser les 70°.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(110, 'abducteurs, assis à la machine', 'fessiers', '\"abducteurs\"', '\"machine assisté\"', 'Assis sur la machine : \n- écarter les cuisses au maximum.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(111, 'crunch', 'abdominaux', '\"abdominaux\"', '\"poid du corps\"', 'Allongé sur le dos, les mains derrière la tête, les cuisses à la verticale, les genoux fléchis:\r\n- inspirer et décoller les épaules du sol en rapprochant les genoux de la tête par un enroulement du rachis ;\r\n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(112, 'relevé du buste au sol', 'abdominaux', '\"abdominaux\"', '\"poid du corps\"', 'Couché sur le dos, les genoux fléchis, les pieds au sol, les mains derrière la tête :\r\n- inspirer et relever le buste en arrondissant le dos ;\r\n- expirer en fin de mouvement ;\r\n- revenir à la position initiale, mais cette fois-ci sans reposer le buste ;', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(113, 'relevé du buste à l\'espalier', 'abdominaux', '\"abdominaux\"', '\"poid du corps\"', 'Les pieds calés dans l\'espalier, les cuisses à la verticale, le buste au sol, les mains\r\nderrière la tête :\r\n- inspirer et remonter le buste le plus haut possible en arrondissant la colonne vertébrale ;\r\n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15');
INSERT INTO `exercises` (`id`, `nom`, `partie`, `cible`, `equipement`, `description`, `created_at`, `updated_at`) VALUES
(114, 'décollements des épaules avec enroulement vertébral ou \"crunch\", jambes en appui sur un banc', 'abdominaux', '\"abdominaux\"', '\"poid du corps\"', 'Les jambes posées sur un banc, le buste au sol, mains derrière la tête: \n- inspirer et décoller les épaules en enroulant le dos pour essayer de toucher les genoux avec la tête ; \n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(115, 'relevé du buste au banc incliné', 'abdominaux', '\"abdominaux\"', '\"poid du corps\"', 'Assis sur le banc, les pieds calés sous les boudins, les mains derrière la nuque, inspirer et\r\nincliner le buste sans jamais dépasser 20°:\r\n- remonter en arrondissant légèrement le dos pour mieux localiser sur le droit de l\'abdomen ;\r\n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(116, 'relevé du buste en suspension au banc', 'abdominaux', '\"abdominaux\"', '\"poid du corps\"', 'Les pieds calés sous les boudins, le buste dans le vide, les mains derrière la tête : \n- inspirer et relever le buste pour essayer de toucher les genoux avec la tête, en veillant à toujours enrouler la colonne vertébrale; \n- expirer en fin de contraction.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(117, 'enroulement vertébral ou \"crunch\" à la poulie haute', 'abdominaux', '\"abdominaux\"', '\"poulie\"', 'À genoux, la barre derrière la nuque : \n- inspirer et enrouler le rachis pour rapprocher le sternum du pubis; \n- expirer pendant l\'exécution.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(118, 'abdominaux ou \"crunch\" à la machine', 'abdominaux', '[\"abdominaux\",\"quadriceps\"]', '\"machine assisté\"', 'Assis sur la machine, les mains tenant les poignées, les pieds calés sous\r\nles boudins :\r\n- inspirer et enrouler le rachis en essayant de rapprocher le plus possible le sternum du pubis ;\r\n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(119, 'relevé de jambes à la planche inclinée et décollement du bassin', 'abdominaux', '[\"abdominaux\",\"quadriceps\"]', '\"poid du corps\"', 'Allongé sur la planche inclinée, les mains agrippées aux barreaux, ou aux poignées: \n- relever les jambes jusqu\'à l\'horizontale ; \n- décoller ensuite le bassin en enroulant la colonne vertébrale pour essayer de toucher la tête avec les genoux.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(120, 'relevé des genoux à la chaise abdominale', 'abdominaux', '[\"abdominaux\",\"quadriceps\"]', '\"machine assisté\"', 'En appui sur les coudes, le dos calé: \n- inspirer et remonter les genoux vers la poitrine en arrondissant le dos pour bien contracter la sangle abdominale; \n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(121, 'relevé de jambes, suspendu à la barre', 'abdominaux', '\"abdominaux\"', '\"barre de traction\"', 'En suspension à la barre fixe : \n- inspirer et remonter les genoux le plus haut possible en veillant à rapprocher le pubis du sternum par un enroulement du rachis; \n- expirer en fin de mouvement.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(122, 'rotation du buste avec bâton', 'abdominaux', '\"abdominaux\"', '\"barre\"', 'Debout, jambes écartées, un bâton placé au niveau des trapèzes au-dessus des deltoïdes postérieurs, les mains reposant sur ce bâton sans toutefois trop appuyer :\n- effectuer des rotations du buste d\'un côté puis de l\'autre en maintenant le bassin immobile par une contraction isométrique des fessiers.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(123, 'flexion latéral du buste avec lest', 'abdominaux', '\"abdominaux\"', '[\"haltère\",\"kettlebell\"]', 'Debout, jambes légèrement écartées, une main derrière la tête, un haltère tenu dans l\'autre main : \n- effectuer une flexion latérale du buste du côté opposé à l\'haltère ; \n- revenir à la position initiale, ou la dépasser en effectuant cette fois-ci une flexion passive du buste ; \n- alterner les séries en changeant l\'haltère de côté sans temps de récupération.', '2022-10-25 14:35:15', '2022-10-25 14:35:15'),
(124, 'flexion latéral du buste au banc', 'abdominaux', '\"abdominaux\"', '\"poid du corps\"', 'De côté, la hanche sur le banc, le buste dans le vide, les mains derrière la tête ou sur la poitrine, les pieds calés sous les boudins :\r\n- effectuer des flexions latérales du buste vers le haut.', '2022-10-25 14:35:15', '2022-10-25 14:35:15');

-- --------------------------------------------------------

--
-- Structure de la table `member`
--

CREATE TABLE `member` (
  `id` int(11) NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` longtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:json)',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `coach_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `member`
--

INSERT INTO `member` (`id`, `email`, `roles`, `password`, `first_name`, `last_name`, `coach_id`) VALUES
(467, 'zacharie91@bertin.fr', '[\"ROLE_USER\"]', '$2y$13$vfkDVPDO8lp4RqezDIxXIew039rbL6c2Xv7jLnD/gR8M.uuCdkNRu', 'Charles', 'Vallee', 103),
(468, 'benjamin36@garcia.com', '[\"ROLE_USER\"]', '$2y$13$S/KHiisPAp2R2rqpqbtZUe1q44g04pTiE4yjkbEzTYghbEgc4RZla', 'Margot', 'Olivier', 103),
(469, 'galexandre@bruneau.fr', '[\"ROLE_USER\"]', '$2y$13$8kL3AemXK.8c8lO4VCQMreYEx7ikLm6YfVjcjoGhuT2isgpWW5Z4C', 'Guillaume', 'Carpentier', 103),
(470, 'mhernandez@free.fr', '[\"ROLE_USER\"]', '$2y$13$gLon8j5uX80/Du/cFxMNXeObE4sOuSC3Ub7BIqVSD9JU9YRWj.B7S', 'Dominique', 'Gaillard', 103),
(471, 'ojacquet@potier.com', '[\"ROLE_USER\"]', '$2y$13$8zKhfVstYLZCduTBHUq8SebpltLrpxwgjx8Zlodt9MqczD1rA6Rn.', 'Simone', 'Lacroix', 103),
(472, 'sophie.delannoy@ledoux.org', '[\"ROLE_USER\"]', '$2y$13$vXWckiClvGjv93rZ6X38QeLSBHZECafikmwxNzS7FCSIbGujLZJae', 'Rémy', 'Laine', 103),
(473, 'yves68@gmail.com', '[\"ROLE_USER\"]', '$2y$13$meu2ZlYMM8jvIERe6h3wve4PN0AYJrNU3pCHAsQKpFQiTbFgG/qFi', 'Martin', 'Adam', 103),
(474, 'boulay.paul@wanadoo.fr', '[\"ROLE_USER\"]', '$2y$13$.GC8Ryv5XwV1IC4cgy5fYOqDZT/R2q2ae.m.6UetJmaIVp/Wh4Fq2', 'Audrey', 'Becker', 103),
(475, 'camille.fernandez@noos.fr', '[\"ROLE_USER\"]', '$2y$13$LKGl4Lv2uPol/E6TL53uauUUM7C1mxeIWQT6HS22xVev5t71/BK92', 'Margaux', 'Leduc', 103),
(476, 'dgarnier@bouygtel.fr', '[\"ROLE_USER\"]', '$2y$13$qOxVt/RNpi.xNq7hIo3Y/uO9Hb8qbAlIIH3zp3n71BQADd5K8IX0y', 'Élise', 'Robin', 104),
(477, 'moreno.manon@yahoo.fr', '[\"ROLE_USER\"]', '$2y$13$Z05NVwj5OTUfkDRlNt5iw.ZOTzmIIl0BOIQFlQ2TAWMCjw/gLF4S.', 'Arthur', 'Picard', 104),
(478, 'ejoly@tiscali.fr', '[\"ROLE_USER\"]', '$2y$13$I1bVlEYLXtVkADJG66HhZehHN7NRQV1RjJWTs0G9sCAJGUskpcX1C', 'Danielle', 'Barbier', 104),
(479, 'roger.sanchez@collin.fr', '[\"ROLE_USER\"]', '$2y$13$346v.J1QNlCZQMbRbfWSDegilEU89/ORvTQ7BCAgUUE4ed7sHJCiq', 'Maryse', 'Monnier', 104),
(480, 'genevieve41@renault.com', '[\"ROLE_USER\"]', '$2y$13$DXVBKfqIQN.LlMi4hg9u5Oep/WQ8jh60QI20WMsaycWPUSMCYICru', 'David', 'Roche', 104),
(481, 'bernard.mathilde@bouygtel.fr', '[\"ROLE_USER\"]', '$2y$13$b8XcabDR6PqruzzpbpHP0.o5NjezGOjyaCdLTWP8F15aejn/bBZNa', 'Nathalie', 'Barbier', 104),
(482, 'elodie.millet@benard.com', '[\"ROLE_USER\"]', '$2y$13$FABy9gIJRQKujNyv7VujEeSBYv4o9rSXZz1tPYsBXLQXjYoYZyhXe', 'Noémi', 'Jean', 105),
(483, 'imbert.thibaut@parent.org', '[\"ROLE_USER\"]', '$2y$13$r6DdoblWAF7CduuQufTZx.IjXvlTu7r.oxqDTwtXrgvx5FZHXIKfG', 'Chantal', 'Loiseau', 105),
(484, 'yves.valette@lejeune.fr', '[\"ROLE_USER\"]', '$2y$13$js2ovC8ivgmeR9rXBHvsp.DX2sn5LgFj91w7m2JqFTaSZu6ZwRPB2', 'Monique', 'Brunet', 105),
(485, 'wlacombe@club-internet.fr', '[\"ROLE_USER\"]', '$2y$13$gImFYw9z3WqAJ0sk8CgaoO0j2cW/bSlxoKwF79cPMCwmyDvW79eXK', 'Thierry', 'Mallet', 105),
(486, 'augustin73@voila.fr', '[\"ROLE_USER\"]', '$2y$13$QgeNNchQ.HjGIqi3pWh4NuqeOkrGOO0VcldEkEn2SKj4hvME9A4ne', 'Martin', 'Ribeiro', 105),
(487, 'coste.lucy@hotmail.fr', '[\"ROLE_USER\"]', '$2y$13$XepjIfcb1iPrpKcqOGRYYuRD3WQoyXKzJIHCBVGJhDWrbRcdp6VBm', 'Gabrielle', 'Collin', 105),
(488, 'josette.leclercq@pichon.net', '[\"ROLE_USER\"]', '$2y$13$DvuwB0/oXl0sj9K4MkN5den.mSH6ECElggh1CnBPjKs30D5eJcGn.', 'Tristan', 'Julien', 105),
(489, 'louise18@hotmail.fr', '[\"ROLE_USER\"]', '$2y$13$japyPmItZhcaRCOcQiqZZ.FG2OMeZJj5ym67TXV1NXNjs/wdrd1ke', 'Édouard', 'Mercier', 105),
(490, 'maurice53@club-internet.fr', '[\"ROLE_USER\"]', '$2y$13$uK1lD4YPhzAZPDfnCr4.duSqPj2NC80H9wH6LaR5xlANK4KCx/84C', 'Thibault', 'Picard', 105),
(491, 'susan51@leroux.fr', '[\"ROLE_USER\"]', '$2y$13$H2wvO0XMSKpbPAtrL/BCc.Y.BcCfr415p2G4HG6zU4fxQaLchUjM2', 'Rémy', 'Dupont', 105),
(492, 'maryse.michaud@payet.net', '[\"ROLE_USER\"]', '$2y$13$wNld/qAL25TZXo.DBRv8DO8i9uGDzSGqJYSfgZg29fr/j.ZeQFDjO', 'Maryse', 'Clerc', 105),
(493, 'eugene96@ifrance.com', '[\"ROLE_USER\"]', '$2y$13$nR/zE/UR3X0BAekUzC0x4eM/1F.HI0WFBepdGa/8rdBeplVwfZEd2', 'Édouard', 'Maillot', 105),
(494, 'colin.paulette@bertrand.org', '[\"ROLE_USER\"]', '$2y$13$kmVV9dPXEu.28/cVZhKnyeSzzIFTc0PtaKSdsxWttSoBx8GQMyXni', 'Frédérique', 'Dupont', 106),
(495, 'augustin06@dasilva.net', '[\"ROLE_USER\"]', '$2y$13$HXPe1GWucMlNKTAcJ78jMeuxNfurOFvXR0LS6ROtzsWLLa90cqeMK', 'Christophe', 'Allain', 106),
(496, 'alexandre84@masse.fr', '[\"ROLE_USER\"]', '$2y$13$TOyD3xqvDW0YYhvoVY4NYer2PQ9WjW1cIZrgwweXtWzuMlt0d12Vy', 'Marcelle', 'Brunet', 106),
(497, 'elecomte@dbmail.com', '[\"ROLE_USER\"]', '$2y$13$hL2v07lEpr6VX0qs/1aIoeZTlrADUnFp1nEXWHOcp3GOYVzpjudp.', 'Emmanuel', 'Lagarde', 106),
(498, 'lsimon@perret.com', '[\"ROLE_USER\"]', '$2y$13$.nYomj0RYLUZxbDyY8Sh.e9WP83M8s6Gey0WAZ4tklxMayGVWwdgC', 'Bertrand', 'Guillon', 106),
(499, 'jrodrigues@menard.org', '[\"ROLE_USER\"]', '$2y$13$yDK5WLejVGq5MZjP7QjYgO.qi57XnuuIq358rpYkKM8OnFgRuHyjS', 'Robert', 'Letellier', 106),
(500, 'jperrin@marin.fr', '[\"ROLE_USER\"]', '$2y$13$b2xyWMgHWMiCCWYeTP4YGOHtZm6FNrJKY8Bir5Heqnz/E0GIllRRK', 'Catherine', 'Mary', 106),
(501, 'victoire.parent@tele2.fr', '[\"ROLE_USER\"]', '$2y$13$JJAj0veZ6/4TzVMa/XZBp.ojqFTBYTrWSOkYwdvsGXA3uToJcQLCa', 'Laure', 'Fleury', 106),
(502, 'marine92@grenier.fr', '[\"ROLE_USER\"]', '$2y$13$W6N3BQl5ipd.EBnPf9yGWOKr.vjpXcYDEIqeop64AwCWS7SsS6P0W', 'Nicole', 'Vidal', 107),
(503, 'benoit.bernard@goncalves.com', '[\"ROLE_USER\"]', '$2y$13$fXsCHPChkAYNXzYl63abFeTNt98hiq5NohhzFl5lkm1XjyQnFKPl6', 'Thibault', 'Leroy', 107),
(504, 'jeanne39@ifrance.com', '[\"ROLE_USER\"]', '$2y$13$D3P2ZrX72VB2QNlGCKyx3uZVV1ZJ4FvNiRjEhSXrYwB6eZcWoEah.', 'Richard', 'Roy', 107),
(505, 'jmeyer@didier.com', '[\"ROLE_USER\"]', '$2y$13$/mbUTsVuflwgoA6n0reC/uXnIOgX0XsWp2qJfI84TRPMayJMZn7se', 'Céline', 'Brunel', 107),
(506, 'sophie.delannoy@perez.com', '[\"ROLE_USER\"]', '$2y$13$G1nVJHVJ1oTgS4vUMtnSz.t0/rrapRBuYRBzytTKwV5Yoe41t1ol.', 'Alexandre', 'Neveu', 107),
(507, 'blondel.luce@hotmail.fr', '[\"ROLE_USER\"]', '$2y$13$.tD8unvZ6c02Av2EyipgHeSRPOIIg/XmWicMsAXKvRa.UyyAbAGDy', 'Noël', 'Tanguy', 107),
(508, 'tessier.nicolas@sfr.fr', '[\"ROLE_USER\"]', '$2y$13$.1lJeUDWi7AbZxgZDlV9b.ENehGFQUaBtCgfHfHY37v2LBkQFq5rW', 'Josette', 'Vasseur', 108),
(509, 'dchevallier@voila.fr', '[\"ROLE_USER\"]', '$2y$13$8gRPSUOZGL2BHF2FhKWc4Os51OlFrSjla09ugIUmPtvS/I6gVBgF6', 'Anaïs', 'Martins', 108),
(510, 'daniel.brunet@live.com', '[\"ROLE_USER\"]', '$2y$13$QrzosXY2gO0Dcm0Qr86CpO0H5rnAVrMIa4sKCTImHSTNn9fXiME0a', 'Thierry', 'Marie', 108),
(511, 'odette.guichard@voila.fr', '[\"ROLE_USER\"]', '$2y$13$YIUP.9TM8IxbonUnb14Iq.Czywqc8.jtmVZESvB59NGfzHhchEZFS', 'Olivier', 'Gautier', 108),
(512, 'gimenez.catherine@laposte.net', '[\"ROLE_USER\"]', '$2y$13$0tyYpiicVJMMgJ.cScTHSOvIrb39vw2r0TdRIta1RNkXWRfcBrM9K', 'Luce', 'Etienne', 108),
(513, 'varnaud@tiscali.fr', '[\"ROLE_USER\"]', '$2y$13$hZ9FqZrf7zHUNbhKV9ekqO5isTkRcMCDSRaNLS1hXTUy87.6IeWDS', 'Luc', 'Thierry', 108),
(514, 'elisabeth24@vaillant.fr', '[\"ROLE_USER\"]', '$2y$13$Cxhbl9Tcd6zf1AjKQTIieulrL9jBizItxnsuLUgn8nK1BkeGDNByG', 'Antoine', 'Dumas', 108),
(515, 'gilles.masse@labbe.fr', '[\"ROLE_USER\"]', '$2y$13$AYCZd3w0nc0gXJq9P/mXouiKQNf63Odv4ZeyYFIitU8HZMvcAjwPC', 'Catherine', 'Nicolas', 109),
(516, 'rraymond@tiscali.fr', '[\"ROLE_USER\"]', '$2y$13$YJd6QYkIBVMaD7/Vg/Gow.QQ81c/ioX6OwvYFx8LzWcrHPiNQHjHq', 'Alix', 'Fleury', 109),
(517, 'charles63@humbert.fr', '[\"ROLE_USER\"]', '$2y$13$Yg4GxhlwrUYSrZbZ96R7feT9GElNmoLKjLQj6WgphZNr8Q1k691lm', 'Marguerite', 'Parent', 109),
(518, 'tbernier@bouygtel.fr', '[\"ROLE_USER\"]', '$2y$13$PAVHx8EdwJqakjPxDbrMPehgpDjYuRX0n.vqb3faEq/axKo4ri1am', 'Odette', 'Bodin', 109),
(519, 'arnaude86@sfr.fr', '[\"ROLE_USER\"]', '$2y$13$Rl08obk2g60wmv4jN3W.DuOVoon.cCxwnRJJfosR9wNCSNUzR2ZSy', 'Frédéric', 'Dupuy', 109),
(520, 'bpicard@langlois.fr', '[\"ROLE_USER\"]', '$2y$13$r5EmX0lTw0JfALxWevw0e.UTOPEcedi2Z4v7rTmX.8yCii3qlDHHm', 'Thérèse', 'Camus', 109),
(521, 'daniel.franck@dbmail.com', '[\"ROLE_USER\"]', '$2y$13$t3pNC8owSBdr90KQ7rYm.enoJrM0mOBAHjrKKj0Xtc9ch/3F7Tro.', 'Céline', 'Godard', 109),
(522, 'marine.mercier@lecomte.com', '[\"ROLE_USER\"]', '$2y$13$Qpg/AekaDpEC0ozF0ACgSeotwTVo1PgzoPt1SxdYuXW2B2fePLa6q', 'Lucas', 'Rodriguez', 110),
(523, 'helene.chauveau@foucher.net', '[\"ROLE_USER\"]', '$2y$13$I7WqGOvLlZ8Z1C0DjUjZge63U.BwXlzNYlVzZVpH2VtFP8MGtkDim', 'Christiane', 'Raymond', 110),
(524, 'olivie81@club-internet.fr', '[\"ROLE_USER\"]', '$2y$13$V1AEuCOEP501IlAu3mDl2eHAwOP3iXAxHFb7q6Yi5f37CRIPI6Et.', 'Stéphane', 'Godard', 110),
(525, 'anastasie55@hotmail.fr', '[\"ROLE_USER\"]', '$2y$13$rSLa05b.xjnSlO3HKCCSi.DgKfS7RYBELSVhQhKZVY7c2ojN2ygHu', 'Roger', 'Schmitt', 110),
(526, 'tdupuis@peron.fr', '[\"ROLE_USER\"]', '$2y$13$oJwFCyGPLp2ZgkRPwouvReAX4bddUKzfyAM3DoN0h7GhnBrEMDoe6', 'Élisabeth', 'Rousset', 110),
(527, 'xnoel@maillet.net', '[\"ROLE_USER\"]', '$2y$13$rlJQgCKSGRJ9wBgxdQGNceAzNwbtLEOF0OqZdiYhWG6dKSx8sNaWG', 'Marcel', 'Dupuy', 110),
(528, 'manon.blondel@voila.fr', '[\"ROLE_USER\"]', '$2y$13$wmRqipE26jMOej/sUDw18u/d8WfT3ZrliLRYGGj5v8lcz99/7Ze5u', 'Robert', 'Royer', 110),
(529, 'ihamon@noos.fr', '[\"ROLE_USER\"]', '$2y$13$iOde/BLlJgexDOW7Ft9wQeWka341GmPcsu/FkDGJnmNf2js4Gv8uy', 'Éléonore', 'Baron', 110),
(530, 'poulain.arthur@gmail.com', '[\"ROLE_USER\"]', '$2y$13$jusT4oZVgEoWs1ah7z6WrOb/a5cdthj3yBllJx/Pr2WL3.yhLC3Ti', 'Frédéric', 'Coste', 110),
(531, 'lacroix.raymond@seguin.com', '[\"ROLE_USER\"]', '$2y$13$KdwM2dXHlLTrVYUW0ANZt.7ZGgLh3ranyRNtUOFsjHCeTWQG7uKTe', 'Marine', 'Fournier', 111),
(532, 'guillaume01@leclerc.com', '[\"ROLE_USER\"]', '$2y$13$z6wdj9PTu5h.Pb14smAwNOcqkhCKAa8XU.gb89QIHMqme1mPxrXUK', 'Yves', 'Picard', 111),
(533, 'francoise.joubert@maillet.net', '[\"ROLE_USER\"]', '$2y$13$IKvbvLVEmUMtO.8c7VYSJu6TnaDh2BbsczVDUq8e2mdHW6UHw4jJW', 'Anouk', 'Bernier', 111),
(534, 'gdupre@free.fr', '[\"ROLE_USER\"]', '$2y$13$hlOxWMgcAEhu0EKnioM75.Eco/bjew4Xs57n2D7eJPrQh9iKX3.N6', 'Michèle', 'Simon', 111),
(535, 'emarchand@ruiz.fr', '[\"ROLE_USER\"]', '$2y$13$qvpZYPOWHyvezmqNoXxl5uN6AzrUhJp8q1BiVchwUqRU8zQr1XL5u', 'William', 'Nguyen', 111),
(536, 'gregoire.dupont@perrin.net', '[\"ROLE_USER\"]', '$2y$13$0GNpbTnHGyXv2CjQQiSV/eJ2F.ZdCteqI0HWh8e.kAbyxUbSKonDa', 'Benjamin', 'Guillot', 111),
(537, 'remy.perrin@bourgeois.net', '[\"ROLE_USER\"]', '$2y$13$9A0veHinoUciAwA0TO4mdugiRgRYGZL3B4u9X60AcDGKXGrhU7/b6', 'Guy', 'Chauvin', 111),
(538, 'margot85@live.com', '[\"ROLE_USER\"]', '$2y$13$RyHo3n.KQtXOxdOr1bNhpOD98YUve702WI04sIFhuOCAleaVrabXm', 'Anne', 'Perez', 112),
(539, 'julien57@hotmail.fr', '[\"ROLE_USER\"]', '$2y$13$/emv2UXerxg4pZz8Acc4N.NLDPpzl7Dkg4eyiZtwC8v3PYDXoWp2W', 'Jacques', 'Cohen', 112),
(540, 'henri.langlois@live.com', '[\"ROLE_USER\"]', '$2y$13$7TZ6RXgPQRpVaZrxLCUuX.TbRlUhAdS6WdBHCFDSBYumGKFjSAraG', 'Isabelle', 'Le Goff', 112),
(541, 'lpereira@tiscali.fr', '[\"ROLE_USER\"]', '$2y$13$32ds7X49qO5.a.QhrMXvXu6/2BbUr0rIfWck3YzobyFFAjcExtwcS', 'Xavier', 'Maillard', 112),
(542, 'emmanuelle69@voila.fr', '[\"ROLE_USER\"]', '$2y$13$fXpIeGyLt4lZNh4ZcWoSEuz/f6gtXIvwwgevUX7zdG4.UjuT5Xffe', 'Franck', 'Descamps', 112);

-- --------------------------------------------------------

--
-- Structure de la table `member_coach`
--

CREATE TABLE `member_coach` (
  `member_id` int(11) NOT NULL,
  `coach_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `messenger_messages`
--

CREATE TABLE `messenger_messages` (
  `id` bigint(20) NOT NULL,
  `body` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `headers` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `available_at` datetime NOT NULL,
  `delivered_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `roles` longtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:json)',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL
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
-- Index pour la table `exercises`
--
ALTER TABLE `exercises`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_70E4FA78E7927C74` (`email`),
  ADD KEY `IDX_70E4FA783C105691` (`coach_id`);

--
-- Index pour la table `member_coach`
--
ALTER TABLE `member_coach`
  ADD PRIMARY KEY (`member_id`,`coach_id`),
  ADD KEY `IDX_5D78F83F7597D3FE` (`member_id`),
  ADD KEY `IDX_5D78F83F3C105691` (`coach_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;

--
-- AUTO_INCREMENT pour la table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT pour la table `exercises`
--
ALTER TABLE `exercises`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=125;

--
-- AUTO_INCREMENT pour la table `member`
--
ALTER TABLE `member`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=543;

--
-- AUTO_INCREMENT pour la table `messenger_messages`
--
ALTER TABLE `messenger_messages`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

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

--
-- Contraintes pour la table `member_coach`
--
ALTER TABLE `member_coach`
  ADD CONSTRAINT `FK_5D78F83F3C105691` FOREIGN KEY (`coach_id`) REFERENCES `coach` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_5D78F83F7597D3FE` FOREIGN KEY (`member_id`) REFERENCES `member` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
