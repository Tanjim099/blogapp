import { useLocation } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

function ReadBlog() {
    const { state } = useLocation();
    // console.log({ "dataofread": state })
    console.log(state)
    return (
        <HomeLayout>
            <div className="w-[80%] m-auto mt-10">
                <div className="flex flex-col gap-5">
                    <h1 className=" text-3xl font-semibold">{state?.title}</h1>
                    <p>by {state?.author?.name}</p>
                    <img src={state?.img} alt="" className="w-[full] h-120 rounded-md" />
                    <p>{state?.content}</p>
                </div>
            </div>
        </HomeLayout>
    )
}

export default ReadBlog