import React from 'react';
import HeaderContact from './HeaderContact';
import Logo from './Logo';
import './HeaderView.css';

const HeaderView = () => {
    return (
        <div className="header-grid">
            <div className="hg-1 d-flex justify-content-center">
                <Logo/>
            </div>
            <div className="hg-2 align-items-center">
                <div className="c1 d-flex justify-content-center">
                    <HeaderContact contact={"call"}/>
                </div>
            {/* </div> */}
            {/* <div className="hg-3 align-items-center"> */}
                <div className="c2 d-flex justify-content-center">
                    <HeaderContact contact={"email"}/>
                </div>
            </div>
        </div>
    );
};

export default HeaderView;