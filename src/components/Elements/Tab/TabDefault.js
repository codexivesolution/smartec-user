import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const TabDefault = () => {

    let tab1 = "All Project",
        tab2 = "Product",
        tab3 = "Development",
        tab4 = "Software",
        tab5 = "Design";
    const { tabStyle } = 'tab-menu';

    return (
        <div className="gallery-area pt-125 pb-130">
            <div className="container">
                <Tabs className="row mb-40">
                    <div className="col-xl-5 col-lg-5">
                        <div className="section-title  mb-30">
                            <span className="b-sm-left-2"></span>
                            <span className="sub-t-left">our project</span>
                            <h1>Our Latest Case Studies</h1>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 mb-30">
                        <div className="portfolio-menu mt-120 text-lg-right mb-30">
                            <TabList className={`${tabStyle}`}>
                                <Tab>{tab1}</Tab>
                                <Tab>{tab2}</Tab>
                                <Tab>{tab3}</Tab>
                                <Tab>{tab4}</Tab>
                                <Tab>{tab5}</Tab>
                            </TabList>
                        </div>
                    </div>

                    <TabPanel>
                        <div className="col-12">
                            <div id="portfolio-grid" className="row row-portfolio">
                                <div className="grid-sizer"></div>
                                <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat2 cat4 mb-30">
                                    <div className="portfolio-wrapper">
                                        <div className="portfolio-img">
                                            <a href="#"><img src="assets/img/project/ga-01.jpg" alt="" />
                                            </a>
                                            <div className="portfolio-text">
                                                <span>product design</span>
                                                <h3><a href="#">Best System How To Product Design</a></h3>
                                                <a className="btn" href="#"><span className="btn-text">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i> </span> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat4 cat1 cat2 mb-30">
                                    <div className="portfolio-wrapper">
                                        <div className="portfolio-img">
                                            <a href="#"><img src="assets/img/project/ga-02.jpg" alt="" />
                                            </a>
                                            <div className="portfolio-text">
                                                <span>product design</span>
                                                <h3><a href="#">Best System How To Product Design</a></h3>
                                                <a className="btn" href="#"><span className="btn-text">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i> </span> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat3 cat2 cat1 mb-30">
                                    <div className="portfolio-wrapper">
                                        <div className="portfolio-img">
                                            <a href="#"><img src="assets/img/project/ga-03.jpg" alt="" />
                                            </a>
                                            <div className="portfolio-text">
                                                <span>product design</span>
                                                <h3><a href="#">Best System How To Product Design</a></h3>
                                                <a className="btn" href="#"><span className="btn-text">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i> </span> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat1 cat4 mb-30">
                                    <div className="portfolio-wrapper">
                                        <div className="portfolio-img">
                                            <a href="#"><img src="assets/img/project/ga-04.jpg" alt="" />
                                            </a>
                                            <div className="portfolio-text">
                                                <span>product design</span>
                                                <h3><a href="#">Best System How To Product Design</a></h3>
                                                <a className="btn" href="#"><span className="btn-text">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i> </span> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat3 cat2 mb-30">
                                    <div className="portfolio-wrapper">
                                        <div className="portfolio-img">
                                            <a href="#"><img src="assets/img/project/ga-05.jpg" alt="" />
                                            </a>
                                            <div className="portfolio-text">
                                                <span>product design</span>
                                                <h3><a href="#">Best System How To Product Design</a></h3>
                                                <a className="btn" href="#"><span className="btn-text">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i> </span> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat4 cat3 mb-30">
                                    <div className="portfolio-wrapper">
                                        <div className="portfolio-img">
                                            <a href="#"><img src="assets/img/project/ga-06.jpg" alt="" />
                                            </a>
                                            <div className="portfolio-text">
                                                <span>product design</span>
                                                <h3><a href="#">Best System How To Product Design</a></h3>
                                                <a className="btn" href="#"><span className="btn-text">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i> </span> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="col-12">
                            <div id="portfolio-grid" className="row row-portfolio">
                                <div className="grid-sizer"></div>

                                <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat4 cat1 cat2 mb-30">
                                    <div className="portfolio-wrapper">
                                        <div className="portfolio-img">
                                            <a href="#"><img src="assets/img/project/ga-02.jpg" alt="" />
                                            </a>
                                            <div className="portfolio-text">
                                                <span>product design</span>
                                                <h3><a href="#">Best System How To Product Design</a></h3>
                                                <a className="btn" href="#"><span className="btn-text">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i> </span> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat3 cat2 cat1 mb-30">
                                    <div className="portfolio-wrapper">
                                        <div className="portfolio-img">
                                            <a href="#"><img src="assets/img/project/ga-03.jpg" alt="" />
                                            </a>
                                            <div className="portfolio-text">
                                                <span>product design</span>
                                                <h3><a href="#">Best System How To Product Design</a></h3>
                                                <a className="btn" href="#"><span className="btn-text">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i> </span> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat4 cat3 mb-30">
                                    <div className="portfolio-wrapper">
                                        <div className="portfolio-img">
                                            <a href="#"><img src="assets/img/project/ga-06.jpg" alt="" />
                                            </a>
                                            <div className="portfolio-text">
                                                <span>product design</span>
                                                <h3><a href="#">Best System How To Product Design</a></h3>
                                                <a className="btn" href="#"><span className="btn-text">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i> </span> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="col-12">
                            <div id="portfolio-grid" className="row row-portfolio">
                                <div className="grid-sizer"></div>
                                <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat2 cat4 mb-30">
                                    <div className="portfolio-wrapper">
                                        <div className="portfolio-img">
                                            <a href="#"><img src="assets/img/project/ga-01.jpg" alt="" />
                                            </a>
                                            <div className="portfolio-text">
                                                <span>product design</span>
                                                <h3><a href="#">Best System How To Product Design</a></h3>
                                                <a className="btn" href="#"><span className="btn-text">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i> </span> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat1 cat4 mb-30">
                                    <div className="portfolio-wrapper">
                                        <div className="portfolio-img">
                                            <a href="#"><img src="assets/img/project/ga-04.jpg" alt="" />
                                            </a>
                                            <div className="portfolio-text">
                                                <span>product design</span>
                                                <h3><a href="#">Best System How To Product Design</a></h3>
                                                <a className="btn" href="#"><span className="btn-text">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i> </span> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat3 cat2 mb-30">
                                    <div className="portfolio-wrapper">
                                        <div className="portfolio-img">
                                            <a href="#"><img src="assets/img/project/ga-05.jpg" alt="" />
                                            </a>
                                            <div className="portfolio-text">
                                                <span>product design</span>
                                                <h3><a href="#">Best System How To Product Design</a></h3>
                                                <a className="btn" href="#"><span className="btn-text">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i> </span> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="col-12">
                            <div id="portfolio-grid" className="row row-portfolio">
                                <div className="grid-sizer"></div>
                                <div className="col-xl-12 col-lg-4 col-md-6 grid-item cat2 cat4 mb-30">
                                    <div className="portfolio-wrapper">
                                        <div className="portfolio-img">
                                            <a href="#"><img src="assets/img/project/ga-01.jpg" alt="" />
                                            </a>
                                            <div className="portfolio-text">
                                                <span>product design</span>
                                                <h3><a href="#">Best System How To Product Design</a></h3>
                                                <a className="btn" href="#"><span className="btn-text">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i> </span> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="col-12">
                            <div id="portfolio-grid" className="row row-portfolio">
                                <div className="grid-sizer"></div>
                                <div className="col-xl-6 col-lg-4 col-md-6 grid-item cat3 cat2 mb-30">
                                    <div className="portfolio-wrapper">
                                        <div className="portfolio-img">
                                            <a href="#"><img src="assets/img/project/ga-05.jpg" alt="" />
                                            </a>
                                            <div className="portfolio-text">
                                                <span>product design</span>
                                                <h3><a href="#">Best System How To Product Design</a></h3>
                                                <a className="btn" href="#"><span className="btn-text">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i> </span> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-4 col-md-6 grid-item cat4 cat3 mb-30">
                                    <div className="portfolio-wrapper">
                                        <div className="portfolio-img">
                                            <a href="#"><img src="assets/img/project/ga-06.jpg" alt="" />
                                            </a>
                                            <div className="portfolio-text">
                                                <span>product design</span>
                                                <h3><a href="#">Best System How To Product Design</a></h3>
                                                <a className="btn" href="#"><span className="btn-text">learn more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i> </span> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="portfolio-button text-center mt-30">
                            <a className="btn" href="#"><span className="btn-text">view more <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i> </span> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TabDefault;