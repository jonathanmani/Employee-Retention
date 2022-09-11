import React from 'react'


const Representative = ({ name, jobTitle, skills, representativeLink }) => {
  return (
    
    <div className="card" >
        <div className="card-body">
            <h5 className="card-title"></h5>
            <h6 className='card-subtitle'></h6>
            <h6 className="card-subtitle mb-2 text-muted"></h6>
            <p className="card-text"></p>
            <a  className="card-link">See More</a>
        </div>
    </div>
  )
}

export default Representative