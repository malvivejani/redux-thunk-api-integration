import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../types/LoginTypes";

export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
};

export const loginSuccess = (login: any) => {
    return {
        type: LOGIN_SUCCESS,
        payload: login
    }
};

export const loginFailure = (error: any) => {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
};

export const loginAPI = (loginInfo: any, onLoginSuccess: () => void, onLoginFailure: () => void) => {
    return async (dispatch: any) => {
        dispatch(loginRequest())
        await axios.post('/auth/login', loginInfo).then(response => {
            const login = response?.data;
            if (response.data.statusCode === 200) {
                dispatch(loginSuccess(login.data));
                localStorage.setItem('accessToken', response?.data?.data?.accessToken)
                onLoginSuccess();
            }
        }).catch(error => {
            const errmsg = error.message;
            dispatch(loginFailure(errmsg));
            onLoginFailure();
        })
    }
};