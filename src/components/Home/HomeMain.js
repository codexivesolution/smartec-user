import React, { Component } from 'react';
import SliderDefault from '../Elements/Slider/SliderDefault';
import About from './AboutSection';
import Service from './ServiceSection';
import Team from './TeamSection';
import Cta from './CtaSection';
import Project from './ProjectSection';
import Testimonial from './TestimonialSection';
import Video from './VideoSection';
import Contact from './ContactSection';
import Blog from './BlogSection';
import Brand from '../Common/Brand'
import Newsletter from '../Common/Newsletter';
import CounterDefault from '../Elements/Counter/CounterDefault';

class HomeMain extends Component {

    render() {

        return (
            <main>
	            {/* slider-start */}
	            <SliderDefault />
				{/* slider-start */}

	            {/* about-area-start */}
	            <About />
	            {/* about-area-end */}

	            {/* services-area-start */}
	            <Service />
	            {/* services-area-end */}

	            {/* team-area-start */}
				<Team />
	            {/* team-area-end */}

	            {/* cta-area-start */}
	            <Cta />
	            {/* cta-area-end */}

	            {/* project-area-start */}
	            <Project />
	            {/* project-area-end */}

	            {/* testmonial-area-start */}
	            <Testimonial />
	            {/* testmonial-area-end */}

	            {/* counter-area-start */}
	            <CounterDefault />
	            {/* counter-area-end */}

	            {/* video-area-start */}
	            <Video />
	            {/* video-area-end */}

	            {/* contact-area-start */}
	            <Contact />
	            {/* contact-area-end */}

	            {/* blog-area-start */}
	            <Blog />
	            {/* blog-area-end */}

				{/* brand-area-start */}
				<Brand />
	            {/* brand-area-end */}

	            {/* newsletter-area-start */}
	            <Newsletter />
	            {/* newsletter-area-end */}
        	</main>
        );
    }
}

export default HomeMain;