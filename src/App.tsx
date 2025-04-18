import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/ReastaurantPanel/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/RestaurantLogin";
import ManageReasons from "./pages/ReastaurantPanel/ManageReasons";
import SoftwareSetting from "./pages/ReastaurantPanel/SoftwareSetting";
import ManageProfile from "./pages/ReastaurantPanel/ManageProfile";
import ManageReports from "./pages/ReastaurantPanel/ManageReports";
import StoreQR from "./components/ReastaurantPanel/peripherals/StoreQR";
import Stripesetup from "./components/ReastaurantPanel/peripherals/Stripesetup";
import TableQR from "./components/ReastaurantPanel/peripherals/TableQR";

import ManageProducts from "./pages/ReastaurantPanel/ManageProducts";
import MainDepartment from "./components/ReastaurantPanel/manageProducts/MainDepartment";
import AddDepartment from "./components/ReastaurantPanel/manageProducts/AddDepartment";
import AddPrintGroup from "./components/ReastaurantPanel/manageProducts/AddPrintGroup";
import AddProduct from "./components/ReastaurantPanel/manageProducts/AddProduct";
import MenuSetup from "./pages/ReastaurantPanel/MenuSetup";
import KIOSMenu from "./components/ReastaurantPanel/menusetup/KIOSMenu";
import POSmenu from "./components/ReastaurantPanel/menusetup/POSmenu";
import UpSellProduct from "./components/ReastaurantPanel/manageProducts/UpSellProduct";
import ImportProducts from "./components/ReastaurantPanel/manageProducts/ImportProducts";
import SpeedTool from "./components/ReastaurantPanel/manageProducts/SpeedTool";
import ComboProducts from "./components/ReastaurantPanel/manageProducts/ComboProducts";
import ManageOrders from "./components/ReastaurantPanel/peripherals/ManageOrders";
// import ManageProfile from "./pages/ReastaurantPanel/ManageProfile";
// import ManageReports from "./pages/ReastaurantPanel/MangeReports";
// import MenuSetup from "./pages/ReastaurantPanel/MenuSetup";
// import KIOSMenu from "./components/ReastaurantPanel/menusetup/KIOSMenu";
// import POSmenu from "./components/ReastaurantPanel/menusetup/POSmenu";
// import StoreQR from "./components/ReastaurantPanel/perpherals/StoreQR";
// import Stripesetup from "./components/ReastaurantPanel/perpherals/Stripesetup";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/manage-profile" element={<ManageProfile />} />
          <Route path="/manage-reasons" element={<ManageReasons />} />
          <Route path="/manage-reports" element={<ManageReports />} />
          {/* <Route path="/login" element={<Login />} />  */}
          {/* <Route path="/manage-reports" element={<ManageReports />} /> */}
          <Route path="/manage-products" element={<ManageProducts />} />
          <Route path="/manage-products/main-department" element={<MainDepartment />} />
          <Route path="/manage-products/add-department" element={<AddDepartment />} />
          <Route path="/manage-products/add-printGroup" element={<AddPrintGroup />} />
          <Route path="/manage-products/add-product" element={<AddProduct />} />
          <Route path="/manage-products/up-sell-product" element={<UpSellProduct />} />
          <Route path="/manage-products/import-products" element={<ImportProducts />} />
          <Route path="/manage-products/speed-tool" element={<SpeedTool />} />
          <Route path="/manage-products/combo-products" element={<ComboProducts />} />
          <Route path="/software-setting" element={<SoftwareSetting />} />
          <Route path="/menu-setup" element={<MenuSetup />} />
          <Route path="/kios-menu" element={<KIOSMenu />} />
          <Route path="/pos-menu" element={<POSmenu />} />
          <Route path="/store-Qr" element={<StoreQR />} />
          <Route path="/table-Qr" element={<TableQR />} />
          <Route path="/stripe-setup" element={<Stripesetup />} />
          <Route path="/manage-orders" element={<ManageOrders />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
