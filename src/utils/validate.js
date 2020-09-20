// 正则验证类
// 密码验证
export const reg_password = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
export const validate_password = reg_password;
// 邮箱验证
export const reg_email = /^([a-zA-Z]|[0-9])(\w|\/-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
// 导出邮箱验证正则
export function validate_email(value) {
    return reg_email.test(value);
}
// 导出密码验证正则
export function validate_passwords(value) {
    return reg_password.test(value);
}