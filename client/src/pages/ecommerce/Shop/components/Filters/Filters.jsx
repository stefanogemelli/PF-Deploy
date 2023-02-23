// imports <Filters />
import useGetFilters from "../../../../../hooks/useGetFilters";
import useToggleBoolean from "../../../../../hooks/useToggleBoolean";
import useWidthIsLessThan from "../../../../../hooks/useWidthIsLessThan";
import List from "./components/List";

function Filters() {
  // functiones <Filters />
  const filterLists = useGetFilters();
  const [show, toggleShow] = useToggleBoolean(); // recibe el estado inicial (default => false)
  const widthLessThan = useWidthIsLessThan(1024);
  const handleClick = () => {
    widthLessThan && toggleShow();
  };
  console.log(filterLists);
  return (
    <aside className="h-full bg-blue-500 lg:flex lg:w-full lg:flex-col lg:content-center  lg:justify-center lg:bg-transparent lg:py-2  lg:text-center">
      {/* <div className="border border-black"> */}
      <button
        onClick={handleClick}
        className={`h-full w-min self-center rounded-md  px-4 py-1 text-xs uppercase text-lightwhite md:text-sm lg:cursor-auto lg:text-base lg:font-bold lg:tracking-widest lg:text-black`}
      >
        Filtros
      </button>
      {/* </div> */}
      <div
        className={`flex ${
          show ? "h-auto" : "h-0"
        } flex-col justify-evenly overflow-hidden sm:flex-row sm:justify-evenly lg:h-auto lg:flex-col lg:overflow-auto`}
      >
        {filterLists?.map((list, i) => (
          <List key={i} filter={list[0]} options={list[1]} />
        ))}
      </div>
    </aside>
  );
}

export default Filters;
