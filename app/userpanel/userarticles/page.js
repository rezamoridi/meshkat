"use client"

import UserVerticalNav from "@/app/components/userVerticalNav/UserVerticalNav"
import ArticleCard from "@/app/components/articleCard/ArticleCard"
export default function UserArticles({ articles }) {
    return (
        <>
            <div className="user-panel-articles bg-slate-200 h-[100svh] p-10">
                <UserVerticalNav />
                <div className="search-box w-[70svw] bg-white rounded-lg h-16 shadow-lg">

                </div>
                <div className="user-articles-list-container w-[70svw] rounded-lg shadow-lg bg-white h-[80svh] mt-7 overflow-y-auto p-2 flex flex-wrap">
                    <div className="row flex flex-wrap h-full py-3 w-full overflow-y-auto">
                        <ArticleCard pen={false} />
                        <ArticleCard pen={false} />
                        <ArticleCard pen={false} />
                        <ArticleCard pen={false} />
                        <ArticleCard pen={false} />
                    </div>
                    {
                        // articles.map(article => ( <ArticleCard key={article.id} {...article} />))
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
//         props: {articles: data}
//     }
// }
