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
var manage=document.querySelectorAll('.manage');

var touch=document.querySelectorAll('.touch');
for(var i=0;i<touch.length;i++){
    (function (g) {
        touch[g].onclick=function (e) {
            console.log(e.clientX+' '+e.clientY)
            s('tools').style.display='none'
            s('getTask').style.display='block';
            s('getTask').style.left=e.clientX+'px';
            s('getTask').style.top=e.clientY+'px';
            s('selected').style.display='block';
            s('selected').style.left=e.clientX-40+'px';
            s('selected').style.top=e.clientY-40+'px';
            for(var i=0;i<manage.length;i++){
                (function (g) {
                    manage[g].onmouseover=function () {
                        console.log(g)
                        console.log(manage[g].parentNode)
                        manage[g].parentNode.innerHTML='<img class="manage" src="img/manage_fill.png">'
                        s('tools').style.display='flex';
                        s('tools').style.top=e.clientY+65+60*g+'px'
                        s('tools').style.left=e.clientX+335+'px'
                    }
                    manage[g].onmouseout=function () {
                        console.log(111)
                        // manage[g].parentNode.innerHTML='<img class="manage" src="img/manage.png">'
                        setTimeout('s(\'tools\').style.display=\'none\'',10000);
                    }

                })(i)
            }
        }
    })(i)
}