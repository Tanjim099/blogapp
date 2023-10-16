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
            <div className="h-[88vh]">
                <form
                    onSubmit={onFormSubmit}
                    oValidate
                    className="flex flex-col border w-1/4 m-auto justify-center gap-3 rounded-lg p-4 ">
                    <h1>Login Form</h1>
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
                            className="bg-transparent px-3 py-1 border outline-none" />
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
                            className="bg-transparent px-3 py-1 border outline-none" />
                    </div>
                    <button type="submit" className=" bg-green-500">login</button>
                </form>
            </div>
        </HomeLayout>
    )
}

export default Login