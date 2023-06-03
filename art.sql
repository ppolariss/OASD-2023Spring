-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: localhost    Database: transaction
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `art`
--

DROP TABLE IF EXISTS `art`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `art` (
  `art_id` int unsigned NOT NULL AUTO_INCREMENT,
  `art_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `author` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `price` double unsigned NOT NULL,
  `pic` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `visits` int DEFAULT '0',
  `is_sold` tinyint NOT NULL DEFAULT '0',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `weight` double DEFAULT NULL,
  `size` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `art_era` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `style` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `create_at` datetime DEFAULT NULL,
  PRIMARY KEY (`art_id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `art`
--

LOCK TABLES `art` WRITE;
/*!40000 ALTER TABLE `art` DISABLE KEYS */;
INSERT INTO `art` VALUES (1,'asdasdasdasd','2',0.01,'037f4e68c5f4ab37fbbb6468b310ebb5.png',9,0,'asdadasdasd',1,'1','85','2',NULL,'2023-05-03 21:07:14'),(2,'dasdsadsa','2',0.01,'037f4e68c5f4ab37fbbb6468b310ebb5.png',4,0,'daddasda',1,'1','5','5',1,'2023-05-01 21:07:17'),(3,'第接使际打几','10',86,'037f4e68c5f4ab37fbbb6468b310ebb5.png',33,0,'命响列日走书此能由干拉受万增又等参集。为有报联严复运温土增育把加质来等。但引及况老山列使住系在众眼传式被观。学成何权断总千相体转小单正义机育真。照计高严满好取列己因千很子性经复术。',1,'1','58','2',60,'2023-05-09 21:07:19'),(4,'水知目','2',36,'037f4e68c5f4ab37fbbb6468b310ebb5.png',7,0,'结查动热观科没九响县较即相性始强何年。他后组比打非非实农较建增作位表。始动华而数来体那信持共都科。向党来际四老没最在眼调重用阶。清参五身报众约张劳育很决或管易。取红化月厂实存去极维天部走例其了。号王革然作压阶线把度毛战车保个。',1,'1','3','5',60,'2023-05-02 21:07:21'),(5,'直比确斯时铁','02',5,'037f4e68c5f4ab37fbbb6468b310ebb5.png',3,0,'想经该特例结等几维反号油。风门适志立音知手红场研节解之。张物证列至米论别属历严十山三。',1,'1','96','25',60,'2023-05-01 21:07:22'),(6,'身育相此','10',53,'037f4e68c5f4ab37fbbb6468b310ebb5.png',5,0,'即次北部定林南院然进新题身。世给查手给青红每无电再快眼一己。程界发精行不来调间使或集日算县学。只调种转商大度达走开和管种关表效。',1,'5','3','52',60,'2023-05-16 21:07:24'),(7,'则多点','0',23,'037f4e68c5f4ab37fbbb6468b310ebb5.png',0,0,'式小个别提难易本目为先不基维小。西法非形革程持算车广但持周车此。听位多接响速会立系展价只这。消儿万存般光得养论能产习部公。接证装组干道会片山车外步打必。期究线种任保办采真山老片打看然济收织。',1,'10','63','2',60,'2023-05-22 21:07:27'),(8,'研百文过特院场','10',4,'037f4e68c5f4ab37fbbb6468b310ebb5.png',15,0,'土观现写约县得采值小何候压。每社便位什她没来这周色质际期布期需。市山斯起压次代证飞面共位区热。压更白青育四精数龙她养东。',1,'0','3','25',60,'2023-05-23 21:07:28'),(19,'大声道撒多','10',0.01,'037f4e68c5f4ab37fbbb6468b310ebb5.png',2,0,'dwqdqwd',1,'0','3','25',60,'2023-05-10 21:07:30'),(24,'1','1',1,'037f4e68c5f4ab37fbbb6468b310ebb5.png',11,0,'1',1,'1','2001','1',0,'2023-05-15 21:07:32'),(25,'1','1',1,'bf29885e40c46f4ed065ceb225636a40.png',7,1,'1',1,'1','2001','1',0,'2023-05-28 08:23:20'),(26,'s','1',1,'df0d9e2e9323465df98a4a58775dfd4f.png',15,0,'s',1,'1','2001','z1',60,'2023-05-29 06:18:10'),(27,'s','1',1,'7c6e9b441406f4076d5af1e54db78b6f.png',1,1,'s',1,'1','2001','z1',60,'2023-05-29 06:19:45'),(28,'1','1',1,'f4b6a8f36a788e5f53c828e9cac0d48d.png',4,1,'1',1,'1','2001','1',0,'2023-05-29 06:20:09'),(29,'1','11',1,'aadb449df1b89f92c236fd8e8010d467.png',0,0,'1',11,'11','2001','1',0,'2023-05-29 06:20:36'),(30,'clala','clala',999,'e060600401ec9f2ad20a049b2914b947.png',73,0,'clala',999,'999','2023','clala',60,'2023-06-01 17:44:15'),(31,'11','222',11,'cb473d3d170a5de31e8fb2e9e51639af.png',0,0,'11',111111,'11','2011','11',60,'2023-06-01 07:22:38'),(32,'11','222',11,'cdbd2c1e3eb69d3c5a2eb21e856440fb.png',0,0,'11',111111,'11','2011','11',60,'2023-06-01 07:24:59'),(33,'sss','sss',15,'08dd3fc8d870af47190cd3907bbbbf8d.png',0,0,'ss',17,'sss','2002','ssss',60,'2023-06-01 07:25:26'),(34,'zaz','zaza',65656,'a8ab2ecabe3045547d95a0f8e448f3be.png',63,0,'即次北部定林南院然进新题身。世给查手给青红每无电再快眼一己。程界发精行不来调间使或集日算县学。只调种转商大度达走开和管种关表效。即次北部定林南院然进新题身。世给查手给青红每无电再快眼一己。程界发精行不来调间使或集日算县学。只调种转商大度达走开和管种关表效。即次北部定林南院然进新题身。世给查手给青红每无电再快眼一己。程界发精行不来调间使或集日算县学。只调种转商大度达走开和管种关表效。即次北部定林南院然进新题身。世给查手给青红每无电再快眼一己。程界发精行不来调间使或集日算县学。只调种转商大度达走开和管种关表效',65656,'65656','2050','azaza',60,'2023-06-01 17:45:26'),(35,'2023.6.1','2023.6.1',15,'962c0e6a29792b29d170e17ce684bb60.png',3,0,'2023.6.1',15,'2023.6.1','1500','2023.6.1',60,'2023-06-01 17:40:10'),(36,'clala','clala',1,'6dcc938ffcc07302d7870f293307b200.png',5,0,'clala',8,'8','1502','clala',74,'2023-06-03 12:33:43'),(37,'丁真','丁真',1,'46cecbf1fdff6cde7d14648997ab1c12.png',6,1,'丁真',8,'8','1502','丁真',74,'2023-06-03 12:34:41'),(38,'clala','clala',1,'ed2e58567bf09f50c29f335ca945e4d3.png',0,0,'clala',8,'1*1*1','1502','clala',74,'2023-06-03 12:18:12'),(39,'clala','clala',1,'906dac6f700362010fa3d9c3369e3262.png',3,0,'clala',8,'8','1502','clala',74,'2023-06-03 12:34:07'),(40,'clala','clala',1,'fb8cf7b3784f21e4f08200fe2106e649.png',1,0,'clala',8,'1*1*1','1502','clala',74,'2023-06-03 12:24:33'),(41,'clala','clala',1,'7da4a7e7a6ed716ad64ef80c92593efd.png',1,1,'clala',8,'1*1*1','1502','clala',74,'2023-06-03 12:27:38'),(42,'clala','clala',1,'10937065cbb75ec5f918763978137c4a.png',2,1,'clala',8,'1*1*1','1502','clala',74,'2023-06-03 12:27:44'),(43,'clala','clala',1,'5fcb85f75c178b53f2a12b128393eeb4.png',2,0,'clala',8,'1*1*1','1502','clala',74,'2023-06-03 12:30:54'),(44,'撒大大','阿达',213,'6b9b2edbd3476e4daaf63a3a79a6a751.png',3,0,'zazaz',213123,'13231','5','azaza',75,'2023-06-03 13:17:52');
/*!40000 ALTER TABLE `art` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `art_order`
--

DROP TABLE IF EXISTS `art_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `art_order` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `art_id` int NOT NULL,
  `buy_time` datetime NOT NULL,
  `is_confirm` tinyint(1) NOT NULL DEFAULT '0',
  `state` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `art_order`
--

LOCK TABLES `art_order` WRITE;
/*!40000 ALTER TABLE `art_order` DISABLE KEYS */;
INSERT INTO `art_order` VALUES (1,22,6,'2023-04-10 17:44:18',1,1),(2,22,6,'2023-04-10 17:49:30',0,0),(3,22,5,'2023-04-10 17:49:44',0,1);
/*!40000 ALTER TABLE `art_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `cart_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `art_id_list` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`cart_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1,60,',30,8,35,1','2023-06-03 12:50:01'),(2,74,'1','2023-06-03 13:11:10'),(3,75,'37,39','2023-06-03 13:13:33');
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `floor_id` int NOT NULL AUTO_INCREMENT,
  `hole_id` int NOT NULL,
  `art_id` int NOT NULL,
  `user_id` int NOT NULL,
  `content` varchar(4095) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `likes` int NOT NULL DEFAULT '0',
  `create_at` datetime DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  `likes_user` varchar(4095) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `floor_th` int NOT NULL,
  PRIMARY KEY (`floor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,1,1,60,'i am the first',1,'2023-05-29 21:11:50',0,'60',1),(2,2,30,60,'依托答辩',1,'2023-05-30 22:52:06',0,',60',1),(3,2,30,60,'114514',1,'2023-05-30 17:17:42',0,',60',2),(4,4,30,60,'你好你好',0,'2023-05-31 14:57:45',0,'',1),(5,5,30,60,'我是第五',0,'2023-05-31 14:58:11',0,NULL,1),(6,6,30,60,'真的吗',0,'2023-05-31 15:24:21',0,NULL,1),(7,7,30,60,'你好你好',0,'2023-05-31 15:25:07',0,NULL,1),(8,2,30,60,'真的答辩',0,'2023-05-31 15:28:16',0,'',3),(9,4,30,60,'你好',0,'2023-05-31 15:33:36',0,NULL,2),(10,5,30,60,'101010',0,'2023-05-31 15:33:45',1,NULL,2),(11,7,30,60,'你坏',0,'2023-05-31 15:33:56',0,NULL,2),(12,8,30,60,'芝士丁真',1,'2023-05-31 15:34:12',0,',60',1),(13,5,30,60,'你怎么被删了',1,'2023-05-31 15:38:50',0,',60',3),(14,9,8,60,'没人？打个郊县',1,'2023-05-31 18:02:47',0,',60',1),(15,2,30,60,'是的',1,'2023-06-02 19:26:16',0,',60',4),(16,10,25,74,'丁真',0,'2023-06-03 12:37:08',0,NULL,1),(17,11,25,74,'666',0,'2023-06-03 12:37:12',0,NULL,1),(18,10,25,74,'',0,'2023-06-03 12:37:13',0,NULL,2),(19,10,25,74,'222',0,'2023-06-03 12:37:17',0,NULL,3),(20,12,37,75,'gg',1,'2023-06-03 13:06:29',0,',74',1),(21,12,37,75,'ff',0,'2023-06-03 13:06:47',0,NULL,2),(22,12,37,74,'kk',0,'2023-06-03 13:08:54',0,NULL,3),(23,13,37,75,'uu',0,'2023-06-03 13:09:24',0,NULL,1);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase`
--

DROP TABLE IF EXISTS `purchase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchase` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `art_id` int NOT NULL,
  `buy_at` datetime NOT NULL,
  `price` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase`
--

LOCK TABLES `purchase` WRITE;
/*!40000 ALTER TABLE `purchase` DISABLE KEYS */;
INSERT INTO `purchase` VALUES (1,60,2,'2023-05-31 17:03:31',0.01),(2,60,2,'2023-05-31 17:07:17',0.01),(3,60,2,'2023-05-31 17:07:44',0.01),(4,60,2,'2023-05-31 17:08:01',0.01),(5,60,2,'2023-05-31 17:09:09',0.01),(6,60,2,'2023-05-31 17:32:10',0.01),(7,60,30,'2023-05-31 17:50:17',2),(8,74,25,'2023-06-03 12:35:10',1),(9,74,42,'2023-06-03 12:44:47',1),(10,74,28,'2023-06-03 12:46:50',1),(11,60,41,'2023-06-03 12:50:00',1),(12,74,37,'2023-06-03 13:11:10',1);
/*!40000 ALTER TABLE `purchase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transfer_account`
--

DROP TABLE IF EXISTS `transfer_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transfer_account` (
  `id` int NOT NULL AUTO_INCREMENT,
  `from_id` int NOT NULL,
  `to_id` int NOT NULL,
  `amount` double NOT NULL,
  `create_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transfer_account`
--

LOCK TABLES `transfer_account` WRITE;
/*!40000 ALTER TABLE `transfer_account` DISABLE KEYS */;
INSERT INTO `transfer_account` VALUES (1,22,22,1240,'2023-04-08 16:09:34'),(2,22,22,30,'2023-04-08 16:10:59'),(3,22,22,666,'2023-04-08 16:11:13'),(4,22,22,666,'2023-04-08 16:14:21'),(5,22,22,-666,'2023-04-08 16:14:23'),(6,22,22,-114514,'2023-04-08 16:15:53'),(7,22,22,91,'2023-04-08 16:33:24'),(8,22,22,1100,'2023-04-08 16:33:57'),(9,22,22,2691,'2023-04-08 16:47:35'),(10,22,22,0,'2023-04-08 16:53:25'),(11,22,2,5,'2023-04-08 23:06:42'),(12,22,2,70,'2023-04-08 23:08:23'),(13,22,2,5,'2023-04-08 23:09:03'),(14,22,2,5,'2023-04-08 23:16:31'),(15,22,2,0,'2023-04-08 23:16:34'),(16,22,2,-5,'2023-04-08 23:16:38'),(17,22,2,5,'2023-04-08 23:26:32'),(18,22,2,371,'2023-04-10 17:07:04'),(19,22,2,371,'2023-04-10 17:11:55'),(20,22,2,371,'2023-04-10 17:12:30'),(21,22,2,371,'2023-04-10 17:16:42'),(22,22,2,371,'2023-04-10 17:35:14'),(23,22,22,9,'2023-04-10 17:36:06'),(24,22,22,9,'2023-04-10 17:43:43'),(25,22,2,371,'2023-04-10 17:43:52'),(26,22,2,371,'2023-04-10 17:44:18'),(27,22,2,371,'2023-04-10 17:49:29'),(28,22,2,10,'2023-04-10 17:49:44'),(29,2,1,371,'2023-04-10 20:20:06'),(30,4,3,13822,'2023-04-12 12:26:53'),(31,7,7,6259,'2023-04-12 19:18:34'),(32,10,10,6259,'2023-04-12 19:40:04'),(33,11,11,6259,'2023-04-12 19:46:14'),(34,11,1,6259,'2023-04-12 19:46:14'),(35,11,11,6259,'2023-04-12 19:48:07'),(36,11,1,6259,'2023-04-12 19:48:07'),(37,6,6,6259,'2023-04-12 19:52:27'),(38,6,1,6259,'2023-04-12 19:52:27'),(39,22,22,1,'2023-04-14 19:13:47'),(40,22,22,1,'2023-04-14 19:14:22'),(41,12,12,1000,'2023-04-14 19:50:46'),(42,12,1,1000,'2023-04-14 19:50:46'),(43,1,1,36,'2023-04-14 20:20:30'),(44,1,1,0.1,'2023-04-14 20:23:53'),(45,1,1,9,'2023-04-14 20:24:16'),(46,1,1,9,'2023-04-14 20:24:31'),(47,1,1,0.1,'2023-04-14 20:24:55'),(48,1,1,0.01,'2023-04-14 20:25:17'),(49,1,1,0.9,'2023-04-14 20:25:27'),(50,14,14,7440,'2023-04-15 01:02:08'),(51,14,1,7440,'2023-04-15 01:02:08'),(52,17,17,36000000,'2023-04-15 02:01:15'),(53,17,2,36000000,'2023-04-15 02:01:15'),(54,2,17,36000000,'2023-04-15 02:02:18'),(55,17,17,36000000,'2023-04-15 02:02:55'),(56,17,2,36000000,'2023-04-15 02:02:55'),(57,2,1,36000000,'2023-04-15 02:03:05'),(58,1,1,999.6,'2023-04-15 23:15:12'),(59,1,1,1,'2023-04-15 23:18:57'),(60,1,1,1,'2023-04-15 23:19:08'),(61,1,1,3,'2023-04-15 23:19:20'),(62,1,1,1,'2023-04-15 23:19:27'),(63,1,1,100,'2023-04-15 23:19:35'),(64,22,22,1,'2023-04-16 16:54:14'),(65,22,22,1.01,'2023-04-16 16:54:21');
/*!40000 ALTER TABLE `transfer_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `hash` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` char(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `nationality` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `balance` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin','202cb962ac59075b964b07152d234b70','','123@m.fudan.edu.cn','13532321213','asx','sax',NULL,'as',0.09),(3,'hhh','febede4dd696675b3aebdb93cbc01a33','6b1f69e6fc7259f13dfa59ff707c4772','','','sx',NULL,NULL,'x',0),(21,'kkk','e10adc3949ba59abbe56e057f20f883e','','adsads','412','as',NULL,NULL,'sx',0),(22,'python','202cb962ac59075b964b07152d234b70','','859@qq.com','150',NULL,'sa','0000-00-00','a',52),(26,'dollar','202cb962ac59075b964b07152d234b70','','assq@qq.com','13532321212','as',NULL,'0000-00-00',NULL,0),(37,'user','200820e3227815ed1756a6b531e7e0d2','','asasdsasq@qq.com','13911111111','as',NULL,'0000-00-00','sx',252),(38,'shoper','200820e3227815ed1756a6b531e7e0d2','','9slsl@qq.com','13266666666','xa',NULL,'0000-00-00','a',5),(39,'kasdjlask','5b53d0616bc3cf2ad7816da398bf25bf','','n.jdkqcqmoy@qq.com','18614425484',NULL,'sx',NULL,'xx',2),(45,'wssj','d6f050cae921c1a0eae2b5995ca1bc7b','eea58d294534743c7c0beb4446768f25','g.zhjevcfj@qq.com','18174244943','sx','a','0000-00-00','sx',2),(46,'adsadwq','4b9ddedd80b446aea09d3079f9b42971','','s.rytnh@qq.com','18138451245','sx','xas','0000-00-00',NULL,25),(47,'das9d','be272d37655bb01dc0397223787158fd','f0eaa2b6693c8bde416660d643400c21','l.xdhpvfuog@qq.com','19873356162','sxas','sxs',NULL,'xa',25),(48,'asdas','724d4a52db479d1118f0de824415eaf5','','r.soek@qq.com','18617387812','asa',NULL,'0000-00-00','xxas',2),(50,'0','febede4dd696675b3aebdb93cbc01a33','6b1f69e6fc7259f13dfa59ff707c4772',NULL,'',NULL,NULL,NULL,NULL,52),(58,'myh','470b7f272a94ee3a4faff962cff25733','','ww@qq.com','135','哈哈哈哈哈','female','2023-05-25','China',552),(59,'mhyyy','28195a6b4625209b58401bb2fe3b9578','fc4840ad2a5736f2daafae3837cfa1dc','ww@qq.com','135','哈哈哈哈哈','female','2023-05-25','China',252),(60,'myhuu','cfdd718eb49589307a4be37d99176a0c','994573609d89b47d47b0865874450519','ww@qq.com','135','哈哈哈哈哈','female','2023-05-25','China',214545.01000000018),(61,'14451','090f2a522b9ff9ac3dce0e24b009d226','57607a3b448d1c17ee9cec2e1e101108','ww@qq.com','13096969699','哈哈哈哈哈','female','2023-05-20','China',11),(62,'496149964','7d47e86649795665a772dbaa4316633e','415607a5fb90cba4574d3a4227b3d10f','ww@qq.com','13096969696','哈哈哈哈哈','female','2023-05-20','China',14),(63,'wqqwewq','3470416229e9ee4652e5af53b22ed90e','477c3023943b115a50d3d9b81d2a9f67','ww@qq.com','13096969697','哈哈哈哈哈','female','2023-05-20','China',25),(64,'496149964qweqeq','f4050bf3dd40bba16276676d28c4dbe7','349c9136aa14c549332768ee2637fc3c','791@qq.com','13096969691','哈哈哈66666','female','2023-05-17','414',74),(65,'zhu','2b1caaf9e1e00803e3c40d7bfd2303a2','71b50ca20123ebcc2f989f61c207e845','ww@qq.com','13096969695','哈哈哈哈哈','other','2023-05-11','China',7),(66,'66','66','6','6','66','6','6','0000-00-00','6',0),(67,'qwe','e46612f921210adb29648711fc93d443','f26084b338732411926ab461f1370afb','791@qq.com','13012341234','哈哈哈66666','secret','2023-06-03','China',0),(68,'zzz','c79bdbff64e264d9263b1f1281a9f62a','5a72661c2d583373d548af9bec7e6eb1','0000@qq.com','13012512511','1414','female','2023-06-03','',0),(69,'www','c9130130d758914831af20d19adcfb06','ba9b77ad48ee2f783fd1d01e4c5743bd','ww@qq.com','13096969698','哈哈哈哈哈','secret','2023-06-03','',0),(70,'eee','ff7871e008998d56915ab29e1dc12a9b','3185309a3ced36893bd4e4ac62f42ba4','791@qq.com','13096969601','哈哈哈66666','secret','2023-06-03','',0),(71,'rrr','78d996896b0f7fc32175437a03657bbd','1d8e6906010a4d8621682dddffae67b0','ww@qq.com','13096969600','哈哈哈哈哈','secret','2023-06-03','',0),(72,'ttt','dc50798462bf8302e6a5d5cf848785d3','e7273423971e091cc6f086c58e88d06e','791@qq.com','13096969603','哈哈哈66666','secret','2023-06-03','',0),(73,'','5287d14f5491c7e2b555f8c56abd6fc2','3a458b5b1c7464d54c02254890b7b834','791@qq.com','13096969605','哈哈哈66666','other','2023-06-03','',0),(74,'sss','6223c172269ae5fc89478e13d28da89a','7691d7fcbf9fa729ac63d4f5a4b8a7d9','791@qq.com','13096969606','哈哈哈66666','secret','2023-06-03','',114516),(75,'qwer','8b128e5a92d44777d1f8835d0b0f0743','0fb8b6000fc9101f02d56f33af4896f8','791@qq.com','13096969655','哈哈哈66666','secret','2023-06-03','',500);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-03 15:41:35
