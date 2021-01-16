import React from 'react';
import './Header.css';
import HeaderLink from './HeaderLink/HeaderLink';
import HeaderView from './HeaderView/HeaderView';

const Header = () => {
    return (
        <header className='container-fluid w-100'>
            <HeaderLink/>
            <HeaderView/>
        </header>
    );
};

export default Header;