import React, { Component } from 'react';
import SliderStyleTwo from '../Elements/Slider/SliderStyleTwo';
import AboutSection from './AboutSection';
import ServiceSection from './ServiceSection';
import ProjectSection from './ProjectSection';
import WorkSection from './WorkSection';
import ClientSection from './ClientSection';
import SkillsSection from './SkillsSection';
import ContactSection from './ContactSection';
import BlogSection from './BlogSection';
import CounterStyleTwo from '../Elements/Counter/CounterStyleTwo';


class HomeTwoMain extends Component {

    render() {

        return (
            <main>
                {/* slider-start */}
	            <SliderStyleTwo />
	            {/* slider-start */}

                {/* about-start */}
	            <AboutSection />
	            {/* about-End */}

                {/* counter-start */}
	            <CounterStyleTwo />
	            {/* counter-End */}

                {/* service-start */}
	            <ServiceSection />
	            {/* service-End */}

                {/* project-start */}
                <ProjectSection />
                {/* project-End */}

                {/* working-start */}
                <WorkSection />
                {/* working-End */}

                {/* client-start */}
                <ClientSection />
                {/* client-End */}

                {/* skill-start */}
                <SkillsSection />
                {/* skill-End */}

                {/* contact-start */}
                <ContactSection />
                {/* contact-End */}

                {/* Blog-start */}
                <BlogSection />
                {/* Blog-End */}
        	</main>
        );
    }
}

export default HomeTwoMain;