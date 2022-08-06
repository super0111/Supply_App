/*
SQLyog Community v13.1.6 (64 bit)
MySQL - 10.4.18-MariaDB : Database - tradeez
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`tradeez` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `tradeez`;

/*Table structure for table `buyer` */

DROP TABLE IF EXISTS `buyer`;

CREATE TABLE `buyer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4;

/*Data for the table `buyer` */

insert  into `buyer`(`id`,`name`,`email`,`password`) values 
(1,'test','test@test.com','$2b$10$ExXGS.8M9oOON2drnaEseu8HzfKr8ZgRbDuveS6HAGjS3XaU0ogT6'),
(2,'hello','hello@hello.com','$2b$10$HRL2Qma/Sf5sl1z2pHzKwuUO/j34aYEFHNqxVZDrFe2sH.ue6DqSm'),
(3,'hello123','hello123@hello.com','$2b$10$Gvt1yXoP0UjFNEdgqkdJK.lNKDwulgLgOc9EE4zc/6ehAhHjHxm7a'),
(4,'hello111@hello.com','hello111@hello.com','$2b$10$WVmEfrW850UTi.OkDjNJ6Oa53YajTCkpvh/Zp3QyqdZ4vlSC8XWC.'),
(5,'hello@hello.com','hello@hello.com','$2b$10$bXNT8ZENP/zScNxJDfyEruANfWj8REbP23/jGDW3L2vWx.6bGh3Gi'),
(6,'xcgsdfgsd@dfg.dsfg','xcgsdfgsd@dfg.dsfg','$2b$10$q21jcF0PKE1lERJMzw1Tf.FSpCJzDUDK7S9ghYXTIUE4O83XDhDR6'),
(7,'sdfgsdf@dfg.dfg','sdfgsdf@dfg.dfg','$2b$10$pfpL2rpvIzQ1f7yZ4CBXrevJ/5GmPBQerXHPE76NdUDoX.MTwUoKO'),
(8,'sdfsadfas@dfg.dfgsf','sdfsadfas@dfg.dfgsf','$2b$10$cwlRKNe1ROj.tEt1d9OyJO88KsPYSIDY6ogHtucYEnPHeIKwhq9Xe'),
(9,'sdfgdsfgsdfg@dgsfd.sdfg','sdfgdsfgsdfg@dgsfd.sdfg','$2b$10$A.f3vq45O7DRjVVpp5q07OKHPvbPiXuiPAKe6zgYa8fG6pODGLMgm'),
(10,'sdfdsf@dsfg.sdfg','sdfdsf@dsfg.sdfg','$2b$10$iOJVRP6Cb/glNcVdmBTOHOiNHnJUgA9eylH0gtxlFn/i63S8Bo0hW'),
(11,'sdfgdsf@sdgf.sdfg','sdfgdsf@sdgf.sdfg','$2b$10$UN.6aCp.ku743l2HftGxm.64VGW76JwCfcRMQTQRpemUjNDK/.6O6'),
(12,'werqwer@dfg.dsfg','werqwer@dfg.dsfg','$2b$10$YFtrWzCm1yfPU4GGNsJAbuTlXOeUFgkfPMEzWF9FgP7uRg8WJSUY2'),
(13,'sdfgdsfg@dsfg.sdfg','sdfgdsfg@dsfg.sdfg','$2b$10$/CAzmG/2eP0z/apHKBaJ9.eSUxlabY.LxeuOA9/xRqAOir2dXOhRm'),
(14,'xcvcxbvxcvb@dsfg.sdfg','xcvcxbvxcvb@dsfg.sdfg','$2b$10$ValXeuX4hPni7pnmcoXxa.5i/Dr4lI6bZ6P2stLBTueU.FXTnsN3W'),
(15,'sdfgsdf@dfgds.sdfgsd','sdfgsdf@dfgds.sdfgsd','$2b$10$A/T1/NJ5xUfbpDtBdH/Hn.G6KRiwnt/ljmRDTOXDi7nA8eU6EnndW'),
(16,'sven','svendev1222@mail.ru','$2b$10$T9uG2cCt0FdjpO02yY2e1u4wzUXxrDZsqxFZUG/JlJ9ew1T.YUhKK'),
(17,'sven','sven@gmail.com','$2b$10$UPj/f73Djr3voom0Kx1NgeXGi5SYkGz6vm75q1DpPZ5LOZ7menmWe'),
(18,'svendev','sven@mail.com','$2b$10$46UEUhV/ce4KhwyXzuCffuA2D7CaL20mlQQmQS4woiYSKCF/2y9gi'),
(19,'sven','sven@mail.com','$2b$10$6P27PIAvPzqLLfKgTAVC1uwcYNqFz0YwSVcdK9Yu2NG4kQwaz32M2');

/*Table structure for table `buyer_info` */

DROP TABLE IF EXISTS `buyer_info`;

CREATE TABLE `buyer_info` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(10) NOT NULL,
  `company_name` varchar(250) NOT NULL,
  `business_type` varchar(250) NOT NULL,
  `industry_type` varchar(250) NOT NULL,
  `gst_number` varchar(20) NOT NULL,
  `manufacture_type` varchar(250) NOT NULL,
  `mobile` int(15) NOT NULL,
  `email` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;

/*Data for the table `buyer_info` */

insert  into `buyer_info`(`id`,`user_id`,`company_name`,`business_type`,`industry_type`,`gst_number`,`manufacture_type`,`mobile`,`email`) values 
(1,'1','sdfsadfsad','sdafdsfsd','sdfsdf','2343243','dffdgxc',3453454,''),
(2,'2','sdfsadfsad','sdafdsfsd','sdfsdf','2343243','dffdgxc',3453454,''),
(3,'3','sdfsadfsad','sdafdsfsd','sdfsdf','2343243','dffdgxc',3453454,''),
(4,'4','xcvxcvb','test','sdfsdf','2343243','dffdgxc',3453454,''),
(5,'5','xcvxcvb','undefined','sdfsdf','2343243','dffdgxc',3453454,''),
(6,'6','xcvxcvb','undefined','xcvb','2343243','dffdgxc',3453454,''),
(7,'7','xcvxcvb','undefined','xcvb','xcvbcxv','dffdgxc',3453454,''),
(8,'8','xcvxcvb','undefined','xcvb','xcvbcxv','xcvb',3453454,''),
(9,'9','xcvxcvb','undefined','xcvb','xcvbcxv','xcvb',34563456,''),
(10,'10','xcvxcvb','undefined','xcvb','xcvbcxv','xcvb',34563456,''),
(11,'11','xcvxcvb','undefined','xcvb','xcvbcxv','xcvb',34563456,''),
(14,'10','asdfsad','undefined','asdfd','asdf','asdf',34563456,''),
(15,'11','dfsgdsf','undefined','sdfg','sdfg','dfgdfs',4564564,''),
(16,'12','sdfgsdags','undefined','sdfgdsf','sdfgsd','dfghdfs',456456456,''),
(17,'16','sven','undefined','product 1','GST','product 1',123123123,''),
(18,'18','sven','undefined','product 1','GST','product 1',123123,'');

/*Table structure for table `categories` */

DROP TABLE IF EXISTS `categories`;

CREATE TABLE `categories` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `value` varchar(200) NOT NULL,
  `created_by` varchar(250) NOT NULL,
  `created_date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;

/*Data for the table `categories` */

insert  into `categories`(`id`,`name`,`value`,`created_by`,`created_date`) values 
(1,'construction','Construction','','2022-06-13'),
(2,'home_furniture','Home Furnishings And Furniture','','2022-06-13'),
(3,'chemicals','Chemicals','','2022-06-13'),
(4,'apparels','Apparels','','2022-06-13'),
(5,'textile','Textile','','2022-06-26'),
(6,'electrical_supplies','Electrical Supplies\r\n','','2022-06-26'),
(7,'agriculture','Agriculture','','2022-06-26');

/*Table structure for table `company` */

DROP TABLE IF EXISTS `company`;

CREATE TABLE `company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_name` varchar(1000) NOT NULL,
  `address` varchar(1000) NOT NULL,
  `phone_number` int(10) NOT NULL,
  `website` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `company` */

/*Table structure for table `directors` */

DROP TABLE IF EXISTS `directors`;

CREATE TABLE `directors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(250) NOT NULL,
  `middle_name` varchar(250) NOT NULL,
  `last_name` varchar(250) NOT NULL,
  `email` varchar(1000) NOT NULL,
  `phone_number` int(10) NOT NULL,
  `aadhar_number` int(15) NOT NULL,
  `pan_number` varchar(10) NOT NULL,
  `addhar_link` varchar(1000) NOT NULL,
  `pan_link` varchar(1000) NOT NULL,
  `company_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;

/*Data for the table `directors` */

/*Table structure for table `orders` */

DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_date` date NOT NULL,
  `category_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `quoted_amount` int(11) NOT NULL,
  `status` varchar(200) NOT NULL,
  `last_updated` date DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(10) DEFAULT NULL,
  `sub_product_id` varchar(10) DEFAULT NULL,
  `remarks` varchar(1000) NOT NULL,
  `expected_delivery_date` date NOT NULL,
  `quantity_no` int(11) NOT NULL,
  `seller_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;

/*Data for the table `orders` */

insert  into `orders`(`id`,`created_date`,`category_id`,`quantity`,`quoted_amount`,`status`,`last_updated`,`user_id`,`product_id`,`sub_product_id`,`remarks`,`expected_delivery_date`,`quantity_no`,`seller_id`) values 
(1,'2022-07-04',1,1,3432,'CREATED',NULL,1,44459,NULL,'dsafds','2022-07-21',100,NULL),
(2,'2022-07-04',1,1,3245234,'CONFIRMED',NULL,1,44461,NULL,'52345342','2022-07-21',100,21),
(3,'2022-07-05',1,1,435345,'CONFIRMED',NULL,1,1,NULL,'sdfgsdfg','2022-07-20',100,21),
(4,'2022-07-06',2,234,234324,'CREATED',NULL,1,44467,'null','sadfsd dsfds ','2022-07-20',234,NULL),
(5,'2022-07-06',3,324,3434,'CREATED',NULL,1,44493,'null','sdafsdafdsf','2022-07-28',234,NULL),
(6,'2022-07-07',7,2345,3425,'WAITING_FOR_SELLER_RESPONSE',NULL,1,44485,'null','fdgdb rtehgr','2022-07-28',3245,22),
(7,'2022-07-07',7,35,2534,'WAITING_FOR_SELLER_RESPONSE',NULL,1,44483,'null','dsgsd','2022-07-27',34,21),
(8,'2022-07-11',1,2,2323,'CREATED',NULL,1,44459,'null','34345','2022-07-28',23,NULL),
(9,'2022-07-13',3,345,43534,'CREATED',NULL,12,44494,'null','safaa','2034-01-18',345,NULL),
(10,'2022-07-13',3,345,43534,'CREATED',NULL,12,44494,'null','safaa','2034-01-18',345,NULL),
(11,'2022-07-14',1,345,345,'CREATED',NULL,1,44460,'null','etggdf dfg','2345-01-18',3453,NULL),
(12,'2022-07-14',1,345,345,'CREATED',NULL,1,44460,'null','etggdf dfg','2345-01-18',3453,NULL),
(13,'2022-07-14',2,234,2345,'CREATED',NULL,1,44468,'null','3245325','2023-01-26',2345,NULL),
(14,'2022-07-14',2,345,34525,'CREATED',NULL,1,44468,'null','dsgdsf sdfgdsf','2022-08-19',345,NULL),
(15,'2022-07-14',6,345,345,'CREATED',NULL,1,44482,'null','dfds dfg','2022-08-04',2345,NULL);

/*Table structure for table `payments` */

DROP TABLE IF EXISTS `payments`;

CREATE TABLE `payments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_date` date NOT NULL,
  `order_id` int(10) NOT NULL,
  `category` varchar(250) NOT NULL,
  `quoted_amount` int(10) NOT NULL,
  `payments_status` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `payments` */

/*Table structure for table `productlists` */

DROP TABLE IF EXISTS `productlists`;

CREATE TABLE `productlists` (
  `id` int(20) NOT NULL,
  `title` varchar(255) NOT NULL,
  `text` varchar(255) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `product_id` int(20) NOT NULL,
  `categories_type` int(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `productlists` */

insert  into `productlists`(`id`,`title`,`text`,`url`,`product_id`,`categories_type`) values 
(0,'Circular GI Pipe','Meatal','/images/categories/medical.png',44460,1),
(1,'Square GI Pipe','Metal & Alloy','/images/categories/construction.png',44459,1),
(3,'Rectangular GI Pipe','Metal ','/images/categories/apparels.png',44461,1),
(4,'Square Pipe','Metal','/images/categories/medical.png',44462,1),
(5,'Round Pipe','Meatal & Alloy','/images/categories/medical.png',44463,1),
(6,'Square Bars','Meatal ','/images/categories/medical.png',44464,1),
(7,'Ssdfas','asdf','/images/categories/construction.png',44465,1),
(8,'asdf','geg','/images/categories/home_furniture.png',44466,1),
(9,'dfhhdfg','sdfhd','/images/categories/rubber.png',44467,1),
(10,'sdgshs','shyew','/images/categories/medical.png',44468,1),
(11,'shsdhs','gsds','/images/categories/construction.png',44469,1),
(12,'dhdjdr','jredf','/images/categories/medical.png',44470,1);

/*Table structure for table `products` */

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `product_short_desc` varchar(500) NOT NULL,
  `created_date` date NOT NULL,
  `modified_date` date NOT NULL,
  `created_by` varchar(200) NOT NULL,
  `value` varchar(250) NOT NULL,
  `categories_type` varchar(200) NOT NULL,
  `sub_category_available` varchar(20) NOT NULL,
  `text` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44496 DEFAULT CHARSET=utf8mb4;

/*Data for the table `products` */

insert  into `products`(`id`,`name`,`product_short_desc`,`created_date`,`modified_date`,`created_by`,`value`,`categories_type`,`sub_category_available`,`text`) values 
(44459,'steel_factories','Steel Steeellll Factories','2022-06-26','2022-06-26','','Steel Factories','1','false','this is steel'),
(44460,'cement_factories','Cement sdfsdf Factories','2022-06-26','2022-06-26','','Cement Factories','1','false',''),
(44461,'food_factories','Food Factories','2022-06-26','2022-06-26','','Food Factories','1','false','This is Food Factories'),
(44462,'ply_wood','Ply Wood','2022-06-26','2022-06-26','','Ply Wood','1','false','this is Ply Wood'),
(44463,'glass','Glass','2022-06-26','2022-06-26','','Glass','1','false','This is Glass'),
(44464,'pvc_pipes','PVC Pipes','2022-06-26','2022-06-26','','PVC Pipes','1','false','this is PVC'),
(44465,'round_pipes','Round Pipes','2022-06-26','2022-06-26','','Round Pipes','1','false','this is Round'),
(44466,'tmt_bars\r\n','TMT TTT Bars','2022-06-26','2022-06-26','','TMT Bars','1','false','this is TMT'),
(44467,'bed','','2022-06-26','2022-06-26','','Bed','2','false',''),
(44468,'wardrobe','','2022-06-26','2022-06-26','','Wardrobe','2','false',''),
(44469,'kitchen_cabinets','','2022-06-26','2022-06-26','','Kitchen Cabinets','2','false',''),
(44470,'sofas','','2022-06-26','2022-06-26','','Sofas','2','false',''),
(44471,'curtains','','2022-06-26','2022-06-26','','Curtains','2','false',''),
(44472,'bedsheets','','2022-06-26','2022-06-26','','Bedsheets','2','false',''),
(44473,'towels','','2022-06-26','2022-06-26','','Towels','2','false',''),
(44474,'dinning_tables\r\n','','2022-06-26','2022-06-26','','Dinning Tables','2','false',''),
(44475,'silk','','2022-06-26','2022-06-26','','Silk','5','false',''),
(44476,'cotton','','2022-06-26','2022-06-26','','Cotton','5','false',''),
(44477,'leather','','2022-06-26','2022-06-26','','Leather','5','false',''),
(44478,'wool','','2022-06-26','2022-06-26','','Wool','5','false',''),
(44479,'men','','2022-06-26','2022-06-26','','Men\'s','4','false',''),
(44480,'women','','2022-06-26','2022-06-26','','Women\'s','4','false',''),
(44481,'kids','','2022-06-26','2022-06-26','','Kids','4','false',''),
(44482,'wire','','2022-06-26','2022-06-26','','Wire','6','false',''),
(44483,'rice','','2022-06-26','2022-06-26','','Rice','7','false',''),
(44484,'Sugarcane','','2022-06-26','2022-06-26','','Sugarcane','7','false',''),
(44485,'Tea','','2022-06-26','2022-06-26','','Tea','7','false',''),
(44486,'coffee','','2022-06-26','2022-06-26','','Coffee','7','false',''),
(44487,'pepper','','2022-06-26','2022-06-26','','Pepper','7','false',''),
(44488,'cashew_nuts','','2022-06-26','2022-06-26','','Cashew Nuts','7','false',''),
(44489,'spices','','2022-06-26','2022-06-26','','Spices','7','false',''),
(44490,'frozen_fish','','2022-06-26','2022-06-26','','Frozen Fish','7','false',''),
(44491,'crustaceans','','2022-06-26','2022-06-26','','Crustaceans','7','false',''),
(44492,'vegetables','','2022-06-26','2022-06-26','','Vegetables','7','false',''),
(44493,'fertlizers','','2022-06-26','2022-06-26','','Fertlizers','3','false',''),
(44494,'chemicals','','2022-06-26','2022-06-26','','Chemicals','3','false',''),
(44495,'sdfs','sdfdsd','0000-00-00','0000-00-00','','','','','');

/*Table structure for table `products_detail` */

DROP TABLE IF EXISTS `products_detail`;

CREATE TABLE `products_detail` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `product_id` int(20) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `details1` longtext DEFAULT NULL,
  `itemText1` varchar(20) DEFAULT NULL,
  `itemText2` varchar(20) DEFAULT NULL,
  `itemText3` varchar(20) DEFAULT NULL,
  `itemText4` varchar(20) DEFAULT NULL,
  `itemText5` varchar(20) DEFAULT NULL,
  `itemText6` varchar(20) DEFAULT NULL,
  `details2` longtext DEFAULT NULL,
  `itemTitle1` varchar(250) DEFAULT NULL,
  `itemTitle2` varchar(250) DEFAULT NULL,
  `itemTitle3` varchar(250) DEFAULT NULL,
  `itemTitle4` varchar(250) DEFAULT NULL,
  `itemTitle5` varchar(250) DEFAULT NULL,
  `itemTitle6` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

/*Data for the table `products_detail` */

insert  into `products_detail`(`id`,`product_id`,`title`,`details1`,`itemText1`,`itemText2`,`itemText3`,`itemText4`,`itemText5`,`itemText6`,`details2`,`itemTitle1`,`itemTitle2`,`itemTitle3`,`itemTitle4`,`itemTitle5`,`itemTitle6`) values 
(1,44464,'PPC Cement, 43 Grade, 25 Kg','This Grade Of Cement Is Used For Plain Concrete weork And Plasteriing Suitable Make Concrete Mix Up To M30.\r\n','43 Grade','Powder','25 Kg','Indoor, outdoor','Paper, Sack','All Purpose Cement','asdfasdfasdfsadf','Cement Grade','Form Factor','Packaging Size','Suitable For','Packaging Type','Used For'),
(2,44463,'PPC Cement, 43 Grade, 25 Kg','This Grade Of Cement Is Used For Plain Concrete weork And Plasteriing Suitable Make Concrete Mix Up To M30.\r\n','MS, GI, CI, BLACK','1.6 To 15mm','Square/Rectangular','No','MS','MILD FINISHED','Cement is mainly used as a binder in concrete, which is a basic material for all types of construction, including housing, roads, schools, hospitals, dams and ports.','Material','Thickness','Section Type','Rusting','Steel Greade','Finishing'),
(3,44459,'asdfas','asdfasdfasdfasdfasdf','43 Grade','Powder','25 Kg','Indoor, outdoor','Paper, Sack','All Purpose Cement','sdfgsdfg','Cement Grade','Form Factor','Packaging Size','Suitable For','Packaging Type','Used For'),
(4,44460,'asdf','asdfasdfasdfasdf','33 Grade','Powder','25 Kg','Indoor, outdoor','Paper, Sack','All Purpose Cement','dfgsdfg','Cement Grade','Form Factor','Packaging Size','Suitable For','Packaging Type','Used For'),
(5,44461,'asdfasdf','asdfasdfasdfasdf','28 Grade','Powder','25 Kg','Indoor, outdoor','Paper, Sack','All Purpose Cement','fhsdfg','Cement Grade','Form Factor','Packaging Size','Suitable For','Packaging Type','Used For'),
(6,44462,'asdfa','asdfasdfasdfasdf','MS, GI, CI, BLACK','1.6 To 15mm','Square/Rectangular','Indoor, outdoor','Paper, Sack','MILD FINISHED','dfgsdfg','Material','Thickness','Section Type','Rusting','Packaging Type','Used For'),
(7,44465,'asdf','asdfasdfasdf','MS, GI, CI, BLACK','34','Square/Rectangular','sdf','MS','MILD FINISHED','sdfgsdfg','Material','Thickness','Section Type','Rusting','Steel Greade','Finishing'),
(8,44466,'hrgr','sdfasdfasdfasdf','40 Grade','Powder','25 Kg','Indoor, outdoor','sfh','All Purpose Cement','sdfgsdfg','Cement Grade','Form Factor','Packaging Size','Suitable For','Packaging Type','Used For'),
(9,NULL,'asdf','fasdfasdfasdf','MS, GI, CI, BLACK','74','Square/Rectangular','No','MS','dfgMILD FINISHED','dfgsdfg','Material','Thickness','Section Type','Rusting','Steel Greade','Finishing'),
(10,NULL,NULL,NULL,'MS, GI, CI, BLACK','Powder','25 Kg','Indoor, outdoor','sdfh','All Purpose Cement','sdfgsdfg','Cement Grade','Form Factor','Packaging Size','Suitable For','Packaging Type','Used For'),
(11,NULL,NULL,NULL,NULL,'34','Square/Rectangular','fdh','MS','MILD FINISHED',NULL,'Material','Thickness','Section Type','Rusting','Packaging Type','Used For'),
(12,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Packaging Size','Suitable For','Packaging Type','Used For');

/*Table structure for table `quotations` */

DROP TABLE IF EXISTS `quotations`;

CREATE TABLE `quotations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_date` datetime NOT NULL DEFAULT current_timestamp(),
  `category_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `quoted_amount` int(11) NOT NULL,
  `status` varchar(250) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(10) NOT NULL,
  `sub_product_id` int(10) NOT NULL,
  `remarks` varchar(2000) NOT NULL,
  `expected_delivery_date` datetime NOT NULL,
  `quantity_no` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

/*Data for the table `quotations` */

insert  into `quotations`(`id`,`created_date`,`category_id`,`quantity`,`quoted_amount`,`status`,`user_id`,`product_id`,`sub_product_id`,`remarks`,`expected_delivery_date`,`quantity_no`) values 
(1,'2022-06-24 00:00:00',1,222,1111,'xdfdgf',1,1,1,'dsfdfg','2022-06-24 00:00:00',111),
(2,'2022-06-17 15:48:27',1,1,345,'CREATED',2,1,1,'xcbvcvx','2022-06-23 18:30:00',100),
(3,'2022-06-17 15:53:35',1,1,3543646,'CREATED',1,1,1,'sdfgdsfgdgd sdfhdf hdfshdf hfdg hfg','2022-06-24 18:30:00',100),
(4,'2022-06-18 13:06:36',1,1,1111,'CREATED',1,1,1,'sdcvxbcn hertjt','2022-06-23 18:30:00',100);

/*Table structure for table `seller` */

DROP TABLE IF EXISTS `seller`;

CREATE TABLE `seller` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(5000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4;

/*Data for the table `seller` */

insert  into `seller`(`id`,`name`,`email`,`password`) values 
(21,'test@test.com','test@test.com','$2b$10$F9XO0chfc0EoB.69zx.kQuTJah9AAfrFClzqCak9sxgJpERQC2Vu6'),
(22,'mahendran@mail.com','mahendran@mail.com','$2b$10$suzA7vu24pnFoF1.4Y/Gsup8I.y2PWHlagpr9vxV1oG.lHnrU7EHi'),
(23,'hello@hello.com','hello@hello.com','$2b$10$loMaXdJrKdekfaSJFWHPneFUIay/KI1HYI6QekE8HRP26s4vhxkrW'),
(24,'dfgdsfgsdfg@dfgdf.dsfg','dfgdsfgsdfg@dfgdf.dsfg','$2b$10$Bj0UaIFN66.ohzTzuf6JCe.IquGyNdpAkF2j34EUBNYaJ9hjJEiAe'),
(25,'dfgdsfgsdfg@dfgdf.dsfg','dfgdsfgsdfg@dfgdf.dsfg','$2b$10$Dtd7LLXlH2Mb/FFuviRXb.0lHnan57VvdN9/ExTiLPabSkdy6GvM2'),
(26,'xcvcxv@dsfg.sdfg','xcvcxv@dsfg.sdfg','$2b$10$yNJ8q9paw9VjxoVvygFCFub.B9cX9GtoVxV/en3ITMEz6FwpgMthS'),
(27,'sven','sven@gmail.com','$2b$10$tupgGtpPudr6nf8Zz0OSYu9avW4fNsj/l72cprJvxnVeuWEnAT4cy'),
(28,'sven','svendev1222@mail.ru','$2b$10$DmithOD8r9QLRc3j7aJ4Quv1QFhctFmFN5XFhCYyYLWXsnm52yQ4O');

/*Table structure for table `seller_products` */

DROP TABLE IF EXISTS `seller_products`;

CREATE TABLE `seller_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `categories_id` int(11) NOT NULL,
  `products_id` int(11) NOT NULL,
  `sub_products_id` varchar(11) DEFAULT NULL,
  `price` int(10) NOT NULL,
  `delivery_time` varchar(200) DEFAULT NULL,
  `product_quantity` varchar(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;

/*Data for the table `seller_products` */

insert  into `seller_products`(`id`,`user_id`,`categories_id`,`products_id`,`sub_products_id`,`price`,`delivery_time`,`product_quantity`) values 
(11,21,1,44460,'',232,'2022-08-04T18:30:00.000Z','234'),
(12,21,1,44465,'',1112,'2022-07-27T18:30:00.000Z','10000'),
(14,21,2,44475,'',3443,'2022-08-04T18:30:00.000Z','5000'),
(15,21,2,44470,'',23534545,'2022-08-04T18:30:00.000Z','523454');

/*Table structure for table `sub_products` */

DROP TABLE IF EXISTS `sub_products`;

CREATE TABLE `sub_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) NOT NULL,
  `value` varchar(250) NOT NULL,
  `categories_type` varchar(250) NOT NULL,
  `product_type` varchar(250) NOT NULL,
  `desc` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `sub_products` */

insert  into `sub_products`(`id`,`name`,`value`,`categories_type`,`product_type`,`desc`) values 
(1,'square_gi_pipe','Square GI Pipe','construction','tmt_bars','Square GI Pipe'),
(2,'paper_cups','Paper Cups','rubber_plastics','papers','Paper cups');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(260) NOT NULL,
  `email` varchar(300) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

/*Data for the table `user` */

insert  into `user`(`id`,`username`,`email`,`password`) values 
(6,'test','hello@mmmm.css','$2b$10$oc5w1iEeK1XLbuqO7YpUGOFALqAVqOAInvcf/T0o/tgk1TPzeBn.a'),
(7,'test','hello@mmmm.csss','$2b$10$qV04E7Y7pgmlCnpYxp/ieenwt4HhwKuG6di85zgeuYTGh/TvlRVMK'),
(8,'test','eeewero@mmmm.csss','$2b$10$zK2TB2oVfB6Y5QjMIwtxCOI3KxPKe5GPAF6/rh2vnV60pS/rKUcvy'),
(9,'sdfgsdfg','sdfgd@dfgh.dfsg','$2b$10$QCI3FEtdtE6mwdN3ta/viOi4rwy7q09m2Ko5j/oi32nh84o359H0O');

/*Table structure for table `user_info` */

DROP TABLE IF EXISTS `user_info`;

CREATE TABLE `user_info` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `email` varchar(250) NOT NULL,
  `phone` int(13) NOT NULL,
  `name` varchar(250) NOT NULL,
  `role` varchar(200) NOT NULL,
  `user_id` int(10) NOT NULL,
  `user_type` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

/*Data for the table `user_info` */

insert  into `user_info`(`id`,`email`,`phone`,`name`,`role`,`user_id`,`user_type`) values 
(1,'test@test.com',999999999,'user name','Owner',21,'seller'),
(3,'test@test.com',999999999,'tdgtsdf sdfggsf','owner',1,'buyer'),
(4,'dgdf@dsfg.gfd',345434355,'sdfdfg','dfdf',21,'buyer'),
(5,'dgdf@dsfg.gfd',345434355,'sdfdfg','dfdf',1,'sdfgsdf');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
