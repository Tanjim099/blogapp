import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlog } from "../redux/slices/blogSlice";
import { useNavigate } from "react-router-dom";

function BlogList({ data, userData }) {

    const blogData = useSelector((state) => state?.blog?.blogList)
    // console.log(blogData[0].category)
    const navigate = useNavigate();

    function onNavigate() {
        navigate(`/blog/${data?._id}`, { state: { ...data } })
    }

    const [cartData, setCartData] = useState([]);

    function onFilteredData(data) {
        const newData = blogData.filter((blog) => {
            return blog.category === data.category
        })
        // console.log(newData)
        setCartData([...cartData, newData]);
        // console.log(cartData)
    }

    // setCartData([...cartData, newData]);
    // console.log(cartData)
    function onCallFunction(data) {
        onFilteredData(data)
        onNavigate()
    }
    // useEffect(() => {
    //     onFilteredData()
    // }, [])
    return (
        <div
            onClick={() => onCallFunction(data)}
            className="w-[290px] h-[330px]  p-2 flex flex-col shadow-[0_0_2px_black] rounded-md cursor-pointer">
            <img src={data.img} alt="" className="W-full h-[200px] rounded-md" />
            <h1 className=" text-lg font-bold">{data?.title}</h1>
            {/* <p>By {data.author.name}</p>
            <p>Category : {data.category}</p> */}
            {/* <p>{data?.description}</p> */}

        </div>
    )
}
export default BlogList