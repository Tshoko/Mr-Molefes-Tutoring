import React from 'react'
import john from "../../../images/about.jpg"
import './Classes.css'
import './ClassesCard.css'

import { GiSpellBook  } from "react-icons/gi";

const Classes = () => {
    return (
        <div className='classes' id='classes'>
        <div className='container'>
            <h2>Classes</h2>
            
            <span className='line'></span>
            <div className='content'>
                <div className='card'>
                    <p>
                    If you're visiting this page, you're likely here because you're searching for a random sentence. Sometimes a random word just isn't enough, and that is where the random sentence generator comes into play. By inputting the desired number, you can make a list of as many random sentences as you want or need. Producing random sentences can be helpful in a number of different ways.
                    </p>
                    <p><span>Edwardo Weber</span></p>
                    <p>Previous grade 11 student</p>
                </div>
            </div>
        </div>
    </div>
    )
}

const ClassesCard =(props)=>{
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

export default Classes
