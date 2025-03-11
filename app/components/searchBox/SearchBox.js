import { IoSearch } from "react-icons/io5";

export default function SearchBox({searchBy}) {
  return (
    <>
      <div className="search-box max-w-[85svw] bg-white rounded-lg shadow-lg p-3 flex flex-col md:flex-row md:items-center lg:mx-0 mx-auto">
          <div className="search-input w-full md:w-1/2 border-2 border-cyan-600/50 flex items-center rounded-3xl md:mr-3 overflow-hidden">
            <input
              className="w-full pr-3 pl-5 py-2 outline-none text-xs sm:text-sm text-gray-600 caret-cyan-600/50"
              type="text"
              placeholder={searchBy}
            />
            <IoSearch className="ml-3 text-cyan-600 text-lg" />
          </div> 

          <div className="search-filter md:mr-auto mt-3 md:mt-0 ml-5 flex items-center gap-2">
            <div className="newest cursor-pointer outline-none border-2 border-cyan-600/50 rounded-3xl gap-2 px-2 sm:px-3 py-1 sm:py-2 text-gray-400 text-xs sm:text-sm flex items-center justify-between">
              <label className="cursor-pointer" htmlFor="newest">
                جدیدترین
              </label>
              <input type="checkbox" name="filter" id="newest" />
            </div>
            <div className="oldest cursor-pointer outline-none border-2 border-cyan-600/50 rounded-3xl gap-2 px-2 sm:px-3 py-1 sm:py-2 text-gray-400 text-xs sm:text-sm flex items-center justify-between">
              <label className="cursor-pointer" htmlFor="oldest">
                قدیمی ترین
              </label>
              <input type="checkbox" name="filter" id="oldest" />
            </div>
          </div>
      </div>
    </>
  );
}
