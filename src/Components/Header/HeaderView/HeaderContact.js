import React from 'react';

const HeaderContact = (props) => {
    const contact = props.contact;
    // console.log(contact);
    return (
        <div className=' align-items-center mt-3'>
            {
                contact==="call" && <div className="call align-items-center">
                    <div className="contact-color cc-1 d-flex ml-2">
                        {/* <div className="contact-color"> */}
                            <svg className="contact-logo" xmlns="http://www.w3.org/2000/svg" width="34.812" height="34.812" viewBox="0 0 34.812 34.812">
                                <path id="Icon_material-call" data-name="Icon material-call" d="M11.5,19.566A29.3,29.3,0,0,0,24.246,32.311L28.5,28.056a1.923,1.923,0,0,1,1.973-.464,22.061,22.061,0,0,0,6.9,1.1,1.94,1.94,0,0,1,1.934,1.934v6.75a1.94,1.94,0,0,1-1.934,1.934A32.875,32.875,0,0,1,4.5,6.434,1.94,1.94,0,0,1,6.434,4.5H13.2a1.94,1.94,0,0,1,1.934,1.934,21.971,21.971,0,0,0,1.1,6.9,1.941,1.941,0,0,1-.483,1.973Z" transform="translate(-4.5 -4.5)" fill="#fff"/>
                            </svg>
                        {/* </div> */}
                    </div>
                    <div className="contact-line align-items-center my-auto mt-1 ml-1 mx-2 cc-2">
                        <h6>+880177775877</h6>
                        <h6>+880152110858</h6>
                    </div>
                </div>
            }
            {
                contact==="email" && <div className="email align-items-center">
                    <div className="contact-color ce-1 d-flex mr-1">
                        <svg className="contact-logo" xmlns="http://www.w3.org/2000/svg" width="34.812" height="34.812" viewBox="0 0 40.501 27.339">
                            <path id="Icon_zocial-email" data-name="Icon zocial-email" d="M.072,28.986V6.489q0-.039.117-.742l13.24,11.326L.228,29.767a3.31,3.31,0,0,1-.156-.781ZM1.83,4.185a1.683,1.683,0,0,1,.664-.117H38.152a2.212,2.212,0,0,1,.7.117L25.576,15.55l-1.758,1.406-3.476,2.851-3.476-2.851L15.109,15.55Zm.039,27.1L15.187,18.519,20.342,22.7,25.5,18.519,38.816,31.29a1.875,1.875,0,0,1-.664.117H2.493a1.769,1.769,0,0,1-.625-.117ZM27.255,17.074l13.2-11.326a2.331,2.331,0,0,1,.117.742v22.5a2.993,2.993,0,0,1-.117.781Z" transform="translate(-0.072 -4.068)" fill="#fff"/>
                        </svg>
                    </div>
                    <div className="contact-line align-items-center my-auto mt-1 ml-2 ce-2">
                        <h6>enroll@projuktirpathshala.com</h6>
                        <h6>enroll@projuktirpathshala.com</h6>
                    </div>
                </div>
            }
        </div>
        // <div className='d-flex justify-content-end align-items-center mt-3'>
        //     {
        //         contact==="call" && <div className="call row">
        //             <div className="col contact-color d-flex justify-content-center">
        //                 {/* <div className="contact-color"> */}
        //                     <svg xmlns="http://www.w3.org/2000/svg" width="34.812" height="30.812" viewBox="0 0 34.812 34.812">
        //                         <path id="Icon_material-call" data-name="Icon material-call" d="M11.5,19.566A29.3,29.3,0,0,0,24.246,32.311L28.5,28.056a1.923,1.923,0,0,1,1.973-.464,22.061,22.061,0,0,0,6.9,1.1,1.94,1.94,0,0,1,1.934,1.934v6.75a1.94,1.94,0,0,1-1.934,1.934A32.875,32.875,0,0,1,4.5,6.434,1.94,1.94,0,0,1,6.434,4.5H13.2a1.94,1.94,0,0,1,1.934,1.934,21.971,21.971,0,0,0,1.1,6.9,1.941,1.941,0,0,1-.483,1.973Z" transform="translate(-4.5 -4.5)" fill="#fff"/>
        //                     </svg>
        //                 {/* </div> */}
        //             </div>
        //             <div className="col  contact-line d-flex flex-column align-items-center my-auto">
        //                 <h6>+880177775877</h6>
        //                 <h6>+880152110858</h6>
        //             </div>
        //         </div>
        //     }
        //     {
        //         contact==="email" && <div className="email row">
        //             <div className="col contact-color d-flex justify-content-center w-25 mx-auto">
        //                 <svg xmlns="http://www.w3.org/2000/svg" width="30.812" height="34.812" viewBox="0 0 40.501 27.339">
        //                     <path id="Icon_zocial-email" data-name="Icon zocial-email" d="M.072,28.986V6.489q0-.039.117-.742l13.24,11.326L.228,29.767a3.31,3.31,0,0,1-.156-.781ZM1.83,4.185a1.683,1.683,0,0,1,.664-.117H38.152a2.212,2.212,0,0,1,.7.117L25.576,15.55l-1.758,1.406-3.476,2.851-3.476-2.851L15.109,15.55Zm.039,27.1L15.187,18.519,20.342,22.7,25.5,18.519,38.816,31.29a1.875,1.875,0,0,1-.664.117H2.493a1.769,1.769,0,0,1-.625-.117ZM27.255,17.074l13.2-11.326a2.331,2.331,0,0,1,.117.742v22.5a2.993,2.993,0,0,1-.117.781Z" transform="translate(-0.072 -4.068)" fill="#fff"/>
        //                 </svg>
        //             </div>
        //             <div className="col contact-line d-flex flex-column align-items-center my-auto">
        //                 <h6>enroll@projuktirpathshala.com</h6>
        //                 <h6>enroll@projuktirpathshala.com</h6>
        //             </div>
        //         </div>
        //     }
        // </div>
    );
};

export default HeaderContact;