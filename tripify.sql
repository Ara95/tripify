-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Värd: localhost
-- Tid vid skapande: 20 jun 2021 kl 15:10
-- Serverversion: 10.4.11-MariaDB
-- PHP-version: 7.3.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `tripify`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `Categories`
--

CREATE TABLE `Categories` (
  `categoryId` int(11) NOT NULL,
  `categoryName` varchar(300) NOT NULL,
  `categoryNameIcon` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `Categories`
--

INSERT INTO `Categories` (`categoryId`, `categoryName`, `categoryNameIcon`) VALUES
(2, 'Natur', 'tree'),
(3, 'Historia', 'history'),
(4, 'Badplatser', 'sun'),
(5, 'Innerstad', 'building');

-- --------------------------------------------------------

--
-- Tabellstruktur `Cities`
--

CREATE TABLE `Cities` (
  `cityId` int(11) NOT NULL,
  `cityName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `Cities`
--

INSERT INTO `Cities` (`cityId`, `cityName`) VALUES
(3, 'Örebro'),
(4, 'Lund');

-- --------------------------------------------------------

--
-- Tabellstruktur `DiscountCodes`
--

CREATE TABLE `DiscountCodes` (
  `discountCodeId` int(11) NOT NULL,
  `discountCode` varchar(255) NOT NULL,
  `eventId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellstruktur `Events`
--

CREATE TABLE `Events` (
  `eventId` int(11) NOT NULL,
  `owner` int(11) NOT NULL,
  `eventName` varchar(300) NOT NULL,
  `description` varchar(300) NOT NULL,
  `categoryId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `Events`
--

INSERT INTO `Events` (`eventId`, `owner`, `eventName`, `description`, `categoryId`) VALUES
(1, 1, 'CHAOS Paintball Örebro', 'Vi har massor med paintball aktiviteter', 2),
(2, 1, 'Örebro Slott', 'Fint och historiskt slott.', 3),
(3, 1, 'Ånnabåda', 'Fin skog och badplats.', 2);

-- --------------------------------------------------------

--
-- Tabellstruktur `Locations`
--

CREATE TABLE `Locations` (
  `locationId` int(11) NOT NULL,
  `locationName` varchar(300) NOT NULL,
  `description` varchar(300) NOT NULL,
  `categoryId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `Locations`
--

INSERT INTO `Locations` (`locationId`, `locationName`, `description`, `categoryId`) VALUES
(1, 'Ånnaboda', 'Underbar natur', 2),
(2, 'Naturens hus', 'Underbar natur', 2),
(3, 'Örebro city', 'Fin arkitektur och historia', 2);

-- --------------------------------------------------------

--
-- Tabellstruktur `Reviews`
--

CREATE TABLE `Reviews` (
  `id` int(11) NOT NULL,
  `reviewText` varchar(300) NOT NULL,
  `userId` int(10) NOT NULL,
  `eventId` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `Reviews`
--

INSERT INTO `Reviews` (`id`, `reviewText`, `userId`, `eventId`) VALUES
(2, 'Mycket fint natur, rekommenderar!', 1, 2);

-- --------------------------------------------------------

--
-- Tabellstruktur `Users`
--

CREATE TABLE `Users` (
  `userId` int(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `givenName` varchar(255) NOT NULL,
  `familyName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `Users`
--

INSERT INTO `Users` (`userId`, `email`, `password`, `fullName`, `givenName`, `familyName`) VALUES
(1, 'ara.nourbakhsh@gmail.com', 'hej123', 'Ara Nourbakhsh', 'Ara', 'Nourbakhsh');

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `Categories`
--
ALTER TABLE `Categories`
  ADD PRIMARY KEY (`categoryId`);

--
-- Index för tabell `Cities`
--
ALTER TABLE `Cities`
  ADD PRIMARY KEY (`cityId`);

--
-- Index för tabell `DiscountCodes`
--
ALTER TABLE `DiscountCodes`
  ADD PRIMARY KEY (`discountCodeId`);

--
-- Index för tabell `Events`
--
ALTER TABLE `Events`
  ADD PRIMARY KEY (`eventId`);

--
-- Index för tabell `Locations`
--
ALTER TABLE `Locations`
  ADD PRIMARY KEY (`locationId`);

--
-- Index för tabell `Reviews`
--
ALTER TABLE `Reviews`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `Categories`
--
ALTER TABLE `Categories`
  MODIFY `categoryId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT för tabell `Cities`
--
ALTER TABLE `Cities`
  MODIFY `cityId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT för tabell `DiscountCodes`
--
ALTER TABLE `DiscountCodes`
  MODIFY `discountCodeId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT för tabell `Events`
--
ALTER TABLE `Events`
  MODIFY `eventId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT för tabell `Locations`
--
ALTER TABLE `Locations`
  MODIFY `locationId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT för tabell `Reviews`
--
ALTER TABLE `Reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT för tabell `Users`
--
ALTER TABLE `Users`
  MODIFY `userId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
