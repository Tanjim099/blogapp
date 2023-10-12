import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllBlog } from "../redux/slices/blogSlice";
import BlogList from "../components/BlogCard";
import HomeLayout from "../layouts/HomeLayout";
import { getProfile } from "../redux/slices/authSilce";
import MainBlogCard from "../components/MainBlogCard";

function BlogPage() {
    const dispatch = useDispatch();
    const blogData = useSelector((state) => state?.blog?.blogList?.getAllBlog)
    const userData = useSelector((state) => state?.auth?.data?.userData)
    // console.log(blogData)

    const slicedBlogData = blogData?.slice(5, blogData.length);
    async function loadBlog() {
        await dispatch(getAllBlog())
        await dispatch(getProfile())
    }

    useEffect(() => {
        loadBlog()
        blogData
        // console.log(blogData)
    }, []);
    return (
        <HomeLayout>
            <div className="w-[80%] m-auto mt-10">
                <MainBlogCard />
                <div className="mb-10 flex flex-wrap gap-5">
                    {
                        slicedBlogData?.map((e) => {
                            return <BlogList key={e._id} data={e} />
                        })
                    }
                </div>
            </div>
        </HomeLayout>
    )
}

export default BlogPage