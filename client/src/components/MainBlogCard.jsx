import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function MainBlogCard({ data }) {
    // console.log(data)
    const navigate = useNavigate()
    // const blogData = useSelector((state) => state?.blog?.blogList)
    return (
        // <div>
        //     {
        //         blogData && (<div className="flex w-[100%] h-[400px] border-2 mb-3 relative">
        //             <div className="w-[50%] bg-red-200 border-3 relative cursor-pointer" onClick={() => navigate(`/blog/${blogData[0]?._id}`, { state: { ...blogData[0] } })}>
        //                 <img className="w-[100%] h-[100%]" src={blogData[0]?.img} alt="" />
        //                 <p className=" absolute bottom-[24%] left-3 bg-yellow-400 px-2 rounded-md">{blogData[0]?.category}</p>
        //                 <h2 className=" text-2xl font-semibold text-white absolute bottom-[7%] left-3">{blogData[0]?.title}</h2>
        //                 <p className="absolute bottom-1 left-3 text-white text-sm font-bold">By {blogData[0]?.author?.name}</p>
        //             </div>
        //             <div className="w-[50%] bg-amber-700 flex flex-col">
        //                 <div className="flex items-center border-3 border-gray-400 justify-between h-[50%] bg-amber-500">
        //                     <div className="w-[50%] h-[100%] border-4 border-white relative cursor-pointer" onClick={() => navigate(`/blog/${blogData[1]?._id}`, { state: { ...blogData[1] } })}>
        //                         <img className="w-[100%] h-[100%]" src={blogData[1]?.img} alt="" />
        //                         <p className=" absolute bottom-[24%] left-3 bg-yellow-400 px-2 rounded-md">{blogData[1]?.category}</p>
        //                         <h2 className=" text-2xl font-semibold text-white absolute bottom-[7%] left-3">{blogData[1]?.title}</h2>
        //                         <p className="absolute bottom-1 left-3 text-white text-sm font-bold">By {blogData[1]?.author?.name}</p>
        //                     </div>
        //                     <div className="w-[50%] h-[100%] border-4 border-white relative cursor-pointer" onClick={() => navigate(`/blog/${blogData[2]?._id}`, { state: { ...blogData[2] } })}>
        //                         <img className="w-[100%] h-[100%]" src={blogData[2]?.img} alt="" />
        //                         <p className=" absolute bottom-[24%] left-3 bg-yellow-400 px-2 rounded-md">{blogData[2]?.category}</p>
        //                         <h2 className=" text-2xl font-semibold text-white absolute bottom-[7%] left-3">{blogData[2]?.title}</h2>
        //                         <p className="absolute bottom-1 left-3 text-white text-sm font-bold">By {blogData[2]?.author?.name}</p>
        //                     </div>
        //                 </div>
        //                 <div className="flex items-center border-4 border-white justify-between h-[50%] bg-amber-900">
        //                     <div className="w-[50%] h-[100%] border-2 border-white bg-red-600 relative cursor-pointer" onClick={() => navigate(`/blog/${blogData[3]?._id}`, { state: { ...blogData[3] } })}>
        //                         <img className="w-[100%] h-[100%]" src={blogData[3]?.img} alt="" />
        //                         <p className=" absolute bottom-[24%] left-3 bg-yellow-400 px-2 rounded-md">{blogData[3]?.category}</p>
        //                         <h2 className=" text-xl font-semibold text-white absolute bottom-[7%] left-3">{blogData[3]?.title}</h2>
        //                         <p className="absolute bottom-1 left-3 text-white text-sm font-bold">By {blogData[3]?.author?.name}</p>
        //                     </div>
        //                     <div className="w-[50%] h-[100%] border-2 border-white bg-red-600 relative cursor-pointer" onClick={() => navigate(`/blog/${blogData[4]?._id}`, { state: { ...blogData[4] } })}>
        //                         <img className="w-[100%] h-[100%]" src={blogData[4]?.img} alt="" />
        //                         <div className="flex  gap-20px relative bottom-[80%]">
        //                             <p className=" absolute left-3 bg-yellow-400 px-2 rounded-md">{blogData[4]?.category}</p>
        //                             <h2 className="absolute text-xl font-semibold text-white">{blogData[4]?.title}</h2>
        //                             <p className="absolute  text-white text-sm font-bold">By {blogData[4]?.author?.name}</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>)
        //     }
        // </div >
        <div>
            <div className="  border-2 mb-3 relative sm:flex  w-[100%]">
                <div className="sm:w-[50%]  bg-red-200 border-3 relative cursor-pointer" onClick={() => navigate(`/blog/${data[0]?._id}`, { state: { ...data[0] } })}>
                    <img className="w-[100%] h-[100%]" src={data[0]?.img} alt="" />
                    <p className=" absolute sm:bottom-[24%] bottom-[40%] left-3 bg-yellow-400 px-2 rounded-md">{data[0]?.category}</p>
                    <h2 className="sm:text-2xl text-xl leading-5 font-semibold text-white absolute sm:bottom-[7%] bottom-[12%] left-3">{data[0]?.title}</h2>
                    <p className="absolute bottom-1 left-3 text-white text-sm font-bold">By {data[0]?.author?.name}</p>
                </div>
                <div className="sm:w-[50%]  bg-amber-700 flex sm:flex-col flex-row overflow-x-auto sm:overflow-hidden">
                    <div className="flex items-center border-3 border-gray-400 justify-between h-[150px] sm:h-[50%] bg-amber-500">
                        <div className="sm:w-[50%] sm:h-[100%] h-[100%] w-[300px] border-4 border-white relative cursor-pointer" onClick={() => navigate(`/blog/${data[1]?._id}`, { state: { ...data[1] } })}>
                            <img className="w-[100%] h-[100%]" src={data[1]?.img} alt="" />
                            <p className=" absolute sm:bottom-[24%] bottom-[50%] left-3 bg-yellow-400 px-2 rounded-md">{data[1]?.category}</p>
                            <h2 className=" sm:text-lg font-medium sm:leading-6 text-white absolute bottom-[7%] left-3">{data[1]?.title}</h2>
                            {/* <p className="hidden sm:block md:block absolute bottom-1 left-3 text-white text-sm font-bold">By {data[1]?.author?.name}</p> */}
                        </div>
                        <div className="sm:w-[50%] h-[100%] w-[300px] border-4 border-white relative cursor-pointer" onClick={() => navigate(`/blog/${data[2]?._id}`, { state: { ...data[2] } })}>
                            <img className="w-[100%] h-[100%]" src={data[2]?.img} alt="" />
                            <p className=" absolute sm:bottom-[24%] bottom-[50%] left-3 bg-yellow-400 px-2 rounded-md">{data[2]?.category}</p>
                            <h2 className="sm:text-lg font-medium sm:leading-6 text-white absolute bottom-[7%] left-3">{data[2]?.title}</h2>
                            {/* <p className="sm:block md:block hidden absolute sm:bottom-1 left-3 text-white text-sm font-bold">By {data[2]?.author?.name}</p> */}
                        </div>
                    </div>
                    <div className="flex items-center border-4 border-white justify-between sm:h-[50%] h-[150px] bg-amber-900">
                        <div className="sm:w-[50%] h-[100%] w-[300px] border-2 border-white bg-red-600 relative cursor-pointer" onClick={() => navigate(`/blog/${data[3]?._id}`, { state: { ...data[3] } })}>
                            <img className="w-[100%] h-[100%]" src={data[3]?.img} alt="" />
                            <p className=" absolute sm:bottom-[24%] bottom-[50%] left-3 bg-yellow-400 px-2 rounded-md">{data[3]?.category}</p>
                            <h2 className="sm:text-lg font-medium sm:leading-6 text-white absolute bottom-[7%] left-3">{data[3]?.title}</h2>
                            {/* <p className="sm:block md:block hidden absolute bottom-1 left-3 text-white text-sm font-bold">By {data[3]?.author?.name}</p> */}
                        </div>
                        <div className="sm:w-[50%] h-[100%] w-[300px] border-2 border-white bg-red-600 relative cursor-pointer" onClick={() => navigate(`/blog/${data[4]?._id}`, { state: { ...data[4] } })}>
                            <img className="w-[100%] h-[100%]" src={data[4]?.img} alt="" />
                            {/* <div className="flex  gap-20px relative bottom-[80%]"> */}
                            <p className=" absolute sm:bottom-[24%] bottom-[50%] left-3 bg-yellow-400 px-2 rounded-md">{data[4]?.category}</p>
                            <h2 className="sm:text-lg font-medium sm:leading-6 text-white absolute bottom-[7%] left-3">{data[4]?.title}</h2>
                            {/* <p className="sm:block md:block hidden absolute sm:bottom-1 left-3 text-white text-sm font-bold">By {data[4]?.author?.name}</p> */}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MainBlogCard