/*
Navicat MySQL Data Transfer

Source Server         : gallo
Source Server Version : 50722
Source Host           : localhost:3306
Source Database       : information

Target Server Type    : MYSQL
Target Server Version : 50722
File Encoding         : 65001

Date: 2018-11-13 14:33:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `student`
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `nid` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `s_id` varchar(40) NOT NULL,
  `2/5000  
professional` char(30) NOT NULL,
  PRIMARY KEY (`nid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student
-- ----------------------------
