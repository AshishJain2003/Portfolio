// import React, {useRef} from 'react'
// import { FaBars, FaFacebookF, FaLinkedinIn, FaDribbble , FaGithub   } from "react-icons/fa";
// import { FaDownload, FaXmark } from "react-icons/fa6";

// const Navbar = () => {
//   const navRef = useRef();

//   const showNavBar = () => {
//     navRef.current.classList.toggle('responsive_nav');
//   }

//   return (
//     <div className="container">
//       <div className = "header">
//         <div className = "logo">
//           <img src= "images/logo-primary.png" alt= ""></img>
//           <a href ="\#" className ="mail">jainshanu027@gmail.com</a>
//         </div>
//         <div className ="links">
//           <div className ="navbar" ref={navRef}>
//             <a href="\#">Services</a>
//             <a href="\#">Works</a>
//             <a href="\#">Resume</a>
//             <a href="\#">Skills</a>
//             <a href="\#">Testimonials</a>
//             <a href="\#">Contact</a>
//             <span id ='closeBtn' onClick={showNavBar}><FaXmark /></span>
//           </div>
//           <button>Hire Me!</button>
//           <span id ='menuBtn' onClick={showNavBar}><FaBars /></span>
//         </div>
//       </div>

//       <div className='home'>
//         <div className='content'>
//           <h4>I am Ashish</h4>
//           <h1>Web Developer + <br></br> UI/UX Designer</h1>
//           <p>Duis esse et culpa deserunt reprehenderit anim. 
//             Mollit nostrud sint veniam minim velit. 
//             Duis nisi culpa adipisicing esse dolor reprehenderit irure exercitation qui enim eu mollit deserunt exercitation.
//           </p>
//           <div className='buttons'>
//             <button>Download CV<FaDownload /></button>
//             <div className='social'>
//               <a href='\#'><FaFacebookF /></a>
//               <a href='\#'><FaLinkedinIn /></a>
//               <a href='\#'><FaDribbble   /></a>
//               <a href='\#'><FaGithub  /></a>
//             </div>
//           </div>
//         </div>
//         <div className='image'>
//           <img src='images/ashish.jpg' alt='aj'></img>
//         </div>
//       </div>
//     </div>

    
//   )
// }

// export default Navbar


import React, { useRef, useState, useEffect } from 'react';
import { FaBars, FaFacebookF, FaLinkedinIn, FaDribbble, FaGithub } from "react-icons/fa";
import { FaDownload, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const navRef = useRef();
  const [showNav, setShowNav] = useState(false);

  const showNavBar = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && showNav) {
        setShowNav(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showNav]);

  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src="images/logo-primary.png" alt=""></img>
          {/* <a href="#" className="mail">jainshanu027@gmail.com</a> */}
        </div>
        <div className="links">
          <div className={`navbar ${showNav ? 'responsive_nav' : ''}`} ref={navRef}>
            {/* <a href="#">Home</a> */}
            <a href="#works">Works</a>
            <a href="#qualify">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
            {/* <a href="#">Contact</a> */}
            <span id='closeBtn' onClick={showNavBar}><FaXmark /></span>
          </div>
          {/* <button>Hire Me!</button> */}
          <span id='menuBtn' onClick={showNavBar}><FaBars /></span>
        </div>
      </div>

      <div className='home'>
        <div className='content'>
          <h4>I am Ashish</h4>
          <h1>Web Developer + <br></br> UI/UX Designer</h1>
          <p>Hi, I am a Fourth Year Student pursuing Bachelor's in Computer Science & Engineering @ Rajasthan Technical University, Kota.</p>
          <div className='buttons'>
            <a href='https://drive.google.com/file/d/1f2JDhCzttLdmmskXsJ-35lgmBK7_z6r7/view?usp=drive_link' target='_blank' rel='noopener noreferrer'>
              <button>View Resume<FaDownload /></button>
            </a>
            <div className='social'>
              {/* <a href='#'><FaFacebookF /></a> */}
              <a href='https://www.linkedin.com/in/ashish-jain-19593423a/' target='_blank' rel='noopener noreferrer'><FaLinkedinIn /></a>
              <a href='https://dribbble.com/AshishJain2003' target='_blank' rel='noopener noreferrer'><FaDribbble /></a>
              <a href='https://github.com/AshishJain2003' target='_blank' rel='noopener noreferrer'><FaGithub /></a>
            </div>
          </div>
        </div>
        <div className='image'>
          <img src='images/ashish.jpg' alt='aj'></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;