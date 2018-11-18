>记录 ： 

- 调用关系：
    login.js：39  获取公钥

   点击登录时 ：index.html 
    -> login.js:88 : 通过公钥加密输入字串，将字串填入到密码框中,提交表单到
      http://www.zfjw.xupt.edu.cn/jwglxt/xtgl/login_slogin.html?time=当前时间

- 11-5  22.07

- data:
- public-key-url: http://www.zfjw.xupt.edu.cn/jwglxt/xtgl/login_getPublicKey.html?time=15414271835915414271835988
- public-key:{
  "exponent":
    "AQAB",
  "modulus":
    "AK/1oOpSk3M1qdRGzydsXx1fGaM0EzQVUokmT4PxQn8LbBd1wC4H2IRQoskLmHee+gYmbCHBqW1r9VdsXjTDKZbilQaL/rYsM/A/xAt9er1F3XvLSrADVQ9guH70cvVaWFPHLakbtU7FdPX3EbNx4PID8l6qxfPCP04AaXg6uKNr"
}

>- 11.6 14:48
Query string	
time	1541486966626
Form data	
csrftoken	2a68562e-b037-467b-9835-5c82e53af659,2a68562eb037467b98355c82e53af659
mm	[…]
0	V5AYwBgAZa9OJGSW1EMR9KTdO4oLeA7xmh2TYu6aOKP4dbDKkCW72AzNZ3QH3N+9uqaoNESkvtU3hha9EtWwwOcGMAAcLZ0IxydSW7OLLv2I9C5FpdOWdVi07v9uFlmMjz1LuP/32Nn3ZMu2fmIj/YZTridcSkNwmVwmUWVv5aY=
1	V5AYwBgAZa9OJGSW1EMR9KTdO4oLeA7xmh2TYu6aOKP4dbDKkCW72AzNZ3QH3N+9uqaoNESkvtU3hha9EtWwwOcGMAAcLZ0IxydSW7OLLv2I9C5FpdOWdVi07v9uFlmMjz1LuP/32Nn3ZMu2fmIj/YZTridcSkNwmVwmUWVv5aY=
yhm	04163053


>- 11-6 20:52
- 完成加密
- 将form表单提交转由后台提交，以得到状态码

>- 11-7 22.30
- 完成后台转发1及状态码验证
    **但获取的状态码始终为302**
- 发现网站使用session进行登录状态记录(只有一条session数据)
- 一次记录 ： 
    未登录 ： 62F1F03D7C6F776261580DF3AA9CFF48
    登录成功 : 62F1F03D7C6F776261580DF3AA9CFF48
    无变化，但删除其值后需重新登录,并生成了一新的值,将刚才的值重新粘贴到session，刷新页面，**登录成功**
- 302 响应是为让我跳转回教务系统登录界面


>- 发起请求时完全伪造站点(csrftoken ， 时间戳****)


>- 11-11 15：11
- csrftoken 取消，为服务器加入session设置
- 完成基本登录验证，但还未测试并发（怀疑有问题）
- 设置响应头防止缓存（会导致回退到主页但不获取数据）

- 当多个用户同时访问时，使用cookie来存储个人获取到的数据
在提交时，用户同时提交自己的cookie数据

>- 11-12 21:13
- 改变思路， 时间戳，公钥，sessionID都是在提交时需要用到的数据
    将获取数据统一放在`/postMessage` 中[作废]
- 加密需要前端完成，只能通过前端,将需要的数据转化

>- 11-13 17:20
- 连接数据库

>- 11-15 21:33
- 修改页面

>- 11-16 16:45
- 完成弹窗，使用弹窗进行报名

>- 11-17 12:36
- 构思报名流程 ：
 浏览到第6页为一段引语 + 我要报名选项，点击我要报名后，弹出模态框进行登录
        1. 登录成功 ： 跳转到填写信息界面，填写完信息后，提交到服务器
        2. 登录失败 ： 显示提示信息

>- 11-18 12:03
- 尝试将提示箭头放回原来的大小，滑动事件由iframe监听，调用主页的活动方法
