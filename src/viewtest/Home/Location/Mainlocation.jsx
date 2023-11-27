import React from 'react';
import Header from '../Header';
import Banner from '../Banner';
import Aboutme from '../Aboutme';
import Blog from '../Blog';
import Footer from '../Footer';

function Mainlocation() {
    return (
        <>
            <Header />
            <Banner />
            <div className='mainlocation'>

            </div>
            <Aboutme />
            <Blog />
            <Footer />

        </>
    )
}

export default Mainlocation
