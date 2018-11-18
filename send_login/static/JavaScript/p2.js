window.onload=function(){
            const story ='<strong>"ThoughtWorks实验室"</strong>，全称<strong>“西安邮电大学ThoughtWorks联合创新实验室”</strong>，是ThoughtWorks公司联合西安邮电大学于2015年12月创立，创立至今也已走了三个年头，在学校芸芸实验室中也是唯一一间以前端为首，后台为辅，从前端学习入手，培养成员学习习惯，学习兴趣，学习热情的实干型实验室。'
            const frame = document.getElementById('frame');
            let i = 0;
            const timer=setInterval(function(){
                i+=1;
                 var currentContent = story.substring(0,i);
                if(i>story.length){
                    clearInterval(timer);
                return;
            }
                frame.innerHTML=currentContent;
            },70);
        }



