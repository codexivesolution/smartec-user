import React from 'react';
import Head from 'next/head';
import CarouselDefault from '../Elements/OwlCarousel/CarouselDefault';

const Project = () =>  {

    return (
        <React.Fragment>
            <Head>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
            </Head>
            <div className="project-area pt-125 pb-185  pl-140 pr-140">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
                            <div className="section-title text-center ml-50 mr-50 mb-75">
                                <span className="border-left-1"></span>
                                <span>our project</span>
                                <span className="border-right-1"></span>
                                <h1>Our Latest Case Studies</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <CarouselDefault />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Project;