// 引入拦截器
import service from "../../src/utils/request";
/*
 *信息列表接口
 */
export function infoList(data) {
    return service.request({
        url: "/infoList/",
        method: "post",
        data, //请求类型为post时
        // params: data //请求类型为get时
    });
}
/*
 *信息详情接口
 */
export function infoDetailed() {
    return service.request({
        url: "/infoDetailed/",
        method: "post",
        data: "data" //请求类型为post时
            // params: data //请求类型为get时
    });
}