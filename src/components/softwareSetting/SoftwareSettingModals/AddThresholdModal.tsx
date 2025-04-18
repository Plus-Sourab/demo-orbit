import React from 'react'

type Props = {}

const AddThresholdModal = (props: Props) => {
    return (
        <div className="modal fade advance-btn-modal" id="addThresholdModal" data-backdrop="static" role="dialog" aria-hidden="true" aria-labelledby="thLargeModalLabel" tabIndex={-1}>
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content w-100">
                    <div className="modal-header pb-0">
                        <h5 className="modal-title mb-2" id="thresholdModalLongTitle">Add New Threshold</h5>
                    </div>
                    <div className="modal-body pt-3">
                        <div className="add-threshold-form">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <form id="addUpdateThreshold">
                                        <div className="input-container">
                                            <input type="hidden" id="thresholdId" value="0" />
                                            <label>Threshold Amount</label>
                                            <input type="text" id="thresholdAmount" />
                                        </div>
                                        <div className="input-container">
                                            <label>Discount Value (%)</label>
                                            <input type="text" id="thresholdDiscountValue" />
                                        </div>
                                        <div className="input-container">
                                            <label>Transactions Limit</label>
                                            <input type="text" id="thresholdTransactionLimit" />
                                            <span style={{ fontSize: '15px' }}><b>Note: </b>In case of offline; limit will not work.</span>
                                        </div>
                                        <div className="input-container">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-6 ps-0 pe-1">
                                                        <div className="input-container">
                                                            <label>From</label>
                                                            <input type="text" id="thresholdDateFrom" placeholder="mm/dd/yyyy" />
                                                        </div>
                                                    </div>
                                                    <div className="col-6 pe-0 ps-1">
                                                        <div className="input-container">
                                                            <label>To</label>
                                                            <input type="text" id="thresholdDateTo" placeholder="mm/dd/yyyy" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="mt-2">
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="thresholdTimingTypeId" id="thresholdTimingTypeContinuous" value="1" />
                                            <label className="form-check-label" htmlFor="thresholdTimingTypeContinuous">Continuous</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="thresholdTimingTypeId" id="thresholdTimingTypeSpecific" checked value="2" />
                                            <label className="form-check-label" htmlFor="thresholdTimingTypeSpecific">During Specific Times</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6">
                                    <form className="timing-form mb-1" id="threshold_TimingSection">
                                        <div className="input-container mb-3">
                                            <div className="row">
                                                <div className="col-12 col-md-6">
                                                    <div className="input-container">
                                                        <label>From</label>
                                                        <input type="time" id="thresholdTimeFrom" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <div className="input-container">
                                                        <label>To</label>
                                                        <input type="time" id="thresholdTimeTo" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="days-check">
                                            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
                                                <li key={index}>
                                                    <div>
                                                        <input type="checkbox" id={`thresholdTiming${day}`} />
                                                        <label htmlFor={`thresholdTiming${day}`}>{day.slice(0, 3)}</label>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </form>

                                    <form className="toggle-form">
                                        <div className="input-container">
                                            <label>POS</label>
                                            <div className="toggle-btn me-4">
                                                <label className="switch">
                                                    <input type="checkbox" id="thresholdPOSVisibilityStatus" checked />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="input-container">
                                            <label>KIOSK</label>
                                            <div className="toggle-btn me-4">
                                                <label className="switch">
                                                    <input type="checkbox" id="thresholdKioskVisibilityStatus" checked />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="input-container">
                                            <label>OnlineOrdering</label>
                                            <div className="toggle-btn me-4">
                                                <label className="switch">
                                                    <input type="checkbox" id="thresholdOnlineOrderingVisibilityStatus" checked />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn pro-cancel" data-dismiss="modal" id="btn_ThresholdModalClose">Cancel</button>
                        <button type="button" className="btn pro-submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddThresholdModal