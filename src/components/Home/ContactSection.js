import React from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {
    
    const defaultMap = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    return (
        <div className="contact-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                        <div className="section-title section-title-white text-center ml-50 mr-50 mb-75">
                            <span className="border-left-1"></span>
                            <span>contact us</span>
                            <span className="border-right-1"></span>
                            <h1>Don't Hesitate To Contact Us</h1>
                        </div>
                    </div>
                </div>
                <div className="contact-bg">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 mb-30">
                            <div className="map-wrapper">
                                <div className="contact-map" style={{ height: '390px', width: '100%' }}>
                                    <GoogleMapReact defaultCenter={defaultMap.center} defaultZoom={defaultMap.zoom}>
                                        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
                                    </GoogleMapReact>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 mb-30">
                            <div className="appointment-wrapper">
                                <form id="appointment-form" action="#">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-box user-icon mb-30">
                                                <input type="text" name="name" placeholder="Full Name Here" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-box email-icon mb-30">
                                                <input type="text" name="email" placeholder="Email Here" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-box date-icon mb-30">
                                                <input type="text" name="text" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-box message-icon mb-30">
                                                <textarea name="message" id="message" cols="30" rows="10" placeholder="Write message"></textarea>
                                            </div>
                                            <div className="contact-btn">
                                                <button className="btn" type="submit"><span className="btn-text">send message <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> <span className="btn-border"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;