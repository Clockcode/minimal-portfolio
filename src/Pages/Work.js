import React from 'react'
import vn_logo from '../Assets/Images/VN_logo.png'
import '../Styles/work.css'
export default function Work() {
  return (
    <div className="project">
      <div className="title_with_logo">
        <img className="logo" src={vn_logo}></img>
        <h4 className="title"> Viral Nation</h4>
      </div>
      <div className="description">
        {" "}
        I started as a junior UI/UX designer then promoted to lead designer
        thanks to my skills in understanding the business requirements as well
        as{" "}
      </div>
      <div className='project_images'>
        <img className="project_image"></img>
        <img className="project_image"></img>
        <img className="project_image"></img>
      </div>
    </div>
  );
}
