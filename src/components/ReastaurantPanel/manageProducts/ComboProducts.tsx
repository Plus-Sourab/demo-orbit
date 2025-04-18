import React, { useState } from "react";
import { Link } from "react-router-dom";
import ComboProductItemVisibilitySetup from "./ComboProductItemVisibilitySetup";
import ComboProductAddProductForm from "./ComboProductAddProductForm";
import ComboProductPrinterAllocationTab from "./ComboProductPrinterAllocationTab";

const ComboProducts: React.FC = () => {
  const backButtonHandler = () => {
    // Function for Back Button from Combo Product
    // Your custom function logic here
  };

  const previousProduct = () => {
    // Your custom logic for the previous product
  };

  const nextProduct = () => {
    // Your custom logic for the next product
  };

  const [activeTab, setActiveTab] = useState("ComboOption_tab");

  // Function to handle tab change
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="product-body">
      <div className="container-scroller">
        <div className="page-body-wrapper">
          <div id="contentWrapper_RestaurantLayout" className="content-wrapper">
            <div className="top_area_row">
              <div className="row align-items-center">
                {/* Breadcrumb Section */}

                <div className="col-12 col-md-4 col-lg-4">
                  <nav>
                    <div className="main_nav_bread">
                      <ol className="breadcrumb pl-4">
                        <li className="breadcrumb-item nav_bread_one">
                          <Link className="fs-6 fw-bold " to="/manage-products">
                            Products
                          </Link>
                        </li>
                        <li className="breadcrumb-icon">
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        </li>
                        <li className="breadcrumb-item nav_bread_two">
                          <Link
                            to="#"
                            className="fs-6 fw-bold"
                            id="ProductFormName_ProductForm"
                          >
                            Edit Combo-Product
                          </Link>
                        </li>
                      </ol>
                    </div>
                  </nav>
                </div>

                <div className="col-12 col-md-4 col-lg-4 flex justify-end">
                  <div id="dv_AddNewProductSection_AddUpdateProduct">
                    <button
                      className="btn-primary ProductPageBtnCommanClass"
                      style={{ backgroundColor: "#5650BD" }}
                    >
                      + Add New Combo-Product
                    </button>
                  </div>
                </div>

                <div className="col-12 col-md-4 col-lg-4 text-right">
                  <a
                    href="javascript:;"
                    id="dv_PreviousProductSection_AddUpdateProduct"
                    className="btn-primary productbx anchorButtonProductCommonClass bg-indigo-600 text-white flex items-center"
                    onClick={previousProduct}
                  >
                    <i className="fa fa-angle-left" aria-hidden="true"></i>{" "}
                    Previous Product
                  </a>
                  <a
                    href="javascript:;"
                    id="dv_NextProductSection_AddUpdateProduct"
                    className="btn-primary productbx anchorButtonProductCommonClass bg-indigo-600 text-white flex items-center"
                    onClick={nextProduct}
                  >
                    Next Product{" "}
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="wrap_tabs-products sidebar_ul-nav_tabs wrao_sidebrs">
              <ul className="nav nav-pills footer_nav-tabs" role="tablist">
                <li className="nav-item tabOptionClass">
                  <a
                    id="a_GeneralTab_AddUpdateProduct"
                    className={`nav-link anchorButtonProductCommonClass ${
                      activeTab === "AddUpdateProduct_tab" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("AddUpdateProduct_tab")}
                    href="#AddUpdateProduct_tab"
                  >
                    General
                  </a>
                </li>
                <li className="nav-item tabOptionClass">
                  <a
                    id="a_tab_ComboOption_AddUpdateProduct"
                    className={`nav-link px-0 anchorButtonProductCommonClass ${activeTab === 'ComboOption_tab' ? 'active' : ''}`}
                    onClick={() => handleTabClick("ComboOption_tab")}
                    href="#ComboOption_tab"
                  >
                    Combo Option
                  </a>
                </li>
                <li className="nav-item tabOptionClass">
                  <a
                    id="a_tab_PrintersAllocation_AddUpdateProduct"
                    className={`nav-link px-0 anchorButtonProductCommonClass ${activeTab === 'PrinterSetup_tab' ? 'active' : ''}`}
                    onClick={() => handleTabClick("PrinterSetup_tab")}
                    href="#PrinterSetup_tab"
                  >
                    Printers Allocation
                  </a>
                </li>
                <li className="nav-item tabOptionClass">
                  <a
                    id="a_tab_ItemVisibility_AddUpdateProduct"
                    className={`nav-link px-0 anchorButtonProductCommonClass ${
                      activeTab === "ItemVisibilitySetup_tab" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("ItemVisibilitySetup_tab")}
                    href="#ItemVisibilitySetup_tab"
                  >
                    Item Visibility
                  </a>
                </li>
              </ul>

              <div className="tab-content">
              <div
                  id="AddUpdateProduct_tab"
                  className={`tab-pane ${
                    activeTab === "AddUpdateProduct_tab" ? "active" : ""
                  }`}
                >
                  {/* Form will be placed here */}
                  <ComboProductAddProductForm />
                </div>


                <div
                  id="PrinterSetup_tab"
                  className={`tab-pane ${
                    activeTab === "PrinterSetup_tab" ? "active" : ""
                  }`}
                >
                  <ComboProductPrinterAllocationTab />
                </div>

              <div
                  id="ItemVisibilitySetup_tab"
                  className={`tab-pane ${
                    activeTab === "ItemVisibilitySetup_tab" ? "active" : ""
                  }`}
                >
                  <ComboProductItemVisibilitySetup />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboProducts;
