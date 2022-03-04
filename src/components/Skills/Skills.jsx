import "./skills.css"
import Html from "../../img/html.jpg"
import Css from "../../img/css.jpg"
import React from "../../img/react.jpg"
import Javascript from "../../img/Js.png"


const Skills = () => {
  return (
    <div className="skills" >
        <div className="skill-container">
            <div className="cardone">
                <img src={Html} alt="Html card" className="img-one"/>
                <p className="skill-textone">HTML</p>
            </div>
            <div className="cardtwo">
            <img src={Css} alt="Css card" className="img-two"/>
                <p className="skill-texttwo">CSS</p>
            </div>
            <div className="cardthree">
            <img src={React} alt="React card" className="img-three"/>
                <p className="skill-textthree">REACT</p>
            </div>
            <div className="cardtfour">
            <img src={Javascript} alt="Javascript card" className="img-four"/>
                <p className="skill-textfour">Javascript</p>
            </div>
            
        </div>
    </div>
  )
}

export default Skills