import React from "react";
import { Link } from "react-router-dom";

const SpeedTool = () => {
  return (
    <div className="content-wrapper min-h-[620px] pt-5">
      <div className="top_area_row ">
        <div className="row">
          <div className="col-sm-8">
            <nav>
              <div className="main_nav_bread">
                <ol className="breadcrumb pl-3">
                  <li className="breadcrumb-item nav_bread_one ">
                    <Link className="fs-6 fw-bold" to="/manage-products">
                      Products
                    </Link>
                  </li>
                  <li className="breadcrumb-item nav_right pl-1 px-2">
                    <a
                      href="javascript:;"
                      className="fs-6 fw-bold"
                      style={{ textDecoration: "none", cursor: "text" }}
                    >
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="breadcrumb-item nav_bread_two pl-0">
                    <Link
                      to="javascript:;"
                      className="fs-6 fw-bold"
                      style={{ textDecoration: "none", cursor: "text" }}
                    >
                      Speed Tool
                    </Link>
                  </li>
                </ol>
              </div>
            </nav>
          </div>
        </div>

        <div className="wrap_tabs-products sidebar_ul-nav_tabs wrao_sidebrs">
          <div className="tab-content">
            <div id="AddUpdateProduct_tab" className="tab-pane active">
              <div
                className="main_deapt"
                style={{ margin: "20px 5px 0px", borderRadius: "10px" }}
              >
                <div className="pro-range">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label
                          htmlFor="ddlProduct"
                          className="p-0 col-sm-3 col-form-label"
                        >
                          Product Range
                        </label>
                        <div className="col-sm-9">
                          <select
                            id="ddlProduct"
                            className="form-control ddlProduct"
                            name="ddlProduct"
                          >
                            <option value="0">Select</option>
                            <option value="904">904 - adasda (wqe)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label
                          htmlFor="ddlProduct_2"
                          className="p-0 col-sm-3 col-form-label pro-right"
                        >
                          To
                        </label>
                        <div className="col-sm-9">
                          <select
                            id="ddlProduct_2"
                            className="form-control ddlProduct"
                            name="ddlProduct_2"
                          >
                            <option value="0">Select</option>
                            <option value="904">904 - adasda (wqe)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label
                          htmlFor="ddlDepartment"
                          className="p-0 col-sm-3 col-form-label"
                        >
                          Department Range
                        </label>
                        <div className="col-sm-9">
                          <select
                            id="ddlDepartment"
                            className="form-control ddlDepartment"
                            name="ddlDepartment"
                          >
                            <option value="0">Select</option>
                            <option value="657">657 - wqe</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label
                          htmlFor="ddlDepartment_2"
                          className="p-0 col-sm-3 col-form-label pro-right"
                        >
                          To
                        </label>
                        <div className="col-sm-9">
                          <select
                            id="ddlDepartment_2"
                            className="form-control ddlDepartment"
                            name="ddlDepartment_2"
                          >
                            <option value="0">Select</option>
                            <option value="657">657 - wqe</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label
                          htmlFor="select-action-type"
                          className="p-0 col-sm-3 col-form-label"
                        >
                          Action-Type
                        </label>
                        <div className="col-sm-9">
                          <select
                            name="action-type[]"
                            id="select-action-type"
                            multiple
                            className="form-control select2 select2Class select-action-type select2-hidden-accessible"
                          >
                            <option value="1">Setup Printer</option>
                            <option value="2">Setup Modifier</option>
                            <option value="3">Set Visibility</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="setup-printer" className="p-2 setup-layer d-none">
                    <div className="col-md-12 col-lg-12 col-sm-12 product_availability-wrap my-2 ps-2 p-0">
                      <div className="row">
                        <div className="col-md-10 col-lg-10 col-sm-10 col-10">
                          <p className="product_item-name">
                            <span
                              style={{ fontSize: "18px", fontWeight: "500" }}
                            >
                              pos receipt sunmi ( N449P2BMT0419 )
                            </span>
                          </p>
                        </div>
                        <div className="col-md-12 col-lg-12 col-sm-12 product_availability-wrap my-2 ps-2 p-0">
                          <div className="row">
                            <div className="col-md-10 col-lg-10 col-sm-10 col-10">
                              <p className="product_item-name">
                                <span
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "500",
                                  }}
                                >
                                  kituu22 ( N449P2BMT0419 )
                                </span>
                              </p>
                            </div>
                            <div
                              className="col-md-2 col-lg-2 col-sm-2"
                              style={{}}
                            >
                              <div
                                style={{
                                  textAlign: "left",
                                  marginRight: "10px",
                                  marginTop: "9px",
                                }}
                              >
                                <input
                                  id="chkPrinter_1372_PrinterAllocation_AddUpdateProduct"
                                  type="checkbox"
                                  value="1372"
                                  className="chkPrinterAllocationCommonClass"
                                  style={{
                                    cursor: "pointer",
                                    height: "20px",
                                    width: "20px",
                                    marginLeft: "20px",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="setup-layer" id="setup-modifier">
                    <div className="form-group row">
                      <label
                        htmlFor="ddlModifier"
                        className="col-sm-3 col-form-label"
                      >
                        Select Product
                      </label>
                      <div className="col-sm-9">
                        <select
                          id="ddlModifier"
                          className="form-control"
                          name="ddlModifier"
                        >
                          <option value="0">Select</option>
                          <option value="296">
                            Pickled radish (ਦੀਵਾਲੀ ਸਪੈਸ਼ਲ)
                          </option>
                          <option value="1628">Pastadddd (दिवाली विशेष)</option>
                          <option value="1629">
                            department missing issue (Department1)
                          </option>
                          <option value="1819">
                            Onion Pizza (Sub for upsell)
                          </option>
                          <option value="1820">
                            Onion Pizza + Drinks (Combo Offer) (DRINKS)
                          </option>
                          <option value="2146">
                            simple product (Mohali Combos)
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="setup-layer d-none" id="setup-visibility">
                    <div className="switch-1">
                      <div className="row">
                        <div className="col-8 col-md-6">
                          <p>Kiosk</p>
                        </div>
                        <div className="col-4 col-md-6">
                          <div>
                            <label className="switch round_wraps">
                              <input
                                id="chk_KioskVisibility"
                                className="chk_visibility"
                                type="checkbox"
                                defaultChecked
                                value="2"
                              />
                              <span className="slider round"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="switch-1">
                      <div className="row">
                        <div className="col-8 col-md-6">
                          <p>POS</p>
                        </div>
                        <div className="col-4 col-md-6">
                          <div>
                            <label className="switch round_wraps">
                              <input
                                id="chk_POSVisibility"
                                className="chk_visibility"
                                type="checkbox"
                                defaultChecked
                                value="1"
                              />
                              <span className="slider round"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="switch-1">
                      <div className="row">
                        <div className="col-8 col-md-6">
                          <p>Table-QR</p>
                        </div>
                        <div className="col-4 col-md-6">
                          <div>
                            <label className="switch round_wraps">
                              <input
                                id="chk_TableQRVisibility"
                                className="chk_visibility"
                                type="checkbox"
                                defaultChecked
                                value="5"
                              />
                              <span className="slider round"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="switch-1">
                      <div className="row">
                        <div className="col-8 col-md-6">
                          <p>Store-QR</p>
                        </div>
                        <div className="col-4 col-md-6">
                          <div>
                            <label className="switch round_wraps">
                              <input
                                id="chk_StoreQRVisibility"
                                className="chk_visibility"
                                type="checkbox"
                                defaultChecked
                                value="6"
                              />
                              <span className="slider round"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pro-btns flex gap-4">
                    {" "}
                    {/* Add gap between the buttons */}
                    <button className="pro-save save-multi-items">
                      Submit
                    </button>{" "}
                    <button className="pro-cancel">Cancel</button>
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

export default SpeedTool;
