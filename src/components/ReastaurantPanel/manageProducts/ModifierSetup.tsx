import { useState } from "react";
import ImportModifiersModal from "./Models/ImportModifiersModal";
import ModifierOptionModal from "./ModifierSetup/ModifierOptionModal";
import TimelineItem from "./ModifierSetup/TimelineItem";
import AddModifierModal from "./ModifierSetup/AddModifierModal";

const ModifierSetup: React.FC = () => {
  //   const [modifierOptions, setModifierOptions] = useState([
  // { id: 3447, name: "Item 1", maxAllow: 1, price: 10, isDefault: false },
  // { id: 3448, name: "Item 2", maxAllow: 1, price: 0, isDefault: true },
  // { id: 3449, name: "Item 3", maxAllow: 1, price: 0, isDefault: false },
  //   ]);

  const EditModifier = (modifierId) => {
    // Edit modifier logic
    console.log("Edit Modifier", modifierId);
  };

  const ConfirmDeleteModifier = (modifierId) => {
    // Delete modifier logic
    console.log("Delete Modifier", modifierId);
  };


  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const GetAllProductsHavingModifiers = () => {
    console.log("Fetching products...");
    setIsModalOpen(true); // Open the modal when this function is called
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
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

  const [isOpen, setIsOpen] = useState(true);


  const handleEditModifier = () => {
    // Add your logic to edit the modifier
  };

  const handleDeleteModifier = () => {
    // Add your logic to confirm and delete the modifier
  };



  const [isModifierFormModalOpen, setIsModifierFormModalOpen] = useState(false);

  // Function to open the modal
  const handleOpenModal = () => {
    setIsModifierFormModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModifierFormModalOpen(false);
  };
  return (
    // <div id="ModifierSetup_tab" className="tab-pane fade">
    <div
      className="product_main-wrap"
      style={{ paddingTop: "12px", minHeight: "400px" }}
    >
      <div>
        {/* Import Modifiers Button */}
        <div className="row">
          <div className="col-sm-12">
            <button
              id="btn_ImportModifiersShow_AddUpdateProduct"
              className="float-end btn btn-primary btn-sm"
              onClick={GetAllProductsHavingModifiers} // Opens the modal
            >
              Import Modifiers from another Product
            </button>
          </div>
          {/* Pass state and function as props to the modal */}
          <ImportModifiersModal
            isModalOpen={isModalOpen}
            closeModal={closeModal}
          />
        </div>
      </div>

      <div
        className="wrap-product_main"
        style={{ marginTop: "12px", paddingTop: "10px", paddingBottom: "0px" }}
      >
        <ul id="ModifierOptionsData_ModifierSetup" className="timeline">
          <li className="timeline-inverted">
            <div className="timeline-badge">1</div>
            <div className="timeline-panel">
              <div>
                <div className="timeline-heading">
                  <div className="faq" data-component="Faq">
                    <div className="faq__grid__faqs">
                      <details className="faq__grid__faqs__faq">
                        <summary className="faq__grid__faqs__faq__button">
                          <div className="faq__grid__faqs__faq__button__content">
                            <div className="heading_text-wraps">
                              <div
                                className="title_faq_wrap"
                                style={{ minWidth: "330px", maxWidth: "330px" }}
                              >
                                <div className="head_title">Extra</div>
                              </div>
                              <div className="other_wrap-all first_other_wraps">
                                <label style={{ marginLeft: "16px" }}>
                                  Min
                                </label>
                                <input
                                  type="text"
                                  className="form-control min_max-value"
                                  value="1"
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
                                <a
                                  href="javascript:;"
                                  onClick={() => EditModifier(1048)}
                                >
                                  <i
                                    className="fa fa-edit"
                                    title="Edit Modifier"
                                  ></i>
                                </a>
                                <a
                                  href="javascript:;"
                                  onClick={() => ConfirmDeleteModifier(1048)}
                                >
                                  <i
                                    className="fa fa-trash"
                                    title="Delete Modifier"
                                  ></i>
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
                              <label style={{ marginTop: "4px" }}>
                                Is Default
                              </label>
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
                              <label style={{ marginTop: "4px" }}>
                                Is Default
                              </label>
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
                              <label style={{ marginTop: "4px" }}>
                                Is Default
                              </label>
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
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  ></i>
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

                        {/* <div className="faq__grid__faqs__faq__body">
                          <div className="wraps_content-etc">
                            {modifierOptions.map((option) => (
                              <div
                                className="type_wrapper-item"
                                key={option.id}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginBottom: "16px",
                                }}
                              >
                                <div className="modifierOptionContent">
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
                                      value={option.name}
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
                                      className="form-control min_max-value"
                                      value={option.maxAllow}
                                      readOnly
                                    />
                                    <div className="clear"></div>
                                    <label>Price</label>
                                    <input
                                      type="text"
                                      className="form-control min_max-value"
                                      value={option.price}
                                      readOnly
                                    />
                                    <div className="clear"></div>
                                    <label style={{ marginTop: "4px" }}>
                                      Is Default
                                    </label>
                                    <input
                                      id={`chkModifierOption_Default_${option.id}`}
                                      type="checkbox"
                                      style={{
                                        marginTop: "4px",
                                        cursor: "pointer",
                                        width: "25px",
                                      }}
                                      checked={option.isDefault}
                                      onChange={() =>
                                        ConfirmSetDefaultModifierOption(
                                          option.id
                                        )
                                      }
                                    />
                                    <div className="clear"></div>
                                  </div>
                                </div>
                              </div>
                            ))}
                            <div className="type_wrapper-item">
                              <p onClick={ShowModifierOptionPopup}>
                                <a href="#">
                                  <span className="add_item-css">
                                    <i
                                      className="fa fa-plus"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </a>
                              </p>
                            </div>
                          </div>
                        </div> */}
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <TimelineItem />
          <TimelineItem />

      
            <li className="timeline-inverted">
              <div className="timeline-badge">12</div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <div className="faq">
                    <div className="faq__grid__faqs">
                      <summary
                        className="faq__grid__faqs__faq__button"
                        data-category="faq"
                        data-label="¿Cuánto tiempo dura la sesión?"
                        onClick={handleOpenModal}
                      >
                        <div className="faq__grid__faqs__faq__button__content">
                          <div className="heading_text-wraps">
                            <div className="title_faq_wrap">
                              <div className="head_title">Add Modifier</div>
                            </div>
                          </div>
                        </div>
                      </summary>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Trigger the modal when state is set to true */}
            {isModifierFormModalOpen && (
              <AddModifierModal onClose={handleCloseModal} />
            )}
        
        </ul>
      </div>
    </div>
    // </div>
  );
};

export default ModifierSetup;
