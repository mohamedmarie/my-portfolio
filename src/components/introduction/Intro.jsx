import "./Intro.css"
import Generic from "../../img/generic.png"

const Intro = () => {
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="hello">Hello My Name is</h2>
                <h1 className="i-name">Mohamed Marie</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Full Stack Web Developer </div>
                        <div className="i-title-item">Digital Marketing </div>
                        <div className="i-title-item">Business Administration Graduate</div>
                    </div>
                </div>
                <p className="i-description">
                    I am an aspiring web developer, currently in process of getting 
                    a full stack web developer degree from Robertson College
                </p>
            </div>
            
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={Generic} alt="a generic photo" className="i-img" />
        </div>
    </div>
  )
}

export default Intro