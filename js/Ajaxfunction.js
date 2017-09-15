console.log(API);
function AjaxFunction() {
    function ajaxFunction() {
        
    }
    ajaxFunction.prototype.login=function (username,password,success,failed) {
        if(typeof success==='function'&&typeof failed==='function'){
             $.ajax({
                 url:API.login,
                 type:'post',
                 data:{username,password},
                 dataType:'json',
                 success:function(data){
                     success(data);
                 },
                 error:function (data) {
                     failed(data);
                 }
             })
        }
    }

    ajaxFunction.prototype.unlogin=function (success,failed) {
        if(typeof success==='function'&&typeof failed==='function'){
            $.ajax({
                url:API.unlogin,
                type:'get',
                data:{},
                dataType:'json',
                success:function(data){
                    success(data);
                },
                error:function (data) {
                    failed(data);
                }
            })
        }
    }
    ajaxFunction.prototype.register=function (username,password,email,success,failed) {

        if(typeof success==='function'&&typeof failed==='function'){
            $.ajax({
                url:API.register,
                type:'post',
                data:{username,password,email},
                dataType:'json',
                success:function(data){
                    success(data);
                },
                error:function (data) {
                    failed(data);
                }
            })
        }
    }

    ajaxFunction.prototype.getTask=function (page,rows,success,failed) {
        if(typeof success==='function'&&typeof failed==='function'){
            $.ajax({
                url:API.getTask,
                type:'get',
                data:{page,rows},
                dataType:'json',
                success:function(data){
                    success(data);
                },
                error:function (data) {
                    failed(data);
                }
            })
        }
    }

    ajaxFunction.prototype.addTask=function (taskName,taskTime,success,failed) {
        if(typeof success==='function'&&typeof failed==='function'){
            $.ajax({
                url:API.addTask,
                type:'post',
                data:{taskName,taskTime},
                dataType:'json',
                success:function(data){
                    success(data);
                },
                error:function (data) {
                    failed(data);
                }
            })
        }
    }
//修改任务
    ajaxFunction.prototype.updateTask=function (taskId,taskName,taskTime,success,failed) {
        if(typeof success==='function'&&typeof failed==='function'){
            $.ajax({
                url:API.updateTask,
                type:'post',
                data:{taskId,taskName,taskTime},
                dataType:'json',
                success:function(data){
                    success(data);
                },
                error:function (data) {
                    failed(data);
                }
            })
        }
    }

    ajaxFunction.prototype.deleteTask=function (taskId,success,failed) {
        if(typeof success==='function'&&typeof failed==='function'){
            $.ajax({
                url:API.deleteTask,
                type:'get',
                data:{taskId},
                dataType:'json',
                success:function(data){
                    success(data);
                },
                error:function (data) {
                    failed(data);
                }
            })
        }
    }


    ajaxFunction.prototype.finishTask=function (taskId,success,failed) {
        if(typeof success==='function'&&typeof failed==='function'){
            $.ajax({
                url:API.finishTask,
                type:'get',
                data:{taskId},
                dataType:'json',
                success:function(data){
                    success(data);
                },
                error:function (data) {
                    failed(data);
                }
            })
        }
    }

    return new ajaxFunction();
}