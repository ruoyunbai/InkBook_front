import service from "./index";
import {ILoginData} from "../type/login";


// 项目列表接口
export function getGoodsList(){
    return service({
        url: "/proj/get_proj_all",
        method: "POST"
    })
}

// 用户列表接口
// export function getUserList(){
//     return service({
//         url: "/getUserList",
//         method: "GET"
//     })
// }

// 角色列表接口
// export function getRoleList(){
//     return service({
//         url: "/getRoleList",
//         method: "POST"
//     })
// }

// 权限列表接口
// export function getAuthorityList(){
//     return service({
//         url: "/getAuthorityList",
//         method: "POST"
//     })
// }