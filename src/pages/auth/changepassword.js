import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { ApiPatchNoAuth } from '../../helper/API/ApiData';
import ChnagePasswordSuccessfully from '../../modal/chnagePasswordSuccessfully';

const ChangePassword = () => {
    const router = useRouter();
    const { t } = useTranslation();
    const email = router.query['email']?.toString();
    const chnagePassword = {
        email: "",
        password: "",
        confirmPassword: "",
    }

    const change_password_error = {
        passError: "",
        confirmPassError: "",
    };

    const [chnagePasswordForm, setChnagePassword] = useState(chnagePassword);
    const [changePasswordError, setChangePasswordError] = useState(change_password_error);
    const [isDisabled, setIsDisabled] = useState(true);
    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setConfirmShowPass] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (email) {
            setChnagePassword({
                ...chnagePasswordForm,
                email: email,
            });
        }
    }, [])

    useEffect(() => {
        if (chnagePasswordForm.password === "" || chnagePasswordForm.confirmPassword === "") {
            setIsDisabled(true)
        } else {
            if (changePasswordError.passError != "" || changePasswordError.confirmPassError != "") {
                setIsDisabled(true)
            } else {
                setIsDisabled(false)
            }
        }

    }, [chnagePasswordForm, changePasswordError])

    const validateEmapty = () => {
        let flag = true

        if (chnagePasswordForm.password !== chnagePasswordForm.confirmPassword) {
            setChangePasswordError({
                ...changePasswordError,
                confirmPassError: `${t("logIn.Password_Does_not_match")}`
            })
            flag = false
        }

        return flag
    }


    const showPasswordBtn = () => {
        setShowPass(!showPass)
    }

    const showConfirmPasswordBtn = () => {
        setConfirmShowPass(!showConfirmPass)
    }

    const handleChange = (e) => {
        if (e.target.name === "verification_code") {

            const re = /^[0-9\b]+$/;

            if (!e.target.value || e.target.value === "" || re.test(e.target.value)) {
                setChnagePassword({
                    ...chnagePasswordForm,
                    [e.target.name]: e.target.value,
                });
            }

        } else {

            setChnagePassword({
                ...chnagePasswordForm,
                [e.target.name]: e.target.value,
            });
        }
    };

    const fnChnagePassword = async () => {

        if (!validateEmapty()) {
            return
        }

        try {

            ApiPatchNoAuth("user/auth/chnage-password", {
                email: chnagePasswordForm.email,
                password: chnagePasswordForm.password,
            })
                .then((res) => {

                    setShowModal(true)

                })
                .catch((error) => {

                });

        } catch (error) {
        }

    }

    const onHide = () => {
        setShowModal(false)
    }

    const goToLogin = () => {
        router.push("/auth/login");
    }

    return (
        <>
            <div>
                <div className="loginForm">
                    <div className="formTitle">
                        <h4>{t("logIn.find_password")}</h4>
                    </div>
                    <div className="FindPasswordFullForm ">
                        {/* <div >
                            <div>
                                <label>{t("logIn.password")}</label>
                            </div>
                            <div className="position-relative">
                                <input
                                    placeholder={`${t("logIn.Password_Placeholder")}`}
                                    name="password"
                                    value={chnagePasswordForm.password}
                                    type={showPass ? 'text' : 'password'}
                                    className="find-password-email-input"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    autoComplete="off"
                                />
                            </div>
                            {changePasswordError.passError && (
                                <p className="form-error">
                                    {changePasswordError.passError}
                                </p>
                            )}
                            <button className="showPasswordBtn" onClick={showPasswordBtn}><img src={showPass ? "/assets/img/img/closeeye.svg" : "/assets/img/img/eyeBtn.svg"} /></button>
                        </div> */}

                        <div >
                            <div>
                                <label>{t("logIn.password")}</label>
                            </div>
                            <div className="position-relative">
                                <input
                                    placeholder={t("logIn.Password_Placeholder")}
                                    name="password"
                                    value={chnagePasswordForm.password}
                                    type={showConfirmPass ? 'text' : 'password'}
                                    className="find-password-email-input"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    autoComplete="off"

                                />
                                {changePasswordError.passError && (
                                    <p className="form-error">
                                        {changePasswordError.passError}
                                    </p>
                                )}
                                <button className="showPasswordBtn" onClick={showPasswordBtn}><img src={showPass ? "/assets/img/img/closeeye.svg" : "/assets/img/img/eyeBtn.svg"} /></button>
                            </div>
                        </div>
                        <div >
                            <div>
                                <label>{t("logIn.confirm_password")}</label>
                            </div>
                            <div className="position-relative">
                                <input
                                    placeholder={t("logIn.confirm_Password_Placeholder")}
                                    name="confirmPassword"
                                    value={chnagePasswordForm.confirmPassword}
                                    type={showConfirmPass ? 'text' : 'password'}
                                    className="find-password-email-input mb-0"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    autoComplete="off"

                                />
                                {changePasswordError.confirmPassError && (
                                    <p className="form-error">
                                        {changePasswordError.confirmPassError}
                                    </p>
                                )}
                                <button className="showPasswordBtn" onClick={showConfirmPasswordBtn}><img src={showConfirmPass ? "/assets/img/img/closeeye.svg" : "/assets/img/img/eyeBtn.svg"} /></button>
                            </div>
                        </div>

                        <div className="loginBtnRow">
                            <button className={!isDisabled ? "loginunableBtn" : "loginDisableBtn"} disabled={isDisabled} onClick={fnChnagePassword}>{t("logIn.Confirm_Changes")}</button>
                        </div>

                    </div>
                </div>
            </div>

            {showModal && <ChnagePasswordSuccessfully onHide={onHide} show={showModal} goToLogin={goToLogin} />}
        </>
    )
}

export default ChangePassword
