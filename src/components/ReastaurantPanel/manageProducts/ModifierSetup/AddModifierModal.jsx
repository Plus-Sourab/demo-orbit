import React, { useState } from "react";

const AddModifierModal = ({ onClose }) => {
  const [modifierName, setModifierName] = useState("");
  const [minSelection, setMinSelection] = useState("0");
  const [maxSelection, setMaxSelection] = useState("1");
  const [isMandatory, setIsMandatory] = useState(false);

  // Handling checkbox state
  const handleMandatoryChange = () => {
    setIsMandatory(!isMandatory);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Logic for adding/updating modifier
    console.log("Modifier Added", {
      modifierName,
      minSelection,
      maxSelection,
      isMandatory,
    });
    onClose();
  };

  return (
    <div
      className="modal show"
      style={{ display: "block" }}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="modal-dialog cstm_modal_dialog"
        style={{ marginTop: "100px" }}
      >
        <div className="modal-content plus_modal_cont">
          {/* Modal Header */}
          <div
            className="modal-header plus_modal_head"
            style={{ textAlign: "center" }}
          >
            <h4
              id="heading_Title_AddUpdateModifier_AddProduct_Modal"
              className="modal-title plus_head_popup"
            >
              Add Modifier
            </h4>
          </div>

          {/* Modal Body */}
          <div className="modal-body new_modal_work">
            <div
              className="form-group plus_from_group"
              style={{ marginTop: "0px" }}
            >
              <label className="lblModifiersSettingClass">Name</label>
              <input
                type="text"
                className="form-control plus_imput_feild"
                value={modifierName}
                onChange={(e) => setModifierName(e.target.value)}
                placeholder="Enter Modifier Name"
              />
            </div>

            <div
              className="form-group plus_from_group"
              style={{ marginTop: "0px", marginBottom: "0px" }}
            >
              <label className="lblModifiersSettingClass">Mandatory</label>
              <p style={{ textAlign: "left", padding: "0px" }}>
                <label className="switch round_wraps">
                  <input
                    type="checkbox"
                    checked={isMandatory}
                    onChange={handleMandatoryChange}
                  />
                  <span className="slider round"></span>
                </label>
              </p>
            </div>

            <div
              className="form-group plus_from_group"
              style={{ display: "inline-block", width: "40%" }}
            >
              <label className="lblModifiersSettingClass">Min</label>
              <input
                type="text"
                className="form-control plus_imput_feild"
                value={minSelection}
                disabled
                placeholder="0"
              />
            </div>

            <div
              className="form-group plus_from_group"
              style={{ display: "inline-block", width: "40%" }}
            >
              <label className="lblModifiersSettingClass">Max</label>
              <input
                type="text"
                className="form-control plus_imput_feild"
                value={maxSelection}
                onChange={(e) => setMaxSelection(e.target.value)}
                placeholder="1"
              />
            </div>

            <div
              className="form-group plus_from_group"
              style={{ marginTop: "0px", marginBottom: "0px" }}
            ></div>
          </div>

          {/* Modal Footer */}
          <div
            className="modal-bottom plus_modal_bottom"
            style={{ paddingTop: "15px" }}
          >
            <button
              type="button"
              className="cstm_model_plusbtn_1 btn btn-danger"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="cstm_model_plusbtn_2 btn btn-danger"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Modal Background Shadow */}
      <div
        className="modal-backdrop show"
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1030, // Lower z-index to be below the modal content
        }}
      ></div>
    </div>
  );
};

export default AddModifierModal;
