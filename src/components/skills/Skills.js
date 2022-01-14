import React from 'react'

import pythonLogo from '../../img/python-logo-new.png'
import javaLogo from '../../img/javalogo-new.jpg'
import rubyLogo from '../../img/rubylogo.png'
import githubLogo from '../../img/githublogo.png'
import databricksLogo from '../../img/databrickslogo.png'
import awsLogo from '../../img/awslogo.png'
import pytorchLogo from '../../img/pytorchlogo.png'
import tensorflowLogo from '../../img/Tensorflowlogo.png'
import unityLogo from '../../img/unitylogo.png'

import './Skills.css'

const Skills = () => {
    return (
        <div className='skills'>
            <div className="skills-header">
                Skills
            </div>
            <div className="icons-section">
                <p className = 'icon-header'>My favorite languages</p>
                <div className="icons-row">
                    <div className="icon-entry">
                         <img src= {pythonLogo} alt="pythonLogo"  /> 
                         <p>Python</p>
                    </div>
                    <div className="icon-entry">
                         <img src= {javaLogo} alt="javaLogo"  /> 
                         <p>Java</p>
                    </div>
                    <div className="icon-entry">
                         <img src= {rubyLogo} alt="rubyLogo"  /> 
                         <p>Ruby</p>
                    </div> 
                </div>
            </div>
            <div className="icons-section">
                <p className = 'icon-header'>My favorite languages</p>
                <div className="icons-row">
                    <div className="icon-entry">
                         <img src= {githubLogo} alt="githubLogo"  /> 
                         <p>Github</p>
                    </div>
                    <div className="icon-entry">
                         <img src= {databricksLogo} alt="databricksLogo"  /> 
                         <p>Databricks</p>
                    </div>
                    <div className="icon-entry">
                         <img src= {awsLogo} alt="awsLogo"  /> 
                         <p>AWS</p>
                    </div> 
                </div>
            </div>
            <div className="icons-section">
                <p className = 'icon-header'>My favorite languages</p>
                <div className="icons-row">
                    <div className="icon-entry">
                         <img src= {pytorchLogo} alt="pytorchLogo"  /> 
                         <p>Pytorch</p>
                    </div>
                    <div className="icon-entry">
                         <img src= {tensorflowLogo} alt="tensorflowLogo"  /> 
                         <p>Tensorflow</p>
                    </div>
                    <div className="icon-entry">
                         <img src= {unityLogo} alt="unityLogo"  /> 
                         <p>Unity</p>
                    </div> 
                </div>
            </div>

            <div className="link-div">
                <a href="https://portfolium.com/vivekjyoti24/portfolio" className="see-more-link">See more of my skills</a>
            </div>  
            
        </div>
    )
}

export default Skills
