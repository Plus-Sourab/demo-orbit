import React, { useRef, useState, RefObject, useEffect } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import DatePicker from 'react-datepicker';

import EmailModal from './EmailModal';

type Props = {}

const Department = (props: Props) => {
    const [activeTab, setActiveTab] = useState<string>('master_department');
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const buttonRef: RefObject<HTMLButtonElement> = useRef(null);
    const cancelRef: RefObject<HTMLButtonElement> = useRef(null);
    const dropdownRef: RefObject<HTMLButtonElement> = useRef(null);

    const handleDateModal = () => {
        if (buttonRef.current) {
            buttonRef.current.click();
        }
    };

    const handleCloseModal = () => {
        if (cancelRef.current) {
            cancelRef.current.click();
        }
    };

    const toggleDropdown = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
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
        const emailButton = document.getElementById("btn_SendPDFReportEmail_RestaurantReports_Modal") as HTMLButtonElement;
        if (emailButton) {
            emailButton.click();
        }
    };

    const options = {
        chart: {
            type: 'pie',
            backgroundColor: '#e6f0ff',
        },
        title: {
            y: -60,
            style: {
                fontWeight: 'bold',
                fontSize: '16px',
            },
        },
        tooltip: {
            pointFormat: '{point.percentage:.2f}% (${point.y})<br>{point.name}',
        },
        plotOptions: {
            pie: {
                innerSize: '60%',
            },
        },
        legend: {
            enabled: true,
        },
        series: [
            {
                name: 'Refund Reasons',
                colorByPoint: true,
                data: [
                    { name: 'Main 2', y: 253, color: '#4aa3f0' },
                    { name: 'Juice', y: 253, color: '#4aa3f0' },
                    { name: 'Veg Recipe', y: 40, color: '#6a0dad' },
                ],
            },
        ],
    };

    const options2 = {
        chart: {
            type: 'pie',
            backgroundColor: '#e6f0ff',
        },
        title: {
            y: -60,
            style: {
                fontWeight: 'bold',
                fontSize: '16px',
            },
        },
        tooltip: {
            pointFormat: '{point.percentage:.2f}% (${point.y})<br>{point.name}',
        },
        plotOptions: {
            pie: {
                innerSize: '60%',
            },
        },
        legend: {
            enabled: true,
        },
        series: [
            {
                name: 'Refund Reasons',
                colorByPoint: true,
                data: [
                    { name: 'Main 2', y: 253, color: '#4aa3f0' },
                    { name: 'Juice', y: 253, color: '#4aa3f0' },
                    { name: 'Recipe', y: 40, color: '#6a0dad' },
                ],
            },
        ],
    };

    return (
        <>
            <div id="department" className="container-fluid">
                <div className="cgt-desc">
                    <div className="tabs_wraps-div">
                        <ul className="tabs clearfix">
                            <li>
                                <a
                                    id="tab_MainDepartmentReport_ManageRestaurantReports"
                                    className={`FinancialReportDataClassCommon ${activeTab === "master_department" ? 'active' : ''}`}
                                    onClick={() => setActiveTab("master_department")}
                                >
                                    MASTER DEPARTMENT
                                </a>
                            </li>
                            <li>
                                <a
                                    id="tab_SubDepartmentReport_ManageRestaurantReports"
                                    className={`FinancialReportDataClassCommon ${activeTab === "wrap_department" ? 'active' : ''}`}
                                    onClick={() => setActiveTab("wrap_department")}
                                >
                                    DEPARTMENT
                                </a>
                            </li>
                        </ul>

                        <span
                            id="FilterOptionsMenu_MainDepartmentReport"
                            className="dropbtn FilterOptionsMenuCommonClass Vector_horizental"
                            style={{ background: 'rgb(246, 248, 252)' }}
                        >
                            <img
                                src="./Content/Restaurant/icons/Vector_horizental.png"
                                alt="icon"
                                className="dropbtn vertical-menus"
                            />
                        </span>
                        <span
                            id="FilterOptionsMenu_SubDepartmentReport"
                            className="dropbtn FilterOptionsMenuCommonClass Vector_horizental"
                            style={{ background: 'rgb(246, 248, 252)' }}
                            ref={dropdownRef}
                            onClick={toggleDropdown}
                        >
                            <img
                                src="./Content/Restaurant/icons/Vector_horizental.png"
                                alt="icon"
                                className="dropbtn vertical-menus"
                            />
                        </span>
                        {/* Filter Dropdown */}
                        <div
                            id="dllFilterGraphOption_MainDepartmentReports_ManageReports"

                            className={`dropdown-content dropdownContent_FinancialReports ${isOpen ? 'show' : ''}`}
                        >
                            <a
                                id="optFilteration_Weekly_MainDepartmentReports"
                                className="optFilterationClass_MainDepartmentReports"
                            // onClick={() => handleFilterChange('Weekly')}
                            >
                                Weekly
                            </a>
                            <a
                                id="optFilteration_Monthly_MainDepartmentReports"
                                className="optFilterationClass_MainDepartmentReports"
                            // onClick={() => handleFilterChange('Monthly')}
                            >
                                Monthly
                            </a>
                            <a
                                id="optFilteration_Yearly_MainDepartmentReports"
                                className="optFilterationClass_MainDepartmentReports"
                            // onClick={() => handleFilterChange('Yearly')}
                            // style={filterOption === 'Yearly' ? { fontWeight: 'bold' } : {}}
                            >
                                Yearly
                            </a>
                            <a
                                id="optFilteration_CustomDates_MainDepartmentReports"
                                className="optFilterationClass_MainDepartmentReports"
                                // onClick={() => handleFilterChange('CustomDates')}
                                onClick={handleDateModal}
                            >
                                Custom Dates
                            </a>
                        </div>
                    </div>

                    <div className="cgt-content">
                        <div id="master_department" className={`tab ${activeTab === 'master_department' ? 'active' : ''}`} style={{ display: activeTab === 'wrap_department' ? 'none' : 'block' }}>

                            {/* Graph Section */}
                            <div className="graph">

                                <HighchartsReact highcharts={Highcharts} options={options} />

                            </div>

                            <hr className="space_wraps" />

                            {/* PDF Reports */}
                            <div className="pdf_reports">
                                <div className="wrap_pdf">
                                    <p
                                        id="link_Send_MainDepartmentReportPDF"
                                        className="Email_wraps-right"
                                        style={{ cursor: 'pointer' }}
                                        onClick={handleEmailModalOpen}
                                    >
                                        Email
                                    </p>

                                    <div className="container_content" id="container_content">
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
                                                Main-Department Sales Report
                                            </h3>
                                            <p
                                                id="lblFilterValue_MainDepartment_PDFReport_RestaurantReports"
                                                style={{ textAlign: 'center' }}
                                            >
                                                01 Jan 2024 00:00:00 to 05 Nov 2024 10:21:58
                                            </p>
                                            <div className="table-responsive">
                                                <table id="tblMainDepartment_PDFReport_RestaurantReports" cellPadding={0} cellSpacing={0} style={{ width: '100%', lineHeight: 'inherit', textAlign: 'left' }}>
                                                    <tbody>
                                                        <tr className="heading">
                                                            <td colSpan={2}></td>
                                                            <td colSpan={3} style={{ padding: '5px', verticalAlign: 'top', borderBottom: '1px solid #000', fontWeight: 'bold', fontSize: '16px', textAlign: 'center', paddingBottom: '0px' }}>
                                                                Sales
                                                            </td>
                                                        </tr>
                                                        <tr className="heading">
                                                            <td style={{ padding: '5px', verticalAlign: 'top', background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', fontSize: '13px', width: '15%' }}>
                                                                Id
                                                            </td>
                                                            <td style={{ padding: '5px', verticalAlign: 'top', background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', fontSize: '13px', width: '40%' }}>
                                                                Name
                                                            </td>
                                                            <td style={{ padding: '5px', verticalAlign: 'top', background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', fontSize: '13px', width: '15%', textAlign: 'center' }}>
                                                                Quantity
                                                            </td>
                                                            <td style={{ padding: '5px', verticalAlign: 'top', background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', fontSize: '13px', width: '15%', textAlign: 'center' }}>
                                                                Amount
                                                            </td>
                                                            <td style={{ padding: '5px', verticalAlign: 'top', background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', fontSize: '13px', width: '15%', textAlign: 'center' }}>
                                                                %
                                                            </td>
                                                        </tr>
                                                        <tr className="details rowsMainDepartmentPDFReportCommonClass">
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%' }}>21</td>
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '40%' }}>Main 2</td>
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }}>1</td>
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }}>$75.55</td>
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }}>14.90</td>
                                                        </tr>
                                                        <tr className="details rowsMainDepartmentPDFReportCommonClass">
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%' }}>7</td>
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '40%' }}>Juice Recipes</td>
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }}>-2</td>
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }}>$11.55</td>
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }}>2.28</td>
                                                        </tr>
                                                        <tr className="details rowsMainDepartmentPDFReportCommonClass">
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%' }}>2</td>
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '40%' }}>Veg Recipes</td>
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }}>3</td>
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }}>$420.00</td>
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }}>82.82</td>
                                                        </tr>
                                                        <tr className="total_final department_sale rowsMainDepartmentPDFReportCommonClass">
                                                            <td style={{ width: '15%' }}></td>
                                                            <td style={{ width: '40%' }}></td>
                                                            <td style={{ fontSize: '13px', borderTop: '1px solid #000', borderBottom: '1px solid #000', fontWeight: 'bold', width: '15%', textAlign: 'center' }}>2</td>
                                                            <td style={{ fontSize: '13px', borderTop: '1px solid #000', borderBottom: '1px solid #000', fontWeight: 'bold', width: '15%', textAlign: 'center' }}>$507.10</td>
                                                            <td style={{ width: '15%', textAlign: 'center' }}> </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>
                                    </div>

                                    {/* PDF Download */}
                                    <div
                                        id="dv_Download_MainDepartmentReport_Section"
                                        className="text-center"
                                        style={{ padding: '20px' }}
                                    >
                                        <form method="post">
                                            <input type="hidden" name="hdn_MainDepartmentReport_Html" />
                                            <input type="hidden" name="hdn_MainDepartment_Graph_base64" />
                                            <button
                                                type="submit"
                                                id="btnDownload_MainDepartmentReportPDF_RestaurantReports"
                                                className="btn btn-info btn_print"
                                            >
                                                PDF Download
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            id="wrap_department"
                            className={`tab ${activeTab === 'wrap_department' ? 'active' : ''}`}
                            style={{ display: activeTab === 'master_department' ? 'none' : 'block' }}
                        >
                            {/* Filter Dropdown */}
                            <div
                                id="dllFilterGraphOption_MainDepartmentReports_ManageReports"
                                className="dropdown-content dropdownContent_MainDepartmentReports"
                            >
                                <a
                                    id="optFilteration_Weekly_MainDepartmentReports"
                                    className="optFilterationClass_MainDepartmentReports"
                                // onClick={() => handleFilterChange('Weekly')}
                                >
                                    Weekly
                                </a>
                                <a
                                    id="optFilteration_Monthly_MainDepartmentReports"
                                    className="optFilterationClass_MainDepartmentReports"
                                // onClick={() => handleFilterChange('Monthly')}
                                >
                                    Monthly
                                </a>
                                <a
                                    id="optFilteration_Yearly_MainDepartmentReports"
                                    className="optFilterationClass_MainDepartmentReports"
                                // onClick={() => handleFilterChange('Yearly')}
                                // style={filterOption === 'Yearly' ? { fontWeight: 'bold' } : {}}
                                >
                                    Yearly
                                </a>
                                <a
                                    id="optFilteration_CustomDates_MainDepartmentReports"
                                    className="optFilterationClass_MainDepartmentReports"
                                    onClick={handleDateModal}
                                >
                                    Custom Dates
                                </a>
                            </div>

                            {/* Graph Section */}
                            <div className="graph">

                                <HighchartsReact highcharts={Highcharts} options={options2} />

                            </div>

                            <hr className="space_wraps" />

                            {/* PDF Reports */}
                            <div className="pdf_reports">
                                <div className="wrap_pdf">
                                    <p
                                        id="link_Send_MainDepartmentReportPDF"
                                        className="Email_wraps-right"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => console.log('Send PDF via Email')}
                                    >
                                        Email
                                    </p>

                                    <div className="container_content" id="container_content">
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
                                                Main-Department Sales Report
                                            </h3>
                                            <p
                                                id="lblFilterValue_MainDepartment_PDFReport_RestaurantReports"
                                                style={{ textAlign: 'center' }}
                                            >
                                                01 Jan 2024 00:00:00 to 05 Nov 2024 10:21:58
                                            </p>
                                            <div className="table-responsive">
                                                <table id="tblMainDepartment_PDFReport_RestaurantReports" cellPadding={0} cellSpacing={0} style={{ width: '100%', lineHeight: 'inherit', textAlign: 'left' }}>
                                                    <tbody>
                                                        <tr className="heading">
                                                            <td colSpan={2}></td>
                                                            <td colSpan={3} style={{ padding: '5px', verticalAlign: 'top', borderBottom: '1px solid #000', fontWeight: 'bold', fontSize: '16px', textAlign: 'center', paddingBottom: '0px' }}>
                                                                Sales
                                                            </td>
                                                        </tr>
                                                        <tr className="heading">
                                                            <td style={{ padding: '5px', verticalAlign: 'top', background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', fontSize: '13px', width: '15%' }}>
                                                                Id
                                                            </td>
                                                            <td style={{ padding: '5px', verticalAlign: 'top', background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', fontSize: '13px', width: '40%' }}>
                                                                Name
                                                            </td>
                                                            <td style={{ padding: '5px', verticalAlign: 'top', background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', fontSize: '13px', width: '15%', textAlign: 'center' }}>
                                                                Quantity
                                                            </td>
                                                            <td style={{ padding: '5px', verticalAlign: 'top', background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', fontSize: '13px', width: '15%', textAlign: 'center' }}>
                                                                Amount
                                                            </td>
                                                            <td style={{ padding: '5px', verticalAlign: 'top', background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', fontSize: '13px', width: '15%', textAlign: 'center' }}>
                                                                %
                                                            </td>
                                                        </tr>
                                                        <tr className="details rowsMainDepartmentPDFReportCommonClass">
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%' }}>21</td>
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '40%' }}>Main 2</td>
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }}>1</td>
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }}>$75.55</td>
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }}>14.90</td>
                                                        </tr>
                                                        <tr className="details rowsMainDepartmentPDFReportCommonClass">
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%' }}>7</td>
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '40%' }}>Juice Recipes</td>
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }}>-2</td>
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }}>$11.55</td>
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }}>2.28</td>
                                                        </tr>
                                                        <tr className="details rowsMainDepartmentPDFReportCommonClass">
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%' }}>2</td>
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '40%' }}>Veg Recipes</td>
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }}>3</td>
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }}>$420.00</td>
                                                            <td style={{ padding: '5px', paddingBottom: '10px', verticalAlign: 'top', fontSize: '13px', width: '15%', textAlign: 'center' }}>82.82</td>
                                                        </tr>
                                                        <tr className="total_final department_sale rowsMainDepartmentPDFReportCommonClass">
                                                            <td style={{ width: '15%' }}></td>
                                                            <td style={{ width: '40%' }}></td>
                                                            <td style={{ fontSize: '13px', borderTop: '1px solid #000', borderBottom: '1px solid #000', fontWeight: 'bold', width: '15%', textAlign: 'center' }}>2</td>
                                                            <td style={{ fontSize: '13px', borderTop: '1px solid #000', borderBottom: '1px solid #000', fontWeight: 'bold', width: '15%', textAlign: 'center' }}>$507.10</td>
                                                            <td style={{ width: '15%', textAlign: 'center' }}> </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>
                                    </div>

                                    {/* PDF Download */}
                                    <div
                                        id="dv_Download_MainDepartmentReport_Section"
                                        className="text-center"
                                        style={{ padding: '20px' }}
                                    >
                                        <form method="post">
                                            <input type="hidden" name="hdn_MainDepartmentReport_Html" />
                                            <input type="hidden" name="hdn_MainDepartment_Graph_base64" />
                                            <button
                                                type="submit"
                                                id="btnDownload_MainDepartmentReportPDF_RestaurantReports"
                                                className="btn btn-info btn_print"
                                            >
                                                PDF Download
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button id="btn_CustomDates_Selection_ManageReports_Modal" type="button" ref={buttonRef} onClick={() => console.log("Button clicked")} className="btn btn-info btn-lg" data-toggle="modal" data-target="#CustomDates_Selection_ManageReports_Modal" style={{ display: "none" }}></button>
            <div className="modal fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " id="CustomDates_Selection_ManageReports_Modal" data-backdrop="static" data-keyboard="false">
                <div className="modal-dialog cstm_modal_dialog">
                    <div className="modal-content plus_modal_cont custm_date-wrappopup">

                        <div className="modal-header plus_modal_head" style={{
                            display: 'block',
                            paddingBottom: '30px',
                            textAlign: 'center',
                            paddingTop: '0px'
                        }}>
                            <h4 className="modal-title plus_head_popup" style={{ left: "0px" }}>
                                Custom Date
                            </h4>
                        </div>


                        <div className="modal-body new_modal_work">
                            <div className="col-md-12 col-lg-12 col-12 p-0">
                                <form>
                                    <div className="dates_wraps">
                                        <div className="row">
                                            <div className="col-md-6 col-lg-6 col-sm-6">
                                                <div className="form-group text_wrap-datepicker" style={{ marginBottom: "5px" }}>
                                                    <label style={{ width: "auto", marginRight: "8px" }}>From</label>
                                                    <DatePicker
                                                        selected={startDate}
                                                        onChange={(date) => setStartDate(date)}
                                                        placeholderText="Select Start Date"
                                                        className="form-control datetimepickerClass"
                                                        dateFormat="MM/dd/yyyy"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-lg-6 col-sm-6">
                                                <div className="form-group text_wrap-datepicker" style={{ marginBottom: "5px" }}>
                                                    <label style={{ width: "auto", marginRight: "8px" }}>To</label>
                                                    <DatePicker
                                                        selected={endDate}
                                                        onChange={(date) => setEndDate(date)}
                                                        placeholderText="Select End Date"
                                                        className="form-control datetimepickerClass"
                                                        dateFormat="MM/dd/yyyy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 col-lg-6 col-sm-6">
                                                <div id="fromDate_error_CustomDatesSelection_ManageReports_Modal" className="errorsClass2" style={{ paddingLeft: "55px" }}></div>
                                            </div>

                                            <div className="col-md-6 col-lg-6 col-sm-6">
                                                <div id="toDate_error_CustomDatesSelection_ManageReports_Modal" className="errorsClass2" style={{ paddingLeft: "32px" }}></div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="modal-bottom plus_modal_bottom" style={{ paddingBottom: "0px", paddingTop: "25px" }}>
                                        <button id="btnCancel_CustomDatesSelection_ManageReports_Modal" ref={cancelRef} onClick={() => console.log("closebutton")} type="button" className="cstm_model_plusbtn_1 btn btn-danger" data-dismiss="modal" style={{ display: "none" }}></button>
                                        <button type="button" className="cstm_model_plusbtn_1 btn btn-danger" onClick={handleCloseModal}>Cancel</button>
                                        <button id="btnSubmit_GraphsData_By_CustomDates_ManageReports" type="button" className="cstm_model_plusbtn_1 btn btn-danger">Apply</button>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <EmailModal />
        </>
    )
}

export default Department