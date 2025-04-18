import React from 'react'
import EmailModal from './EmailModal'

type Props = {}

const ViewRecords = (props: Props) => {

    const handleEmailModalOpen = () => {
        const button = document.getElementById("btn_SendPDFReportEmail_RestaurantReports_Modal") as HTMLButtonElement;
        if (button) {
            button.click();
            // document.body.classList.add("modal-open");
        }
    };

    return (
        <>
            <div id="viewrecord" className="container-fluid tab-pane px-0 active">
                <ul className="tabs clearfix d-none">
                    <li>
                        <a
                            id="tab_ViewRecords_ManageRestaurantReports"
                            href="#viewrecord"
                            className="ViewRecordReportDataClassCommon active"
                        //   onclick="SearchViewRecords_ManageReoprts();"
                        ></a>
                    </li>
                </ul>
                <div className="container-fluid col-box px-0">
                    <div className="row align-items-center bg-light select-icon marg-box">
                        <div className="col-6 col-md-4 col-lg-2">
                            <div className="form-group">
                                <label htmlFor="ddlTimePeriodSearchTypeValue"></label>
                                <select
                                    className="form-control commonClass_ManageReports"
                                    id="ddlTimePeriodSearchTypeValue"
                                >
                                    <option value="1">Today</option>
                                    <option value="2">Yesterday</option>
                                    <option value="3">Weekly</option>
                                    <option value="4">Monthly</option>
                                    <option value="5">Yearly</option>
                                    <option value="6">Custom Dates</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-6 col-md-4 col-lg-3">
                            <div className="form-group text_wrap-datepicker mb-0">
                                <label
                                    className="mb-0"
                                    style={{ width: "auto", marginRight: "8px" }}
                                >
                                    From
                                </label>
                                <input
                                    type="text"
                                    className="form-control datetimepickerClass datetimepicker-input bg-light mt-0"
                                    id="FromDate_CustomDatesSelectionViewRecord_ManageReports"
                                    style={{ cursor: "pointer", width: "100%" }}
                                    readOnly
                                />
                            </div>
                            <div
                                id="fromDate_error_CustomDatesSelectionViewRecord_ManageReports"
                                className="errorsClass2"
                            ></div>
                        </div>

                        <div className="col-12 col-md-4 col-lg-3 date-pick-col">
                            <div className="form-group text_wrap-datepicker mb-0">
                                <label
                                    className="mb-0"
                                    style={{ width: "auto", marginRight: "8px" }}
                                >
                                    To
                                </label>
                                <input
                                    type="text"
                                    className="form-control datetimepickerClass datetimepicker-input bg-light mt-0"
                                    id="ToDate_CustomDatesSelectionViewRecord_ManageReports"
                                    style={{ cursor: "pointer", width: "100%" }}
                                    readOnly
                                />
                            </div>
                            <div
                                id="toDate_error_CustomDatesSelectionViewRecord_ManageReports"
                                className="errorsClass2"
                            ></div>
                        </div>

                        <div className="col-9 col-md-6 col-lg-3">
                            <div className="form-group tender-bx">
                                <label htmlFor="ddlTenderTypeId">Tender Type</label>
                                <select className="form-control" id="ddlTenderTypeId">
                                    <option value="0">All</option>
                                    <option value="1">Cash</option>
                                    <option value="3">EFTPOS</option>
                                    <option value="7">mPOSs</option>
                                    <option value="8">American Express</option>
                                    <option value="9">MasterCard</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-3 col-md-4 col-lg-1 pl-0">
                            <button className="select-bx btn btn-primary text-white font-weight-normal commonClass_ManageReports">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="table-section px-0">
                    <div className="container-fluid px-0">
                        <div className="row row-box">
                            <div className="col-sm-12 col-md-7 col-lg-7 manage-report-table p-0">
                                <div
                                    className="table-responsive searchedCompletedOrdersDataOfRestaurant"
                                    style={{ position: "relative" }}
                                >
                                    <div
                                        id="LoaderDiv_ViewRecord_ManageReports"
                                        style={{
                                            opacity: 1,
                                            bottom: 0,
                                            background: "rgba(254, 253, 253, 0.68)",
                                            width: "100%",
                                            zIndex: 2147483647,
                                            position: "absolute",
                                            display: "none",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <img
                                                src="./Content/Images/Loader.gif"
                                                alt="Loading..."
                                                style={{ maxWidth: "6%" }}
                                            />
                                        </div>
                                    </div>
                                    <table
                                        id="BindSearchedCompletedOrdersDataOfRestaurant"
                                        className="table table-bordered text-center bg-white mb-0"
                                    >
                                        <thead>
                                            <tr className="bluelight">
                                                <th scope="col">Code</th>
                                                <th scope="col">Machine Name</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Clerk</th>
                                                <th scope="col">Customer</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr data-oid="38897" style={{ cursor: "pointer" }}>
                                                <td>38897</td>
                                                <td>MSTMM</td>
                                                <td>30-Oct-2024 01:20 PM</td>
                                                <td>Crust Pizza &amp; More</td>
                                                <td></td>
                                            </tr>
                                            <tr
                                                data-oid="38896"
                                                style={{ cursor: "pointer" }}
                                                className="selectedRow"
                                            >
                                                <td>38896</td>
                                                <td>MSTMM</td>
                                                <td>30-Oct-2024 01:11 PM</td>
                                                <td>Crust Pizza &amp; More</td>
                                                <td></td>
                                            </tr>
                                            <tr data-oid="38897" style={{ cursor: "pointer" }}>
                                                <td>38897</td>
                                                <td>MSTMM</td>
                                                <td>30-Oct-2024 01:20 PM</td>
                                                <td>Crust Pizza &amp; More</td>
                                                <td></td>
                                            </tr>
                                            <tr data-oid="38897" style={{ cursor: "pointer" }}>
                                                <td>38897</td>
                                                <td>MSTMM</td>
                                                <td>30-Oct-2024 01:20 PM</td>
                                                <td>Crust Pizza &amp; More</td>
                                                <td></td>
                                            </tr>
                                            <tr data-oid="38897" style={{ cursor: "pointer" }}>
                                                <td>38897</td>
                                                <td>MSTMM</td>
                                                <td>30-Oct-2024 01:20 PM</td>
                                                <td>Crust Pizza &amp; More</td>
                                                <td></td>
                                            </tr>
                                            <tr data-oid="38897" style={{ cursor: "pointer" }}>
                                                <td>38897</td>
                                                <td>MSTMM</td>
                                                <td>30-Oct-2024 01:20 PM</td>
                                                <td>Crust Pizza &amp; More</td>
                                                <td></td>
                                            </tr>
                                            <tr data-oid="38897" style={{ cursor: "pointer" }}>
                                                <td>38897</td>
                                                <td>MSTMM</td>
                                                <td>30-Oct-2024 01:20 PM</td>
                                                <td>Crust Pizza &amp; More</td>
                                                <td></td>
                                            </tr>
                                            <tr data-oid="38897" style={{ cursor: "pointer" }}>
                                                <td>38897</td>
                                                <td>MSTMM</td>
                                                <td>30-Oct-2024 01:20 PM</td>
                                                <td>Crust Pizza &amp; More</td>
                                                <td></td>
                                            </tr>
                                            <tr data-oid="38897" style={{ cursor: "pointer" }}>
                                                <td>38897</td>
                                                <td>MSTMM</td>
                                                <td>30-Oct-2024 01:20 PM</td>
                                                <td>Crust Pizza &amp; More</td>
                                                <td></td>
                                            </tr>
                                            <tr data-oid="38897" style={{ cursor: "pointer" }}>
                                                <td>38897</td>
                                                <td>MSTMM</td>
                                                <td>30-Oct-2024 01:20 PM</td>
                                                <td>Crust Pizza &amp; More</td>
                                                <td></td>
                                            </tr>
                                            <tr data-oid="38897" style={{ cursor: "pointer" }}>
                                                <td>38897</td>
                                                <td>MSTMM</td>
                                                <td>30-Oct-2024 01:20 PM</td>
                                                <td>Crust Pizza &amp; More</td>
                                                <td></td>
                                            </tr>
                                            <tr data-oid="38897" style={{ cursor: "pointer" }}>
                                                <td>38897</td>
                                                <td>MSTMM</td>
                                                <td>30-Oct-2024 01:20 PM</td>
                                                <td>Crust Pizza &amp; More</td>
                                                <td></td>
                                            </tr>
                                            <tr data-oid="38897" style={{ cursor: "pointer" }}>
                                                <td>38897</td>
                                                <td>MSTMM</td>
                                                <td>30-Oct-2024 01:20 PM</td>
                                                <td>Crust Pizza &amp; More</td>
                                                <td></td>
                                            </tr>
                                            <tr data-oid="38897" style={{ cursor: "pointer" }}>
                                                <td>38897</td>
                                                <td>MSTMM</td>
                                                <td>30-Oct-2024 01:20 PM</td>
                                                <td>Crust Pizza &amp; More</td>
                                                <td></td>
                                            </tr>
                                            <tr data-oid="38897" style={{ cursor: "pointer" }}>
                                                <td>38897</td>
                                                <td>MSTMM</td>
                                                <td>30-Oct-2024 01:20 PM</td>
                                                <td>Crust Pizza &amp; More</td>
                                                <td></td>
                                            </tr>
                                            <tr data-oid="38897" style={{ cursor: "pointer" }}>
                                                <td>38897</td>
                                                <td>MSTMM</td>
                                                <td>30-Oct-2024 01:20 PM</td>
                                                <td>Crust Pizza &amp; More</td>
                                                <td></td>
                                            </tr>
                                            <tr data-oid="38897" style={{ cursor: "pointer" }}>
                                                <td>38897</td>
                                                <td>MSTMM</td>
                                                <td>30-Oct-2024 01:20 PM</td>
                                                <td>Crust Pizza &amp; More</td>
                                                <td></td>
                                            </tr>
                                            <tr data-oid="38897" style={{ cursor: "pointer" }}>
                                                <td>38897</td>
                                                <td>MSTMM</td>
                                                <td>30-Oct-2024 01:20 PM</td>
                                                <td>Crust Pizza &amp; More</td>
                                                <td></td>
                                            </tr>
                                            <tr data-oid="38897" style={{ cursor: "pointer" }}>
                                                <td>38897</td>
                                                <td>MSTMM</td>
                                                <td>30-Oct-2024 01:20 PM</td>
                                                <td>Crust Pizza &amp; More</td>
                                                <td></td>
                                            </tr>
                                            <tr data-oid="38897" style={{ cursor: "pointer" }}>
                                                <td>38897</td>
                                                <td>MSTMM</td>
                                                <td>30-Oct-2024 01:20 PM</td>
                                                <td>Crust Pizza &amp; More</td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div
                                    id="ShowMoreSearchViewRecords_ManageReoprts"
                                    className="p-2 text-center"
                                >
                                    <button
                                        className="btn btn-primary commonClass_ManageReports"
                                    // onClick={ShowMoreSearchViewRecords_ManageReoprts}
                                    >
                                        View more
                                    </button>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-5 col-lg-5 pr-0">
                                <div className="bg-white border">
                                    <div
                                        id="LoaderDiv_ViewRecord_SingleOrder_ManageReports"
                                        style={{
                                            opacity: 1,
                                            zIndex: 9999999999,
                                            position: "absolute",
                                            width: "96%",
                                            transform: "translate(0%, 100%)",
                                        }}
                                    ></div>

                                    <div id="cssFadeSection_ManageReoprts">
                                        <ul
                                            className="item-quntity"
                                            id="BindProductListSelectedOrder"
                                        >
                                            <li className="mb-0">
                                                <span className="recipe-name">SAMOSA(1)</span>
                                                <span className="text-right">$5</span>
                                            </li>
                                            <p className="px-0" style={{ fontSize: "14px" }}>
                                                (Item Discount 1)
                                            </p>
                                            <p>
                                                Chatni (3) <span>$2</span>
                                            </p>
                                            <p>
                                                Green Chatni (2) <span>$5</span>
                                            </p>
                                            <p>
                                                Saus (4) <span>$5</span>
                                            </p>
                                            <p>
                                                Green Saus (3) <span>$4</span>
                                            </p>
                                            <li className="mb-0">
                                                <span className="recipe-name">
                                                    2 Samosa with 1 Spring Roll Combo(1)
                                                </span>
                                                <span className="text-right">$100</span>
                                            </li>
                                            <p className="px-0" style={{ fontSize: "14px" }}>
                                                (Item Discount 2)
                                            </p>
                                            <p>&gt;&gt; SAMOSA</p>
                                            <p className="ml-4" style={{ fontSize: "14px" }}>
                                                Chatni (5) <span>$2</span>
                                            </p>
                                            <p className="ml-4" style={{ fontSize: "14px" }}>
                                                Chatni Green (4) <span>$5</span>
                                            </p>
                                            <p className="ml-4" style={{ fontSize: "14px" }}>
                                                Saus (2) <span>$4</span>
                                            </p>
                                            <p className="ml-4" style={{ fontSize: "14px" }}>
                                                Saus Green (3) <span>$8</span>
                                            </p>
                                        </ul>

                                        <div className="row px-3">
                                            <div className="col-12">
                                                <h6 className="mb-0 mt-2 total2 font-weight-bold">
                                                    <span>Total</span>
                                                    <span
                                                        className="float-end"
                                                        id="SingleOrderTotalAmount_ViewRecord"
                                                    >
                                                        $180
                                                    </span>
                                                </h6>
                                                <h6
                                                    className="mb-0 mt-2 total2 font-weight-bold"
                                                    id="orderDiscountDetailsTab"
                                                >
                                                    <span>Discount</span>
                                                    <span
                                                        className="float-end"
                                                        id="orderDiscountDetailsTab_ViewRecord"
                                                    >
                                                        $64.00
                                                    </span>
                                                </h6>
                                                <h6
                                                    id="SingleOrderPromoCode_ViewRecord"
                                                    className="mb-0 mt-2 total2 font-weight-bold row"
                                                >
                                                    <span className="col-12 mb-1">
                                                        <span>Promo - PromoCodeName</span>
                                                        <span className="float-end">$1.00</span>
                                                    </span>
                                                </h6>
                                                <h6
                                                    id="SingleOrderThreshold_ViewRecord"
                                                    className="mb-0 mt-2 total2 font-weight-bold row"
                                                >
                                                    <span className="col-12 mb-1">
                                                        <span>Threshold</span>
                                                        <span className="float-end">$1.00</span>
                                                    </span>
                                                </h6>
                                                <h6 className="mb-0 mt-2 total2 font-weight-bold">
                                                    <span>GST</span>
                                                    <span className="float-end" id="SingleOrderGST">
                                                        $17.35
                                                    </span>
                                                </h6>
                                                <h6
                                                    id="SingleOrderPaymentType_ViewRecord"
                                                    className="mb-0 mt-2 total2 font-weight-bold row"
                                                >
                                                    <span className="col-12 mb-1">
                                                        <span>Payment Type - Cash</span>
                                                        <span className="float-end">$100</span>
                                                    </span>
                                                    <span className="col-12 mb-2">
                                                        <span>Surcharge</span>
                                                        <span className="float-end">$1.02</span>
                                                    </span>
                                                    <span className="col-12 mb-1">
                                                        <span>Payment Type - EFTPOS</span>
                                                        <span className="float-end">$20</span>
                                                    </span>
                                                    <span className="col-12 mb-2">
                                                        <span>Surcharge</span>
                                                        <span className="float-end">$1.02</span>
                                                    </span>
                                                </h6>
                                                <h6 className="mb-0 total2 font-weight-bold">
                                                    <span>Balance Change</span>
                                                    <span
                                                        className="float-end"
                                                        id="SingleOrderBalanceChange_ViewRecord"
                                                    >
                                                        -$NaN
                                                    </span>
                                                </h6>
                                                <h6 className="mb-0 mt-2 total2 font-weight-bold">
                                                    <span>Refund</span>
                                                    <span
                                                        className="float-end"
                                                        id="SingleOrderRefund_ViewRecord"
                                                    >
                                                        $0
                                                    </span>
                                                </h6>
                                            </div>
                                        </div>

                                        <div className="row my-3 pb-0">
                                            <div className="col text-center">
                                                <button
                                                    className="btn btn-primary commonClass_ManageReports"
                                                    onClick={handleEmailModalOpen}
                                                >
                                                    Send Invoice
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <EmailModal />
        </>
    )
}

export default ViewRecords