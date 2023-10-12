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
        img: "",
        description: "",
        content: "",
        userId: data.userData._id
    })
    async function submitData(e) {
        e.preventDefault();
        if (!blogData.title || !blogData.img || !blogData.description || !blogData.content) {
            alert("All fields are required");
            return;
        }
        const response = await dispatch(createBlog(blogData))
        console.log(response)
    }

    // async function loadData() {
    //     await dispatch(getProfile())
    // }

    // useEffect(() => {
    //     loadData()
    // }, []);
    return (
        <HomeLayout>
            <div className="w-[40%] m-auto mt-6 border p-5 flex flex-col gap-5">
                <h1 className="text-center bg-green-500">Add Blog</h1>
                <input type="text" placeholder="Enter title of your blog" className="border border-b-black" value={blogData.title} onChange={(e) => { setBlogData({ ...blogData, title: e.target.value }) }} />
                <input type="text" placeholder="Enter image url of your blog" className="border-4 border-b-black" value={blogData.img} onChange={(e) => { setBlogData({ ...blogData, img: e.target.value }) }} />
                <textarea name="description" placeholder="Enter description of you blog" id="" className="border" value={blogData.description} onChange={(e) => { setBlogData({ ...blogData, description: e.target.value }) }}></textarea>
                <textarea name="content" placeholder="Enter content of your blog" id="" cols="30" rows="10" className="border" value={blogData.content} onChange={(e) => { setBlogData({ ...blogData, content: e.target.value }) }}></textarea>
                <button onClick={submitData} className=" py-2 bg-green-600 rounded-md text-white">Create blog</button>
            </div>
        </HomeLayout>
    )
}

export default AddBlog