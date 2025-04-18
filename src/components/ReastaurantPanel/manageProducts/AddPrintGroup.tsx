import React, { useEffect, useState } from "react";
// import CreatePrintGroupModal from "";
import { Link } from "react-router-dom";
import CreatePrintGroupModal from "./CreatePrintGroupModal";

const AddPrintGroup: React.FC = () => {
  // useEffect(() => {
  //   // Setting the page title when the component mounts
  //   document.getElementById("heading_PageTitle_RestaurantLayout").innerHTML =
  //     "Print Group";
  //   document.body.classList.add("main-dept-bx");

  //   return () => {
  //     document.body.classList.remove("main-dept-bx");
  //   };
  // }, []);

  const handleCheckboxChange = () => {
    // Implement the functionality for enabling the delete print group option
  };

  const handleEditPrintGroup = (id) => {
    // Implement the logic to edit print group details
    console.log(`Editing print group with ID: ${id}`);
  };

  const handleDeletePrintGroup = (id) => {
    // Implement the logic for confirming the deletion of a print group
    console.log(`Confirming deletion for print group with ID: ${id}`);
  };

  const handleOpenCreatePrintGroupPopup = () => {
    // Logic to open the popup for creating a new print group
    console.log("Opening create print group popup");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle form submission (for the modal)
  const handleCreatePrintGroup = (printGroupName: string) => {
    console.log("Print Group Created:", printGroupName);
    closeModal(); // Close the modal after submission
  };

  const [deleteEnabled, setDeleteEnabled] = useState(false);
  const [printGroups, setPrintGroups] = useState([
    { id: 61, name: "test" },
    { id: 62, name: "test1" },
  ]);

  const toggleDeleteOption = () => {
    setDeleteEnabled((prev) => !prev);
  };

  // const handleEditPrintGroup = (id) => {
  //   console.log(`Edit Print Group with id: ${id}`);
  //   // Add logic to edit the print group
  // };

  // const handleDeletePrintGroup = (id) => {
  //   console.log(`Confirm Delete Print Group with id: ${id}`);
  //   // Add logic to delete the print group
  // };

  const openCreatePrintGroupPopup = () => {
    console.log("Open Create Print Group Popup");
    // Add logic to open the create print group popup
  };
  return (
    <div id="contentWrapper_RestaurantLayout" className="content-wrapper">
      <div className="top_area_row">
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
                      Print Group
                    </Link>
                  </li>
                </ol>
              </div>
            </nav>
          </div>
        </div>

        <div className=" main-dept-bx">
          <div className="main_deapt main-dept-bx">
            <div className="row align-items-center">
              <div className="col-sm-10">
                <h2 className="mb-0">PRINT GROUP</h2>
              </div>
              <div className="col-sm-2">
                <div className="check_wrap-right">
                  <div className="form-group mb-0">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        className="sb-checkbox__input cstm_wrap_uppr"
                        id="chkDeletePrintGroup_ManagePrintGroups"
                        name="chkDeletePrintGroup_ManagePrintGroups"
                        checked={deleteEnabled}
                        onChange={toggleDeleteOption}
                      />
                      <label
                        className="sb-checkbox__label sb-checkbox__label--green wrap_label_check"
                        htmlFor="chkDeletePrintGroup_ManagePrintGroups"
                      ></label>
                      <span className="onlie_prder"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="main_dept_below">
              <div
                id="dv_PrintGroupsList_Section_ManagePrintGroups"
                className="row ui-sortable"
              >
                {printGroups.map((group) => (
                  <div
                    key={group.id}
                    className="col-sm-2 printGroupsListClass"
                    data-pgid={group.id}
                  >
                    <div className="wrap_chekox-remove">
                      <span>
                        <a
                          href="#"
                          title={group.name}
                          onClick={() => handleEditPrintGroup(group.id)}
                        >
                          {group.name}
                        </a>
                      </span>
                      <span
                        className="removecions removeIconPrintGroupClass"
                        style={{ display: deleteEnabled ? "inline" : "none" }}
                        onClick={() => handleDeletePrintGroup(group.id)}
                      >
                        <span className="material-symbols-outlined">
                          remove
                        </span>
                      </span>
                    </div>
                  </div>
                ))}

                <div className="col-sm-2 wrapadd-plus-cion pt-0">
                  <div className="svg_plus_icon">
                    <a href="#" onClick={openModal}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <g transform="translate(-688.5 -285.5)">
                          <line
                            y2="16"
                            transform="translate(697.5 286.5)"
                            fill="none"
                            stroke="#1c2126"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          ></line>
                          <line
                            x2="16"
                            transform="translate(689.5 294.5)"
                            fill="none"
                            stroke="#1c2126"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          ></line>
                        </g>
                      </svg>
                    </a>
                  </div>

                  {/* CreatePrintGroupModal Component */}
                  <CreatePrintGroupModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    onSubmit={handleCreatePrintGroup}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPrintGroup;
