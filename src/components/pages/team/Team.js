import React from 'react'

import './Team.css'
import TeamCard from './TeamCard'

const Team = () => {
    return (
        <div className='team' id='team'>
            <div className='container'>
                <h2>Team</h2>
                <span className='line'></span>
                <div className='content'>
                <TeamCard/>
                <TeamCard/>
                <TeamCard/>
                </div>
            </div>
        </div>
    )
}


export default Team
