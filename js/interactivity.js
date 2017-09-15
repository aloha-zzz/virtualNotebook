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
for(var i=0;i<manage.length;i++){

}