import React, { useState, ChangeEvent, FormEvent } from 'react';

interface CreatePrintGroupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (printGroupName: string) => void;
}

const CreatePrintGroupModal: React.FC<CreatePrintGroupModalProps> = ({ isOpen, onClose, onSubmit }) => {
 
  const [printGroupName, setPrintGroupName] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setPrintGroupName(e.target.value);
  };

  const handleSubmit = () => {
    if (printGroupName.trim() === '') {
      setError('Print Group Name is required');
    } else {
      setError('');
      onSubmit(printGroupName);
    }
  };

  if (!isOpen) return null;




  return (
    <div
    className="modal fixed inset-0 z-1000 bg-black bg-opacity-50 flex items-center justify-center"
    style={{ display: 'block' }} // Ensure modal is visible when isOpen is true
    aria-modal="true"
    role="dialog"
  >
    {/* <div className="modal show" style={{ display: 'block',}} aria-modal="true" role="dialog"> */}
      <div className="modal-dialog cstm_modal_dialog">
        <div className="modal-content plus_modal_cont">
          {/* Modal Header */}
          <div className="modal-header plus_modal_head flex items-center" style={{ display: 'block', paddingBottom: 0 }}>
            <h4 className="modal-title plus_head_popup">Add Print Group</h4>
          </div>

          {/* Modal Body */}
          <div className="modal-body new_modal_work">
            <div className="form-group plus_from_group">
              <input
                type="text"
                className="form-control plus_imput_feild"
                placeholder="Enter Print Group"
                value={printGroupName}
                onChange={handleInputChange}
              />
              {error && <div className="errorsClass2">{error}</div>}
            </div>

            {/* Modal Actions */}
            <div className="modal-bottom plus_modal_bottom">
              <button type="button" className="cstm_model_plusbtn_1 btn btn-danger" onClick={onClose}>
                Cancel
              </button>
              <button type="button" className="cstm_model_plusbtn_2 btn btn-danger" onClick={handleSubmit}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePrintGroupModal;