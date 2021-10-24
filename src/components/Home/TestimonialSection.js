import React from 'react';
import TestimonialDefault from '../Elements/Testimonials/TestimonialsDefault';

const Testimonial = () =>  {

    return (
        <div className="testimonial-area testimonial pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 mb-30">
                        <div className="section-title  mb-45">
                            <span className="b-sm-left-1"></span>
                            <span className="b-sm-left-2"></span>
                            <span className="sub-t-left">Testimonials</span>
                            <h1>What Our Clients Say About us</h1>
                        </div>
                        <TestimonialDefault />
                    </div>
                    <div className="col-xl-6 col-lg-6 mb-30">
                        <div className="testimonial-img">
                            <img src="assets/img/testimonial/test.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;