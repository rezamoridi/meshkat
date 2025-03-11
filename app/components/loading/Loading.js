import Image from "next/image"
export default function Loading(){
    return(
        <>
            <div className="loading bg-white w-full z-10 h-dvh flex flex-col justify-center items-center fixed top-0">
                   <Image src='/assets/images/logo.png' alt="meshkat-logo" width={100} height={100} className="w-20 h-auto object-contain md:w-24"/>
                   <div >
                    <Image src='/assets/images/loading.svg' alt="meshkat-loading" width={100} height={100} className="w-20 -mt-3 md:w-24"/>
                   </div>
            </div>
        </>
    )
}