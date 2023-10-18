import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../layouts/AdminLayout";
import { useEffect } from "react";
import { deleteUSer, getAllRegisteredUsers } from "../../redux/slices/StatSlice";
import AdminNavbar from "../../components/Admin/AdminNavbar";

function AdminUsersPage() {
    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state?.stat?.allUsers);

    async function onDeleteUser(userId) {
        const response = await dispatch(deleteUSer(userId))
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
            <div className="flex flex-col px-10 py-2 gap-4 w-[100%]">
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
                            allUsers.map((user, i) => {
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
                                            <button onClick={() => onDeleteUser(user._id)} className="bg-red-500 text-white px-3 text-lg rounded-md"><i class="fa fa-trash-o"></i></button>
                                        </td>
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

export default AdminUsersPage