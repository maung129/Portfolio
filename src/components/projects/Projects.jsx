import { useState } from "react";
import {projects} from "../../projects"
import './projects.css'

const Projects = () => {
  const [showDesc,setShowDesc] = useState(false);
  const [pDesc,setPdesc] = useState("");
  const [selected,setSelected] = useState(false);

  const handleClick = (desc)=>{
    setShowDesc(true)
    setSelected(true)
    setPdesc(desc)  
    
  }
  return (
    <div className="projectsContainer">
        <h2 style={{ textAlign:'center',fontSize:'30px',marginBottom:'40px' }}>Some of My Projects & Works</h2>
        <div className="projects">
           <div className="projectDescription">
              {showDesc ? <h3>{pDesc}</h3> : "Click to see project's description"}
           </div>
          <div className="project">
          {
              projects.map((p)=>{
                return (
                  <div className={`projectCard`} onClick={()=>handleClick(p.desc)}>
                    <h3 className="pTitle">{p.title}</h3>
                    <img src={p.img} alt="" className="pImg"/>
                  </div>
                )
              })
            }
          </div>
        </div>
    </div>
  )
}

export default Projects