"use client";

import React from "react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import LoginScreen from './LoginScreen';

const Login = () => {
 
    return (
        <div>
            <Provider store={store}>
                <LoginScreen/>
            </Provider>
        </div>
    );
}

export default Login;