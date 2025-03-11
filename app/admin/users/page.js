import VerticalNav from "@/app/components/verticalNav/VerticalNav";
import StudentCard from "@/app/components/studentCard/StudentCard";
import { PiUserBold } from "react-icons/pi";
import SearchBox from "@/app/components/searchBox/SearchBox";
import ItemsListContainerCol from "@/app/components/itemsListContainerCol/ItemsListContainerCol";
import BurgerMenu from "@/app/components/burgerMenu/BurgerMenu";


export default function Users({ students }) {
    return (
        <>
            <BurgerMenu />
            <div className="admin-panel-users bg-slate-100 min-h-svh pb-5 pt-24 lg:pt-[13px] lg:pr-32">
                <VerticalNav />
                <SearchBox searchBy={"جستجو بر اساس نام و نام خانوادگی..."} />
                <ItemsListContainerCol title={"لیست کاربران"}>
                    <StudentCard
                        icon={<PiUserBold />}
                        linkedit={"asd"}
                    //  key={student.id} {...student}
                    />
                    <StudentCard
                        icon={<PiUserBold />}
                    //  key={student.id} {...student}
                    />
                    <StudentCard
                        icon={<PiUserBold />}
                    //  key={student.id} {...student}
                    />
                    <StudentCard
                        icon={<PiUserBold />}
                    //  key={student.id} {...student}
                    />
                    <StudentCard
                        icon={<PiUserBold />}
                    //  key={student.id} {...student}
                    />
                    <StudentCard
                        icon={<PiUserBold />}
                    //  key={student.id} {...student}
                    />
                </ItemsListContainerCol>
            </div>
        </>
    );
}

// export async function getServerSideProps(){
//     const res = await fetch('http://185.105.239.52:8000/api/admin/get_users/')
//     const data = await res.json()
//     return{
//         props: {students: data}
//     }
// }
