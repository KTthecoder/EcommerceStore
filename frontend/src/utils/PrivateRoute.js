import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider'

const PrivateRoute = () => {
    const { user, loading } = useContext(AuthContext)
    
    if(!loading){
        return user ? <Outlet/> : <Navigate to="/login" />
    }
   
}

export default PrivateRoute