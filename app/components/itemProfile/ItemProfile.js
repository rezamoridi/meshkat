export default function ItemProfile({image , icon}){
    return(
        <>
            <div className="item-profile text-white sm:text-xl bg-cyan-600/50 rounded-lg w-12 h-12 flex items-center justify-center overflow-hidden">
                {image ? <img src={image} alt="meshkat-logo" className="w-full h-auto object-contain"/> : icon}
            </div>
        </>
    )
}