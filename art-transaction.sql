/*
SQLyog Ultimate v10.00 Beta1
MySQL - 8.0.32 : Database - transaction
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`transaction` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `transaction`;

/*Table structure for table `account` */

DROP TABLE IF EXISTS `account`;

CREATE TABLE `account` (
  `account_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `state` tinyint(1) NOT NULL DEFAULT '1',
  `amount` double NOT NULL DEFAULT '0',
  PRIMARY KEY (`account_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `account` */

insert  into `account`(`account_id`,`user_id`,`state`,`amount`) values (1,1,1,36090116.01),(2,1,1,49666.6),(3,22,1,14188.99),(4,22,1,4.01),(5,43,1,0),(6,43,1,0),(12,26,1,0),(13,45,1,0),(14,45,1,0),(15,46,1,0),(16,47,1,0),(17,48,1,36000000),(18,48,1,0);

/*Table structure for table `art` */

DROP TABLE IF EXISTS `art`;

CREATE TABLE `art` (
  `art_id` int unsigned NOT NULL AUTO_INCREMENT,
  `art_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `author` varchar(30) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `year` int DEFAULT NULL,
  `price` double unsigned NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `number` int unsigned NOT NULL,
  `state` tinyint NOT NULL DEFAULT '0',
  `remain_number` int NOT NULL,
  PRIMARY KEY (`art_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `art` */

insert  into `art`(`art_id`,`art_name`,`author`,`year`,`price`,`description`,`number`,`state`,`remain_number`) values (1,'asdasdasdasd',NULL,NULL,0.01,'asdadasdasd',1,1,0),(2,'dasdsadsa',NULL,NULL,0.01,'daddasda',1,1,1),(3,'第接使际打几',NULL,NULL,86,'命响列日走书此能由干拉受万增又等参集。为有报联严复运温土增育把加质来等。但引及况老山列使住系在众眼传式被观。学成何权断总千相体转小单正义机育真。照计高严满好取列己因千很子性经复术。',33,2,33),(4,'水知目',NULL,NULL,36,'结查动热观科没九响县较即相性始强何年。他后组比打非非实农较建增作位表。始动华而数来体那信持共都科。向党来际四老没最在眼调重用阶。清参五身报众约张劳育很决或管易。取红化月厂实存去极维天部走例其了。号王革然作压阶线把度毛战车保个。',40,0,40),(5,'直比确斯时铁',NULL,NULL,5,'想经该特例结等几维反号油。风门适志立音知手红场研节解之。张物证列至米论别属历严十山三。',94,1,2),(6,'身育相此',NULL,NULL,53,'即次北部定林南院然进新题身。世给查手给青红每无电再快眼一己。程界发精行不来调间使或集日算县学。只调种转商大度达走开和管种关表效。',99,1,43),(7,'则多点',NULL,NULL,23,'式小个别提难易本目为先不基维小。西法非形革程持算车广但持周车此。听位多接响速会立系展价只这。消儿万存般光得养论能产习部公。接证装组干道会片山车外步打必。期究线种任保办采真山老片打看然济收织。',73,0,73),(8,'研百文过特院场',NULL,NULL,4,'土观现写约县得采值小何候压。每社便位什她没来这周色质际期布期需。市山斯起压次代证飞面共位区热。压更白青育四精数龙她养东。',64,2,64),(9,'sadsa',NULL,NULL,123,'sadsa',2,1,2),(10,'goodsssssss',NULL,NULL,114.51,'desssssss',114514,1,114514),(11,'5',NULL,NULL,1,'sadsad',1,0,114514),(12,'goodsssssss',NULL,NULL,114.51,'desssssss',114514,1,114514),(13,'goodsssssss',NULL,NULL,114.51,'desssssss',114514,1,114514),(14,'goodsssssss',NULL,NULL,114.51,'desssssss',114514,1,114514),(15,'asdasdasdsa',NULL,NULL,0.01,'sdasdasdas',1,1,114514),(16,'da5sd5as4',NULL,NULL,141.14,'5sada6d4a5dsa4dsa',66,1,114514),(17,'asdasdas',NULL,NULL,0.01,'dasdasdas',1,1,114514),(18,'sdasdasd',NULL,NULL,0.01,'sadsd',1,1,1),(19,'大声道撒多',NULL,NULL,0.01,'dwqdqwd',1,2,1),(20,'dsad',NULL,NULL,0.01,'sdadsads',1,2,1),(21,'asdasd',NULL,NULL,0.01,'asdsadasd',1,1,1);

/*Table structure for table `art_order` */

DROP TABLE IF EXISTS `art_order`;

CREATE TABLE `art_order` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `art_id` int NOT NULL,
  `number` int NOT NULL,
  `buy_time` datetime NOT NULL,
  `is_confirm` tinyint(1) NOT NULL DEFAULT '0',
  `level` int DEFAULT NULL,
  `state` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `art_order` */

insert  into `art_order`(`order_id`,`user_id`,`art_id`,`number`,`buy_time`,`is_confirm`,`level`,`state`) values (1,22,6,7,'2023-04-10 17:44:18',1,NULL,1),(2,22,6,7,'2023-04-10 17:49:30',0,NULL,0),(3,22,5,2,'2023-04-10 17:49:44',0,NULL,1);

/*Table structure for table `art_pic` */

DROP TABLE IF EXISTS `art_pic`;

CREATE TABLE `art_pic` (
  `id` int NOT NULL AUTO_INCREMENT,
  `art_id` int NOT NULL,
  `pic` longblob NOT NULL,
  `state` tinyint NOT NULL DEFAULT '0' COMMENT '0未批准1批准2废弃',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `art_pic` */


/*Table structure for table `cart` */

DROP TABLE IF EXISTS `cart`;

CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `art_id` int NOT NULL,
  `update_at` datetime NOT NULL,
  `is_valid` tinyint(1) NOT NULL DEFAULT '1',
  `number` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `cart` */

insert  into `cart`(`id`,`user_id`,`art_id`,`update_at`,`is_valid`,`number`) values (2,22,2,'2023-04-10 19:48:28',1,155),(3,22,6,'2023-04-10 19:46:03',1,42),(4,22,5,'2023-04-10 19:46:06',1,42),(5,22,1,'2023-04-10 19:46:08',1,42),(6,1,21,'2023-04-16 22:14:21',1,1);

/*Table structure for table `transfer_account` */

DROP TABLE IF EXISTS `transfer_account`;

CREATE TABLE `transfer_account` (
  `id` int NOT NULL AUTO_INCREMENT,
  `from_id` int NOT NULL,
  `from_type` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `to_id` int NOT NULL,
  `to_type` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `amount` double NOT NULL,
  `create_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `transfer_account` */

insert  into `transfer_account`(`id`,`from_id`,`from_type`,`to_id`,`to_type`,`amount`,`create_at`) values (1,22,'user',22,'user',1240,'2023-04-08 16:09:34'),(2,22,'user',22,'user',30,'2023-04-08 16:10:59'),(3,22,'user',22,'user',666,'2023-04-08 16:11:13'),(4,22,'user',22,'user',666,'2023-04-08 16:14:21'),(5,22,'user',22,'user',-666,'2023-04-08 16:14:23'),(6,22,'user',22,'user',-114514,'2023-04-08 16:15:53'),(7,22,'user',22,'shop',91,'2023-04-08 16:33:24'),(8,22,'user',22,'shop',1100,'2023-04-08 16:33:57'),(9,22,'user',22,'shop',2691,'2023-04-08 16:47:35'),(10,22,'user',22,'shop',0,'2023-04-08 16:53:25'),(11,22,'user',2,'middle',5,'2023-04-08 23:06:42'),(12,22,'user',2,'middle',70,'2023-04-08 23:08:23'),(13,22,'user',2,'middle',5,'2023-04-08 23:09:03'),(14,22,'user',2,'middle',5,'2023-04-08 23:16:31'),(15,22,'user',2,'middle',0,'2023-04-08 23:16:34'),(16,22,'user',2,'middle',-5,'2023-04-08 23:16:38'),(17,22,'user',2,'middle',5,'2023-04-08 23:26:32'),(18,22,'user',2,'middle',371,'2023-04-10 17:07:04'),(19,22,'user',2,'middle',371,'2023-04-10 17:11:55'),(20,22,'user',2,'middle',371,'2023-04-10 17:12:30'),(21,22,'user',2,'middle',371,'2023-04-10 17:16:42'),(22,22,'user',2,'middle',371,'2023-04-10 17:35:14'),(23,22,'user',22,'shop',9,'2023-04-10 17:36:06'),(24,22,'user',22,'shop',9,'2023-04-10 17:43:43'),(25,22,'user',2,'middle',371,'2023-04-10 17:43:52'),(26,22,'user',2,'middle',371,'2023-04-10 17:44:18'),(27,22,'user',2,'middle',371,'2023-04-10 17:49:29'),(28,22,'user',2,'middle',10,'2023-04-10 17:49:44'),(29,2,'middle',1,'profit',371,'2023-04-10 20:20:06'),(30,4,'shop',3,'user',13822,'2023-04-12 12:26:53'),(31,7,'shop',7,'shop',6259,'2023-04-12 19:18:34'),(32,10,'shop',10,'shop',6259,'2023-04-12 19:40:04'),(33,11,'shop',11,'shop',6259,'2023-04-12 19:46:14'),(34,11,'shop',1,'profit',6259,'2023-04-12 19:46:14'),(35,11,'shop',11,'shop',6259,'2023-04-12 19:48:07'),(36,11,'shop',1,'profit',6259,'2023-04-12 19:48:07'),(37,6,'shop',6,'shop',6259,'2023-04-12 19:52:27'),(38,6,'shop',1,'profit',6259,'2023-04-12 19:52:27'),(39,22,'user',22,'shop',1,'2023-04-14 19:13:47'),(40,22,'user',22,'shop',1,'2023-04-14 19:14:22'),(41,12,'shop',12,'shop',1000,'2023-04-14 19:50:46'),(42,12,'shop',1,'profit',1000,'2023-04-14 19:50:46'),(43,1,'middle',1,'middle',36,'2023-04-14 20:20:30'),(44,1,'middle',1,'middle',0.1,'2023-04-14 20:23:53'),(45,1,'middle',1,'middle',9,'2023-04-14 20:24:16'),(46,1,'profit',1,'profit',9,'2023-04-14 20:24:31'),(47,1,'profit',1,'profit',0.1,'2023-04-14 20:24:55'),(48,1,'profit',1,'profit',0.01,'2023-04-14 20:25:17'),(49,1,'profit',1,'profit',0.9,'2023-04-14 20:25:27'),(50,14,'shop',14,'shop',7440,'2023-04-15 01:02:08'),(51,14,'shop',1,'profit',7440,'2023-04-15 01:02:08'),(52,17,'user',17,'user',36000000,'2023-04-15 02:01:15'),(53,17,'user',2,'middle',36000000,'2023-04-15 02:01:15'),(54,2,'middle',17,'user',36000000,'2023-04-15 02:02:18'),(55,17,'user',17,'user',36000000,'2023-04-15 02:02:55'),(56,17,'user',2,'middle',36000000,'2023-04-15 02:02:55'),(57,2,'middle',1,'profit',36000000,'2023-04-15 02:03:05'),(58,1,'middle',1,'middle',999.6,'2023-04-15 23:15:12'),(59,1,'middle',1,'middle',1,'2023-04-15 23:18:57'),(60,1,'middle',1,'middle',1,'2023-04-15 23:19:08'),(61,1,'middle',1,'middle',3,'2023-04-15 23:19:20'),(62,1,'middle',1,'middle',1,'2023-04-15 23:19:27'),(63,1,'middle',1,'middle',100,'2023-04-15 23:19:35'),(64,22,'user',22,'shop',1,'2023-04-16 16:54:14'),(65,22,'user',22,'shop',1.01,'2023-04-16 16:54:21');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `isadmin` tinyint(1) NOT NULL DEFAULT '0' COMMENT '1管理员',
  `isseller` tinyint(1) NOT NULL COMMENT '1商家',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` char(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_card` char(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `user` */

insert  into `user`(`id`,`isadmin`,`isseller`,`username`,`phone`,`id_card`,`email`,`password`) values (1,1,1,'admin','13532321213','4294967295','123@m.fudan.edu.cn','202cb962ac59075b964b07152d234b70'),(2,0,1,'a','11','1','11','1'),(3,0,0,'hhh','','','','114514'),(4,0,0,'hahahaha','030513485','114514','111@qq.com','114514'),(5,0,0,'javaisthebest','555','666','125@qq.com','sbjava'),(6,0,1,'55','55','asdad','asdsadsa','55'),(7,0,0,'4848','10','asdsadsd','asdad','114514'),(8,0,1,'java','030513','465465989756','aaa@qq.com','nmsl'),(9,0,0,'sadsadasd','030514','51245214','999@qq.com','hhhhhh'),(10,0,1,'ython','030515','asdasdasd','99999@qq.com','114514'),(11,0,0,'tattw','030516','119498489','525@qq.com','114514'),(12,0,0,'hahahha','88946513','84561','9@qq.com','hhhh'),(13,0,0,'11n','111111','asdasdasdas','111','111'),(14,0,1,'2542542','45242','4254524','524524','24524'),(15,0,0,'HHHHH','01010','10101','10101','01010'),(16,0,1,'asdsadasdqwq','asdasd','sadsadad','dssadadsds','asdsa'),(17,0,1,'adsada','dsdasd','asdasd','asdasdas','asdasdsa'),(18,0,1,'中文','asdasd','asda','weqdas','wqewqdas'),(19,0,1,'fsefe','51156505555','156165','65132','55824'),(20,0,1,'wqdq','asdsa','asdsa','sadsad','asdsa'),(21,0,1,'kkk','412','494','adsads','e10adc3949ba59abbe56e057f20f883e'),(22,0,1,'python','150','130203199001011589','859@qq.com','202cb962ac59075b964b07152d234b70'),(23,0,1,'sadadasd','13096555822','140311200001010000','2673986789@qq.com','dab8a8224e93217d97b18e23be32e3b9'),(24,0,1,'xzczxcxzc','13096555888','140311200001010011','2673986749@qq.com','dab8a8224e93217d97b18e23be32e3b9'),(25,0,1,'8sa9d7as8','15202020202','140322200101011111','2673986791@qq.com','ed734e456ae2582570c995cd1818a471'),(26,0,1,'dollar','13532321212','140311199911110102','assq@qq.com','202cb962ac59075b964b07152d234b70'),(27,0,1,'admindwda','13095559822','140311200002292119','666@qq.com','349fc7fbed5867d8c497590ce3e8a404'),(28,0,1,'97845615sa','13096221002','140311200212012667','sadsa89@qq.com','349fc7fbed5867d8c497590ce3e8a404'),(29,0,0,'asdsasad','13096451244','14031120027','assqss@qq.com','349fc7fbed5867d8c497590ce3e8a404'),(30,0,0,'asdsasadsa','13096666666','14031120021225257','ads749@qq.com','349fc7fbed5867d8c497590ce3e8a404'),(31,0,1,'asdsasasd','13096662525','140311200465924117','sad6749@qq.com','349fc7fbed5867d8c497590ce3e8a404'),(32,0,1,'asdsasas9','13096507228','14643164','26739ssa791@qq.com','349fc7fbed5867d8c497590ce3e8a404'),(33,0,1,'asdsasasds','13049846512','1403112002126546','as55q@qq.com','c75fadf14d5e1756a8c0a11c931afeec'),(34,0,1,'assdsd','13096588552','140302200109051255','sqss@qq.com','c75fadf14d5e1756a8c0a11c931afeec'),(35,0,1,'sjz_xinhua','15689765412','13010519900411162X','sdasd@qq.com','200820e3227815ed1756a6b531e7e0d2'),(36,0,0,'ghghhg','15622222222','130105199004113326','ghhd@qq.com','4ce441b16501d406f80aaba8e295089a'),(37,0,0,'user','13911111111','130203199001014261','asasdsasq@qq.com','200820e3227815ed1756a6b531e7e0d2'),(38,0,1,'shoper','13266666666','130203199001011589','9slsl@qq.com','200820e3227815ed1756a6b531e7e0d2'),(39,0,1,'kasdjlask','18614425484','110105199001016594','n.jdkqcqmoy@qq.com','5b53d0616bc3cf2ad7816da398bf25bf'),(40,0,0,'asdsad','13214238256','11010519900101963X','c.gstcqjjbzv@qq.com','adc8b5df117c119d1e31926aaae0dcd4'),(41,0,1,'sadasd','18172599615','110105199001013094','w.bcpodpjfn@qq.com','95d63a571a0e8eca08365942599aa8aa'),(42,0,1,'qqqqqq','13000000000','140311200212292117','2673987749@qq.com','7fb0cadbbf0ca971457641ddf7ba27d0'),(43,0,1,'123ssa','18184316098','13030219570215855X','o.rxysci@qq.com','5c479b7f1870101d648106bb5c974b33'),(44,0,0,'asds99','18165719524','140725195901315966','o.isttsc@qq.com','a2845dd670f56021fe982465499a8e38'),(45,0,1,'wssj','18174244943','350781196403071369','g.zhjevcfj@qq.com','c503c0d21ee21f539553f122ec82936b'),(46,0,1,'adsadwq','18138451245','350504200810256876','s.rytnh@qq.com','4b9ddedd80b446aea09d3079f9b42971'),(47,0,1,'das9d','19873356162','331122198804292617','l.xdhpvfuog@qq.com','32c40a95330bbaac8091f2228bf92898'),(48,0,1,'asdas','18617387812','533123200511132447','r.soek@qq.com','724d4a52db479d1118f0de824415eaf5');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;