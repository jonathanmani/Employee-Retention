import React,{useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../Contexts/User/context'

const Page = () => {
    const navigate = useNavigate()
    const {type} = useContext(UserContext)
    return navigate(`/app/${type}`)
}

export default Page