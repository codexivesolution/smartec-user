import React, { useState } from 'react'

function datagroup() {

    const [viewInputRow, setViewInputRow] = useState(true);
    const [selectFileInput, setSelectFileInput] = useState(false);

    // const [viewInputGroupRow, setViewInputGroupRow] = useState(true);
    // const [viewInputAdjustmentVariable, setViewInputAdjustmentVariable] = useState(true);



    // === Start Study Design ===

    const [studyDesign, setStudyDesign] = useState([
        {
            populatioBased: "",
            studySection: "",
        },
    ]);

    const showInputRow = () => {
        setViewInputRow(!viewInputRow)
    }

    const handleAddStudyDesignFields = () => {
        const values = [...studyDesign];
        values.push({
            populatioBased: "",
            studySection: "",
        });
        setStudyDesign(values);
    };


    const handleRemoveStudyDesignFields = (id, index) => {
        if (studyDesign.length > 1) {
            const values = [...studyDesign];
            values.splice(index, 1);
            setStudyDesign(values);
        }
    }

    

    // === End Study Design ===

    // === Start Group Variable ===


    // const [groupVariable, setGroupVariable] = useState([
    //     {
    //         Treatment: "",
    //         yes: "",
    //     },
    // ]);

    // const showInputGroupRow = () => {
    //     setViewInputGroupRow(!viewInputGroupRow)
    // }

    // const handleAddGroupVariableFields = () => {
    //     const values = [...groupVariable];
    //     values.push({
    //         Treatment: "",
    //         yes: "",
    //     });
    //     setGroupVariable(values);
    // };

    // const handleRemoveGroupVariableFields = (id, index) => {
    //     if (groupVariable.length > 1) {
    //         const values = [...groupVariable];
    //         values.splice(index, 1);
    //         setGroupVariable(values);
    //     }
    // }

    // === End Group Variable ===

    // === Start Adjustment Variable ===

    // const [AdjustmentVariable, setAdjustmentVariable] = useState([
    //     {
    //         age: "",
    //         score: "",
    //     },
    // ]);

    // const showInputAdjustmentVariableRow = () => {
    //     setViewInputAdjustmentVariable(!viewInputAdjustmentVariable)
    // }

    // const handleAddAdjustmentVariableFields = () => {
    //     const values = [...AdjustmentVariable];
    //     values.push({
    //         age: "",
    //         score: "",
    //     });
    //     setAdjustmentVariable(values);
    // };

    // const handleRemoveAdjustmentVariableFields = (id, index) => {
    //     if (AdjustmentVariable.length > 1) {
    //         const values = [...AdjustmentVariable];
    //         values.splice(index, 1);
    //         setAdjustmentVariable(values);
    //     }
    // }

    // === End Adjustment Variable ===

    const TermsCondition = [
        {
            Terms: "공란 또는 빈칸으로 인하여 그룹 변수, 보정 변수, 결과 변수, 하위그룹 변수에 대한 정보가 없을 시 일괄 제외 (Exclusion) 후 분석됩니다.",
        },
        {
            Terms: "아래 “제출하기”를 클릭하시면 2-3일 내로 분석 진행 여부 및 결제 안내 이메일이 전송됩니다.",
        },
        {
            Terms: "Table은 Word (doc), Figure는 Powerpoint (ppt) 형식으로 제공되며 Powerpoint에서 이미지 파일로 저장할 수 있습니다.",
        },
        {
            Terms: "분석 결과에 대한 Methods-Statistical analysis 파트도 별도의 Word (doc) 파일로 제공됩니다.",
        },
        {
            Terms: "파일변수명과 입력하는 변수명을 동일한 변수값으로 입력해주시기 바랍니다.",
        },

    ]

    const selectFileBtn = (id) => {
        setSelectFileInput(true)
        document.getElementById(id)?.click();
    }

    return (
        <div className="dataGroupPage">
            <div className="dataGroupPageTitle">
                <h1>단면연구</h1>
                <p>(Group-to-group comparison)</p>
            </div>

            <div className="dataGroupPageContent">
                <div className="dataGroupRow">
                    <div onClick={showInputRow} className="cursor-pointor">
                        <div className="dataGroupTitleArrow" >
                            <h1>연구디자인 (Study design)</h1>
                            <img src="/assets/img/img/dropdownArrow.svg" alt="" />
                        </div>
                        <p>예) A population-based cross-sectional study</p>
                    </div>
                    {viewInputRow &&
                        <div className="dataGroupInputRowMain">
                            {
                                studyDesign.map((input, index) => (
                                    <div className="dataGroupInputRow">
                                        <input className="dataGroupInputFirst" value={input.populatioBased} name="populatioBased" type="" placeholder="ex ) A population-based cross" />
                                        <input className="dataGroupInputSecond" value={input.studySection} name="studySection" type="" placeholder="ex) sectional study" />
                                        {
                                            studyDesign.length > 0 && (
                                                <button className="addBtn" onClick={() => { handleAddStudyDesignFields(); }}>추가</button>
                                            )}

                                        {studyDesign.length - 1 === index && (
                                            <button className="delBtn" onClick={() => { handleRemoveStudyDesignFields(input.id, index); }}>추가</button>
                                        )}
                                    </div>
                                ))
                            }
                        </div>
                    }
                </div>


                {/* <div className="dataGroupRow">
                    <div onClick={showInputGroupRow} className="cursor-pointor">
                        <div className="dataGroupTitleArrow" >
                            <h1>그룹 변수 (Group variable)</h1>
                            <img src="/assets/img/img/dropdownArrow.svg" alt="" />
                        </div>
                        <p>예) Treatment (yes, no), physical activity (low, intermediate, high), etc.</p>
                    </div>
                    {viewInputGroupRow &&
                        <div className="dataGroupInputRowMain">
                            {
                                groupVariable.map((input, index) => (
                                    <div className="dataGroupInputRow">
                                        <input className="dataGroupInputFirst" value={input.Treatment} name="Treatment" type="" placeholder="ex ) Treatment" />
                                        <input className="dataGroupInputSecond" value={input.yes} name="yes" type="" placeholder="ex) yes" />
                                        {
                                            groupVariable.length > 0 && (
                                                <button className="addBtn" onClick={() => { handleAddGroupVariableFields(); }}>추가</button>
                                            )}

                                        {groupVariable.length - 1 === index && (
                                            <button className="delBtn" onClick={() => { handleRemoveGroupVariableFields(input.id, index); }}>추가</button>
                                        )}
                                    </div>
                                ))
                            }
                        </div>
                    }
                </div>


                <div className="dataGroupRow">
                    <div onClick={showInputAdjustmentVariableRow} className="cursor-pointor">
                        <div className="dataGroupTitleArrow" >
                            <h1>보정 변수 (Adjustment variable)</h1>
                            <img src="/assets/img/img/dropdownArrow.svg" alt="" />
                        </div>
                        <p>예) Age, sex, ECOG score, fasting serum glucose, etc.</p>
                    </div>
                    {viewInputAdjustmentVariable &&
                        <div className="dataGroupInputRowMain">
                            {
                                AdjustmentVariable.map((input, index) => (
                                    <div className="dataGroupInputRow">
                                        <input className="dataGroupInputFirst" value={input.age} name="age" type="" placeholder="ex ) age" />
                                        <input className="dataGroupInputSecond" value={input.score} name="score" type="" placeholder="ex) 00" />
                                        {
                                            AdjustmentVariable.length > 0 && (
                                                <button className="addBtn" onClick={() => { handleAddAdjustmentVariableFields(); }}>추가</button>
                                            )}

                                        {AdjustmentVariable.length - 1 === index && (
                                            <button className="delBtn" onClick={() => { handleRemoveAdjustmentVariableFields(input.id, index); }}>추가</button>
                                        )}
                                    </div>
                                ))
                            }
                        </div>
                    }
                </div>


                <div className="dataGroupRow">
                    <div onClick={showInputAdjustmentVariableRow} className="cursor-pointor">
                        <div className="dataGroupTitleArrow" >
                            <h1>결과 변수 (Outcome variable)</h1>
                            <img src="/assets/img/img/dropdownArrow.svg" alt="" />
                        </div>
                        <p>예) Metabolic risk factors (triglyceride, waist circumference), etc.</p>
                    </div>
                    {viewInputAdjustmentVariable &&
                        <div className="dataGroupInputRowMain">
                            {
                                AdjustmentVariable.map((input, index) => (
                                    <div className="dataGroupInputRow">
                                        <input className="dataGroupInputFirst" value={input.age} name="age" type="" placeholder="ex ) Treatment" />
                                        <input className="dataGroupInputSecond" value={input.score} name="score" type="" placeholder="ex) yes" />
                                        {
                                            AdjustmentVariable.length > 0 && (
                                                <button className="addBtn" onClick={() => { handleAddAdjustmentVariableFields(); }}>추가</button>
                                            )}

                                        {AdjustmentVariable.length - 1 === index && (
                                            <button className="delBtn" onClick={() => { handleRemoveAdjustmentVariableFields(input.id, index); }}>추가</button>
                                        )}
                                    </div>
                                ))
                            }
                        </div>
                    }
                </div> */}





            </div>


            <div className="SelectFileSection">
                <div className="SelectFileContainer">
                    {TermsCondition.map((items, index) =>
                        <div className="SelectFileRow">
                            <h1>{index + 1}.</h1>
                            <div className="SelectFileTerms">
                                <p>{items.Terms}</p>
                            </div>
                        </div>
                    )}

                    <div className="selectFileInputRow">
                        <input type="file" className="selectFileInput" name="uploadFileInput" id="uploadFile" accept=".pdf, .xls, .xlsx" />
                        {!selectFileInput && <p>데이터 파일을 업로드 해주세요.</p>}
                        <h6>허용되지 않은 확장자의 파일입니다.</h6>
                        <button onClick={() => selectFileBtn("uploadFile")}>파일 제거</button>
                    </div>

                </div>
            </div>


            <div className="submitBtnRow">
                <button>제출하기 (Submit)</button>
            </div>
        </div>
    )
}

export default datagroup
