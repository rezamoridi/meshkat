import Link from "next/link";
import { FaTelegram } from "react-icons/fa6";
import { SiAparat } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";

import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="footer pt-10 bg-cyan-700">
        <div className="container-custom px-4 sm:px-10 sm:max-w-[594px] lg:max-w-[992px] xl:max-w-[1200px] mx-auto">
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
                  src={"/assets/icons/bale_color.png"}
                  height={27}
                  width={27}
                  className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]"
                />
              </Link>
              <Link href={"/"}>
                <Image
                  alt="eita-logo"
                  src={"/assets/icons/eita_color_light.png"}
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
      </footer>
    </>
  );
}
