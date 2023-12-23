import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import HeroSection from "./components/herosection/HeroSection"
import About from "./components/aboutme/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Skills from "./components/skills/Skills"
import Projects from "./components/projects/Projects"


const App = () => {
 
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HeroSection/>}></Route>
            <Route path="/aboutme" element={<About/>}></Route>
            <Route path="/skills" element={<Skills/>}></Route>
            <Route path="/projects" element={<Projects/>}></Route>
            <Route path="/contactme" element={<Contact/>}></Route>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default App