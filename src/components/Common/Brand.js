import React, { Component } from 'react';
import Slider from "react-slick";

const Brand = () =>  {

    const brandSettings = {
        className: "brand-active",
        dots: false,
        centerMode: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    return (
        <div className="brand-area pt-130 pb-130">
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
    );
}

export default Brand;