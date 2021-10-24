import React, { Component } from 'react';
import Head from 'next/head';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CarouselDefault from '../Elements/OwlCarousel/CarouselDefault';

const CaseSettings = {
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
            <React.Fragment>
                <Head>
                    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
                </Head>
                <main>
                    {/* <!-- project-area-start --> */}
                    <div class="project-area pt-130 pb-185  pl-140 pr-140">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-12">
                                    <CarouselDefault />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- project-area-end --> */}

                    {/* <!-- our-case-area-start --> */}
                    <div class="our-case-area pt-120  pr-55 pl-55 pb-220" style={{ 'background-image': 'url(assets/img/bg/case.jpg)' }}>
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
                                    <Slider {...CaseSettings}>
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
                </main>
            </React.Fragment>
        );
    }
}

export default CaseTwo;