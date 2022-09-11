import React,{useEffect} from 'react'
import TripleCard from '../../../Components/Cards/MatCan/TripleCard'
import Representative from '../../../Components/Jobs/MatCan/Representative'
import Navbar from '../../../Layouts/Navbars/AppNav'
import {userChecker} from '../../../Utils/user'

const MatCanBoard = () => {
  useEffect(() => {
    userChecker()
  }, [])
  
  return (
    <>
      <Navbar>
        {/* <h1>You are a candidate for Mat Leave</h1> */}
        <TripleCard/>
        {/* <h1 className='text-center fs-2'>You are eligible for:</h1>
        <Representative />
        <button type="button" className="btn btn-outline-success btn-sm">Success</button> */}
        </Navbar>
    </>
  )
}

export default MatCanBoard