-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 04, 2020 at 01:41 AM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_rokuflashback`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_account`
--

DROP TABLE IF EXISTS `tbl_account`;
CREATE TABLE IF NOT EXISTS `tbl_account` (
  `acc_id` int(11) NOT NULL AUTO_INCREMENT,
  `acc_email` varchar(100) NOT NULL,
  `acc_pass` varchar(150) NOT NULL,
  `acc_pin` int(4) NOT NULL,
  `acc_reg` datetime NOT NULL,
  `ip` varchar(50) NOT NULL,
  PRIMARY KEY (`acc_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_avatars`
--

DROP TABLE IF EXISTS `tbl_avatars`;
CREATE TABLE IF NOT EXISTS `tbl_avatars` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `pack` text NOT NULL,
  `src` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=128 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_avatars`
--

INSERT INTO `tbl_avatars` (`id`, `pack`, `src`) VALUES
(1, 'cinema', 'cinema-001.svg'),
(2, 'cinema', 'cinema-002.svg'),
(3, 'cinema', 'cinema-003.svg'),
(4, 'cinema', 'cinema-004.svg'),
(5, 'cinema', 'cinema-005.svg'),
(6, 'cinema', 'cinema-006.svg'),
(7, 'cinema', 'cinema-007.svg'),
(8, 'cinema', 'cinema-008.svg'),
(9, 'cinema', 'cinema-009.svg'),
(10, 'cinema', 'cinema-010.svg'),
(11, 'cinema', 'cinema-011.svg '),
(12, 'cinema', 'cinema-012.svg'),
(13, 'cinema', 'cinema-013.svg'),
(14, 'cinema', 'cinema-014.svg'),
(15, 'cinema', 'cinema-015.svg'),
(16, 'cinema', 'cinema-016.svg'),
(17, 'cinema', 'cinema-017.svg'),
(18, 'cinema', 'cinema-018.svg'),
(19, 'cinema', 'cinema-019.svg'),
(20, 'cinema', 'cinema-020.svg'),
(21, 'cinema', 'cinema-021.svg'),
(22, 'cinema', 'cinema-022.svg'),
(23, 'cinema', 'cinema-023.svg'),
(24, 'cinema', 'cinema-024.svg'),
(25, 'cinema', 'cinema-025.svg'),
(26, 'cinema', 'cinema-026.svg'),
(27, 'cinema', 'cinema-027.svg'),
(28, 'cinema', 'cinema-028.svg'),
(29, 'cinema', 'cinema-029.svg'),
(30, 'cinema', 'cinema-030.svg'),
(31, 'cinema', 'cinema-031.svg'),
(32, 'cute', 'cute-001.svg'),
(33, 'cute', 'cute-002.svg'),
(34, 'cute', 'cute-003.svg'),
(35, 'cute', 'cute-004.svg'),
(36, 'cute', 'cute-005.svg'),
(37, 'cute', 'cute-006.svg'),
(38, 'cute', 'cute-007.svg'),
(39, 'cute', 'cute-008.svg'),
(40, 'cute', 'cute-009.svg'),
(41, 'cute', 'cute-010.svg'),
(42, 'cute', 'cute-011.svg'),
(43, 'cute', 'cute-012.svg'),
(44, 'cute', 'cute-013.svg'),
(45, 'cute', 'cute-014.svg'),
(46, 'cute', 'cute-015.svg'),
(47, 'cute', 'cute-016.svg'),
(48, 'cute', 'cute-017.svg'),
(49, 'cute', 'cute-018.svg'),
(50, 'cute', 'cute-019.svg'),
(51, 'cute', 'cute-020.svg'),
(52, 'cute', 'cute-021.svg'),
(53, 'cute', 'cute-022.svg'),
(54, 'cute', 'cute-023.svg'),
(55, 'cute', 'cute-024.svg'),
(56, 'cute', 'cute-025.svg'),
(57, 'cute', 'cute-026.svg'),
(58, 'cute', 'cute-027.svg'),
(59, 'cute', 'cute-028.svg'),
(60, 'cute', 'cute-029.svg'),
(61, 'cute', 'cute-030.svg'),
(62, 'cute', 'cute-031.svg'),
(63, 'cute', 'cute-032.svg'),
(64, 'cute', 'cute-033.svg'),
(65, 'cute', 'cute-034.svg'),
(66, 'cute', 'cute-035.svg'),
(67, 'cute', 'cute-036.svg'),
(68, 'cute', 'cute-037.svg'),
(69, 'cute', 'cute-038.svg'),
(70, 'cute', 'cute-039.svg'),
(71, 'cute', 'cute-040.svg'),
(72, 'cute', 'cute-041.svg'),
(73, 'cute', 'cute-042.svg'),
(74, 'cute', 'cute-043.svg'),
(75, 'cute', 'cute-044.svg'),
(76, 'cute', 'cute-045.svg'),
(77, 'cute', 'cute-046.svg'),
(78, 'cute', 'cute-047.svg'),
(79, 'cute', 'cute-048.svg'),
(80, 'cute', 'cute-049.svg'),
(81, 'cute', 'cute-050.svg'),
(82, 'masked', 'masked-001.svg'),
(83, 'masked', 'masked-002.svg'),
(84, 'masked', 'masked-003.svg'),
(85, 'masked', 'masked-004.svg'),
(86, 'masked', 'masked-005.svg'),
(87, 'masked', 'masked-006.svg'),
(88, 'masked', 'masked-007.svg'),
(89, 'masked', 'masked-008.svg'),
(90, 'masked', 'masked-009.svg'),
(91, 'masked', 'masked-010.svg '),
(92, 'masked', 'masked-011.svg'),
(93, 'masked', 'masked-012.svg'),
(94, 'masked', 'masked-013.svg'),
(95, 'masked', 'masked-014.svg'),
(96, 'masked', 'masked-015.svg'),
(97, 'masked', 'masked-016.svg'),
(98, 'masked', 'masked-017.svg'),
(99, 'masked', 'masked-018.svg'),
(100, 'masked', 'masked-019.svg'),
(101, 'masked', 'masked-020.svg'),
(102, 'masked', 'masked-021.svg'),
(103, 'masked', 'masked-022.svg'),
(104, 'masked', 'masked-023.svg'),
(105, 'masked', 'masked-024.svg'),
(106, 'masked', 'masked-025.svg'),
(107, 'masked', 'masked-026.svg'),
(108, 'masked', 'masked-027.svg'),
(109, 'masked', 'masked-028.svg'),
(110, 'masked', 'masked-029.svg'),
(111, 'masked', 'masked-030.svg'),
(112, 'masked', 'masked-031.svg'),
(113, 'masked', 'masked-032.svg'),
(114, 'masked', 'masked-033.svg'),
(115, 'masked', 'masked-034.svg'),
(116, 'masked', 'masked-035.svg'),
(117, 'masked', 'masked-036.svg'),
(118, 'masked', 'masked-037.svg'),
(119, 'masked', 'masked-038.svg'),
(120, 'masked', 'masked-039.svg'),
(121, 'masked', 'masked-040.svg'),
(122, 'masked', 'masked-041.svg'),
(123, 'masked', 'masked-042.svg'),
(124, 'masked', 'masked-043.svg'),
(125, 'masked', 'masked-044.svg'),
(126, 'masked', 'masked-045.svg'),
(127, 'masked', 'masked-046.svg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

DROP TABLE IF EXISTS `tbl_users`;
CREATE TABLE IF NOT EXISTS `tbl_users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `is_master` tinyint(1) NOT NULL,
  `is_kid` tinyint(1) NOT NULL,
  `is_locked` tinyint(1) NOT NULL,
  `user_pin` tinyint(4) NOT NULL,
  `avatar_id` int(3) NOT NULL,
  `account_id` int(11) NOT NULL,
  `view_permission` tinyint(1) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user_acc_link`
--

DROP TABLE IF EXISTS `tbl_user_acc_link`;
CREATE TABLE IF NOT EXISTS `tbl_user_acc_link` (
  `acc_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user_avatar_link`
--

DROP TABLE IF EXISTS `tbl_user_avatar_link`;
CREATE TABLE IF NOT EXISTS `tbl_user_avatar_link` (
  `user_id` int(11) NOT NULL,
  `avatar_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
