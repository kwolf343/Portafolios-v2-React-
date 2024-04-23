import { Navigate, Outlet } from "react-router-dom";
import useLoginService from "../Services/useLoginService";
const ProtectedRoute = ({
    redirectPath = '/'
}) => {
    const { estaLogueado } = useLoginService(); 
    const isAuthenticated = estaLogueado();
    if(!isAuthenticated){
        return <Navigate to={redirectPath} replace />
    }
    return <Outlet/>;
}
export default ProtectedRoute;