-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 28, 2022 at 05:54 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tradeez`
--

-- --------------------------------------------------------

--
-- Table structure for table `buyer`
--

CREATE TABLE `buyer` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `buyer`
--

INSERT INTO `buyer` (`id`, `name`, `email`, `password`) VALUES
(1, 'test', 'test@test.com', '$2b$10$ExXGS.8M9oOON2drnaEseu8HzfKr8ZgRbDuveS6HAGjS3XaU0ogT6'),
(2, 'hello', 'hello@hello.com', '$2b$10$HRL2Qma/Sf5sl1z2pHzKwuUO/j34aYEFHNqxVZDrFe2sH.ue6DqSm'),
(3, 'hello123', 'hello123@hello.com', '$2b$10$Gvt1yXoP0UjFNEdgqkdJK.lNKDwulgLgOc9EE4zc/6ehAhHjHxm7a'),
(4, 'hello111@hello.com', 'hello111@hello.com', '$2b$10$WVmEfrW850UTi.OkDjNJ6Oa53YajTCkpvh/Zp3QyqdZ4vlSC8XWC.'),
(5, 'hello@hello.com', 'hello@hello.com', '$2b$10$bXNT8ZENP/zScNxJDfyEruANfWj8REbP23/jGDW3L2vWx.6bGh3Gi'),
(6, 'xcgsdfgsd@dfg.dsfg', 'xcgsdfgsd@dfg.dsfg', '$2b$10$q21jcF0PKE1lERJMzw1Tf.FSpCJzDUDK7S9ghYXTIUE4O83XDhDR6'),
(7, 'sdfgsdf@dfg.dfg', 'sdfgsdf@dfg.dfg', '$2b$10$pfpL2rpvIzQ1f7yZ4CBXrevJ/5GmPBQerXHPE76NdUDoX.MTwUoKO'),
(8, 'sdfsadfas@dfg.dfgsf', 'sdfsadfas@dfg.dfgsf', '$2b$10$cwlRKNe1ROj.tEt1d9OyJO88KsPYSIDY6ogHtucYEnPHeIKwhq9Xe'),
(9, 'sdfgdsfgsdfg@dgsfd.sdfg', 'sdfgdsfgsdfg@dgsfd.sdfg', '$2b$10$A.f3vq45O7DRjVVpp5q07OKHPvbPiXuiPAKe6zgYa8fG6pODGLMgm'),
(10, 'sdfdsf@dsfg.sdfg', 'sdfdsf@dsfg.sdfg', '$2b$10$iOJVRP6Cb/glNcVdmBTOHOiNHnJUgA9eylH0gtxlFn/i63S8Bo0hW'),
(11, 'sdfgdsf@sdgf.sdfg', 'sdfgdsf@sdgf.sdfg', '$2b$10$UN.6aCp.ku743l2HftGxm.64VGW76JwCfcRMQTQRpemUjNDK/.6O6'),
(12, 'werqwer@dfg.dsfg', 'werqwer@dfg.dsfg', '$2b$10$YFtrWzCm1yfPU4GGNsJAbuTlXOeUFgkfPMEzWF9FgP7uRg8WJSUY2'),
(13, 'sdfgdsfg@dsfg.sdfg', 'sdfgdsfg@dsfg.sdfg', '$2b$10$/CAzmG/2eP0z/apHKBaJ9.eSUxlabY.LxeuOA9/xRqAOir2dXOhRm'),
(14, 'xcvcxbvxcvb@dsfg.sdfg', 'xcvcxbvxcvb@dsfg.sdfg', '$2b$10$ValXeuX4hPni7pnmcoXxa.5i/Dr4lI6bZ6P2stLBTueU.FXTnsN3W'),
(15, 'sdfgsdf@dfgds.sdfgsd', 'sdfgsdf@dfgds.sdfgsd', '$2b$10$A/T1/NJ5xUfbpDtBdH/Hn.G6KRiwnt/ljmRDTOXDi7nA8eU6EnndW');

-- --------------------------------------------------------

--
-- Table structure for table `buyer_info`
--

CREATE TABLE `buyer_info` (
  `id` int(10) NOT NULL,
  `user_id` varchar(10) NOT NULL,
  `company_name` varchar(250) NOT NULL,
  `business_type` varchar(250) NOT NULL,
  `industry_type` varchar(250) NOT NULL,
  `gst_number` varchar(20) NOT NULL,
  `manufacture_type` varchar(250) NOT NULL,
  `mobile` int(15) NOT NULL,
  `email` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `buyer_info`
--

INSERT INTO `buyer_info` (`id`, `user_id`, `company_name`, `business_type`, `industry_type`, `gst_number`, `manufacture_type`, `mobile`, `email`) VALUES
(1, '1', 'sdfsadfsad', 'sdafdsfsd', 'sdfsdf', '2343243', 'dffdgxc', 3453454, ''),
(2, '2', 'sdfsadfsad', 'sdafdsfsd', 'sdfsdf', '2343243', 'dffdgxc', 3453454, ''),
(3, '3', 'sdfsadfsad', 'sdafdsfsd', 'sdfsdf', '2343243', 'dffdgxc', 3453454, ''),
(4, '4', 'xcvxcvb', 'test', 'sdfsdf', '2343243', 'dffdgxc', 3453454, ''),
(5, '5', 'xcvxcvb', 'undefined', 'sdfsdf', '2343243', 'dffdgxc', 3453454, ''),
(6, '6', 'xcvxcvb', 'undefined', 'xcvb', '2343243', 'dffdgxc', 3453454, ''),
(7, '7', 'xcvxcvb', 'undefined', 'xcvb', 'xcvbcxv', 'dffdgxc', 3453454, ''),
(8, '8', 'xcvxcvb', 'undefined', 'xcvb', 'xcvbcxv', 'xcvb', 3453454, ''),
(9, '9', 'xcvxcvb', 'undefined', 'xcvb', 'xcvbcxv', 'xcvb', 34563456, ''),
(10, '10', 'xcvxcvb', 'undefined', 'xcvb', 'xcvbcxv', 'xcvb', 34563456, ''),
(11, '11', 'xcvxcvb', 'undefined', 'xcvb', 'xcvbcxv', 'xcvb', 34563456, ''),
(14, '10', 'asdfsad', 'undefined', 'asdfd', 'asdf', 'asdf', 34563456, ''),
(15, '11', 'dfsgdsf', 'undefined', 'sdfg', 'sdfg', 'dfgdfs', 4564564, ''),
(16, '12', 'sdfgsdags', 'undefined', 'sdfgdsf', 'sdfgsd', 'dfghdfs', 456456456, '');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(10) NOT NULL,
  `name` varchar(200) NOT NULL,
  `value` varchar(200) NOT NULL,
  `created_by` varchar(250) NOT NULL,
  `created_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `value`, `created_by`, `created_date`) VALUES
(1, 'construction', 'Construction', '', '2022-06-13'),
(2, 'home_furniture', 'Home Furnishings And Furniture', '', '2022-06-13'),
(3, 'chemicals', 'Chemicals', '', '2022-06-13'),
(4, 'apparels', 'Apparels', '', '2022-06-13'),
(5, 'textile', 'Textile', '', '2022-06-26'),
(6, 'electrical_supplies', 'Electrical Supplies\r\n', '', '2022-06-26'),
(7, 'agriculture', 'Agriculture', '', '2022-06-26');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `id` int(11) NOT NULL,
  `company_name` varchar(1000) NOT NULL,
  `address` varchar(1000) NOT NULL,
  `phone_number` int(10) NOT NULL,
  `website` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `directors`
--

CREATE TABLE `directors` (
  `id` int(11) NOT NULL,
  `first_name` varchar(250) NOT NULL,
  `middle_name` varchar(250) NOT NULL,
  `last_name` varchar(250) NOT NULL,
  `email` varchar(1000) NOT NULL,
  `phone_number` int(10) NOT NULL,
  `aadhar_number` int(15) NOT NULL,
  `pan_number` varchar(10) NOT NULL,
  `addhar_link` varchar(1000) NOT NULL,
  `pan_link` varchar(1000) NOT NULL,
  `company_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
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
  `seller_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `created_date`, `category_id`, `quantity`, `quoted_amount`, `status`, `last_updated`, `user_id`, `product_id`, `sub_product_id`, `remarks`, `expected_delivery_date`, `quantity_no`, `seller_id`) VALUES
(1, '2022-07-04', 1, 1, 3432, 'CREATED', NULL, 1, 44459, NULL, 'dsafds', '2022-07-21', 100, NULL),
(2, '2022-07-04', 1, 1, 3245234, 'CONFIRMED', NULL, 1, 44461, NULL, '52345342', '2022-07-21', 100, 21),
(3, '2022-07-05', 1, 1, 435345, 'CONFIRMED', NULL, 1, 1, NULL, 'sdfgsdfg', '2022-07-20', 100, 21),
(4, '2022-07-06', 2, 234, 234324, 'CREATED', NULL, 1, 44467, 'null', 'sadfsd dsfds ', '2022-07-20', 234, NULL),
(5, '2022-07-06', 3, 324, 3434, 'CREATED', NULL, 1, 44493, 'null', 'sdafsdafdsf', '2022-07-28', 234, NULL),
(6, '2022-07-07', 7, 2345, 3425, 'WAITING_FOR_SELLER_RESPONSE', NULL, 1, 44485, 'null', 'fdgdb rtehgr', '2022-07-28', 3245, 22),
(7, '2022-07-07', 7, 35, 2534, 'WAITING_FOR_SELLER_RESPONSE', NULL, 1, 44483, 'null', 'dsgsd', '2022-07-27', 34, 21),
(8, '2022-07-11', 1, 2, 2323, 'CREATED', NULL, 1, 44459, 'null', '34345', '2022-07-28', 23, NULL),
(9, '2022-07-13', 3, 345, 43534, 'CREATED', NULL, 12, 44494, 'null', 'safaa', '2034-01-18', 345, NULL),
(10, '2022-07-13', 3, 345, 43534, 'CREATED', NULL, 12, 44494, 'null', 'safaa', '2034-01-18', 345, NULL),
(11, '2022-07-14', 1, 345, 345, 'CREATED', NULL, 1, 44460, 'null', 'etggdf dfg', '2345-01-18', 3453, NULL),
(12, '2022-07-14', 1, 345, 345, 'CREATED', NULL, 1, 44460, 'null', 'etggdf dfg', '2345-01-18', 3453, NULL),
(13, '2022-07-14', 2, 234, 2345, 'CREATED', NULL, 1, 44468, 'null', '3245325', '2023-01-26', 2345, NULL),
(14, '2022-07-14', 2, 345, 34525, 'CREATED', NULL, 1, 44468, 'null', 'dsgdsf sdfgdsf', '2022-08-19', 345, NULL),
(15, '2022-07-14', 6, 345, 345, 'CREATED', NULL, 1, 44482, 'null', 'dfds dfg', '2022-08-04', 2345, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `created_date` date NOT NULL,
  `order_id` int(10) NOT NULL,
  `category` varchar(250) NOT NULL,
  `quoted_amount` int(10) NOT NULL,
  `payments_status` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `product_short_desc` varchar(500) NOT NULL,
  `created_date` date NOT NULL,
  `modified_date` date NOT NULL,
  `created_by` varchar(200) NOT NULL,
  `value` varchar(250) NOT NULL,
  `categories_type` varchar(200) NOT NULL,
  `sub_category_available` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `product_short_desc`, `created_date`, `modified_date`, `created_by`, `value`, `categories_type`, `sub_category_available`) VALUES
(44459, 'steel_factories', 'Steel Factories', '2022-06-26', '2022-06-26', '', 'Steel Factories', '1', 'false'),
(44460, 'cement_factories', 'Cement Factories', '2022-06-26', '2022-06-26', '', 'Cement Factories', '1', 'false'),
(44461, 'food_factories', 'Food Factories', '2022-06-26', '2022-06-26', '', 'Food Factories', '1', 'false'),
(44462, 'ply_wood', 'Ply Wood', '2022-06-26', '2022-06-26', '', 'Ply Wood', '1', 'false'),
(44463, 'glass', 'Glass', '2022-06-26', '2022-06-26', '', 'Glass', '1', 'false'),
(44464, 'pvc_pipes', 'PVC Pipes', '2022-06-26', '2022-06-26', '', 'PVC Pipes', '1', 'false'),
(44465, 'round_pipes', 'Round Pipes', '2022-06-26', '2022-06-26', '', 'Round Pipes', '1', 'false'),
(44466, 'tmt_bars\r\n', 'TMT Bars', '2022-06-26', '2022-06-26', '', 'TMT Bars', '1', 'false'),
(44467, 'bed', '', '2022-06-26', '2022-06-26', '', 'Bed', '2', 'false'),
(44468, 'wardrobe', '', '2022-06-26', '2022-06-26', '', 'Wardrobe', '2', 'false'),
(44469, 'kitchen_cabinets', '', '2022-06-26', '2022-06-26', '', 'Kitchen Cabinets', '2', 'false'),
(44470, 'sofas', '', '2022-06-26', '2022-06-26', '', 'Sofas', '2', 'false'),
(44471, 'curtains', '', '2022-06-26', '2022-06-26', '', 'Curtains', '2', 'false'),
(44472, 'bedsheets', '', '2022-06-26', '2022-06-26', '', 'Bedsheets', '2', 'false'),
(44473, 'towels', '', '2022-06-26', '2022-06-26', '', 'Towels', '2', 'false'),
(44474, 'dinning_tables\r\n', '', '2022-06-26', '2022-06-26', '', 'Dinning Tables', '2', 'false'),
(44475, 'silk', '', '2022-06-26', '2022-06-26', '', 'Silk', '5', 'false'),
(44476, 'cotton', '', '2022-06-26', '2022-06-26', '', 'Cotton', '5', 'false'),
(44477, 'leather', '', '2022-06-26', '2022-06-26', '', 'Leather', '5', 'false'),
(44478, 'wool', '', '2022-06-26', '2022-06-26', '', 'Wool', '5', 'false'),
(44479, 'men', '', '2022-06-26', '2022-06-26', '', 'Men\'s', '4', 'false'),
(44480, 'women', '', '2022-06-26', '2022-06-26', '', 'Women\'s', '4', 'false'),
(44481, 'kids', '', '2022-06-26', '2022-06-26', '', 'Kids', '4', 'false'),
(44482, 'wire', '', '2022-06-26', '2022-06-26', '', 'Wire', '6', 'false'),
(44483, 'rice', '', '2022-06-26', '2022-06-26', '', 'Rice', '7', 'false'),
(44484, 'Sugarcane', '', '2022-06-26', '2022-06-26', '', 'Sugarcane', '7', 'false'),
(44485, 'Tea', '', '2022-06-26', '2022-06-26', '', 'Tea', '7', 'false'),
(44486, 'coffee', '', '2022-06-26', '2022-06-26', '', 'Coffee', '7', 'false'),
(44487, 'pepper', '', '2022-06-26', '2022-06-26', '', 'Pepper', '7', 'false'),
(44488, 'cashew_nuts', '', '2022-06-26', '2022-06-26', '', 'Cashew Nuts', '7', 'false'),
(44489, 'spices', '', '2022-06-26', '2022-06-26', '', 'Spices', '7', 'false'),
(44490, 'frozen_fish', '', '2022-06-26', '2022-06-26', '', 'Frozen Fish', '7', 'false'),
(44491, 'crustaceans', '', '2022-06-26', '2022-06-26', '', 'Crustaceans', '7', 'false'),
(44492, 'vegetables', '', '2022-06-26', '2022-06-26', '', 'Vegetables', '7', 'false'),
(44493, 'fertlizers', '', '2022-06-26', '2022-06-26', '', 'Fertlizers', '3', 'false'),
(44494, 'chemicals', '', '2022-06-26', '2022-06-26', '', 'Chemicals', '3', 'false');

-- --------------------------------------------------------

--
-- Table structure for table `quotations`
--

CREATE TABLE `quotations` (
  `id` int(11) NOT NULL,
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
  `quantity_no` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `quotations`
--

INSERT INTO `quotations` (`id`, `created_date`, `category_id`, `quantity`, `quoted_amount`, `status`, `user_id`, `product_id`, `sub_product_id`, `remarks`, `expected_delivery_date`, `quantity_no`) VALUES
(1, '2022-06-24 00:00:00', 1, 222, 1111, 'xdfdgf', 1, 1, 1, 'dsfdfg', '2022-06-24 00:00:00', 111),
(2, '2022-06-17 15:48:27', 1, 1, 345, 'CREATED', 2, 1, 1, 'xcbvcvx', '2022-06-23 18:30:00', 100),
(3, '2022-06-17 15:53:35', 1, 1, 3543646, 'CREATED', 1, 1, 1, 'sdfgdsfgdgd sdfhdf hdfshdf hfdg hfg', '2022-06-24 18:30:00', 100),
(4, '2022-06-18 13:06:36', 1, 1, 1111, 'CREATED', 1, 1, 1, 'sdcvxbcn hertjt', '2022-06-23 18:30:00', 100);

-- --------------------------------------------------------

--
-- Table structure for table `seller`
--

CREATE TABLE `seller` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `seller`
--

INSERT INTO `seller` (`id`, `name`, `email`, `password`) VALUES
(21, 'test@test.com', 'test@test.com', '$2b$10$F9XO0chfc0EoB.69zx.kQuTJah9AAfrFClzqCak9sxgJpERQC2Vu6'),
(22, 'mahendran@mail.com', 'mahendran@mail.com', '$2b$10$suzA7vu24pnFoF1.4Y/Gsup8I.y2PWHlagpr9vxV1oG.lHnrU7EHi'),
(23, 'hello@hello.com', 'hello@hello.com', '$2b$10$loMaXdJrKdekfaSJFWHPneFUIay/KI1HYI6QekE8HRP26s4vhxkrW'),
(24, 'dfgdsfgsdfg@dfgdf.dsfg', 'dfgdsfgsdfg@dfgdf.dsfg', '$2b$10$Bj0UaIFN66.ohzTzuf6JCe.IquGyNdpAkF2j34EUBNYaJ9hjJEiAe'),
(25, 'dfgdsfgsdfg@dfgdf.dsfg', 'dfgdsfgsdfg@dfgdf.dsfg', '$2b$10$Dtd7LLXlH2Mb/FFuviRXb.0lHnan57VvdN9/ExTiLPabSkdy6GvM2'),
(26, 'xcvcxv@dsfg.sdfg', 'xcvcxv@dsfg.sdfg', '$2b$10$yNJ8q9paw9VjxoVvygFCFub.B9cX9GtoVxV/en3ITMEz6FwpgMthS');

-- --------------------------------------------------------

--
-- Table structure for table `seller_products`
--

CREATE TABLE `seller_products` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `categories_id` int(11) NOT NULL,
  `products_id` int(11) NOT NULL,
  `sub_products_id` varchar(11) DEFAULT NULL,
  `price` int(10) NOT NULL,
  `delivery_time` varchar(200) DEFAULT NULL,
  `product_quantity` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `seller_products`
--

INSERT INTO `seller_products` (`id`, `user_id`, `categories_id`, `products_id`, `sub_products_id`, `price`, `delivery_time`, `product_quantity`) VALUES
(11, 21, 1, 44460, '', 232, '2022-08-04T18:30:00.000Z', '234'),
(12, 21, 1, 44465, '', 1112, '2022-07-27T18:30:00.000Z', '10000'),
(14, 21, 2, 44475, '', 3443, '2022-08-04T18:30:00.000Z', '5000'),
(15, 21, 2, 44470, '', 23534545, '2022-08-04T18:30:00.000Z', '523454');

-- --------------------------------------------------------

--
-- Table structure for table `sub_products`
--

CREATE TABLE `sub_products` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `value` varchar(250) NOT NULL,
  `categories_type` varchar(250) NOT NULL,
  `product_type` varchar(250) NOT NULL,
  `desc` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sub_products`
--

INSERT INTO `sub_products` (`id`, `name`, `value`, `categories_type`, `product_type`, `desc`) VALUES
(1, 'square_gi_pipe', 'Square GI Pipe', 'construction', 'tmt_bars', 'Square GI Pipe'),
(2, 'paper_cups', 'Paper Cups', 'rubber_plastics', 'papers', 'Paper cups');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(260) NOT NULL,
  `email` varchar(300) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`) VALUES
(6, 'test', 'hello@mmmm.css', '$2b$10$oc5w1iEeK1XLbuqO7YpUGOFALqAVqOAInvcf/T0o/tgk1TPzeBn.a'),
(7, 'test', 'hello@mmmm.csss', '$2b$10$qV04E7Y7pgmlCnpYxp/ieenwt4HhwKuG6di85zgeuYTGh/TvlRVMK'),
(8, 'test', 'eeewero@mmmm.csss', '$2b$10$zK2TB2oVfB6Y5QjMIwtxCOI3KxPKe5GPAF6/rh2vnV60pS/rKUcvy'),
(9, 'sdfgsdfg', 'sdfgd@dfgh.dfsg', '$2b$10$QCI3FEtdtE6mwdN3ta/viOi4rwy7q09m2Ko5j/oi32nh84o359H0O');

-- --------------------------------------------------------

--
-- Table structure for table `user_info`
--

CREATE TABLE `user_info` (
  `id` int(10) NOT NULL,
  `email` varchar(250) NOT NULL,
  `phone` int(13) NOT NULL,
  `name` varchar(250) NOT NULL,
  `role` varchar(200) NOT NULL,
  `user_id` int(10) NOT NULL,
  `user_type` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_info`
--

INSERT INTO `user_info` (`id`, `email`, `phone`, `name`, `role`, `user_id`, `user_type`) VALUES
(1, 'test@test.com', 999999999, 'user name', 'Owner', 21, 'seller'),
(3, 'test@test.com', 999999999, 'tdgtsdf sdfggsf', 'owner', 1, 'buyer'),
(4, 'dgdf@dsfg.gfd', 345434355, 'sdfdfg', 'dfdf', 21, 'buyer'),
(5, 'dgdf@dsfg.gfd', 345434355, 'sdfdfg', 'dfdf', 1, 'sdfgsdf');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `buyer`
--
ALTER TABLE `buyer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `buyer_info`
--
ALTER TABLE `buyer_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `directors`
--
ALTER TABLE `directors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quotations`
--
ALTER TABLE `quotations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `seller`
--
ALTER TABLE `seller`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `seller_products`
--
ALTER TABLE `seller_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sub_products`
--
ALTER TABLE `sub_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_info`
--
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `buyer`
--
ALTER TABLE `buyer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `buyer_info`
--
ALTER TABLE `buyer_info`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `directors`
--
ALTER TABLE `directors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44495;

--
-- AUTO_INCREMENT for table `quotations`
--
ALTER TABLE `quotations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `seller`
--
ALTER TABLE `seller`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `seller_products`
--
ALTER TABLE `seller_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `sub_products`
--
ALTER TABLE `sub_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user_info`
--
ALTER TABLE `user_info`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
