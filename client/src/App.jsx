import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Suspense, lazy } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import LandingShop from "./pages/ecommerce/LandingShop/LandingShop";
import About from "./pages/About/About";
import Shop2 from "./pages/ecommerce/Shop/Shop2";
// import Login from "./components/Login/Login";

const Shop = lazy(() => import("./pages/ecommerce/Shop/Shop"));
const Services = lazy(() => import("./pages/services/incoming"));

const Landing = lazy(() => import("./pages/Landing/Landing"));
const ProductDetail = lazy(() =>
  import("./pages/ecommerce/ProductDetail/ProductDetail")
);
const ShoppingCart = lazy(() =>
  import("./pages/ecommerce/ShoppingCart/ShoppingCart")
);
const Checkout = lazy(() => import("./pages/ecommerce/Checkout/Checkout"));
const FormCreateProduct = lazy(() =>
  import("./pages/ecommerce/Forms/FormCreateProduct/FormCreateProduct")
);
const Login = lazy(() => import("./components/Login/Login"));
const FormModifyProduct = lazy(() =>
  import("./pages/ecommerce/Forms/FormModifyProduct/FormModifyProduct")
);
const FormProfile = lazy(() =>
  import("./pages/ecommerce/Forms/FormProfile/FormProfile")
);
const Profile = lazy(() => import("./pages/ecommerce/Profile/Profile"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));

function App() {
  const shopCart = useSelector((state) => state.Products.shopCart);
  const { pathname } = useLocation();
  window.addEventListener("beforeunload", () => {
    localStorage.setItem("shopCart", JSON.stringify(shopCart));
  });
  return (
    <div className="App min-h-screen">
      {pathname !== "/" && pathname !== "/landingshop" && <NavBar />}
      <Suspense fallback={<div>Proximamente un Loader...</div>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/landingshop" element={<LandingShop />} />
          {/* <Route path="/shop" element={<Shop2 />} /> */}

          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/detail/:id" element={<ProductDetail />} />
          <Route path="/shop/shoppingcart" element={<ShoppingCart />} />
          <Route path="/shop/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/register" element={<FormProfile />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/profile/store/create" element={<FormCreateProduct />} />
          <Route
            path="/shop/detail/modify/:id"
            element={<FormModifyProduct />}
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
      {pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
