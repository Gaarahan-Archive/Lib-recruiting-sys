$("#dl").click(function(){
  //判断cookie是否成功获取
  if( !document.cookie ){
    alert('你的浏览器没有开启cookie,换个浏览器试试吧');
  }

  //获取需要的数据
  let mm = $("#mm");
  let yhm = $("#yhm");
  let tips= $("#tips");

  //判断是否存在空数据域
  console.log(yhm.val().trim());
  if(yhm.val().trim() === null ||yhm.val().trim() === ""){
    tips.html("<span class='glyphicon glyphicon-exclamation-sign'></span> 用户名和密码都要填哦");
    tips.show();
    yhm.focus();
    return;
  } else if(mm.val().trim() === null || mm.val().trim() === ""){
    tips.html("<span class='glyphicon glyphicon-exclamation-sign'></span> 用户名和密码都要填哦");
    tips.show();
    mm.focus();
    return;
  }

  //获取需求的数据
  let cookieData = document.cookie.match('MnData').input.substring(7);
  let MnData = JSON.parse(unescape(cookieData));

  if( MnData.hasOwnProperty('publicKey') && MnData.publicKey.hasOwnProperty('modulus')
        && MnData.publicKey.hasOwnProperty('exponent')){
    if ($("#mmsfjm").val() !== '0') {
      //加密数据
      const rsaKey = new RSAKey();
      rsaKey.setPublic(b64tohex(MnData.publicKey.modulus), b64tohex(MnData.publicKey.exponent));
      const enPassword = hex2b64(rsaKey.encrypt(mm.val()));
      mm.val(enPassword);
      $("#hidMm").val(enPassword);   //页面上放了一个隐藏的password类型输入框，name也是mm，防止密码自动填充，在提交的时候把内容设置成跟输入的密码一致
    }
    document.forms[0].submit();

  }else{
    alert('获取数据出错，请刷新页面重试');
    return 0;
  }
});
