
export default function CourseInfoCard({icon , title , info}){
    return(
        <>
            <div className="course-info-card bg-white shadow-lg w-72 h-24 rounded-lg m-3 flex items-center">
                <div className="icon mr-3 text-3xl text-cyan-600">
                    {icon}
                </div>
                <div className="text mr-5">
                    <h5 className="title font-bold text-lg text-gray-600">{title}</h5>
                    <p className="info text-gray-500 text-sm mt-2">{info}</p>
                </div>
            </div>
        </>
    )
}