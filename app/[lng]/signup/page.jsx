"use client";

import React from "react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import SignupScreen from './SignupScreen';

const Login = () => {
 
    return (
        <div>
            <Provider store={store}>
                <SignupScreen/>
            </Provider>
        </div>
    );
}

export default Login;