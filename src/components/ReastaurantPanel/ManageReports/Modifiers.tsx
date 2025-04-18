import React, { useEffect, useRef, useState } from 'react'
import DatePicker from 'react-datepicker';
import EmailModal from './EmailModal'


const Modifiers = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

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

    const handleDateModal = () => {
        const dateModalButton = document.getElementById('btn_CustomDates_Selection_ManageReports_Modal') as HTMLButtonElement;
        dateModalButton?.click();
    };

    const handleCloseModal = () => {
        const closeModalButton = document.getElementById('btnCancel_CustomDatesSelection_ManageReports_Modal') as HTMLButtonElement;
        closeModalButton?.click();
    };

    const handleEmailModalOpen = () => {
        const emailModalButton = document.getElementById("btn_SendPDFReportEmail_RestaurantReports_Modal") as HTMLButtonElement;
        emailModalButton?.click();
    };

    return (
        <>

            <div id="modifiers" className="container-fluid">
                <div className="cgt-desc">
                    <div id="FieldsSection_ModifierSalesGraph_ManageReports" className="select_warppers">
                        <div className="select_warps-box">

                            <div className="select_box">
                                <select
                                    className="form-control"
                                    id="modifierSalesType_ModifierSalesRecordsFilter"
                                // onChange={onChange_modifierSalesType_ModifierSalesRecordsFilter}
                                >
                                    <option value="top">Top</option>
                                    <option value="worst">Worst</option>
                                </select>
                            </div>

                            <div className="select_box">
                                <select
                                    className="form-control"
                                    id="maxRecords_ModifierSalesRecordsFilter"
                                // onChange={onChange_maxRecords_ModifierSalesRecordsFilter}
                                >
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                    <option value="40">40</option>
                                    <option value="50">50</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="clear"></div>
                    {/* Tabs wrapper for Modifier Sales Report */}
                    <div className="tabs_wraps-div">
                        <ul className="tabs clearfix fit_data">
                            {/* Tab for Modifier Sales with an onclick event to display the sales data */}
                            <li>
                                <a
                                    id="tab_ModifierSalesReport_ManageRestaurantReports"
                                    href="#modifier_sales"
                                    className="FinancialReportDataClassCommon active"
                                // onClick={show_GetModifierSalesGraphDataOfRestaurant}
                                >
                                    MODIFIER SALES
                                </a>
                            </li>
                        </ul>

                        {/* Filter options button for the Modifier Sales report */}
                        <span
                            id="FilterOptionsMenu_ModifierSalesReport"
                            ref={buttonRef}
                            className="dropbtn FilterOptionsMenuCommonClass Vector_horizental"
                            style={{ background: 'rgb(246, 248, 252)' }}
                            onClick={toggleDropdown}
                        // onClick={myFunction3}
                        >
                            <img
                                src="../../Content/Restaurant/icons/Vector_horizental.png"
                                alt="icon"
                                className="dropbtn vertical-menus"
                            />
                        </span>

                        {/* Dropdown menu for selecting filter options (Weekly, Monthly, etc.) */}
                        <div
                            id="modifierSales_graphFilter"
                            className={`dropdown-content dropdownContent_ModfierSalestReports ${isOpen ? 'show' : ''}`}
                            ref={dropdownRef}
                            style={{ zIndex: 100 }}
                        >
                            <a href="javascript:;" data-value="1" >Weekly</a>
                            <a href="javascript:;" data-value="2">Monthly</a>
                            <a href="javascript:;" data-value="3">Yearly</a>
                            <a href="javascript:;" data-value="4" onClick={handleDateModal} >Custom date</a>
                        </div>
                    </div>
                    <div className="cgt-content">
                        <div id="modifier_sales" className="tab active" style={{}}>
                            <div className="graph">
                                <div className="set-graph">
                                    <div id="lblSelectedFilterOption_ModifierSaleReports_ManageReports" className="lblHeading_HourlySales_Style">
                                        Yearly
                                    </div>
                                    <div id="dv_ProductSalesGraphData_Section_ManageReports" className="product_sale-bars">
                                        {/* Example product sale progress bars */}
                                        <div className="wrap_bar-progress">
                                            <p className="product-name">Product 999</p>
                                            <div className="progress">
                                                <div className="progress-bar orange" style={{ backgroundColor: '#5751BD', width: '47.05%' }}></div>
                                            </div>
                                            <span className="value-progress">$65.7</span>
                                        </div>

                                        <div className="wrap_bar-progress">
                                            <p className="product-name">2 Veg Items with 1 Juice</p>
                                            <div className="progress">
                                                <div className="progress-bar orange" style={{ backgroundColor: '#5751BD', width: '24.28%' }}></div>
                                            </div>
                                            <span className="value-progress">$33.91</span>
                                        </div>

                                        <div className="wrap_bar-progress">
                                            <p className="product-name">Veg Salad Soya Champ</p>
                                            <div className="progress">
                                                <div className="progress-bar orange" style={{ backgroundColor: '#5751BD', width: '17.4%' }}></div>
                                            </div>
                                            <span className="value-progress">$24.3</span>
                                        </div>

                                        <div className="wrap_bar-progress">
                                            <p className="product-name">Lichi Juice</p>
                                            <div className="progress">
                                                <div className="progress-bar orange" style={{ backgroundColor: '#5751BD', width: '8.62%' }}></div>
                                            </div>
                                            <span className="value-progress">$12.04</span>
                                        </div>

                                        <div className="wrap_bar-progress">
                                            <p className="product-name">Mix Juice 222</p>
                                            <div className="progress">
                                                <div className="progress-bar orange" style={{ backgroundColor: '#5751BD', width: '0%' }}></div>
                                            </div>
                                            <span className="value-progress">$0</span>
                                        </div>

                                        <div className="wrap_bar-progress">
                                            <p className="product-name">Veg Salad 2</p>
                                            <div className="progress">
                                                <div className="progress-bar orange" style={{ backgroundColor: '#5751BD', width: '0%' }}></div>
                                            </div>
                                            <span className="value-progress">$0</span>
                                        </div>

                                        <div className="wrap_bar-progress">
                                            <p className="product-name">Mango Shake</p>
                                            <div className="progress">
                                                <div className="progress-bar orange" style={{ backgroundColor: '#5751BD', width: '0%' }}></div>
                                            </div>
                                            <span className="value-progress">$0</span>
                                        </div>

                                        <div className="wrap_bar-progress">
                                            <p className="product-name">Veg Noodles</p>
                                            <div className="progress">
                                                <div className="progress-bar orange" style={{ backgroundColor: '#5751BD', width: '0%' }}></div>
                                            </div>
                                            <span className="value-progress">$0</span>
                                        </div>

                                        <div className="wrap_bar-progress">
                                            <p className="product-name">Veg Tikki</p>
                                            <div className="progress">
                                                <div className="progress-bar orange" style={{ backgroundColor: '#5751BD', width: '0%' }}></div>
                                            </div>
                                            <span className="value-progress">$0</span>
                                        </div>

                                        <div className="wrap_bar-progress">
                                            <p className="product-name">Veg Pasta testing veggie pasta of the test description</p>
                                            <div className="progress">
                                                <div className="progress-bar orange" style={{ backgroundColor: '#5751BD', width: '0%' }}></div>
                                            </div>
                                            <span className="value-progress">$0</span>
                                        </div>

                                        <div className="wrap_bar-progress">
                                            <p className="product-name">Veg Champ</p>
                                            <div className="progress">
                                                <div className="progress-bar orange" style={{ backgroundColor: '#5751BD', width: '0%' }}></div>
                                            </div>
                                            <span className="value-progress">$0</span>
                                        </div>

                                        <div className="wrap_bar-progress">
                                            <p className="product-name">French Fries</p>
                                            <div className="progress">
                                                <div className="progress-bar orange" style={{ backgroundColor: '#5751BD', width: '0%' }}></div>
                                            </div>
                                            <span className="value-progress">$0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="space_wraps" />
                            <div className="pdf_reports">
                                <div className="wrap_pdf">
                                    <p
                                        id="link_Send_ModifierSaleReportPDF"
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
                                                Modifier Sales Report
                                            </h3>
                                            <p
                                                id="lblFilterValue_ModifierSales_PDFReport_RestaurantReports"
                                                style={{ textAlign: 'center' }}
                                            >
                                                01 Jan 2024 00:00:00 to 05 Nov 2024 11:16:00
                                            </p>
                                            <div className="table-responsive">
                                                <div className="sales_wrap_profits" style={{ textAlign: 'right' }}>
                                                    <span
                                                        style={{
                                                            borderBottom: '2px solid #000',
                                                            padding: '0px 200px',
                                                            fontWeight: 'bold',
                                                            fontSize: '13px',
                                                        }}
                                                    >
                                                        Sales
                                                    </span>
                                                </div>
                                                <table
                                                    id="tblModifierSales_PDFReport_RestaurantReports"
                                                    cellPadding="0"
                                                    cellSpacing="0"
                                                    style={{ width: '100%', lineHeight: 'inherit', textAlign: 'left' }}
                                                >
                                                    <tbody>
                                                        <tr className="heading">
                                                            <td
                                                                style={{
                                                                    background: 'transparent',
                                                                    borderBottom: '1px solid #000',
                                                                    fontWeight: 'bold',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '12px',
                                                                    color: '#000',
                                                                    width: '4%',
                                                                }}
                                                            ></td>
                                                            <td
                                                                style={{
                                                                    background: 'transparent',
                                                                    borderBottom: '1px solid #000',
                                                                    fontWeight: 'bold',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '12px',
                                                                    color: '#000',
                                                                    width: '45%',
                                                                }}
                                                            >
                                                                Modifier Option Name
                                                            </td>
                                                            <td
                                                                style={{
                                                                    background: 'transparent',
                                                                    borderBottom: '1px solid #000',
                                                                    fontWeight: 'bold',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '12px',
                                                                    color: '#000',
                                                                    width: '3%',
                                                                    textAlign: 'center',
                                                                }}
                                                            ></td>
                                                            <td
                                                                style={{
                                                                    background: 'transparent',
                                                                    borderBottom: '1px solid #000',
                                                                    fontWeight: 'bold',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '12px',
                                                                    color: '#000',
                                                                    width: '3%',
                                                                    textAlign: 'center',
                                                                }}
                                                            ></td>
                                                            <td
                                                                style={{
                                                                    background: 'transparent',
                                                                    borderBottom: '1px solid #000',
                                                                    fontWeight: 'bold',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '12px',
                                                                    color: '#000',
                                                                    width: '8%',
                                                                    textAlign: 'center',
                                                                }}
                                                            >
                                                                Quantity
                                                            </td>
                                                            <td
                                                                style={{
                                                                    background: 'transparent',
                                                                    borderBottom: '1px solid #000',
                                                                    fontWeight: 'bold',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '12px',
                                                                    color: '#000',
                                                                    width: '10%',
                                                                    textAlign: 'center',
                                                                }}
                                                            >
                                                                Nett ex
                                                            </td>
                                                            <td
                                                                style={{
                                                                    background: 'transparent',
                                                                    borderBottom: '1px solid #000',
                                                                    fontWeight: 'bold',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '12px',
                                                                    color: '#000',
                                                                    width: '6%',
                                                                    textAlign: 'center',
                                                                }}
                                                            >
                                                                Tax
                                                            </td>
                                                            <td
                                                                style={{
                                                                    background: 'transparent',
                                                                    borderBottom: '1px solid #000',
                                                                    fontWeight: 'bold',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '12px',
                                                                    color: '#000',
                                                                    width: '7%',
                                                                    textAlign: 'center',
                                                                }}
                                                            >
                                                                Nett inc
                                                            </td>
                                                        </tr>

                                                        <tr className="details rowsModifierSalesPDFReportCommonClass">
                                                            <td
                                                                style={{
                                                                    color: '#000',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '13px',
                                                                    borderBottom: '1px solid #808080b5',
                                                                    width: '4%',
                                                                }}
                                                            ></td>
                                                            <td
                                                                style={{
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '13px',
                                                                    borderBottom: '1px solid #000',
                                                                    width: '38%',
                                                                }}
                                                            >
                                                                Option B-100
                                                            </td>
                                                            <td
                                                                style={{
                                                                    color: '#000',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '13px',
                                                                    borderBottom: '1px solid #808080b5',
                                                                    width: '3%',
                                                                    textAlign: 'center',
                                                                }}
                                                            ></td>
                                                            <td
                                                                style={{
                                                                    color: '#000',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '13px',
                                                                    borderBottom: '1px solid #808080b5',
                                                                    width: '3%',
                                                                    textAlign: 'center',
                                                                }}
                                                            ></td>
                                                            <td
                                                                style={{
                                                                    color: '#000',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '13px',
                                                                    borderBottom: '1px solid #808080b5',
                                                                    width: '8%',
                                                                    textAlign: 'center',
                                                                }}
                                                            >
                                                                1
                                                            </td>
                                                            <td
                                                                style={{
                                                                    color: '#000',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '13px',
                                                                    borderBottom: '1px solid #808080b5',
                                                                    width: '10%',
                                                                    textAlign: 'center',
                                                                }}
                                                            >
                                                                13.04
                                                            </td>
                                                            <td
                                                                style={{
                                                                    color: '#000',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '13px',
                                                                    borderBottom: '1px solid #808080b5',
                                                                    width: '6%',
                                                                    textAlign: 'center',
                                                                }}
                                                            >
                                                                1.96
                                                            </td>
                                                            <td
                                                                style={{
                                                                    color: '#000',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '13px',
                                                                    borderBottom: '1px solid #808080b5',
                                                                    width: '7%',
                                                                    textAlign: 'center',
                                                                }}
                                                            >
                                                                15.00
                                                            </td>
                                                        </tr>

                                                        <tr className="details rowsModifierSalesPDFReportCommonClass">
                                                            <td
                                                                style={{
                                                                    color: '#000',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '13px',
                                                                    borderBottom: '1px solid #808080b5',
                                                                    width: '4%',
                                                                }}
                                                            ></td>
                                                            <td
                                                                style={{
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '13px',
                                                                    borderBottom: '1px solid #000',
                                                                    width: '38%',
                                                                }}
                                                            >
                                                                Option A-100
                                                            </td>
                                                            <td
                                                                style={{
                                                                    color: '#000',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '13px',
                                                                    borderBottom: '1px solid #808080b5',
                                                                    width: '3%',
                                                                    textAlign: 'center',
                                                                }}
                                                            ></td>
                                                            <td
                                                                style={{
                                                                    color: '#000',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '13px',
                                                                    borderBottom: '1px solid #808080b5',
                                                                    width: '3%',
                                                                    textAlign: 'center',
                                                                }}
                                                            ></td>
                                                            <td
                                                                style={{
                                                                    color: '#000',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '13px',
                                                                    borderBottom: '1px solid #808080b5',
                                                                    width: '8%',
                                                                    textAlign: 'center',
                                                                }}
                                                            >
                                                                1
                                                            </td>
                                                            <td
                                                                style={{
                                                                    color: '#000',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '13px',
                                                                    borderBottom: '1px solid #808080b5',
                                                                    width: '10%',
                                                                    textAlign: 'center',
                                                                }}
                                                            >
                                                                8.04
                                                            </td>
                                                            <td
                                                                style={{
                                                                    color: '#000',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '13px',
                                                                    borderBottom: '1px solid #808080b5',
                                                                    width: '6%',
                                                                    textAlign: 'center',
                                                                }}
                                                            >
                                                                1.96
                                                            </td>
                                                            <td
                                                                style={{
                                                                    color: '#000',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '13px',
                                                                    borderBottom: '1px solid #808080b5',
                                                                    width: '7%',
                                                                    textAlign: 'center',
                                                                }}
                                                            >
                                                                10.00
                                                            </td>
                                                        </tr>
                                                        <tr className="total_final stock_item_sale rowsModifierSalesPDFReportCommonClass">
                                                            <td
                                                                style={{
                                                                    color: '#000',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '13px',
                                                                    width: '4%',
                                                                }}
                                                            ></td>
                                                            <td
                                                                style={{
                                                                    color: '#000',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '13px',
                                                                    width: '45%',
                                                                }}
                                                            ></td>
                                                            <td
                                                                style={{
                                                                    color: '#000',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '13px',
                                                                    width: '3%',
                                                                }}
                                                            ></td>
                                                            <td
                                                                style={{
                                                                    color: '#000',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '13px',
                                                                    width: '3%',
                                                                }}
                                                            ></td>
                                                            <td
                                                                style={{
                                                                    color: '#000',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '13px',
                                                                    borderBottom: '2px solid #000 !important',
                                                                    borderTop: '2px solid #000 !important',
                                                                    fontWeight: 'bold',
                                                                    width: '8%',
                                                                    textAlign: 'center',
                                                                }}
                                                            >
                                                                3
                                                            </td>
                                                            <td
                                                                style={{
                                                                    color: '#000',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '13px',
                                                                    borderBottom: '2px solid #000 !important',
                                                                    borderTop: '2px solid #000 !important',
                                                                    fontWeight: 'bold',
                                                                    width: '10%',
                                                                    textAlign: 'center',
                                                                }}
                                                            >
                                                                21.74
                                                            </td>
                                                            <td
                                                                style={{
                                                                    color: '#000',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '13px',
                                                                    borderBottom: '2px solid #000 !important',
                                                                    borderTop: '2px solid #000 !important',
                                                                    fontWeight: 'bold',
                                                                    width: '6%',
                                                                    textAlign: 'center',
                                                                }}
                                                            >
                                                                3.26
                                                            </td>
                                                            <td
                                                                style={{
                                                                    color: '#000',
                                                                    padding: '5px',
                                                                    verticalAlign: 'top',
                                                                    fontSize: '13px',
                                                                    borderBottom: '2px solid #000 !important',
                                                                    borderTop: '2px solid #000 !important',
                                                                    fontWeight: 'bold',
                                                                    width: '7%',
                                                                    textAlign: 'center',
                                                                }}
                                                            >
                                                                25.00
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        id="dv_Download_ModifierSalesReport_Section"
                                        className="text-center"
                                        style={{ padding: '20px' }}
                                    >
                                        <form action="/Reports/Download_ModifierSales_ReportasPDF" method="post">
                                            <input type="hidden" name="hdn_ModifierSalesReport_Html" />
                                            <button
                                                type="submit"
                                                id="btnDownload_ModifierSalesReportPDF_RestaurantReports"
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
                <button id="btn_CustomDates_Selection_ManageReports_Modal" type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#CustomDates_Selection_ManageReports_Modal" style={{ display: "none" }}></button>
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
                                            <button id="btnCancel_CustomDatesSelection_ManageReports_Modal" type="button" className="cstm_model_plusbtn_1 btn btn-danger" data-dismiss="modal" style={{ display: "none" }}></button>
                                            <button type="button" className="cstm_model_plusbtn_1 btn btn-danger" onClick={handleCloseModal}>Cancel</button>
                                            <button id="btnSubmit_GraphsData_By_CustomDates_ManageReports" type="button" className="cstm_model_plusbtn_1 btn btn-danger">Apply</button>
                                        </div>

                                    </form>
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

export default Modifiers