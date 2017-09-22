var prefix='http://120.24.70.191:8080/VisualNoteBook0';
var API={
    login:`${prefix}/api/all/login`,
    unlogin:`${prefix}/api/all/unlogin`,
    register:`${prefix}/api/all/register`,

    // register

    // 需要权限
    getTask:`${prefix}/api/user/getTask`,
    addTask:`${prefix}/api/user/addTask`,
    updateTask:`${prefix}/api/user/updateTask`,
    deleteTask:`${prefix}/api/user/deleteTask`,
    finishTask:`${prefix}/api/user/finishTask`,
}