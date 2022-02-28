import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAPI } from '../redux/actions/LoginAction';

function Login() {

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });
    const dispatch = useDispatch();
    const login = useSelector((state: any) => state.login);
    const navigation = useNavigate();

    const loginHandler = async (e: any) => {
        e.preventDefault();
        await dispatch(loginAPI(loginInfo, onLoginSuccess, onLoginFailure))
    };

    const onLoginSuccess = () => {
        navigation('/');
    };

    const onLoginFailure = () => {

    };

    return (
        <>
            <div>Login</div>
            <form onSubmit={loginHandler}>
                <div>
                    <label>Email</label>
                    <input name="email" value={loginInfo.email} placeholder="email" onChange={(e) => setLoginInfo({ ...loginInfo, email: e.target.value })} />
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" value={loginInfo.password} placeholder="password" onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })} />
                </div>
                <button type="submit" style={{ color: 'white', backgroundColor: 'green' }}>{login.loading ? 'Loading' : 'Login'}</button>
            </form>
        </>
    )
}

export default Login