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
                <h1>{t("DataScience.Data_Science")}</h1>
                {/* <img src="/assets/img/img/datascienceBg.jpg"/> */}
            </div>
            <div className="sectionSelectGroupMain">
                <div className="sectionSelectGroup">
                    <div className="sectionSelectGroupContent">
                        <div className="sectionSelectTitle">
                            <h4>{t("DataScience.Select_a_method_of_study")}</h4>
                            <p>{t("DataScience.Once_you_make_a_selection")}</p>
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
                                <div onClick={goDataassociation} className="sectionGroupClick">
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