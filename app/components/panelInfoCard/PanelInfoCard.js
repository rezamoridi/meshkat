import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
export default function AdminPanelInfoCard({icon , title , info , link}){
    return(
        <>
            <Link href={`/admin${link}`} className="w-full h-full bg-cyan-600/50 rounded-lg sm:p-2 flex items-center cursor-pointer group">
                    <div className="logo-container text-white p-4 text-2xl sm:text-3xl sm:p-5 group-hover:text-cyan-800 transition-all duration-300">
                        {icon}
                    </div>
                    <div className="info-container mr-1 text-white text-sm sm:text-base">
                        <h5 className="title whitespace-nowrap">{title}</h5>
                        <p className="info whitespace-nowrap">{info}</p>
                    </div>
                    <div className="btn mr-auto ml-2 sm:ml-5 text-white group-hover:text-cyan-800 ">
                        <IoIosArrowBack className="transition-all duration-300 text-2xl sm:text-3xl"/>
                    </div>
            </Link>
        </>
    )
}