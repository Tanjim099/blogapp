import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../layouts/AdminLayout";
import { useEffect, useState } from "react";
import { deleteBlog, getAllBlog } from "../../redux/slices/blogSlice";
import AdminNavbar from "../../components/Admin/AdminNavbar";

function AdminPostsPage() {
    const dispatch = useDispatch();
    const blogPostData = useSelector((state) => state?.blog?.blogList);
    console.log(blogPostData)

    let day = ""
    blogPostData.map((blog) => {
        const date = new Date(blog.date);

        day = date.getDate();
        console.log(day)
    })

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const indexOfLastItem = itemsPerPage * currentPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const numPages = Math.ceil(blogPostData.length / itemsPerPage);


    const slicedBlogPostData = blogPostData.slice(indexOfFirstItem, indexOfLastItem)

    async function onDeleteBlog(bloId) {
        if (window.confirm("Are you sure you want to delete blog")) {
            const response = await dispatch(deleteBlog(bloId));
            if (response?.payload?.status == true) {
                console.log(response?.payload?.status?.true)
                alert("Blog deleted successfully")
                await dispatch(getAllBlog())
            }
        }
    }

    useEffect(() => {
        (
            async () => {
                await dispatch(getAllBlog())
            }
        )()
    }, [])
    return (
        <AdminLayout>
            <div className="flex flex-col px-10 py-2 gap-4">
                <div className="">
                    <AdminNavbar />
                </div>
                <table className="table  border-2 border-[#0363e8] rounded-lg">
                    <thead>
                        <tr>
                            <th>S No</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Author</th>
                            <th>Image</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    {/* <div> */}
                    <tbody className="">

                        {
                            slicedBlogPostData?.map((blog, i) => {
                                const date = new Date(blog.updatedAt)
                                const day = date.getDate();
                                const month = date.getMonth();
                                const fullYear = date.getFullYear();
                                const year = fullYear.toString().slice(-2)
                                console.log(day)
                                return (
                                    <tr key={i} className="border-2 border-[#0363e8] mt-3 rounded-lg">
                                        <td>{i + 1}</td>
                                        <td>{blog.title}</td>
                                        <td>{blog.category}</td>
                                        <td>{blog.author.name}</td>
                                        <td><img src={blog.img} alt="" className="w-[100px] rounded-lg" /></td>
                                        <td>{day || " "} - {month || " "} - {year || "  "}</td>
                                        <td>
                                            <div className="flex gap-2">
                                                <button className="bg-green-500 text-white px-3 text-lg rounded-md"><i class='fa fa-edit'></i></button>
                                                <button onClick={() => onDeleteBlog(blog._id)} className="bg-red-500 text-white px-3 text-lg rounded-md"><i class="fa fa-trash-o"></i></button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                    {/* </div> */}
                </table>
                <div className=" w-[100%] m-auto flex items-center justify-center gap-7 mb-5">
                    <button className=" bg-[#003366] text-white px-2 py-1 rounded-md" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <p>{currentPage}</p>
                    <button className=" bg-[#003366] text-white px-2 py-1 rounded-md" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === numPages}>
                        Next
                    </button>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AdminPostsPage