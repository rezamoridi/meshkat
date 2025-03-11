import ItemProfile from "../itemProfile/ItemProfile";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineSmartDisplay } from "react-icons/md";

export default function UserEventCard({subject , image , code}){
    return(
        <>
            <div className="user-event-card w-[98%] rounded-lg bg-slate-200 h-16 group p-3 flex items-center my-2">
                <ItemProfile image={image} icon={<MdOutlineSmartDisplay/>}/>
                <div className="user-event-info mr-2 text-gray-600">
                    <h5 className="name ">{subject}</h5>
                    <p className="role text-sm">{code}</p>
                </div>
                <div className="user-event-btns mr-auto flex text-lg items-center ml-2">
                    <RxCross2 className="text-red-400 hover:text-red-500 trasition duration-300 cursor-pointer"/>
                </div>
            </div>
        </>
    )
}