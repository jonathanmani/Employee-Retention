import React from 'react'
import { useNavigate } from 'react-router-dom'

const Page = () => {
    const navigate = useNavigate()
    const userChecker = () => {

            if(role === "matrep" ) {
                return navigate("/app/matrep")
            }
            if(role === "matcan") {
                return navigate("/app/matcan")
            }
            if(role === "admin") {
                return navigate("/app/admin")
            }
    }
    useEffect(() => {
        userChecker()
    }, [])
}

export default Page