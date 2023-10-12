// const { useSelector } = require("react-redux");
// const { useNavigate, Outlet } = require("react-router-dom");
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate, Outlet } from "react-router-dom";

function RequireAuth() {
    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
    // const navigate = useNavigate()
    return isLoggedIn ? (<Outlet />) : (<Navigate to="login" />)
}

export default RequireAuth