function s(id){
    return document.getElementById(id);
}
var taskType='';
s('submit').onclick=function () {
    var name=document.querySelectorAll('.addTask input')[0].value;
    var time=document.querySelectorAll('.addTask input')[1].value;
    if(name==''||time==''){
        alert("输入内容不能为空");
    }else{
        var user =new AjaxFunction();
        user.addTask(name,time,taskType,function (data) {
            console.log(data);
            alert('添加事项成功');
            document.querySelector('body').click();

            s('closeAddTask').click();
        },function (data) {
            console.log(data);
        })
    }


}
function finish(e) {
    taskId=e.parentNode.parentNode.getAttribute('taskId');
    e.parentNode.parentNode.lastChild.previousSibling.innerHTML='';
    e.parentNode.innerHTML=`<img src='img/finish.png'>`;
    var user =new AjaxFunction();
    user.finishTask(taskId,function (data) {
        console.log(data);
        alert('您成功完成该任务');
    },function (data) {
        alert('网络连接超时')
    })
}


s('closeAddTask').onclick=function () {
    s('addTask').style.display="none";
    s('outer').style.display='none';
    document.querySelectorAll('.addTask input')[0].value='';
    document.querySelectorAll('.addTask input')[1].value='';

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
var inputValue=''
s('editBtn').onclick=function () {

    s('outer').style.display='block';
    s('editTask').style.display='block';
    document.querySelectorAll('.editTask input')[0].value=taskName;
    inputValue=taskTime.replace(/\//g,'-');
    document.querySelectorAll('.editTask input')[1].value=inputValue.replace(' ','T');


}
s('edit').onclick=function () {

    if(document.querySelectorAll('.editTask input')[0].value==taskName&&document.querySelectorAll('.editTask input')[1].value==inputValue.replace(' ','T')){
        alert('您还没修改信息呢');
    }else {
        var user =new AjaxFunction();
        var input1=document.querySelectorAll('.editTask input')[0].value;
        var input2=document.querySelectorAll('.editTask input')[1].value;

        user.updateTask(taskId,input1,input2,taskType,function (data) {
            console.log(data);
            alert('修改成功')
            document.querySelector('body').click();
            s('closeEditTask').click();
        },function (data) {
            console.log(data);
            alert('网络连接超时')
        })
    }
}
var a='';//让manage　src清空;
document.getElementsByTagName('body')[0].onclick=function (e) {
    a.src='img/manage.png'
    s('getTask').style.display='none';
    s('selected').style.display='none';
    s('tools').style.display='none';

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
            var toolLeft=0;
            var toolTop=0;

            switch(g){
                case 0:
                    s('selected').style.left='890px';
                    s('selected').style.top='300px';
                    s('getTask').style.left='930px';
                    toolLeft='930px';
                    s('getTask').style.top='340px';
                    toolTop='340px';
                    taskType='plant';
                    break;
                case 1:
                    s('selected').style.left='1036px';
                    s('selected').style.top='156px';
                    s('getTask').style.left='775px';
                    toolLeft='775px';
                    s('getTask').style.top='196px';
                    toolTop='196px';
                    taskType='window';
                    break;
                case 2:
                    s('selected').style.left='239px';
                    s('selected').style.top='302px';
                    s('getTask').style.left='279px';
                    toolLeft='279px';
                    s('getTask').style.top='342px';
                    toolTop='342px';
                    taskType='water';
                    break;
                case 3:
                    s('selected').style.left='490px';
                    s('selected').style.top='405px';
                    s('getTask').style.left='525px';
                    toolLeft='525px';
                    s('getTask').style.top='135px';
                    toolTop='135px';
                    taskType='bed';
                    break;
                case 4:
                    s('selected').style.left='664px';
                    s('selected').style.top='400px';
                    s('getTask').style.left='704px';
                    toolLeft='704px';
                    s('getTask').style.top='127px';
                    toolTop='127px';
                    taskType='charge';
                    break;
                case 5:
                    s('getTask').style.left=e.clientX+'px';
                    s('getTask').style.top=e.clientY+'px';
                    s('selected').style.left=e.clientX-40+'px';
                    s('selected').style.top=e.clientY-40+'px';
                    toolLeft=e.clientX+'px';
                    toolTop=e.clientY+'px';
                    taskType='book';
                    break;
            }

            var user=new AjaxFunction();
            var page=1;
            var row=3;
            console.log(taskType)
            user.getTask(page,row,taskType,function (data) {
                console.log(data);
                if(data.status==200){
                    var content=''
                    for(var i=0;i<data.data.tasks.length;i++){
                        content+=`
            <div class="taskLine" taskId="${data.data.tasks[i].taskId}">
                <div>
                    <div onclick="finish(this)" class="circle"></div>
                </div>
                <div>
                    <div>${data.data.tasks[i].taskName}</div>
                    <div class="time">${data.data.tasks[i].taskTime}</div>
                </div>
                <div>
                    <img class="manage" src='img/manage.png'>
                </div>
            </div>`
                    }
                    s('getTask').innerHTML=` <div>
            <img style="flex: 1" width="40" height="40" src="img/remind.png">
            <div style="flex: 6">提醒事项</div>
        </div>`+content+
                        `<div>
            <div>现有事项:${data.data.total}</div>
            <button id="add">添加</button>
        </div>`;
                    s('add').onclick=function () {
                        s('outer').style.display='block';
                        s('addTask').style.display="block";
                    }
                    var manage=document.querySelectorAll('.manage');
                    for(var i=0;i<manage.length;i++){
                        (function (g) {
                            manage[g].onclick=function () {

                                console.log(g);
                                taskName=manage[g].parentNode.parentNode.children[1].children[0].innerText;
                                taskTime=manage[g].parentNode.parentNode.children[1].children[1].innerText;
                                taskId=manage[g].parentNode.parentNode.getAttribute('taskid');
                                a=manage[g];
                                manage[g].src="img/manage_fill.png";
                                for(var j=1;j<manage.length;j++){
                                    manage[(g+j)%manage.length].src="img/manage.png";
                                }




                                s('tools').style.display='flex';
                                s('tools').style.top=parseFloat(toolTop)+65+60*g+'px'
                                s('tools').style.left=parseFloat(toolLeft)+335+'px'
                                console.log(1);
                            }


                        })(i)
                    }
                }else if(data.status==300){

                    s('getTask').innerHTML=` <div>
            <img style="flex: 1" width="40" height="40" src="img/remind.png">
            <div style="flex: 6">提醒事项</div>
        </div>`+`<div class="taskLine">还没有信息</div>`+
                        `<div>
            <div>现有事项:0</div>
            <button id="add">添加</button>
        </div>`;
                    s('add').onclick=function () {
                        s('outer').style.display='block';
                        s('addTask').style.display="block";
                    }
                }
            },function (data) {
                console.log(data);
            })

            for(var i=0;i<manage.length;i++){
                (function (g) {
                    manage[g].onclick=function () {

                        console.log(g);
                        taskName=manage[g].parentNode.parentNode.children[1].children[0].innerText;
                        taskTime=manage[g].parentNode.parentNode.children[1].children[1].innerText;

                        a=manage[g];
                        manage[g].src="img/manage_fill.png";
                        manage[(g+1)%3].src="img/manage.png";
                        manage[(g+2)%3].src="img/manage.png";
                        console.log(toolTop);
                        console.log(toolLeft);
                        s('tools').style.display='flex';
                        s('tools').style.top=parseFloat(toolTop)+65+60*g+'px'
                        s('tools').style.left=parseFloat(toolLeft)+335+'px'

                    }


                })(i)
            }
        }
    })(i)
}

var taskId='';


s('deleteBtn').onclick=function () {
    s('deleteDiv').style.display='block';
    console.log(taskId);
    s('outer').style.display='block';
}
s('delete').onclick=function (e) {
    e.cancelBubble=true;
    s('deleteDiv').style.display='none';
    s('outer').style.display='none';
    var user=new AjaxFunction();
    user.deleteTask(taskId,function (data) {

        document.getElementsByTagName('body')[0].click();
        s('closeDeleteDiv').click();
        alert('删除成功');
    },function (data) {
        alert('网络链接超时')
    })

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