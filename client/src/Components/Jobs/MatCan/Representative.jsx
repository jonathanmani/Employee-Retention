import React from 'react'

const Representative = ({ name, jobTitle, skills, representativeLink }) => {
  return (
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{ name }</h5>
            <h6 class='card-subtitle'>{ jobTitle }</h6>
            <h6 class="card-subtitle mb-2 text-muted">{ match }</h6>
            <p class="card-text">{ skills }</p>
            <a href={ `${representativeLink}` } class="card-link">See More</a>
        </div>
    </div>
  )
}

export default Representative