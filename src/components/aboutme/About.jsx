import Skills from "../skills/Skills"
import './about.css'

const About = () => {
  return (
    <div className="about">
        <h2 className="quote animate__fadeInTopLeft" style={{ fontStyle:"italic" }} >" Every programmer is an author. "</h2>
        <div className="aboutContainer">
            <div className="item text">
              <h3 className="aboutTitle">About Me</h3>
              <p className="aboutText">
                Hello, I am <span style={{ fontWeight:"bold",fontStyle:"italic" }}>Moe Phyu Sin Maung</span> and I am now <span style={{ fontWeight:"bold",fontStyle:"italic" }}> 19 </span> years old. I graduated my high school with four distinctions in 2020 and I am now self studying programming for more than a year. I am a highly motivated Junior/Entry-level Fullstack Web Developer who is passionate about learning and exploring new web technologies with experience in building and maintaining web applications. Proficient in HTML, CSS, JavaScript, PHP with expertise in MVC frameworks like React,Vue,Next,Laravel and familiar in working with MERN tech stack. Seeking to join a dynamic team where I can utilize my skills to help drive the success of the organization. And thanks for scrolling through my portfolio. Have a Nice Day!
              </p>
            </div>
            <div className="item">
              <Skills/>
            </div>
        </div>
    </div>
  )
}

export default About