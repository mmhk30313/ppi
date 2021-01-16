import React from 'react';
import './Section2.css';
import ShowCourses from './ShowCourses';
const data = [
    {
        id: 1,
        sub: "WEB DESIGN",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        img: "https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_450,h_270/https://www.projuktirpathshalabd.com/wp-content/uploads/2019/11/website-design-images.jpg",
        totalClass: 30, //number of class
        discount: 50, //%
        classDuration: 5, //month
    },
    {
        id: 2,
        sub: "GRAPHICS DESIGN",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        img: "https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_450,h_270/https://www.projuktirpathshalabd.com/wp-content/uploads/2019/11/select-1.jpg",
        totalClass: 30, //number of class
        discount: 50, //%
        classDuration: 5, //month
    },{
        id: 3,
        sub: "WEB DEVELOPMENT",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        img: "https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_450,h_270/https://www.projuktirpathshalabd.com/wp-content/uploads/2019/11/learn-web-development-920x470.jpg",
        totalClass: 30, //number of class
        discount: 50, //%
        classDuration: 5, //month
    }
]
const Section2 = () => {
    return (
        <div className="jumbotron py-4">
            <h1 className='text-center'>Welcome to <span style={{color: "#07A7D8"}}>projuktirpathshala</span></h1>
            <p className="welcome-paragraph text-center my-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <h1 className='courses text-center'>OUR COURSES</h1>
            <div className=" row d-flex justify-content-center">
                {
                    data.map(d => <ShowCourses key={d.id} courseData={d} />)
                }
            </div>
        </div>
    );
};

export default Section2;