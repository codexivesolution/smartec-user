import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/Image';

const TopHeader = () => {
    return (
        <div className="header-top-area grey-bg d-none d-md-block">
            <div className="container">
                <div className="row">
                    {/* <div className="col-xl-8 col-lg-8 col-md-6 d-flex align-items-center">
                        <div className="header-info">
                            <span><i><FontAwesomeIcon prefix='far' icon={'map-marker-alt'} /></i> 15 Hamston Street, West</span>
                            <span className="header-ph"><i><FontAwesomeIcon prefix='far' icon={'phone'} /></i> 812 (345) 6789</span>
                            <span className="header-en"><i><FontAwesomeIcon prefix='far' icon={'envelope-open'} /></i> support@gmail.com</span>
                        </div>
                    </div> */}
                    <div className="col-12">
                        <div className="header-right f-right ">
                            <div className="header-lang  pos-rel f-right">
                                <div className="lang-icon"> 
                                    <Image src={'/assets/img/icon/flag.png'} height="20" width="30" alt='flag'  />
                                    <a href="">English <i><FontAwesomeIcon prefix='fas' icon={'angle-down'} /></i></a>
                                </div>
                                <ul className="header-lang-list">
                                    <li><a href="#">USA</a></li>
                                    <li><a href="#">UK</a></li>
                                    <li><a href="#">CA</a></li>
                                    <li><a href="#">AU</a></li>
                                </ul>
                            </div>
                            <div className="header-icon f-right">
                                <a href="#"><i><FontAwesomeIcon prefix='fab' icon={'facebook-f'} /></i></a>
                                <a href="#"><i><FontAwesomeIcon prefix='fab' icon={'twitter'} /></i></a>
                                <a href="#"><i><FontAwesomeIcon prefix='fab' icon={'instagram'} /></i></a>
                                <a href="#"><i><FontAwesomeIcon prefix='fab' icon={'youtube'} /></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;