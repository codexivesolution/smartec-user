import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Service = () => {

    return (
        <div className="services-area pt-120 pb-100" style={{'background-image': 'url(assets/img/bg/bg-1.jpg)'}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
                        <div className="section-title text-center ml-50 mr-50 mb-80">
                            <span className="border-left-1"></span>
                            <span>what we do</span>
                            <span className="border-right-1"></span>
                            <h1>We provide exclusive services for your busainess</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="services-wrapper text-center">
                            <div className="services-img">
                                <img src="assets/img/icon/icon-01.png" alt="" />
                            </div>
                            <div className="services-text">
                                <h3>Web Development</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>
                                <a href="#"> <span className="services-button">read more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="services-wrapper text-center">
                            <div className="services-img">
                                <img src="assets/img/icon/icon-2.png" alt="" />
                            </div>
                            <div className="services-text">
                                <h3>Database Analysis</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>
                                <a href="#"> <span className="services-button">read more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="services-wrapper text-center">
                            <div className="services-img">
                                <img src="assets/img/icon/icon-3.png" alt="" />
                            </div>
                            <div className="services-text">
                                <h3>Server Security</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>
                                <a href="#"> <span className="services-button">read more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="services-wrapper text-center">
                            <div className="services-img">
                                <img src="assets/img/icon/icon-4.png" alt="" />
                            </div>
                            <div className="services-text">
                                <h3>UX/UI Strategy</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>
                                <a href="#"> <span className="services-button">read more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="services-wrapper text-center">
                            <div className="services-img">
                                <img src="assets/img/icon/icon-5.png" alt="" />
                            </div>
                            <div className="services-text">
                                <h3>Analysis For Tools</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>
                                <a href="#"> <span className="services-button">read more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="services-wrapper text-center">
                            <div className="services-img">
                                <img src="assets/img/icon/icon-6.png" alt="" />
                            </div>
                            <div className="services-text">
                                <h3>Marketing Strategy</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>
                                <a href="#"> <span className="services-button">read more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;