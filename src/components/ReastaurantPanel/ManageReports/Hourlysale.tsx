
import React, { useEffect, useRef, useState } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import EmailModal from './EmailModal';


const Hourlysale = () => {

    const [activeTab, setActiveTab] = useState<string>('hourlySale1');
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const toggleDropdown = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false); // Close dropdown when clicking outside
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleEmailModalOpen = () => {
        const emailModalButton = document.getElementById("btn_SendPDFReportEmail_RestaurantReports_Modal") as HTMLButtonElement;
        emailModalButton?.click();
    };

    const handleDateModal = () => {
        const dateModalButton = document.getElementById('btn_CustomDate_HourlySalesGraph_ManageReports_Modal') as HTMLButtonElement;
        dateModalButton?.click();
    };

    const closeDateModal = () => {
        const closeModalButton = document.getElementById('btnCancel_HourlySalesGraph_ManageReports_Modal') as HTMLButtonElement;
        closeModalButton?.click();
    };

    const options = {
        chart: {
            type: 'pie',
            backgroundColor: '#e6f0ff'
        },
        title: {
            text: 'Current-Year <br> Refund-Order-Reasons',
            y: -60,
            style: {
                fontWeight: 'bold',
                fontSize: '16px'
            }
        },
        tooltip: {
            pointFormat: '{point.percentage:.2f}% (${point.y})<br>{point.name}'
        },
        plotOptions: {
            pie: {
                innerSize: '60%' // Creates the donut effect
            }
        },
        legend: {
            enabled: true
        },
        series: [
            {
                name: 'Refund Reasons',
                colorByPoint: true,
                data: [
                    { name: 'Refund reason 3', y: 253, color: '#4aa3f0' }, // Light blue color
                    { name: 'Refund reason 4', y: 40, color: '#6a0dad' }  // Purple color
                ]
            }
        ]
    };

    return (
        <>
            <div id="hourly_sale" className=" container-fluid">
                <div className="cgt-desc">
                    <div className="tabs_wraps-div">
                        <ul className="tabs clearfix">
                            <li>
                                <a
                                    id="tab_HourlySalesReport_ManageRestaurantReports"
                                    className={`FinancialReportDataClassCommon ${activeTab === 'hourlySale1' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('hourlySale1')}
                                >
                                    HOURLY SALE
                                </a>
                            </li>
                            <li>
                                <a
                                    id="tab_BreakfastLunchDinnerReport_ManageRestaurantReports"
                                    className={`FinancialReportDataClassCommon ${activeTab === 'hourlySale2' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('hourlySale2')}
                                // onClick={() => GetBreakfastLunchDinnerGraphDataOfRestaurant(1)}
                                >
                                    BREAKFAST, LUNCH, DINNER
                                </a>
                            </li>
                        </ul>
                        <span
                            id="FilterOptionsMenu_HourlySalesReport"
                            ref={buttonRef}
                            className="dropbtn FilterOptionsMenuCommonClass Vector_horizental"
                            style={{ background: 'rgb(246, 248, 252)' }}
                            onClick={toggleDropdown}
                        >
                            <img
                                src="../../Content/Restaurant/icons/Vector_horizental.png"
                                alt="icon"
                                className="dropbtn vertical-menus"
                            />
                        </span>
                        <span
                            id="FilterOptionsMenu_BreakfastLunchDinnerReport"
                            className="dropbtn FilterOptionsMenuCommonClass Vector_horizental"
                            style={{ background: 'rgb(246, 248, 252)', display: 'none' }}
                        // onClick={() => ShowFilterGraphOption_BreakfastLunchDinnerReports_ManageReports()}
                        >
                            <img
                                src="../../Content/Restaurant/icons/Vector_horizental.png"
                                alt="icon"
                                className="dropbtn vertical-menus"
                            />
                        </span>
                    </div>
                    <div className="cgt-content">
                        <div id="hourly_sale1" style={{ display: activeTab === 'hourlySale1' ? 'block' : 'none' }}  >
                            <div
                                id="dllFilterGraphOption_HourlySalesReports_ManageReports"
                                className={`dropdown-content dropdownContent_HourlySalesReports ${isOpen ? 'show' : ''}`}
                                ref={dropdownRef}
                            >
                                <a
                                    id="optFilteration_Today_HourlySalesReports"
                                    href="javascript:;"
                                    className="optFilterationClass_HourlySalesReports "
                                // onClick={() => GetHourlySalesGraphDataOfRestaurant(1)}
                                >
                                    Today
                                </a>
                                <a
                                    id="optFilteration_CustomDate_HourlySalesReports"
                                    href="javascript:;"
                                    className="optFilterationClass_HourlySalesReports"
                                    onClick={handleDateModal}
                                >
                                    Custom Date
                                </a>
                            </div>
                            <div className="set-graph">
                                <div className="graph">
                                    <div
                                        id="lblSelectedFilterOption_HourlySaleReports_ManageReports"
                                        className="lblHeading_HourlySales_Style"
                                    >
                                        Today
                                    </div>
                                    <div className="product_sale-bars" style={{ float: 'left', width: '93%' }}>
                                        <div className="wrap_bar-prgress" style={{ marginBottom: '12px' }}>
                                            <div className="progress" style={{ marginBottom: '14px' }}>
                                                <div
                                                    id="dv_BreakfastProgress_ManageReports"
                                                    className="progress-bar orange"
                                                    style={{ width: '0%', background: 'rgb(87, 83, 190)' }}
                                                ></div>
                                            </div>
                                            <span
                                                id="lbl_BreakfastAmount_ManageReports"
                                                className="value_progress"
                                                style={{ marginTop: '-12px' }}
                                            >
                                                $0
                                            </span>
                                        </div>

                                        <div className="wrap_bar-prgress" style={{ marginBottom: '9px' }}>
                                            <div className="progress" style={{ marginBottom: '14px' }}>
                                                <div
                                                    id="dv_LunchProgress_ManageReports"
                                                    className="progress-bar orange"
                                                    style={{ width: '13.81%', background: 'rgb(253, 202, 64)' }}
                                                ></div>
                                            </div>
                                            <span
                                                id="lbl_LunchAmount_ManageReports"
                                                className="value_progress"
                                                style={{ marginTop: '-12px' }}
                                            >
                                                $75.55
                                            </span>
                                        </div>

                                        <div className="wrap_bar-prgress">
                                            <div className="progress">
                                                <div
                                                    id="dv_DinnerProgress_ManageReports"
                                                    className="progress-bar orange"
                                                    style={{ width: '86.19%', background: 'rgb(255, 92, 90)' }}
                                                ></div>
                                            </div>
                                            <span
                                                id="lbl_DinnerAmount_ManageReports"
                                                className="value_progress"
                                            >
                                                $471.55
                                            </span>
                                        </div>
                                    </div>

                                    <div className="clear"></div>
                                </div>
                            </div>
                            <hr className="space_wraps" />
                            <div className="pdf_reports">
                                <div className="wrap_pdf">
                                    <p
                                        className="Email_wraps-right"
                                        style={{ cursor: 'pointer' }}
                                        onClick={handleEmailModalOpen}
                                    >
                                        Email
                                    </p>

                                    <div className="container_content">
                                        <div
                                            className="invoice-box"
                                            style={{
                                                maxWidth: '1000px',
                                                margin: 'auto',
                                                padding: '10px',
                                                fontSize: '16px',
                                                lineHeight: '24px',
                                                color: '#555',
                                            }}
                                        >
                                            <h3
                                                style={{
                                                    textAlign: 'center',
                                                    color: '#5651BD',
                                                    fontStyle: 'italic',
                                                }}
                                            >
                                                Hourly Sales - Stock Item
                                            </h3>
                                            <p
                                                id="lblFilterValue_HourlySales_PDFReport_RestaurantReports"
                                                style={{ textAlign: 'center' }}
                                            >
                                                05 Nov 2024 00:00:00 to 05 Nov 2024 11:30:33
                                            </p>
                                            <div className="table-responsive">
                                                <table
                                                    id="tblHourlySales_PDFReport_RestaurantReports"
                                                    cellPadding="0"
                                                    cellSpacing="0"
                                                    style={{
                                                        width: '100%',
                                                        lineHeight: 'inherit',
                                                        textAlign: 'left',
                                                    }}
                                                >
                                                    <tbody>
                                                        <tr className="heading">
                                                            <td
                                                                colSpan="3"
                                                                style={{
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    background: 'transparent',
                                                                    fontWeight: 'bold',
                                                                    color: '#000',
                                                                    fontSize: '13px',
                                                                    width: '60%',
                                                                }}
                                                            ></td>

                                                            <td
                                                                colSpan="2"
                                                                style={{
                                                                    textAlign: 'center',
                                                                    padding: '2px',
                                                                    verticalAlign: 'top',
                                                                    background: 'transparent',
                                                                    color: '#555',
                                                                    fontSize: '16px',
                                                                    width: '20%',
                                                                }}
                                                            >
                                                                <p
                                                                    style={{
                                                                        borderBottom: '2px solid #000',
                                                                        textAlign: 'center',
                                                                        color: '#555',
                                                                        fontSize: '16px',
                                                                        marginBottom: '0px',
                                                                        paddingBottom: '0px',
                                                                    }}
                                                                >
                                                                    Sales
                                                                </p>
                                                            </td>

                                                            <td
                                                                colSpan="2"
                                                                style={{
                                                                    textAlign: 'center',
                                                                    padding: '2px',
                                                                    verticalAlign: 'top',
                                                                    background: 'transparent',
                                                                    color: '#555',
                                                                    fontSize: '16px',
                                                                    width: '20%',
                                                                }}
                                                            >
                                                                <p
                                                                    style={{
                                                                        borderBottom: '2px solid #000',
                                                                        textAlign: 'center',
                                                                        color: '#555',
                                                                        fontSize: '16px',
                                                                        marginBottom: '0px',
                                                                        paddingBottom: '0px',
                                                                    }}
                                                                >
                                                                    Profit
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        <tr className="heading">
                                                            <td
                                                                style={{
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    background: 'transparent',
                                                                    borderBottom: '1px solid #000',
                                                                    fontWeight: 'bold',
                                                                    color: '#000',
                                                                    fontSize: '13px',
                                                                    width: '15%',
                                                                }}
                                                            >
                                                                Product-Number
                                                            </td>
                                                            <td
                                                                style={{
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    background: 'transparent',
                                                                    borderBottom: '1px solid #000',
                                                                    fontWeight: 'bold',
                                                                    color: '#000',
                                                                    fontSize: '13px',
                                                                    width: '35%',
                                                                }}
                                                            >
                                                                Name
                                                            </td>
                                                            <td
                                                                style={{
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    background: 'transparent',
                                                                    borderBottom: '1px solid #000',
                                                                    fontWeight: 'bold',
                                                                    color: '#000',
                                                                    fontSize: '13px',
                                                                    width: '10%',
                                                                    textAlign: 'center',
                                                                }}
                                                            >
                                                                Quantity
                                                            </td>
                                                            <td
                                                                style={{
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    background: 'transparent',
                                                                    borderBottom: '1px solid #000',
                                                                    fontWeight: 'bold',
                                                                    color: '#000',
                                                                    fontSize: '13px',
                                                                    width: '10%',
                                                                    textAlign: 'center',
                                                                }}
                                                            >
                                                                Amount
                                                            </td>
                                                            <td
                                                                style={{
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    background: 'transparent',
                                                                    borderBottom: '1px solid #000',
                                                                    fontWeight: 'bold',
                                                                    color: '#000',
                                                                    fontSize: '13px',
                                                                    width: '10%',
                                                                    textAlign: 'center',
                                                                }}
                                                            >
                                                                %
                                                            </td>
                                                            <td
                                                                style={{
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    background: 'transparent',
                                                                    borderBottom: '1px solid #000',
                                                                    fontWeight: 'bold',
                                                                    color: '#000',
                                                                    fontSize: '13px',
                                                                    width: '10%',
                                                                    textAlign: 'center',
                                                                }}
                                                            >
                                                                Amount
                                                            </td>
                                                            <td
                                                                style={{
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    background: 'transparent',
                                                                    borderBottom: '1px solid #000',
                                                                    fontWeight: 'bold',
                                                                    color: '#000',
                                                                    fontSize: '13px',
                                                                    width: '10%',
                                                                    textAlign: 'center',
                                                                }}
                                                            >
                                                                %
                                                            </td>
                                                        </tr>

                                                        <tr className="total rowsHourlySalePDFReportCommonClass">
                                                            <td style={{ width: '15%' }}></td>
                                                            <td
                                                                style={{
                                                                    borderTop: '1px solid #000',
                                                                    fontWeight: 'normal',
                                                                    padding: '5px',
                                                                    paddingBottom: '25px !important',
                                                                    fontSize: '13px',
                                                                    width: '35%',
                                                                }}
                                                            ></td>
                                                            <td
                                                                id="lblTotalQuantity_HourlySalePDFReport_RestaurantReports"
                                                                style={{
                                                                    borderTop: '1px solid #000',
                                                                    fontWeight: 'normal',
                                                                    padding: '5px',
                                                                    paddingBottom: '25px !important',
                                                                    fontSize: '13px',
                                                                    textAlign: 'center',
                                                                    width: '10%',
                                                                }}
                                                            >
                                                                0
                                                            </td>
                                                            <td
                                                                id="lblTotalProductsSaleAmount_HourlySalePDFReport_RestaurantReports"
                                                                style={{
                                                                    borderTop: '1px solid #000',
                                                                    fontWeight: 'normal',
                                                                    padding: '5px',
                                                                    paddingBottom: '25px !important',
                                                                    fontSize: '13px',
                                                                    textAlign: 'center',
                                                                    width: '10%',
                                                                }}
                                                            >
                                                                0.00
                                                            </td>
                                                            <td
                                                                id="lblTotalProductsSalePercentage_HourlySalePDFReport_RestaurantReports"
                                                                style={{
                                                                    borderTop: '1px solid #000',
                                                                    fontWeight: 'normal',
                                                                    padding: '5px',
                                                                    paddingBottom: '25px !important',
                                                                    fontSize: '13px',
                                                                    textAlign: 'center',
                                                                    width: '10%',
                                                                }}
                                                            >
                                                                0.00
                                                            </td>
                                                            <td
                                                                id="lblTotalProductsProfitAmount_HourlySalePDFReport_RestaurantReports"
                                                                style={{
                                                                    borderTop: '1px solid #000',
                                                                    fontWeight: 'normal',
                                                                    padding: '5px',
                                                                    paddingBottom: '25px !important',
                                                                    fontSize: '13px',
                                                                    textAlign: 'center',
                                                                    width: '10%',
                                                                }}
                                                            >
                                                                0.00
                                                            </td>
                                                            <td
                                                                id="lblTotalProductsProfitPercentage_HourlySalePDFReport_RestaurantReports"
                                                                style={{
                                                                    borderTop: '1px solid #000',
                                                                    fontWeight: 'normal',
                                                                    padding: '5px',
                                                                    paddingBottom: '25px !important',
                                                                    fontSize: '13px',
                                                                    textAlign: 'center',
                                                                    width: '10%',
                                                                }}
                                                            >
                                                                0.00
                                                            </td>
                                                        </tr>

                                                        <tr className="total_final rowsHourlySalePDFReportCommonClass">
                                                            <td style={{ width: '15%' }}></td>
                                                            <td style={{ width: '35%' }}></td>
                                                            <td
                                                                id="lbl_GrandTotalQuantity_HourlySalePDFReport_RestaurantReports"
                                                                style={{
                                                                    borderTop: '1px solid #000',
                                                                    borderBottom: '1px solid #000',
                                                                    fontWeight: 'bold',
                                                                    fontSize: '13px',
                                                                    textAlign: 'center',
                                                                    width: '10%',
                                                                }}
                                                            >
                                                                0
                                                            </td>
                                                            <td
                                                                id="lbl_GrandTotalProductsSaleAmount_HourlySalePDFReport_RestaurantReports"
                                                                style={{
                                                                    borderTop: '1px solid #000',
                                                                    borderBottom: '1px solid #000',
                                                                    fontWeight: 'bold',
                                                                    fontSize: '13px',
                                                                    textAlign: 'center',
                                                                    width: '10%',
                                                                }}
                                                            >
                                                                0.00
                                                            </td>
                                                            <td
                                                                id="lbl_GrandTotalProductsSalePercentage_HourlySalePDFReport_RestaurantReports"
                                                                style={{
                                                                    borderTop: '1px solid #000',
                                                                    borderBottom: '1px solid #000',
                                                                    fontWeight: 'bold',
                                                                    fontSize: '13px',
                                                                    textAlign: 'center',
                                                                    width: '10%',
                                                                }}
                                                            >
                                                                0.00
                                                            </td>
                                                            <td
                                                                id="lbl_GrandTotalProductsProfitAmount_HourlySalePDFReport_RestaurantReports"
                                                                style={{
                                                                    borderTop: '1px solid #000',
                                                                    borderBottom: '1px solid #000',
                                                                    fontWeight: 'bold',
                                                                    fontSize: '13px',
                                                                    textAlign: 'center',
                                                                    width: '10%',
                                                                }}
                                                            >
                                                                0.00
                                                            </td>
                                                            <td
                                                                id="lbl_GrandTotalProductsProfitPercentage_HourlySalePDFReport_RestaurantReports"
                                                                style={{
                                                                    borderTop: '1px solid #000',
                                                                    borderBottom: '1px solid #000',
                                                                    fontWeight: 'bold',
                                                                    fontSize: '13px',
                                                                    textAlign: 'center',
                                                                    width: '10%',
                                                                }}
                                                            >
                                                                0.00
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div id="hourly_sale2" style={{ display: activeTab === 'hourlySale2' ? 'block' : 'none' }}>

                            <div id="dllFilterGraphOption_BreakfastLunchDinnerReports_ManageReports" className="dropdown-content dropdownContent_BreakfastLunchDinnerReports">
                                <a id="optFilteration_Weekly_BreakfastLunchDinnerReports" href="javascript:;" className="optFilterationClass_BreakfastLunchDinnerReports" onclick="GetBreakfastLunchDinnerGraphDataOfRestaurant(1);">Weekly</a>
                                <a id="optFilteration_Monthly_BreakfastLunchDinnerReports" href="javascript:;" className="optFilterationClass_BreakfastLunchDinnerReports" onclick="GetBreakfastLunchDinnerGraphDataOfRestaurant(2);">Monthly</a>
                                <a id="optFilteration_Yearly_BreakfastLunchDinnerReports" href="javascript:;" className="optFilterationClass_BreakfastLunchDinnerReports active" onclick="GetBreakfastLunchDinnerGraphDataOfRestaurant(3);">Yearly</a>
                                <a id="optFilteration_CustomDates_BreakfastLunchDinnerReports" href="javascript:;" className="optFilterationClass_BreakfastLunchDinnerReports" onclick="ShowCustomDates_Selection_Popup(3);">Custom Dates</a>
                            </div>
                            <div className="graph">  <HighchartsReact highcharts={Highcharts} options={options} /></div>
                        </div>
                    </div>
                </div>
            </div>
            <EmailModal />
            <button
                id="btn_CustomDate_HourlySalesGraph_ManageReports_Modal"
                type="button"
                className="btn btn-info btn-lg"
                data-toggle="modal"
                data-target="#CustomDate_HourlySalesGraph_ManageReports_Modal"
                style={{ display: 'none' }}
            ></button>

            <div
                className="modal fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                id="CustomDate_HourlySalesGraph_ManageReports_Modal"
                data-backdrop="static"
                data-keyboard="false"
            >
                <div className="modal-dialog cstm_modal_dialog" style={{ marginTop: '100px' }}>
                    <div
                        className="modal-content plus_modal_cont custm_date-wrappopup"
                        style={{ width: '400px' }}
                    >
                        {/* Modal Header */}
                        <div
                            className="modal-header plus_modal_head"
                            style={{
                                display: 'block',
                                paddingBottom: '20px',
                                textAlign: 'center',
                                paddingTop: '0px',
                            }}
                        >
                            <h4 className="modal-title plus_head_popup" style={{ left: '0px' }}>
                                Custom Date
                            </h4>
                        </div>

                        {/* Modal Body */}
                        <div className="modal-body new_modal_work">
                            <div className="col-md-12 col-lg-12 col-12">
                                <form>
                                    <div className="dates_wraps">
                                        <div className="form-group text_wrap-datepicker" style={{ display: 'block' }}>
                                            <label style={{ width: '100%', fontSize: '16px', fontWeight: '600' }}>
                                                Select Date
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control datepicker"
                                                id="txtDate_HourlySalesGraph_ManageReports_Modal"
                                                placeholder="Date"
                                                style={{ cursor: 'pointer', width: '100%' }}
                                                readOnly
                                            />
                                            <div
                                                id="date_error_HourlySalesGraph_ManageReports_Modal"
                                                className="errorsClass2"
                                            ></div>
                                        </div>
                                    </div>

                                    {/* Modal Bottom Buttons */}
                                    <div
                                        className="modal-bottom plus_modal_bottom"
                                        style={{ paddingBottom: '0px', paddingTop: '10px' }}
                                    >
                                        <button
                                            id="btnCancel_HourlySalesGraph_ManageReports_Modal"
                                            type="button"
                                            className="cstm_model_plusbtn_1 btn btn-danger"
                                            data-dismiss="modal"
                                            style={{ display: 'none' }}
                                        ></button>
                                        <button
                                            type="button"
                                            className="cstm_model_plusbtn_1 btn btn-danger"
                                            onClick={closeDateModal}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            className="cstm_model_plusbtn_1 btn btn-danger"
                                        // onClick={() => Show_HourlySaleGraphData_By_CustomDate_ManageReports()}
                                        >
                                            Apply
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hourlysale