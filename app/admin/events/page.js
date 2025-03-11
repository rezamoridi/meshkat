"use client"

import VerticalNav from "@/app/components/verticalNav/VerticalNav";
import EventCard from "@/app/components/eventsCard/EventsCard";
import SearchBox from "@/app/components/searchBox/SearchBox";
import ItemsListContainerRow from "@/app/components/itemsListContainerRow/ItemsListContainerRow";
import BurgerMenu from "@/app/components/burgerMenu/BurgerMenu";

export default function Events({ events }) {
    return (
        <>
            <BurgerMenu />
            <div className="admin-panel-events bg-slate-100 min-h-svh pb-5 pt-24 lg:pt-[13px] lg:pr-32">
                <VerticalNav />
                <SearchBox searchBy={"جستجو بر اساس نام رویداد..."} />
                <ItemsListContainerRow title={'لیست رویداد ها'} addText={'افزودن رویداد'} addLink={'/'}>
                    <div className="col w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                        <EventCard
                        //  key={event.id} {...event}
                        />
                    </div>
                    <div className="col w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                        <EventCard
                        //  key={event.id} {...event}
                        />
                    </div>
                    <div className="col w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                        <EventCard
                        //  key={event.id} {...event}
                        />
                    </div>
                    <div className="col w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                        <EventCard
                        //  key={event.id} {...event}
                        />
                    </div>
                </ItemsListContainerRow>
            </div>
        </>
    );
}

// export async function getServerSideProps(){

//     const res = await fetch('http://185.105.239.52:8000/api/admin/event/get_all/')
//     const data = await res.json()
//     return{
//         props: {events: data}
//     }
// }
