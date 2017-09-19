document.getElementById('register').onclick=function () {
    var username=document.querySelectorAll('input')[0].value;
    var password=document.querySelectorAll('input')[1].value;
    var email=document.querySelectorAll('input')[2].value;
    if(username==''||password==''||email==''){
        alert('输入信息不能为空');
    }else{
        var user =new AjaxFunction();
        user.register(username,password,email,function (data) {
            console.log(data);
            if(data.status==200){
                console.log('注册成功');
                window.location.href='login.html';
            }else  if(data.status==300){
                console.log('该用户名已存在');
            }
        },function (data) {
            console.log(data);
            alert('网络链接超时')
        })
    }
}

