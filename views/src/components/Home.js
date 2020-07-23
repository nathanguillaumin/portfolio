import React, { Component } from 'react';
import Header from './Header';
import Intro from './Intro';

export class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <Intro />
            </>
        )
    }
}

export default Home
