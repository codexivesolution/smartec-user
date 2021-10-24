import React, { Component } from 'react';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const settings = {
    className: "case-active",
    dots: true,
    centerMode: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
};

class CaseTwo extends Component {

    render() {

        return (
            <main>
            {/* <!-- case-studies-start --> */}
            <div class="case-studies pt-120 pb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
                            <div class="section-title text-center ml-50 mr-50 mb-75">
                                <span class="border-left-1"></span>
                                <span>case studies</span>
                                <span class="border-right-1"></span>
                                <h1>Our Recent Case Studies</h1>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="case-studies-wrapper mb-30">
                                <div class="case-studies-img">
                                    <img src="assets/img/project/c-01.jpg" alt="" />
                                    <div class="case-studies-text">
                                        <span>Design strategy</span>
                                        <h3><a href="#">Creative Idea Buildup</a></h3>
                                    </div>
                                </div>
                                <div class="case-studies-content text-center">
                                    <p>Sedut perspiciatis unde aomnis natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="case-studies-wrapper mb-30">
                                <div class="case-studies-img">
                                    <img src="assets/img/project/c-02.jpg" alt="" />
                                    <div class="case-studies-text">
                                        <span>Design strategy</span>
                                        <h3><a href="#">Creative Idea Buildup</a></h3>
                                    </div>
                                </div>
                                <div class="case-studies-content text-center">
                                    <p>Sedut perspiciatis unde aomnis natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="case-studies-wrapper mb-30">
                                <div class="case-studies-img">
                                    <img src="assets/img/project/c-03.jpg" alt="" />
                                    <div class="case-studies-text">
                                        <span>Design strategy</span>
                                        <h3><a href="#">Creative Idea Buildup</a></h3>
                                    </div>
                                </div>
                                <div class="case-studies-content text-center">
                                    <p>Sedut perspiciatis unde aomnis natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- case-studies-end --> */}

            {/* <!-- our-case-area-start --> */}
                <div class="our-case-area pt-120  pr-55 pl-55 pb-220" style={{ 'background-image': 'url(assets/img/bg/case.jpg)'}}>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                            <div class="section-title section-title-white text-center ml-50 mr-50 mb-80">
                                <span class="border-left-1"></span>
                                <span>our project</span>
                                <span class="border-right-1"></span>
                                <h1>Our Latest Case Studies</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <Slider {...settings}>
                                <div class="col">
                                    <div class="our-case-wrapper">
                                        <div class="our-case-img">
                                            <a href="#"><img src="assets/img/project/ca-1.jpg" alt="" /></a>
                                        </div>
                                        <div class="our-case-text">
                                            <h3><a href="#">Idea For Business <span>(IT Management)</span></a></h3>
                                            <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                            <a href="#"> <span class="cases-button">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="our-case-wrapper">
                                        <div class="our-case-img">
                                            <a href="#"><img src="assets/img/project/ca-2.jpg" alt="" /></a>
                                        </div>
                                        <div class="our-case-text">
                                            <h3><a href="#">Product Design <span>(Design & Idea)</span></a></h3>
                                            <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                            <a href="#"> <span class="cases-button">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="our-case-wrapper">
                                        <div class="our-case-img">
                                            <a href="#"><img src="assets/img/project/ca-3.jpg" alt="" /></a>
                                        </div>
                                        <div class="our-case-text">
                                            <h3><a href="#">Cyber Security <span>(Database System)</span></a></h3>
                                            <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                            <a href="#"> <span class="cases-button">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="our-case-wrapper">
                                        <div class="our-case-img">
                                            <a href="#"><img src="assets/img/project/ca-4.jpg" alt="" /></a>
                                        </div>
                                        <div class="our-case-text">
                                            <h3><a href="#">Crerative Mind <span>(IT Consultant)</span></a></h3>
                                            <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                            <a href="#"> <span class="cases-button">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="our-case-wrapper">
                                        <div class="our-case-img">
                                            <a href="#"><img src="assets/img/project/ca-1.jpg" alt="" /></a>
                                        </div>
                                        <div class="our-case-text">
                                            <h3><a href="#">Idea For Business <span>(IT Management)</span></a></h3>
                                            <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                            <a href="#"> <span class="cases-button">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="our-case-wrapper">
                                        <div class="our-case-img">
                                            <a href="#"><img src="assets/img/project/ca-2.jpg" alt="" /></a>
                                        </div>
                                        <div class="our-case-text">
                                            <h3><a href="#">Product Design <span>(Design & Idea)</span></a></h3>
                                            <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                            <a href="#"> <span class="cases-button">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="our-case-wrapper">
                                        <div class="our-case-img">
                                            <a href="#"><img src="assets/img/project/ca-3.jpg" alt="" /></a>
                                        </div>
                                        <div class="our-case-text">
                                            <h3><a href="#">Cyber Security <span>(Database System)</span></a></h3>
                                            <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                            <a href="#"> <span class="cases-button">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="our-case-wrapper">
                                        <div class="our-case-img">
                                            <a href="#"><img src="assets/img/project/ca-4.jpg" alt="" /></a>
                                        </div>
                                        <div class="our-case-text">
                                            <h3><a href="#">Crerative Mind <span>(IT Consultant)</span></a></h3>
                                            <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                            <a href="#"> <span class="cases-button">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="our-case-wrapper">
                                        <div class="our-case-img">
                                            <a href="#"><img src="assets/img/project/ca-1.jpg" alt="" /></a>
                                        </div>
                                        <div class="our-case-text">
                                            <h3><a href="#">Idea For Business <span>(IT Management)</span></a></h3>
                                            <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                            <a href="#"> <span class="cases-button">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="our-case-wrapper">
                                        <div class="our-case-img">
                                            <a href="#"><img src="assets/img/project/ca-2.jpg" alt="" /></a>
                                        </div>
                                        <div class="our-case-text">
                                            <h3><a href="#">Product Design <span>(Design & Idea)</span></a></h3>
                                            <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                            <a href="#"> <span class="cases-button">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="our-case-wrapper">
                                        <div class="our-case-img">
                                            <a href="#"><img src="assets/img/project/ca-3.jpg" alt="" /></a>
                                        </div>
                                        <div class="our-case-text">
                                            <h3><a href="#">Cyber Security <span>(Database System)</span></a></h3>
                                            <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                            <a href="#"> <span class="cases-button">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="our-case-wrapper">
                                        <div class="our-case-img">
                                            <a href="#"><img src="assets/img/project/ca-4.jpg" alt="" /></a>
                                        </div>
                                        <div class="our-case-text">
                                            <h3><a href="#">Crerative Mind <span>(IT Consultant)</span></a></h3>
                                            <p>Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quaeas</p>
                                            <a href="#"> <span class="cases-button">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- our-case-area-end --> */}

            {/* <!-- case-area-start --> */}
            <div class="case-area pt-120 pb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                            <div class="section-title text-center ml-50 mr-50 mb-80">
                                <span class="border-left-1"></span>
                                <span>our project</span>
                                <span class="border-right-1"></span>
                                <h1>Our Latest Case Studies</h1>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="case-wrapper mb-30">
                                <div class="case-img">
                                    <a href="#"><img src="assets/img/project/case-1.jpg" alt="" /></a>
                                </div>
                                <div class="case-text">
                                    <span>Idea generator</span>
                                    <h3><a href="#">Software Development</a></h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="case-wrapper mb-30">
                                <div class="case-img">
                                    <a href="#"><img src="assets/img/project/case-2.jpg" alt="" /></a>
                                </div>
                                <div class="case-text">
                                    <span>Idea generator</span>
                                    <h3><a href="#">Software Development</a></h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="case-wrapper mb-30">
                                <div class="case-img">
                                    <a href="#"><img src="assets/img/project/case-3.jpg" alt="" /></a>
                                </div>
                                <div class="case-text">
                                    <span>Idea generator</span>
                                    <h3><a href="#">Software Development</a></h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="case-wrapper mb-30">
                                <div class="case-img">
                                    <a href="#"><img src="assets/img/project/case-4.jpg" alt="" /></a>
                                </div>
                                <div class="case-text">
                                    <span>Idea generator</span>
                                    <h3><a href="#">Software Development</a></h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="case-wrapper mb-30">
                                <div class="case-img">
                                    <a href="#"><img src="assets/img/project/case-5.jpg" alt="" /></a>
                                </div>
                                <div class="case-text">
                                    <span>Idea generator</span>
                                    <h3><a href="#">Software Development</a></h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="case-wrapper mb-30">
                                <div class="case-img">
                                    <a href="#"><img src="assets/img/project/case-6.jpg" alt="" /></a>
                                </div>
                                <div class="case-text">
                                    <span>Idea generator</span>
                                    <h3><a href="#">Software Development</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- case-area-end --> */}

            {/* <!-- cta-area-start --> */}
                <div class="cta-area pt-125 pb-95" style={{ 'background-image': 'url(assets/img/bg/bg-2.jpg)' }}>
                <div class="container">
                    <div class="row">
                       <div class="col-xl-7 col-lg-6">
                            <div class="cta-text mb-30">
                                <span>do you have any project ?</span>
                                <h1>Let’s Talk About Business Soluations With Us</h1>
                            </div>
                       </div>
                       <div class="col-xl-5 col-lg-6">
                            <div class="cta-button text-lg-right mb-30">
                                <a class="btn btn-white btn-none" href="#"><span class="btn-text">contact us <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                <a class="btn btn-white btn-none btn-margin" href="#"><span class="btn-text">join with us <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
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

export default CaseTwo;