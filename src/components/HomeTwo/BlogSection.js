import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Blog = () => {

    return (
        <div className="blog-area pt-120 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
                        <div className="section-title text-center ml-50 mr-50 mb-75">
                            <span className="border-left-1"></span>
                            <span>our blog</span>
                            <span className="border-right-1"></span>
                            <h1>Reads Our Latest  News & Blog</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="blog-wrapper">
                            <div className="blog-img">
                                <a href="blog-details.html"><img src="assets/img/blog/blog-1.jpg" alt="" /></a>
                            </div>
                            <div className="blog-meta">
                                <span> <i><FontAwesomeIcon icon={['fas', 'user']} /></i> Soamlia</span>
                                <span> <i><FontAwesomeIcon icon={['fas', 'calendar']} /></i> 05 Aug 2019</span>
                                <span> <i><FontAwesomeIcon icon={['fas', 'comments']} /></i> (03)</span>
                            </div>
                            <div className="blog-text">
                                <h3><a href="blog-details.html">Monthly Web Development To Update React Hooks Cons</a></h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque </p>
                                <a href="blog-deatils.html"> <span className="blog-button">read more <i className="far fa-long-arrow-right"></i></span> </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="blog-wrapper">
                            <div className="blog-img">
                                <a href="blog-details.html"><img src="assets/img/blog/blog-4.jpg" alt="" /></a>
                            </div>
                            <div className="blog-meta">
                                <span> <i><FontAwesomeIcon icon={['fas', 'user']} /></i> Soamlia</span>
                                <span> <i><FontAwesomeIcon icon={['fas', 'calendar']} /></i> 05 Aug 2019</span>
                                <span> <i><FontAwesomeIcon icon={['fas', 'comments']} /></i> (03)</span>
                            </div>
                            <div className="blog-text">
                                <h3><a href="blog-details.html">Detailed Comparison Between WordPress & October CMS</a></h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque </p>
                                <a href="blog-deatils.html"> <span className="blog-button">read more <i className="far fa-long-arrow-right"></i></span> </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="blog-wrapper">
                            <div className="blog-img">
                                <a href="blog-details.html"><img src="assets/img/blog/blog-5.jpg" alt="" /></a>
                            </div>
                            <div className="blog-meta">
                                <span> <i><FontAwesomeIcon icon={['fas', 'user']} /></i> Soamlia</span>
                                <span> <i><FontAwesomeIcon icon={['fas', 'calendar']} /></i> 05 Aug 2019</span>
                                <span> <i><FontAwesomeIcon icon={['fas', 'comments']} /></i> (03)</span>
                            </div>
                            <div className="blog-text">
                                <h3><a href="blog-details.html">Exploring Latest Web Design Together With Theme</a></h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque </p>
                                <a href="blog-deatils.html"> <span className="blog-button">read more <i className="far fa-long-arrow-right"></i></span> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;