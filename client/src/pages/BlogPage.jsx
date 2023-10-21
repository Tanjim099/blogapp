import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllBlog } from "../redux/slices/blogSlice";
import BlogList from "../components/BlogCard";
import HomeLayout from "../layouts/HomeLayout";
import { getProfile } from "../redux/slices/authSilce";
import MainBlogCard from "../components/MainBlogCard";

function BlogPage() {
    const dispatch = useDispatch();
    const blogData = useSelector((state) => state?.blog?.blogList)
    const userData = useSelector((state) => state?.auth?.data?.userData)
    console.log(blogData)

    const mainBlogCardData = blogData.slice(0, 5)

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // Adjust this value as needed
    const indexOfLastItem = currentPage * itemsPerPage + 5;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);


    const numPages = Math.ceil(blogData.length / itemsPerPage);

    const slicedBlogData = blogData?.slice(indexOfFirstItem, indexOfLastItem)
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
            <div className="w-[100%] m-auto mt-10 sm:w-[80%]">

                <MainBlogCard data={mainBlogCardData} />
                <div className="mb-8 px-3 sm:p-0 md:p-0 flex flex-wrap gap-4 ">
                    {
                        slicedBlogData?.map((e) => {
                            return <BlogList key={e._id} data={e} />
                        })
                    }
                </div>
                <div className=" w-[100%] m-auto flex items-center justify-center gap-7 mb-5">
                    <button className=" bg-[#003366] text-white px-2 py-1 rounded-md" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <p>{currentPage}</p>
                    <button className=" bg-[#003366] text-white px-2 py-1 rounded-md" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === numPages}>
                        Next
                    </button>
                </div>
            </div>
        </HomeLayout>
    )
}

export default BlogPage