const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const queryString = require('query-string');
const cookieParser = require('cookie-parser');
const ejs = require('ejs');

const getData = require('./util/getData');
const insertData= require('./util/dbTool');

app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());


//网站根目录
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'./pages/index.html'));
});

//登录页面
app.get('/pageSignUp',(req,res)=>{
// 防止浏览器缓存导致获取不到数据
  res.setHeader('Cache-Control','no-cache, no-store, must-revalidate');
  res.setHeader('Prama','no-cache');
  res.setHeader('Expores',0);

  let flagData = req.query;
  getData((data)=>{
    res.cookie('MnData',JSON.stringify(data));
    ejs.renderFile(path.join(__dirname,'./pages/signIn.ejs'),{flagData},(err,mainPage)=>{
      if(err) throw err;
      else { res.send(mainPage); }
    });
  });
});

//返回主页的同时已获取到了数据
app.get('/redirect',(req,res)=>{
  res.redirect('/pageSignUp');
});

app.post('/postLogin',(request,response)=>{
  //获取cookie
  let cookie = request.cookies['MnData'];
  let cookieMnData = JSON.parse(unescape(cookie));

  //获取需要转发的数据
  let dataNeedDirect = queryString.stringify(request.body);
  // 暂存学号
  let s_id = request.body['yhm'];
  console.log({yhm : s_id});
    // 转发数据
    const postTo = "www.zfjw.xupt.edu.cn";
    let option = {
      hostname: postTo,
      method: 'POST',
      path: "/jwglxt/xtgl/login_slogin.html?time=" + cookieMnData.curTime,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset:utf-8',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
        'Origin': 'http://www.zfjw.xupt.edu.cn',
        'Referer': 'http://www.zfjw.xupt.edu.cn/jwglxt/xtgl/login_slogin.html?authFlag=1',
        'Cookie': 'JSESSIONID=' + cookieMnData.session.sessionID
      }
    };

    let req = http.request(option, (res) => {
      // 获取响应码
      const {statusCode} = res;
      const failLoca = "/jwglxt/xtgl/login_slogin.html?authFlag=1";
      const successLoca_1 = "/jwglxt/xtgl/login_slogin.html";
      const successLoca_2 = "/jwglxt/xtgl/index_initMenu.html?jsdm=&_t=";
      if (statusCode === 302) {
        // 获取location
        const location = res.headers.location;

        if (location === failLoca) {
          response.redirect('/?flag=0');
        } else if(location === successLoca_1 || location.indexOf(successLoca_2) >= 0 ){
          ejs.renderFile(path.join(__dirname,'./pages/form.ejs'),{s_id},(err,mainPage)=>{
            if(err) throw err;
            else response.send(mainPage);
          });
        }else{
          response.redirect('/?flag=0');
        }
      } else {
        response.redirect('/?flag=0');
      }
    }).on('error', () => {
      response.send('出错啦，重新尝试下吧');
    });

    req.write(dataNeedDirect);
    req.end();
});

app.post('/postMessage',(req,res)=>{
  let body = req.body;
  let dataMessage = {
    name : body.name,
    class : body.class,
    s_id : body.number,
    telephone : body.tel
  };

  // 插入数据到数据库，接收返回结果
  insertData(dataMessage,(result)=>{
    if(result === 1){
      res.send('<h3 style="display: block;font-size: 40px;text-align: center">恭喜你，报名成功</h3><p style="text-align: center;font-size: 35px">请认真完成笔试题目,面试安排会以短信形式通知</p>')
    }else if(result === 0){
      res.send('<h3 style="display: block;font-size: 40px;text-align: center">该学号已经报名,请静待通知^v^</h3>');
    }else{
      res.send('<h3 style="display: block;font-size: 40px;text-align: center">报名失败，请重试</h3>');
    }
  })
});

app.listen(8848,()=>{
  console.log("server running ... ... ");
});
