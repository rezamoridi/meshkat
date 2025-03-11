async function getCourses() {
    try {
        const res = await fetch("http://185.105.239.52:8000/api/admin/event/get_all/?skip=0&limit=100", {
            cache: "no-store", // Avoid caching
        })
        return res.json();
    } catch (e) {
        console.log(e);
    }
}

export default async function Courses() {

    const courses = await getCourses();

    return (
        <div>
            {/* header start */}
            <div className="h-16 bg-white shadow-xl shadow-cyan-100 px-52 flex flex-row justify-between fixed left-0 right-0 top-0 z-50 items-center py-3">
                <div className="flex flex-row h-full gap-5">
                    <input type="datetime" className="h-full border-cyan-500 border-2 rounded-lg px-2 text-center" placeholder="تاریخ شروع" />
                    <input className="h-full border-cyan-500 border-2 rounded-lg px-2 text-center" placeholder="تاریخ پایان" />
                </div>
                <input className="border-2 border-cyan-500 rounded-lg w-[50%] h-full px-2 text-center" placeholder="جستجوی دوره" />
                <div className="h-full flex-row-reverse items-center gap-5 flex">
                    <img className="w-8" src="/logo.png" />
                    <p className="font-bold text-xl">دوره ها</p>
                </div>
            </div>
            {/* header end */}
            {/* courese start */}
            <div className="grid w-full grid-cols-4 h-full py-10 gap-10 px-52 mt-16">
                {courses && courses.map((event) => (
                    <div key={event.id} className="bg-white rounded-xl flex flex-col gap-0">
                        <img className="rounded-xl w-full object-cover h-52" src={event.image_url || "/prev1.webp"} alt={event.subject} />
                        <div className="px-5 flex flex-col gap-5 py-5">
                            <p className="font-bold">{event.subject}</p>
                            <p className="line-clamp-2">{event.description}</p>
                            <div className="w-full h-0.5 bg-black opacity-20"></div>
                            <div className="flex flex-row justify-between">
                                <p>شروع: {new Date(event.start_date).toLocaleDateString("fa-IR")}</p>
                                <p>پایان: {new Date(event.end_date).toLocaleDateString("fa-IR")}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* courese end */}
        </div>
    )
}