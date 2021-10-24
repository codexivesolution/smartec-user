import React from 'react';
import FooterBottom from './FooterBottom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/Image';

const Footer = () => {

    return (
        <footer>
            <div className="footer-area grey-bg pt-80 pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-4">
                            <div className="footer-wrapper mb-30">
                                <div className="footer-logo">
                                    <a href="/">
                                        <Image src={'/assets/img/logo/logo.png'} height="34" width="134" alt="flag" />
                                    </a>
                                </div>
                                <div className="footer-text">
                                    <p>At vero eoset accusamus et iusto odio dignissimos ducimus qui blpraesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi </p>
                                </div>
                                <div className="footer-icon">
                                    <a href="#"><i><FontAwesomeIcon prefix='fab' icon={'facebook-f'} /></i></a>
                                    <a href="#"><i><FontAwesomeIcon prefix='fab' icon={'twitter'} /></i></a>
                                    <a href="#"><i><FontAwesomeIcon prefix='fab' icon={'instagram'} /></i></a>
                                    <a href="#"><i><FontAwesomeIcon prefix='fab' icon={'youtube'} /></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-4">
                            <div className="footer-wrapper mb-30">
                                <h4 className="footer-title">Our Services</h4>
                                <ul className="fotter-menu">
                                    <li><a href="#">User Strategy </a></li>
                                    <li><a href="#">Product Designing </a></li>
                                    <li><a href="#">Marketing Strategy</a></li>
                                    <li><a href="#">IT Consultancy</a></li>
                                    <li><a href="#">Server Security</a></li>
                                    <li><a href="#">Product Marketing</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-4">
                            <div className="footer-wrapper mb-30">
                                <h4 className="footer-title">Quick Links</h4>
                                <ul className="fotter-menu">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Need a Consultant?</a></li>
                                    <li><a href="#">Our Services</a></li>
                                    <li><a href="#">Have Any Questions?</a></li>
                                    <li><a href="#">Meet Our Team</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="footer-wrapper mb-30">
                                <h4 className="footer-title">Recent News</h4>
                                <div className="footer-news">
                                    <ul>
                                        <li>
                                            <div className="footer-news-img">
                                                <a href="#"><img src="assets/img/footer/01.jpg" alt="" /></a>
                                            </div>
                                            <div className="footer-news-text">
                                                <h5><a href="#">Building Real Time Charts With Grap HQL & Postgres</a></h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="footer-news-img">
                                                <a href="#"><img src="assets/img/footer/02.jpg" alt="" /></a>
                                            </div>
                                            <div className="footer-news-text">
                                                <h5><a href="#">How To Build An Endless Runner Or Virtual Reality</a></h5>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6">
                            <div className="footer-wrapper mb-30">
                                <h4 className="footer-title">Contact Us</h4>
                                <div className="footer-info">
                                    <p>But I must explain to you
                                        how all this mistaken</p>
                                </div>
                                <ul className="contact-link">
                                    <li>
                                        <div className="contact-address-icon">
                                            <i className="far fa-phone"></i>
                                        </div>
                                        <div className="contact-address-text">
                                            <h4>+812  (345) 778 88</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-address-icon">
                                            <i className="far fa-envelope-open"></i>
                                        </div>
                                        <div className="contact-address-text">
                                            <h4>support@gmail.com</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-address-icon">
                                            <i className="far fa-map-marker-alt"></i>
                                        </div>
                                        <div className="contact-address-text">
                                            <h4>227 Marion Street, Columbia</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterBottom />
            </div>
        </footer>
    );
}

export default Footer;