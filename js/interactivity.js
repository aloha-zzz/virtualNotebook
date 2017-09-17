function s(id){
    return document.getElementById(id);
}

s('add').onclick=function () {
    s('outer').style.display='block';
    s('addTask').style.display="block";
}
s('closeAddTask').onclick=function () {
    s('addTask').style.display="none";
    s('outer').style.display='none';
}

s('getTask').onclick=function (e) {
    (e||window.e).cancelBubble=true;//阻止事件冒泡
}
s('outer').onclick=function (e) {
    (e||window.e).cancelBubble=true;//阻止事件冒泡
}
s('selected').onclick=function (e) {
    (e||window.e).cancelBubble=true;
}
s('tools').onclick=function (e) {
    (e||window.e).cancelBubble=true;
}
s('closeEditTask').onclick=function () {
    s('editTask').style.display='none';
    s('outer').style.display='none';
}

s('addTask').onclick=function (e) {
    (e||window.e).cancelBubble=true;
}
s('editTask').onclick=function (e) {
    (e||window.e).cancelBubble=true;
}
var taskName='';
var taskTime='';
s('editBtn').onclick=function () {
    s('outer').style.display='block';
    s('editTask').style.display='block';
    document.querySelectorAll('.editTask input')[0].value=taskName;
    var inputValue=taskTime.replace(/\//g,'-');
    document.querySelectorAll('.editTask input')[1].value=inputValue.replace(' ','T');
    s('edit').onclick=function () {
        if(document.querySelectorAll('.editTask input')[0].value==taskName&&document.querySelectorAll('.editTask input')[1].value==inputValue.replace(' ','T')){
            alert('您还没修改信息呢');
        }else {
            alert('ajax');
        }
    }
}

var a='';//让manage　src清空;
document.getElementsByTagName('body')[0].onclick=function (e) {
    a.src='img/manage.png'
    s('getTask').style.display='none';
    s('selected').style.display='none';
    s('tools').style.display='none';
    console.log(111);
}

var manage=document.querySelectorAll('.manage');

var touch=document.querySelectorAll('.touch');

for(var i=0;i<touch.length;i++){

    (function (g) {
        touch[g].onclick=function (e) {
            a.src='img/manage.png';
            e.cancelBubble=true;
            s('tools').style.display='none'
            s('getTask').style.display='block';

            s('selected').style.display='block';
            switch(g){
                case 0:
                    s('selected').style.left='944px';
                    s('selected').style.top='277px';
                    s('getTask').style.left='984px';
                    s('getTask').style.top='317px';
                    break;
                case 1:
                    s('selected').style.left='1036px';
                    s('selected').style.top='156px';
                    s('getTask').style.left='775px';
                    s('getTask').style.top='196px';
                    break;
                case 2:
                    s('selected').style.left='239px';
                    s('selected').style.top='302px';
                    s('getTask').style.left='279px';
                    s('getTask').style.top='342px';
                    break;
                case 3:
                    s('selected').style.left='490px';
                    s('selected').style.top='405px';
                    s('getTask').style.left='525px';
                    s('getTask').style.top='135px';
                    break;
                case 4:
                    s('selected').style.left='664px';
                    s('selected').style.top='400px';
                    s('getTask').style.left='704px';
                    s('getTask').style.top='127px';
                    break;
                case 5:
                    s('getTask').style.left=e.clientX+'px';
                    s('getTask').style.top=e.clientY+'px';
                    s('selected').style.left=e.clientX-40+'px';
                    s('selected').style.top=e.clientY-40+'px';
                    break;
            }

            var user=new AjaxFunction();
            var page=1;
            var row=3;
            user.getTask(page,row,function (data) {
                console.log(data);
            },function (data) {
                console.log(data);
            })

            for(var i=0;i<manage.length;i++){
                (function (g) {
                    manage[g].onclick=function () {

                        console.log(g);
                        taskName=manage[g].parentNode.parentNode.children[1].children[0].innerText;
                        taskTime=manage[g].parentNode.parentNode.children[1].children[1].innerText;
                        console.log(taskName+'  '+taskTime);
                        a=manage[g];
                        manage[g].src="img/manage_fill.png";
                        manage[(g+1)%3].src="img/manage.png";
                        manage[(g+2)%3].src="img/manage.png";
                        s('tools').style.display='flex';
                        s('tools').style.top=e.clientY+65+60*g+'px'
                        s('tools').style.left=e.clientX+335+'px'
                    }


                })(i)
            }
        }
    })(i)
}
s('deleteBtn').onclick=function () {
    s('deleteDiv').style.display='block';

    s('outer').style.display='block';
}
s('delete').onclick=function (e) {
    e.cancelBubble=true;
    s('deleteDiv').style.display='none';
    s('outer').style.display='none';
}
s('deleteDiv').onclick=function (e) {
    e.cancelBubble=true;
}
s('closeDeleteDiv').onclick=function () {
    s('outer').style.display='none';
    s('deleteDiv').style.display='none';
}
// 退出登录
// s('unlogin').onclick=function () {
//     var user=new AjaxFunction();
//     user.unlogin(function (data) {
//         alert('注销账号成功');
//         $.removeCookie('username')
//     },function (data) {
//         alert('网络连接失败');
//     })
// }