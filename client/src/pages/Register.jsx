import { useDispatch } from "react-redux";
import HomeLayout from "../layouts/HomeLayout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createAccount } from "../redux/slices/authSilce";
import toast from "react-hot-toast";

function Register() {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [registerDetails, setRegisterDetails] = useState({
        name: "",
        email: "",
        password: ""
    })

    function handleUserInput(e) {
        const { name, value } = e.target;
        setRegisterDetails({
            ...registerDetails,
            [name]: value
        })
    }

    async function onFormSubmit(e) {
        e.preventDefault()
        if (!registerDetails.name || !registerDetails.email || !registerDetails.password) {
            toast.error("All field are required");
            return
        }
        const response = await dispatch(createAccount(registerDetails))

        if (response?.payload?.data) {
            navigate("/login")
        }
        console.log(response)
    }
    return (
        <HomeLayout>
            <div className=" min-h-[58vh] flex">
                <form
                    onSubmit={onFormSubmit}
                    oValidate
                    className="w-[90%] flex flex-col border sm:w-1/4 m-auto justify-center gap-3 rounded-lg p-6 ">
                    <h1 className="text-center text-3xl font-semibold">Register Form</h1>
                    <div className="flex flex-col gap-1">

                        <label htmlFor="name" className="font-semibold">
                            Name
                        </label>
                        <input
                            onChange={handleUserInput}
                            value={registerDetails.name}
                            type="text"
                            name="name"
                            id="name"
                            placeholder="enter username..."
                            className="bg-transparent px-3 py-2 border outline-none rounded-md" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold">
                            Email
                        </label>
                        <input
                            onChange={handleUserInput}
                            value={registerDetails.email}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="enter email..."
                            className="bg-transparent px-3 py-2 border outline-none rounded-md" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="font-semibold">
                            Password
                        </label>
                        <input
                            onChange={handleUserInput}
                            value={registerDetails.password}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="enter password..."
                            className="bg-transparent px-3 py-2 border outline-none rounded-md" />
                    </div>
                    <button type="submit" className=" bg-[#003366] mt-5 p-2 text-white rounded-md">Register</button>
                </form>
            </div>
        </HomeLayout>
    )
}

export default Register