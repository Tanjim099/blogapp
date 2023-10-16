import { useDispatch, useSelector } from "react-redux";
import HomeLayout from "../../layouts/HomeLayout";
import { useEffect, useState } from "react";
import { getBlogs } from "../../redux/slices/authSilce";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";
import { BsCollectionPlay, BsTrash } from "react-icons/bs";
import { deleteBlog } from "../../redux/slices/blogSlice";
function Dashboard() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const profileData = useSelector((state) => state.auth.data.userData);
    const profileBlogData = useSelector((state) => state.auth.data);

    async function onGetAllBlogs() {
        const response = await dispatch(getBlogs(profileData._id))
    }

    const userBlog = useSelector((state) => state?.auth?.blogs)
    console.log(userBlog)

    async function onDeleteBlog(id) {
        if (window.confirm("Are you sure you want to delete the blog ?")) {
            const response = await dispatch(deleteBlog(id));
            console.log(id)
        }
    }
    const allBlogs = useSelector((state) => state?.auth?.blogs);
    console.log(allBlogs)
    const [flag, setFlag] = useState("he")
    console.log(flag)
    useEffect(() => {
        onGetAllBlogs()
        onDeleteBlog
        // (
        //     async () => {
        //         onGetAllBlogs
        //     }
        // )
    }, [])
    // console.log(onGetAllBlogs)
    return (
        <HomeLayout>
            <div className="h-[80vh] w-[80%] m-auto relative">
                <div className="flex gap-4 h-[100%]">
                    <div className="w-[15%] bg-[#003366]">
                        <ul className="menu text-white ">
                            <li id="home" onClick={(e) => setFlag(e.target.id)}>
                                <a className=" hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                    <span>Home</span>
                                </a>
                            </li>
                            <li >
                                <a className=" hover:text-white" id="allBlogs" onClick={(e) => setFlag(e.target.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>All Blogs</span>
                                </a>

                            </li>
                            <li>
                                <a className=" hover:text-white" id="addBlog" onClick={(e) => setFlag(e.target.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                    <span>Add Blog</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[85%]">
                        <div>
                            <div className="flex flex-col gap-3">
                                <table className="table overflow-x-scroll border-none">
                                    <thead className="border-none ">
                                        <tr className="flex items-center justify-between">
                                            <div className="flex gap-20">
                                                <th>S No</th>
                                                <th>Blog Title</th>
                                            </div>
                                            <div className="flex gap-24">
                                                <th>Category</th>
                                                <th className=" mr-24">Blog Image</th>
                                            </div>
                                        </tr>
                                    </thead>
                                    <tbody className="flex flex-col w-[100%]">
                                        {userBlog?.map((blog, idx) => {
                                            return (

                                                <tr className="flex items-center justify-between w-[100%]">
                                                    <td>{idx + 1}</td>
                                                    <td>
                                                        {/* {blog.title} */}
                                                        <textarea readOnly value={blog.title} className="w-[400px] h-auto bg-transparent resize-none read-only">

                                                        </textarea>
                                                    </td>
                                                    <td>{blog.category}</td>
                                                    <td className="flex items-center justify-between gap-5">
                                                        <img className="w-[50px] rounded-md" src={blog.img} alt="" />
                                                        <div className="flex gap-2">
                                                            <button className="bg-green-500 text-white px-3 text-lg rounded-md"><i class='fa fa-edit'></i></button>
                                                            <button onClick={() => onDeleteBlog(blog._id)} className="bg-red-500 text-white px-3 text-lg rounded-md"><i class="fa fa-trash-o"></i></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                        }
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </HomeLayout >
    )
}

export default Dashboard