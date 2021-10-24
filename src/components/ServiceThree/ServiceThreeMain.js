import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProgressBarCircle from '../Elements/Progress/ProgressCircle';

class ServiceThreeMain extends Component {

    render() {

        return (
            <main>
            {/* <!-- services-area-start --> */}
            <div class="services-area pt-120 pb-60">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
                            <div class="section-title text-center ml-50 mr-50 mb-80">
                                <span class="border-left-1"></span>
                                <span>our services</span>
                                <span class="border-right-1"></span>
                                <h1>We provide exclusive services for your busainess</h1>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-75">
                            <div class="services-2-wrapper">
                                <div class="services-img">
                                    <img src="assets/img/icon/01.png" alt="" />
                                </div>
                                <div class="services-text">
                                    <h3>Web Development</h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>
                                    <a href="#"> <span class="services-button">read more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-75">
                            <div class="services-2-wrapper">
                                <div class="services-img">
                                    <img src="assets/img/icon/02.png" alt="" />
                                </div>
                                <div class="services-text">
                                    <h3>Database Analysis</h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>
                                    <a href="#"> <span class="services-button">read more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-75">
                            <div class="services-2-wrapper">
                                <div class="services-img">
                                    <img src="assets/img/icon/03.png" alt="" />
                                </div>
                                <div class="services-text">
                                    <h3>Server Security</h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>
                                    <a href="#"> <span class="services-button">read more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-75">
                            <div class="services-2-wrapper">
                                <div class="services-img">
                                    <img src="assets/img/icon/04.png" alt="" />
                                </div>
                                <div class="services-text">
                                    <h3>UX/UI Strategy</h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>
                                    <a href="#"> <span class="services-button">read more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-75">
                            <div class="services-2-wrapper">
                                <div class="services-img">
                                    <img src="assets/img/icon/05.png" alt="" />
                                </div>
                                <div class="services-text">
                                    <h3>Analysis For Tools</h3>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>
                                    <a href="#"> <span class="services-button">read more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-75">
                            <div class="services-2-wrapper">
                                <div class="services-img">
                                    <img src="assets/img/icon/06.png" alt="" />
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

            {/* <!-- fact-area-start --> */}
            <div class="fact-are-area pt-130 pb-100" style={{ 'background-image': 'url(assets/img/bg/bg-9.jpg)' }}>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-5 col-lg-12 mb-30">
                            <div class="fact-text text-center text-xl-left">
                                <span>do you have any project ?</span>
                                <h1>Let’s Talk About <br /> IT Solutions</h1>
                                <a href="#">join with us <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i> </a>
                            </div>
                        </div>
                        <div class="col-xl-7 col-lg-12">
                            <div class="row justify-content-between">
                                <div class="col-xl-4 col-lg-4 col-md-4 mb-30">
                                    <div class="progress-wrapper">
                                        <ProgressBarCircle />
                                        <div class="progress-content">
                                            <h1>85%</h1>
                                            <span>Happy Clients</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 mb-30">
                                    <div class="progress-wrapper">
                                        <ProgressBarCircle />
                                        <div class="progress-content">
                                            <h1>95%</h1>
                                            <span>Project Complate</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 mb-30">
                                    <div class="progress-wrapper">
                                        <ProgressBarCircle />
                                        <div class="progress-content">
                                            <h1>90%</h1>
                                            <span>Market Research</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- fact-area-end --> */}

            {/* <!-- our-skills-area-start --> */}
            <div class="our-skills-area pt-130">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-5 col-lg-6 mb-30">
                            <div class="our-skills-img">
                                <img src="assets/img/bg/01.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="progress-wrapper mb-30">
                                <div className="section-title  mb-50">
                                    <span className="b-sm-left-2"></span>
                                    <span className="sub-t-left">our skills</span>
                                    <h1>More Than 25+ Years We Provide Solutions</h1>
                                </div>
                                <div className="progress-bar-text">
                                    <div className="progress-skill">
                                        <div className="single-skill mb-35">
                                            <div className="bar-title">
                                                <h4>Design Strategy</h4>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar wow slideInLeft" role="progressbar" style={{width: `80%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-wow-duration="1s" data-wow-delay=".5s">
                                                    <span>80%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-skill mb-35">
                                            <div className="bar-title">
                                                <h4>Marketing Strategy</h4>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar wow slideInLeft" role="progressbar" style={{width: `90%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-wow-duration="2s" data-wow-delay=".5s">
                                                    <span>90%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-skill mb-35">
                                            <div className="bar-title">
                                                <h4>UX/UI Strategy</h4>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar wow slideInLeft" role="progressbar" style={{width: `85%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-wow-duration="2s" data-wow-delay=".5s">
                                                    <span>85%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-skill mb-35">
                                            <div className="bar-title">
                                                <h4>Business Development</h4>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar wow slideInLeft" role="progressbar" style={{width: `95%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-wow-duration="2s" data-wow-delay=".5s">
                                                    <span>95%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-skill">
                                            <div className="bar-title">
                                                <h4>Software Development</h4>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar wow slideInLeft" role="progressbar" style={{width: `95%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-wow-duration="2s" data-wow-delay=".5s">
                                                    <span>92%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- our-skills-area-end --> */}
        </main>
        );
    }
}

export default ServiceThreeMain;