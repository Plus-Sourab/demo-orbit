import React from 'react'
import "../../../assets/CSS/peripheral.css"

const StoreQR = () => {
    return (
        <div className='storeqr-box'>
            <div id="contentWrapper_RestaurantLayout" className="content-wrapper timing_stores">
                <div className="col-12 text-center ">
                    <ul className="nav nav-tabs software_settings" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link  active" data-toggle="tab" href="#online_order" onClick="RestaurantQRCode_SoftwareSetting();">
                                Online Ordering
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " data-toggle="tab" href="#restaurant">Workflow</a>
                        </li>

                    </ul>
                </div>
                <div className="wrapper-navs_wraps wrapper-box">
                    <div className="col-md-12 col-lg-12 col-sm-12 px-0">
                        <div className="tab-content tab-set">
                            <div id="online_order" className="container-fluid tab-pane active">
                                <div className="timing-cgt-desc store">
                                    <div className="cgt-desc store_timimgs-wraps">

                                        <div className="cgt-content">

                                            <div id="store_qr_code" className="tab">
                                                <div className="timing-cgt-desc wrap_delay-setting">
                                                    <div className="scan_qr-code">
                                                        <h4 className="qr_code-heading">QR Code for Store</h4>
                                                        <div className="scanner_image">

                                                            <img id="imgRestaurantQRCode_SoftwareSetting" src="./Content/ImageUploads/RestaurantQRCode/e63b5c2e90274c822885ae9b.png" alt="QR_Code" className="qr_codes-img mx-auto" style={{ maxWidth: "130px", height: "auto" }} />
                                                        </div>
                                                        <div className="wrap_scanner_buttons">
                                                            <button type="button" className="btn btn-primary scanner_codebutton" onClick="GenerateRestaurantQRCode_SoftwareSetting();">Generate QR code</button>
                                                            <button id="btnPrint_RestaurantQRCode_SoftwareSetting" type="button" className="btn btn-primary scanner_codebutton" onClick="PrintRestaurantQRCode_SoftwareSetting();">Print QR code</button>
                                                            <button id="btnDelete_RestaurantQRCode_SoftwareSetting" type="button" className="btn btn-primary scanner_codebutton delete_scanner" onClick="ConfirmDeleteRestaurantQRCode_SoftwareSetting();">Delete QR code</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="dv_RestaurantQRCode_PrintableSection_SoftwareSetting" style={{ display: "none" }}>
                                                    <img id="imgRestaurantQRCode_Printable_SoftwareSetting" src="./Content/ImageUploads/RestaurantQRCode/e63b5c2e90274c822885ae9b.png" alt="QR_Code" style={{ width: "100%" }} />
                                                </div>
                                            </div>


                                            {/* <div id="dockets" className="container tab-pane fade">
                                            <div className="cgt-desc">
                                            </div>
                                        </div>

                                        <div id="menu" className="container tab-pane fade">
                                            <div className="cgt-desc">
                                            </div>
                                        </div>

                                        <div id="home_screen" className="container tab-pane fade">
                                            <div className="cgt-desc">
                                            </div>
                                        </div>

                                        <div id="staff" className="container tab-pane fade">
                                            <div className="cgt-desc">
                                            </div>
                                        </div>

                                        <div id="functions_rename" className="container tab-pane fade">
                                            <div className="cgt-desc">
                                            </div>
                                        </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="restaurant" className="container-fluid tab-pane fade active px-0">
                                <div className="workflow-tab">
                                    <ul className="nav nav-pills mb-3 justify-content-center " id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active backcolor" id="pills-General-tab" data-toggle="pill" data-target="#pills-General" type="button" role="tab" aria-controls="pills-General" aria-selected="true">
                                                General
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link  " id="pills-Workflow-tab" data-toggle="pill" data-target="#pills-Workflow" type="button" role="tab" aria-controls="pills-Workflow" aria-selected="false">
                                                Workflow
                                                Settings
                                            </button>
                                        </li>
                                        <li className="nav-item d-none" role="presentation">
                                            <button className="nav-link " id="pills-Users-tab" data-toggle="pill" data-target="#pills-Users" type="button" role="tab" aria-controls="pills-Users" aria-selected="false">
                                                Users Apps
                                                Settings
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-General" role="tabpanel" aria-labelledby="pills-General-tab">
                                            <div className="container-fluid px-0">
                                                <div className="table-input text-left mb-3">
                                                    <h6 className="font-weight-bold">
                                                        USER APP DELIVERY ORDER
                                                        <span>
                                                            <i className="fa fa-question-circle" aria-hidden="true"></i>
                                                        </span>
                                                    </h6>
                                                    <div className="input-bx">
                                                        <h6>Allow User to place the Delivery Order</h6>
                                                        <span className="mt-1">
                                                            <div className="toggle-bx text-center">
                                                                <label className="switch mb-0">
                                                                    <input
                                                                        type="checkbox"
                                                                        id="AllowUserAppToPlaceTheDeliveryOrder"
                                                                        data-id="0"
                                                                    />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </div>
                                                        </span>
                                                    </div>
                                                    <div id="deliveryordercollapse" style={{ display: "block" }}>
                                                        <div className="input-bx">
                                                            <h6>Minimum Charge</h6>
                                                            <span className="mt-1">
                                                                <input
                                                                    type="number"
                                                                    min="1"
                                                                    id="MinimumCharge_Delivery"
                                                                    name="MinimumCharge_Delivery"
                                                                    placeholder="0.0"
                                                                    className="time-input"
                                                                />
                                                            </span>
                                                        </div>
                                                        <div className="input-bx">
                                                            <h6>Allow Cash on Delivery</h6>
                                                            <span className="mt-1">
                                                                <div className="toggle-bx text-center">
                                                                    <label className="switch mb-0">
                                                                        <input
                                                                            type="checkbox"
                                                                            id="AllowCashOnDelivery"
                                                                            data-id="0"
                                                                        />
                                                                        <span className="slider round"></span>
                                                                    </label>
                                                                </div>
                                                            </span>
                                                        </div>
                                                        <div className="input-bx">
                                                            <h6>Auto Accept Paid Order</h6>
                                                            <span className="mt-1">
                                                                <div className="toggle-bx text-center">
                                                                    <label className="switch mb-0">
                                                                        <input
                                                                            type="checkbox"
                                                                            id="AutoAcceptPaidOrder_Delivery"
                                                                            data-id="0"
                                                                        />
                                                                        <span className="slider round"></span>
                                                                    </label>
                                                                </div>
                                                            </span>
                                                        </div>
                                                        <div className="input-bx">
                                                            <h6>Estimated Time Of The Delivery (mins)</h6>
                                                            <span className="mt-1">
                                                                <input
                                                                    type="number"
                                                                    min="1"
                                                                    id="EstimatedTime_Delivery"
                                                                    name="EstimatedTime_Delivery"
                                                                    placeholder="0"
                                                                    className="time-input"
                                                                />
                                                            </span>
                                                        </div>
                                                        <div className="table-input text-left">
                                                            <div className="input-bx">
                                                                <h6>Create Delivery Zone</h6>
                                                                <span>
                                                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                                </span>
                                                            </div>
                                                            <div id="deliveryZoneDetails">
                                                                <div id="delivery_zone_data" className="mt-4">
                                                                    <div className="delivery_zone_remark">
                                                                        <b>Note: </b>If no delivery zone is created, the delivery zone will be disabled.
                                                                    </div>
                                                                    <button type="button" className="btn add-pay">
                                                                        + Create Delivery Zone
                                                                    </button>
                                                                </div>
                                                                <table id="tbl_DeliveryZoneList_Section_WorkflowSetting">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Zone Name</th>
                                                                            <th>Distance Value</th>
                                                                            <th>Delivery Fee</th>
                                                                            <th>Actions</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>Zone 1</td>
                                                                            <td>10 KM</td>
                                                                            <td>$5.00</td>
                                                                            <td>
                                                                                <i className="fa fa-edit" title="Edit Zone" aria-hidden="true"></i>
                                                                                <i className="fa fa-trash" title="Delete Zone" aria-hidden="true"></i>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="table-input">
                                                    <div className="suggest-bx text-left" id="SuggestedTipContainer">
                                                        <h6 style={{ fontSize: "15px", fontWeight: "bolder" }}>
                                                            SUGGESTED TIP
                                                            <i className="fa fa-question-circle" aria-hidden="true"></i>
                                                            <div className="toggle-bx text-right">
                                                                <label className="switch mb-0">
                                                                    <input
                                                                        type="checkbox"
                                                                        id="SuggestedTip"
                                                                        placeholder="00.0"
                                                                        name="SuggestedTip"
                                                                        data-id="0"
                                                                    />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </div>
                                                        </h6>
                                                        <div className="row align-items-center" id="SuggestedTipDetails">
                                                            <div className="col-12">
                                                                <div className="row align-items-center mb-2">
                                                                    <div className="col-4">
                                                                        <label htmlFor="TipAmount_1">1st Amount</label>
                                                                        <input type="text" className="form-control IsNumeric" id="TipAmount_1" name="TipAmount_1" placeholder="00" />
                                                                        <div className="errorsClasstip" id="errorMsg_TipAmount_1_WorkFlowSetting"></div>
                                                                    </div>
                                                                    <div className="col-4">
                                                                        <label htmlFor="TipAmount_2">2nd Amount</label>
                                                                        <input type="text" className="form-control IsNumeric" id="TipAmount_2" name="TipAmount_2" placeholder="00" />
                                                                        <div className="errorsClasstip" id="errorMsg_TipAmount_2_WorkFlowSetting"></div>
                                                                    </div>
                                                                    <div className="col-4">
                                                                        <label htmlFor="TipAmount_3">3rd Amount</label>
                                                                        <input type="text" className="form-control IsNumeric" id="TipAmount_3" name="TipAmount_3" placeholder="00" />
                                                                        <div className="errorsClasstip" id="errorMsg_TipAmount_3_WorkFlowSetting"></div>
                                                                    </div>
                                                                    <div className="col-2">
                                                                        <button type="button" id="tip_Save_button" className="btn-tip">
                                                                            Save
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-Workflow" role="tabpanel" aria-labelledby="pills-Workflow-tab">
                                            <div className="container-fluid text-center">
                                                <div className="schedule-tab">
                                                    <div className="deilay-input text-left mb-3">
                                                        <h6 className="font-weight-bold">
                                                            SCHEDULED ORDER PROCESSING <i className="fa fa-question-circle" aria-hidden="true"></i>
                                                        </h6>
                                                        <div className="delay-bx">
                                                            <h6 className="mb-0">Allow Schedule Order</h6>
                                                            <span className="mt-1">
                                                                <div className="toggle-bx text-center">
                                                                    <label className="switch mb-0">
                                                                        <input
                                                                            type="checkbox"
                                                                            className="toggleBtn_WorkflowSetting"
                                                                            id="AllowScheduleOrder"
                                                                            data-id="0"
                                                                        // onChange={() => updateWorkflowSettingStatus(this)}
                                                                        />
                                                                        <span className="slider round"></span>
                                                                    </label>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="table-input text-left mb-3">
                                                    <h6 className="font-weight-bold">
                                                        ORDER PAYMENT <i className="fa fa-question-circle" aria-hidden="true"></i>
                                                    </h6>
                                                    <div className="input-bx">
                                                        <h6>Require Payment When Placing Order</h6>
                                                        <span className="mt-1">
                                                            <div className="toggle-bx text-center">
                                                                <label className="switch mb-0">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="toggleBtn_WorkflowSetting"
                                                                        id="RequirePaymentWhenPlacingOrder"
                                                                        data-id="0"
                                                                    // onChange={() => updateWorkflowSettingStatus(this)}
                                                                    />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </div>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="table-input text-left mb-3 mt-3">
                                                    <h6 className="font-weight-bold">
                                                        BANNER COLOR <i className="fa fa-question-circle" aria-hidden="true"></i>
                                                    </h6>
                                                    <div className="input-bx">
                                                        <input type="color" id="BannerColor" name="BannerColor" />
                                                        <button
                                                            type="button"
                                                            className="btn upload-pay custom-mb"
                                                            style={{ marginBottom: '3px' }}
                                                        // onClick={() => updateWorkflowSettingStatus(this)}
                                                        >
                                                            Save
                                                        </button>
                                                    </div>
                                                </div>

                                                <hr />

                                                <div className="table-input text-left mb-3">
                                                    <h6 className="font-weight-bold">
                                                        SET ORDER START NUMBER FOR WEB ORDERS <i className="fa fa-question-circle" aria-hidden="true"></i>
                                                    </h6>
                                                    <div className="input-bx"
                                                    // onClick={() => OpenOrderForWebPopup()}
                                                    >
                                                        <h6>Order Start Number</h6>
                                                        <span className="mt-1">
                                                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                        </span>
                                                    </div>
                                                </div>

                                                <hr />

                                                <div className="table-input text-left mb-3">
                                                    <h6 className="font-weight-bold">
                                                        USER APP PICKUP ORDER <i className="fa fa-question-circle" aria-hidden="true"></i>
                                                    </h6>
                                                    <div className="input-bx">
                                                        <h6>Allow User to place the Pickup Order</h6>
                                                        <span className="mt-1">
                                                            <div className="toggle-bx text-center">
                                                                <label className="switch mb-0">
                                                                    <input
                                                                        type="checkbox"
                                                                        id="AllowUserAppToPlaceThePickupOrder"
                                                                        data-id="0"
                                                                    // onChange={() => updateWorkflowSettingStatus(this)}
                                                                    />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </div>
                                                        </span>
                                                    </div>

                                                    <div className="input-bx">
                                                        <h6>Allow Cash on Pickup</h6>
                                                        <span className="mt-1">
                                                            <div className="toggle-bx text-center">
                                                                <label className="switch mb-0">
                                                                    <input
                                                                        type="checkbox"
                                                                        id="AllowCashOnPickup"
                                                                        data-id="0"
                                                                    // onChange={() => updateWorkflowSettingStatus(this)}
                                                                    />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </div>
                                                        </span>
                                                    </div>

                                                    <div className="input-bx">
                                                        <h6>Auto Accept Paid Order</h6>
                                                        <span className="mt-1">
                                                            <div className="toggle-bx text-center">
                                                                <label className="switch mb-0">
                                                                    <input
                                                                        type="checkbox"
                                                                        id="AutoAcceptPaidOrder_Pickup"
                                                                        data-id="0"
                                                                    // onChange={() => updateWorkflowSettingStatus(this)}
                                                                    />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                            </div>
                                                        </span>
                                                    </div>

                                                    <div className="input-bx">
                                                        <h6>Estimated Time (mins)</h6>
                                                        <span className="mt-1">
                                                            <input
                                                                type="number"
                                                                min="1"
                                                                id="EstimatedTime_Pickup"
                                                                name="EstimatedTime_Pickup"
                                                                placeholder="0"
                                                                className="time-input"
                                                            // onChange={() => updateWorkflowSettingStatus(this)}
                                                            />
                                                        </span>
                                                    </div>
                                                </div>

                                                <hr />

                                                <div className="table-input text-left mb-3">
                                                    <h6 className="font-weight-bold">
                                                        Upload Logo <i className="fa fa-question-circle" aria-hidden="true"></i>
                                                    </h6>
                                                    <div className="input-bx-ws">
                                                        <div className="logo-detail-ws">
                                                            <div className="mylogo-ws">
                                                                <div className="imageWrapper-ws">
                                                                    <img
                                                                        className="image"
                                                                        id="imgLogoImage_WorkflowSetting"
                                                                        src="../../Content/ImageUploads/ProductImages/d0c30767bbd6.jpg"
                                                                        alt="Logo"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="container">
                                                            <div className="file-upload-ws aline_input">
                                                                <input
                                                                    type="file"
                                                                    accept="image/jpeg, image/png"
                                                                    name="file_LogoImage_WorkflowSetting"
                                                                    id="file_LogoImage_WorkflowSetting"
                                                                    className="me-2"
                                                                    style={{ fontSize: '15px' }}
                                                                />
                                                                <button
                                                                    id="btnSubmit_LogoImage_WorkflowSetting"
                                                                    type="button"
                                                                    className="btn upload-logo custom-mb"
                                                                // onClick={() => UploadLogoForOnlineOrdering()}
                                                                >
                                                                    Save
                                                                </button>
                                                            </div>
                                                            <div className="file-upload-ws mt-4">
                                                                <p><b>Note : </b>Maximum Dimensions <span className="text-danger">800*800</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <hr />

                                                <div className="table-input text-left mb-3">
                                                    <h6 className="font-weight-bold">
                                                        SET PRODUCT VIEW TYPE (MOBILE SCREEN) <i className="fa fa-question-circle" aria-hidden="true"></i>
                                                    </h6>
                                                    <div className="input-bx">
                                                        <h6>PRODUCT VIEW</h6>
                                                        <span className="mt-1">
                                                            <span className="form-group">
                                                                <select
                                                                    id="SetProductViewType"
                                                                    data-id="0"
                                                                // onChange={() => updateWorkflowSettingStatus(this)}
                                                                >
                                                                    <option value="1">Grid View</option>
                                                                    <option value="2">List View</option>
                                                                </select>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreQR