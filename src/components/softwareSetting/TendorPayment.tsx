import React from 'react'
import PaymentModal from './PaymentModal'

const TendorPayment = () => {

    const OpenPaymentTenderTypeModal = () => {
        const button = document.getElementById('btn_PaymentTenderType_Modal_ManageSoftwareSetting');
        if (button) {
            button.click();
        }
    }

    return (
        <>
        <div className="" id="v-pills-tendor" role="tabpanel" aria-labelledby="v-pills-tendor-tab">
            <div className="tab-set">

                    <button type="button" className="btn add-pay" onClick={OpenPaymentTenderTypeModal}>
                    + Add Payment Type
                </button>

                <button type="button" className="btn dalete-pay" onClick="OpenDeletePaymentTenderType();">
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </button>

                <div className="set-check-box tenderPaymentTypeSection ui-sortable"><div className="form-check d-flex align-items-center TenderTypeSectionCommonClass ui-sortable-handle" data-rid="1">

                    <label className="form-check-label flex-grow-1">Cash</label>
                    <div className="toggle-btn me-4">
                        <label className="switch">
                            <input type="checkbox" className="activeTenderTypeCommonClass" id="toggleBtn_ActiveTenderType_ManageSoftwareSetting_1" onChange="updateTenderTypeStatus(1);" checked /><span className="slider round"></span>
                            <i className="input-helper"></i>
                        </label>
                    </div>
                    <i className="fa fa-edit btn_tenderPaymentData" data-id="1" title="Edit Tender Type" aria-hidden="true" id="btn_tenderPaymentData1" style={{ fontSize: "24px", cursor: "pointer" }}></i>
                </div><div className="form-check d-flex align-items-center TenderTypeSectionCommonClass ui-sortable-handle" data-rid="2">


                        <label className="form-check-label flex-grow-1">EFTPOS</label>
                        <div className="toggle-btn me-4">
                            <label className="switch">
                                <input type="checkbox" className="activeTenderTypeCommonClass" id="toggleBtn_ActiveTenderType_ManageSoftwareSetting_2" onChange="updateTenderTypeStatus(2);" checked /><span className="slider round"></span>
                                <i className="input-helper"></i>
                            </label>
                        </div>
                        <i className="fa fa-edit btn_tenderPaymentData" data-id="3" title="Edit Tender Type" aria-hidden="true" id="btn_tenderPaymentData3" style={{ fontSize: "24px", cursor: "pointer" }}></i>
                    </div></div>
            </div>
            </div>
            <PaymentModal />
        </>
    )
}

export default TendorPayment