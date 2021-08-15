import React from 'react';
import Menu from './layout/Menu';
import ContentRegister from './layout/ContentRegister';
import Footer from './layout/Footer';

function Register() {
    return (
        <div className="App">
            <Menu />
            <ContentRegister />
            {/*<Footer />*/}
        </div>
    );
}

export default Register;