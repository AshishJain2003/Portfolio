import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { FaArrowRight, FaEdit, FaGraduationCap, FaPhoneVolume, FaEnvelope } from "react-icons/fa";


const Home = () => {
  // const [experienceCount, setExperienceCount] = useState(0);
  // const [projectsCount, setprojectsCount] = useState(0);
  // const [clientsCount, setclientsCount] = useState(0);

  // useEffect(() => {
  //   const experienceInterval = setInterval(() => {
  //     if (experienceCount < 14) {
  //       setExperienceCount(experienceCount + 1);
  //     }
  //   }, 15);
  //   const projectsInterval = setInterval(() => {
  //     if (projectsCount < 50) {
  //       setprojectsCount(projectsCount + 1);
  //     }
  //   }, 13);
  //   const clientsInterval = setInterval(() => {
  //     if (clientsCount < 5) {
  //       setclientsCount(prevCount => parseFloat((prevCount + Math.random() * 0.1).toFixed(1)));
  //     }
  //   }, 10);

  //   return () => {
  //     clearInterval(experienceInterval);
  //     clearInterval(projectsInterval);
  //     clearInterval(clientsInterval);
  //   }
  // }, [experienceCount, projectsCount, clientsCount]);

  const [activeTab, setActiveTab] = useState('All');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const worksData = [
    {
      id: 1, title: "Sneakers Store", category: "Apps", image: "images/portfolio-1.jpg",
      description: "lorem ipsum dolor site amet.",
      link: "https://ashishjain2003.github.io/Sneakers-Store/"
    },
    {
      id: 2, title: "Simon Says", category: "Apps", image: "images/portfolio-2.jpg",
      description: "lorem ipsum dolor site amet.",
      link: "https://ashishjain2003.github.io/Simon-Says/"
    },
  ];

  return (
    <div>
      <Navbar />

      {/* <div className='services'>
        <div className='title'>
          <h2>My Quality Services</h2>
          <p>Et esse laborum excepteur laborum. Pariatur cillum dolore laboris tempor.
            Aute ea incididunt aliquip ea mollit aute duis id officia commodo exercitation adipisicing.</p>
        </div>
        <div className='service-row'>
          <div className='service-col'>
            <div className='topic'>
              <div className='num'>01</div>
              <h3>Branding Design</h3>
            </div>
            <p className='desc'>Dolor labore eu magna tempor.
              Consequat nostrud sunt sit id duis labore Lorem ullamco sint officia dolor occaecat voluptate aliquip. Exercitation quis sunt officia nulla est ipsum magna consequat.</p>
            <span><FaArrowRight /></span>
          </div>
          <div className='service-col'>
            <div className='topic'>
              <div className='num'>02</div>
              <h3>UI/UX</h3>
            </div>
            <p className='desc'>Dolor labore eu magna tempor.
              Consequat nostrud sunt sit id duis labore Lorem ullamco sint officia dolor occaecat voluptate aliquip. Exercitation quis sunt officia nulla est ipsum magna consequat.</p>
            <span><FaArrowRight /></span>
          </div>
          <div className='service-col'>
            <div className='topic'>
              <div className='num'>03</div>
              <h3>Web Design</h3>
            </div>
            <p className='desc'>Dolor labore eu magna tempor.
              Consequat nostrud sunt sit id duis labore Lorem ullamco sint officia dolor occaecat voluptate aliquip. Exercitation quis sunt officia nulla est ipsum magna consequat.</p>
            <span><FaArrowRight /></span>
          </div>
          <div className='service-col'>
            <div className='topic'>
              <div className='num'>04</div>
              <h3>App Design</h3>
            </div>
            <p className='desc'>Dolor labore eu magna tempor.
              Consequat nostrud sunt sit id duis labore Lorem ullamco sint officia dolor occaecat voluptate aliquip. Exercitation quis sunt officia nulla est ipsum magna consequat.</p>
            <span><FaArrowRight /></span>
          </div>
        </div>
      </div> */}

      <section className='works' id='works'>
        <div className='title'>
          <h2>Recent Works</h2>
        </div>
        <div className='buttons'>
        </div>
        <div className='content'>
          {worksData.map((work) => (
            (activeTab === 'All' || activeTab === work.category) && (
              <a href={work.link} target='_blank' rel='noopener noreferrer' key={work.id}>
                <div className='image' key={work.id}>
                  <img src={work.image} alt={work.title}></img>
                  <div className='details'>
                    <div className='topic'>
                      <h3>{work.title}</h3>
                      <p>{work.title}</p>
                    </div>
                    <span><FaArrowRight /></span>
                  </div>
                </div>
              </a>
            )
          ))}
        </div>
      </section>

      <section className='qualify' id='qualify'>
        <div className='qualify-one'>
          <div className='topic'>
            <span><FaEdit /></span>
            <h3>My Experience</h3>
          </div>
          <div className='box'>
            {/* <div className='year'>2022-Present</div> */}
            <h4>Endearing Design Studios Pvt. Ltd.</h4>
            <p>Web Developer & UI/UX Designer</p>
          </div>
          <div className='box'>
            {/* <div className='year'>2022-Precent</div> */}
            <h4>Rajasthan Rajya Vidyut Utpadan Nigam Limited</h4>
            <p>Internship Trainee</p>
          </div>
        </div>
        <div className='qualify-two'>
          <div className='topic'>
            <span><FaGraduationCap /></span>
            <h3>My Education</h3>
          </div>
          <div className='box'>
            {/* <div className='year'>2021-Present</div> */}
            <h4>Rajasthan Technical University</h4>
            <p>B.Tech in Computer Science & Engg.</p>
          </div>
          <div className='box'>
            {/* <div className='year'>2006-2021</div> */}
            <h4>Global Public School</h4>
            <p>Secondary and Senior Secondary Education</p>
          </div>
        </div>
      </section>

      <section className='skills' id='skills'>
        <div className='title'>
          <h2>My Skills</h2>
        </div>
        <div className='skill-row'>
          <div className='box'>
            <div className='image'>
              <img src='images/java.png'></img>
            </div>
            <div className='tool'>Java</div>
          </div>
          <div className='box'>
            <div className='image'>
              <img src='images/figma.png'></img>
            </div>
            <div className='tool'>Figma</div>
          </div>
          <div className='box'>
            <div className='image'>
              <img src='images/html.png'></img>
            </div>
            <div className='tool'>HTML5</div>
          </div>
          <div className='box'>
            <div className='image'>
              <img src='images/css.png'></img>
            </div>
            <div className='tool'>CSS3</div>
          </div>
          <div className='box'>
            <div className='image'>
              <img src='images/js.png'></img>
            </div>
            <div className='tool'>JavaScript</div>
          </div>
          <div className='box'>
            <div className='image'>
              <img src='images/react.png'></img>
            </div>
            <div className='tool'>React.js</div>
          </div>
          <div className='box'>
            <div className='image'>
              <img src='images/node.png'></img>
            </div>
            <div className='tool'>Node.js</div>
          </div>
          <div className='box'>
            <div className='image'>
              <img src='images/express.png'></img>
            </div>
            <div className='tool'>Express.js</div>
          </div>
          <div className='box'>
            <div className='image'>
              <img src='images/mongodb.png'></img>
            </div>
            <div className='tool'>MongoDB</div>
          </div>
          <div className='box'>
            <div className='image'>
              <img src='images/sql.png'></img>
            </div>
            <div className='tool'>MySQL</div>
          </div>
          <div className='box'>
            <div className='image'>
              <img src='images/git.png'></img>
            </div>
            <div className='tool'>Git</div>
          </div>
          <div className='box'>
            <div className='image'>
              <img src='images/github.png'></img>
            </div>
            <div className='tool'>GitHub</div>
          </div>
          <div className='box'>
            <div className='image'>
              <img src='images/bootstrap.png'></img>
            </div>
            <div className='tool'>Bootstrap</div>
          </div>
        </div>
      </section>

      <section className='contact' id='contact'>
        <form action=''>
          <div className='title'>
            <h2>Get In Touch</h2>
          </div>
          <div className='box'>
            <div className='input-box'>
              <input type='text' placeholder='First Name'></input>
            </div>
            <div className='input-box'>
              <input type='text' placeholder='Last Name'></input>
            </div>
          </div>
          <div className='box'>
            <div className='input-box'>
              <input type='email' placeholder='Email Address'></input>
            </div>
            <div className='input-box'>
              <input type='text' placeholder='Phone Number'></input>
            </div>
          </div>
          <div className='text-box'>
            <textarea rows={5} placeholder='Message'></textarea>
          </div>

          <button>Send Message</button>
        </form>

        <div className='details'>
          <div className='del-col'>
            <i><FaPhoneVolume /></i>
            <div className='label'>
              <p>Phone</p>
              <h6>+91 9413276337</h6>
            </div>
          </div>
          <div className='del-col'>
            <i><FaEnvelope /></i>
            <div className='label'>
              <p>Email</p>
              <h6>jainshanu027@gmail.com</h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home