import React, { Component, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/Image';
import { useTranslation } from 'react-i18next';
import { getCookie } from "../../../helper/util";
import i18n from '../../../helper/i18n';
const TopHeader = () => {

    const [selectedLang, setSelectedLang] = useState("한국어(KR)");

    useEffect(() => {
        let getLangLocal = localStorage.getItem("i18nextLng");
        let getLangCookie = getCookie("i18next");
        let getLangTag = document.documentElement.lang;

        if (
            getLangLocal === "en" ||
            getLangCookie === "en" ||
            getLangTag === "en"
        ) {
            changeLanguage("en", "English(EN)");
        } else {
            changeLanguage("ko", "한국어(KR)");
        }
    }, []);


    const changeLanguage = (lang, name) => {
        setSelectedLang(name);
        i18n.changeLanguage(lang);
    };
    return (
        <div className="header-top-area grey-bg d-none d-md-block">
            <div className="container">
                <div className="row">
                    {/* <div className="col-xl-8 col-lg-8 col-md-6 d-flex align-items-center">
                        <div className="header-info">
                            <span><i><FontAwesomeIcon prefix='far' icon={'map-marker-alt'} /></i> 15 Hamston Street, West</span>
                            <span className="header-ph"><i><FontAwesomeIcon prefix='far' icon={'phone'} /></i> 812 (345) 6789</span>
                            <span className="header-en"><i><FontAwesomeIcon prefix='far' icon={'envelope-open'} /></i> support@gmail.com</span>
                        </div>
                    </div> */}
                    <div className="col-12">
                        <div className="header-right f-right ">
                            <div className="header-lang  pos-rel f-right">
                                <div className="lang-icon">
                                    {selectedLang == "English(EN)" &&
                                        <Image src={'/assets/img/icon/flag.png'} height="20" width="30" alt='flag' />
                                    }
                                    {selectedLang == "한국어(KR)" &&
                                        <Image src={'/assets/img/icon/Korea (Republic of).svg'} height="20" width="30" alt='flag' />
                                    }

                                    {selectedLang}<i><FontAwesomeIcon prefix='fas' icon={'angle-down'} /></i>
                                </div>
                                <ul className="header-lang-list">
                                    <li><a onClick={() => {
                                        changeLanguage("en", "English(EN)");
                                    }}>English(EN)</a></li>
                                    <li><a onClick={() => {
                                        changeLanguage("ko", "한국어(KR)");
                                    }}>한국어(KR)</a></li>

                                </ul>
                            </div>
                            <div className="header-icon f-right">
                                <a href="#"><i><FontAwesomeIcon prefix='fab' icon={'facebook-f'} /></i></a>
                                <a href="#"><i><FontAwesomeIcon prefix='fab' icon={'twitter'} /></i></a>
                                <a href="#"><i><FontAwesomeIcon prefix='fab' icon={'instagram'} /></i></a>
                                <a href="#"><i><FontAwesomeIcon prefix='fab' icon={'youtube'} /></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;