import React from 'react'
import './Projects.css'
import ProjectEntry from './ProjectEntry'
import {ProjectEntries} from './projectEntries'
 
const Projects = () => {
    return (
        <div className='projects'>
            <div className="projects-header">Projects</div>
            <div className="project-list">
                
                {

                    ProjectEntries.map((e, index) => (
                        <ProjectEntry key = {e.id} title = {e.projectTitle} 
                            img = {e.projectImg} descr = {e.projectDescription}
                            skill1 = {e.projectSkill1} skill2 = {e.projectSkill2} 
                            skill3 = {e.projectSkill3} link = {e.projectLink}

                        />

                    ))


                }                
            </div>
        </div>
    )
}

export default Projects
