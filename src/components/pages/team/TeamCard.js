import React from 'react'
import user1 from '../../../images/Akanyang.jpg'
import "./Team.css"
const TeamCard = (props) => {
  return (
    <div className="card">
                    <div className="card_body">
                    <img src={user1} class="card_image" />
                    <h3 className="card_title">{"Mr Molefe"}</h3>
                    <p className="card_description">7 years of turoing experience</p>
                    </div>
               
      </div>
  )
}

export default TeamCard