import React, { useState } from 'react'

type Props = {}

export default function ManageProfile({ }: Props) {
    const [activeTab, setActiveTab] = useState<string>('store_timing');
    return (
        <div className='p-body'>
            <div id="contentWrapper_RestaurantLayout" className="content-wrapper timing_stores">
                <div className="breadcrumb-scroll">
                    <div className="breadcrumn-height">
                        <div>
                            <div className="profile">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-12">
                                            <h6>Restaurant Info</h6>
                                            <div>
                                                <div className="b-color border border-1">
                                                    <div className="row px-2">
                                                        <div className="col text-right pr-3"></div>
                                                        <div className="pad-add">
                                                            <a
                                                                href="#"
                                                                // onClick={() => EditRestaurantInfo_ManageProfile()}
                                                                className="a-right d-none"
                                                                style={{ zIndex: 999999 }}
                                                            >
                                                                <i className="fa fa-pencil-square"></i>
                                                            </a>
                                                            <form>
                                                                <div className="form-row align-items-center">
                                                                    <div className="form-group col-md-6 mb-0">
                                                                        <div className="logo-detail">
                                                                            <h5>Logo</h5>
                                                                            <div className="mylogo">
                                                                                <div className="imageWrapper">
                                                                                    <img
                                                                                        className="image"
                                                                                        id="imgIconImage_RestaurantManageProfile"
                                                                                        src="./Content/ImageUploads/WebMenu/darkcake2_d0a43ec52b8246c8b5d9d1dce8cdce91.png"
                                                                                        alt="Logo"
                                                                                    />
                                                                                </div>
                                                                                <button type="button" className="file-upload">
                                                                                    <input type="file" id="file_IconImage_RestaurantManageProfile" className="file-input" />
                                                                                    Choose File
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="form-group col-md-6 mb-1">
                                                                        <label htmlFor="inputName3">
                                                                            Trading Name <span className="requiredFieldClass">*</span>
                                                                        </label>
                                                                        <input id="RestaurantName_ManageProfile" type="text" className="form-control" />
                                                                        <div id="error_RestaurantName_ManageProfile" className="errorsClass2"></div>
                                                                        <label htmlFor="inputDescription3" className="mt-2">
                                                                            Description <span className="requiredFieldClass">*</span>
                                                                        </label>
                                                                        <input type="text" className="form-control" id="RestaurantDescription_ManageProfile" />
                                                                        <div id="error_RestaurantDescription_ManageProfile" className="errorsClass2"></div>
                                                                    </div>
                                                                </div>

                                                                <div className="form-row mt-3">
                                                                    <div className="form-group col-md-4 mb-1">
                                                                        <label htmlFor="Email_ManageProfile">Restaurant Email</label>
                                                                        <input type="text" className="form-control" id="Email_ManageProfile" disabled />
                                                                    </div>
                                                                    <div className="form-group col-md-4 mb-1">
                                                                        <label htmlFor="inputEmail3">
                                                                            Alternate Email <span className="requiredFieldClass">*</span>
                                                                        </label>
                                                                        <input type="text" className="form-control" id="RestaurantEmail_ManageProfile" />
                                                                        <div id="error_RestaurantEmail_ManageProfile" className="errorsClass2"></div>
                                                                    </div>
                                                                    <div className="form-group col-md-4 mb-1">
                                                                        <label htmlFor="inputPhone3">
                                                                            Contact Phone <span className="requiredFieldClass">*</span>
                                                                        </label>
                                                                        <div className="input-group">
                                                                            <div className="input-group-prepend" style={{ height: "40px", display: "none" }}>
                                                                                <span className="input-group-text" style={{ color: "#495057" }}>+64</span>
                                                                            </div>
                                                                            <input type="text" className="form-control" id="RestaurantPhoneNumber_ManageProfile" />
                                                                        </div>
                                                                        <div id="error_RestaurantPhoneNumber_ManageProfile" className="errorsClass2"></div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                            <div id="btnUpdateRestaurantInfo_ManageProfile" className="row text-right" style={{ marginTop: "20px" }}>
                                                                <div className="col-12">
                                                                    <a href="#">
                                                                        <button type="button" className="btm_button_pro"
                                                                        // onClick={() => btnUpdateRestaurantInfo_ManageProfile()}
                                                                        >
                                                                            SAVE
                                                                        </button>
                                                                    </a>
                                                                    <a href="#">
                                                                        <button type="button" className="btm_button_pro"
                                                                        // onClick={() => btnCancelRestaurantInfo_ManageProfile()}
                                                                        >
                                                                            Cancel
                                                                        </button>
                                                                    </a>
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
                            <div className="wrapper-navs_wraps">
                                <div className="container-fluid">
                                    <div className="row">
                                        <h6 className="trading px-0">Trading hours</h6>
                                        <div className="col-md-12 col-lg-12 col-sm-12 border bg-white bxshadow px-0">
                                            <input
                                                type="hidden"
                                                id="hdn_T_SoftwareSettingRestaurant"
                                                value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0ZDMxMTkyMC1mNzg5LTRkY2MtYWEyZi0yNTg0OTYwMWQ2ODMiLCJsb2dpbmlkIjoiMjAiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJSZXN0YXVyYW50IiwiZXhwIjoxNzMwNDQ0Mzc3LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjYxNzQzIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo2MTc0MyJ9.aF5cnWvTRAvwJ-JIe3v13xYtPvV4XhnLQRvUtBoeRF8"
                                            />
                                            <input type="hidden" id="hdn_RLID_SoftwareSettingRestaurant" value="0" />
                                            <ul className="nav nav-tabs software_settings" role="tablist">
                                                {/* <!-- <li class="nav-item">
                                        <a class="nav-link active" data-toggle="tab" href="#online_order"
                                            onclick="ShowRestaurantTiming_DefaultTab_SoftwareSetting();">Store Timings</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link px-0" data-toggle="tab" href="#breakfast_lunch_dinner"
                                            onclick="RestaurantTables_SoftwareSetting();">Breakfast ,lunch, dinner-timings</a>
                                    </li> --> */}

                                            </ul>
                                            <div className="tab-content">
                                                <div id="online_order" className="container-fluid px-0 tab-pane active">
                                                    <div className="timing-cgt-desc store_information-wraps">
                                                        <div className="cgt-desc store_timimgs-wraps">
                                                            <div className="tabs_wraps-div">
                                                                <ul className="tabs online_store_timing clearfix">
                                                                    <li>
                                                                        <a
                                                                            id="tab_StoreTiming_SoftwareSetting"
                                                                            href="#store_timing"
                                                                            className={`nav-link ${activeTab === 'store_timing' ? 'active' : ''}`}
                                                                            data-toggle="tab"
                                                                            onClick={() => setActiveTab('store_timing')}
                                                                        // onClick={() => OpenStoreTiming_Tab_SoftwareSetting()}
                                                                        >
                                                                            STORE TIMINGS
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="#breakfast_lunch_dinner"
                                                                            className={`nav-link ${activeTab === 'breakfast_lunch_dinner' ? 'active' : ''}`}
                                                                            // onClick={() => RestaurantAdditionalTiming_SoftwareSetting()}
                                                                            onClick={() => setActiveTab('breakfast_lunch_dinner')}
                                                                        >
                                                                            BREAKFAST, LUNCH AND DINNER TIMING
                                                                        </a>
                                                                    </li>
                                                                </ul>

                                                            </div>
                                                            <div className="cgt-content">
                                                                <div id="store_timing" className={`tab ${activeTab === 'store_timing' ? 'active' : ''}`} style={{ display: activeTab === 'store_timing' ? 'block' : 'none' }}>
                                                                    <h4>Store Timings</h4>
                                                                    <div className="restaurant_wraps-timings">
                                                                        <div className="items_chckbox-wraps">
                                                                            <div className="col-md-12 col-lg-12 col-sm-12 weekly_restrutant-breaks">
                                                                                <div className="row">
                                                                                    <div className="col-md-5 col-lg-5 col-sm-5" style={{ display: 'flex' }}>
                                                                                        <div className="day_wraps">
                                                                                            <p className="day_wise mg-bottom-0">Sunday</p>
                                                                                            <span className="restaurant_wraps-open-close">
                                                                                                <label className="switch round_wraps">
                                                                                                    <input
                                                                                                        id="chkSunday_RestaurantTiming_SoftwareSetting"
                                                                                                        type="checkbox"
                                                                                                        // // onChnage={() => RestaurantDayStatus_Change(1)}
                                                                                                        defaultChecked
                                                                                                    />
                                                                                                    <span className="slider round"></span>
                                                                                                </label>
                                                                                            </span>
                                                                                            <span id="lblOpenCloseStatus_Sunday_RestaurantTiming_SoftwareSetting" className="weekly_name">
                                                                                                Open
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div id="dv_TimingSection_Sunday_RestaurantTiming_SoftwareSetting" className="col-md-7 col-lg-7 col-sm-7" style={{ padding: '0px' }}>
                                                                                        <div className="restruuent_timings-frm-to">
                                                                                            <div className="select_box timing_etc-wraps">
                                                                                                <select
                                                                                                    id="ddlOpeningTime_Sunday_RestaurantTiming_SoftwareSetting"
                                                                                                    className="form-control OpeningTimeCommonClass"
                                                                                                // // onChnage={() => OpeningDateChange_RestaurantTiming(1)}
                                                                                                >
                                                                                                    <option value="0">Select</option>
                                                                                                    <option value="12:00 AM">12:00 AM</option>
                                                                                                    <option value="12:00 AM">12:00 AM</option>
                                                                                                    {/* Additional options */}
                                                                                                </select>
                                                                                            </div>
                                                                                            <p className="from_time">
                                                                                                <span> to </span>
                                                                                            </p>
                                                                                            <div className="select_box timing_etc-wraps">
                                                                                                <select id="ddlClosingTime_Sunday_RestaurantTiming_SoftwareSetting" className="form-control ClosingTimeCommonClass">
                                                                                                    <option value="0">Select</option>
                                                                                                    <option value="12:15 AM">12:15 AM</option>
                                                                                                    {/* Additional options */}
                                                                                                </select>
                                                                                            </div>
                                                                                            <div className="mini_carts">
                                                                                                <h2 className="heading_wraps">
                                                                                                    <span className="cart_wrap-cion">
                                                                                                        <a href="javascript:;"
                                                                                                        // onClick={() => SetLunchBreak_RestaurantTiming(1)}
                                                                                                        >
                                                                                                            Lunch Break
                                                                                                            <div id="lblLunchBreak_Sunday_RestaurantTiming_SoftwareSetting" style={{ color: 'red' }}>
                                                                                                                to
                                                                                                            </div>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                </h2>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="row">
                                                                                            <div className="col-md-12 col-lg-12 col-sm-12">
                                                                                                <div id="sunday_error_RestaurantTiming_SoftwareSetting" className="errorsClass2 errClassRestaurantTiming_SoftwareSetting"></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-12 col-lg-12 col-sm-12 weekly_restrutant-breaks">
                                                                                <div className="row">
                                                                                    <div className="col-md-5 col-lg-5 col-sm-5" style={{ display: 'flex' }}>
                                                                                        <div className="day_wraps">
                                                                                            <p className="day_wise mg-bottom-0">Monday</p>
                                                                                            <span className="restaurant_wraps-open-close">
                                                                                                <label className="switch round_wraps">
                                                                                                    <input
                                                                                                        id="chkSunday_RestaurantTiming_SoftwareSetting"
                                                                                                        type="checkbox"
                                                                                                        // onChnage={() => RestaurantDayStatus_Change(1)}
                                                                                                        defaultChecked
                                                                                                    />
                                                                                                    <span className="slider round"></span>
                                                                                                </label>
                                                                                            </span>
                                                                                            <span id="lblOpenCloseStatus_Sunday_RestaurantTiming_SoftwareSetting" className="weekly_name">
                                                                                                Open
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div id="dv_TimingSection_Sunday_RestaurantTiming_SoftwareSetting" className="col-md-7 col-lg-7 col-sm-7" style={{ padding: '0px' }}>
                                                                                        <div className="restruuent_timings-frm-to">
                                                                                            <div className="select_box timing_etc-wraps">
                                                                                                <select
                                                                                                    id="ddlOpeningTime_Sunday_RestaurantTiming_SoftwareSetting"
                                                                                                    className="form-control OpeningTimeCommonClass"
                                                                                                // onChnage={() => OpeningDateChange_RestaurantTiming(1)}
                                                                                                >
                                                                                                    <option value="0">Select</option>
                                                                                                    <option value="12:00 AM">12:00 AM</option>
                                                                                                    {/* Additional options */}
                                                                                                </select>
                                                                                            </div>
                                                                                            <p className="from_time">
                                                                                                <span> to </span>
                                                                                            </p>
                                                                                            <div className="select_box timing_etc-wraps">
                                                                                                <select id="ddlClosingTime_Sunday_RestaurantTiming_SoftwareSetting" className="form-control ClosingTimeCommonClass">
                                                                                                    <option value="0">Select</option>
                                                                                                    <option value="12:15 AM">12:15 AM</option>
                                                                                                    {/* Additional options */}
                                                                                                </select>
                                                                                            </div>
                                                                                            <div className="mini_carts">
                                                                                                <h2 className="heading_wraps">
                                                                                                    <span className="cart_wrap-cion">
                                                                                                        <a href="javascript:;"
                                                                                                        // onClick={() => SetLunchBreak_RestaurantTiming(1)}
                                                                                                        >
                                                                                                            Lunch Break
                                                                                                            <div id="lblLunchBreak_Sunday_RestaurantTiming_SoftwareSetting" style={{ color: 'red' }}>
                                                                                                                to
                                                                                                            </div>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                </h2>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="row">
                                                                                            <div className="col-md-12 col-lg-12 col-sm-12">
                                                                                                <div id="sunday_error_RestaurantTiming_SoftwareSetting" className="errorsClass2 errClassRestaurantTiming_SoftwareSetting"></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-12 col-lg-12 col-sm-12 weekly_restrutant-breaks">
                                                                                <div className="row">
                                                                                    <div className="col-md-5 col-lg-5 col-sm-5" style={{ display: 'flex' }}>
                                                                                        <div className="day_wraps">
                                                                                            <p className="day_wise mg-bottom-0">Tuesday</p>
                                                                                            <span className="restaurant_wraps-open-close">
                                                                                                <label className="switch round_wraps">
                                                                                                    <input
                                                                                                        id="chkSunday_RestaurantTiming_SoftwareSetting"
                                                                                                        type="checkbox"
                                                                                                        // onChnage={() => RestaurantDayStatus_Change(1)}
                                                                                                        defaultChecked
                                                                                                    />
                                                                                                    <span className="slider round"></span>
                                                                                                </label>
                                                                                            </span>
                                                                                            <span id="lblOpenCloseStatus_Sunday_RestaurantTiming_SoftwareSetting" className="weekly_name">
                                                                                                Open
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div id="dv_TimingSection_Sunday_RestaurantTiming_SoftwareSetting" className="col-md-7 col-lg-7 col-sm-7" style={{ padding: '0px' }}>
                                                                                        <div className="restruuent_timings-frm-to">
                                                                                            <div className="select_box timing_etc-wraps">
                                                                                                <select
                                                                                                    id="ddlOpeningTime_Sunday_RestaurantTiming_SoftwareSetting"
                                                                                                    className="form-control OpeningTimeCommonClass"
                                                                                                // // onChnage={() => OpeningDateChange_RestaurantTiming(1)}
                                                                                                >
                                                                                                    <option value="0">Select</option>
                                                                                                    <option value="12:00 AM">12:00 AM</option>
                                                                                                    {/* Additional options */}
                                                                                                </select>
                                                                                            </div>
                                                                                            <p className="from_time">
                                                                                                <span> to </span>
                                                                                            </p>
                                                                                            <div className="select_box timing_etc-wraps">
                                                                                                <select id="ddlClosingTime_Sunday_RestaurantTiming_SoftwareSetting" className="form-control ClosingTimeCommonClass">
                                                                                                    <option value="0">Select</option>
                                                                                                    <option value="12:15 AM">12:15 AM</option>
                                                                                                    {/* Additional options */}
                                                                                                </select>
                                                                                            </div>
                                                                                            <div className="mini_carts">
                                                                                                <h2 className="heading_wraps">
                                                                                                    <span className="cart_wrap-cion">
                                                                                                        <a href="javascript:;"
                                                                                                        // onClick={() => SetLunchBreak_RestaurantTiming(1)}
                                                                                                        >
                                                                                                            Lunch Break
                                                                                                            <div id="lblLunchBreak_Sunday_RestaurantTiming_SoftwareSetting" style={{ color: 'red' }}>
                                                                                                                to
                                                                                                            </div>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                </h2>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="row">
                                                                                            <div className="col-md-12 col-lg-12 col-sm-12">
                                                                                                <div id="sunday_error_RestaurantTiming_SoftwareSetting" className="errorsClass2 errClassRestaurantTiming_SoftwareSetting"></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-12 col-lg-12 col-sm-12 weekly_restrutant-breaks">
                                                                                <div className="row">
                                                                                    <div className="col-md-5 col-lg-5 col-sm-5" style={{ display: 'flex' }}>
                                                                                        <div className="day_wraps">
                                                                                            <p className="day_wise mg-bottom-0">Wednesday</p>
                                                                                            <span className="restaurant_wraps-open-close">
                                                                                                <label className="switch round_wraps">
                                                                                                    <input
                                                                                                        id="chkSunday_RestaurantTiming_SoftwareSetting"
                                                                                                        type="checkbox"
                                                                                                        // // onChnage={() => RestaurantDayStatus_Change(1)}
                                                                                                        defaultChecked
                                                                                                    />
                                                                                                    <span className="slider round"></span>
                                                                                                </label>
                                                                                            </span>
                                                                                            <span id="lblOpenCloseStatus_Sunday_RestaurantTiming_SoftwareSetting" className="weekly_name">
                                                                                                Open
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div id="dv_TimingSection_Sunday_RestaurantTiming_SoftwareSetting" className="col-md-7 col-lg-7 col-sm-7" style={{ padding: '0px' }}>
                                                                                        <div className="restruuent_timings-frm-to">
                                                                                            <div className="select_box timing_etc-wraps">
                                                                                                <select
                                                                                                    id="ddlOpeningTime_Sunday_RestaurantTiming_SoftwareSetting"
                                                                                                    className="form-control OpeningTimeCommonClass"
                                                                                                // // onChnage={() => OpeningDateChange_RestaurantTiming(1)}
                                                                                                >
                                                                                                    <option value="0">Select</option>
                                                                                                    <option value="12:00 AM">12:00 AM</option>
                                                                                                    {/* Additional options */}
                                                                                                </select>
                                                                                            </div>
                                                                                            <p className="from_time">
                                                                                                <span> to </span>
                                                                                            </p>
                                                                                            <div className="select_box timing_etc-wraps">
                                                                                                <select id="ddlClosingTime_Sunday_RestaurantTiming_SoftwareSetting" className="form-control ClosingTimeCommonClass">
                                                                                                    <option value="0">Select</option>
                                                                                                    <option value="12:15 AM">12:15 AM</option>
                                                                                                    {/* Additional options */}
                                                                                                </select>
                                                                                            </div>
                                                                                            <div className="mini_carts">
                                                                                                <h2 className="heading_wraps">
                                                                                                    <span className="cart_wrap-cion">
                                                                                                        <a href="javascript:;"
                                                                                                        // onClick={() => SetLunchBreak_RestaurantTiming(1)}
                                                                                                        >
                                                                                                            Lunch Break
                                                                                                            <div id="lblLunchBreak_Sunday_RestaurantTiming_SoftwareSetting" style={{ color: 'red' }}>
                                                                                                                to
                                                                                                            </div>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                </h2>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="row">
                                                                                            <div className="col-md-12 col-lg-12 col-sm-12">
                                                                                                <div id="sunday_error_RestaurantTiming_SoftwareSetting" className="errorsClass2 errClassRestaurantTiming_SoftwareSetting"></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-12 col-lg-12 col-sm-12 weekly_restrutant-breaks">
                                                                                <div className="row">
                                                                                    <div className="col-md-5 col-lg-5 col-sm-5" style={{ display: 'flex' }}>
                                                                                        <div className="day_wraps">
                                                                                            <p className="day_wise mg-bottom-0">Thursday</p>
                                                                                            <span className="restaurant_wraps-open-close">
                                                                                                <label className="switch round_wraps">
                                                                                                    <input
                                                                                                        id="chkSunday_RestaurantTiming_SoftwareSetting"
                                                                                                        type="checkbox"
                                                                                                        // // onChnage={() => RestaurantDayStatus_Change(1)}
                                                                                                        defaultChecked
                                                                                                    />
                                                                                                    <span className="slider round"></span>
                                                                                                </label>
                                                                                            </span>
                                                                                            <span id="lblOpenCloseStatus_Sunday_RestaurantTiming_SoftwareSetting" className="weekly_name">
                                                                                                Open
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div id="dv_TimingSection_Sunday_RestaurantTiming_SoftwareSetting" className="col-md-7 col-lg-7 col-sm-7" style={{ padding: '0px' }}>
                                                                                        <div className="restruuent_timings-frm-to">
                                                                                            <div className="select_box timing_etc-wraps">
                                                                                                <select
                                                                                                    id="ddlOpeningTime_Sunday_RestaurantTiming_SoftwareSetting"
                                                                                                    className="form-control OpeningTimeCommonClass"
                                                                                                // // onChnage={() => OpeningDateChange_RestaurantTiming(1)}
                                                                                                >
                                                                                                    <option value="0">Select</option>
                                                                                                    <option value="12:00 AM">12:00 AM</option>
                                                                                                    {/* Additional options */}
                                                                                                </select>
                                                                                            </div>
                                                                                            <p className="from_time">
                                                                                                <span> to </span>
                                                                                            </p>
                                                                                            <div className="select_box timing_etc-wraps">
                                                                                                <select id="ddlClosingTime_Sunday_RestaurantTiming_SoftwareSetting" className="form-control ClosingTimeCommonClass">
                                                                                                    <option value="0">Select</option>
                                                                                                    <option value="12:15 AM">12:15 AM</option>
                                                                                                    {/* Additional options */}
                                                                                                </select>
                                                                                            </div>
                                                                                            <div className="mini_carts">
                                                                                                <h2 className="heading_wraps">
                                                                                                    <span className="cart_wrap-cion">
                                                                                                        <a href="javascript:;"
                                                                                                        // onClick={() => SetLunchBreak_RestaurantTiming(1)}
                                                                                                        >
                                                                                                            Lunch Break
                                                                                                            <div id="lblLunchBreak_Sunday_RestaurantTiming_SoftwareSetting" style={{ color: 'red' }}>
                                                                                                                to
                                                                                                            </div>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                </h2>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="row">
                                                                                            <div className="col-md-12 col-lg-12 col-sm-12">
                                                                                                <div id="sunday_error_RestaurantTiming_SoftwareSetting" className="errorsClass2 errClassRestaurantTiming_SoftwareSetting"></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-12 col-lg-12 col-sm-12 weekly_restrutant-breaks">
                                                                                <div className="row">
                                                                                    <div className="col-md-5 col-lg-5 col-sm-5" style={{ display: 'flex' }}>
                                                                                        <div className="day_wraps">
                                                                                            <p className="day_wise mg-bottom-0">Friday</p>
                                                                                            <span className="restaurant_wraps-open-close">
                                                                                                <label className="switch round_wraps">
                                                                                                    <input
                                                                                                        id="chkSunday_RestaurantTiming_SoftwareSetting"
                                                                                                        type="checkbox"
                                                                                                        // // onChnage={() => RestaurantDayStatus_Change(1)}
                                                                                                        defaultChecked
                                                                                                    />
                                                                                                    <span className="slider round"></span>
                                                                                                </label>
                                                                                            </span>
                                                                                            <span id="lblOpenCloseStatus_Sunday_RestaurantTiming_SoftwareSetting" className="weekly_name">
                                                                                                Open
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div id="dv_TimingSection_Sunday_RestaurantTiming_SoftwareSetting" className="col-md-7 col-lg-7 col-sm-7" style={{ padding: '0px' }}>
                                                                                        <div className="restruuent_timings-frm-to">
                                                                                            <div className="select_box timing_etc-wraps">
                                                                                                <select
                                                                                                    id="ddlOpeningTime_Sunday_RestaurantTiming_SoftwareSetting"
                                                                                                    className="form-control OpeningTimeCommonClass"
                                                                                                // // onChnage={() => OpeningDateChange_RestaurantTiming(1)}
                                                                                                >
                                                                                                    <option value="0">Select</option>
                                                                                                    <option value="12:00 AM">12:00 AM</option>
                                                                                                    {/* Additional options */}
                                                                                                </select>
                                                                                            </div>
                                                                                            <p className="from_time">
                                                                                                <span> to </span>
                                                                                            </p>
                                                                                            <div className="select_box timing_etc-wraps">
                                                                                                <select id="ddlClosingTime_Sunday_RestaurantTiming_SoftwareSetting" className="form-control ClosingTimeCommonClass">
                                                                                                    <option value="0">Select</option>
                                                                                                    <option value="12:15 AM">12:15 AM</option>
                                                                                                    {/* Additional options */}
                                                                                                </select>
                                                                                            </div>
                                                                                            <div className="mini_carts">
                                                                                                <h2 className="heading_wraps">
                                                                                                    <span className="cart_wrap-cion">
                                                                                                        <a href="javascript:;"
                                                                                                        // onClick={() => SetLunchBreak_RestaurantTiming(1)}
                                                                                                        >
                                                                                                            Lunch Break
                                                                                                            <div id="lblLunchBreak_Sunday_RestaurantTiming_SoftwareSetting" style={{ color: 'red' }}>
                                                                                                                to
                                                                                                            </div>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                </h2>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="row">
                                                                                            <div className="col-md-12 col-lg-12 col-sm-12">
                                                                                                <div id="sunday_error_RestaurantTiming_SoftwareSetting" className="errorsClass2 errClassRestaurantTiming_SoftwareSetting"></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-12 col-lg-12 col-sm-12 weekly_restrutant-breaks">
                                                                                <div className="row">
                                                                                    <div className="col-md-5 col-lg-5 col-sm-5" style={{ display: 'flex' }}>
                                                                                        <div className="day_wraps">
                                                                                            <p className="day_wise mg-bottom-0">Saturday</p>
                                                                                            <span className="restaurant_wraps-open-close">
                                                                                                <label className="switch round_wraps">
                                                                                                    <input
                                                                                                        id="chkSunday_RestaurantTiming_SoftwareSetting"
                                                                                                        type="checkbox"
                                                                                                        // // onChnage={() => RestaurantDayStatus_Change(1)}
                                                                                                        defaultChecked
                                                                                                    />
                                                                                                    <span className="slider round"></span>
                                                                                                </label>
                                                                                            </span>
                                                                                            <span id="lblOpenCloseStatus_Sunday_RestaurantTiming_SoftwareSetting" className="weekly_name">
                                                                                                Open
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div id="dv_TimingSection_Sunday_RestaurantTiming_SoftwareSetting" className="col-md-7 col-lg-7 col-sm-7" style={{ padding: '0px' }}>
                                                                                        <div className="restruuent_timings-frm-to">
                                                                                            <div className="select_box timing_etc-wraps">
                                                                                                <select
                                                                                                    id="ddlOpeningTime_Sunday_RestaurantTiming_SoftwareSetting"
                                                                                                    className="form-control OpeningTimeCommonClass"
                                                                                                // // onChnage={() => OpeningDateChange_RestaurantTiming(1)}
                                                                                                >
                                                                                                    <option value="0">Select</option>
                                                                                                    <option value="12:00 AM">12:00 AM</option>
                                                                                                    {/* Additional options */}
                                                                                                </select>
                                                                                            </div>
                                                                                            <p className="from_time">
                                                                                                <span> to </span>
                                                                                            </p>
                                                                                            <div className="select_box timing_etc-wraps">
                                                                                                <select id="ddlClosingTime_Sunday_RestaurantTiming_SoftwareSetting" className="form-control ClosingTimeCommonClass">
                                                                                                    <option value="0">Select</option>
                                                                                                    <option value="12:15 AM">12:15 AM</option>
                                                                                                    {/* Additional options */}
                                                                                                </select>
                                                                                            </div>
                                                                                            <div className="mini_carts">
                                                                                                <h2 className="heading_wraps">
                                                                                                    <span className="cart_wrap-cion">
                                                                                                        <a href="javascript:;"
                                                                                                        // onClick={() => SetLunchBreak_RestaurantTiming(1)}
                                                                                                        >
                                                                                                            Lunch Break
                                                                                                            <div id="lblLunchBreak_Sunday_RestaurantTiming_SoftwareSetting" style={{ color: 'red' }}>
                                                                                                                to
                                                                                                            </div>
                                                                                                        </a>
                                                                                                    </span>
                                                                                                </h2>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="row">
                                                                                            <div className="col-md-12 col-lg-12 col-sm-12">
                                                                                                <div id="sunday_error_RestaurantTiming_SoftwareSetting" className="errorsClass2 errClassRestaurantTiming_SoftwareSetting"></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div id="breakfast_lunch_dinner" className="tab" style={{ display: 'none' }}>
                                                                                <h4>Breakfast, lunch and dinner timing</h4>
                                                                                <div className="items_chckbox-wraps wrap_delay-items">
                                                                                    <div className="order_delay-wraps" style={{ marginBottom: '0px' }}>
                                                                                        <p>Breakfast From</p>
                                                                                        <div className="select_box delay_order-select">
                                                                                            <select id="ddlBreakFast_StartTime_RestaurantAdditionalTiming_SoftwareSetting" className="form-control CommonRestaurantAdditionalTimingClass_SoftwareSetting">
                                                                                                <option value="0">Select</option>
                                                                                                <option value="12:00 AM">12:00 AM</option>
                                                                                                <option value="12:01 AM">12:01 AM</option>
                                                                                                <option value="11:59 PM">11:59 PM</option>
                                                                                            </select>
                                                                                        </div>
                                                                                        <p className="to_wraps">to</p>
                                                                                        <div className="select_box delay_order-select">
                                                                                            <select id="ddlBreakFast_EndTime_RestaurantAdditionalTiming_SoftwareSetting" className="form-control CommonRestaurantAdditionalTimingClass_SoftwareSetting">
                                                                                                <option value="0">Select</option>
                                                                                                <option value="12:00 AM">12:00 AM</option>
                                                                                                <option value="11:59 PM">11:59 PM</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div id="breakTime_error_RestaurantAdditionalTiming_SoftwareSetting" className="errorsClass2 text-center errClassRestaurantAdditionalTiming_SoftwareSetting"></div>

                                                                                    <div className="order_delay-wraps" style={{ marginBottom: '0px', marginTop: '30px' }}>
                                                                                        <p>Lunch From</p>
                                                                                        <div className="select_box delay_order-select">
                                                                                            <select id="ddlLunch_StartTime_RestaurantAdditionalTiming_SoftwareSetting" className="form-control CommonRestaurantAdditionalTimingClass_SoftwareSetting">
                                                                                                <option value="0">Select</option>
                                                                                                <option value="12:00 AM">12:00 AM</option>
                                                                                                <option value="11:59 PM">11:59 PM</option>
                                                                                            </select>
                                                                                        </div>
                                                                                        <p className="to_wraps">to</p>
                                                                                        <div className="select_box delay_order-select">
                                                                                            <select id="ddlLunch_EndTime_RestaurantAdditionalTiming_SoftwareSetting" className="form-control CommonRestaurantAdditionalTimingClass_SoftwareSetting">
                                                                                                <option value="0">Select</option>
                                                                                                <option value="12:00 AM">12:00 AM</option>
                                                                                                <option value="12:01 AM">12:01 AM</option>
                                                                                                <option value="11:58 PM">11:58 PM</option>
                                                                                                <option value="11:59 PM">11:59 PM</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div id="lunchTime_error_RestaurantAdditionalTiming_SoftwareSetting" className="errorsClass2 text-center errClassRestaurantAdditionalTiming_SoftwareSetting"></div>

                                                                                    <div className="order_delay-wraps" style={{ marginBottom: '0px', marginTop: '30px' }}>
                                                                                        <p>Dinner From</p>
                                                                                        <div className="select_box delay_order-select">
                                                                                            <select id="ddlDinner_StartTime_RestaurantAdditionalTiming_SoftwareSetting" className="form-control CommonRestaurantAdditionalTimingClass_SoftwareSetting">
                                                                                                <option value="0">Select</option>
                                                                                                <option value="12:00 AM">12:00 AM</option>
                                                                                                <option value="11:59 PM">11:59 PM</option>
                                                                                            </select>
                                                                                        </div>
                                                                                        <p className="to_wraps">to</p>
                                                                                        <div className="select_box delay_order-select">
                                                                                            <select id="ddlDinner_EndTime_RestaurantAdditionalTiming_SoftwareSetting" className="form-control CommonRestaurantAdditionalTimingClass_SoftwareSetting">
                                                                                                <option value="0">Select</option>
                                                                                                <option value="12:00 AM">12:00 AM</option>
                                                                                                <option value="11:56 PM">11:56 PM</option>
                                                                                                <option value="11:57 PM">11:57 PM</option>
                                                                                                <option value="11:58 PM">11:58 PM</option>
                                                                                                <option value="11:59 PM">11:59 PM</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div id="dinnerTime_error_RestaurantAdditionalTiming_SoftwareSetting" className="errorsClass2 text-center errClassRestaurantAdditionalTiming_SoftwareSetting"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row custom_add_pro_rpw button_botm" style={{ paddingTop: '30px' }}>
                                                                                <div className="col-sm-12">
                                                                                    <a href="javascript:void(0)">
                                                                                        <button className="btm_button_pro">
                                                                                            SAVE
                                                                                        </button>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="breakfast_lunch_dinner" className={`tab ${activeTab === 'breakfast_lunch_dinner' ? 'active' : ''}`} style={{ display: activeTab === 'store_timing' ? 'none' : 'block' }}>
                                                                    <h4>Breakfast, lunch and dinner timing</h4>
                                                                    <div className="items_chckbox-wraps wrap_delay-items">
                                                                        <div className="order_delay-wraps" style={{ marginBottom: '0px' }}>
                                                                            <p>Breakfast From</p>
                                                                            <div className="select_box delay_order-select">
                                                                                <select id="ddlBreakFast_StartTime_RestaurantAdditionalTiming_SoftwareSetting" className="form-control CommonRestaurantAdditionalTimingClass_SoftwareSetting">
                                                                                    <option value="0">Select</option>
                                                                                    <option value="11:58 PM">11:58 PM</option>
                                                                                    <option value="11:59 PM">11:59 PM</option>
                                                                                </select>
                                                                            </div>
                                                                            <p className="to_wraps">to</p>
                                                                            <div className="select_box delay_order-select">
                                                                                <select id="ddlBreakFast_EndTime_RestaurantAdditionalTiming_SoftwareSetting" className="form-control CommonRestaurantAdditionalTimingClass_SoftwareSetting">
                                                                                    <option value="0">Select</option>
                                                                                    <option value="12:00 AM">12:00 AM</option>
                                                                                    <option value="11:59 PM">11:59 PM</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div id="breakTime_error_RestaurantAdditionalTiming_SoftwareSetting" className="errorsClass2 text-center errClassRestaurantAdditionalTiming_SoftwareSetting"></div>

                                                                        <div className="order_delay-wraps" style={{ marginBottom: '0px', marginTop: '30px' }}>
                                                                            <p>Lunch From</p>
                                                                            <div className="select_box delay_order-select">
                                                                                <select id="ddlLunch_StartTime_RestaurantAdditionalTiming_SoftwareSetting" className="form-control CommonRestaurantAdditionalTimingClass_SoftwareSetting">
                                                                                    <option value="0">Select</option>
                                                                                    <option value="12:00 AM">12:00 AM</option>
                                                                                    <option value="11:58 PM">11:58 PM</option>
                                                                                    <option value="11:59 PM">11:59 PM</option>
                                                                                </select>
                                                                            </div>
                                                                            <p className="to_wraps">to</p>
                                                                            <div className="select_box delay_order-select">
                                                                                <select id="ddlLunch_EndTime_RestaurantAdditionalTiming_SoftwareSetting" className="form-control CommonRestaurantAdditionalTimingClass_SoftwareSetting">
                                                                                    <option value="0">Select</option>
                                                                                    <option value="11:58 PM">11:58 PM</option>
                                                                                    <option value="11:59 PM">11:59 PM</option>
                                                                                </select>
                                                                            </div>
                                                                            <p className="to_wraps">to</p>
                                                                            <div className="select_box delay_order-select">
                                                                                <select id="ddlDinner_EndTime_RestaurantAdditionalTiming_SoftwareSetting" className="form-control CommonRestaurantAdditionalTimingClass_SoftwareSetting">
                                                                                    <option value="0">Select</option>
                                                                                    <option value="12:00 AM">12:00 AM</option>
                                                                                    <option value="11:58 PM">11:58 PM</option>
                                                                                    <option value="11:59 PM">11:59 PM</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div id="dinnerTime_error_RestaurantAdditionalTiming_SoftwareSetting" className="errorsClass2 text-center errClassRestaurantAdditionalTiming_SoftwareSetting"></div>
                                                                    </div>
                                                                    <div className="row custom_add_pro_rpw button_botm" style={{ paddingTop: '30px' }}>
                                                                        <div className="col-sm-12">
                                                                            <a href="javascript:;">
                                                                                <button className="btm_button_pro" /* onClick={SaveRestaurantAdditionalTiming_SoftwareSetting} */>SAVE</button>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="address px-0">
                                            <div style={{ position: 'relative' }}>
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-12 px-0">
                                                            <div className="row">
                                                                <h6 className="col-6 px-3">Address</h6>
                                                                <div className="col-6 text-end">
                                                                    <div className="form-check form-check-inline">
                                                                        <input
                                                                            className="form-check-input rdbLocationStyle"
                                                                            type="radio"
                                                                            name="rdbLocationPickOption"
                                                                            id="clCheck"
                                                                            value="CurrentLocation"
                                                                        // onClick={() => ShowingCurrentLocation(2)}
                                                                        />
                                                                        <label className="form-check-label lblLocationPickStyle" htmlFor="clCheck">
                                                                            Current Location<i className="input-helper"></i>
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-check form-check-inline">
                                                                        <input
                                                                            className="form-check-input rdbLocationStyle"
                                                                            type="radio"
                                                                            name="rdbLocationPickOption"
                                                                            id="manualCheck"
                                                                            value="Manual"
                                                                        />
                                                                        <label className="form-check-label lblLocationPickStyle" htmlFor="manualCheck">
                                                                            Manual<i className="input-helper"></i>
                                                                        </label>
                                                                    </div>
                                                                    <div style={{ display: 'inline-block' }}>
                                                                        <input
                                                                            id="autocomplete"
                                                                            type="text"
                                                                            placeholder="Enter Location"
                                                                            className="form-control pac-target-input"
                                                                            style={{ display: 'none' }}
                                                                            autoComplete="off"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="b-color">
                                                                <img src="./Content/Images/map.png" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="language-section mx-0">
                                                    <div className="container-fluid px-0">
                                                        <div className="row px-0 select-icon">
                                                            <div className="col-12">
                                                                <form>
                                                                    <div className="row">
                                                                        <div className="col-md-3">
                                                                            <div className="form-group">
                                                                                <label htmlFor="ddlLanuage_ManageProfile">
                                                                                    Language <span className="requiredFieldClass">*</span>
                                                                                </label>
                                                                                <div className="select_box">
                                                                                    <select
                                                                                        className="form-control select-bx py-1"
                                                                                        id="ddlLanuage_ManageProfile"
                                                                                    >
                                                                                        <option value="0">Select</option>
                                                                                        <option value="1">Chinese</option>
                                                                                        <option value="2">English</option>
                                                                                        <option value="3">Korean</option>
                                                                                        <option value="4">Punjabi</option>
                                                                                    </select>
                                                                                </div>
                                                                                <div
                                                                                    id="language_error_ManageProfile"
                                                                                    className="errorsClass2"
                                                                                ></div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-3 d-none">
                                                                            <div className="form-group">
                                                                                <label>
                                                                                    Country <span className="requiredFieldClass">*</span>
                                                                                </label>
                                                                                <select
                                                                                    className="form-control select2 select-bx py-1"
                                                                                    id="ddlCountry_ManageProfile"
                                                                                // onChnage={() => ChangeCountry()}
                                                                                >
                                                                                    <option value="0">Select</option>
                                                                                </select>
                                                                                <div id="country_error_ManageProfile" className="errorsClass2"></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-3 d-none">
                                                                            <div className="form-group">
                                                                                <label>
                                                                                    State <span className="requiredFieldClass">*</span>
                                                                                </label>
                                                                                <select
                                                                                    id="ddlState_ManageProfile"
                                                                                    className="form-control select2 select-bx py-1"
                                                                                // onChnage={() => ChangeState()}
                                                                                >
                                                                                    <option value="0">Select</option>
                                                                                </select>
                                                                                <div id="state_error_ManageProfile" className="errorsClass2"></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-3 d-none">
                                                                            <div className="form-group">
                                                                                <label>
                                                                                    City <span id="span_CityField_RequiredSign" className="requiredFieldClass">*</span>
                                                                                </label>
                                                                                <select id="ddlCity_ManageProfile" className="form-control select2 select-bx py-1">
                                                                                    <option value="0">Select</option>
                                                                                </select>
                                                                                <div id="city_error_ManageProfile" className="errorsClass2"></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-3">
                                                                            <div className="form-group mb-0">
                                                                                <label htmlFor="txtAddress_ManageProfile">
                                                                                    Address <span className="requiredFieldClass">*</span>
                                                                                </label>
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    id="txtAddress_ManageProfile"
                                                                                    placeholder="Enter Address"
                                                                                />
                                                                                <div id="address_error_ManageProfile" className="errorsClass2"></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-3">
                                                                            <h6 className="mt-3 mb-0 text-center">
                                                                                <span style={{ fontWeight: 550, fontSize: '17px' }}>
                                                                                    Longitude <span className="requiredFieldClass">*</span>:{' '}
                                                                                </span>
                                                                                <a href="javascript:;" id="txtLongitude_ManageProfile">174.764488</a>
                                                                            </h6>
                                                                        </div>
                                                                        <div className="col-md-3">
                                                                            <h6 className="mt-3 mb-0">
                                                                                <span style={{ fontWeight: 550, fontSize: '17px' }}>
                                                                                    Latitude <span className="requiredFieldClass">*</span>:{' '}
                                                                                </span>
                                                                                <a href="javascript:;" id="txtLatitude_ManageProfile">-36.850883</a>
                                                                            </h6>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row d-none">
                                                                        <div className="col-md-3 d-none">
                                                                            <div className="form-group">
                                                                                <label htmlFor="txtPostCode_ManageProfile">Zip</label>
                                                                                <input
                                                                                    type="number"
                                                                                    className="form-control"
                                                                                    id="txtPostCode_ManageProfile"
                                                                                    placeholder="Enter zip number"
                                                                                />
                                                                                <div id="zip_error_ManageProfile" className="errorsClass2"></div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-3">
                                                                            <div className="form-group">
                                                                                <label htmlFor="txtLongitude_ManageProfile">Longitude</label>
                                                                                <input
                                                                                    type="number"
                                                                                    className="form-control"
                                                                                    id="txtLongitude_ManageProfile"
                                                                                    readOnly
                                                                                />
                                                                                <div id="longitude_error_ManageProfile" className="errorsClass2"></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-3">
                                                                            <div className="form-group">
                                                                                <label htmlFor="txtLatitude_ManageProfile">Latitude</label>
                                                                                <input
                                                                                    type="number"
                                                                                    className="form-control"
                                                                                    id="txtLatitude_ManageProfile"
                                                                                    readOnly
                                                                                />
                                                                                <div id="latitude_error_ManageProfile" className="errorsClass2"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                                <div className="row text-right">
                                                                    <div className="col-12">
                                                                        <a href="javascript:;">
                                                                            <button className="btm_button_pro">SAVE</button>
                                                                        </a>
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
                    </div>
                </div>
            </div>
        </div>
    )
}