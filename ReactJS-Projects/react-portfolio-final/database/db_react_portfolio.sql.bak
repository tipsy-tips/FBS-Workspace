-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 15, 2024 at 03:54 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_react_portfolio`
--
CREATE DATABASE IF NOT EXISTS `db_react_portfolio` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `db_react_portfolio`;

-- --------------------------------------------------------

--
-- Table structure for table `table_counter`
--

DROP TABLE IF EXISTS `table_counter`;
CREATE TABLE `table_counter` (
  `counter_aid` int(11) NOT NULL,
  `counter_number` int(25) NOT NULL,
  `counter_title` varchar(50) NOT NULL,
  `counter_is_active` tinyint(1) NOT NULL,
  `counter_datetime` varchar(50) NOT NULL,
  `counter_created` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `table_counter`
--

INSERT INTO `table_counter` (`counter_aid`, `counter_number`, `counter_title`, `counter_is_active`, `counter_datetime`, `counter_created`) VALUES
(1, 23, 'Fulfilled Clients', 1, '2024-05-15 09:49:10', '2024-05-14 08:41:49'),
(2, 43, 'Completed Projects', 1, '2024-05-15 09:49:15', '2024-05-14 08:42:33'),
(3, 89, 'Reviews', 1, '2024-05-15 09:49:19', '2024-05-14 08:51:56'),
(4, 63, 'fourth title', 0, '2024-05-14 08:52:33', '2024-05-14 08:52:14');

-- --------------------------------------------------------

--
-- Table structure for table `table_projects`
--

DROP TABLE IF EXISTS `table_projects`;
CREATE TABLE `table_projects` (
  `projects_aid` int(11) NOT NULL,
  `projects_image` varchar(50) NOT NULL,
  `projects_is_active` tinyint(1) NOT NULL,
  `projects_datetime` varchar(50) NOT NULL,
  `projects_created` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `table_projects`
--

INSERT INTO `table_projects` (`projects_aid`, `projects_image`, `projects_is_active`, `projects_datetime`, `projects_created`) VALUES
(1, 'acacia.png', 1, '2024-05-14 10:00:45', '2024-05-14 07:43:04'),
(6, 'gosheni.png', 1, '2024-05-14 10:10:58', '2024-05-14 10:10:58'),
(7, 'byaheng.png', 1, '2024-05-15 07:16:27', '2024-05-14 10:11:03');

-- --------------------------------------------------------

--
-- Table structure for table `table_skills_image`
--

DROP TABLE IF EXISTS `table_skills_image`;
CREATE TABLE `table_skills_image` (
  `skillsimage_aid` int(11) NOT NULL,
  `skillsimage_image` varchar(50) NOT NULL,
  `skillsimage_is_active` tinyint(1) NOT NULL,
  `skillsimage_datetime` varchar(50) NOT NULL,
  `skillsimage_created` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `table_skills_image`
--

INSERT INTO `table_skills_image` (`skillsimage_aid`, `skillsimage_image`, `skillsimage_is_active`, `skillsimage_datetime`, `skillsimage_created`) VALUES
(2, 'dart.svg', 1, '2024-05-15 07:34:42', '2024-05-15 07:34:42'),
(3, 'csharp.svg', 1, '2024-05-15 07:39:17', '2024-05-15 07:39:17'),
(4, 'figma.svg', 1, '2024-05-15 09:48:21', '2024-05-15 09:48:21'),
(5, 'flutter.svg', 1, '2024-05-15 09:48:26', '2024-05-15 09:48:26'),
(6, 'html.svg', 1, '2024-05-15 09:48:30', '2024-05-15 09:48:30'),
(7, 'js.svg', 1, '2024-05-15 09:48:34', '2024-05-15 09:48:34'),
(8, 'ps.svg', 1, '2024-05-15 09:48:40', '2024-05-15 09:48:40'),
(9, 'react.svg', 1, '2024-05-15 09:48:44', '2024-05-15 09:48:44');

-- --------------------------------------------------------

--
-- Table structure for table `table_skills_list`
--

DROP TABLE IF EXISTS `table_skills_list`;
CREATE TABLE `table_skills_list` (
  `skills_aid` int(11) NOT NULL,
  `skills_list` varchar(500) NOT NULL,
  `skills_is_active` tinyint(1) NOT NULL,
  `skills_datetime` varchar(50) NOT NULL,
  `skills_created` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `table_skills_list`
--

INSERT INTO `table_skills_list` (`skills_aid`, `skills_list`, `skills_is_active`, `skills_datetime`, `skills_created`) VALUES
(1, 'Passion for Innovation: Im driven by a relentless pursuit of innovation, constantly exploring new technologies and methodologies to deliver cutting-edge solutions.', 1, '2024-05-15 08:18:56', '2024-05-14 15:12:31'),
(2, 'Client-Centric Approach: I believe in fostering collaborative partnerships with clients, prioritizing their vision, feedback, and goals throughout the development process.', 1, '2024-05-15 08:02:16', '2024-05-15 07:18:32'),
(3, 'Attention to Detail: Meticulous attention to detail sets my work\napart, ensuring pixel-perfect designs and flawless functionality that exceed expectations.', 1, '2024-05-15 08:02:35', '2024-05-15 07:18:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `table_counter`
--
ALTER TABLE `table_counter`
  ADD PRIMARY KEY (`counter_aid`);

--
-- Indexes for table `table_projects`
--
ALTER TABLE `table_projects`
  ADD PRIMARY KEY (`projects_aid`);

--
-- Indexes for table `table_skills_image`
--
ALTER TABLE `table_skills_image`
  ADD PRIMARY KEY (`skillsimage_aid`);

--
-- Indexes for table `table_skills_list`
--
ALTER TABLE `table_skills_list`
  ADD PRIMARY KEY (`skills_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `table_counter`
--
ALTER TABLE `table_counter`
  MODIFY `counter_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `table_projects`
--
ALTER TABLE `table_projects`
  MODIFY `projects_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `table_skills_image`
--
ALTER TABLE `table_skills_image`
  MODIFY `skillsimage_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `table_skills_list`
--
ALTER TABLE `table_skills_list`
  MODIFY `skills_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
