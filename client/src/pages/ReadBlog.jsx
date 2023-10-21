import { useLocation, useNavigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllBlog } from "../redux/slices/blogSlice";

function ReadBlog() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { state } = useLocation();
    console.log(state.category);

    const datas = useSelector((state) => state?.blog?.blogList);
    console.log(datas)
    const [categoryBasedData, setCategoryBasedData] = useState([]);
    function fun() {
        const newData = datas.filter((data) => {
            return data.category === state.category
        })
        setCategoryBasedData(newData)
    }
    console.log(categoryBasedData)
    // console.log(newData)
    useEffect(() => {
        (
            async () => {
                await dispatch(getAllBlog())
            }
        )()
        fun();
    }, [])
    return (
        <HomeLayout>
            <div className="sm:w-[80%] w-full p-4 sm:p-0 md:p-0 m-auto mt-10">
                <div className="flex flex-col gap-2">
                    <h1 className=" sm:text-3xl text-2xl font-semibold">{state?.title}</h1>
                    <div className="flex gap-6">
                        <div className=" w-[70%] flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-2">
                                    <img className="w-[30px] cursor-pointer" src="https://static-00.iconduck.com/assets.00/profile-circle-icon-1023x1024-ucnnjrj1.png" alt="" />
                                    <p className=" cursor-pointer">By {state?.author?.name}</p>
                                </div>
                                <p>-</p>
                                <p className=" cursor-pointer">{state?.category}</p>
                            </div>
                            <img src={state?.img} alt="" className="w-full h-120 rounded-md" />
                            <p className="">{state?.content}</p>
                        </div>
                        <div className=" w-[30%] mt-8">
                            <div className=" flex flex-col gap-6 ">
                                {categoryBasedData?.map((data, i) => {
                                    return (
                                        <div
                                            key={i}
                                            onClick={() => navigate(`/blog/${data?._id}`, { state: { ...data } })}
                                            className="h-[120px] flex gap-2 shadow-[0_0_1px_black] rounded-sm p-2 cursor-pointer "
                                        >

                                            <img src={data.img} alt="" className="w-[120px] rounded-sm" />
                                            <h3 className=" font-bold overflow-hidden">{data.title}</h3>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default ReadBlog