import React from 'react'
import './Experience.css'

const Experience = ( { experience }) => {
    return (
        <div>

        {/* <h2>Experience</h2> */}

            <div className="experience-card">
                {experience.map((item) => {
                        return (
                            <div key={JSON.stringify(item)}>
                            <p className="name"> 💼 {item.name}</p>
                            <p>  {item.where}</p>
                            <p> 🗓️{item.date}</p>
                            </div>
                        );
                })}
            </div>
        </div>
    )
}

export default Experience
