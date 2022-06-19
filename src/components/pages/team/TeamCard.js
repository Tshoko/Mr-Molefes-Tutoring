import React from 'react'
import user1 from '../../../images/Akanyang.jpg'
const TeamCard = (props) => {
  return (
    <div className="card">
                    <div className="card__body">
                    <img src={user1} class="card__image" />
                    <h2 className="card__title">{"Mr Molefe"}</h2>
                    <p className="card__description">7 years of turoing experience</p>
                    </div>
               
      </div>
  )
}

export default TeamCard