import { useSelector } from "react-redux";
import MainBlogCard from "../components/MainBlogCard";
import HomeLayout from "../layouts/HomeLayout";
import { useState } from "react";

function NewsCategoryPage() {
    const blogData = useSelector((state) => state?.blog?.blogList)
    const [newsData, setNewsData] = useState([]);
    const newData = blogData.filter((blog) => {
        return blog.category === "News"
    })
    setNewsData(newData);

    const mainCardBlogData = newData.slice(0, 5)
    console.log(newsData)
    return (
        <HomeLayout>
            <MainBlogCard data={mainCardBlogData} />
        </HomeLayout>
    )
}

export default NewsCategoryPage