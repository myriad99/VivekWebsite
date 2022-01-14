import React from 'react'
import profilePic from '../../img/vivekportfolioimg.png' 
import './Splash.css'


const Splash = () => {
    return (
        <div className='splash'>
            
            <div className='img-section'>
                <img src = {profilePic} />
            </div>
            <div className='text-section'>
                <h1 className='splash-header'>About Me</h1>
                <p className='splash-descrip'>
                    Hello!  I am Vivekjyoti Banerjee and I am a graduate student with 
                    a passion in machine learning and computer vision. 
                </p>
               
                <div className='interests'>
                    <p>Interests</p>
                    <ul>
                        <li> Machine Learning </li>
                        <li> Computer Visions </li>
                    </ul>
                </div>
                <div className='education'>
                    <p>Education</p>
                    <ul>
                        <li> B.S. Computer Science  </li>
                        <li> B.S. Mathematics </li>
                    </ul>
                </div>
            
            </div>
            
        </div>
    )
}

export default Splash
