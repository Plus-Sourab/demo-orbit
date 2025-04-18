import React from 'react'
import TaxModal from './TaxModal'

const Taxes = () => {

    const OpenCreateTaxPopup = () => {
        const button = document.getElementById('btn_CreateTax_Modal_ManageSoftwareSetting');
        if (button) {
            button.click();
        }
    }

    return (
        <>
        <div className="" id="v-pills-taxes" role="tabpanel" aria-labelledby="v-pills-taxes-tab">
            <div className="tab-set taxtEmpty text-center d-none" id="EmptySectionRestaurantTaxesList_ManageSoftwareSetting">

                <i className="fa fa-university" aria-hidden="true"></i>
                <h4>Taxes</h4>
                    <button type="button" className="btn add-pay" onClick={OpenCreateTaxPopup}>
                    + Add Tax
                </button>
            </div>
            <div className="tab-set" id="BindRestaurantTaxesList_ManageSoftwareSetting">


                    <button type="button" className="btn add-pay" onClick={OpenCreateTaxPopup}>
                    + Add Tax
                </button>
                <div className="table-responsive" style={{ position: "relative" }}>
                    <table className="table tbltaxesListClass" id="tbl_TaxList_Section_ManageSoftwareSetting">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Tax Rate</th>
                                <th scope="col">Active</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody> <tr>
                            <td title="GST">GST</td>
                            <td>15%</td>
                            <td>
                                <div className="toggle-btn">
                                    <label className="switch">
                                        <input type="checkbox" className="activeTaxCommonClass" id="toggleBtn_ActiveTax_ManageSoftwareSetting_4" onchange="updateTaxStatus(4);" /><span className="slider round"></span>
                                        <i className="input-helper"></i>
                                    </label>
                                </div>
                            </td>
                            <td>
                                <i className="fa fa-edit" title="Edit Tax" aria-hidden="true" onClick="EditTax(4)"></i>
                                <i className="fa fa-trash" title="Delete Tax" aria-hidden="true" onClick="ConfirmDeleteTax(4)"></i>
                            </td>

                        </tr> <tr>
                                <td title="Flight Tax">Flight Tax</td>
                                <td>10%</td>
                                <td>
                                    <div className="toggle-btn">
                                        <label className="switch">
                                            <input type="checkbox" className="activeTaxCommonClass" id="toggleBtn_ActiveTax_ManageSoftwareSetting_5" onchange="updateTaxStatus(5);" /><span className="slider round"></span>
                                            <i className="input-helper"></i>
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <i className="fa fa-edit" title="Edit Tax" aria-hidden="true" onClick="EditTax(5)"></i>
                                    <i className="fa fa-trash" title="Delete Tax" aria-hidden="true" onClick="ConfirmDeleteTax(5)"></i>
                                </td>

                            </tr> <tr>
                                <td title="Testing Tax 2">Testing Tax 2</td>
                                <td>7%</td>
                                <td>
                                    <div className="toggle-btn">
                                        <label className="switch">
                                            <input type="checkbox" className="activeTaxCommonClass" id="toggleBtn_ActiveTax_ManageSoftwareSetting_9" onchange="updateTaxStatus(9);" checked="" /><span className="slider round"></span>
                                            <i className="input-helper"></i>
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <i className="fa fa-edit" title="Edit Tax" aria-hidden="true" onClick="EditTax(9)"></i>
                                    <i className="fa fa-trash" title="Delete Tax" aria-hidden="true" onClick="ConfirmDeleteTax(9)"></i>
                                </td>

                            </tr></tbody>
                    </table>
                </div>

            </div>
            </div>
            <TaxModal />
        </>
    )
}

export default Taxes