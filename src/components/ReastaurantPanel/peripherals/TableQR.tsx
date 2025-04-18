import React from 'react';
import "../../../assets/CSS/peripheral.css"

interface TableProps {
    tableId: number;
    tableTitle: string;
    qrCodeImage: string;
}

const RestaurantLayout: React.FC = () => {
    // Event handler function types
    const RestaurantTables_SoftwareSetting = () => {
        console.log('Restaurant tables settings updated');
    };

    const SelectTable_ManageTables_SoftwareSetting = (tableId: number) => {
        console.log(`Table ${tableId} selected`);
    };

    const CreateRestaurantTable_SoftwareSetting = (tableId: number) => {
        console.log(`Create table with ID: ${tableId}`);
    };

    const CreateRestaurantTableQRCode_SoftwareSetting = () => {
        console.log('Creating table QR code');
    };

    const DeleteTables_SoftwareSetting = () => {
        console.log('Deleting selected tables');
    };

    const PrintRestaurantTableQRCode_SoftwareSetting = () => {
        console.log('Printing table QR code');
    };

    const tables: TableProps[] = [
        { tableId: 1, tableTitle: 'Table 1', qrCodeImage: './Content/ImageUploads/TableQRCode/9b8acd89c0c547612092e316.png' },
        { tableId: 2, tableTitle: 'Table 2', qrCodeImage: './Content/ImageUploads/TableQRCode/8635bc10f76a4a3e4eeb1819.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        { tableId: 6, tableTitle: 'Table 6', qrCodeImage: './Content/ImageUploads/TableQRCode/363d0dd3a29c447442695bb8.png' },
        // Add more table objects 
    ];

    return (
        <div className='tableqr-box'>
            <div id="contentWrapper_RestaurantLayout" className="content-wrapper timing_stores">
                <div className="wrapper-navs_wraps p-0">
                    <div className="col-12 text-center pl-0 ">
                        <ul className="nav nav-tabs software_settings mb-4" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a
                                    href="#"
                                    className="nav-link active m-0"
                                    id="home-tab"
                                    data-toggle="tab"
                                    data-target="#home"
                                    role="tab"
                                    aria-controls="home"
                                    aria-selected="true"
                                    onClick={RestaurantTables_SoftwareSetting}
                                >
                                    Table
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link "
                                    id="profile-tab"
                                    data-toggle="tab"
                                    data-target="#profile"
                                    role="tab"
                                    aria-controls="profile"
                                    aria-selected="false"
                                >
                                    Workflow Settings
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-12 col-lg-12 col-sm-12 px-0">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div id="restaurant">
                                    <div className="cgt-desc">
                                        <div className="floor_wraps">
                                            <a href="#" className="button_floor-ground">
                                                <button type="button" className="btn btn-primary ground_floor-button">
                                                    Ground Floor
                                                </button>
                                            </a>
                                            <a href="#" className="add_wraps-etc">
                                                <span className="wrap_plus">
                                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                                </span>
                                            </a>

                                            <div className="table_wraps-settings">
                                                <div
                                                    id="TablesList_Section_SoftwareSetting"
                                                    className="create_wrrpr-table"
                                                    style={{ height: '100%', overflowY: 'auto' }}
                                                >
                                                    {tables.map((table) => (
                                                        <div
                                                            key={table.tableId}
                                                            id={`tblSection_ManageTable_SoftwareSetting_${table.tableId}`}
                                                            className="table_number"
                                                            style={{ padding: '5px', display: 'block', cursor: 'pointer' }}
                                                            onClick={() => SelectTable_ManageTables_SoftwareSetting(table.tableId)}
                                                        >
                                                            <div className="tblStyle" title={table.tableTitle} style={{ fontSize: '15px', width: '100%' }}>
                                                                <br />
                                                                {table.tableTitle}
                                                                <br />
                                                            </div>
                                                            <div style={{ textAlign: 'center' }}>
                                                                <img
                                                                    src={table.qrCodeImage}
                                                                    alt="QR_Code"
                                                                    style={{ width: '90%', height: 'auto' }}
                                                                />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="wrap_button-wrapper">
                                                <div className="col-md-12 col-lg-12 col-sm-12" style={{ padding: '0px' }}>
                                                    <div className="row">
                                                        <div className="col-md-3 col-lg-3 col-sm-6">
                                                            <div className="tables-wrpper">
                                                                <a href="javascript:;">
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-primary create_table-wrpper"
                                                                        onClick={() => CreateRestaurantTable_SoftwareSetting(1)}
                                                                    >
                                                                        Create Table
                                                                    </button>
                                                                </a>
                                                                <a href="javascript:;">
                                                                    <button
                                                                        id="btn_CreateTableQR_ManageRestaurantTable_SoftwareSetting"
                                                                        type="button"
                                                                        className="btn btn-primary create_table-wrpper"
                                                                        onClick={CreateRestaurantTableQRCode_SoftwareSetting}
                                                                        disabled
                                                                    >
                                                                        Create Table QR
                                                                    </button>
                                                                </a>
                                                            </div>

                                                            <div className="tables-wrpper">
                                                                <a href="javascript:;">
                                                                    <button
                                                                        id="btn_DeleteTable_ManageRestaurantTable_SoftwareSetting"
                                                                        type="button"
                                                                        className="btn btn-primary create_table-wrpper"
                                                                        onClick={DeleteTables_SoftwareSetting}
                                                                        disabled
                                                                    >
                                                                        Delete Table
                                                                    </button>
                                                                </a>

                                                                <a href="javascript:;">
                                                                    <button
                                                                        id="btn_PrintTableQR_ManageRestaurantTable_SoftwareSetting"
                                                                        type="button"
                                                                        className="btn btn-primary create_table-wrpper"
                                                                        onClick={PrintRestaurantTableQRCode_SoftwareSetting}
                                                                        disabled
                                                                    >
                                                                        Print QRcode
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-sm-6">
                                                            <div className="flower_wrap-img">
                                                                <div className="img_flower">
                                                                    <img src="./Content/Restaurant/icons/flower.png" alt="flower" className="flower_icon-img" />
                                                                </div>
                                                                <div className="radio_buttons-wrappers">
                                                                    <div className="form-check">
                                                                        <label className="form-check-label">
                                                                            <input type="radio" className="form-check-input" name="optradio" checked />Table Size
                                                                            <i className="input-helper"></i></label>
                                                                    </div>
                                                                    <div className="form-check">
                                                                        <label className="form-check-label">
                                                                            <input type="radio" className="form-check-input" name="optradio" />Table Position
                                                                            <i className="input-helper"></i></label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-sm-6">
                                                            <div className="tables-wrpper">
                                                                <a href="#"><button type="button" className="btn btn-primary create_table-wrpper">Draw Line</button></a>
                                                                <a href="#"><button type="button" className="btn btn-primary create_table-wrpper">Create Box</button></a>
                                                            </div>

                                                            <div className="tables-wrpper">
                                                                <a href="#"><button type="button" className="btn btn-primary create_table-wrpper">Delete Line</button></a>

                                                                <a href="#"><button type="button" className="btn btn-primary create_table-wrpper">Delete Box</button></a>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-sm-6">
                                                            <div className="tables-wrpper">
                                                                <a href="#"><button type="button" className="btn btn-primary create_table-wrpper">Floor Picture</button></a>
                                                                <a href="#"><button type="button" className="btn btn-primary create_table-wrpper">Save</button></a>
                                                            </div>

                                                            <div className="tables-wrpper">
                                                                <a href="#"><button type="button" className="btn btn-primary create_table-wrpper">Remove Floor Pic</button></a>
                                                                <a href="#"><button type="button" className="btn btn-primary create_table-wrpper">Exit</button></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="dv_RestaurantTableQRCode_PrintableSection_SoftwareSetting" style={{ display: "none" }}>
                                        <div id="lblRestaurantTableQRCode_TableName_Printable_SoftwareSetting" style={{ textAlign: "center", paddingBottom: "10px", paddingTop: "30px", fontWeight: "bold", fontSize: "40px" }}></div>
                                        <img id="imgRestaurantTableQRCode_Printable_SoftwareSetting" src="" alt="QR_Code" style={{ width: "100%" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                                <div className="table-input text-left mb-3">
                                    <h6 className="font-weight-bold">
                                        RETURN HOME <i className="fa fa-question-circle" aria-hidden="true"></i>
                                    </h6>
                                    <div className="input-bx">
                                        <h6>Return Home After Payment Processing</h6>
                                        <span className="mt-1">
                                            <div className="toggle-bx text-center">
                                                <label className="switch mb-0">
                                                    <input type="checkbox" id="ReturnHomeAfterPaymentProcessing" data-id="0" onchange="UpdateTableQRWorflowSetting(this)" />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                        </span>
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
                                                    <input type="checkbox" id="RequirePaymentWhenPlacingOrder_Table" data-id="0" onchange="UpdateTableQRWorflowSetting(this)" />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="table-input text-left mb-3">
                                    <h6 className="font-weight-bold">
                                        ORDER LOCK <i className="fa fa-question-circle" aria-hidden="true"></i>
                                    </h6>
                                    <div className="input-bx mb-2">
                                        <h6>Order lock</h6>
                                        <span className="form-group" style={{ display: "none", marginLeft: "600px", marginBottom: "0px" }}>
                                            <select
                                                id="OrderUnLockValue"
                                                data-id="0"
                                            // value={unlockValue}
                                            // onChange={handleSelectChange}
                                            >
                                                <option value="1">Manager Password Required</option>
                                            </select>
                                        </span>
                                        <span className="mt-1">
                                            <div className="toggle-bx text-center">
                                                <label className="switch mb-0">
                                                    <input
                                                        type="checkbox"
                                                        id="OrderLock"
                                                        data-id="0"
                                                    // checked={orderLock}
                                                    // onChange={handleCheckboxChange}
                                                    />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="input-bx">
                                        <h6>Lock Behavior When Issuing Bill </h6> <span>
                                            <div className="toggle-bx text-center">
                                                <label className="switch mb-0">
                                                    <input type="checkbox" id="LockBehaviorWhenIssueingBill" data-id="0" onchange="UpdateTableQRWorflowSetting(this)" />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>

                                        </span>
                                    </div>
                                    <div className="input-bx">
                                        <h6>Lock Order When Placing Order</h6>
                                        <span className="mt-1">
                                            <div className="toggle-bx text-center">
                                                <label className="switch mb-0">
                                                    <input type="checkbox" id="LockOrderWhenPlacingOrder" data-id="0" onchange="UpdateTableQRWorflowSetting(this)" />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="input-bx">
                                        <h6>Lock Order When Order Is In Pending</h6>
                                        <span className="mt-1">
                                            <div className="toggle-bx text-center">
                                                <label className="switch mb-0">
                                                    <input type="checkbox" id="OrderIsInPending_LockOrder" data-id="0" onchange="UpdateTableQRWorflowSetting(this)" />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                        </span>
                                    </div>
                                    <br />
                                    <div className="table-input text-left mb-3">
                                        <h6 className="font-weight-bold">
                                            SET PRODUCT VIEW TYPE<i className="fa fa-question-circle" aria-hidden="true"></i>
                                        </h6>
                                        <div className="input-bx">
                                            <h6>PRODUCT VIEW</h6>
                                            <span className="mt-1">
                                                <span className="form-group">
                                                    <select
                                                        id="SetProductViewType_Table"
                                                        data-id="0"
                                                    // value={viewType}
                                                    // onChange={handleSelectChange}
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
    );
};

export default RestaurantLayout;
