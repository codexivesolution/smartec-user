import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import Select from "react-select";
import { ApiGetNoAuth, ApiPostNoAuth } from '../../helper/API/ApiData';

const Signup = () => {

    const router = useRouter();
    const email = router.query['email']?.toString();
    const verifyflag = router.query['verify']?.toString();
    const signup = {
        last_name: "",
        first_name: "",
        organization: "",
        country: "",
        email: "",
        password: "",
        confirmPassword: "",
        is_email_verified: false,
        agreeTerms: false
    }

    const signupError = {
        lastNameError: "",
        firstNameError: "",
        organizationError: "",
        countryError: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError: "",
    };
    const [SignupForm, setSignup] = useState(signup);
    const [SignupError, setSignupError] = useState(signupError);
    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setConfirmShowPass] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [nationality, setNationality] = useState([]);
    const { t } = useTranslation();

    const customStyles = {
        option: (provided, state) => ({
            ...provided,

            color: state.isSelected ? '#ffffff' : '#979797',
            padding: 10,
        }),

    }


    const showPasswordBtn = () => {
        setShowPass(!showPass)
    }

    const showConfirmPasswordBtn = () => {
        setConfirmShowPass(!showConfirmPass)
    }

    useEffect(() => {
        if (SignupForm.first_name === "" || SignupForm.last_name === "" || SignupForm.organization === "" || SignupForm.country === "" || SignupForm.email === ""
            || SignupForm.password === "" || SignupForm.confirmPassword === "" || SignupForm.agreeTerms === false
        ) {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }

    }, [SignupForm])

    //Country Data
    const getCountryData = () => {

        ApiGetNoAuth("general/country",)
            .then((res) => {
                setNationality(
                    res.data.map((x) => {
                        return {
                            value: x.id,
                            label: x.name,
                        };
                    })
                );
            })
            .catch((error) => {
                console.log(error);
            });
    };


    useEffect(() => {
        const email = router.query['email']?.toString();
        const verifyflag = router.query['verify']?.toString();
        debugger;
        // if (email) {
        setSignup({
            ...SignupForm,
            email: email ? email : '',
            is_email_verified: verifyflag == 'true' ? true : false
        });
        // }
        // if (verifyflag == 'true') {
        //     setSignup({ ...SignupForm, is_email_verified: true });
        // }
        getCountryData();
    }, []);


    const validateForm = () => {
        let flag = true

        if (!SignupForm.first_name) {
            SignupError.firstNameError = `${t("SignUp.This_is_required_information")}`;
            flag = false
        }

        if (!SignupForm.last_name) {
            SignupError.lastNameError = `${t("SignUp.This_is_required_information")}`;
            flag = false
        }

        if (!SignupForm.organization) {
            SignupError.organizationError = `${t("SignUp.This_is_required_information")}`;
            flag = false
        }

        if (!SignupForm.country) {
            SignupError.countryError = `${t("SignUp.This_is_required_information")}`;
            flag = false
        }

        if (!SignupForm.email) {
            SignupError.emailError = `${t("SignUp.This_is_required_information")}`;
            flag = false
        }

        const validEmail = new RegExp(
            "^[a-z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
        );

        if (!validEmail.test(SignupForm.email)) {
            SignupError.emailError = `${t("logIn.invalidEmail")}`;
            flag = false
        }


        if (!SignupForm.password) {
            SignupError.passwordError = `${t("SignUp.This_is_required_information")}`;
            flag = false
        }

        if (SignupForm.password.length < 8 || SignupForm.password.length > 16) {
            SignupError.passwordError = `${t("SignUp.Password_error")}`;
            flag = false
        }
        const validPassword = new RegExp(
            "^(?=.*[a-z])(?=.*[0-9])(?=.{8,16})"
        );

        if (!validPassword.test(SignupForm.password)) {
            SignupError.passwordError = `${t("SignUp.Password_error")}`;
            flag = false
        }

        if (!SignupForm.confirmPassword) {
            SignupError.confirmPasswordError = `${t("SignUp.This_is_required_information")}`;
            flag = false
        }

        if (SignupForm.password !== SignupForm.confirmPassword) {
            SignupError.confirmPasswordError = `${t("logIn.Password_Does_not_match")}`;
            flag = false
        }

        if (!SignupForm.agreeTerms) {
            SignupError.agreeTerms = `${t("SignUp.This_is_required_information")}`;
            flag = false
        }

        setSignupError(SignupError);
        return flag;
    };

    const handleChange = (e, type) => {
        if (type === "select") {
            setSignup({ ...SignupForm, country: e.value });
        } else {
            if (e.target.name === "agreeTerms" && type === "") {
                setSignup({ ...SignupForm, [e.target.name]: e.target.checked });
            } else {
                setSignup({ ...SignupForm, [e.target.name]: e.target.value });
            }
        }
    };

    const SignUp = () => {
        if (!validateForm()) {
            return;
        }
        ApiPostNoAuth("user/auth/signup", {
            first_name: SignupForm.first_name,
            last_name: SignupForm.last_name,
            organization: SignupForm.organization,
            country: SignupForm.country.toString(),
            email: SignupForm.email,
            password: SignupForm.password,
            is_email_verified: SignupForm.is_email_verified,
        })
            .then((res) => {
                router.push("/auth/login");
            })
            .catch((error) => {

            });
    }

    return (
        <div>
            <div className="signUpForm">
                <div className="formTitle">
                    <h4>{t("SignUp.Sign_up")}</h4>
                    <h4>{t("SignUp.All_fields_are_required")}</h4>
                </div>
                <div className="signUpFullForm">
                    <div className="double-row">
                        <div className="first-box">

                            <div className="input-form-box">
                                <div className="label-row">
                                    <label>{t("SignUp.last_name")}</label>
                                </div>
                                <div className="">
                                    <input
                                        placeholder={t("SignUp.last_name_placeholder")}
                                        name="last_name"
                                        value={SignupForm.last_name}
                                        type="text"
                                        className="custom-input"
                                        onChange={(e) => {
                                            handleChange(e, "");
                                        }}
                                        autoComplete="off"
                                    />
                                </div>
                                {SignupError.lastNameError && (
                                    <p className="form-error">
                                        {SignupError.lastNameError}
                                    </p>
                                )}
                            </div>

                            <div className="input-form-box">
                                <div className="label-row">
                                    <label>{t("SignUp.First_Name")}</label>
                                </div>
                                <div className="">
                                    <input
                                        placeholder={t("SignUp.Enter_First_Name")}
                                        name="first_name"
                                        value={SignupForm.first_name}
                                        type="text"
                                        className="custom-input"
                                        onChange={(e) => {
                                            handleChange(e, "");
                                        }}
                                        autoComplete="off"
                                    />
                                </div>
                                {SignupError.firstNameError && (
                                    <p className="form-error">
                                        {SignupError.firstNameError}
                                    </p>
                                )}
                            </div>



                            <div className="input-form-box">
                                <div className="label-row">
                                    <label>{t("SignUp.Organization")}</label>
                                </div>
                                <div className="">
                                    <input
                                        placeholder={t("SignUp.Enter_the_name_of_organization")}
                                        name="organization"
                                        value={SignupForm.organization}
                                        type="text"
                                        className="custom-input"
                                        onChange={(e) => {
                                            handleChange(e, "");
                                        }}
                                        autoComplete="off"
                                    />
                                </div>
                                {SignupError.organizationError && (
                                    <p className="form-error">
                                        {SignupError.organizationError}
                                    </p>
                                )}
                            </div>


                            <div className="input-form-box">
                                <div className="label-row">
                                    <label>{t("SignUp.Country")}</label>
                                </div>
                                <div className="">
                                    {/* <input
                                        placeholder={t("SignUp.Select_your_country_of_origin")}
                                        name="country"
                                        value={SignupForm.country}
                                        type="text"
                                        className="custom-input"
                                        onChange={(e) => {
                                            handleChange(e, "select");
                                        }}
                                        autoComplete="off"
                                    /> */}

                                    <Select
                                        className="custom-input"
                                        options={nationality}
                                        name="country"
                                        placeholder={t("SignUp.Select_your_country_of_origin")}
                                        onChange={(e) =>
                                            handleChange(e, "select")
                                        }
                                        styles={customStyles}
                                        theme={(theme) => ({
                                            ...theme,
                                            borderRadius: 0,
                                            colors: {
                                                ...theme.colors,
                                                primary25: "#d9eff9",
                                                primary: "#42B6E6 ",
                                                fontsize: "15px",
                                            },
                                        })}
                                    />
                                </div>
                                {SignupError.countryError && (
                                    <p className="form-error">
                                        {SignupError.countryError}
                                    </p>
                                )}
                            </div>




                        </div>



                        {/* Second Box */}
                        <div className="second-box">
                            <div className="input-form-box">
                                <div className="label-row">
                                    <label>{t("SignUp.Email_Address")}</label>
                                </div>
                                <div className="">
                                    <input
                                        placeholder={t("SignUp.Email_Address")}
                                        name="email"
                                        value={SignupForm.email}
                                        type="text"
                                        className="custom-input"
                                        onChange={(e) => {
                                            handleChange(e, "");
                                        }}
                                        disabled
                                        autoComplete="off"
                                    />
                                </div>
                                {SignupError.emailError && (
                                    <p className="form-error">
                                        {SignupError.emailError}
                                    </p>
                                )}
                            </div>


                            <div className="input-form-box">
                                <div>
                                    <label className="label-row">{t("logIn.password")}</label>
                                </div>
                                <div className="position-relative">
                                    <input
                                        placeholder={t("logIn.Password_Placeholder")}
                                        name="password"
                                        value={SignupForm.password}
                                        type={showPass ? 'text' : 'password'}
                                        className="custom-input"
                                        onChange={(e) => {
                                            handleChange(e, "");
                                        }}
                                        autoComplete="off"

                                    />
                                    {SignupError.passwordError && (
                                        <p className="form-error">
                                            {SignupError.passwordError}
                                        </p>
                                    )}
                                    <button className="showPasswordBtn" onClick={showPasswordBtn}><img src={showPass ? "/assets/img/img/closeeye.svg" : "/assets/img/img/eyeBtn.svg"} /></button>
                                </div>
                            </div>
                            <div className="input-form-box">
                                <div>
                                    <label className="label-row">{t("logIn.confirm_password")}</label>
                                </div>
                                <div className="position-relative">
                                    <input
                                        placeholder={t("logIn.confirm_Password_Placeholder")}
                                        name="confirmPassword"
                                        value={SignupForm.confirmPassword}
                                        type={showConfirmPass ? 'text' : 'password'}
                                        className="custom-input"
                                        onChange={(e) => {
                                            handleChange(e, "");
                                        }}
                                        autoComplete="off"

                                    />
                                    {SignupError.confirmPasswordError && (
                                        <p className="form-error">
                                            {SignupError.confirmPasswordError}
                                        </p>
                                    )}
                                    <button className="showPasswordBtn" onClick={showConfirmPasswordBtn}><img src={showConfirmPass ? "/assets/img/img/closeeye.svg" : "/assets/img/img/eyeBtn.svg"} /></button>
                                </div>
                            </div>
                            <div className="input-form-box">
                                <div className="label-row">
                                    <label className="checkboxContainer"><span>{t("SignUp.agree_terms")}</span>
                                        <input
                                            type="checkbox"
                                            name="agreeTerms"
                                            value="0"
                                            onChange={(e) => handleChange(e, "")}
                                        />
                                        <span className="checkmark"></span>
                                    </label>

                                    {SignupError.agreeTerms && (
                                        <p className="form-error">
                                            {SignupError.agreeTerms}
                                        </p>
                                    )}
                                </div>
                                <div className="">
                                    <button
                                        className={!isDisabled ? "signup-unable-btn" : "signup-Disable-btn"} disabled={isDisabled} onClick={SignUp}
                                    >
                                        {t("SignUp.Sign_up")}
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
