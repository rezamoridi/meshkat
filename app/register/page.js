"use client"

import { useState } from "react";
import Loading from "@/components/loading/Loading";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaSpinner, FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";




export default function Register() {
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
        name: "",
        lname: "",
        phone_number: "",
        id_number: "",
        email: "",
        password: ""
    })


    const submitHandler = async (e) => {
        setSpinLoading(true)
        e.preventDefault()

        // catch form data
        const { name, lname, phone_number, email, password } = formData
        // catch form data

        try {

            // validation form data

            if (!name.trim() || !lname.trim() || !phone_number.trim() || !email.trim() || !password.trim()) {
                throw new Error('لطفا همه ی فیلد ها را پر کنید.')
            }

            if (!name.trim().match(/^[آ-ی , ]{3,15}$/)) {
                throw new Error('نام باید با حروف فارسی و بین 3 تا 15 کاراکتر باشد.')
            }

            if (!lname.trim().match(/^[آ-ی , ]{3,15}$/)) {
                throw new Error('نام خانوادگی باید با حروف فارسی و بین 3 تا 15 کاراکتر باشد.')
            }

            if (!phone_number.trim().match(/^((0?9)|(\+?989))\d{9}$/)) {
                throw new Error('شماره موبایل باید از قالب شماره موبایل ایران پیروی کند.')
            }

            if (!email.trim().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {

                throw new Error('ایمیل نامعتبر است.')
            }

            if (!password.trim().match(/^\w{8,20}$/)) {
                throw new Error('رمز عبور باید بین 8 تا 20 کاراکتر و با حروف فارسی نباشد.')
            }
            // validation form data

            // send request

            // const res = await fetch('http://185.105.239.52:8000/api/user/register' , {
            //   method: 'POST',
            //   headers:  {
            //     'Content-Type':"application/json",
            //   },
            //   body: JSON.stringify({...formData}),
            // })

            // if(res.status == 500){
            //   throw new Error('خطای سرور.')
            // }

            toast.success('ثبت نام با موفقیت انجام شد.')
            setLoading(true)
            router.replace('/login')



        } catch (error) {
            setSpinLoading(false)
            toast.error(error.message)
        }
    }

    return (
        <>
            {loading && <Loading />}
            <div className="register bg-slate-200 min-h-svh flex justify-center items-center">
                <div className="register-form-container bg-white rounded-lg shadow-lg h-auto w-[340px] sm:w-[380px] md:w-[430px] 2xl:w-[500px] p-5 my-10">
                    <div className="logo w-16 mx-auto md:w-20">
                        <Image className="select-none w-full h-auto object-cover" width={100} height={100} src='/assets/images/logo.png' alt="meshkat-logo" />
                    </div>
                    <h1 className="select-none text-center font-bold text-2xl text-gray-600 sm:text-3xl md:text-4xl">ثبت نام</h1>
                    <form className="rounded-lg flex flex-wrap justify-around mt-5 md:mt-10">
                        <div className="input-container w-[95%] my-3 relative">
                            <input
                                required
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                value={formData.name}
                                className="peer outline-none w-full border-2 border-cyan-600/30 rounded-md p-2 h-11 text-gray-600 caret-cyan-600/50"
                                type="text"
                            />
                            <span className="label select-none absolute px-1 flex top-2 mr-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:scale-75 peer-focus:translate-x-3 peer-focus:-translate-y-5 peer-focus:bg-white peer-valid:scale-75 peer-valid:translate-x-3 peer-valid:-translate-y-5 peer-valid:bg-white">
                                نام
                            </span>
                        </div>
                        <div className="input-container w-[95%] my-3 relative">
                            <input
                                required
                                onChange={e => setFormData({ ...formData, lname: e.target.value })}
                                value={formData.lname}
                                className="peer outline-none w-full border-2 border-cyan-600/30 rounded-md p-2 h-11 text-gray-600 caret-cyan-600/50"
                                type="text"
                            />
                            <span className="label select-none absolute px-1 flex top-2 mr-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:scale-75 peer-focus:translate-x-3 peer-focus:-translate-y-5 peer-focus:bg-white peer-valid:scale-75 peer-valid:translate-x-3 peer-valid:-translate-y-5 peer-valid:bg-white">
                                نام خانوادگی
                            </span>
                        </div>
                        <div className="input-container w-[95%] my-3 relative">
                            <input
                                required
                                onChange={e => setFormData({ ...formData, phone_number: e.target.value })}
                                value={formData.phone_number}
                                className="peer outline-none w-full border-2 border-cyan-600/30 rounded-md p-2 h-11 text-gray-600 caret-cyan-600/50"
                                type="text"
                            />
                            <span className="label select-none absolute px-1 flex top-2 mr-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:scale-75 peer-focus:translate-x-3 peer-focus:-translate-y-5 peer-focus:bg-white peer-valid:scale-75 peer-valid:translate-x-3 peer-valid:-translate-y-5 peer-valid:bg-white">
                                شماره موبایل
                            </span>
                        </div>
                        <div className="input-container w-[95%] my-3 relative">
                            <input
                                required
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                value={formData.email}
                                className="peer outline-none w-full border-2 border-cyan-600/30 rounded-md p-2 h-11 text-gray-600 caret-cyan-600/50"
                                type="text"
                            />
                            <span className="label select-none absolute px-1 flex top-2 mr-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:scale-75 peer-focus:translate-x-3 peer-focus:-translate-y-5 peer-focus:bg-white peer-valid:scale-75 peer-valid:translate-x-3 peer-valid:-translate-y-5 peer-valid:bg-white">
                                ایمیل
                            </span>
                        </div>
                        <div className="input-container w-[95%] my-3 relative">
                            <input
                                required
                                onChange={e => setFormData({ ...formData, password: e.target.value })}
                                value={formData.password}
                                className="peer outline-none w-full border-2 border-cyan-600/30 rounded-md p-2 h-11 text-gray-600 caret-cyan-600/50"
                                type={showPass ? 'text' : 'password'}
                            />
                            {showPass ? <FaEye onClick={() => setShowPass(!showPass)} className="absolute top-3 left-3 cursor-pointer text-xl text-cyan-600" /> : <FaEyeSlash onClick={() => setShowPass(!showPass)} className="absolute top-3 left-3 cursor-pointer text-xl text-cyan-600" />}
                            <span className="label select-none absolute px-1 flex top-2 mr-3 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:scale-75 peer-focus:translate-x-3 peer-focus:-translate-y-5 peer-focus:bg-white peer-valid:scale-75 peer-valid:translate-x-3 peer-valid:-translate-y-5 peer-valid:bg-white">
                                رمز عبور
                            </span>
                        </div>
                        <button onClick={submitHandler} className="select-none bg-cyan-600/50 w-[95%] transition duration-300 hover:bg-cyan-600/70 mt-7 px-5 py-3 rounded-md text-white flex justify-center items-center lg:text-lg">ثبت نام{spinLoading && <FaSpinner className="mr-3 animate-spin" />}</button>
                    </form>
                    <div className="line w-[96%] h-[2px] shadow-line shadow-cyan-600 bg-cyan-600/50 mt-10 mx-auto"></div>
                    <div className="register flex text-sm mt-5 justify-center font-bold">
                        <p className="text-gray-500 ml-1">ثبت نام کرده اید؟</p><Link className="text-cyan-600 hover:text-cyan-700 transition duration-300" href={'/login'}>وارد شوید</Link>
                    </div>
                </div>
            </div>
        </>
    )
}