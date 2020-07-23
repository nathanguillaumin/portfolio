import React, { Component } from 'react';
import Header from './Header';
import Intro from './Intro';
import Technologies from './Technologies';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

export class Home extends Component {
  render () {
    return (
      <>
        <Header />
        <Intro />
        {/* <Technologies />
        <Projects /> */}
        <Contact />
        <Footer />
      </>
    );
  }
}

export default Home;
