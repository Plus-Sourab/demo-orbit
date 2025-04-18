import { useState } from "react";
import {
  Button,
  Dropdown,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import "../../assets/CSS/manageProducts/manageProducts.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import { Link, Outlet } from "react-router-dom";
const ManageProducts: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("Name");

  const handleFilterSelect = (eventKey) => {
    setSelectedFilter(eventKey);
  };

  const handleSearch = () => {
    // Define the search filtering logic here
    console.log("Search initiated");
  };

  const handleImport = () => {
    // Define the import functionality here
    console.log("Import products");
  };

  const handleExport = () => {
    Swal.fire({
      title: "Export Products",
      text: "Are you sure you want to export the products data?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      reverseButtons: true,
      preConfirm: () => {
        // Your logic for exporting the products goes here
        console.log("Products exported!");
      },
    });
  };

  //Table
  const [showPriceTooltip, setShowPriceTooltip] = useState(false);
  const [showCostTooltip, setShowCostTooltip] = useState(false);
  const [sellingPrice, setSellingPrice] = useState("$45.55");
  const [costPrice, setCostPrice] = useState("$-1");

  const handleEditProductPage = (productId, productType) => {
    console.log(
      `Edit Product Page for Product ID: ${productId}, Type: ${productType}`
    );
    // Navigate to the edit page logic here
  };

  const handleUpdateProductStatus = (productId, productType) => {
    console.log(
      `Update Status for Product ID: ${productId}, Type: ${productType}`
    );
    // Update product status logic here
  };

  const confirmDeleteProduct = () => {
    // Custom delete confirmation logic
    alert("Are you sure you want to delete the product?");
  };

  const importProducts = () => {
    // Implement ImportProductsDataFromExcelSheet functionality here
    console.log("Importing products...");
  };

  const exportProducts = () => {
    // Implement ExportProductsDataIntoExcelSheet functionality here
    console.log("Exporting products...");
  };

  return (
    <div className="Manage-prod-bx ">
      <div
        id="contentWrapper_RestaurantLayout "
        className="pt-4 content-wrapper"
      >
        <div className="row">
          <div className="product-manage-br">
            <div className="row">
              <input type="hidden" id="hdn_ProNumber" value="0" />

              <div className="col-12 col-md-8 col-lg-8 text-center">
                <div className="pro_dropd0wn">
                  <div
                    className="dropdown searchDropdown"
                    id="customDDLSearch_ManageProduct"
                  >
                    <Dropdown onSelect={handleFilterSelect}>
                      <Dropdown.Toggle
                        variant="primary"
                        id="dropdown-basic"
                        className="dropdown-custom"
                      >
                        {selectedFilter}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="ProductNumber">
                          Product No.
                        </Dropdown.Item>
                        <Dropdown.Item
                          eventKey="Name"
                          active={selectedFilter === "Name"}
                        >
                          Name
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="Description">
                          Description
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="SellingPrice">
                          Price
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="MainDepartment">
                          Main Dept.
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="SubDepartment">
                          Sub Dept.
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="ProductBarcode">
                          Barcode
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  <div className="input-group input_searchh">
                    <input
                      type="text"
                      className="form-control searchTextbox"
                      id="txtSearch_ManageProduct"
                      placeholder="Search"
                      style={{ height: "40px" }}
                    />
                    <div
                      className="z-2 input-group-append pt-2"
                      onClick={handleSearch}
                      style={{ cursor: "pointer" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16.001"
                        height="16"
                        viewBox="0 0 16.001 16"
                      >
                        <g id="__TEMP__SVG__" opacity="0.45">
                          <path
                            id="Path_12695"
                            data-name="Path 12695"
                            d="M23.13,23.128a1,1,0,0,1,1.415,0l3.85,3.85a1,1,0,1,1-1.414,1.415l-3.85-3.85a1,1,0,0,1,0-1.415Z"
                            transform="translate(-12.688 -12.686)"
                            fill="#1c2126"
                            fillRule="evenodd"
                          />
                          <path
                            id="Path_12696"
                            data-name="Path 12696"
                            d="M6.5,12A5.5,5.5,0,1,0,1,6.5,5.5,5.5,0,0,0,6.5,12ZM13,6.5A6.5,6.5,0,1,1,6.5,0,6.5,6.5,0,0,1,13,6.5Z"
                            transform="translate(0 0)"
                            fill="#1c2126"
                            fillRule="evenodd"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-4 text-end">
                <Link to="/manage-products/import-products">
                  <Button
                    variant="success"
                    className="btn btn-success p-2"
                    onClick={handleImport}
                  >
                    Import
                  </Button>
                </Link>

                <Button
                  variant="primary"
                  className="p-2 ml-2 btn btn-primary btnExportProductsStyle"
                  onClick={handleExport}
                >
                  Export
                </Button>

                <form
                  id="form_ExportProductsToExcel_AddUpdateProduct"
                  method="post"
                  action="/Restaurant/ExportProductsToExcel"
                  style={{ display: "none" }}
                >
                  <input
                    type="hidden"
                    id="hdn_SelectedExportType_AddUpdateProduct"
                    name="hdn_SelectedExportType_AddUpdateProduct"
                    value="1"
                  />
                  <input
                    type="hidden"
                    id="hdn_AccessToken_AddUpdateProduct"
                    name="hdn_AccessToken_AddUpdateProduct"
                    value="your_access_token"
                  />
                  <input
                    type="hidden"
                    id="hdn_RestaurantLoginId_AddUpdateProduct"
                    name="hdn_RestaurantLoginId_AddUpdateProduct"
                    value="0"
                  />
                </form>
              </div>
            </div>
          </div>

          <div className="table-check ">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="tblProductList_ManageProduct"
              >
                <thead>
                  <tr>
                    <th scope="col">Action</th>
                    <th scope="col">No.</th>
                    <th scope="col">Images</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Cost</th>
                    <th scope="col">Main Dept</th>
                    <th scope="col">Sub Dept</th>
                    <th scope="col">Barcode</th>
                    <th scope="col">Out of Stock</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    data-pid="1"
                    data-ptype="1"
                    className=""
                    data-costprice="-1"
                  >
                    <td>
                      <div
                        className="td-icon"
                        onClick={() => handleEditProductPage(1, 1)}
                      >
                        <span>
                          <svg
                            fill="#5650BD"
                            viewBox="0 0 32 32"
                            style={{
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              strokeLinejoin: "round",
                              strokeMiterlimit: 2,
                            }}
                            version="1.1"
                            xmlSpace="preserve"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsSerif="http://www.serif.com/"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <path d="M12.965,5.462c0,-0 -2.584,0.004 -4.979,0.008c-3.034,0.006 -5.49,2.467 -5.49,5.5l0,13.03c0,1.459 0.579,2.858 1.611,3.889c1.031,1.032 2.43,1.611 3.889,1.611l13.003,0c3.038,-0 5.5,-2.462 5.5,-5.5c0,-2.405 0,-5.004 0,-5.004c0,-0.828 -0.672,-1.5 -1.5,-1.5c-0.827,-0 -1.5,0.672 -1.5,1.5l0,5.004c0,1.381 -1.119,2.5 -2.5,2.5l-13.003,0c-0.663,-0 -1.299,-0.263 -1.768,-0.732c-0.469,-0.469 -0.732,-1.105 -0.732,-1.768l0,-13.03c0,-1.379 1.117,-2.497 2.496,-2.5c2.394,-0.004 4.979,-0.008 4.979,-0.008c0.828,-0.002 1.498,-0.675 1.497,-1.503c-0.001,-0.828 -0.675,-1.499 -1.503,-1.497Z"></path>
                              <path d="M20.046,6.411l-6.845,6.846c-0.137,0.137 -0.232,0.311 -0.271,0.501l-1.081,5.152c-0.069,0.329 0.032,0.671 0.268,0.909c0.237,0.239 0.577,0.343 0.907,0.277l5.194,-1.038c0.193,-0.039 0.371,-0.134 0.511,-0.274l6.845,-6.845l-5.528,-5.528Zm1.415,-1.414l5.527,5.528l1.112,-1.111c1.526,-1.527 1.526,-4.001 -0,-5.527c-0.001,-0 -0.001,-0.001 -0.001,-0.001c-1.527,-1.526 -4.001,-1.526 -5.527,-0l-1.111,1.111Z"></path>
                            </g>
                          </svg>
                        </span>
                      </div>
                    </td>
                    <td>1</td>
                    <td className="img-svg">
                      {/* SVG icon */}
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class=""
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M23 4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4ZM21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4Z"
                            fill="#0F0F0F"
                          ></path>
                          <path
                            d="M4.80665 17.5211L9.1221 9.60947C9.50112 8.91461 10.4989 8.91461 10.8779 9.60947L14.0465 15.4186L15.1318 13.5194C15.5157 12.8476 16.4843 12.8476 16.8682 13.5194L19.1451 17.5039C19.526 18.1705 19.0446 19 18.2768 19H5.68454C4.92548 19 4.44317 18.1875 4.80665 17.5211Z"
                            fill="#0F0F0F"
                          ></path>
                          <path
                            d="M18 8C18 9.10457 17.1046 10 16 10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8Z"
                            fill="#0F0F0F"
                          ></path>
                        </g>
                      </svg>
                    </td>
                    <td>Lichi Juice</td>
                    <td title="This is the testing description of product of Lichi Juice">
                      This is the testing description...
                    </td>
                    <td className="price-pop tdManageProductCommonClassStyle">
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span className="productSellingPrice_ManageProductCommonClass">
                          {sellingPrice}
                        </span>
                        <i
                          className="fa fa-pencil"
                          onClick={() => setShowPriceTooltip(!showPriceTooltip)}
                          style={{ marginLeft: "5px" }}
                        ></i>
                      </span>
                      {showPriceTooltip && (
                        <div className="toltip1 tooltipManageProductCommonClass">
                          <span>
                            <i
                              className="fa fa-times"
                              onClick={() => setShowPriceTooltip(false)}
                            ></i>
                          </span>
                          <span>
                            <i
                              className="fa fa-check"
                              style={{ color: "green" }}
                            ></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            value={sellingPrice}
                            onChange={(e) => setSellingPrice(e.target.value)}
                          />
                        </div>
                      )}
                    </td>
                    <td className="price-pop tdManageProductCommonClassStyle">
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span className="productCostPrice_ManageProductCommonClass">
                          {costPrice}
                        </span>
                        <i
                          className="fa fa-pencil"
                          onClick={() => setShowCostTooltip(!showCostTooltip)}
                          style={{ marginLeft: "5px" }}
                        ></i>
                      </span>
                      {showCostTooltip && (
                        <div className="toltip1 tooltipManageProductCommonClass">
                          <span>
                            <i
                              className="fa fa-times"
                              onClick={() => setShowCostTooltip(false)}
                            ></i>
                          </span>
                          <span>
                            <i
                              className="fa fa-check"
                              style={{ color: "green" }}
                            ></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            value={costPrice}
                            onChange={(e) => setCostPrice(e.target.value)}
                          />
                        </div>
                      )}
                    </td>
                    <td>Juice Recipes</td>
                    <td>
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>22 Banana Shake</span>
                        <i
                          className="fa fa-pencil"
                          style={{ marginLeft: "5px" }}
                        ></i>
                      </span>
                      {/* Additional tooltip and dropdown logic can go here */}
                    </td>
                    <td>22222</td>
                    <td>
                      <div className="toggle-box text-center">
                        <label className="switch">
                          <input
                            type="checkbox"
                            onClick={() => handleUpdateProductStatus(1, 1)}
                          />
                          <span className="slider round"></span>
                        </label>
                      </div>
                    </td>
                  </tr>

                  <tr
                    data-pid="3"
                    data-ptype="1"
                    className=""
                    data-costprice="0"
                  >
                    <td>
                      <div
                        className="td-icon"
                        onClick={() => GoToEditProductPage(3, 1)}
                      >
                        <span>
                          <svg
                            fill="#5650BD"
                            viewBox="0 0 32 32"
                            style={{
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              strokeLinejoin: "round",
                              strokeMiterlimit: 2,
                            }}
                            version="1.1"
                            xmlSpace="preserve"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsSerif="http://www.serif.com/"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <path d="M12.965,5.462c0,-0 -2.584,0.004 -4.979,0.008c-3.034,0.006 -5.49,2.467 -5.49,5.5l0,13.03c0,1.459 0.579,2.858 1.611,3.889c1.031,1.032 2.43,1.611 3.889,1.611l13.003,0c3.038,-0 5.5,-2.462 5.5,-5.5c0,-2.405 0,-5.004 0,-5.004c0,-0.828 -0.672,-1.5 -1.5,-1.5c-0.827,-0 -1.5,0.672 -1.5,1.5l0,5.004c0,1.381 -1.119,2.5 -2.5,2.5l-13.003,0c-0.663,-0 -1.299,-0.263 -1.768,-0.732c-0.469,-0.469 -0.732,-1.105 -0.732,-1.768l0,-13.03c0,-1.379 1.117,-2.497 2.496,-2.5c2.394,-0.004 4.979,-0.008 4.979,-0.008c0.828,-0.002 1.498,-0.675 1.497,-1.503c-0.001,-0.828 -0.675,-1.499 -1.503,-1.497Z"></path>
                              <path d="M20.046,6.411l-6.845,6.846c-0.137,0.137 -0.232,0.311 -0.271,0.501l-1.081,5.152c-0.069,0.329 0.032,0.671 0.268,0.909c0.237,0.239 0.577,0.343 0.907,0.277l5.194,-1.038c0.193,-0.039 0.371,-0.134 0.511,-0.274l6.845,-6.845l-5.528,-5.528Zm1.415,-1.414l5.527,5.528l1.112,-1.111c1.526,-1.527 1.526,-4.001 -0,-5.527c-0.001,-0 -0.001,-0.001 -0.001,-0.001c-1.527,-1.526 -4.001,-1.526 -5.527,-0l-1.111,1.111Z"></path>
                            </g>
                          </svg>
                        </span>
                      </div>
                    </td>
                    <td className="tableActionsCell d-none"></td>
                    <td>3</td>
                    <td className="img-svg">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="d-none"
                      >
                        {/* SVG content */}
                      </svg>
                    </td>
                    <td>Mix Juice 222</td>
                    <td title="test 222222222">test 222222222</td>
                    <td
                      className="price-pop tdManageProductCommonClassStyle"
                      d-type="sellingprice"
                      id="tdProductSellingPrice_ManageProduct_3_1"
                    >
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span className="productSellingPrice_ManageProductCommonClass">
                          {" "}
                          $90{" "}
                        </span>
                        <i
                          className="fa fa-pencil"
                          aria-hidden="true"
                          style={{ marginLeft: "5px" }}
                        ></i>
                      </span>
                      <div
                        className="toltip1 d-none tooltipManageProductCommonClass"
                        id="toltipProductPrice_3_1"
                      >
                        <span>
                          <i className="fa fa-times" aria-hidden="true"></i>
                        </span>
                        <span>
                          <i
                            className="fa fa-check"
                            aria-hidden="true"
                            style={{ color: "green" }}
                          ></i>
                        </span>
                        <input
                          type="text"
                          className="form-control IsDecimal"
                          id="ProductSellingPrice_ManageProduct_3_1"
                        />
                      </div>
                    </td>
                    <td
                      className="price-pop tdManageProductCommonClassStyle"
                      d-type="cost"
                      id="tdProductCostPrice_ManageProduct_3_1"
                    >
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span className="productCostPrice_ManageProductCommonClass">
                          {" "}
                          $0{" "}
                        </span>
                        <i
                          className="fa fa-pencil"
                          aria-hidden="true"
                          style={{ marginLeft: "5px" }}
                        ></i>
                      </span>
                      <div
                        className="toltip1 d-none tooltipManageProductCommonClass"
                        id="toltipProductCostPrice_3_1"
                      >
                        <span>
                          <i className="fa fa-times" aria-hidden="true"></i>
                        </span>
                        <span>
                          <i
                            className="fa fa-check fa-check-cost"
                            aria-hidden="true"
                            style={{ color: "green" }}
                          ></i>
                        </span>
                        <input
                          type="text"
                          className="form-control IsDecimal"
                          id="ProductCostPrice_ManageProduct_3_1"
                        />
                      </div>
                    </td>
                    <td id="tdProductMainDepartment_ManageProduct_3_1">
                      <span className="productMainDepartment_ManageProductCommonClass">
                        Veg Recipes
                      </span>
                    </td>
                    <td
                      className="price-sel productMainDepartment tdManageProductCommonClassStyle"
                      data-maindepartmentid="2"
                      data-subdepartmentid="53"
                      id="tdProductSubDepartment_ManageProduct_3_1"
                    >
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span className="productSubDepartment_ManageProductCommonClass">
                          {" "}
                          Fast Food{" "}
                        </span>
                        <i
                          className="fa fa-pencil"
                          aria-hidden="true"
                          style={{ marginLeft: "5px" }}
                        ></i>
                      </span>
                      <div
                        className="toltip2 d-none tooltipManageProductCommonClass"
                        id="toltipProductMainDepartment_3_1"
                      >
                        <span>
                          <i className="fa fa-times" aria-hidden="true"></i>
                        </span>
                        <span>
                          <i
                            className="fa fa-check"
                            aria-hidden="true"
                            style={{ color: "green" }}
                          ></i>
                        </span>
                        <div>
                          <label>Main-Department</label>
                          <select
                            className="form-control"
                            id="ddlMainDepartment_ManageProduct_3_1"
                            onChange={() =>
                              GetAllActiveSubDepartmentsListByDepartment()
                            }
                          >
                            {/* Options go here */}
                          </select>
                          <label className="mt-2">Sub-Department</label>
                          <select
                            className="form-control"
                            id="ddlSubDepartment_ManageProduct_3_1"
                          >
                            {/* Options go here */}
                          </select>
                        </div>
                      </div>
                    </td>
                    <td>
                      <img
                        src="../../Content/ImageUploads/ProductBarcodeImages/barcodeeeeeee_c3d1e88a69e2488b8f2ae55e4c776d75.png"
                        alt="barcode"
                        className="barcodeImage"
                      />
                    </td>
                    <td>
                      <div className="toggle-box text-center">
                        <label className="switch">
                          <input
                            type="checkbox"
                            onClick={() => updateProductStatus(3, 1)}
                          />
                          <span className="slider round"></span>
                        </label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="cstm_btns_btms">
            <div className="container-fluid">
              <div className="row">
                <div className="col-3 px-1">
                  <Link
                    to="/manage-products/main-department"
                    className="btn btn-primary back-blue w-100"
                    role="button"
                  >
                    Add Main Department
                  </Link>
                </div>
                <div className="col-3 px-1">
                  <Link
                    to="/manage-products/add-department"
                    className="btn btn-primary back-blue w-100"
                    role="button"
                  >
                    Add Department
                  </Link>
                </div>
                <div className="col-3 px-1">
                  <Link
                    to="/manage-products/add-printGroup"
                    className="btn btn-primary back-blue w-100"
                    role="button"
                  >
                    Add Print Group
                  </Link>
                </div>
                <div className="col-3 px-1">
                  <Link
                    to="/manage-products/add-product"
                    className="btn btn-primary back-blue w-100"
                    role="button"
                  >
                    Add Product
                  </Link>
                </div>
              </div>

              <div className="row">
                <div className="col-3 px-1">
                  <Link
                    to="/manage-products/combo-products"
                    className="btn btn-primary back-blue w-100"
                    role="button"
                  >
                    Add Combo-Product
                  </Link>
                </div>
                <div className="col-3 px-1">
                  <a
                    href="#"
                    className="btn btn-primary back-blue w-100"
                    role="button"
                    onClick={confirmDeleteProduct}
                  >
                    Delete Product
                  </a>
                </div>
                <div className="col-3 px-1">
                  <Link
                    to="/manage-products/speed-tool"
                    className="btn btn-primary back-blue w-100"
                    role="button"
                  >
                    Speed Tool
                  </Link>
                </div>
                <div className="col-3 px-1">
                  <Link
                    to="/manage-products/up-sell-product"
                    className="btn btn-primary back-blue w-100"
                    role="button"
                  >
                    Upsell By Product
                  </Link>
                </div>
              </div>

              <div className="row d-none">
                <div className="col-3 px-1">
                  <div className="bottom_btns">
                    <a href="#" className="btn btn-primary back-blue w-100">
                      <button>Add Print Group</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
