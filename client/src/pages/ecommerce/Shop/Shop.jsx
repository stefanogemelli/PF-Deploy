import { getProductsApi } from "../../../redux/features/filterProducts/filterProductsActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paginator from "@/components/Paginator/Paginator";

export default function HomeShop() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state.Products.products);

  useEffect(() => {
    dispatch(getProductsApi());
  }, []);

  return (
    <div className="relative h-full w-full">
      <p>ACA ARRIBA VA LA NAV BAR</p>
      <div className="border-black absolute right-0 h-48 w-11/12 border-2">
        Banner de Recomendados
      </div>
      <div className="border-black absolute -left-80 h-96 w-1/5 border-2">
        filtros
      </div>
      <div className="border-black absolute right-0 top-96 h-48 w-11/12 border-2">
        <Paginator />
        Paginator
      </div>
    </div>
  );
}
