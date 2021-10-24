import React from 'react';
import HomeMain from '../components/Home/HomeMain';

class Index extends React.Component {
    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HomeMain />
            </React.Fragment>
        );
    }
}


export default Index;

