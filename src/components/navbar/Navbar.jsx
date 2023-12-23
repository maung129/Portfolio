import { Link } from "react-router-dom"
import './navbar.css'

const Navbar = ({
  contactRef,
  aboutmeRef,
  projectRef,
  strengthRef
}) => {
  return (
    <div className="navContainer">
        <div className="nav">
            <div className="navbar">
                <Link to="/" className="title">Home</Link>
                <span onClick={() =>
                aboutmeRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
                })} className="title">About Me</span>
                 <span onClick={() =>
                strengthRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
                })} className="title">Strength</span>
                 <span onClick={() =>
                projectRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
                })} className="title">Projects</span>
                 <span onClick={() =>
                contactRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
                })} className="title">Contact</span>
            </div>
            {/* <div className="nameBall">MM <i class="fa-regular fa-moon"></i> <i class="fa-solid fa-sun"></i></div> */}
            <div className="socialLinks">
                <a href="https://twitter.com/maung1373" target="_blank"  rel="noreferrer" className="link"><i class="fa-brands fa-x-twitter" style={{ color: "#ffffff" }}></i></a>
                <a href="https://twitter.com/maung1373" className="link"><i class="fa-brands fa-facebook" style={{ color: "#ffffff" }}></i></a>
                <a href="https://twitter.com/maung1373" className="link"><i class="fa-brands fa-github" style={{ color: "#ffffff" }}></i></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar