import React from 'react'
import './More.css'

const More = ( { languages, habilities })  => {
    return (
        <div>
        <h2>Languages</h2> 
            <div className="more-card">
              
            {languages.map((item) => {
                    return (
                        <div key={JSON.stringify(item)}>
                         <p className="name">🌍 {item.language}</p>
                         <p>✏️ {item.wrlevel}</p>
                         <p>🤓 {item.splevel}</p>
                        </div>
                    );
            })}

            </div>


            <h2>Skilss</h2>
            <div className="habilities-card">
          
                { habilities.map((item) =>
                        <p>📌{item}</p>
                )}
                    
            </div>

        </div>
    )
}

export default More
