import React, { Component } from 'react';
import Slider from "react-slick";
import AccordionDefault from '../Elements/Accordion/AccordionDefault';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const settings = {
    className: "client-active",
    dots: false,
    centerMode: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
};

class AboutMain extends Component {

    render() {

        return (
            <main>
                {/* about-area-start */}
                <div className="about-area pt-130 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 mb-30">
                                <div className="about-2-img">
                                    <img src="assets/img/about/02.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 mb-30">
                                <div className="about-1-wrapper">
                                    <div className="about-text">
                                        <span>who we are</span>
                                        <h1>More than 23+ years we provide <span>IT solutions </span></h1>
                                        <p>Sed ut perspiciatis unde omnis iste natus errorsit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo invetore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
                                        <p className="mt-20">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem </p>
                                    </div>
                                    <div className="about-button">
                                        <a className="btn" href="#"><span className="btn-text">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* about-area-end */}

                {/* services-area-start */}
                <div className="services-area  pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="single-services text-center">
                                    <div className="services-icon">
                                        <i><FontAwesomeIcon prefix="fas" icon={'laptop-code'} /></i>
                                    </div>
                                    <div className="services-text">
                                        <h3>Web Development</h3>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>
                                        <a href="#"> <span className="services-button">read more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="single-services active text-center">
                                    <div className="services-icon">
                                        <i><FontAwesomeIcon icon={['fas', 'database']} /></i>
                                    </div>
                                    <div className="services-text">
                                        <h3>Database Analysis</h3>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>
                                        <a href="#"> <span className="services-button">read more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="single-services text-center">
                                    <div className="services-icon">
                                        <i><FontAwesomeIcon icon={['fas', 'server']} /></i>
                                    </div>
                                    <div className="services-text">
                                        <h3>Server Security</h3>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>
                                        <a href="#"> <span className="services-button">read more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* services-area-end */}

                {/* choose-area-start */}
                <div className="choose-area pt-130 pb-130" style={{ 'background-image': 'url(assets/img/bg/bg-15.jpg)' }}>
                    <div className="choose-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 mb-30">
                                    <div className="faq-wrapper">
                                        <div className="section-title mb-45">
                                            <span className="b-sm-left-1"></span>
                                            <span className="b-sm-left-2"></span>
                                            <span className="sub-t-left">why choose us</span>
                                            <h1>We Are Expert In IT Solutions Services</h1>
                                        </div>
                                        <div className="faq-box faq-2-box">
                                            <AccordionDefault />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 mb-30">
                                    <div className="choose-wrapper">
                                        <div className="choose-text">
                                            <p>On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness of will which is the same as saying through shrinking from toil and pain cases are perfectly</p>
                                        </div>
                                        <div className="choose-img">
                                            <img src="assets/img/bg/c.jpg" alt="" />
                                            <div className="choose-video">
                                                <a className="popup-video" href="https://www.youtube.com/watch?v=LTXD6XZXc3U"><i><FontAwesomeIcon icon={['fas', 'play']} /></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* choose-area-end */}

                {/* team-area-start */}
                <div className="team-area pt-120 pb-100 pos-rel">
                    <div className="shape d-none d-xl-block">
                        <div className="shape-item team-01 bounce-animate"><img src="assets/img/shape/shape-1.png" alt="" /></div>
                    </div>
                    <div className="container">
                        <div className="row mb-50">
                            <div className="col-xl-4 col-lg-6">
                                <div className="section-title  mb-30">
                                    <span className="b-sm-left-1"></span>
                                    <span className="b-sm-left-2"></span>
                                    <span className="sub-t-left">our Team</span>
                                    <h1>Meet Experience Team Member</h1>
                                </div>
                            </div>
                            <div className="col-xl-5 offset-xl-3 col-lg-6">
                                <div className="team-section mb-30">
                                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give.</p>
                                    <a className="btn" href="#"><span className="btn-text">join with us <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                                <div className="team-wrapper">
                                    <div className="team-img">
                                        <img src="assets/img/team/team-01.jpg" alt="" />
                                    </div>
                                    <div className="team-text">
                                        <h4>Solvina D Naliz</h4>
                                        <span>Web developer</span>
                                        <div className="team-icon">
                                            <a href="#"><i><FontAwesomeIcon icon={['fab', 'facebook-f']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fab', 'youtube']} /></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                                <div className="team-wrapper">
                                    <div className="team-img">
                                        <img src="assets/img/team/team-02.jpg" alt="" />
                                    </div>
                                    <div className="team-text">
                                        <h4>Jerry D.Silva</h4>
                                        <span>UI Designer</span>
                                        <div className="team-icon">
                                            <a href="#"><i><FontAwesomeIcon icon={['fab', 'facebook-f']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fab', 'youtube']} /></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                                <div className="team-wrapper">
                                    <div className="team-img">
                                        <img src="assets/img/team/team-03.jpg" alt="" />
                                    </div>
                                    <div className="team-text">
                                        <h4>David Walillams</h4>
                                        <span>sr consultant</span>
                                        <div className="team-icon">
                                            <a href="#"><i><FontAwesomeIcon icon={['fab', 'facebook-f']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fab', 'youtube']} /></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                                <div className="team-wrapper">
                                    <div className="team-img">
                                        <img src="assets/img/team/team-04.jpg" alt="" />
                                    </div>
                                    <div className="team-text">
                                        <h4>Michel Z. Jones</h4>
                                        <span>CEO & Founder</span>
                                        <div className="team-icon">
                                            <a href="#"><i><FontAwesomeIcon icon={['fab', 'facebook-f']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                                            <a href="#"><i><FontAwesomeIcon icon={['fab', 'youtube']} /></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* team-area-end */}

                {/* cta-area-start */}
                <div className="cta-area pt-125 pb-95" style={{ 'background-image': 'url(assets/img/bg/bg-2.jpg)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-6">
                                <div className="cta-text mb-30">
                                    <span>do you have any project ?</span>
                                    <h1>Let’s Talk About Business Soluations With Us</h1>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <div className="cta-button text-lg-right mb-30">
                                    <a className="btn btn-white btn-none" href="#"><span className="btn-text">contact us <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                    <a className="btn btn-white btn-none btn-margin" href="#"><span className="btn-text">join with us <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* cta-area-end */}

                {/* client-area-start */}
                <div className="client-area dark pt-120 pb-100 grey-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-7">
                                <div className="section-title  mb-70">
                                    <span className="b-sm-left-2"></span>
                                    <span className="sub-t-left">our testimonials</span>
                                    <h1>More Than 800+ Customer Satisfied Our Solutions</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <Slider {...settings}>
                                    <div className="client-item col">
                                        <div className="client-say-wrapper mb-30">
                                            <div className="client-say-text">
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusante doloremque laudantium, totam rem  aperiam eaque ipsa illventore verit atis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                                <div className="client-rating">
                                                    <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                                    <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                                    <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                                    <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                                    <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                                </div>
                                                <div className="clientsay-name">
                                                    <div className="client-say-img">
                                                        <img src="assets/img/testimonial/01.png" alt="" />
                                                    </div>
                                                    <div className="client-say-content">
                                                        <h4>Sonix Paleda Joda</h4>
                                                        <span>Web Designer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="client-item col">
                                        <div className="client-say-wrapper mb-30">
                                            <div className="client-say-text">
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusante doloremque laudantium, totam rem  aperiam eaque ipsa illventore verit atis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                                <div className="client-rating">
                                                    <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                                    <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                                    <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                                    <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                                    <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                                </div>
                                                <div className="clientsay-name">
                                                    <div className="client-say-img">
                                                        <img src="assets/img/testimonial/02.png" alt="" />
                                                    </div>
                                                    <div className="client-say-content">
                                                        <h4>Jeson Roy Newzi</h4>
                                                        <span>SR Consultant</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="client-item col">
                                        <div className="client-say-wrapper mb-30">
                                            <div className="client-say-text">
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusante doloremque laudantium, totam rem  aperiam eaque ipsa illventore verit atis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                                <div className="client-rating">
                                                    <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                                    <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                                    <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                                    <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                                    <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                                </div>
                                                <div className="clientsay-name">
                                                    <div className="client-say-img">
                                                        <img src="assets/img/testimonial/03.png" alt="" />
                                                    </div>
                                                    <div className="client-say-content">
                                                        <h4>David Mexxwell</h4>
                                                        <span>Business manager</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="client-item col">
                                        <div className="client-say-wrapper mb-30">
                                            <div className="client-say-text">
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusante doloremque laudantium, totam rem  aperiam eaque ipsa illventore verit atis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                                <div className="client-rating">
                                                    <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                                    <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                                    <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                                    <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                                    <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                                </div>
                                                <div className="clientsay-name">
                                                    <div className="client-say-img">
                                                        <img src="assets/img/testimonial/01.png" alt="" />
                                                    </div>
                                                    <div className="client-say-content">
                                                        <h4>Sonix Paleda Joda</h4>
                                                        <span>Web Designer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="client-item col">
                                        <div className="client-say-wrapper mb-30">
                                            <div className="client-say-text">
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusante doloremque laudantium, totam rem  aperiam eaque ipsa illventore verit atis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                                <div className="client-rating">
                                                    <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                                    <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                                    <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                                    <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                                    <i><FontAwesomeIcon icon={['fas', 'star']} /></i>
                                                </div>
                                                <div className="clientsay-name">
                                                    <div className="client-say-img">
                                                        <img src="assets/img/testimonial/01.png" alt="" />
                                                    </div>
                                                    <div className="client-say-content">
                                                        <h4>Sonix Paleda Joda</h4>
                                                        <span>Web Designer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                {/* client-area-end */}

            </main>
        );
    }
}

export default AboutMain;