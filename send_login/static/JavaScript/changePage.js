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
  parent.insideTouchEnd(diff);
}
