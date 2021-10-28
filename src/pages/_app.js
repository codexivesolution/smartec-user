import './index.scss';
import App from 'next/app';
import { Provider } from 'react-redux';
import '../helper/i18n/index'
import React, { useEffect, useState } from 'react';
import withRedux from "next-redux-wrapper";
import store from '../redux/store';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';


class MyApp extends App {

    constructor(props) {
        super(props);
        this.state = { IsLoading: true };
    }

    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps: pageProps };
    }



    render() {
        const { Component, pageProps, store } = this.props;


        setTimeout(() => {
            this.setState({
                IsLoading: false
            })
        }, 5);


        return (
            <Provider store={store}>
                {!this.state.IsLoading &&
                    <>
                        <Header />
                        <Component {...pageProps} />
                        <Footer />
                    </>
                }
            </Provider>
        );
    }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);

