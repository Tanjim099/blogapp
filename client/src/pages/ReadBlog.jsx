import { useLocation } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import { useSelector } from "react-redux";
import { useState } from "react";

function ReadBlog() {
    const { state } = useLocation();
    // const data = useSelector((state) => state?.blog?.blogList);
    // console.log(data)
    // console.log({ "dataofread": state })
    // console.log(state._id)
    return (
        <HomeLayout>
            <div className="w-[80%] m-auto mt-10">
                <div className="flex flex-col gap-2">
                    <h1 className=" text-3xl font-semibold">{state?.title}</h1>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2">
                            <img className="w-[30px] cursor-pointer" src="https://static-00.iconduck.com/assets.00/profile-circle-icon-1023x1024-ucnnjrj1.png" alt="" />
                            <p className=" cursor-pointer">By {state?.author?.name}</p>
                        </div>
                        <p>-</p>
                        <p className=" cursor-pointer">{state?.category}</p>
                    </div>
                    <img src={state?.img} alt="" className="w-[full] h-120 rounded-md" />
                    <p>{state?.content}</p>
                </div>
            </div>
        </HomeLayout>
    )
}

export default ReadBlog