import { Link, NavLink, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, loguot } from "../redux/slices/authSilce";
import { useEffect } from "react";

function HomeLayout({ children }) {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

    const active = {
        display: "block"
    }

    async function onLoguot(e) {
        e.preventDefault();
        const response = await dispatch(loguot())
        if (response?.payload?.data) {
            navigate("/")
        }
    }

    function showProfile() {
        const userProfile = document.getElementById("userprofile");
        // userProfile.classList.toggle(active.display)
        userProfile.style.display = "block"
        console.log("yes")
    }
    // const btn = document.getElementById('get');
    // btn.addEventListener("click", () => {
    //     alert("getted")
    // })
    const userDetails = dispatch(getProfile())
    useEffect(() => {
        userDetails
        console.log(userDetails)
    }, [])
    return (
        <div>
            <div className="bg-green-500 h-10 w-[80%] m-auto flex items-center justify-between px-5">
                <div>
                    <Link to="/">LOGO</Link>
                </div>
                <div className="flex gap-10">
                    <NavLink>
                        <button>Home</button>
                    </NavLink>
                    <NavLink>
                        <button>Tech</button>
                    </NavLink>
                    <NavLink to="/addblog">
                        <button>Add Blog</button>
                    </NavLink>
                </div>
                <div className="">
                    {!isLoggedIn ? (
                        <div className="">
                            <NavLink to={"/login"}>
                                <button>Login</button>
                            </NavLink>
                            <NavLink to={"/register"}>
                                <button>Register</button>
                            </NavLink>
                        </div>
                    ) : (
                        <div className="flex gap-4">
                            <button>
                                <Link to="/user/profile">Profile</Link>
                            </button>
                            <button>
                                <Link onClick={onLoguot}>Loguot</Link>
                            </button>
                        </div>
                    )}
                </div>
            </div>
            {children}
        </div>
    );
}

export default HomeLayout