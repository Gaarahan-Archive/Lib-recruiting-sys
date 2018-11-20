let curPage = 1;
const PageL = $('.page_box .page').length;
let canTouch = false;
canTouch = true;

let startY, endY, diff;
document.body.addEventListener("touchstart", touchStart, false);
document.body.addEventListener("touchmove", touchMove, false);
document.body.addEventListener("touchend", touchEnd, false);
function touchStart(e){
  const touch = e.touches[0];
  startY = touch.pageY;
}
function touchMove(e){
  const touch = e.touches[0];
  endY = touch.pageY;
  diff = endY - startY;
}
function touchEnd(){
    if(Math.abs(diff) > 50 && canTouch){
      if(diff > 0){
        if(curPage <= 1){ return; }
        $(`.page${curPage}`).removeClass('inTop outTop inDown outDown hide').addClass('outDown');
        curPage--;
        $(`.page${curPage}`).removeClass('inTop outTop inDown outDown hide').addClass('inDown');
      }else{
        //前往报名页面
        if(curPage === 5){
          //显示跳转提示
              $('#p5')[0].contentWindow.showTips();
              window.location.href = "/pageSignUp";
          return;
        }
        if(curPage >= PageL){ return; }
        $(`.page${curPage}`).removeClass('inTop outTop inDown outDown hide').addClass('outTop');
        curPage++;
        $(`.page${curPage}`).removeClass('inTop outTop inDown outDown hide').addClass('inTop');
        if(curPage >= PageL + 1){
          $('.arrow').hide();
        }else{
          $('.arrow').show();
        }
      }
      canTouch = false;
      setTimeout(function(){
        canTouch = true;
        diff = 0;
        $(`.page${curPage - 1}, .page${curPage + 1}`).addClass('hide');
      },1000);
    }
}
function insideTouchEnd(diffent){
  diff = diffent;
  touchEnd();
}