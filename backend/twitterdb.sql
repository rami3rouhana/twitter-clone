-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 16, 2022 at 09:10 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `twitterdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `text` varchar(255) DEFAULT NULL,
  `users_id` int(11) NOT NULL,
  `posts_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `friends`
--

CREATE TABLE `friends` (
  `id` int(11) NOT NULL,
  `is_followed` tinyint(4) DEFAULT NULL,
  `is_blocked` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `id` int(11) NOT NULL,
  `liked` tinyint(4) DEFAULT 0,
  `users_id` int(11) NOT NULL,
  `posts_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `text` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `users_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`) VALUES
(1, 'samir', 'omarrrasdasdasd@gmail.com', 'omar@gmail.com', 'asdasdasdasdasdasd'),
(2, NULL, NULL, NULL, NULL),
(3, NULL, NULL, NULL, NULL),
(4, '', '', '', ''),
(5, '', '', '', ''),
(6, '', '', '', ''),
(7, 'Omar', 'El Hajj', 'hahahahahah@hahaha.com', 'ksjbfkjsdnflksdf'),
(8, 'wajig', 'wajig', 'wajig@wajih.com', 'dfdfgdfgdg'),
(9, 'rami', 'rami', 'rami@rami.com', 'ramirami'),
(10, 'xcvxcv', 'sdfsdf', 'sdfsdf', 'sdfsdf'),
(11, 'xcvxcv', 'sdfsdf', 'sdfsdf@gmklgd.com', 'sdfsdf'),
(12, 'sdvfsddf', 'dsffsd', 'sdfsdf@c', 'sdfsdf'),
(13, ',m.,m,n', 'asda', 'asda@asda', '12312'),
(14, 'das', 'asdas', 'asdas@das', 'asdas'),
(15, 'sdfsdf', 'sadasd', 'asdas@das', 'asdas'),
(16, 'asdasdf', 'asdasd', 'asdas@das', 'asdas'),
(17, 'sdas', 'sadasd', 'asdas@das', 'asdas'),
(18, 'dasd', 'assdas', 'asdas@das', 'asdas'),
(19, 'asdsad', 'asdas', 'asdas@das', 'asdas'),
(20, 'sdasd', 'asdasd', 'asdas@das', 'asdas'),
(21, 'asdasd', 'asdasd', 'asdas@das', 'asdas'),
(22, 'dasdasd', 'asdasd', 'asdas@das', 'asdas'),
(23, 'asdasd', 'asdasd', 'asdas@das', 'asdas'),
(24, 'omar', 'el hajj', 'omar@omar.com', 'omaromar'),
(25, 'Omar', 'El Hajj', 'asdas@das', 'asdas'),
(26, 'Omar', 'El Hajj', 'asdas@das', 'asdas'),
(27, 'Omar', 'El Hajj', 'asdas@das', 'asdas'),
(28, 'Omar', 'sadasd', 'asdas@das', 'asdas');

-- --------------------------------------------------------

--
-- Table structure for table `users_has_friends`
--

CREATE TABLE `users_has_friends` (
  `users_id` int(11) NOT NULL,
  `Friends_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_comments_users1_idx` (`users_id`),
  ADD KEY `fk_comments_posts1_idx` (`posts_id`);

--
-- Indexes for table `friends`
--
ALTER TABLE `friends`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_likes_users1_idx` (`users_id`),
  ADD KEY `fk_likes_posts1_idx` (`posts_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_posts_users_idx` (`users_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users_has_friends`
--
ALTER TABLE `users_has_friends`
  ADD PRIMARY KEY (`users_id`,`Friends_id`),
  ADD KEY `fk_users_has_Friends_Friends1_idx` (`Friends_id`),
  ADD KEY `fk_users_has_Friends_users1_idx` (`users_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `friends`
--
ALTER TABLE `friends`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `fk_comments_posts1` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_comments_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `fk_likes_posts1` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_likes_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `fk_posts_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `users_has_friends`
--
ALTER TABLE `users_has_friends`
  ADD CONSTRAINT `fk_users_has_Friends_Friends1` FOREIGN KEY (`Friends_id`) REFERENCES `friends` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_users_has_Friends_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
