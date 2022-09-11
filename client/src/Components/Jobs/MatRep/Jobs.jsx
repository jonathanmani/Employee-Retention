import React from 'react'

const Jobs = ({ jobPosting, skills, match, jobLink }) => {
  return (
    <div class="card" >
        <div class="card-body">
            <h5 class="card-title">{ jobPosting }</h5>
            <h6 class="card-subtitle mb-2 text-muted">{ match }</h6>
            <p class="card-text">{ skills }</p>
            <a href={ `${jobLink}` } class="card-link">See More</a>
        </div>
    </div>
  )
}

export default Jobs