-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         5.7.24 - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando datos para la tabla code_challenge.news: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` (`id`, `title`, `description`, `content`, `url`, `image`, `publishedAt`, `source`, `source_url`) VALUES
	('41a9bbfc5f3e', 'Third', 'Thrid', 'comparon', 'https://localhost:44368/api/news/insert_news', 'https://cdn-www.comingsoon.net/assets/uploads/2018/11/MiddleEarth.jpg', '2021-08-14 22:11:34', 'https://cdn-www.comingsoon.net/assets/uploads/2018/11/MiddleEarth.jpg', 'https://cdn-www.comingsoon.net/assets/uploads/2018/11/MiddleEarth.jpg'),
	('a30346d51728', 'Second....', 'Hola', 'New', 'https://localhost:44368/api/news/update_news/a30346d51728', 'https://cdn-www.comingsoon.net/assets/uploads/2018/11/MiddleEarth.jpg', '2021-08-14 21:59:23', 'https://cdn-www.comingsoon.net/assets/uploads/2018/11/MiddleEarth.jpg', 'https://cdn-www.comingsoon.net/assets/uploads/2018/11/MiddleEarth.jpg'),
	('de0f744f984d', 'First Notice', 'Description', 'Content', 'https://localhost:44368/api/news/insert_news', 'https://cdn-www.comingsoon.net/assets/uploads/2018/11/MiddleEarth.jpg', '2021-08-14 21:29:41', 'https://cdn-www.comingsoon.net/assets/uploads/2018/11/MiddleEarth.jpg', 'https://cdn-www.comingsoon.net/assets/uploads/2018/11/MiddleEarth.jpg');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
