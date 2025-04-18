import React from 'react'

type Props = {}

const TaxModal = (props: Props) => {

    const CloseCreateTax = () => {
        const button = document.getElementById('btnCancel_CreateTax_Modal_ManageSetting');
        if (button) {
            button.click();
        }
    }

    return (
        <>
            <button type="button" id="btn_CreateTax_Modal_ManageSoftwareSetting" data-toggle="modal" data-target="#ShowAddUpdateTaxModal_ManageSoftwareSetting" style={{ display: "none" }}>
            </button>
            {/* <!-- Modal add/update Tax --> */}
            <div className="modal fade add-pay-modal" id="ShowAddUpdateTaxModal_ManageSoftwareSetting" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="heading_Title_TaxModal">Create Tax</h5>
                        </div>
                        <div className="modal-body" style={{ height: "273px" }}>

                            <form>

                                <div className="form-group">
                                    <label htmlFor="textTaxName_ManageSoftwareSetting">Name</label>
                                    <input type="text" className="form-control" id="textTaxName_ManageSoftwareSetting" placeholder="Enter tax name" />
                                    <div className="errorsClass2" id="errorMsg_TaxName_ManageSoftwareSetting"></div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="textTaxRateValue_ManageSoftwareSetting">Tax Rate (%)</label>
                                    <input type="text" className="form-control IsDecimal" id="textTaxRateValue_ManageSoftwareSetting" placeholder="0" />
                                    <div className="errorsClass2" id="errorMsg_TaxRateValue_ManageSoftwareSetting"></div>
                                </div>
                                <div className="form-group" style={{ display: "flex", flexDirection: "column" }}>
                                    <label htmlFor="ddlTaxType_ManageSoftwareSetting">Type</label>
                                    <select id="ddlTaxType_ManageSoftwareSetting">
                                        <option value="0">Select option</option>
                                        <option value="1">Included in the price</option>
                                        <option value="2">Without included in the price</option>
                                    </select>
                                    <div className="errorsClass2" id="error_ddlTaxType_ManageSoftwareSetting"></div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">

                            <button id="btnCancel_CreateTax_Modal_ManageSetting" type="button" className="cstm_model_plusbtn_1 btn btn-danger" data-dismiss="modal" style={{ display: "none" }}></button>
                            <button type="button" className="btn add-pay" onClick={CloseCreateTax}>Cancel</button>
                            <button id="btnSubmit_Tax_ManageSetting" type="button" className="btn add-pay" onclick="AddUpdateTax(1);">Add</button>
                            <button id="btnUpdate_Tax_ManageSetting" type="button" className="btn add-pay" onclick="AddUpdateTax(2);" style={{ display: "none" }}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaxModal