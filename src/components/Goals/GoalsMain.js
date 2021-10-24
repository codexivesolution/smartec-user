import React, { Component } from 'react';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const brandSettings = {
    className: "brand-active",
    dots: false,
    centerMode: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1
};

class Goals extends Component {
    render() {
        return (
            <main>
            {/* <!-- our-goals-area-start --> */}
            <div class="our-goals-area pt-130 pb-95">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-4 col-md-4">
                            <div class="our-goals-wrapper mb-30">
                                <div class="our-goals-img">
                                    <img src="assets/img/goals/01.jpg" alt="" />
                                </div>
                                <div class="our-golas-text">
                                    <h3>MIssion & Vision</h3>
                                    <p>Sedut perspiciatis unde omnis natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-8 col-md-8">
                            <div class="our-goals-wrapper mb-30">
                                <div class="our-goals-img">
                                    <img src="assets/img/goals/02.jpg" alt="" />
                                </div>
                                <div class="our-golas-text">
                                    <h3>What DO We Want/ Our Goals</h3>
                                    <p>Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because</p>
                                    <p class="mt-15">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dictae.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- our-goals-area-end --> */}

            {/* <!-- brand-area-start --> */}
                <div className="brand-area pb-130">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <Slider {...brandSettings}>
                                    <div className="brand-img text-center">
                                        <img src="assets/img/brand/brand-01.png" alt="" />
                                    </div>
                                    <div className="brand-img text-center">
                                        <img src="assets/img/brand/brand-02.png" alt="" />
                                    </div>
                                    <div className="brand-img text-center">
                                        <img src="assets/img/brand/brand-03.png" alt="" />
                                    </div>
                                    <div className="brand-img text-center">
                                        <img src="assets/img/brand/brand-04.png" alt="" />
                                    </div>
                                    <div className="brand-img text-center">
                                        <img src="assets/img/brand/brand-05.png" alt="" />
                                    </div>
                                    <div className="brand-img">
                                        <img src="assets/img/brand/brand-02.png" alt="" />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            {/* <!-- brand-area-end --> */}

            {/* <!-- goals-area-start --> */}
            <div class="goals-area pos-rel">
                <div class="goals-img d-none d-lg-block" style={{ 'background-image': 'url(assets/img/goals/03.jpg)'}}></div>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 offset-xl-6 col-lg-6 offset-lg-6">
                            <div class="golas-wrapper">
                                <div class="section-title section-title-white mb-30">
                                    <span class="b-sm-left-1"></span>
                                    <span class="b-sm-left-2"></span>
                                    <span class="sub-t-left">what we do</span>
                                    <h1>Super Quality IT Solutions Provide</h1>
                                 </div>
                                 <div class="golas-text">
                                     <p>But I must explain to you how all this mistaken idea of denoun cing pleasure and praising pain was born and I will giv complete account of the system, and expound the actual teachings of the great explorer of the truth the master-builder of</p>
                                     <ul class="goals-list">
                                         <li>
                                            <i><FontAwesomeIcon icon={['far', 'check']} /></i>
                                           <span>Pleasure and praising pain was born and will complete</span>
                                         </li>
                                         <li>
                                            <i><FontAwesomeIcon icon={['far', 'check']} /></i>
                                           <span>Pleasure and praising pain was born and will complete</span>
                                         </li>
                                         <li>
                                            <i><FontAwesomeIcon icon={['far', 'check']} /></i>
                                           <span>Powerful Image Analysis With Google Cloud Vision</span>
                                         </li>
                                     </ul>
                                     <a class="btn" href="#"><span class="btn-text">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
            {/* <!-- goals-area-end --> */}

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

            {/* <!-- cta-area-start --> */}
            <div class="cta-area pt-125 pb-95" style={{ 'background-image': 'url(assets/img/bg/bg-2.jpg)'}}>
                <div class="container">
                    <div class="row">
                       <div class="col-xl-7 col-lg-7">
                            <div class="cta-text mb-30">
                                <span>do you have any project ?</span>
                                <h1>Let’s Talk About Business Soluations With Us</h1>
                            </div>
                       </div>
                       <div class="col-xl-5 col-lg-5">
                            <div class="cta-button text-lg-right mb-30">
                                <a class="btn btn-white btn-none" href="#"><span class="btn-text">join with us <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                <a class="cta-link" href="#"><i class="far fa-phone"></i> +812 (345) 789 88</a>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
            {/* <!-- cta-area-end --> */}
            </main>
        );
    }
}

export default Goals;