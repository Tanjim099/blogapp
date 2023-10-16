// import useDispatch from "react-redux";
// import HomeLayout from "../layouts/HomeLayout";
// import useEffect from "react";
import getProfile, { loguot } from "../../redux/slices/authSilce";
import HomeLayout from "../../layouts/HomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Profile() {
    const dispatch = useDispatch()
    const profileData = useSelector((state) => state.auth.data.userData);
    // console.log(profileData)

    const allBlogs = useSelector((state) => state?.auth?.blogs);
    const numbersOfBlogs = allBlogs.length;


    async function onLoguot() {
        await dispatch(loguot())
    }
    return (
        <HomeLayout>
            <div className="flex items-center justify-center">
                <div className="w-[350px] mt-[10%] border-4 p-5">
                    <div className="flex flex-col gap-2">
                        <img className="w-[100px] m-auto" src="https://cdn-icons-png.flaticon.com/512/6915/6915987.png" alt="" />
                        <h1>Name: {profileData?.name}</h1>
                        <hr />
                        <p>Email : {profileData?.email}</p>
                        <hr />
                        <Link to="/user/allblogs">Blogs: {numbersOfBlogs}</Link>
                        <button className="bg-green-500 text-white font-semibold py-1 rounded-lg">Edit</button>
                        <button className="bg-indigo-500 text-white font-semibold py-1 rounded-lg">Change Password</button>
                        <button onClick={onLoguot} className="bg-red-500 text-white font-semibold py-1 rounded-lg">Logout</button>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default Profile