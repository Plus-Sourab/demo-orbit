import React from 'react'
import AddPromocodeModal from './AddPromocodeModal'

type Props = {}

const PromocodeTableModal: React.FC = (props: Props) => {
    return (
        <>
            <div
                className="modal fade advance-btn-modal"
                id="promoCodeTableModal"
                data-backdrop="static"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable" role="document">
                    <div className="modal-content w-100">
                        <div className="modal-header">
                            <h5 className="modal-title" id="promoCodeTableModalLongTitle">PromoCode</h5>
                            <button type="button" className="btn btn_AddPromoCode mb-0" data-toggle="modal" data-target="#addPromoCodeModal"
                            // onClick={() => OpenPromoCodeModal(0)}
                            >
                                <span>+</span> Add PromoCode
                            </button>
                        </div>
                        <div className="modal-body pt-0">
                            <table className="table promotionTable mb-0 table-responsive-md table-responsive-sm" id="promoCodeTable">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">PromoCode Name</th>
                                        <th scope="col">PromoCode</th>
                                        <th scope="col">Discount</th>
                                        <th scope="col">From</th>
                                        <th scope="col">To</th>
                                        <th scope="col">Limit</th>
                                        <th scope="col">Balance</th>
                                        <th>Status</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="expired">
                                        <td>Promocode 1</td>
                                        <td>ABC232</td>
                                        <td>5%</td>
                                        <td>18-Jun-2024</td>
                                        <td>16-Jul-2024</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>
                                            <div className="toggle-btn me-4">
                                                <label className="switch">
                                                    <input
                                                        type="checkbox"
                                                        className="promoCodeStatusCommonClass"
                                                        id="toggleBtn_PromoCodeStatus_ManageSoftwareSetting_1"
                                                        disabled
                                                    />
                                                    <span className="slider round"></span>
                                                    <i className="input-helper"></i>
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <button
                                            // onClick={OpenPromoCodeModal)}
                                            >
                                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                            </button>
                                            <button
                                            // onClick={ConfirmDeletePromoCode}
                                            >
                                                <i className="fa fa-trash" aria-hidden="true"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer border-top">
                            <button type="button" className="btn pro-cancel" id="btn_promoCodeTableModal_Close" data-dismiss="modal">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <AddPromocodeModal />
        </>
    )
}

export default PromocodeTableModal