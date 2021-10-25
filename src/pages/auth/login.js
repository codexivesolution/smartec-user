import React, { useState } from 'react'

const Login = () => {

    const LoginformData = {
        userName: "",
        userPassword: "",
        acceptTerm:"",
    }

    const LoginformDataError = {
        userName: "",
        userPassword: "",
        acceptTerm:"",
    }

    const [loginform, setloginform] = useState(LoginformData);
    const [loginformError, setloginformError] = useState(LoginformDataError);

    const [showPass, setShowPass] = useState(false);
    const [isSubmited, setIsSubmited] = useState(false);


    const handleChange = (e) => {
        setloginform({
            ...loginform,
            [e.target.name]: e.target.value,
        });
    };

    const showPasswordBtn = () =>{
        setShowPass(!showPass)
    }

    const validateForm = () => {
        let errors = {
            userNameError: "",
            userPasswordError: "",
            acceptTermError:"",
        };

        if(!loginform.userName){
            errors.userNameError = "존재하지 않는 이메일입니다."
        }

        if(!loginform.userPassword){
            errors.userPasswordError = "비밀번호가 일치하지 않습니다."
        }
    }

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
                            name="userName"
                            value={loginform.userName}
                            type="text"
                            className="login-input"
                            onChange={(e) => {
                                handleChange(e);
                            }}
                            autoComplete="off"
                        />
                    </div>
                    <div >
                        <div>
                            <label>비밀번호</label>
                        </div>
                        <div className="position-relative">
                            <input
                                placeholder="비밀번호"
                                name="userPassword"
                                value={loginform.userPassword}
                                type={showPass ? 'text' : 'password'}
                                className="login-input"
                                onChange={(e) => {
                                    handleChange(e);
                                }}
                                autoComplete="off"

                            />
                            <button className="showPasswordBtn" onClick={showPasswordBtn}><img src={showPass ? "/assets/img/img/closeeye.svg" : "/assets/img/img/eyeBtn.svg"} /></button>
                        </div>
                    </div>

                    <div className="d-flex align-items-center footerBtnRow">
                        <div className="">
                            <label class="checkboxContainer"><span>이메일 저장</span>
                                <input 
                                type="checkbox" 
                                name="acceptTerm"
                                value={loginform.acceptTerm}    
                                />
                                <span class="checkmark"></span>
                            </label>
                        </div>

                        <div className="LofinFooterBtn">
                            <button>회원가입</button>
                            <button>비밀번호 찾기</button>
                        </div>
                    </div>

                    <div className="loginBtnRow">
                    <button className="loginDisableBtn">로그인</button>
                        {/* <button className="loginDisableBtn">로그인</button>
                        <button className="loginunableBtn">로그인</button> */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
