

s('submit').onclick=function () {
    var name=document.querySelectorAll('input')[0].value;
    var time=document.querySelectorAll('input')[1].value;
    if(name==''||time==''){
        alert("输入内容不能为空");
    }else{
        var user =new AjaxFunction();
        user.addTask(name,time,function (data) {
            console.log(data);
        },function (data) {
            console.log(data);

        })
    }

}
