-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 29, 2024 at 12:43 AM
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
-- Database: `db_react_blog`
--
CREATE DATABASE IF NOT EXISTS `db_react_blog` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `db_react_blog`;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `category_aid` int(11) NOT NULL,
  `category_title` varchar(250) NOT NULL,
  `category_is_active` tinyint(1) NOT NULL,
  `category_datetime` varchar(20) NOT NULL,
  `category_created` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_aid`, `category_title`, `category_is_active`, `category_datetime`, `category_created`) VALUES
(1, 'Featured', 1, '2024-05-24 14:34:55', 2024),
(2, 'Trending', 1, '2024-05-28 12:24:17', 2024);

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
CREATE TABLE `post` (
  `post_aid` int(11) NOT NULL,
  `post_is_featured` tinyint(1) NOT NULL,
  `post_category_id` int(11) NOT NULL,
  `post_tag_id` int(11) NOT NULL,
  `post_title` varchar(250) NOT NULL,
  `post_subtitle` varchar(250) NOT NULL,
  `post_image` varchar(250) NOT NULL,
  `post_author` varchar(50) NOT NULL,
  `post_article` text NOT NULL,
  `post_is_active` tinyint(1) NOT NULL,
  `post_datetime` varchar(20) NOT NULL,
  `post_publish_date` varchar(20) NOT NULL,
  `post_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`post_aid`, `post_is_featured`, `post_category_id`, `post_tag_id`, `post_title`, `post_subtitle`, `post_image`, `post_author`, `post_article`, `post_is_active`, `post_datetime`, `post_publish_date`, `post_created`) VALUES
(1, 1, 2, 2, 'Nice Photo Shooting With Hand Classic Style', 'Nice Photo Shooting With Hand Classic Style', 'acacia (2).png', 'Post Author 1', '``Use `code` in your Markdown file.``\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \\\'Content here, content here\\\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.\n\n## Relaxing With Nice View After Enjoy Foods\n\nThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\\\'t look even slightly believable.\n\nIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn\\\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.\n\n![altcomment](https://themes.themewild.com/bloge/assets/img/blog/2.jpg)\n\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.\n\n## This Is The Best Camera For Short Minimal Style\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.', 1, '2024-05-28 12:20:47', '2024-05-28T08:50', '2024-05-22 13:55:47'),
(2, 0, 2, 3, 'Post 2', 'QQWE', 'byaheng.png', 'Author 2', 'Post 2', 1, '2024-05-28 08:25:26', '2024-05-24T15:02', '2024-05-24 08:28:23'),
(3, 0, 2, 2, 'Post 3', 'QWE', 'gosheni.png', 'Author 3', 'Post', 1, '2024-05-28 11:57:37', '2024-05-24T15:02', '2024-05-24 08:28:40'),
(4, 0, 2, 3, 'Post 1', 'Post 1', 'byaheng.png', 'Author 1', 'Post 1', 1, '2024-05-28 12:06:15', '2024-05-25T15:15', '2024-05-24 15:15:27'),
(5, 0, 1, 3, 'New Skill With The Height Quality Camera Lens', 'There are many variations of passages of Lorem Ipsum available but the majority have suffered.', 'banner.png', 'Author 5', '# Header 1\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, laboriosam temporibus illum quis cum delectus voluptatibus molestias reprehenderit, incidunt ab ipsum? Ducimus asperiores veniam, nisi enim voluptatibus quia hic. Accusantium.', 1, '2024-05-28 12:30:14', '05/28/2024 12:28:03 ', '2024-05-28 12:30:14');

-- --------------------------------------------------------

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag` (
  `tag_aid` int(11) NOT NULL,
  `tag_title` varchar(250) NOT NULL,
  `tag_is_active` tinyint(1) NOT NULL,
  `tag_datetime` varchar(50) NOT NULL,
  `tag_created` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tag`
--

INSERT INTO `tag` (`tag_aid`, `tag_title`, `tag_is_active`, `tag_datetime`, `tag_created`) VALUES
(1, 'Food', 1, '2024-05-28 08:21:33', '2024-05-28 07:46:29'),
(2, 'Travel', 1, '2024-05-28 08:21:24', '2024-05-28 07:47:04'),
(3, 'Life', 1, '2024-05-28 12:24:27', '2024-05-28 07:47:40');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_aid` int(11) NOT NULL,
  `user_is_active` tinyint(1) NOT NULL,
  `user_name` varchar(250) NOT NULL,
  `user_email` varchar(250) NOT NULL,
  `user_key` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_created` varchar(20) NOT NULL,
  `user_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_aid`, `user_is_active`, `user_name`, `user_email`, `user_key`, `user_password`, `user_created`, `user_datetime`) VALUES
(2, 1, 'JP', 'itaikichi@gmail.com', '', '$2y$10$z0UyakFC7iBvSj/9UT8g4.8H6DQ2guzBqllbu2DBXHkIa5nZsARq.', '2024-05-20 12:46:29', '2024-05-21 08:26:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_aid`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`post_aid`);

--
-- Indexes for table `tag`
--
ALTER TABLE `tag`
  ADD PRIMARY KEY (`tag_aid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `post_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tag`
--
ALTER TABLE `tag`
  MODIFY `tag_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
