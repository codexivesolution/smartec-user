import React, { Component } from 'react';
import AccordionDefault from '../Elements/Accordion/AccordionDefault';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ServiceOneMain extends Component {

    render() {

        return (
            <main>
            {/* <!-- about-area-start --> */}
            <div class="about-area pt-130 pb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 mb-30">
                            <div class="single-about">
                                <div class="about-us-img">
                                    <img src="assets/img/about/03.jpg" alt="" />
                                    <div class="about-us-2-img">
                                        <div class="about-inner-img about-2-inner">
                                            <img src="assets/img/about/04.jpg" alt="" />
                                            <div class="about-video">
                                                <a class="popup-video" href="https://www.youtube.com/watch?v=LTXD6XZXc3U"><i><FontAwesomeIcon icon={['fas', 'play']} /></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 mb-10">
                            <div class="faq-wrapper">
                                <div class="section-title mb-25">
                                    <span class="b-sm-left-1"></span>
                                    <span class="b-sm-left-2"></span>
                                    <span class="sub-t-left">who we are</span>
                                    <h1>Why Most People Choose Our Business Solutions</h1>
                                    <p>Sedut perspiciatis unde omnis iste natus error sitlupttem accusantium doloremque laudantium totam remap eriaeaque ipsa quae ab illo inventore veritatis </p>
                                </div>
                                <div class="faq-box">
                                    <AccordionDefault />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- about-area-end --> */}

            {/* <!-- services-area-start --> */}
            <div class="services-area pt-120 pb-100" style={{ backgroundImage: `url(${'assets/img/bg/bg-1.jpg'})` }}>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
                            <div class="section-title text-center ml-50 mr-50 mb-80">
                                <span class="border-left-1"></span>
                                <span>what we do</span>
                                <span class="border-right-1"></span>
                                <h1>We provide exclusive services for your busainess</h1>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div class="services-wrapper text-center">
                                <div class="services-img">
                                    <img src="assets/img/icon/icon-01.png" alt="" />
                                </div>
                                <div class="services-text">
                                    <h3>Web Development</h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>
                                    <a href="#"> <span class="services-button">read more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div class="services-wrapper text-center">
                                <div class="services-img">
                                    <img src="assets/img/icon/icon-2.png" alt="" />
                                </div>
                                <div class="services-text">
                                    <h3>Database Analysis</h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>
                                    <a href="#"> <span class="services-button">read more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div class="services-wrapper text-center">
                                <div class="services-img">
                                    <img src="assets/img/icon/icon-3.png" alt="" />
                                </div>
                                <div class="services-text">
                                    <h3>Server Security</h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>
                                    <a href="#"> <span class="services-button">read more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div class="services-wrapper text-center">
                                <div class="services-img">
                                    <img src="assets/img/icon/icon-4.png" alt="" />
                                </div>
                                <div class="services-text">
                                    <h3>UX/UI Strategy</h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>
                                    <a href="#"> <span class="services-button">read more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div class="services-wrapper text-center">
                                <div class="services-img">
                                    <img src="assets/img/icon/icon-5.png" alt="" />
                                </div>
                                <div class="services-text">
                                    <h3>Analysis For Tools</h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>
                                    <a href="#"> <span class="services-button">read more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div class="services-wrapper text-center">
                                <div class="services-img">
                                    <img src="assets/img/icon/icon-6.png" alt="" />
                                </div>
                                <div class="services-text">
                                    <h3>Marketing Strategy</h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>
                                    <a href="#"> <span class="services-button">read more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- services-area-end --> */}
            {/* <!-- contact-area-start --> */}
             <div class="contact-2-area pt-130 pb-100 theme-bg ">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-7 col-lg-7 ">
                            <div class="contact-wrapper mb-30">
                                <div class="section-title section-title-white mb-25">
                                    <span class="b-sm-left-2"></span>
                                    <span class="sub-t-left">contact us</span>
                                    <h1>Don't Hesitate To <br /> Contact Us</h1>
                                </div>
                                <form action="assets/mail.php" id="contact-form">
                                            <div class="row">
                                            <div class="col-xl-6 mb-10">
                                                <div class="form-2-box user-icon mb-10">
                                                    <input name="name" placeholder="Full Name Here" type="text" />
                                                </div>
                                            </div>
                                            <div class="col-xl-6 mb-10">
                                                <div class="form-2-box email-2-icon mb-10">
                                                    <input name="email" placeholder="Email Address" type="email" />
                                                </div>
                                            </div>
                                            <div class="col-xl-12 mb-35">
                                                <div class="form-2-box sub-icon mb-10">
                                                    <input name="subject" placeholder="Subject" type="text" />
                                                </div>
                                            </div>
                                            <div class="col-xl-12 mb-30">
                                                <div class="form-2-box message-2-icon mb-10">
                                                    <textarea name="message" cols="30" rows="10" placeholder="Message" id="message"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-xl-12">
                                                <button class="btn" type="submit"><span class="btn-texts">send message <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> <span class="btn-border"></span></button>
                                            </div>
                                        </div>
                                    <p class="form-message"></p>
                                </form>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-5">
                        <div class="map-img mb-30">
                            <img src="assets/img/bg/map.png" alt="" />
                        </div>
                    </div>
                </div>
                </div>
             </div>
            {/* <!-- contact-area-end --> */}
            </main>
        );
    }
}

export default ServiceOneMain;