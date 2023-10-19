import { useEffect, useState } from "react";
import HomeLayout from "../layouts/HomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { createBlog } from "../redux/slices/blogSlice";
import { getProfile } from "../redux/slices/authSilce";

function AddBlog() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state?.auth?.data)
    // console.log(data.userData._id)

    const [blogData, setBlogData] = useState({
        title: "",
        category: "",
        img: "",
        description: "",
        content: "",
        userId: data.userData._id
    })
    async function submitData(e) {
        e.preventDefault();
        if (!blogData.title || !blogData.category || !blogData.img || !blogData.description || !blogData.content) {
            alert("All fields are required");
            return;
        }
        const response = await dispatch(createBlog(blogData))
        if (response?.payload?.success == true) {
            // alert("Blog Posted successful")
            setBlogData({
                title: "",
                category: "",
                img: "",
                description: "",
                content: "",
                userId: data.userData._id
            })
        }
    }

    // async function loadData() {
    //     await dispatch(getProfile())
    // }

    // useEffect(() => {
    //     loadData()
    // }, []);
    return (
        <HomeLayout>
            <div className="w-[80%] m-auto mt-2 border p-2 gap-5">
                {/* <h1 className="text-center bg-green-500">Add Blog</h1> */}
                <div className="flex flex-col gap-3 h-[85vh]">
                    {/* <div className="w-[30%] flex flex-col gap-2"> */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="" className=" text-sm font-serif">Blog Title</label>
                        <input type="text" placeholder="Enter title of your blog" className="p-2 shadow-[0px_0px_2px_gray] rounded-md outline-none" value={blogData.title} onChange={(e) => { setBlogData({ ...blogData, title: e.target.value }) }} />
                    </div>
                    <div className="flex gap-5">

                        <div className="w-[70%] h-[73vh] flex flex-col gap-1">

                            <label htmlFor="" className=" text-sm font-serif">Content</label>
                            <textarea
                                name="content"
                                placeholder="Enter content of your blog"
                                id=""
                                className="w-[100%] h-[70vh] p-2 shadow-[0px_0px_2px_gray] rounded-md outline-none"
                                value={blogData.content}
                                onChange={(e) => { setBlogData({ ...blogData, content: e.target.value }) }}>

                            </textarea>
                        </div>
                        <div className="w-[30%] flex flex-col gap-3">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="" className=" text-sm font-serif">Blog Category</label>
                                {/* <input type="text" placeholder="Enter category" className="border border-b-black" value={blogData.category} onChange={(e) => { setBlogData({ ...blogData, category: e.target.value }) }} /> */}
                                <select className="p-2 shadow-[0px_0px_2px_gray] rounded-md outline-none" name="" id="" onChange={(e) => { setBlogData({ ...blogData, category: e.target.value }) }}>
                                    <option value="News" >Select</option>
                                    <option value="News" >News</option>
                                    <option value="Cricket" >Cricket</option>
                                    <option value="Movie">Movie</option>
                                    <option value="Business">Business</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="" className=" text-sm font-serif">Blog Image by URL</label>
                                <input
                                    type="text"
                                    placeholder="Enter image url of your blog"
                                    className="p-2 shadow-[0px_0px_2px_gray] rounded-md outline-none"
                                    value={blogData.img}
                                    onChange={(e) => { setBlogData({ ...blogData, img: e.target.value }) }}
                                />
                                <span className="text-center">OR</span>
                                <div className="flex justify-center items-center h-[180px] p-2 shadow-[0px_0px_2px_gray] rounded-md outline-none cursor-pointer">
                                    <label
                                        htmlFor=""
                                        className=" text-sm font-serif"
                                    >
                                        By Camputer
                                    </label>
                                    <input type="file" hidden />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor=""
                                    className=" text-sm font-serif"
                                >Description</label>
                                <textarea
                                    name="description"
                                    placeholder="Enter description of you blog"
                                    id=""
                                    className="h-[100px] p-2 shadow-[0px_0px_2px_gray] rounded-md outline-none"
                                    value={blogData.description}
                                    onChange={(e) => { setBlogData({ ...blogData, description: e.target.value }) }}
                                >

                                </textarea>
                            </div>
                            <button onClick={submitData} className=" py-2 bg-[#003366] rounded-md text-white">Create blog</button>
                        </div>

                    </div>
                </div>

            </div>
        </HomeLayout>
    )
}

export default AddBlog