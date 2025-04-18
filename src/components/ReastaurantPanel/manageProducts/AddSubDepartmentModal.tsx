import React, { useState, ChangeEvent } from 'react';
// import '../../../assets/CSS/manageProducts/ModalStyles.css';

interface AddSubDepartmentModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const AddSubDepartmentModal: React.FC<AddSubDepartmentModalProps> = ({ isVisible, onClose }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [departmentName, setDepartmentName] = useState("");
  const [mainDepartment, setMainDepartment] = useState("0");
  const [printGroup, setPrintGroup] = useState("0");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (type) => {
    if (type === 1) {
      // Add logic here
      console.log("Adding Sub Department");
    } else if (type === 2) {
      // Update logic here
      console.log("Updating Sub Department");
    }
    onClose();
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="modal-overlay" data-backdrop="static" data-keyboard="false" style={{ zIndex: 9 }} onClick={onClose}></div>
      
      <div className="modal show" id="CreateSubDepartment_Modal" role="dialog" style={{ display: 'block', paddingRight: '17px' }}>
        <div className="modal-dialog cstm_modal_dialog">
          <div className="modal-content plus_modal_cont">
            <div className="modal-header plus_modal_head ml-4">
              <h4 id="heading_Title_SubDepartmentModal" className="modal-title plus_head_popup">Add Department</h4>
            </div>
            <div className="modal-body new_modal_work">
  <div className="form-group pop-up_drop">
    <div className="select_box">
      <select
        className="form-control"
        id="ddlMainDepartment_ManageSubDepartment"
        value={mainDepartment}
        onChange={(e) => setMainDepartment(e.target.value)}
      >
        <option value="0">Select Main-Department</option>
        <option value="102">DESSERTssss</option>
        <option value="103">BEVERAGES</option>
        <option value="104">Food</option>
        <option value="105">Indian Food</option>
        <option value="106">Take away</option>
        {/* Add more options as needed */}
      </select>
    </div>
    <div id="mainDepartment_error_ManageSubDepartment" className="errorsClass2"></div>
  </div>

  <div className="form-group plus_from_group">
    <input
      type="text"
      className="form-control plus_imput_feild"
      id="txtSubDepartmentName_ManageSubDepartment"
      placeholder="Enter Department Name"
      value={departmentName}
      onChange={(e) => setDepartmentName(e.target.value)}
    />
    <div id="subDepartmentName_error_ManageSubDepartment" className="errorsClass2"></div>
  </div>

  <div className="form-group pop-up_drop">
    <div className="select_box">
      <select
        className="form-control"
        id="ddlPrintGroup_ManageSubDepartment"
        value={printGroup}
        onChange={(e) => setPrintGroup(e.target.value)}
      >
        <option value="0">Select Print-Group</option>
        {/* Add options here */}
      </select>
    </div>
    <div id="printGroup_error_ManageSubDepartment" className="errorsClass2"></div>
  </div>

  <div className="form-group plus_from_group" style={{ marginBottom: '0px' }}>
    <input
      type="file"
      className="form-control plus_imput_feild"
      id="fileSubDepartmentImage_ManageSubDepartment"
      accept="image/*"
      onChange={handleImageChange}
    />
    <label>Note: Only .jpg, .jpeg, and .png formats are allowed.</label>
    <div style={{ textAlign: 'center' }}>
      {imagePreview && <img src={imagePreview} alt="Preview" style={{ width: '100px', height: 'auto', marginBottom: '20px' }} />}
    </div>
    <div id="SubDepartmentImage_error_ManageSubDepartment" className="errorsClass2" style={{ paddingBottom: '10px' }}></div>
  </div>

  <div className="modal-bottom plus_modal_bottom">
    <button type="button" className="cstm_model_plusbtn_1 btn btn-danger" onClick={onClose}>
      Cancel
    </button>
    <button
      id="btnSubmit_SubDepartment"
      type="button"
      className="cstm_model_plusbtn_2 btn btn-danger"
      onClick={() => handleSubmit(1)}
    >
      Add
    </button>
    <button
      id="btnUpdate_SubDepartment"
      type="button"
      className="cstm_model_plusbtn_2 btn btn-danger"
      onClick={() => handleSubmit(2)}
      style={{ display: 'none' }}
    >
      Update
    </button>
  </div>
</div>


          </div>
        </div>
      </div>
    </>
  );
};

export default AddSubDepartmentModal;
