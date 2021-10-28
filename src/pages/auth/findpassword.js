import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { ApiPostNoAuth } from '../../helper/API/ApiData';

const FindPassword = () => {
    const router = useRouter();
    const { t } = useTranslation();
    const findPassword = {
        email: "",
        verification_code: ""
    }

    const find_password_Err = {
        emailError: "",
        emailFormatErr: "",
        verifiationCodeError: "",
    };

    const [findPasswordErrors, setFindPasswordErrors] = useState(find_password_Err);
    const [findPasswordform, setfindPassword] = useState(findPassword);
    const [incorrectVerificationCode, setVerificationCode] = useState("");
    const [invalidEmail, setInvalidEmail] = useState("");
    const [isBtnVerify, setBtnVerify] = useState(false);
    const [isSendVerificationCode, setSendVerificationCode] = useState(false);


    const handleChange = (e) => {
        if (e.target.name === "verification_code") {

            const re = /^[0-9\b]+$/;

            if (!e.target.value || e.target.value === "" || re.test(e.target.value)) {
                setfindPassword({
                    ...findPasswordform,
                    [e.target.name]: e.target.value,
                });
            }

        } else {

            setfindPassword({
                ...findPasswordform,
                [e.target.name]: e.target.value,
            });
        }
    };


    const validateForm = () => {

        let flag = false


        const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (findPasswordform.email && !validEmail.test(findPasswordform.email)) {
            findPasswordErrors.emailFormatErr = t("logIn.invalidEmail")
            flag = true
        }

        if (!findPasswordform.email) {
            findPasswordErrors.emailError = t("logIn.this_is_required_information")
            flag = true
        }

        if (findPasswordform.verification_code === "") {
            findPasswordErrors.verifiationCodeError = t("logIn.this_is_required")
            flag = true
        }

        setFindPasswordErrors(findPasswordErrors);
        return flag;

    }

    const Login = () => {
        if (validateForm()) {
            setBtnSave(true);
            return;
        }
        ApiPostNoAuth("user/verify-verification-code", {
            email: findPasswordform.email,
            code: findPasswordform.verification_code,
        })
            .then((res) => {
                router.push("/auth/chnagepassword?email=" + findPasswordform.email);
            })
            .catch((error) => {
                if (error === "Wrong Email") {
                    setVerificationCode("");
                    setInvalidEmail(t("logIn.email_not_found"));
                }
                if (error === "Incorrect Code") {
                    setInvalidEmail("");
                    setVerificationCode(t("logIn.incorrect_verification_code"));
                }
            });
    };

    const SendVerificationCode = () => {
        ApiPostNoAuth("user/send-email-verification-code", {
            email: findPasswordform.email
        })
            .then((res) => {

            })
            .catch((error) => {
                if (error === "Wrong Email") {
                    setVerificationCode("");
                    setInvalidEmail(t("logIn.email_not_found"));
                }
            });
    }

    useEffect(() => {
        if (findPasswordform.email == "" || findPasswordform.verification_code == "") {
            setBtnVerify(true)
        } else {
            setBtnVerify(false)
        }
        if (findPasswordform.email == "") {

            setSendVerificationCode(true);

        } else {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!findPasswordform.email || findPasswordform.email === "" || re.test(findPasswordform.email)) {
                setSendVerificationCode(false);
            }

        }
    }, [findPasswordform])

    return (
        <div>
            <div className="loginForm">
                <div className="formTitle">
                    <h4>{t("logIn.find_password")}</h4>
                </div>
                <div className="FindPasswordFullForm ">
                    <div className="position-relative">
                        <div>
                            <label>{t("logIn.email")}</label>
                        </div>
                        <div className='d-flex'>
                            <input
                                placeholder={`${t("logIn.email_Placeholder")}`}
                                name="email"
                                value={findPasswordform.email}
                                type="text"
                                className={findPasswordform.email == "" ? 'find-password-email-input find-password-email-input-width' : 'find-password-email-input-dark find-password-email-input-width'}
                                onChange={(e) => {
                                    handleChange(e);
                                }}
                                autoComplete="off"
                            />
                            <div className="verificationCodeBtnRow">
                                <button className={!isSendVerificationCode ? "verificationCodeunableBtn" : "verificationCodeDisableBtn"} disabled={isSendVerificationCode} onClick={SendVerificationCode}>{t("logIn.send_verification_code")}</button>
                            </div>
                        </div>
                        {findPasswordform.emailError && (
                            <p className="form-error">
                                {findPasswordform.emailError}
                            </p>
                        )}
                        {findPasswordform.emailFormatErr && (
                            <p className="form-error">
                                {findPasswordform.emailFormatErr}
                            </p>
                        )}
                        {!findPasswordform.emailError &&
                            !findPasswordform.emailFormatErr &&
                            invalidEmail && (
                                <p className="form-error">{invalidEmail}</p>
                            )}
                    </div>
                    <div className="position-relative">
                        <div>
                            <label>{t("logIn.password")}</label>
                        </div>
                        <div>
                            <input
                                placeholder={t("logIn.enter_verification_code")}
                                name="verification_code"
                                value={findPasswordform.verification_code}
                                type='text'
                                className={findPasswordform.verification_code == "" ? 'find-password-email-input mb-0' : 'find-password-email-input-dark mb-0'}
                                onChange={(e) => {
                                    handleChange(e);
                                }}
                                autoComplete="off"

                            />
                            {findPasswordform.verifiationCodeError && (
                                <p className="form-error">
                                    {findPasswordform.verifiationCodeError}
                                </p>
                            )}
                            {!findPasswordform.verifiationCodeError && incorrectVerificationCode && (
                                <p className="form-error">{incorrectVerificationCode}</p>
                            )}
                        </div>
                    </div>

                    <div className="verifyBtnRow">
                        <button className={!isBtnVerify ? "verifyBtnunableBtn" : "verifyBtnDisableBtn"} disabled={isBtnVerify} onClick={Login}>{t("logIn.log_In")}</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FindPassword
