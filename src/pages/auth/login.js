import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import STORAGEKEY from '../../config/APP/app.config';
import { ApiPost } from '../../helper/API/ApiData';
import AuthStorage from '../../helper/AuthStorage';
import { changeLoginState } from '../../redux/actions/loginAction'

const Login = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { t } = useTranslation();
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
            login_Err.emailFormatErr = t("logIn.invalidEmail")
            flag = true
        }

        if (!loginform.email) {
            login_Err.emailError = t("logIn.this_is_required_information")
            flag = true
        }

        if (loginform.password === "") {
            login_Err.passError = t("logIn.incorrect_password")
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
                dispatch(changeLoginState(true));
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
                router.push("/home/homepage");
            })
            .catch((error) => {
                if (error === "Wrong Email") {
                    setIncorrectPass("");
                    setInvalidEmail(t("logIn.this_is_required_information"));
                }
                if (error === "Wrong Password") {
                    setInvalidEmail("");
                    setIncorrectPass(t("logIn.incorrect_password"));
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
                    <h4>{t("logIn.log_In")}</h4>
                </div>
                <div className="LoginFullForm">
                    <div>
                        <div>
                            <label>{t("logIn.email")}</label>
                        </div>
                        <input
                            placeholder={`${t("logIn.email_Placeholder")}`}
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
                            <label>{t("logIn.password")}</label>
                        </div>
                        <div className="position-relative">
                            <input
                                placeholder={t("logIn.Password_Placeholder")}
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
                            <label className="checkboxContainer"><span>{t("logIn.save_email")}</span>
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
                            <button>{t("logIn.sign_up")}</button>
                            <button>{t("logIn.find_password")}</button>
                        </div>
                    </div>

                    <div className="loginBtnRow">
                        <button className={!isBtnSave ? "loginunableBtn" : "loginDisableBtn"} disabled={isBtnSave} onClick={Login}>{t("logIn.log_In")}</button>
                        {/* <button className="loginDisableBtn">로그인</button>
                        <button className="loginunableBtn">로그인</button> */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
