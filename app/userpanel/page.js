"use client"

import UserDashboardCard from "@/app/components/userDashboardCard/UserDashboardCard"
import VerticalNav from "@/app/components/verticalNav/VerticalNav"
import PanelInfoCard from "@/app/components/panelInfoCard/PanelInfoCard";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { getCookie } from "cookies-next/client";
import { useState } from "react";
import { PiUserBold } from "react-icons/pi";
import { FaRegNewspaper } from "react-icons/fa6";
import HeadingSign from "@/app/components/headingSign/HeadingSign";
import BurgerMenu from "@/app/components/burgerMenu/BurgerMenu";

export default function AdminPanel({ data }) {

    const [navState, setNavState] = useState(false)

    return (
        <>
            {navState && <div className="filter absolute bg-white/20 backdrop-blur-sm w-full h-full z-10 hidden lg:block"></div>}
            <BurgerMenu />
            <div className="admin-panel bg-slate-100 min-h-svh pb-5 pt-24 lg:pt-[13px] lg:pr-32 ">
                <VerticalNav navState={navState} setNavState={setNavState} />
                <UserDashboardCard />
                <div className="over-view bg-white pb-5 rounded-lg h-auto max-w-[85svw] shadow-lg mt-5 p-5 relative lg:mx-0 mx-auto">
                    <HeadingSign />
                    <h1 className="text-base sm:text-xl font-bold text-gray-700 ">نمای کلی</h1>
                    <div className="over-view-info mt-3 sm:mt-5">
                        <div className="row flex flex-wrap">
                            <div className="col w-full md:w-1/2 lg:w-1/4 h-full p-2">
                                <PanelInfoCard link={'/students'} icon={<PiUserBold />} title={'کاربران'} info={'100'} />
                            </div>
                            <div className="col w-full md:w-1/2 lg:w-1/4 h-full p-2">
                                <PanelInfoCard link={'/events'} icon={<MdOutlineSmartDisplay />} title={'رویداد ها'} info={'100'} />
                            </div>
                            <div className="col w-full md:w-1/2 lg:w-1/4 h-full p-2">
                                <PanelInfoCard link={'/teachers'} icon={<FaChalkboardTeacher />} title={'اساتید'} info={'100'} />
                            </div>
                            <div className="col w-full md:w-1/2 lg:w-1/4 h-full p-2">
                                <PanelInfoCard link={'/news'} icon={<FaRegNewspaper />} title={'اخبار'} info={'100'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}














// export async function getServerSideProps(context) {

//     const token = context.req.cookies['token']

//     // if (!token) {
//     //     return {
//     //         redirect: {
//     //             destination: "/login",
//     //             permanent: false, 
//     //         },
//     //     };
//     // }


//     // const res = await fetch('http://185.105.239.52:8000/api/admin/get_me', {
//     //     method: 'GET',
//     //     headers: {
//     //         'Accept': 'application/json',
//     //         'Content-Type': 'application/json',
//     //         'Authorization': `Bearer ${token}`,
//     //     },    
//     //     credentials: 'include', 
//     // })

//     // const data = await res.json()

//     return {
//         props: {
//             // data
//         }
//     }
// }