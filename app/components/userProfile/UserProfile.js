import { IoPersonSharp } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
export default function UserProfile({pen}){

    return(
        <>
            <div className='user-profile w-24 h-24 bg-cyan-600 rounded-md flex items-center justify-center relative overflow-hidden group'>
                <IoPersonSharp className="text-white text-2xl"/>
                <span className={`absolute w-full h-0 bg-gray-400/60 text-white backdrop-blur-sm flex items-center justify-center bottom-0 transition-[height] group-hover:h-1/4 group-hover:cursor-pointer ${pen ? '' : 'hidden'}`}><FaPen className="text-transparent group-hover:text-white"/></span>
            </div>
        </>
    )
}