import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "../../../assets/CSS/manageProducts/breadcrumb.css";

const MainDepartment: React.FC = () => {
  const [isDeleteEnabled, setIsDeleteEnabled] = useState(false);

  const toggleDelete = () => {
    setIsDeleteEnabled(!isDeleteEnabled);
  };

  const editMainDepartment = (id) => {
    // Add logic to handle editing the department
    console.log(`Edit department with id: ${id}`);
  };

  const confirmDeleteMainDepartment = (id) => {
    // Add logic to handle the confirmation of deletion
    console.log(`Confirm delete department with id: ${id}`);
  };

  const departments = [
    { id: 102, name: "DESSERTssss" },
    { id: 103, name: "BEVERAGES" },
    { id: 104, name: "Food" },
    { id: 105, name: "Indian Food" },
    { id: 106, name: "Take away" },
    { id: 115, name: "ddd" },
    { id: 120, name: "testttt" },
    { id: 121, name: "Random" },
    { id: 132, name: "Combo" },
    { id: 133, name: "test" },
    { id: 143, name: "Print Group" },
    { id: 145, name: "MainDept" },
    { id: 146, name: "newcomb" },
    { id: 147, name: "simple" },
    { id: 148, name: "Manojcombo" },
    { id: 155, name: "Jingle" },
    { id: 160, name: "Mains" },
    { id: 161, name: "Department 1" },
    { id: 162, name: "Staging" },
    { id: 163, name: "single Main" },
    { id: 166, name: "Main1" },
    { id: 167, name: "MainDepartment" },
    { id: 168, name: "Ketto" },
    { id: 171, name: "Desserts" },
    { id: 172, name: "Miscellaneous" },
    { id: 178, name: "Main Dept" },
    { id: 179, name: "Main Dept1" },
  ];

  return (
    <div id="contentWrapper_RestaurantLayout" className="content-wrapper">
      <div className="top_area_row">
        <div className="row">
          <div className="col-sm-8">
            <nav>
              <div className="main_nav_bread">
                <ol className="breadcrumb pl-3">
                  <li className="breadcrumb-item nav_bread_one">
                    <Link className="fs-6 fw-bold" to="/manage-products">Products</Link>
                  </li>
                  <li className="breadcrumb-item nav_right pl-1 px-2">
                    <Link
                      href="javascript:;"
                      style={{ textDecoration: "none", cursor: "text" }}
                    >
                      <i className="pt-1 fs-6 fa fa-angle-right " aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li className="breadcrumb-item nav_bread_two pl-0">
                    <Link
                    className="fs-6 fw-bold"
                      to="javascript:;"
                      style={{ textDecoration: "none", cursor: "text" }}
                    >
                      Main Department
                    </Link>
                  </li>
                </ol>
              </div>
            </nav>
          </div>
        </div>

        <div className="main_deapt">
          <div className="row align-items-center">
            <div className="col-sm-10">
              <h2 className="mb-0">MAIN DEPARTMENT</h2>
            </div>
            <div className="col-sm-2">
              <div className="check_wrap-right">
                <div className="form-group mb-0">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="sb-checkbox__input cstm_wrap_uppr"
                      id="chkDeleteMainDepartment"
                      name="chkDeleteMainDepartment"
                      checked={isDeleteEnabled}
                      onChange={toggleDelete}
                    />
                    <label
                      className="sb-checkbox__label sb-checkbox__label--green wrap_label_check"
                      htmlFor="chkDeleteMainDepartment"
                    ></label>
                    <span className="onlie_prder"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>


          <div className="main_dept_below">
            
            <div id="dv_MainDeparmentsList_Section" className="">
              <div className="row">
                {departments.map((department) => (
                  <div
                    key={department.id}
                    className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 p-2"
                  >
                    <div className="mainDepartmentsListClass "
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                    // padding: "15px",
                                    boxSizing: "border-box",
                                    overflow: "hidden",
                                    // border: "1px solid #ddd",
                                    // borderRadius: "4px",
                                    backgroundColor: "#fff",
                                    // boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                                  }}
                    >
                      <div className="wrap_chekox-remove"
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                      }}>
                        <span>
                          <a
                            href="javascript:;"
                            title={department.name}
                            onClick={() => editMainDepartment(department.id)}
                            className="text-lg font-semibold text-blue-600 hover-underline"
                          >
                            {department.name}
                          </a>
                        </span>
                        {isDeleteEnabled && (
                          <span
                            className="removecions removeIconMainDepartmentClass cursor-pointer text-red-500"
                            onClick={() =>
                              confirmDeleteMainDepartment(department.id)
                            }
                          >
                            <span className="material-symbols-outlined">
                              remove
                            </span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </div>


        </div>
      </div>
    </div>
  );
};

export default MainDepartment;
