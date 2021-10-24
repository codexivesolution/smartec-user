import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import SubscribeForm from '../Elements/Subscribe/SubscribeForm';

const Newsletter = () => {

    return (
        <div className="newsletter-area pt-75 pb-40" style={{'background-image': 'url(assets/img/bg/bg-5.jpg)'}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-5 mb-30">
                        <div className="newsletter-text">
                            <h1>Subscribe Our Newsletter <br/> To Get More Update</h1>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 mb-30">
                        <div className="single-newsletters">
                            <div className="newsletter-form">
                                <SubscribeForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;