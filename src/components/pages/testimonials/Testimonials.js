import React from 'react'
import user1 from '../../../images/user1.jpeg'
import user2 from '../../../images/user2.jpeg'
import user3 from '../../../images/user3.jpeg'
import './Testimonials.css'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>Testimonials</h2>
                
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p>
                        If you're visiting this page, you're likely here because you're searching for a random sentence. Sometimes a random word just isn't enough, and that is where the random sentence generator comes into play. By inputting the desired number, you can make a list of as many random sentences as you want or need. Producing random sentences can be helpful in a number of different ways.
                        </p>
                        <p><span>Edwardo Weber</span></p>
                        <p>Previous grade 11 student</p>
                    </div>
                    <div className='card'>
                        <img src={user2} alt='user1'/>
                        <p>
                        If you're visiting this page, you're likely here because you're searching for a random sentence. Sometimes a random word just isn't enough, and that is where the random sentence generator comes into play. By inputting the desired number, you can make a list of as many random sentences as you want or need. Producing random sentences can be helpful in a number of different ways.
                        </p>
                        <p><span>Bryce Knox</span></p>
                        <p>Extra math class studet</p>
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user1'/>
                        <p>
                        If you're visiting this page, you're likely here because you're searching for a random sentence. Sometimes a random word just isn't enough, and that is where the random sentence generator comes into play. By inputting the desired number, you can make a list of as many random sentences as you want or need. Producing random sentences can be helpful in a number of different ways.
                        </p>
                        <p><span>Scotty Vazquez</span></p>
                        <p>Extra math class student</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
