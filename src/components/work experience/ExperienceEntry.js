import React from 'react'
import './Experience'
const ExperienceEntry = ({title, location, date, description, achievement1, achievement2}) => {
    return (
        <div className="work-experience-card">
            <div className="exp title"> {title} </div>
            <div className="exp location">{location} </div>
            <div className="exp date">{date}</div>
            <div className="exp description">
                <div className="exp descrip-span">
                    Description
                </div>
                <div className="descrip-text">
                   {description}
                </div>
            </div>
            <div className="exp achievements">
                <div className=" exp achievement-span">
                    Achievements
                </div>
                <div className="achievement-entry">
                    {achievement1}
                </div>
                <div className="achievement-entry">
                    {achievement2}
                </div>
            </div>
        </div>
    )
}

export default ExperienceEntry
