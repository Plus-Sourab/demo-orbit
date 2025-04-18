import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddSubDepartmentModal from "./AddSubDepartmentModal";
// import AddSubDepartmentModal from "./AddSubDepartmentModal";

const AddDepartment: React.FC = () => {
  const [isDeleteEnabled, setDeleteEnabled] = useState(false);

  const subDepartments = [
    {
      id: 346,
      title: "ਦੀਵਾਲੀ ਸਪੈਸ਼ਲ",
      imgSrc:
        "subdepartmentImage_1714630696536_ed8d60f58e7d498aa524455a1df4e706.png",
    },
    {
      id: 347,
      title: "दिवाली विशेष",
      imgSrc:
        "Miso grill salmon don_resized_50d684b7881c4b06b2dae7914cc535c7_2d4e08fc129446cba8bc17ad643d129f.jpg",
    },
    {
      id: 367,
      title: "COMBOS",
      imgSrc:
        "Salmon sashimi 6pc_85f74ca8348247de9febf0a3fb45ef46_01616215fb51477ab737e1aa29d84b2b.jpg",
    },
    {
      id: 367,
      title: "COMBOS",
      imgSrc:
        "Salmon sashimi 6pc_85f74ca8348247de9febf0a3fb45ef46_01616215fb51477ab737e1aa29d84b2b.jpg",
    },
    {
      id: 367,
      title: "COMBOS",
      imgSrc:
        "Salmon sashimi 6pc_85f74ca8348247de9febf0a3fb45ef46_01616215fb51477ab737e1aa29d84b2b.jpg",
    },
    {
      id: 367,
      title: "COMBOS",
      imgSrc:
        "Salmon sashimi 6pc_85f74ca8348247de9febf0a3fb45ef46_01616215fb51477ab737e1aa29d84b2b.jpg",
    },
    {
      id: 367,
      title: "COMBOS",
      imgSrc:
        "Salmon sashimi 6pc_85f74ca8348247de9febf0a3fb45ef46_01616215fb51477ab737e1aa29d84b2b.jpg",
    },
    {
      id: 367,
      title: "COMBOS",
      imgSrc:
        "Salmon sashimi 6pc_85f74ca8348247de9febf0a3fb45ef46_01616215fb51477ab737e1aa29d84b2b.jpg",
    },
    {
      id: 367,
      title: "COMBOS",
      imgSrc:
        "Salmon sashimi 6pc_85f74ca8348247de9febf0a3fb45ef46_01616215fb51477ab737e1aa29d84b2b.jpg",
    },
    {
      id: 367,
      title: "COMBOS",
      imgSrc:
        "Salmon sashimi 6pc_85f74ca8348247de9febf0a3fb45ef46_01616215fb51477ab737e1aa29d84b2b.jpg",
    },
    {
      id: 367,
      title: "COMBOS",
      imgSrc:
        "Salmon sashimi 6pc_85f74ca8348247de9febf0a3fb45ef46_01616215fb51477ab737e1aa29d84b2b.jpg",
    },
    {
      id: 367,
      title: "COMBOS",
      imgSrc:
        "Salmon sashimi 6pc_85f74ca8348247de9febf0a3fb45ef46_01616215fb51477ab737e1aa29d84b2b.jpg",
    },
    // Add other departments similarly...
  ];

  const handleDeleteToggle = () => {
    setDeleteEnabled(!isDeleteEnabled);
  };

  const editSubDepartment = (id) => {
    console.log(`Edit sub-department with ID: ${id}`);
  };

  const confirmDeleteSubDepartment = (id) => {
    console.log(`Delete sub-department with ID: ${id}`);
  };

  const [showResponseModal, setShowResponseModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showCropModal, setShowCropModal] = useState(false);
  const [selectedMainDepartment, setSelectedMainDepartment] = useState("0");
  const [departmentName, setDepartmentName] = useState("");
  const [selectedPrintGroup, setSelectedPrintGroup] = useState("0");
  const [previewImage, setPreviewImage] = useState(null);

  // const closeModal = () => {
  //   setShowResponseModal(false);
  //   setShowCreateModal(false);
  //   setShowCropModal(false);
  // };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreviewImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleAddUpdateDepartment = (type) => {
    if (type === 1) {
      // Add functionality
    } else if (type === 2) {
      // Update functionality
    }
  };

  const handleCropImage = () => {
    // Crop image functionality
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <div className=" department-class sidebar-icon-only min-vh-100">
      <div
        id="contentWrapper_RestaurantLayout"
        className="content-wrapper "
      >
        <div className="top_area_row">
          <div className="row">
            <div className="col-sm-8">
              <nav>
                <div className="main_nav_bread">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item nav_bread_one">
                      <Link to="/manage-products">Products</Link>
                    </li>
                    <li className="breadcrumb-item nav_right pl-0">
                      <a
                        href="#"
                        style={{ textDecoration: "none", cursor: "text" }}
                      >
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="breadcrumb-item nav_bread_two pl-0">
                      <a
                        href="#"
                        style={{ textDecoration: "none", cursor: "text" }}
                      >
                        Department
                      </a>
                    </li>
                  </ol>
                </div>
              </nav>
            </div>
          </div>
          {/* </div> */}

          <div className="main_deapt">
            <div className="row">
              <div className="col-sm-10">
                <h2 className="mb-0">DEPARTMENT</h2>
              </div>
              <div className="col-sm-2">
                <div className="check_wrap-right">
                  <div className="form-group mb-0">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        className="sb-checkbox__input cstm_wrap_uppr"
                        id="chkDeleteSubDepartment"
                        name="chkDeleteSubDepartment"
                        checked={isDeleteEnabled}
                        onChange={handleDeleteToggle}
                      />
                      <label
                        className="sb-checkbox__label sb-checkbox__label--green wrap_label_check"
                        htmlFor="chkDeleteSubDepartment"
                      ></label>
                      <span className="onlie_prder"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="main_dept_below">
              <div
                id="dv_SubDeparmentsList_Section"
                className="row ui-sortable"
              >
                {subDepartments.map((subDept) => (
                  <div
                    key={subDept.id}
                    className="col-sm-2 subDepartmentsListClass ui-sortable-handle"
                    data-sid={subDept.id}
                  >
                    <div className="wrap_chekox-remove">
                      <span>
                        <a
                          href="#"
                          onClick={() => editSubDepartment(subDept.id)}
                          title={subDept.title}
                        >
                          {subDept.title}
                        </a>
                      </span>
                      {subDept.imgSrc && (
                        <span>
                          <img
                            src={`../../Content/ImageUploads/SubDepartmentImages/${subDept.imgSrc}`}
                            onClick={() => editSubDepartment(subDept.id)}
                            style={{
                              width: "auto",
                              height: "70px",
                              cursor: "pointer",
                            }}
                            alt={subDept.title}
                          />
                        </span>
                      )}
                      {isDeleteEnabled && (
                        <span
                          className="removecions removeIconSubDepartmentClass"
                          onClick={() => confirmDeleteSubDepartment(subDept.id)}
                        >
                          <span className="material-symbols-outlined">
                            remove
                          </span>
                        </span>
                      )}
                    </div>
                  </div>
                ))}
                <div className="col-sm-2 wrapadd-plus-cion">
                  <div className="svg_plus_icon">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        openModal();
                      }}
                    >
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

                  <AddSubDepartmentModal
                    isVisible={isModalVisible}
                    onClose={closeModal}
                  />
                </div>

                <div>
                  {/* Response Modal */}
                  {showResponseModal && (
                    <div className="modal" style={{ zIndex: 1065 }}>
                      <div className="modal-dialog cstm_modal_dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h4 className="modal-title">Response Message</h4>
                          </div>
                          <div className="modal-body">
                            <p id="lblResponseMessage_SubDepartment_Modal">
                              Response Message
                            </p>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => setShowResponseModal(false)}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Create SubDepartment Modal */}
                  {showCreateModal && (
                    <div
                      className="modal"
                      data-backdrop="static"
                      data-keyboard="false"
                    >
                      <div className="modal-dialog cstm_modal_dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h4 className="modal-title">Add Department</h4>
                          </div>
                          <div className="modal-body">
                            <div className="form-group">
                              <select
                                className="form-control"
                                value={selectedMainDepartment}
                                onChange={(e) =>
                                  setSelectedMainDepartment(e.target.value)
                                }
                              >
                                <option value="0">
                                  Select Main-Department
                                </option>
                                {/* Add additional options here */}
                              </select>
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Department Name"
                                value={departmentName}
                                onChange={(e) =>
                                  setDepartmentName(e.target.value)
                                }
                              />
                            </div>
                            <div className="form-group">
                              <select
                                className="form-control"
                                value={selectedPrintGroup}
                                onChange={(e) =>
                                  setSelectedPrintGroup(e.target.value)
                                }
                              >
                                <option value="0">Select Print-Group</option>
                                {/* Add additional options here */}
                              </select>
                            </div>
                            <div className="form-group">
                              <input
                                type="file"
                                className="form-control"
                                accept="image/*"
                                onChange={handleImageChange}
                              />
                              {previewImage && (
                                <img
                                  src={previewImage}
                                  alt="Preview"
                                  style={{ width: "100px", height: "auto" }}
                                />
                              )}
                            </div>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => setShowCreateModal(false)}
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => handleAddUpdateDepartment(1)}
                            >
                              Add
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => handleAddUpdateDepartment(2)}
                              style={{ display: "none" }}
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Crop Image Modal */}
                  {showCropModal && (
                    <div
                      className="modal"
                      data-backdrop="static"
                      data-keyboard="false"
                    >
                      <div className="modal-dialog cstm_modal_dialog">
                        <div
                          className="modal-content"
                          style={{ width: "700px" }}
                        >
                          <div
                            className="modal-header"
                            style={{ textAlign: "center" }}
                          >
                            <h4 className="modal-title">
                              Adjust SubDepartment Image
                            </h4>
                          </div>
                          <div className="modal-body">
                            <div className="form-group">
                              <div
                                className="image-wrapper"
                                id="dv_CropImage_Section"
                              >
                                {/* Crop image section content */}
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={handleCropImage}
                            >
                              Set
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* </div>
        </div>
        
    </div> */}
        </div>
      </div>
    </div>
  );
};

export default AddDepartment;
