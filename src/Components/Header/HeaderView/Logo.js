import React from 'react';
import logo from '../../../images/logo.png';
const Logo = () => {
    return (
        <div className="header-logo d-flex align-items-center">
            <img className='w-100' src={logo} alt=""/>
        </div>
    );
};

export default Logo;