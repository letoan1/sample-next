'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Input, Button } from 'antd';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

import style from '@/app/scss/login.module.scss';
import logo from '@/assets/svg/Frame.svg';
import eyeHideIcon from '@/assets/svg/Eye.svg';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { login } from '../store/authSlice';

const StyledInput = styled(Input)`
    padding: 8px;
    border-radius: 4px;
    min-width: 100%;
    border: 1px solid #8c8c8c !important;
    background: #fff;
`;

const StyledInputPw = styled(Input.Password)`
    border-radius: 4px !important;
    border: 1px solid #8c8c8c !important ;
`;

const StyledButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px !important;
    height: auto !important;
    border-radius: 24px;
    background: #258a7c;
    width: 100%;
    font-size: 18px;
    color: #fff;
    font-style: normal;
    &:hover {
        color: #fff !important;
        border-color: #fff !important;
    }
`;

const Login = () => {
    const dispatch = useDispatch<AppDispatch>();
    const authLogin = useSelector((state: RootState) => state.auth);
    const [username, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [message, setMessage] = React.useState<string>('');
    const router = useRouter();
    const dummyAuth = {
        username: 'abc',
        password: '123',
    };

    const handleLogin = () => {
        if (username.trim() === dummyAuth.username && password.trim() === dummyAuth.password) {
            dispatch(login());
            router.push('/');
        } else {
            setMessage('Username or password invalid !');
        }
    };

    return (
        <div className={style['login']}>
            <div className={style['login__image']}>
                <Image src={logo} alt="" />
            </div>
            <div className={style['login__form']}>
                <h1>LOGIN</h1>
                <div className={style['login__form--item']}>
                    <div className={style['input__form--control']}>
                        <label htmlFor="login">Login</label>
                        <br />
                        <StyledInput placeholder="address@gmail.com" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className={style['input__form--control']}>
                        <label htmlFor="pw">Password</label>
                        <br />
                        <StyledInputPw
                            size="large"
                            style={{ borderRadius: '4px !important' }}
                            suffix={<Image src={eyeHideIcon} alt="" />}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <p style={{ color: 'red' }}>{message}</p>
                </div>
                <div className={style['login__form--other']}>
                    <div className={style['remember']}>
                        <input type="checkbox" />
                        <span>Remember</span>
                    </div>
                    <div className={style['forgot']}>
                        <Link href="/">Forgot password</Link>
                    </div>
                </div>
                <StyledButton onClick={handleLogin}>Login</StyledButton>
            </div>
        </div>
    );
};

export default Login;
