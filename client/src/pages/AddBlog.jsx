import { useState } from "react";
import HomeLayout from "../layouts/HomeLayout";
import { useDispatch } from "react-redux";
import { createBlog } from "../redux/slices/blogSlice";

function AddBlog() {
    const dispatch = useDispatch()
    const [blogData, setBlogData] = useState({
        title: "",
        image: "",
        description: "",
        content: ""
    })
    async function submitData(e) {
        e.preventDefault();
        if (!blogData.title || !blogData.image || !blogData.description || !blogData.content) {
            alert("All fields are required");
            return;
        }
        const response = await dispatch(createBlog(blogData))
        console.log(response)
    }
    return (
        <HomeLayout>
            <div className="w-[40%] m-auto flex flex-col gap-5">
                <h1>Add Blog</h1>
                <input type="text" placeholder="Enter title of your blog" className="border border-b-black" value={blogData.title} onChange={(e) => { setBlogData({ ...blogData, title: e.target.value }) }} />
                <input type="text" placeholder="Enter image url of your blog" className="border-4 border-b-black" value={blogData.image} onChange={(e) => { setBlogData({ ...blogData, image: e.target.value }) }} />
                <textarea name="description" placeholder="Enter description of you blog" id="" className="border" value={blogData.description} onChange={(e) => { setBlogData({ ...blogData, description: e.target.value }) }}></textarea>
                <textarea name="content" placeholder="Enter content of your blog" id="" cols="30" rows="10" className="border" value={blogData.content} onChange={(e) => { setBlogData({ ...blogData, content: e.target.value }) }}></textarea>
                <button onClick={submitData}>Create blog</button>
            </div>
        </HomeLayout>
    )
}

export default AddBlog