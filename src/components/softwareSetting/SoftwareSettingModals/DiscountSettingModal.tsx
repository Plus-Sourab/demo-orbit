import React from 'react'

type Props = {}

const DiscountSettingModal: React.FC = (props: Props) => {
    return (
        <div
            className="modal fade advance-btn-modal discount-setting"
            id="discountSettingModal"
            data-backdrop="static"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="discountSettingModalTitle"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="discountSettingModalTitle">
                            Discount Setting
                        </h5>
                    </div>
                    <div className="modal-body">
                        <form className="discount_setting_form">
                            <div className="form-group">
                                <input type="hidden" id="discountTypeDatId" value="0" />
                                <label htmlFor="alternateName">Alternate Discount Name</label>
                                <input type="text" className="form-control" id="alternateName" placeholder="" />
                            </div>
                            <div className="form-dis">
                                <label htmlFor="exampleInputEmail1" className="d-block">
                                    Discount In
                                </label>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input discountValueTypeId"
                                        type="radio"
                                        name="discountValueTypeId"
                                        id="percentCheck"
                                        value="1"
                                        defaultChecked
                                    />
                                    <label className="form-check-label" htmlFor="percentCheck">
                                        Percent Discount<i className="input-helper"></i>
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input discountValueTypeId"
                                        type="radio"
                                        name="discountValueTypeId"
                                        id="dollarCheck"
                                        value="2"
                                    />
                                    <label className="form-check-label" htmlFor="dollarCheck">
                                        Dollar Discount<i className="input-helper"></i>
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="discountValue">
                                    Automatic-Discount (<span id="discountValueLabelText">%</span>)
                                </label>
                                <input type="text" className="form-control" id="discountValue" value="0" placeholder="" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="maxDiscountValue">Maximum-Discount ($)</label>
                                <input type="text" className="form-control" id="maxDiscountValue" value="0" placeholder="" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn pro-submit"
                        // onClick={() => AddUpdateDiscountSettingData()}
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            className="btn pro-cancel"
                            id="discount-form-cancel-btn"
                            data-dismiss="modal"
                        // onClick={() => resetDiscountSettingForm()}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscountSettingModal