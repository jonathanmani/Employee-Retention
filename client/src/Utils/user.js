import { useContext } from "react"
import { UserContext } from "../Contexts/User/context"
export const userChecker = () => {
    const {type} = useContext(UserContext)
    return type

}