import React from 'react'
import AddThresholdModal from './AddThresholdModal'

type Props = {}

const Threshold: React.FC = (props: Props) => {
    return (
        <>
            <div className="modal fade advance-btn-modal" id="thresholdTableModal" data-backdrop="static" aria-hidden="true" aria-labelledby="thLargeModalLabel" tabIndex={-1}>
                <div className="modal-dialog modal-xl modal-dialog-scrollable modal-dialog-centered" role="document">
                    <div className="modal-content w-100">
                        <div className="modal-header">
                            <h5 className="modal-title" id="thresholdTableModalLongTitle">Threshold</h5>
                            <button type="button" className="btn btn_AddThreshold mb-0" data-toggle="modal" data-target="#addThresholdModal" data-bs-dismiss="modal"><span>+</span> Add Threshold</button>
                        </div>
                        <div className="modal-body pt-0">
                            <table className="table promotionTable mb-0" id="thresholdTable">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Threshold Amount</th>
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
                                        <td>$40</td>
                                        <td>5%</td>
                                        <td>19-Jun-2024</td>
                                        <td>30-Jul-2024</td>
                                        <td>100</td>
                                        <td>71</td>
                                        <td>
                                            <div className="toggle-btn me-4">
                                                <label className="switch">
                                                    <input type="checkbox" disabled />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <button onClick={() => console.log('Edit threshold 1')}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                            <button onClick={() => console.log('Delete threshold 1')}><i className="fa fa-trash" aria-hidden="true"></i></button>
                                        </td>
                                    </tr>
                                    {/* Additional rows can go here */}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer border-top">
                            <button type="button" className="btn pro-cancel" data-dismiss="modal" onClick={() => console.log('Close modal')}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <AddThresholdModal />
        </>
    )
}

export default Threshold