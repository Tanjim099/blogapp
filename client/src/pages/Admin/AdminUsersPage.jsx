import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../layouts/AdminLayout";
import { useEffect } from "react";
import { getAllRegisteredUsers } from "../../redux/slices/StatSlice";

function AdminUsersPage() {
    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state?.stat?.allUsers)
    console.log(allUsers)
    useEffect(() => {
        (
            async () => {
                await dispatch(getAllRegisteredUsers())
            }
        )()
    }, [])
    return (
        <AdminLayout>
            <h1>UserPage</h1>
        </AdminLayout>
    )
}

export default AdminUsersPage