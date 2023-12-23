import { Link } from 'react-router-dom'
import './herosection.css'
import profile from '../../images/profile.jpg'
import About from '../aboutme/About'
import Projects from "../projects/Projects"
import Contact from "../contact/Contact"
import { useRef } from 'react'
import Navbar from "../../components/navbar/Navbar"
import Strength from '../strength/Strength'


const HeroSection = () => {
  const contactRef = useRef(null);
  const aboutmeRef = useRef(null);
  const projectRef = useRef(null);
  const strengthRef = useRef(null);
  return (
    <>
     <Navbar contactRef={contactRef} aboutmeRef={aboutmeRef} projectRef={projectRef} strengthRef={strengthRef}/>
      <div className="herosection">
        <div className="item">
          <img src={profile} alt="" className='image'/>
        </div>
        <div className="item">
          <h3 className='heroTitle'>Hello, I am </h3>
          <div class="waviy">
          <span style={{ '--i':'1' }}>M</span>
          <span style={{ '--i':'2' }}>O</span>
          <span style={{ '--i':'3',marginRight:'30px' }}>E</span>
          <span style={{ '--i':'4' }}></span>
          <span style={{ '--i':'5' }}>P</span>
          <span style={{ '--i':'6' }}>H</span>
          <span style={{ '--i':'7' }}>Y</span>
          <span style={{ '--i':'8' }}>U</span>
          <br/>
          <span style={{ '--i':'8' }}> </span>
          <span style={{ '--i':'8' }}>S</span>
          <span style={{ '--i':'9' }}>I</span>
          <span style={{ '--i':'10',marginRight:'30px' }}>N</span>
          <span style={{ '--i':'11' }}> </span>
          <span style={{ '--i':'12' }}>M</span>
          <span style={{ '--i':'13' }}>A</span>
          <span style={{ '--i':'14' }}>U</span>
          <span style={{ '--i':'15' }}>N</span>
          <span style={{ '--i':'16' }}>G</span>
         
        </div>
        <h5 className='heroText'>A Junior Web Developer who is passionate about learning and exploring new web technologies every day.</h5>
        <div className='btnGroup'>
          <button
          onClick={() =>
          contactRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
          })
        }
       className="btn">Contact Me</button>
        </div>
        </div>
    </div>
    <hr />
    {/* about section */}
    <div ref={aboutmeRef}>
    <About/>
    </div>
    <hr />
     {/* strength section */}
     <div ref={strengthRef}>
    <Strength/>
    </div>
    <hr />
    {/* project section */}
    <div ref={projectRef}>
    <Projects/>
    </div>
    <hr />
    {/* contact section  */}
    <div ref={contactRef}>
    <Contact/>
    </div>
    </>
    
  )
}

export default HeroSection