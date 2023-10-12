import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function MainBlogCard() {
    const navigate = useNavigate()
    const blogData = useSelector((state) => state?.blog?.blogList?.getAllBlog)
    console.log(blogData)
    return (
        <div>
            {
                blogData && (<div className="flex w-[100%] h-[400px] border-2 mb-3 relative">
                    <div className="w-[50%] bg-red-200 border-3 relative" onClick={() => navigate("/blog/read", { state: { ...blogData[0] } })}>
                        <img className="w-[100%] h-[100%]" src={blogData[0]?.img} alt="" />
                        <p className=" absolute bottom-[24%] left-3 bg-yellow-400 px-2 rounded-md">News</p>
                        <h2 className=" text-2xl font-semibold text-white absolute bottom-[7%] left-3">{blogData[0]?.title}</h2>
                        <p className="absolute bottom-1 left-3 text-white text-sm font-bold">By David</p>
                    </div>
                    <div className="w-[50%] bg-amber-700 flex flex-col">
                        <div className="flex items-center border-3 border-gray-400 justify-between h-[50%] bg-amber-500">
                            <div className="w-[50%] h-[100%] border-4 border-white relative" onClick={() => navigate("/blog/read", { state: { ...blogData[1] } })}>
                                <img className="w-[100%] h-[100%]" src={blogData[1].img} alt="" />
                                <p className=" absolute bottom-[24%] left-3 bg-yellow-400 px-2 rounded-md">News</p>
                                <h2 className=" text-2xl font-semibold text-white absolute bottom-[7%] left-3">{blogData[1]?.title}</h2>
                                <p className="absolute bottom-1 left-3 text-white text-sm font-bold">By David</p>
                            </div>
                            <div className="w-[50%] h-[100%] border-4 border-white relative">
                                <img className="w-[100%] h-[100%]" src={blogData[2].img} alt="" />
                                <p className=" absolute bottom-[24%] left-3 bg-yellow-400 px-2 rounded-md">News</p>
                                <h2 className=" text-2xl font-semibold text-white absolute bottom-[7%] left-3">{blogData[2]?.title}</h2>
                                <p className="absolute bottom-1 left-3 text-white text-sm font-bold">By David</p>
                            </div>
                        </div>
                        <div className="flex items-center border-4 border-white justify-between h-[50%] bg-amber-900">
                            <div className="w-[50%] h-[100%] border-2 border-white bg-red-600 relative">
                                <img className="w-[100%] h-[100%]" src={blogData[3].img} alt="" />
                                <p className=" absolute bottom-[24%] left-3 bg-yellow-400 px-2 rounded-md">News</p>
                                <h2 className=" text-xl font-semibold text-white absolute bottom-[7%] left-3">{blogData[3]?.title}</h2>
                                <p className="absolute bottom-1 left-3 text-white text-sm font-bold">By David</p>
                            </div>
                            <div className="w-[50%] h-[100%] border-2 border-white bg-red-600 relative">
                                <img className="w-[100%] h-[100%]" src={blogData[4].img} alt="" />
                                <div className="flex  gap-20px relative bottom-[80%]">
                                    <p className=" absolute left-3 bg-yellow-400 px-2 rounded-md">News</p>
                                    <h2 className="absolute text-xl font-semibold text-white">{blogData[4]?.title}</h2>
                                    <p className="absolute  text-white text-sm font-bold">By David</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div >
    )
}

export default MainBlogCard