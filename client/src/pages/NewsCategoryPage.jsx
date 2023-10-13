import { useSelector } from "react-redux";
import MainBlogCard from "../components/MainBlogCard";
import HomeLayout from "../layouts/HomeLayout";
import { useState } from "react";
import BlogList from "../components/BlogCard";

function NewsCategoryPage() {
    const blogData = useSelector((state) => state?.blog?.blogList)
    const [newsData, setNewsData] = useState([]);
    const newData = blogData.filter((blog) => {
        return blog.category === "News"
    })
    // setNewsData([...newsData, newData]);

    const mainCardBlogData = newData.slice(0, 5)
    const secondCardBlogData = newData.slice(5, newData.length)
    console.log(newData)
    return (
        <HomeLayout>
            <div className=" w-[80%] min-h-[80vh] m-auto mt-10">
                <MainBlogCard data={mainCardBlogData} />
                <div className="mb-10 flex flex-wrap gap-4">
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

export default NewsCategoryPage