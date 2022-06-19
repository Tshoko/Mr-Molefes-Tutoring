import React from 'react'
import john from "../../../images/about.jpg"
import './About.css'
import './AboutCard.css'

import { GiSpellBook  } from "react-icons/gi";

const About = () => {
    return (
        <div className='about' id='about'>
            <h2 className='about-header'>About</h2>
            <div className='container'>
            <img className="about-img" src={john} alt='about-img'/>
            <div className='about_card_list'>
                <AboutCard title="Matric Upgrading"
                    description="Contrary to popular belief, Lorem Ipsum is not simply random text."
                />
                <AboutCard title="Extra Classes For High Schoolers"
                    description="Baked Cod with Vegetables. 30 minute meal!"
                />
                <AboutCard title="Online Help Sessions"
                    description="Baked Cod with Vegetables. 30 minute meal!"
                />
            </div>
            
            </div>
        </div>
    )
}

const AboutCard =(props)=>{
    const style = { color: "1eb2a6", fontSize: "5em" }
    return (
        <div className="about_card">
        <GiSpellBook style={style} className='about_card_icon'/>
          <div className="about_card__body">
            <h2 className="about_card__title">{props.title}</h2>
            <p className="about_card__description">{props.description}</p>
          </div>
          
        </div>
      );
}

export default About
