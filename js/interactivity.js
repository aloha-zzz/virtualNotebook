function s(id){
    return document.getElementById(id);
}

s('add').onclick=function () {
    s('addTask').style.display="block";
}
s('closeAddTask').onclick=function () {
    s('addTask').style.display="none";
}
s('closeDeleteDiv').onclick=function () {
    s('deleteDiv').style.display='none';
}
s('getTask').onclick=function (e) {
    (e||window.e).cancelBubble=true;//阻止事件冒泡
}
s('selected').onclick=function (e) {
    (e||window.e).cancelBubble=true;
}
s('tools').onclick=function (e) {
    (e||window.e).cancelBubble=true;
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
            console.log(e.clientX+' '+e.clientY)
            e.cancelBubble=true;
            s('tools').style.display='none'
            s('getTask').style.display='block';
            s('getTask').style.left=e.clientX+'px';
            s('getTask').style.top=e.clientY+'px';
            s('selected').style.display='block';
            s('selected').style.left=e.clientX-40+'px';
            s('selected').style.top=e.clientY-40+'px';
            var user=new AjaxFunction();
            var page=1;
            var row=3;
            user.getTask()

            for(var i=0;i<manage.length;i++){
                (function (g) {
                    manage[g].onclick=function () {

                        console.log(g)
                        console.log(manage[g].parentNode)
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
}
s('delete').onclick=function () {
    s('deleteDiv').style.display='none';
}