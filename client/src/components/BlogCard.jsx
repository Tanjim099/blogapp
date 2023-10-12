import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlog } from "../redux/slices/blogSlice";
import { useNavigate } from "react-router-dom";

function BlogList({ data, userData }) {
    // console.log(data)
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate("/blog/read", { state: { ...data } })}
            className="w-80 flex flex-col gap-5 shadow-[0_0_10px_black]">
            <h1 className="text-xl font-bold px-5">{data?.title}</h1>
            <img src={data.img} alt="" className="W-full h-60" />
            {/* <p>{data.author.name}</p> */}
            <p>{data?.description}</p>
            <button>Read more...</button>
        </div>
    )
}
export default BlogList