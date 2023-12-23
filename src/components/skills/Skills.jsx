import './skills.css'
import react from "../../images/logo192.png"
import vue from "../../images/vue-transparent-removebg.png"
import php from "../../images/php-removebg-preview.png"
import node from "../../images/node.png"
import laravel from "../../images/laravel-removebg-preview.png"
import html from "../../images/html.png"
import css from "../../images/css-removebg-preview.png"
import tailwind from "../../images/tailwind-removebg-preview.png"
import next from "../../images/nextjs-removebg-preview.png"

const Skills = () => {
  return (
   <div style={{ height:'100%',maxWidth:'90%',marginLeft:'70px' }}>
   <h2 style={{ marginLeft:'50px',fontSize:'34px' }}>Trained Languages & Skills</h2>
   <div className="sphere" ><img src={react} alt=""/></div>
   <div className="sphere"><img src={vue} alt=""/></div>
   <div className="sphere"><img src={php} alt=""/></div>
   <div className="sphere"><img src={node} alt=""/></div>
   <div className="sphere"><img src={laravel} alt=""/></div>
   <div className="sphere"><img src={html} alt=""/></div>
   <div className="sphere"><img src={css} alt=""/></div>
    <div className="sphere"><img src={tailwind} alt=""/></div>
    <div className="sphere"><img src={next} alt=""/></div>
   
     {/* <div class="scene">
  <div class="sphere">
    <div class="hemisphere">
      <div class="face"><img src={react} alt=""/></div>
      <div class="face"><img src={react} alt=""/></div>
      <div class="face"></div>
      <div class="face"></div>
      <div class="face"></div>
      <div class="face"></div>
      <div class="face"></div>
      <div class="face"></div>
      <div class="face"></div>
      <div class="face"></div>
    </div>
    <div class="hemisphere">
      <div class="face"><img src={react} alt=""/></div>
      <div class="face"></div>
      <div class="face"></div>
      <div class="face"></div>
      <div class="face"><img src={react} alt=""/></div>
      <div class="face"></div>
      <div class="face"></div>
      <div class="face"></div>
      <div class="face"></div>
      <div class="face"></div>
    </div>
  </div>
</div> */}
   </div>
  )
}

export default Skills