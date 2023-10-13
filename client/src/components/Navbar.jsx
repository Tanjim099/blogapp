import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom"
import { loguot } from "../redux/slices/authSilce";

function NavBar() {
    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
    const dispatch = useDispatch()
    async function onLoguot(e) {
        e.preventDefault();
        const response = await dispatch(loguot())
        if (response?.payload?.data) {
            navigate("/")
        }
    }
    return (
        <div className="navbar flex items-center justify-between bg-[#003366] w-[100%] mt-4 rounded-lg">
            <div className="">
                <Link to="/" className="btn btn-ghost normal-case text-4xl text-white">NEWSTIMES</Link>
            </div>
            <div className="text-white flex items-center justify-between gap-4">
                <NavLink to="/category/news">
                    <button className="">News</button>
                </NavLink>
                <NavLink>
                    <button>Cricket</button>
                </NavLink>
                <NavLink>
                    <button>Business</button>
                </NavLink>
                <NavLink>
                    <button>Tech</button>
                </NavLink>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://cdn-icons-png.flaticon.com/512/6915/6915987.png" />
                        </div>
                    </label>
                    <div>
                        {!isLoggedIn ? (
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

                                <li>
                                    <Link to="/login" className="justify-between">
                                        Login
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li><Link to="/register">Register</Link></li>
                                <li><a>Logout</a></li>

                            </ul>
                        ) : (
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

                                <li>
                                    <Link to="/user/profile" className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a onClick={onLoguot}>Logout</a></li>

                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar