import HeadingSign from "../headingSign/HeadingSign";

export default function ItemsListContainerCol({title , children}) {
  return (
    <>
      <div className="items-list-container-col max-w-[85svw] rounded-lg shadow-lg bg-white mt-5 p-5 relative lg:mx-0 mx-auto">
        <HeadingSign />
        <h1 className="text-base sm:text-xl font-bold text-gray-700">{title}</h1>
        <div className="items-list-col pb-5 dirltr mt-4 sm:mt-6 rounded-lg p-2 pr-1 flex flex-col items-center bg-slate-300 max-h-[55svh] lg:max-h-[70svh] overflow-y-auto border-2 border-cyan-600/30 scroll">
            {children}
        </div>
      </div>
    </>
  );
}
