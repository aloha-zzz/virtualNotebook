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
            }else  if(data.status==300){
                console.log('该用户名已存在');
            }
        },function (data) {
            console.log(data);
            alert('网络链接超时')
        })
    }

}
document.getElementById('login').onclick=function () {
    var username;
    var password;
    if(username==''||password==""){
        alert('用户名或密码不能为空');
    }else{
        var user=new AjaxFunction();
        user.login(username,password,function (data) {
            if(data.status==300){
                alert('用户名或密码错误');
            }else if(data.status==200){
                alert('登陆成功');
            }
        },function (data) {
            alert('网络连接超时')
        })
    }
}
