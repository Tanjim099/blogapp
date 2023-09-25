import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllBlog } from "../redux/slices/blogSlice";
import BlogList from "../components/BlogCard";
import HomeLayout from "../layouts/HomeLayout";

function BlogPage() {
    const dispatch = useDispatch();
    const blogData = useSelector((state) => state?.blog?.blogList?.getAllBlog)

    async function loadBlog() {
        await dispatch(getAllBlog())
    }

    useEffect(() => {
        loadBlog()
        blogData
        console.log(blogData)
    }, []);
    return (
        <HomeLayout>
            <div className="flex gap-5">
                {
                    blogData?.map((e) => {
                        return <BlogList key={e._id} data={e} />
                    })
                }
            </div>
        </HomeLayout>
    )
}

export default BlogPage