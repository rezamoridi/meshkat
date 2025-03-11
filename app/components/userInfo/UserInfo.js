export default function UserInfo({username , email , role}){
    return(
        <>
            <h5 className="user-name text-lg font-bold text-gray-900">{username || 'hasan'}</h5>
            <p className="email text-sm text-gray-400 my-1 font-bold">{email || 'hasan@.com'  }</p>
            <p className="role text-sm text-gray-500 font-bold">{'user' || role['desc']}</p>
        </>
    )
}