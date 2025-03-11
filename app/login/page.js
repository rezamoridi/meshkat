"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setCookie, getCookie } from "cookies-next/client";
import Loading from "@/components/loading/Loading";
import Link from "next/link";
import Image from "next/image";
import { FaSpinner, FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

export default function Login() {
    const router = useRouter()

    // showPass eye btn
    const [showPass, setShowPass] = useState(false)
    // showPass eye btn

    // loading page
    const [loading, setLoading] = useState(false)
    // loading page

    // loading btn
    const [spinLoading, setSpinLoading] = useState(false)
    // loading btn

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })


    const submitHandler = async (e) => {
        setSpinLoading(true)
        e.preventDefault()

        // catch form data
        const { email, password } = formData
        // catch form data

        try {

            // validation form data
            if (!email.trim() || !password.trim()) {
                throw new Error('لطفا همه ی فیلد ها را پر کنید.')
            }

            if (!email.trim().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {

                throw new Error('ایمیل نامعتبر است.')
            }

            if (!password.trim().match(/^\w{8,20}$/)) {
                throw new Error('رمز عبور باید بین 8 تا 20 کاراکتر و با حروف فارسی نباشد.')
            }
            // validation form data

            // send request

            // const urlencoded = new URLSearchParams();
            // urlencoded.append("username", formData.username);
            // urlencoded.append("password", formData.password);
            // const res = await fetch('http://185.105.239.52:8000/api/auth/admin/login' , {
            //   method: 'POST',
            //   headers:  {
            //     'Content-Type':"application/x-www-form-urlencoded",
            //   },
            //   body: urlencoded,
            // })
            // const data = await res.json()
            // if(res.status == 200){
            //   router.push('/admin')
            //   setCookie('token', data.access_token , {maxAge: 3600})
            //   const token = getCookie('token')
            //   setLoading(false)
            // }
            // send request




            toast.success('ورود با موفقیت انجام شد.')
            setLoading(true)
            router.replace('/login')



        } catch (error) {
            setSpinLoading(false)
            toast.error(error.message)
        }










    }

    return (
        <>
            {/* {<Loading />} */}
            <div className="login bg-slate-200 h-dvh flex justify-center items-center">
                <div className="login-form-container bg-white rounded-lg shadow-lg h-auto w-[340px] p-5 sm:w-[380px] md:w-[430px] 2xl:w-[450px]">
                    <div className="logo w-16 mx-auto md:w-20">
                        <Image className="select-none w-full h-auto object-cover" width={100} height={100} src='/assets/images/logo.png' alt="meshkat-logo" />
                    </div>
                    <h1 className="select-none text-center font-bold text-2xl text-gray-600 sm:text-3xl md:text-4xl">ورود</h1>
                    <form onSubmit={submitHandler} className="rounded-lg flex flex-col justify-center items-center mt-14">
                        <div className="input-container w-[95%] my-2 relative text-center">
                            <input
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                name="email"
                                required
                                value={formData.email}
                                className="peer outline-none w-full border-2 border-cyan-600/30 rounded-md p-2 h-11 text-gray-600 caret-cyan-600/50"
                                type="text"
                            />
                            <span className="label select-none absolute px-1 flex top-2 mr-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:scale-75 peer-focus:translate-x-3 peer-focus:-translate-y-5 peer-focus:bg-white peer-valid:scale-75 peer-valid:translate-x-3 peer-valid:-translate-y-5 peer-valid:bg-white">
                                ایمیل
                            </span>
                        </div>
                        <div className="input-container w-[95%] my-4 relative text-center">
                            <input
                                onChange={e => setFormData({ ...formData, password: e.target.value })}
                                name="password"
                                required
                                value={formData.password}
                                className="peer outline-none w-full border-2 border-cyan-600/30 rounded-md p-2 h-11 text-gray-600 caret-cyan-600/50"
                                type={showPass ? 'text' : 'password'}
                            />
                            {showPass ? <FaEye onClick={() => setShowPass(!showPass)} className="absolute top-3 left-3 cursor-pointer text-xl text-cyan-600" /> : <FaEyeSlash onClick={() => setShowPass(!showPass)} className="absolute top-3 left-3 cursor-pointer text-xl text-cyan-600" />}
                            <span className="label select-none absolute px-1 flex top-2 mr-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:scale-75 peer-focus:translate-x-3 peer-focus:-translate-y-5 peer-focus:bg-white peer-valid:scale-75 peer-valid:translate-x-3 peer-valid:-translate-y-5 peer-valid:bg-white">
                                رمز عبور
                            </span>
                        </div>
                        <button onClick={submitHandler} type="submit" className="select-none bg-cyan-600/50 transition duration-300 hover:bg-cyan-600/70 mt-10 w-[95%] py-3 rounded-md text-white flex justify-center items-center">ورود به حساب کاربری{spinLoading && <FaSpinner className="mr-3 animate-spin" />}</button>
                    </form>
                    <div className="line w-[96%] h-[2px] shadow-line shadow-cyan-600 bg-cyan-600/50 mt-12 mx-auto"></div>
                    <div className="register flex text-sm mt-5 justify-center font-bold">
                        <p className="text-gray-500 ml-1">حساب کاربری ندارید؟</p><Link className="text-cyan-600 hover:text-cyan-700 transition duration-300" href={'/register'}> ایجاد حساب کاربری</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
