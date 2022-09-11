import React from 'react'
import Representative from '../../../Components/Jobs/MatCan/Representative'

const MatCanBoard = () => {
  return (
    <div>
        <h1 class='text-center fs-2'>You are eligible for:</h1>
        < Representative />
        <button type="submit" class="btn btn-outline-success btn-sm">Send</button>
    </div>
  )
}

export default MatCanBoard