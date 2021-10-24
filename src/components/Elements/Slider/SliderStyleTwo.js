import React, { Component, useState } from 'react';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SliderDefault = () =>  {

    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <button type='button' onClick={onClick} className={className}><i><FontAwesomeIcon icon={['fas', 'chevron-right']} /></i></button>
        );
    }

    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
            <button type='button' onClick={onClick} className={className}> <i><FontAwesomeIcon icon={['fas', 'chevron-left']} /></i></button>
        );
    }

    const settings = {
        className: "slider-active",
        dots: false,
        slidesToShow: 1,
        speed: 500,
        fade: true,
        infinite: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        arrows: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <div className="slider-area">
            <Slider {...settings}>
                <div className="single-slider">
                    <div className="slider-height slider-1-height d-flex align-items-center" style={{ backgroundImage:`url(${'assets/img/slider/slider-2.jpg'})`}}>
                        <div className="container">
                            <div className="row ">
                                <div className="col-xl-8 col-lg-12">
                                    <div className="slider-content slider-2-content">
                                        <span data-animation="fadeInLeft" data-delay=".3s">IT solutions</span>
                                        <span data-animation="fadeInLeft" data-delay=".3s" className="agency">agency</span>
                                        <h1 data-animation="fadeInLeft" data-delay=".5s">Most Experience <br /> IT Solutions Agency For Your Business</h1>
                                        <div className="slider-button" data-animation="fadeInUp" data-delay=".7s">
                                            <a className="btn" href="#"><span className="btn-text">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                            <a className="slider-btn" href="#">how we works <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-slider">
                    <div className="slider-height slider-1-height d-flex align-items-center" style={{ backgroundImage:`url(${'assets/img/slider/slider-2.jpg'})`}}>
                        <div className="container">
                            <div className="row ">
                                <div className="col-xl-8 col-lg-12">
                                    <div className="slider-content slider-2-content">
                                        <span data-animation="fadeInLeft" data-delay=".3s">IT solutions</span>
                                        <span data-animation="fadeInLeft" data-delay=".3s" className="agency">agency</span>
                                        <h1 data-animation="fadeInLeft" data-delay=".5s">Most Experience <br /> IT Solutions Agency For Your Business</h1>
                                        <div className="slider-button" data-animation="fadeInUp" data-delay=".7s">
                                            <a className="btn" href="#"><span className="btn-text">learn more <i className="far fa-long-arrow-right"></i></span> </a>
                                            <a className="slider-btn" href="#">how we works <i className="far fa-long-arrow-right"></i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default SliderDefault;