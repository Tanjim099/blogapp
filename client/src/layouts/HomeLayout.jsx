import { NavLink } from "react-router-dom"

function HomeLayout({ children }) {
    return (
        <div className=" min-h-[90vh]">
            <div className="w-[80%] h-[8vh] flex item-center justify-between p-5 bg-red-400 m-auto">
                <div>
                    <NavLink to="/"><button>Logo</button></NavLink>
                </div>
                <div className=" flex gap-5">
                    <NavLink to="/"><button>Home</button></NavLink>
                    <NavLink to="/blogs"><button>Blogs</button></NavLink>
                    <NavLink to="/addblog"><button>Add Blog</button></NavLink>
                    <NavLink to="/contact"><button>Contact Us</button></NavLink>
                </div>
            </div>
            {children}
        </div>
    )
}

export default HomeLayout