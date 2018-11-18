const mysql = require('mysql');
const param = require('./dbParma.js');

/**
*   @comment 插入传入的数据到数据库
*   @param  {JSON} data 以JSON格式传入的数据
*   {
*   name : "han",
*     s_id : "04163053",
*     class : "软件1602"
 *     telephone : "123456789101"
*     }
*   @param callback(result) 插入成功返回 1
*           失败返回 -1
*           已经存在返回 0
*/
function insertData(data,callback){
  //连接数据库
  let connection = mysql.createConnection(param);
  connection.connect();

  // 判断是否已经报名
  queryBySid(data['s_id'],connection,(exist)=>{
    if(exist) {
      callback(0);
      return;
    }

    let addData = `0,"${data['name']}","${data['s_id']}","${data['class']}","${data['telephone']}"`;
    let sql = `insert into student values(${addData})`;
    console.log(sql);
    connection.query(sql,function(err,result){
      if(err) callback(-1);
      else callback(1);
    });
  });
}

/**
*   @comment 查询传入的学号对应数据是否存在
*   @param  {String} s_id 学号字串
*   @param connection 数据库连接
 *   @param {function} callback(bool) 接收true表示数据已存在，false表示未存在
*/
function queryBySid(s_id,connection,callback){
  let sql = `select * from student where s_id="${s_id}"`;
  connection.query(sql,function(err,result){
    if(err) throw err;
    callback(result.length !== 0);
  });
}


module.exports = insertData;
