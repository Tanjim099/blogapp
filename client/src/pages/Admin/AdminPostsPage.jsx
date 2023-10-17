import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../layouts/AdminLayout";
import { useEffect } from "react";
import { getAllBlog } from "../../redux/slices/blogSlice";

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

    async function onLoadData() {
        await dispatch(getAllBlog())
    }
    useEffect(() => {
        onLoadData()
    }, [])
    return (
        <AdminLayout>
            <div className=" border-2">
                <table className="table overflow-x-scroll border-none">
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
                    <tbody>
                        {
                            blogPostData?.map((blog, i) => {
                                const date = new Date(blog.updatedAt)
                                const day = date.getDate();
                                const month = date.getMonth();
                                const fullYear = date.getFullYear();
                                const year = fullYear.toString().slice(-2)
                                console.log(day)
                                return (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{blog.title}</td>
                                        <td>{blog.category}</td>
                                        <td>{blog.author.name}</td>
                                        <td><img src={blog.img} alt="" className="w-[100px]" /></td>
                                        <td>{day || " "} - {month || " "} - {year || "  "}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    )
}

export default AdminPostsPage