import Link from "next/link"
import Image from "next/image"
import { RxDashboard } from "react-icons/rx";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { PiArticleMediumDuotone } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { RiArrowRightWideFill } from "react-icons/ri";
import { useState } from "react";


export default function UserVerticalNav() {

    const [navState, setNavState] = useState(true)

    const { route } = useRouter()

    const showNavHandler = () => {
        navState == true ? setNavState(false) : setNavState(true)
    }

    return (
        <>
            <div className={`vertical-nav h-dvh bg-white fixed top-0 left-0 flex flex-col items-center shadow-lg transition-all duration-300 ${navState ? 'w-[18svw]' : 'w-[6svw]'}`}>
                <span className="nav-btn absolute w-6 h-14 bg-cyan-600 border-4 border-white rounded-xl top-28 -right-2 flex items-center justify-center text-white cursor-pointer" onClick={showNavHandler}><RiArrowRightWideFill /></span>
                <div className="nav-logo w-16 h-20">
                    <Image src='/assets/images/logo.png' alt="meshkat-logo" width={100} height={100} className="w-full h-auto object-contain" />
                </div>
                <div className="nav-items mt-24 w-full">
                    <ul className="flex flex-col justify-center items-center">
                        <li className="w-full"><Link className={`flex justify-between items-center px-8 my-3 py-3 ${route == '/userpanel' ? 'text-cyan-600' : 'text-gray-700'} `} href={'/userpanel'}><p className={`overflow-hidden whitespace-nowrap ${navState ? 'w-auto' : 'w-0'} `}>داشبورد</p><RxDashboard className={`flex-shrink-0 text-2xl`} /></Link></li>
                        <li className="w-full"><Link className={`flex justify-between items-center px-8 my-3 py-3 ${route == '/userpanel/userevents' ? 'text-cyan-600' : 'text-gray-700'} `} href={'/userpanel/userevents'}><p className={`overflow-hidden whitespace-nowrap ${navState ? 'w-auto' : 'w-0'} `}>رویداد های ثبت نام شده</p><MdOutlineSmartDisplay className={`flex-shrink-0 text-2xl `} /></Link></li>
                        <li className="w-full"><Link className={`flex justify-between items-center px-8 my-3 py-3 ${route == '/userpanel/userarticles' ? 'text-cyan-600' : 'text-gray-700'} `} href={'/userpanel/userarticles'}><p className={`overflow-hidden whitespace-nowrap ${navState ? 'w-auto' : 'w-0'} `}>مقالات مورد علاقه</p><PiArticleMediumDuotone className={`flex-shrink-0 text-2xl `} /></Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}