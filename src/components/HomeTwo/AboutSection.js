import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';

const About = () => {
    return (
        <div className="about-area pt-130 pb-100">
                <div className="container">
                   <div className="row">
                       <div className="col-xl-6 col-lg-6 mb-30">
                            <div className="about-2-img">
                                <img src="assets/img/about/02.png" alt="" />
                            </div>
                       </div>
                       <div className="col-xl-6 col-lg-6 mb-10">
                           <div className="faq-wrapper">
                                <div className="section-title mb-25">
                                    <span className="b-sm-left-1"></span>
                                    <span className="b-sm-left-2"></span>
                                    <span className="sub-t-left">About us</span>
                                    <h1>Why Most People Choose Our Business Solutions</h1>
                                    <p>Sedut perspiciatis unde omnis iste natus error sitlupttem accusantium doloremque laudantium totam remap eriaeaque ipsa quae ab illo inventore veritatis </p>
                                </div>
                                <Accordion className="accodion-style--1" preExpanded={'0'}>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Best It Solutions Provider Agency
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium   mque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi artecto beatae dicta sunt explicabo. Nemo enim ipsam voluptatem quia  voluptas  aspernatur aut odit aut fugit</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Professional & Experienced Team Member
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium   mque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi artecto beatae dicta sunt explicabo. Nemo enim ipsam voluptatem quia  voluptas  aspernatur aut odit aut fugit</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Our Main Goal How To Success In IT Business
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium   mque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi artecto beatae dicta sunt explicabo. Nemo enim ipsam voluptatem quia  voluptas  aspernatur aut odit aut fugit</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                We Start Our Journey Since 1990
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium   mque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi artecto beatae dicta sunt explicabo. Nemo enim ipsam voluptatem quia  voluptas  aspernatur aut odit aut fugit</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                           </div>
                       </div>
                   </div>
                </div>
            </div>
    );
}

export default About;