import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../layouts/AdminLayout";
import { useEffect, useState } from "react";
import { deleteUSer, getAllRegisteredUsers } from "../../redux/slices/StatSlice";
import AdminNavbar from "../../components/Admin/AdminNavbar";

function AdminUsersPage() {
    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state?.stat?.allUsers);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 11;
    const indexOfLastItem = itemsPerPage * currentPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const numPages = Math.ceil(allUsers.length / itemsPerPage)

    const sliceAllUsers = allUsers.slice(indexOfFirstItem, indexOfLastItem)

    async function onDeleteUser(userId, name) {
        if (window.confirm(`Are you sure you want to delete ${name} author account`)) {
            const response = await dispatch(deleteUSer(userId))
            console.log(response)
            if (response?.payload?.success == true) {
                alert(`${name} deleted successful`)
                await dispatch(getAllRegisteredUsers())
            }
        }
    }
    useEffect(() => {
        (
            async () => {
                await dispatch(getAllRegisteredUsers())
            }
        )()
    }, [])
    return (
        <AdminLayout>
            <div className="flex flex-col px-10 py-2 gap-2 w-[100%]">
                <div>
                    <AdminNavbar />
                </div>
                <table className="table border-2 border-[#0363e8] rounded-lg">
                    <thead>
                        <tr>
                            <th>S No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Id</th>
                            <th>Register Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sliceAllUsers.map((user, i) => {
                                const date = new Date(user.createdAt);
                                const day = date.getDate()
                                const monthArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
                                const month = monthArr[date.getMonth()];
                                const fullYear = date.getFullYear();
                                const year = fullYear.toString().slice(-2)
                                return (
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td>{user.name.toUpperCase()}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td>{user._id}</td>
                                        <td>{day} - {month} - {year}</td>
                                        <td>
                                            <button onClick={() => onDeleteUser(user._id, user.name)} className="bg-red-500 text-white px-3 text-lg rounded-md"><i class="fa fa-trash-o"></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
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

export default AdminUsersPage