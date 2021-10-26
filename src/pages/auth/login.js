import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import STORAGEKEY from '../../config/APP/app.config';
import { ApiPost } from '../../helper/API/ApiData';
import AuthStorage from '../../helper/AuthStorage';

const Login = () => {
    const router = useRouter()
    const LoginformData = {
        email: "",
        password: ""
    }

    const login_Err = {
        emailError: "",
        emailFormatErr: "",
        passError: "",
    };

    const [loginErrors, setLoginErrors] = useState(login_Err);
    const [loginform, setloginform] = useState(LoginformData);
    const [incorrectPass, setIncorrectPass] = useState("");
    const [invalidEmail, setInvalidEmail] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [saveEmail, setSaveEmail] = useState(false);
    const [isBtnSave, setBtnSave] = useState(false);


    const handleChange = (e) => {
        if (e.target.name === "acceptTerm") {
            setloginform({
                ...loginform,
                [e.target.name]: e.target.checked,
            });
        } else {

            setloginform({
                ...loginform,
                [e.target.name]: e.target.value,
            });
        }
    };

    const showPasswordBtn = () => {
        setShowPass(!showPass)
    }

    const validateForm = () => {

        let flag = false
        let login_Err = {
            emailError: "",
            emailFormatErr: "",
            passError: "",
        };

        const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (loginform.email && !validEmail.test(loginform.email)) {
            login_Err.emailFormatErr = "잘못된 이메일."
            flag = true
        }

        if (!loginform.email) {
            login_Err.emailError = "필수 정보입니다.";
            flag = true
        }

        if (loginform.password === "") {
            login_Err.passError = "비밀번호를 한번 더 확인해주세요.";
            flag = true
        }

        setLoginErrors(login_Err);
        setIncorrectPass("");

        return flag;

    }

    const Login = () => {
        if (validateForm()) {
            setBtnSave(true);
            return;
        }

        ApiPost("user/auth/login", {
            email: loginform.email,
            password: loginform.password,
        })
            .then((res) => {
                dispatch(changeLoginState(true))
                debugger;
                if (saveEmail) {
                    AuthStorage.setStorageData(STORAGEKEY.email, loginform.email, true);
                } else {
                    AuthStorage.deleteKey(STORAGEKEY.email)
                }

                AuthStorage.setStorageData(
                    STORAGEKEY.token,
                    res.data.token,
                    false
                );
                delete res.data.token;
                AuthStorage.setStorageJsonData(
                    STORAGEKEY.userData,
                    res.data,
                    false
                );
                debugger;
                router.push("/home/homepage");
            })
            .catch((error) => {
                if (error === "Wrong Email") {
                    setIncorrectPass("");
                    setInvalidEmail("필수 정보입니다.");
                }
                if (error === "Wrong Password") {
                    setInvalidEmail("");
                    setIncorrectPass("비밀번호를 한번 더 확인해주세요.");
                }
            });
    };

    useEffect(() => {
        if (loginform.email == "" || loginform.password == "") {
            setBtnSave(true)
        } else {
            setBtnSave(false)
        }
    }, [loginform])

    return (
        <div>
            <div className="loginForm">
                <div className="formTitle">
                    <h4>로그인</h4>
                </div>
                <div className="LoginFullForm">
                    <div>
                        <div>
                            <label>이메일</label>
                        </div>
                        <input
                            placeholder="이메일 주소"
                            name="email"
                            value={loginform.email}
                            type="text"
                            className="login-input"
                            onChange={(e) => {
                                handleChange(e);
                            }}
                            autoComplete="off"
                        />
                        {loginErrors.emailError && (
                            <p className="form-error">
                                {loginErrors.emailError}
                            </p>
                        )}
                        {loginErrors.emailFormatErr && (
                            <p className="form-error">
                                {loginErrors.emailFormatErr}
                            </p>
                        )}
                        {!loginErrors.emailError &&
                            !loginErrors.emailFormatErr &&
                            invalidEmail && (
                                <p className="form-error">{invalidEmail}</p>
                            )}
                    </div>
                    <div >
                        <div>
                            <label>비밀번호</label>
                        </div>
                        <div className="position-relative">
                            <input
                                placeholder="비밀번호"
                                name="password"
                                value={loginform.password}
                                type={showPass ? 'text' : 'password'}
                                className="login-input"
                                onChange={(e) => {
                                    handleChange(e);
                                }}
                                autoComplete="off"

                            />
                            {loginErrors.passError && (
                                <p className="form-error">
                                    {loginErrors.passError}
                                </p>
                            )}
                            {!loginErrors.passError && incorrectPass && (
                                <p className="form-error">{incorrectPass}</p>
                            )}
                            <button className="showPasswordBtn" onClick={showPasswordBtn}><img src={showPass ? "/assets/img/img/closeeye.svg" : "/assets/img/img/eyeBtn.svg"} /></button>
                        </div>
                    </div>

                    <div className="d-flex align-items-center footerBtnRow">
                        <div className="">
                            <label className="checkboxContainer"><span>이메일 저장</span>
                                <input
                                    type="checkbox"
                                    name="saveEmail"
                                    value="0"
                                    onChange={(e) => setSaveEmail(e.target.checked)}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </div>

                        <div className="LofinFooterBtn">
                            <button>회원가입</button>
                            <button>비밀번호 찾기</button>
                        </div>
                    </div>

                    <div className="loginBtnRow">
                        <button className={!isBtnSave ? "loginunableBtn" : "loginDisableBtn"} disabled={isBtnSave} onClick={Login}>로그인</button>
                        {/* <button className="loginDisableBtn">로그인</button>
                        <button className="loginunableBtn">로그인</button> */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
