import React from 'react'
import { useRouter } from 'next/router';

function index() {
    const router = useRouter();

    const goDataGroup = () => {
        router.push("/datascience/datagroup");
    }

    const goDataassociation = () => {
        router.push("/datascience/dataassociation");
    }

    return (
        <div className="bgImageDataScience">
            <div className="dataScienceMainTitle">
                <h1>데이터 사이언스</h1>
                {/* <img src="/assets/img/img/datascienceBg.jpg"/> */}
            </div>
            <div className="sectionSelectGroupMain">
                <div className="sectionSelectGroup">
                    <div className="sectionSelectGroupContent">
                        <div className="sectionSelectTitle">
                            <h4>연구 방식을 선택해주세요.</h4>
                            <p>클릭 시 해당 연구 페이지로 이동합니다.</p>
                        </div>
                        <div className="sectionSelectDiv">
                            <div className="GroupSection">
                                <div onClick={goDataGroup} className="sectionGroupClick">
                                    <img src="/assets/img/img/singlefile.svg" alt="" />
                                    <h1>단면연구</h1>
                                    <p>Group-to-group comparison</p>
                                </div>
                            </div>
                            <div className="GroupSection">
                                <div onClick={goDataassociation}className="sectionGroupClick">
                                    <img src="/assets/img/img/doublefile.svg" alt="" />
                                    <h1>종적연구</h1>
                                    <p>Association study</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index