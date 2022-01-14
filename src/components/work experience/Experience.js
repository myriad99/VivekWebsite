import React from 'react'
import './Experience.css'
import {Entries} from './experienceData'
import ExperienceEntry from './ExperienceEntry'
const Experience = () => {

    return (
        <div className= 'experience'>
             <div className="work-experience-header">
                 Work Experience
             </div>
             <div className="work-experience-list">

                 {
                      Entries.map((e)=>(
                        <ExperienceEntry key = {e.id} title = {e.entryTitle}  

                            location = {e.entryLocation} date ={e.entryDate}

                            description = {e.entryDescription} 
                            
                            achievement1 = {e.entryAchievmentEntry1}

                            achievement2 = {e.entryAchievmentEntry2}

                        />
                      ))  
                 }   

             </div> {/* List end */}
        </div>
    )
}

export default Experience
