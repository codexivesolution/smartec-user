import React from 'react';
import Image from 'next/Image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer>
            <div className="footer-area grey-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-wrapper mb-30 d-flex align-items-center">
                                <div className="footer-logo">
                                    <a href="/">
                                        <Image src={'/assets/img/img/logo.svg'} height="46.04" width="185.44" alt="flag" />
                                    </a>
                                </div>
                                <div className="FooterLink">
                                    <Link href="/" as="/"><a>{t("about_us")}</a></Link>
                                    <Link href="/" as="/"><a>{t("research_and_development")}</a></Link>
                                    <Link href="/" as="/"><a>{t("data_science")}</a></Link>
                                    <Link href="/" as="/"><a>{t("smart_fatty_liver_care")}</a></Link>
                                    <Link href="/" as="/"><a>{t("investment_information")}</a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="FooterInfo">
                                <p>{t("CEO")}</p>
                                <h5>대표명</h5>
                            </div>
                            <div className="FooterInfo">
                                <p>{t("Business_registeration_number")}</p>
                                <a href="tel:115-88-02273">115-88-02273</a>
                            </div>
                            <div className="FooterInfo">
                                <p>{t("Company_address")}</p>
                                <a href="">서울특별시 관악구 관악로 1 서울대학교 32-1동 2층</a>
                            </div>
                            <div className="FooterInfo">
                                <p>{t("Customer_service")}</p>
                                <a href="mailto:smatech2022@gmail.com">smatech2022@gmail.com</a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;