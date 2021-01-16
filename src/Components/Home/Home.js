import React from 'react';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';

const Home = () => {
    // const number = [1, 2, 3, 5, 6, 6, 7, 7, 8, 9, 9, 10, 1, 2, 3];
    return (
        <div className="section">
            <div className=' bg-light p-5'>
                <Section1 />
            </div>
            <Section2 />
        </div>  
    );
};

export default Home;