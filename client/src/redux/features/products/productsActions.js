import {
  getProducts,
  getFilters,
  setFilters,
  getProductsById,
  deletedProducts,
  getAllBrands,
} from "./productsSlice";
import axios from "axios";
import { queryMarker } from "./helpers/queryMaker";

const getProductsApi =
  (productsPerPage, currentPage, filters) => async (dispatch) => {
    const query = queryMarker(productsPerPage, currentPage, filters);
    const { data } = await axios.get(`/products${query}`);
    return dispatch(getProducts(data));
  };
const getFiltersApi = () => async (dispatch) => {
  const { data } = await axios.get("/products/filters");
  return dispatch(getFilters(data));
};
const getProductsId = (id) => async (dispatch) => {
  const { data } = await axios.get(`/products/${id}`);
  return dispatch(getProductsById(data));
};
const deleteProductId = (id) => async (dispatch) => {
  const { data } = await axios.delete(`/products/${id}`);
  return dispatch(deletedProducts(data));
};
const getAllBrandsApi = () => async (dispatch) => {
  const { data } = await axios.get("/brands");
  return dispatch(getAllBrands(data));
};

export {
  getProductsApi,
  getFiltersApi,
  setFilters,
  getProductsId,
  deleteProductId,
  getAllBrandsApi,
};
