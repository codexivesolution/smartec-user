import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TabDefault from '../Elements/Tab/TabDefault';

class CaseOne extends Component {

    render() {

        return (
            <main>
            {/* <!-- latest-gallery-area --> */}
            <TabDefault />
            {/* <!-- gallery-area-end --> */}

            {/* <!-- cta-area-start --> */}
                <div className="cta-area pt-125 pb-95" style={{ 'background-image': 'url(assets/img/bg/bg-2.jpg)'}}>
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
            {/* <!-- cta-area-end --> */}
            </main>
        );
    }
}

export default CaseOne;