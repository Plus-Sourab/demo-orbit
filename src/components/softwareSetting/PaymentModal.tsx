import React from 'react'


const PaymentModal = () => {
    return (
        <>
            <button type="button" id="btn_PaymentTenderType_Modal_ManageSoftwareSetting" data-toggle="modal" data-target="#paymentTenderTypeModal" style={{ display: "none" }}>
            </button>
            {/* <!-- Payemnt Tender Type Modal --> */}
            <div className="modal fade add-pay-modal advance-btn-modal" id="paymentTenderTypeModal" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="paymentTenderTypeModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="paymentTenderTypeModalLongTitle">Add Payment Type</h5>
                        </div>
                        <div className="modal-body">

                            <form id="addUpdatePaymentTenderType">

                                <input type="hidden" id="paymentTenderTypeId" value="0" />
                                <div className="form-group">
                                    <label htmlFor="tenderTypeName">Name</label>
                                    <input type="text" className="form-control" id="tenderTypeName" aria-describedby="emailHelp" placeholder="Card" />
                                    <div className="errorsClass2" id="errorMsg_TenderTypeName_ManageSoftwareSetting"></div>
                                </div>

                                <div className="form-dis mb-3">
                                    <label htmlFor="tenderTypeSurcharges">Surcharges (<span id="tenderTypeSurchargesLabelText">%</span>)</label>
                                    <div className="form-check form-check-inline float-end">
                                        <input className="form-check-input tenderTypeSurchargeValueTypeId" type="radio" name="tenderTypeSurchargeValueTypeId" id="tenderTypeSurchargedollarCheck" value="1" />
                                        <label className="form-check-label" htmlFor="tenderTypeSurchargedollarCheck"><b>$</b><i className="input-helper"></i><i className="input-helper"></i></label>
                                    </div>
                                    <div className="form-check form-check-inline float-end">
                                        <input className="form-check-input tenderTypeSurchargeValueTypeId" type="radio" name="tenderTypeSurchargeValueTypeId" id="tenderTypeSurchargepercentCheck" value="0" checked="" />
                                        <label className="form-check-label" htmlFor="tenderTypeSurchargepercentCheck"><b>%</b><i className="input-helper"></i><i className="input-helper"></i></label>
                                    </div>

                                    <input type="text" className="form-control" id="tenderTypeSurcharges" aria-describedby="emailHelp" placeholder="0.00" />
                                    <div className="errorsClass2" id="errorMsg_TenderTypeSurcharges_ManageSoftwareSetting"></div>
                                </div>

                                <label htmlFor="tenderTypeExtraOptions">Extra Options</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="tenderTypeRounding" value="1" />
                                    <label className="form-check-label" htmlFor="tenderTypeRounding">Rounding<i className="input-helper"></i></label>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="tenderTypeShowInBankingReport" value="1" />
                                    <label className="form-check-label" htmlFor="tenderTypeShowInBankingReport">Show In Banking Report<i className="input-helper"></i></label>
                                </div>


                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="tenderTypeOpenCashDrawer" value="1" />
                                    <label className="form-check-label" htmlFor="tenderTypeOpenCashDrawer">Open Cash Drawer<i className="input-helper"></i></label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="tenderTypeEFTPOS" value="1" />
                                    <label className="form-check-label" htmlFor="tenderTypeEFTPOS">EFTPOS<i className="input-helper"></i></label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="tenderTypeForceReference" value="1" />
                                    <label className="form-check-label" htmlFor="tenderTypeForceReference">Force Reference<i className="input-helper"></i></label>
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn pro-cancel" data-dismiss="modal" id="btn_TenderTypeModalClose" onclick="resetPaymentTenderTypeForm();">Cancel </button>
                            <button type="button" className="btn pro-submit" onclick="AddUpdateTenderTypeData();">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentModal