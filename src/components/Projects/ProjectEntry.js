import React from 'react'
import './Projects.css'
 


const projectEntry = ({title, img, descr, skill1, skill2, skill3, link}) => {
    return (
        <div className="project-entry">
            <div className="project-text-section">
                <div className="project-title spacing-margin">{title}</div>
                <div className="project-img">
                    <img src= {img} alt= {title + "Img"}   />
                </div>
                <div className="project-description spacing-margin "> 
                    {descr}
                </div>
                <div className="project-skills spacing-margin">
                    <div className="skills-header">Skills: </div>
                    <div className="project-skill">  {skill1} </div> 
                    <div className="project-skill"> {skill2}</div>
                    <div className="project-skill">  {skill3} </div>
                </div>
                <div className="link-section">
                    <a href = {link}> <div className="more-details-link spacing-margin"> More Details</div> </a>
                </div>
            </div>
        </div>
    )
}

export default projectEntry
