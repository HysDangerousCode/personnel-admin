import React from "react";
import { Route, Redirect } from "react-router-dom";
// 获取方法
import { getToken } from "../../utils/session";
const PrivateRouter = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={routeProps => (getToken() ? <Component {...routeProps} /> : <Redirect to="/" />)} />
    );
}

export default PrivateRouter;