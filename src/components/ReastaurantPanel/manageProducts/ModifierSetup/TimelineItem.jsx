import React, { useState } from "react";
import ModifierOptionModal from "./ModifierOptionModal";

const TimelineItem = () => {
  const [isDefaultChecked, setIsDefaultChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleDefaultChange = () => {
    setIsDefaultChecked(!isDefaultChecked);
    // Add your logic for handling the default option change here
  };

  const handleEditModifier = () => {
    // Add your logic to edit the modifier
  };

  const handleDeleteModifier = () => {
    // Add your logic to confirm and delete the modifier
  };

  const handleEditOption = () => {
    // Add your logic to edit the option
  };

  const handleDeleteOption = () => {
    // Add your logic to confirm and delete the option
  };

  const handleShowPopup = () => {
    // Add your logic to show the modifier option popup
  };

  const [isModifierModalOpen, setIsModifierModalOpen] = useState(false);

  // Function to show the modal
  const openModifierOptionModal = () => {
    setIsModifierModalOpen(true);
  };

  // Function to close the modal
  const closeModifierOptionModal = () => {
    setIsModifierModalOpen(false);
  };

  // Handle form submission (replace with actual logic)
  const handleModifierOptionSubmit = () => {
    console.log("Modifier option form submitted");
    closeModifierOptionModal(); // Close the modal after submission
  };

  return (
    <li className="timeline-inverted">
      <div className="timeline-badge">2</div>
      <div className="timeline-panel">
        <div>
          <div className="timeline-heading">
            <div className="faq" data-component="Faq">
              <div className="faq__grid__faqs">
                <details className="faq__grid__faqs__faq" open={isOpen}>
                  <summary
                    className="faq__grid__faqs__faq__button"
                    data-category="faq"
                    data-label="¿Cuánto tiempo dura la sesión?"
                  >
                    <div className="faq__grid__faqs__faq__button__content">
                      <div className="heading_text-wraps">
                        <div
                          className="title_faq_wrap"
                          style={{ minWidth: "330px", maxWidth: "330px" }}
                        >
                          <div className="head_title">Main Course</div>
                        </div>
                        <div className="other_wrap-all first_other_wraps">
                          <label style={{ marginLeft: "16px" }}>Min</label>
                          <input
                            type="text"
                            className="form-control min_max-value"
                            value="0"
                            readOnly
                          />
                          <label>Max</label>
                          <input
                            type="text"
                            className="form-control min_max-value"
                            value="1"
                            readOnly
                          />
                          <p
                            className="default_value-wrsp"
                            style={{ display: "none" }}
                          >
                            Default Item
                          </p>
                          <div
                            className="faq__grid__faqs__faq__button__arrow"
                            style={{ display: "none" }}
                          >
                            <svg
                              width="19"
                              height="12"
                              viewBox="0 0 19 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.385 0.884766L9.5 7.75477L2.615 0.884766L0.5 2.99977L9.5 11.9998L18.5 2.99977L16.385 0.884766Z"
                                fill="#1A73E8"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="heading_edit_delete">
                          <a href="javascript:;" onClick={handleEditModifier}>
                            <i className="fa fa-edit" title="Edit Modifier" />
                          </a>
                          <a href="javascript:;" onClick={handleDeleteModifier}>
                            <i
                              className="fa fa-trash"
                              title="Delete Modifier"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </summary>

                  <div className="type_wrapper-item d-flex flex-wrap ">
                    <div className="type_wrapper-item">
                      <p style={{ position: "relative" }}>
                        <div
                          className="item-edit-del"
                          style={{
                            position: "absolute",
                            top: "3px",
                            right: "3px",
                            display: "flex",
                            gap: "0px",
                          }}
                        >
                          <a
                            href="javascript:;"
                            title="Edit Option"
                            onClick={() =>
                              EditModifierOption_ModifierSetup(3447)
                            }
                          >
                            <i
                              className="fa fa-edit"
                              style={{ fontSize: "18px" }}
                            />
                          </a>
                          <a
                            href="javascript:;"
                            title="Delete Option"
                            onClick={() =>
                              ConfirmDeleteModifierOption_ModifierSetup(
                                1048,
                                3447
                              )
                            }
                          >
                            <i
                              className="fa fa-trash"
                              style={{ fontSize: "18px" }}
                            />
                          </a>
                        </div>
                        <input
                          type="text"
                          className="form-control modifierOptionTitleStyle"
                          value={`Item 1`}
                          style={{
                            borderTopRightRadius: "0px",
                            borderBottomLeftRadius: "6px",
                            borderBottomRightRadius: "6px",
                          }}
                          readOnly
                        />
                      </p>

                      <div className="wrapper_type-value">
                        <label>Max Allow</label>
                        <input
                          type="text"
                          className="form-control min_max-value my-1"
                          value="1"
                          readOnly
                        />
                        <div className="clear" />
                        <label>Price</label>
                        <input
                          type="text"
                          className="form-control min_max-value my-1 "
                          value="10"
                          readOnly
                        />

                        <div className="clear" />
                        <label style={{ marginTop: "4px" }}>Is Default</label>
                        <input
                          id="chkModifierOption_Default_3447 my-1"
                          type="checkbox"
                          style={{
                            marginTop: "4px",
                            cursor: "pointer",
                            width: "25px",
                          }}
                          className="DefaultMOCheckboxClass_1048"
                          onChange={() =>
                            ConfirmSetDefaultModifierOption_ModifierSetup(
                              3447,
                              1048
                            )
                          }
                        />
                        <div className="clear" />
                      </div>
                    </div>

                    <div className="type_wrapper-item">
                      <p onClick={openModifierOptionModal}>
                        <a href="#">
                          <span className="add_item-css">
                            <i className="fa fa-plus" aria-hidden="true"></i>
                          </span>
                        </a>
                      </p>

                      {/* Pass the isOpen state and close function to the modal */}
                      <ModifierOptionModal
                        isOpen={isModifierModalOpen}
                        onClose={closeModifierOptionModal}
                        onSubmit={handleModifierOptionSubmit}
                      />
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TimelineItem;
