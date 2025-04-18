import React from 'react'

type Props = {}

const AddPromocodeModal: React.FC = (props: Props) => {
    return (
        <div
            className="modal fade advance-btn-modal"
            id="addPromoCodeModal"
            data-backdrop="static"
            role="dialog"
            aria-hidden="true"
            aria-labelledby="myLargeModalLabel"
            tabIndex={-1}
        >
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content w-100">
                    <div className="modal-header pb-0">
                        <h5 className="modal-title mb-2" id="promoCodeModalLongTitle">
                            Add New PromoCode
                        </h5>
                    </div>
                    <div className="modal-body pt-1">
                        <div className="add-promo-code-form">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <form id="addUpdatePromoCode">
                                        <div className="input-container">
                                            <input type="hidden" id="promoCodeId" value="0" />
                                            <label>Promocode Name</label>
                                            <input type="text" id="promoCodeName" />
                                            <div className="errorsClass2" id="errorMsg_PromoCodeName_ManageSoftwareSetting"></div>
                                        </div>
                                        <div className="input-container">
                                            <label>Promocode</label>
                                            <input type="text" id="promoCode" />
                                            <div className="errorsClass2" id="errorMsg_PromoCode_ManageSoftwareSetting"></div>
                                        </div>
                                        <div className="input-container">
                                            <label>Discount Value (%)</label>
                                            <input type="text" id="promoCodeDiscountValue" />
                                            <div className="errorsClass2" id="errorMsg_PromoCodeDiscountValue_ManageSoftwareSetting"></div>
                                        </div>
                                        <div className="input-container">
                                            <label>Transaction Limit</label>
                                            <input type="text" id="promoCodeTransactionLimit" />
                                            <span style={{ fontSize: '15px' }}>
                                                <b>Note: </b>In case of offline; limit will not work.
                                            </span>
                                            <div className="errorsClass2" id="errorMsg_PromoCodeTransactionLimit_ManageSoftwareSetting"></div>
                                        </div>
                                        <div className="input-container">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-6 ps-0 pe-1">
                                                        <div className="input-container">
                                                            <label>From</label>
                                                            <input
                                                                type="text"
                                                                id="promoCodeDateFrom"
                                                                placeholder="mm/dd/yyyy"
                                                                className="promotionDate datetimepicker-input"
                                                                data-toggle="datetimepicker"
                                                                data-target="#promoCodeDateFrom"
                                                            />
                                                            <div className="errorsClass2" id="errorMsg_PromoCodeDateFrom_ManageSoftwareSetting"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 pe-0 ps-1">
                                                        <div className="input-container">
                                                            <label>To</label>
                                                            <input
                                                                type="text"
                                                                id="promoCodeDateTo"
                                                                placeholder="mm/dd/yyyy"
                                                                className="promotionDate datetimepicker-input"
                                                                data-toggle="datetimepicker"
                                                                data-target="#promoCodeDateTo"
                                                            />
                                                            <div className="errorsClass2" id="errorMsg_PromoCodeDateTo_ManageSoftwareSetting"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-12 col-md-6">
                                    <form className="timing-form mb-1" id="promoCode_TimingSection">
                                        <div className="input-container mb-3">
                                            <div className="row">
                                                <div className="col-12 col-md-6">
                                                    <label>From</label>
                                                    <input type="time" id="promoCodeTimeFrom" />
                                                    <div className="errorsClass2" id="errorMsg_PromoCodeTimeFrom_ManageSoftwareSetting"></div>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <label>To</label>
                                                    <input type="time" id="promoCodeTimeTo" />
                                                    <div className="errorsClass2" id="errorMsg_PromoCodeTimeTo_ManageSoftwareSetting"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="days-check">
                                            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
                                                <li key={day}>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            id={`promoCodeTiming${day}`}
                                                            className="promoCodeTimings"
                                                            data-id="0"
                                                            data-promocodeid="0"
                                                            data-dayvalue={index + 1}
                                                            data-dayname={day}
                                                            data-status="0"
                                                        />
                                                        <label htmlFor={`promoCodeTiming${day}`}>{day.slice(0, 3)}</label>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="errorsClass2" id="errorMsg_PromoCodeTimingStatus_ManageSoftwareSetting"></div>
                                    </form>
                                    <form className="toggle-form">
                                        {['POS', 'KIOSK', 'Online Ordering'].map((label) => (
                                            <div className="input-container" key={label}>
                                                <label className="mb-0">{label}</label>
                                                <div className="toggle-btn me-4">
                                                    <label className="switch mb-0">
                                                        <input type="checkbox" className="promoCodeVisibilityStatus" id={`promoCode${label.replace(' ', '')}VisibilityStatus`} defaultChecked />
                                                        <span className="slider round"></span>
                                                        <i className="input-helper"></i>
                                                    </label>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="errorsClass2" id="errorMsg_PromoCodeVisibilityStatus_ManageSoftwareSetting"></div>
                                    </form>
                                </div>
                                <div className="col-12 mt-2">
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input promoCodeTimingTypeId"
                                            type="radio"
                                            name="promoCodeTimingTypeId"
                                            id="promoCodeTimingTypeContinuous"
                                            value="1"
                                        />
                                        <label className="form-check-label" htmlFor="promoCodeTimingTypeContinuous">
                                            Continuous
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input promoCodeTimingTypeId"
                                            type="radio"
                                            name="promoCodeTimingTypeId"
                                            id="promoCodeTimingTypeSpecific"
                                            value="2"
                                            defaultChecked
                                        />
                                        <label className="form-check-label" htmlFor="promoCodeTimingTypeSpecific">
                                            During Specific Times
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn pro-cancel" data-dismiss="modal" id="btn_PromoCodeModalClose" >
                            Cancel
                        </button>
                        <button type="button" className="btn pro-submit" >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPromocodeModal