import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlog } from "../redux/slices/blogSlice";

function BlogList({ data }) {
    return (
        <div className="w-80 flex flex-col gap-5 shadow-[0_0_10px_black]">
            <h1 className="text-xl font-bold px-5">{data?.title}</h1>
            <img src={data.img} alt="" className="W-full h-60" />
            <p>{data?.description}</p>
        </div>
    )
}
export default BlogList