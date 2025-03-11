"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaUserGraduate, FaClock, FaCirclePlay, FaArrowLeft, FaPhone, FaArrowRight, FaTelegram, FaInstagram } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { SiAparat } from "react-icons/si";
import Image from "next/image";

export default function Home() {

    const [menu, setMenu] = useState(false)
    const [activeSection, setActiveSection] = useState("");
    // const [courses, setCourses] = useState()

    const courses = [
        {
            id: 1,
            subject: "مبانی برنامه‌نویسی با جاوااسکریپت",
            description: "این دوره شامل آموزش مقدماتی تا پیشرفته زبان جاوااسکریپت است.",
            image_url: "/images/prev1.webp",
            start_date: "2025-04-01",
            end_date: "2025-06-01"
        },
        {
            id: 2,
            subject: "یادگیری ماشین با پایتون",
            description: "در این دوره، مفاهیم یادگیری ماشین و پیاده‌سازی مدل‌ها با پایتون را یاد خواهید گرفت.",
            image_url: "/images/prev2.webp",
            start_date: "2025-03-15",
            end_date: "2025-05-20"
        },
        {
            id: 3,
            subject: "طراحی وب با React و Tailwind",
            description: "آموزش عملی طراحی وب‌سایت‌های مدرن با استفاده از React و فریمورک سبک Tailwind CSS.",
            image_url: "/images/prev3.webp",
            start_date: "2025-05-01",
            end_date: "2025-07-01"
        },
        {
            id: 4,
            subject: "هوش مصنوعی و یادگیری عمیق",
            description: "مباحث پیشرفته هوش مصنوعی شامل شبکه‌های عصبی و یادگیری عمیق.",
            image_url: "/images/prev4.webp",
            start_date: "2025-06-10",
            end_date: "2025-08-15"
        }
    ];


    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    // useEffect(() => {
    //     const get = async () => {
    //         try {
    //             const res = await fetch("http://185.105.239.52:8000/api/admin/event/get_all/?skip=0&limit=4")
    //             if (res.ok) {
    //                 const json = await res.json()
    //                 setCourses(json)
    //             }
    //         } catch (e) {
    //             console.log(e);
    //         }
    //     }
    //     get()
    // }, [])

    useEffect(() => {
        const sections = document.querySelectorAll("section")
        const observerOptions = {
            root: null,
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(`#${entry.target.id}`)
                }
            });
        }, observerOptions);

        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const navItems = [
        { href: "#home", label: "خانه" },
        { href: "#courses", label: "دوره ها" },
        { href: "#about", label: "درباره ما" },
    ];

    return (
        <div>
            {/* header start */}
            <div dir="rtl" className="z-50 fixed right-0 left-0 w-full border-b-2 md:flex-row border-gray-300 flex flex-col items-center px-5 justify-start lg:px-28 bg-white">
                <div className="flex flex-row items-center justify-between h-16 w-full md:max-w-max">
                    <div className="flex flex-row items-center gap-5 h-full">
                        <img className="w-8 hidden md:block" src="/images/logo.png" />
                        <button className="md:hidden" onClick={() => setMenu(!menu)}>
                            <FaBars size={20} />
                        </button>
                        <p className="font-bold text-2xl text-cyan-700">مشکات</p>
                    </div>
                    <div className="h-full flex items-center md:hidden">
                        <img className="w-8" src="/images/logo.png" />
                    </div>
                </div>
                <ul className={`bg-white w-full flex flex-col md:justify-between md:items-center md:h-16 md:flex-row self-start md:pb-0 gap-5 transition-all overflow-hidden ${menu ? 'h-48 pb-4' : 'h-0 pb-0'} duration-300`}>
                    <div className="flex flex-col md:flex-row md:gap-10 gap-5 md:mr-10 text-nowrap">
                        {navItems.map((item) => (
                            <li key={item.href} className="relative list-none">
                                <Link
                                    href={item.href}
                                    className={`relative pb-2 transition-all duration-300 
                  ${activeSection === item.href ? "after:w-full" : "after:w-0"}
                  after:absolute after:left-0 after:bottom-0 after:h-[2px] 
                  after:bg-cyan-600 after:transition-all after:duration-300
                  hover:after:w-full`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </div>
                    <div className="w-full md:w-auto flex flex-row gap-5 font-bold">
                        <button className="bg-cyan-600 w-full py-2 rounded-md text-white text-nowrap px-5">
                            ثبت نام
                        </button>
                        <button className="border-2 border-cyan-600 w-full py-2 rounded-md text-nowrap px-5">
                            ورود
                        </button>
                    </div>
                </ul>
            </div>
            {/* header end */}
            {/* page 1 start */}
            <section id="home" dir="rtl" className="-z-50 bg-white max-h-svh pt-16 flex flex-col h-svh">
                <div className="relative w-full">
                    <div ref={sliderRef} className="keen-slider">
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className="keen-slider__slide flex flex-col w-full gap-3 shrink-0 lg:h-[400px] md:h-[250px] h-1/2">
                                <img className="w-full object-cover h-full" src={`/images/prev${index + 1}.webp`} />
                            </div>
                        ))}
                    </div>
                    {loaded && instanceRef.current && (
                        <>
                            <FaArrowLeft
                                className="absolute left-5 top-1/2 transform -translate-y-1/2 cursor-pointer text-3xl text-white hover:scale-90 hover:text-white transition-all bg-cyan-600 p-2.5 rounded-full"
                                onClick={(e) =>
                                    e.stopPropagation() || instanceRef.current?.prev()
                                }
                                disabled={currentSlide === 0}
                                size={40}
                            />

                            <FaArrowRight
                                className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer text-3xl text-white hover:scale-90 hover:text-white transition-all bg-cyan-600 p-2.5 rounded-full"
                                onClick={(e) =>
                                    e.stopPropagation() || instanceRef.current?.next()
                                }
                                disabled={
                                    currentSlide === instanceRef.current.track.details.slides.length - 1
                                }
                                size={40}
                            />
                        </>
                    )}
                </div>
                <div className="w-full flex flex-col items-center justify-around h-full px-10 lg:px-28 md:my-10">
                    <div className="flex flex-col">
                        <div className="flex flex-col gap-5 max-w-md">
                            <p className="font-bold text-4xl whitespace-pre-line gap-5 leading-[1.3]">
                                با <span className="text-cyan-600">مشکات</span> بدون مرز یاد بگیرید
                            </p>
                            <TypeAnimation
                                sequence={[
                                    'حمایت از ایده‌ها و طرح‌های دانشجویی از طریق ارتباط با اسپانسرها',
                                    1000,
                                    'اجرای پروژه‌های علمی و تحقیقاتی در زمینه‌های علوم پایه و فنی مهندسی',
                                    1000,
                                    'همکاری با وزارت دفاع برای واگذاری پروژه‌های ویژه کسری و جایگزینی خدمت',
                                    1000,
                                    'برگزاری اردوهای علمی «راهیان پیشرفت» جهت ارتقای خودباوری و شناخت توانمندی‌های کشور',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={1}
                                style={{ fontSize: '1.2em', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </div>
                        <div className="flex flex-col mt-5 w-full items-center">
                            <button className="w-96 bg-cyan-600 text-white font-bold py-3 rounded-md text-xl">
                                عضویت
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-10 px-5 lg:px-0">
                        <p className="text-lg font-bold md:text-2xl">علم به‌تنهایی کافی نیست؛ باید <span className="text-cyan-600">علم را به فناوری</span>، صنعت و توسعه کشور پیوند دهیم <span className="text-sm"> – آیت‌الله خامنه‌ای</span></p>
                        <img className="size-16 scale-150 md:size-20" src="/images/rahbar.png" />
                    </div>
                </div>
            </section>
            {/* page 1 end */}
            {/* page 2 start */}
            <section dir="rtl" id="courses" className="w-full max-h-min bg-white flex flex-col mt-10">
                <div className="flex gap-10 lg:gap-16 flex-row-reverse h-52 bg-gradient-to-b from-cyan-700 via-cyan-500 to-slate-100 items-center pr-4 justify-center w-full text-white pb-10">
                    <div className="flex flex-col items-center">
                        <FaClock size={40} />
                        <p className="font-bold text-xl pt-3">۱۲۳۱۲۳</p>
                        <p className="font-bold text-md">ساعت آموزش</p>
                    </div>
                    <div className="flex flex-col items-center pr-4">
                        <FaCirclePlay size={40} />
                        <p className="font-bold text-xl pt-3">88</p>
                        <p className="font-bold text-md">دوره آموزشی</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaUserGraduate size={40} />
                        <p className="font-bold text-xl pt-3">۲۳۴۵</p>
                        <p className="font-bold text-md">دانشجو</p>
                    </div>
                </div>
                <div className="flex flex-row justify-between pt-10 px-5 lg:px-28 items-start">
                    <div className="flex flex-row gap-3 items-center">
                        <div className="bg-cyan-600 w-3 h-3 rounded-sm rotate-45" />
                        <p className="md:text-xl whitespace-nowrap font-bold text-gray-700">آخرین دوره های ما</p>
                    </div>
                    <div className="h-0.5 w-full bg-cyan-600/50 mx-5 mt-3" />
                    <button className="flex flex-row items-center gap-3">
                        <Link className="whitespace-nowrap" href="/courses">همه دوره ها</Link>
                        <FaArrowLeft />
                    </button>
                </div>
                <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full py-10 gap-x-10 px-5 lg:px-28">
                    {courses && courses.map((event) => (
                        <div key={event.id} className="bg-white rounded-xl flex flex-col gap-0">
                            <img className="rounded-xl w-full object-cover h-52" src={event.image_url || "/images/prev1.webp"} alt={event.subject} />
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
            </section>
            {/* page 2 end */}
            {/* page 3 start */}
            <section id="about" dir="rtl" className="pt-10 bg-cyan-700">
                <div className="container-custom sm:px-10 lg:px-28 px-5 mx-auto">
                    <div className="row flex flex-col lg:flex-row lg:items-center flex-wrap">
                        <div className="col lg:w-1/2">
                            <div className="meshkat-info-container flex flex-col">
                                <div className="title-and-signs flex flex-col lg:flex-row items-center justify-center lg:justify-start">
                                    <div className="sign-line flex items-center order-2 lg:order-1 my-3">
                                        <div className="line w-32 h-[2px] bg-white lg:hidden"></div>
                                        <div className="title-sign w-5 h-5 bg-white rotate-45 rounded-md lg:ml-3 mx-3 lg:mx-0"></div>
                                        <div className="line w-32 h-[2px] bg-white lg:hidden"></div>
                                    </div>

                                    <h5 className="text-xl text-center text-white order-1">
                                        مرکز مشکات
                                    </h5>
                                </div>
                                <div className="text-and-line flex mt-3 lg:mt-1 mr-2 items-center">
                                    <div className="line hidden lg:block w-3 bg-white lg:h-24 ml-4"></div>
                                    <p className="text-white text-center lg:text-justify text-sm">
                                        مرکز هدایت و حمایت از تحقیقات کاربردی مشکات، وابسته به ناحیه
                                        بسیج دانشجویی استان لرستان، با هدف ایجاد زیرساختی برای حمایت
                                        از دانشجویان و نخبگان علمی تأسیس شده است. این مرکز با فراهم
                                        کردن زمینه ارتباط میان دانشجویان برتر، صاحبان ایده، صنعت و
                                        اسپانسرها، به دنبال تقویت فضای علمی و پژوهشی در استان لرستان
                                        است.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col lg:w-1/2 mt-10 lg:mt-0">
                            <div className="meshkat-enamad-pay-logo flex justify-center lg:justify-end">
                                <div className="pay-logo w-20">
                                    <img
                                        className="w-full"
                                        src="https://cdn.zarinpal.com/badges/trustLogo/1.png"
                                        alt="pay"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy-right-socials py-5 bg-cyan-800 mt-10">
                    <div className="container-custom sm:max-w-[594px] lg:max-w-[992px] xl:max-w-[1200px] mx-auto px-4 sm:px-10 flex flex-col lg:flex-row items-center lg:justify-between">
                        <h5 className="text-white text-xs sm:text-sm text-center lg:text-right">
                            تمامی حقوق برای وب سایت مرکز مشکات محفوظ می باشد.
                        </h5>
                        <div className="socials flex items-center sm:text-xl lg:text-[22px] gap-5 mt-5 lg:mt-0">
                            <Link className="text-sky-300" href={"/"}>
                                <FaTelegram />
                            </Link>
                            <Link
                                className="text-pink-500 text-[18px] sm:text-xl lg:text-[23px]"
                                href={"/"}
                            >
                                <FaInstagram />
                            </Link>
                            <Link className="text-sky-600" href={"/"}>
                                <Image
                                    alt="bale-logo"
                                    src={"/icons/bale.png"}
                                    height={27}
                                    width={27}
                                    className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]"
                                />
                            </Link>
                            <Link href={"/"}>
                                <Image
                                    alt="eita-logo"
                                    src={"/icons/eita.png"}
                                    height={27}
                                    width={27}
                                    className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]"
                                />
                            </Link>
                            <Link className="text-red-500" href={"/"}>
                                <SiAparat />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* page 3 end */}
        </div >
    );
}
