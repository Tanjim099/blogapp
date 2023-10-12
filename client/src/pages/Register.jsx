import { useDispatch } from "react-redux";
import HomeLayout from "../layouts/HomeLayout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createAccount } from "../redux/slices/authSilce";

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
            alert("All field are required");
            return
        }
        const response = await dispatch(createAccount(registerDetails))
        console.log(response)
    }
    return (
        <HomeLayout>
            <div className="h-[88vh]">
                <form
                    onSubmit={onFormSubmit}
                    oValidate
                    className="flex flex-col border w-1/4 m-auto justify-center gap-3 rounded-lg p-4 ">
                    <h1>Register Form</h1>
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
                            className="bg-transparent px-3 py-1 border outline-none" />
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
                            className="bg-transparent px-3 py-1 border outline-none" />
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
                            className="bg-transparent px-3 py-1 border outline-none" />
                    </div>
                    <button type="submit" className=" bg-green-500">Register</button>
                </form>
            </div>
        </HomeLayout>
    )
}

export default Register