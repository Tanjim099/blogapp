import { useDispatch, useSelector } from "react-redux";
import { loguot } from "../redux/slices/authSilce";
import { Link, NavLink, Navigate } from "react-router-dom";

function Navbar() {

    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
    const dispatch = useDispatch()
    async function onLoguot(e) {
        e.preventDefault();
        const response = await dispatch(loguot())
        if (response?.payload?.data) {
            Navigate("/")
        }
    }
    return (
        <div className="navbar bg-[#003366] ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex gap-3">
                        <div className="form-control flex">
                            <input type="text" placeholder="Search" className="input input-bordered w-full h-8 md:w-auto" />
                            {/* <button className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button> */}
                        </div>
                        <div>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/category/news">News</NavLink></li>
                            <li><NavLink to="/category/cricket">Cricket</NavLink></li>
                            <li><NavLink to="/category/movie">Movie</NavLink></li>
                            <li><NavLink to="/category/business">Business</NavLink></li>
                            <li><NavLink to="/category/tech">Tech</NavLink></li>
                        </div>
                    </ul>
                </div>
                <NavLink to="/" className="btn btn-ghost normal-case text-3xl text-white">NEWSINDIA</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white hover:text-none bg-none">
                    <li><NavLink to="/" className="bg-none">Home</NavLink></li>
                    <li><NavLink to="/category/news">News</NavLink></li>
                    <li><NavLink to="/category/cricket">Cricket</NavLink></li>
                    <li><NavLink to="/category/movie">Movie</NavLink></li>
                    <li><NavLink to="/category/business">Business</NavLink></li>
                    <li><NavLink to="/category/tech">Tech</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="form-control sm:block hidden">
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

                            </ul>
                        ) : (
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

                                <li>
                                    <Link to="/user/profile" className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li><Link to="/addblog">Add Blog</Link></li>
                                <li><Link to="/user/dashboard">Dashboard</Link></li>
                                <li><a onClick={onLoguot}>Logout</a></li>

                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar