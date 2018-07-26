
export function getRedirecPath({type, avatar}){
    //根据用户信息 返回跳转地址
    //user.type     /boss    /gennius
    //user.avatar  /bossinfo  /genniusinfo
    let url = (type==='boss')? '/boss':'/genius'
    if(!avatar){
        url += 'info'
    }
    return url
}