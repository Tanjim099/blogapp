import { useDispatch } from "react-redux";
import HomeLayout from "../layouts/HomeLayout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getProfile, login } from "../redux/slices/authSilce";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: ""
    })

    function handleUserInput(e) {
        const { name, value } = e.target;
        setLoginDetails({
            ...loginDetails,
            [name]: value
        })
    }

    async function onFormSubmit(e) {
        e.preventDefault();
        if (!loginDetails.email || !loginDetails.password) {
            alert("All fields are required");
            return;
        }

        const response = await dispatch(login(loginDetails))
        if (response?.payload?.data) {
            const userDetails = dispatch(getProfile())
            navigate("/")
        }
    }
    return (
        <HomeLayout>
            <div className=" min-h-[58vh] flex">
                <form
                    onSubmit={onFormSubmit}
                    oValidate
                    className="w-[90%] flex flex-col border sm:w-1/4 m-auto justify-center gap-3 rounded-lg p-6 ">
                    <h1 className="text-center text-3xl font-semibold">Login Form</h1>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold">
                            Email
                        </label>
                        <input
                            onChange={handleUserInput}
                            value={loginDetails.email}
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
                            value={loginDetails.password}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="enter password..."
                            className="bg-transparent px-3 py-2 border outline-none rounded-md" />
                    </div>
                    <button type="submit" className=" bg-[#003366] mt-5 p-2 text-white rounded-md">Login</button>
                </form>
            </div>
        </HomeLayout>
    )
}

export default Login