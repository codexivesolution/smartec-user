import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Service = () => {
    return (
            <div class="our-services-area grey-bg-2 pt-120 pb-130 pr-45 pl-45">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
                            <div class="section-title text-center ml-50 mr-50 mb-85">
                                <span class="border-left-1"></span>
                                <span>what we do</span>
                                <span class="border-right-1"></span>
                                <h1>We provide exclusive services for your busainess</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-3 col-lg-3 col-md-6">
                            <div class="our-services-wrapper mb-30">
                                <div class="our-services-img">
                                    <img src="assets/img/service/ser-01.jpg" alt="" />
                                </div>
                                <div class="our-services-content">
                                    <div class="our-services-icon">
                                        <i><FontAwesomeIcon icon={['fas', 'gem']} /></i>
                                    </div>
                                    <div class="our-services-text">
                                        <h3>Product Design</h3>
                                        <p>Set perspiciatis unde omnis iste natus error sit voluptatem accusantium demqu laudantium totam rem aperiam </p>
                                        <a href="#">view more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-6">
                            <div class="our-services-wrapper mb-30">
                                <div class="our-services-img">
                                    <img src="assets/img/service/ser-02.jpg" alt="" />
                                </div>
                                <div class="our-services-content">
                                    <div class="our-services-icon">
                                        <i><FontAwesomeIcon icon={['fas', 'laptop-code']} /></i>
                                    </div>
                                    <div class="our-services-text">
                                        <h3>UX/UI Strategy</h3>
                                        <p>Set perspiciatis unde omnis iste natus error sit voluptatem accusantium demqu laudantium totam rem aperiam </p>
                                        <a href="#">view more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-6">
                            <div class="our-services-wrapper mb-30">
                                <div class="our-services-img">
                                    <img src="assets/img/service/ser-03.jpg" alt="" />
                                </div>
                                <div class="our-services-content">
                                    <div class="our-services-icon">
                                        <i><FontAwesomeIcon icon={['fas', 'analytics']} /></i>
                                    </div>
                                    <div class="our-services-text">
                                        <h3>IT Marketing</h3>
                                        <p>Set perspiciatis unde omnis iste natus error sit voluptatem accusantium demqu laudantium totam rem aperiam </p>
                                        <a href="#">view more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-6">
                            <div class="our-services-wrapper mb-30">
                                <div class="our-services-img">
                                    <img src="assets/img/service/ser-04.jpg" alt="" />
                                </div>
                                <div class="our-services-content">
                                    <div class="our-services-icon">
                                        <i><FontAwesomeIcon icon={['fas', 'fingerprint']} /></i>
                                    </div>
                                    <div class="our-services-text">
                                        <h3>Web Security</h3>
                                        <p>Set perspiciatis unde omnis iste natus error sit voluptatem accusantium demqu laudantium totam rem aperiam </p>
                                        <a href="#">view more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="services-button text-center mt-30">
                                <a class="btn" href="#"><span class="btn-text">view All Services <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Service;