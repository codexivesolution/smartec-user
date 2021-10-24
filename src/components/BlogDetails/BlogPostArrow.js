import React, { Component } from 'react';

class BlogPostArrow extends Component {

    render() {
        return (
            <main>
                <div className="row">
                    <div className="col-12">
                        <div className="navigation-border pt-50 mt-40"></div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5">
                        <div className="bakix-navigation b-next-post text-left mb-30">
                            <span><a href="#">Next Post</a></span>
                            <h4><a href="#">Tips on Minimalist</a></h4>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 ">
                        <div className="bakix-filter text-left text-md-center mb-30">
                            <a href="#"><img src="assets/img/icon/filter.png" alt="" /></a>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5">
                        <div className="bakix-navigation b-next-post text-left text-md-right  mb-30">
                            <span><a href="#">Next Post</a></span>
                            <h4><a href="#">Tips on Minimalist</a></h4>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}


export default BlogPostArrow;

