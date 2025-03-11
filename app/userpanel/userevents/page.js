"use client"

import UserVerticalNav from "@/app/components/userVerticalNav/UserVerticalNav"
import UserEventCard from "@/app/components/userEventCard/UserEventCard"
export default function UserEvents({ events }) {
    return (
        <>
            <div className="user-panel-events bg-slate-200 h-svh p-10">
                <UserVerticalNav />
                <div className="search-box w-[70svw] bg-white rounded-lg h-16 shadow-lg">

                </div>
                <div className="user-events-list-container w-[70svw] rounded-lg shadow-lg bg-white h-[75svh] mt-8 overflow-y-auto p-2 flex flex-col justify-start items-center relative">
                    <UserEventCard />
                    {
                        // events.map(event => ( <UserEventCard key={event.id} {...event} />))
                    }
                </div>
            </div>
        </>
    )
}

// export async function getServerSideProps(){
//     const res = await fetch('http://185.105.239.52:8000/api/admin/event/get_all/')
//     const data = await res.json()
//     return{
//         props: {events: data}
//     }
// }
