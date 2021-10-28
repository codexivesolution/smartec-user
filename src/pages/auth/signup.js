import React from 'react'

const Signup = () => {
    return (
        <div>
            <div className="signUpForm">
                <div className="formTitle">
                    <h4>가입하기</h4>
                    <h4>모든 항목은 필수 입력 사항입니다.</h4>
                </div>
                <div className="signUpFullForm">
                    <div className="double-row">
                        <div className="first-box">

                            <div className="input-form-box">
                                <div className="label-row">
                                    <label>성</label>
                                </div>
                                <div className="">
                                    <input
                                        placeholder="성을 입력하세요."
                                        name="last_name"
                                        value=""
                                        type="text"
                                        className="custom-input"
                                        // onChange={(e) => {
                                        //     handleChange(e);
                                        // }}
                                        autoComplete="off"
                                    />
                                </div>
                            </div>

                            <div className="input-form-box">
                                <div className="label-row">
                                    <label>이름</label>
                                </div>
                                <div className="">
                                    <input
                                        placeholder="이름을 입력하세요."
                                        name="first_name"
                                        value=""
                                        type="text"
                                        className="custom-input"
                                        // onChange={(e) => {
                                        //     handleChange(e);
                                        // }}
                                        autoComplete="off"
                                    />
                                </div>
                            </div>



                            <div className="input-form-box">
                                <div className="label-row">
                                    <label>소속</label>
                                </div>
                                <div className="">
                                    <input
                                        placeholder="소속을 입력하세요."
                                        name="organization"
                                        value=""
                                        type="text"
                                        className="custom-input"
                                        // onChange={(e) => {
                                        //     handleChange(e);
                                        // }}
                                        autoComplete="off"
                                    />
                                </div>
                            </div>


                            <div className="input-form-box">
                                <div className="label-row">
                                    <label>국가</label>
                                </div>
                                <div className="">
                                    <input
                                        placeholder="국가를 선택하세요."
                                        name="country"
                                        value=""
                                        type="text"
                                        className="custom-input"
                                        // onChange={(e) => {
                                        //     handleChange(e);
                                        // }}
                                        autoComplete="off"
                                    />
                                </div>
                            </div>




                        </div>



                        {/* Second Box */}
                        <div className="second-box">
                            <div className="input-form-box">
                                <div className="label-row">
                                    <label>이메일 주소</label>
                                </div>
                                <div className="">
                                    <input
                                        placeholder="국가를 선택하세요."
                                        name="email"
                                        value=""
                                        type="text"
                                        className="custom-input"
                                        // onChange={(e) => {
                                        //     handleChange(e);
                                        // }}
                                        autoComplete="off"
                                    />
                                </div>
                            </div>


                            <div className="input-form-box">
                                <div className="label-row">
                                    <label>비밀번호</label>
                                </div>
                                <div className="">
                                    <input
                                        placeholder="비밀번호를 입력하세요."
                                        name="password"
                                        value=""
                                        type="text"
                                        className="custom-input"
                                        // onChange={(e) => {
                                        //     handleChange(e);
                                        // }}
                                        autoComplete="off"
                                    />
                                </div>
                            </div>


                            <div className="input-form-box">
                                <div className="label-row">
                                    <label>비밀번호 확인</label>
                                </div>
                                <div className="">
                                    <input
                                        placeholder="비밀번호를 한 번 더 입력하세요."
                                        name="password_confirmation"
                                        value=""
                                        type="text"
                                        className="custom-input"
                                        // onChange={(e) => {
                                        //     handleChange(e);
                                        // }}
                                        autoComplete="off"
                                    />
                                </div>
                            </div>


                            <div className="input-form-box">
                                <div className="label-row">
                                    <label className="checkboxContainer"><span>Smatec의 이용 약관을 읽었으며, 내용에 동의합니다.</span>
                                        <input
                                            type="checkbox"
                                            name="term_and_condition"
                                            value="0"
                                            // onChange={(e) => setSaveEmail(e.target.checked)}
                                        />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div className="">
                                    <button
                                        className="signup-btn"
                                    >
                                        가입하기
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
