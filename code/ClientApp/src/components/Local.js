import React from 'react';
import Menu from './layout/Menu';
import ContentLocal from './layout/ContentLocal';
import Footer from './layout/Footer';

function Local() {
    return (
        <div className="App">
            <Menu />
            <ContentLocal />
            <Footer />
        </div>
    );
}

export default Local;