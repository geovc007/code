import React from 'react';
import Menu from './layout/Menu';
import Content from './layout/Content';
import Footer from './layout/Footer';

function Home() {
    return (
        <div className="App">
            <Menu />
            <Content />
            <Footer/>
        </div>
    );
}

export default Home;