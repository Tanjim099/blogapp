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
            className="sm:w-[290px] md:w-[288px] h-[330px] relative p-2 flex flex-col shadow-[0_0_2px_black] rounded-md cursor-pointer ">
            <img src={data.img} alt="" className="W-full h-[200px] rounded-md" />
            <h1 className=" text-lg font-medium leading-5 ">{data?.title}</h1>
            <div className="card-actions justify-between relative top-1">
                <div className="badge badge-outline">{data?.author?.name}</div>
                <div className="badge badge-outline">{data?.category}</div>
            </div>

        </div>
        // <div className="card w-[290px] h-[330px] rounded-md bg-base-100 shadow-xl">
        //     <figure><img src={data.img} alt="Shoes" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">
        //             {data?.title}
        //         </h2>
        //         <div className="card-actions justify-between">
        //             <div className="badge badge-outline">{data?.author?.name}</div>
        //             <div className="badge badge-outline">{data?.category}</div>
        //         </div>
        //     </div>
        // </div>
    )
}
export default BlogList