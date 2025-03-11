import { IoPersonSharp } from "react-icons/io5"
import { FaPen } from "react-icons/fa";
import Link from "next/link";

export default function UserDashboardCard(data){
    return(
        <>
            <div className="user-dashboard-card max-w-[85svw] bg-white rounded-lg shadow-lg p-1 sm:p-2 flex items-center mx-auto lg:mx-0">
                <div className="user-profile-container">
                    <div className='user-profile w-16 h-16 bg-cyan-600/70 rounded-md flex items-center justify-center'>
                        <IoPersonSharp className="text-white text-2xl"/>
                    </div>
                </div>
                <div className="user-info-container mr-2 sm:mr-5">
                    <h5 className="username text-gray-700 sm:text-base text-sm">محمد حسن میر</h5>
                    <p className="role text-sm text-gray-500 my-1">admin</p>
                    <p className="email text-xs text-gray-500">mohasan1384@gmail.com</p>
                </div>
                    <Link href={'/admin/editme/1'} className="user-edit-btn mr-auto ml-1 mt-8 flex items-center p-2 sm:gap-3 bg-cyan-600/70 sm:bg-transparent sm:py-1 rounded-full sm:rounded-2xl group"><span className="text-xs sm:text-sm icon-container sm:bg-cyan-600/70 text-white rounded-full flex items-center justify-center sm:p-2 transition-all duration-300 group-hover:text-stone-600 "><FaPen /></span><p className="btn-title text-xs sm:bg-cyan-600/70 rounded-2xl text-white sm:px-2 py-1 transition-all duration-300 sm:group-hover:translate-x-2 hidden sm:block">ویرایش اطلاعات</p></Link>
            </div>
        </>
    )
}