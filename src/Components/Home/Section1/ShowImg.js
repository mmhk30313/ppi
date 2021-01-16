import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ShowImg = ({image}) => {
    return (
        <div>
            <Carousel.Item className="course-img">
                <img
                className="d-block w-100 h-25"
                src={image}
                alt="First slide"
                />
            </Carousel.Item>
        </div>
    );
};

export default ShowImg;