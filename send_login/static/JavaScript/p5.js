//实现中心四张图片加载时陆续出现，点击图片，div变大，出现文字，同时整个背景的颜色发生变化
let imgs = document.getElementsByClassName('img');
let turn = document.getElementsByClassName('turn');
let index = 0;
let show,curTar = 0;
let tell = document.getElementById("tell");
let p =document.getElementsByClassName("p");
let say = document.getElementById("say");
let point = document.getElementById("point");
window.onload = function () {
    point.style.animation = 'point 3s 1 linear';
    say.style.animation = 'say 3s 1 linear';
};

let str ="来到“庄园”和我们一起成长吧。通过自己的努力，每天收获满满的能量哦，是不是超有成就感呢。" +
    "等你长成一棵'大树'，你就是传说中的大佬了哦，你也可以做出炫酷的动画，吸人眼球的页面，" +
    "当然也可以给你的天马行空的思想一个很好的展示空间哦。快来加入我们吧，期待见到每个拥有小思想的小阔爱哦ヽ(￣▽￣)ﾉ。";
function text(){
    show = setInterval(showTell,100);
}

//题目的出现
function showTell() {
    tell.innerText = str.substring(0,index++);
    if(index > str.length)
        clearInterval(show);
}

text();

function change(event) {
    if(curTar !== 0){
        hideCur();
    }
    else{
        let tarId = event.target.id;
        showTar(tarId);
    }
}
function show1(){
    turn[0].style.width = '200%	';
    imgs[0].style.width = '48%';
    turn[1].style.display = 'none';
    turn[0].style.backgroundColor = '#999c96';
    p[0].style.display = ' inline-block';
    p[0].style.right = '0';
    p[0].style.width = '48%';
}
function show2(){
    turn[0].style.display = 'none';
    turn[1].style.width = '200%';
    turn[1].style.backgroundColor = '#999c96';
    turn[1].style.left='-100%'; //第二个向左移动
    p[1].style.display = 'inline-block';
    imgs[1].style.width = '48%';
    p[1].style.left = '0';
    p[1].style.width = '48%';
}
function show3(){
    turn[2].style.width = '200%	';
    imgs[2].style.width = '48%';
    turn[2].style.backgroundColor = '#999c96';
    p[2].style.display = ' inline-block';
    p[2].style.right = '0';
    p[2].style.width = '48%';
    turn[3].style.display ='none';
}
function show4(){
    turn[2].style.display = 'none';
    turn[3].style.width = '200%';
    turn[3].style.backgroundColor = '#999c96';
    turn[3].style.left='-100%'; //第二个向左移动
    p[3].style.display = 'inline-block';
    imgs[3].style.width = '48%';
    p[3].style.left = '0';
    p[3].style.width = '48%';
}
function showTar(tarId){
    if(tarId === "one"){
        show1();
        curTar = 1;
    }
    if(tarId === "two"){
        show2();
        curTar = 2;
    }
    if(tarId === "three"){
        show3();
        curTar = 3;
    }
    if(tarId === "four"){
        show4();
        curTar = 4;
    }
}

function hide1() {
    turn[0].style.width = '100%';
    imgs[0].style.width = '98%';
    turn[1].style.display = 'block';
    p[0].style.display = 'none';
}
function hide2() {
    turn[0].style.display = 'block';
    turn[1].style.width = '100%';
    turn[1].style.left = "0";//第二个div和框复原
    p[1].style.display = 'none';
    imgs[1].style.width = '98%';
    imgs[1].style.left = '0';
}
function hide3() {
    turn[2].style.width = '100%';
    imgs[2].style.width = '98%';
    turn[3].style.display = 'block';
    p[2].style.display = 'none';
}
function hide4() {
    turn[2].style.display = 'block';
    turn[3].style.width = '100%';
    turn[3].style.left = "0";//第二个div和框复原
    p[3].style.display = 'none';
    imgs[3].style.width = '98%';
    imgs[3].style.left = '0';
}
function hideCur(){
    if(curTar === 1)
        hide1();
    else if(curTar === 2)
        hide2();
    else if(curTar === 3)
        hide3();
    else if(curTar === 4)
        hide4();
    else
        return;
    curTar = 0;
}

//显示提示信息
function showTips(){
  let tips = $('#tips');
  tips.show();
  tips.addClass('tipFall');
}
