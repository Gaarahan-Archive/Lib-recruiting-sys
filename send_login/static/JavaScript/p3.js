window.onload = function () {
    let onClicks = document.getElementById('onClick');
    let rightTalks = document.getElementById('rightTalk');
    let words = document.getElementById('word');
    let num = 0;

    //2、当点击之后触发的时间
    onClicks.onclick = function () {
      request();
    };

    function request(){
        if (num === 0) {
            //2、1 创建气泡
            let talk1 = document.createElement('div');
            talk1.className = 'chat-bubble chat-bubble-right' ;
            //2、2 创建图片
            let pic = document.createElement('img');
            pic.className = 'photo2';
            pic.src = '../img/fox2.jpg';

            rightTalks.appendChild(talk1);
            rightTalks.appendChild(pic);
             talk1.innerText = '小姐姐，我们用什么写代码？'; //添加对话1

        //2.3 创建回答气泡
        let talk2 = document.createElement('div');
        talk2.className = 'chat-bubble chat-bubble-left';

        //2.4 图片
        let pic1 = document.createElement('img');
        pic1.className = 'photo1';
        pic1.src = '../img/rabbit.jpg';
        rightTalks.appendChild(talk2);
        rightTalks.appendChild(pic1);
        talk2.innerText = '我们用JavaScript！'; //回答1

        //3.1删除节点
        words.innerText = "那我们用JavaScript可以干什么呀？(滑稽)";//添加对话2


            num = 1;
     }
        else if(num === 1) {
            //3、当点击之后触发的时间

            //2、1 创建气泡
            let talk3 = document.createElement('div');
            talk3.className = 'chat-bubble chat-bubble-right';
            //2、2 创建图片
            let pic = document.createElement('img');
            pic.className = 'photo2';
            pic.src = '../img/fox2.jpg';

            rightTalks.appendChild(talk3);
            rightTalks.appendChild(pic);
            talk3.innerText = '那我们用JavaScript可以干什么呀？(滑稽)'; //点击过后，添加对话气泡

            //2.3 创建回答气泡
            let talk4 = document.createElement('div');
            talk4.className = 'chat-bubble chat-bubble-left';

            //2.4 图片
            let pic1 = document.createElement('img');
            pic1.className = 'photo1';
            pic1.src = '../img/rabbit.jpg';
            rightTalks.appendChild(pic1);
            rightTalks.appendChild(talk4);
            talk4.innerText = '当然是为(xie)国(diao)家(yu)贡(wang)献(zhan)啊'; //回答2
            words.innerText = "好啊好啊，那我来了！";
            num = 2;
        }
        else if(num===2){
            //3.1删除节点

            let talk5 = document.createElement('div');
            talk5.className = 'chat-bubble chat-bubble-right';
            let pic2 = document.createElement('img');
            pic2.className = 'photo2';
            pic2.src = '../img/fox2.jpg';

            rightTalks.appendChild(talk5);
            rightTalks.appendChild(pic2);
            talk5.innerText = '好啊好啊，那我来了！'; //点击过后，添加对话气泡

            let talk6 = document.createElement('div');
            talk6.className = 'chat-bubble chat-bubble-left';

            //2.4 图片
            let pic3 = document.createElement('img');
            pic3.className = 'photo1';
            pic3.src = '../img/rabbit.jpg';
            rightTalks.appendChild(pic3);
            rightTalks.appendChild(talk6);
            talk6.innerText = '那快来报名叭！报名入口在后面哦'; //回答2

            words.parentElement.parentElement.removeChild(words.parentElement);
            onClicks.onclick = null;

        }
        }
};
