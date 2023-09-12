import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import './Layout.css';

const Layout = (props) => {
    return (
        <section className="Layout">
            <Header />
            
            {props.children}
            <Footer />
        
        </section>
    );
}

export default Layout;
