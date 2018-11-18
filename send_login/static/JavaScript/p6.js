$('#sub-btn').on('click',()=>{
  let nameData = $('#name').val().trim();
  let classData  = $('#class').val();
  let number = $('#number ').val();
  let tel= $('#tel').val();

  let warn = $('#warning');

  if(nameData === "" || nameData === null){
    warn.html("<span class='glyphicon glyphicon-exclamation-sign'></span>请完善所有表单项")
    warn.show();
    $('#name').focus();
  }else
  if(classData === "" || classData === null){
    warn.html("<span class='glyphicon glyphicon-exclamation-sign'></span>请完善所有表单项")
    warn.show();
    $('#class').focus();
  }else
  if(number === "" || number === null){
    warn.html("<span class='glyphicon glyphicon-exclamation-sign'></span>请完善所有表单项")
    warn.show();
    $('#number').focus();
  }else
  if(tel === "" || tel === null){
    warn.html("<span class='glyphicon glyphicon-exclamation-sign'></span>请完善所有表单项")
    warn.show();
    $('#tel').focus();
  }else{
    document.forms[0].submit();
  }
});
