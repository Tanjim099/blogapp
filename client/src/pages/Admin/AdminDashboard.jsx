import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../layouts/AdminLayout";
import { useEffect, useState } from "react";
import { getStatsData } from "../../redux/slices/StatSlice";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, Title, BarElement } from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, BarElement, Tooltip, Legend, CategoryScale, LinearScale, Title)

function AdminDashboard() {
    const dispatch = useDispatch();

    const { allUsersCount, allBlogsCount } = useSelector((state) => state.stat);
    console.log(allUsersCount, allBlogsCount)
    async function onGetStatData() {
        await dispatch(getStatsData())
    }

    const [chartData, setChartData] = useState({});

    useEffect(() => {

        const data = {
            labels: ["Jan", "Fab", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
                {
                    label: 'Blog Posts',
                    data: [0, 0, 0, 0, 0, 0, 0, 1, 8, 30, 0, 0],
                    backgroundColor: '#f84d6a',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                },
                {
                    label: 'User Registrations',
                    data: [0, 0, 0, 0, 0, 0, 3, 4, 6, 12, 0, 0],
                    backgroundColor: '#0363e8',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                }
            ],
        };

        setChartData(data);
        onGetStatData()
    }, []);
    return (
        <div>
            <AdminLayout>
                <div className="w-[100%] flex flex-col gap-10 px-10 py-10">
                    <div className="flex justify-evenly w-[100%] gap-10">
                        <div className="w-[33%] h-[150px] bg-[#0363e8] flex flex-col items-center text-center justify-center gap-1 text-white rounded-md">
                            <h3 className="text-2xl font-semibold">Total Users</h3>
                            <div className="flex items-center gap-5">
                                <p className=" text-5xl"><i class='fa fa-users'></i></p>
                                <h1 className=" text-7xl font-semibold">{allUsersCount}</h1>
                            </div>
                        </div>
                        <div className="w-[33%] h-[150px] bg-[#f84d6a] flex flex-col items-center text-center justify-center gap-1 text-white rounded-md">
                            <h3 className="text-2xl font-semibold">Total Posts</h3>
                            <div className="flex items-center gap-5">
                                <p className=" text-5xl"><i class="fa fa-blogger"></i></p>
                                <h1 className=" text-7xl font-semibold">{allBlogsCount}</h1>
                            </div>
                        </div>
                        <div className="w-[33%] h-[150px] bg-[#059969] flex flex-col items-center text-center justify-center gap-1 text-white rounded-md">
                            <h3 className="text-2xl font-semibold">Total Subscribers</h3>
                            <div className="flex items-center gap-5">
                                <p className=" text-5xl"><i class="fa fa-bell"></i></p>
                                <h1 className=" text-7xl font-semibold">11</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex ga">
                        <div className="h-[400px] w-[70%] bg-white">
                            <Bar data={chartData} options={{ responsive: true }} />
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </AdminLayout>

        </div>
    )
}

export default AdminDashboard