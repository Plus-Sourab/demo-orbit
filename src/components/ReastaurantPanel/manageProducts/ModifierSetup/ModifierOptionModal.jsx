// ModifierOptionModal.jsx
import React from 'react';

const ModifierOptionModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div
      className="modal show"
      style={{ display: 'block', paddingLeft: '0px' }}
      aria-modal="true"
      role="dialog"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div className="modal-dialog cstm_modal_dialog" style={{ marginTop: '100px !important' }}>
        <div className="modal-content plus_modal_cont">
          {/* Modal Header */}
          <div className="modal-header plus_modal_head" style={{ textAlign: 'center' }}>
            <h4 className="modal-title plus_head_popup">Modifier Option</h4>
          </div>

          {/* Modal Body */}
          <div className="modal-body new_modal_work">
            {/* Option Name */}
            <div className="form-group plus_from_group" style={{ marginTop: '0px' }}>
              <label className="lblModifiersSettingClass">Option Name</label>
              <input
                type="text"
                className="form-control plus_imput_feild"
                placeholder="Enter Option Name"
              />
            </div>

            {/* Add-On Price */}
            <div
              className="form-group plus_from_group"
              style={{ display: 'inline-block', width: '40%', marginRight: '0px' }}
            >
              <label className="lblModifiersSettingClass">Add-On Price</label>
              <input
                type="text"
                className="form-control plus_imput_feild IsDecimal"
                placeholder="Price"
              />
            </div>

            {/* Max Allowed */}
            <div
              className="form-group plus_from_group"
              style={{ display: 'inline-block', width: '40%' }}
            >
              <label className="lblModifiersSettingClass">Max Allowed</label>
              <input
                type="text"
                className="form-control plus_imput_feild"
                placeholder="Max Allowed"
              />
            </div>

            {/* Option Image */}
            <div className="form-group plus_from_group">
              <label className="lblModifiersSettingClass">Option-Image (Optional)</label>
              <input
                type="file"
                className="form-control plus_imput_feild"
                accept="image/*"
                style={{ height: '45px' }}
              />
              <label>Note: Only .jpg, .jpeg, and .png formats are allowed.</label><br />
              <div style={{ textAlign: 'center' }}>
                <a
                  href="javascript:;"
                  className="removeImageModifierOptionStyle"
                  style={{ display: 'none' }}
                >
                  Remove
                </a>
                <br />
                <img
                  src=""
                  id="imgModifierOptionImage"
                  style={{ width: '100px', height: 'auto', display: 'none', marginBottom: '20px' }}
                />
              </div>
            </div>

            {/* Error Messages */}
            <div className="form-group plus_from_group">
              <div id="modifierOptionName_error" className="errorsClass2 errClass_ModifierOption"></div>
              <div id="modifierOptionPrice_error" className="errorsClass2 errClass_ModifierOption"></div>
              <div id="modifierOptionMaxAllowed_error" className="errorsClass2 errClass_ModifierOption"></div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="modal-bottom plus_modal_bottom" style={{ paddingTop: '15px' }}>
            <button
              type="button"
              className="cstm_model_plusbtn_1 btn btn-danger"
              onClick={onClose}
              style={{ display: 'inline-block' }}
            >
              Cancel
            </button>
            <button
              type="button"
              className="cstm_model_plusbtn_2 btn btn-danger"
              onClick={onSubmit}
              style={{ display: 'inline-block' }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifierOptionModal;
