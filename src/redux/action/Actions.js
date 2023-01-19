import { Login, Logout, Register } from "../ActionTypes"

export const addRegister=(data)=>({
    type:Register,
    payload:data,
});
export const sendLogin=(data)=>({
    type:Login,
    payload:data,
});
export const remove=(data)=>({
    type:Logout,
    payload:data,
});