import { useSelector } from "react-redux";
import HomeLayout from "../layouts/HomeLayout";
import MainBlogCard from "../components/MainBlogCard";
import BlogList from "../components/BlogCard";

function CricketCategoryPage() {
    const blogData = useSelector((state) => state?.blog?.blogList);
    const cricketBlogData = blogData.filter((blog) => {
        return blog.category === "Cricket"
    })
    const mainCardBlogData = cricketBlogData.slice(0, 5)
    const secondCardBlogData = cricketBlogData.slice(5, cricketBlogData.length)
    // console.log(cricketBlogData)
    return (
        <HomeLayout>
            <div className="min-h-[80vh] w-[80%] m-auto mt-10 ">
                <MainBlogCard data={mainCardBlogData} />
                <div className="flex flex-wrap gap-5 mb-10">
                    {
                        secondCardBlogData?.map((blog, i) => {
                            return <BlogList key={i} data={blog} />
                        })
                    }
                </div>
            </div>
        </HomeLayout>
    )
}

export default CricketCategoryPage