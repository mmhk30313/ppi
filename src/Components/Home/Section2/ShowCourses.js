import React from 'react';
const ShowCourses = ({courseData}) => {
    console.log(courseData);
    return (
        <div className='col-md-3 card-deck'>
            <div className="card d-flex justify-content-center text-center p-2">
                <img className="rounded pb-2" src={courseData.img} alt=""/>
                <h5>{courseData.sub}</h5>
                <p className="course-des">{courseData.description}</p>

            </div>
        </div>
    );
};

export default ShowCourses;