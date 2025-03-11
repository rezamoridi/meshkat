import { FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import ItemProfile from "../itemProfile/ItemProfile";
export default function TeacherCard({name , image , role}){
    return(
        <>
            <div className="teacher-card w-[98%] rounded-lg bg-slate-200 h-16 group p-3 flex items-center my-2">
                <ItemProfile image={image}/>
                <div className="teacher-info mr-2 text-gray-600">
                    <h5 className="name ">{name}</h5>
                    <p className="role text-sm">{role}</p>
                </div>
                <div className="teacher-icons mr-auto flex text-lg items-center ml-2">
                    <FaCircleInfo className="text-blue-400 hover:text-blue-500 trasition duration-300 cursor-pointer"/>
                    <FaPen className="mx-4 cursor-pointer text-stone-400 hover:text-stone-500 trasition duration-300"/>
                    <FaTrashAlt className="text-red-400 hover:text-red-500 trasition duration-300 cursor-pointer"/>
                </div>
            </div>
        </>
    )
}