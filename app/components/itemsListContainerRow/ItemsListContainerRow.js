import AddItem from "../addItem/AddItem";
import HeadingSign from "../headingSign/HeadingSign";

export default function ItemsListContainerRow({title , children , addText , addLink}) {
  return (
    <>
      <div className="items-list-container-row pb-5 max-w-[85svw] rounded-lg shadow-lg bg-white mt-5 p-5 relative lg:mx-0 mx-auto">
        <HeadingSign />
        <h1 className="text-base sm:text-xl font-bold text-gray-700 ">{title}</h1>
        <div className="items-list-row dirltr mt-4 sm:mt-6 max-h-[55svh] lg:max-h-[70svh] rounded-lg p-2 pt-0 pr-1 bg-slate-300 overflow-y-auto border-2 border-cyan-600/30 scroll">
          <AddItem text={addText} link={addLink} />
          <div className="row flex flex-wrap flex-row-reverse">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}


