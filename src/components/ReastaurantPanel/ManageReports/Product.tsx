import React, { useRef, useState, useEffect } from 'react'
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import EmailModal from './EmailModal'

type Props = {}

const Product = (props: Props) => {
    const [activeTab, setActiveTab] = useState<string>('product_sales');
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
                buttonRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleProductModal = () => {
        const productModalButton = document.getElementById('btn_SelectProduct_ProductForecast_ManageReports_Modal') as HTMLButtonElement;
        productModalButton?.click();
    };

    const handleCloseModal = () => {
        const closeModalButton = document.getElementById('btnCancel_ProductForecast_ManageReports_Modal') as HTMLButtonElement;
        closeModalButton?.click();
    };

    const handleEmailModalOpen = () => {
        const emailModalButton = document.getElementById("btn_SendPDFReportEmail_RestaurantReports_Modal") as HTMLButtonElement;
        emailModalButton?.click();
    };

    const options = {
        chart: {
            type: 'area',
        },
        title: {
            text: 'Lichi Juice',
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yAxis: {
            title: {
                text: 'Income',
            },
            labels: {
                format: '{value}',
            },
            accessibility: {
                rangeDescription: 'Range: 0 to 800.',
            },
        },
        plotOptions: {
            area: {
                pointStart: 1940,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true,
                        },
                    },
                },
            },
        },
        series: [
            {
                name: 'Lichi Juice Income',
                data: [0, 0, 0, 0, 0, 600, 0, 0, 0, 0, 0, 0],
            },
        ],
    };
    return (
        <>
            <div className="cgt-desc">
                <div className="tabs_wraps-div">
                    <ul className="tabs clearfix">
                        <li>
                            <a id="tab_ProductSalesReport_ManageRestaurantReports" onClick={() => setActiveTab('product_sales')} className={`FinancialReportDataClassCommon ${activeTab === 'product_sales' ? 'active' : ''}`} >
                                PRODUCT SALES
                            </a>
                        </li>
                        <li>
                            <a id="tab_ProductForecastReport_ManageRestaurantReports" onClick={() => setActiveTab('product_forecast')} className={`FinancialReportDataClassCommon ${activeTab === 'product_forecast' ? 'active' : ''}`}>
                                PRODUCT SALES COMPARISON
                            </a>
                        </li>
                    </ul>

                    <span
                        id="FilterOptionsMenu_MainDepartmentReport"
                        className="dropbtn FilterOptionsMenuCommonClass Vector_horizental"
                        style={{ background: 'rgb(246, 248, 252)' }}
                    // onClick={toggleDropdown}
                    >
                        <img
                            src="./Content/Restaurant/icons/Vector_horizental.png"
                            alt="icon"
                            className="dropbtn vertical-menus"
                        />
                    </span>
                    <span
                        id="FilterOptionsMenu_SubDepartmentReport"
                        ref={buttonRef}
                        className="dropbtn FilterOptionsMenuCommonClass Vector_horizental"
                        style={{ background: 'rgb(246, 248, 252)' }}
                        onClick={toggleDropdown}
                    >
                        <img
                            src="./Content/Restaurant/icons/Vector_horizental.png"
                            alt="icon"
                            className="dropbtn vertical-menus"
                        />
                    </span>
                    <div id="dllFilterGraphOption_ProductForecastReports_ManageReports" className={`dropdown-content dropdownContent_ProductForecastReports ${isOpen ? 'show' : ''}`} ref={dropdownRef} >
                        <a id="optFilteration_Weekly_ProductForecastReports" href="javascript:;" className="optFilterationClass_ProductForecastReports" onclick="GetProductForecastGraphDataOfRestaurant(1);">Weekly</a>
                        <a id="optFilteration_Monthly_ProductForecastReports" href="javascript:;" className="optFilterationClass_ProductForecastReports" onclick="GetProductForecastGraphDataOfRestaurant(2);">Monthly</a>
                        <a id="optFilteration_Yearly_ProductForecastReports" href="javascript:;" className="optFilterationClass_ProductForecastReports" onclick="GetProductForecastGraphDataOfRestaurant(3);">Yearly</a>
                    </div>
                </div>

                <div className="cgt-content">
                    <div id="product_sales" className={`tab ${activeTab === 'product_sales' ? 'active' : ''}`} style={{ display: activeTab === 'product_sales' ? 'block' : 'none' }}>
                        <div className="graph">
                            <div className="set-graph">
                                <div id="lblSelectedFilterOption_ProductSaleReports_ManageReports" className="lblHeading_HourlySales_Style">Yearly</div>
                                <div id="dv_ProductSalesGraphData_Section_ManageReports" className="product_sale-bars">
                                    {/* Example product sale progress bars */}
                                    <div className="wrap_bar-progress">
                                        <p>Product 999</p>
                                        <div className="progress">
                                            <div className="progress-bar orange" style={{ backgroundColor: '#5751BD', width: '47.05%' }}></div>
                                        </div>
                                        <span className="value-progress">$65.7</span>
                                    </div>
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
                            <div className="amount_quantity-wraps">
                                <div className="select_box">
                                    <select className="form-control" id="amount_quanitity">
                                        <option value="amount">BY AMOUNT</option>
                                        <option value="quantity">BY QUANTITY</option>
                                        <option value="profit">BY PROFIT</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="clear"></div>
                        <hr className="space_wraps"></hr>
                        <div className="pdf_reports">
                            <div className="wrap_pdf">
                                <p
                                    id="link_Send_ProductSaleReportPDF"
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
                                            color: '#555'
                                        }}
                                    >
                                        <h3 style={{ textAlign: 'center', color: '#5651BD', fontStyle: 'italic' }}>
                                            Stock Item Sales Report
                                        </h3>
                                        <p id="lblFilterValue_ProductSales_PDFReport_RestaurantReports" style={{ textAlign: 'center' }}>
                                            01 Jan 2024 00:00:00 to 05 Nov 2024 10:52:03
                                        </p>
                                        <div className="table-responsive">
                                            <div className="sales_wrap_profits" style={{ textAlign: 'right' }}>
                                                <span
                                                    style={{
                                                        borderBottom: '2px solid #000',
                                                        padding: '0px 200px',
                                                        fontWeight: 'bold',
                                                        fontSize: '13px'
                                                    }}
                                                >
                                                    Sales
                                                </span>
                                            </div>
                                            <table
                                                id="tblProductSales_PDFReport_RestaurantReports"
                                                // cellpadding="0"
                                                // cellspacing="0"
                                                style={{
                                                    width: '100%',
                                                    lineHeight: 'inherit',
                                                    textAlign: 'left'
                                                }}
                                            >
                                                <thead>
                                                    <tr className="heading">
                                                        <td style={{ background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', padding: '5px', verticalAlign: 'top', fontSize: '12px', color: '#000', width: '4%' }}></td>
                                                        <td style={{ background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', padding: '5px', verticalAlign: 'top', fontSize: '12px', color: '#000', width: '45%' }}></td>
                                                        <td style={{ background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', padding: '5px', verticalAlign: 'top', fontSize: '12px', color: '#000', width: '3%', textAlign: 'center' }}></td>
                                                        <td style={{ background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', padding: '5px', verticalAlign: 'top', fontSize: '12px', color: '#000', width: '3%', textAlign: 'center' }}></td>
                                                        <td style={{ background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', padding: '5px', verticalAlign: 'top', fontSize: '12px', color: '#000', width: '8%', textAlign: 'center' }}>Quantity</td>
                                                        <td style={{ background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', padding: '5px', verticalAlign: 'top', fontSize: '12px', color: '#000', width: '10%', textAlign: 'center' }}>Nett ex</td>
                                                        <td style={{ background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', padding: '5px', verticalAlign: 'top', fontSize: '12px', color: '#000', width: '6%', textAlign: 'center' }}>Tax</td>
                                                        <td style={{ background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', padding: '5px', verticalAlign: 'top', fontSize: '12px', color: '#000', width: '7%', textAlign: 'center' }}>Nett inc</td>
                                                        <td style={{ background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', padding: '5px', verticalAlign: 'top', fontSize: '12px', color: '#000', width: '7%', textAlign: 'center' }}>Discounts</td>
                                                        <td style={{ background: 'transparent', borderBottom: '1px solid #000', fontWeight: 'bold', padding: '5px', verticalAlign: 'top', fontSize: '12px', color: '#000', width: '7%', textAlign: 'center' }}>Gross inc</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* First Category */}
                                                    <tr className="item_heading rowsProductSalesPDFReportCommonClass">
                                                        <td colSpan="10" style={{ fontWeight: 'bold', color: '#000', padding: '5px', verticalAlign: 'top', fontSize: '13px' }}>
                                                            Veg Food
                                                        </td>
                                                    </tr>

                                                    {/* Item 1 */}
                                                    <tr className="details rowsProductSalesPDFReportCommonClass">
                                                        <td style={{ color: '#000', padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #808080b5', width: '4%' }}></td>
                                                        <td style={{ padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #000', width: '38%' }}>322 Veg Salad Soya Champ</td>
                                                        <td style={{ color: '#000', padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #808080b5', width: '3%', textAlign: 'center' }}></td>
                                                        <td style={{ color: '#000', padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #808080b5', width: '3%', textAlign: 'center' }}></td>
                                                        <td style={{ color: '#000', padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #808080b5', width: '8%', textAlign: 'center' }}>1</td>
                                                        <td style={{ color: '#000', padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #808080b5', width: '10%', textAlign: 'center' }}>191.30</td>
                                                        <td style={{ color: '#000', padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #808080b5', width: '6%', textAlign: 'center' }}>28.70</td>
                                                        <td style={{ color: '#000', padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #808080b5', width: '7%', textAlign: 'center' }}>220.00</td>
                                                        <td style={{ color: '#000', padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #808080b5', width: '7%', textAlign: 'center' }}>0.00</td>
                                                        <td style={{ color: '#000', padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #808080b5', width: '7%', textAlign: 'center' }}>220.00</td>
                                                    </tr>

                                                    {/* Item 2 */}
                                                    <tr className="details rowsProductSalesPDFReportCommonClass">
                                                        <td style={{ color: '#000', padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #808080b5', width: '4%' }}></td>
                                                        <td style={{ padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #000', width: '38%' }}>123 Veg Pasta</td>
                                                        <td style={{ color: '#000', padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #808080b5', width: '3%', textAlign: 'center' }}></td>
                                                        <td style={{ color: '#000', padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #808080b5', width: '3%', textAlign: 'center' }}></td>
                                                        <td style={{ color: '#000', padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #808080b5', width: '8%', textAlign: 'center' }}>2</td>
                                                        <td style={{ color: '#000', padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #808080b5', width: '10%', textAlign: 'center' }}>160.00</td>
                                                        <td style={{ color: '#000', padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #808080b5', width: '6%', textAlign: 'center' }}>24.00</td>
                                                        <td style={{ color: '#000', padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #808080b5', width: '7%', textAlign: 'center' }}>184.00</td>
                                                        <td style={{ color: '#000', padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #808080b5', width: '7%', textAlign: 'center' }}>0.00</td>
                                                        <td style={{ color: '#000', padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #808080b5', width: '7%', textAlign: 'center' }}>184.00</td>
                                                    </tr>

                                                    {/* Second Category */}
                                                    <tr className="item_heading rowsProductSalesPDFReportCommonClass">
                                                        <td colSpan="10" style={{ fontWeight: 'bold', color: '#000', padding: '5px', verticalAlign: 'top', fontSize: '13px' }}>
                                                            Non-Veg Food
                                                        </td>
                                                    </tr>

                                                    {/* Item 3 */}
                                                    <tr className="details rowsProductSalesPDFReportCommonClass">
                                                        <td style={{ color: '#000', padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #808080b5', width: '4%' }}></td>
                                                        <td style={{ padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #000', width: '38%' }}>411 Chicken Masala</td>
                                                        <td style={{ color: '#000', padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #808080b5', width: '3%', textAlign: 'center' }}></td>
                                                        <td style={{ color: '#000', padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #808080b5', width: '3%', textAlign: 'center' }}></td>
                                                        <td style={{ color: '#000', padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #808080b5', width: '8%', textAlign: 'center' }}>1</td>
                                                        <td style={{ color: '#000', padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #808080b5', width: '10%', textAlign: 'center' }}>250.00</td>
                                                        <td style={{ color: '#000', padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #808080b5', width: '6%', textAlign: 'center' }}>37.50</td>
                                                        <td style={{ color: '#000', padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #808080b5', width: '7%', textAlign: 'center' }}>287.50</td>
                                                        <td style={{ color: '#000', padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #808080b5', width: '7%', textAlign: 'center' }}>0.00</td>
                                                        <td style={{ color: '#000', padding: '5px', verticalAlign: 'top', fontSize: '13px', borderBottom: '1px solid #808080b5', width: '7%', textAlign: 'center' }}>287.50</td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div id="dv_Download_ProductSalesReport_Section" className="text-center" style={{ padding: '20px' }}>
                                    <form action="/Reports/Download_ProductSales_ReportasPDF" method="post">
                                        {/* Hidden input to hold the report HTML content */}
                                        <input type="hidden" name="hdn_ProductSalesReport_Html" />

                                        {/* Button to trigger the form submission */}
                                        <button type="submit" id="btnDownload_ProductSalesReportPDF_RestaurantReports" className="btn btn-info btn_print">
                                            PDF Download
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="product_forecast" className={`tab ${activeTab === 'product_forecast' ? 'active' : ''}`} style={{ display: activeTab === 'product_forecast' ? 'block' : 'none' }}>

                        <div className="row selectProductForForecast">
                            <div className="col-md-6 col-lg-6 col-sm-12 col-12">

                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-12 col-12 ProductSelection">
                                <a style={{ cursor: "pointer" }}
                                    onClick={handleProductModal}>
                                    Select Product Here
                                </a>
                            </div>
                        </div>

                        <div className="graph">
                            <div className="highcharts-a11y-proxy-group highcharts-a11y-proxy-group-chartMenu">
                                <button
                                    className="highcharts-a11y-proxy-element highcharts-no-tooltip"
                                    aria-label="View chart menu, Lichi Juice"
                                    aria-expanded="false"
                                    title="Chart context menu"
                                    style={{
                                        borderWidth: '0px',
                                        backgroundColor: 'transparent',
                                        cursor: 'pointer',
                                        outline: 'none',
                                        opacity: '0.001',
                                        zIndex: 999,
                                        overflow: 'hidden',
                                        padding: '0px',
                                        margin: '0px',
                                        display: 'block',
                                        position: 'absolute',
                                        width: '28px',
                                        height: '28px',
                                        left: '956px',
                                        top: '11px',
                                    }}
                                ></button>
                                <HighchartsReact highcharts={Highcharts} options={options} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <button id="btn_SelectProduct_ProductForecast_ManageReports_Modal" type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#SelectProduct_ProductForecast_ManageReports_Modal" style={{ display: "none" }}></button>

            <div className="modal" id="SelectProduct_ProductForecast_ManageReports_Modal" data-backdrop="static" data-keyboard="false">
                <div className="modal-dialog cstm_modal_dialog" style={{ marginTop: '135px!important' }}>
                    <div className="modal-content plus_modal_cont">

                        {/* Modal Header */}
                        <div className="modal-header plus_modal_head" style={{ display: 'block', paddingBottom: '0px', textAlign: 'center' }}>
                            <h4 className="modal-title plus_head_popup" style={{ left: '0px' }}>
                                Select Product
                            </h4>
                        </div>

                        {/* Modal Body */}
                        <div className="modal-body new_modal_work">
                            <div className="row">
                                <div className="col-md-12 col-lg-12">
                                    <ul id="ul_ProductListSection_ProductForecast" className="list-group productSelectionList_ProductForecast">
                                        <li id="lblProduct_ProductForecast_ManageReports_1"
                                            className="list-group-item ProListProductForecastClassCommon"
                                        // onClick={() => SetSelectedProduct_ManageReports(1, 1)}
                                        >
                                            Lichi Juice
                                        </li>
                                        <li id="lblProduct_ProductForecast_ManageReports_3"
                                            className="list-group-item ProListProductForecastClassCommon"
                                        // onClick={() => SetSelectedProduct_ManageReports(3, 1)}
                                        >
                                            Mix Juice 222
                                        </li>
                                        <li id="lblProduct_ProductForecast_ManageReports_6"
                                            className="list-group-item ProListProductForecastClassCommon"
                                        // onClick={() => SetSelectedProduct_ManageReports(6, 1)}
                                        >
                                            Veg Salad 2
                                        </li>
                                        <li id="lblProduct_ProductForecast_ManageReports_7"
                                            className="list-group-item ProListProductForecastClassCommon"
                                        // onClick={() => SetSelectedProduct_ManageReports(7, 1)}
                                        >
                                            Mango Shake
                                        </li>
                                        <li id="lblProduct_ProductForecast_ManageReports_8"
                                            className="list-group-item ProListProductForecastClassCommon"
                                        // onClick={() => SetSelectedProduct_ManageReports(8, 1)}
                                        >
                                            Veg Noodles
                                        </li>
                                        <li id="lblProduct_ProductForecast_ManageReports_9"
                                            className="list-group-item ProListProductForecastClassCommon"
                                        // onClick={() => SetSelectedProduct_ManageReports(9, 1)}
                                        >
                                            Veg Tikki
                                        </li>
                                        <li id="lblProduct_ProductForecast_ManageReports_10"
                                            className="list-group-item ProListProductForecastClassCommon"
                                        // onClick={() => SetSelectedProduct_ManageReports(10, 1)}
                                        >
                                            Veg Pasta testing veggie pasta of the test description
                                        </li>
                                        <li id="lblProduct_ProductForecast_ManageReports_11"
                                            className="list-group-item ProListProductForecastClassCommon"
                                        // onClick={() => SetSelectedProduct_ManageReports(11, 1)}
                                        >
                                            Veg Champ
                                        </li>
                                        <li id="lblProduct_ProductForecast_ManageReports_12"
                                            className="list-group-item ProListProductForecastClassCommon"
                                        // onClick={() => SetSelectedProduct_ManageReports(12, 1)}
                                        >
                                            French Fries
                                        </li>
                                        <li id="lblProduct_ProductForecast_ManageReports_13"
                                            className="list-group-item ProListProductForecastClassCommon"
                                        // onClick={() => SetSelectedProduct_ManageReports(13, 1)}
                                        >
                                            Veg Momos
                                        </li>
                                        <li id="lblProduct_ProductForecast_ManageReports_14"
                                            className="list-group-item ProListProductForecastClassCommon"
                                        // onClick={() => SetSelectedProduct_ManageReports(14, 1)}
                                        >
                                            Banila Juice
                                        </li>
                                        <li id="lblProduct_ProductForecast_ManageReports_15"
                                            className="list-group-item ProListProductForecastClassCommon"
                                        // onClick={() => SetSelectedProduct_ManageReports(15, 1)}
                                        >
                                            Papaya Juice
                                        </li>
                                        <li id="lblProduct_ProductForecast_ManageReports_16"
                                            className="list-group-item ProListProductForecastClassCommon"
                                        // onClick={() => SetSelectedProduct_ManageReports(16, 1)}
                                        >
                                            AB
                                        </li>
                                        <li id="lblProduct_ProductForecast_ManageReports_17"
                                            className="list-group-item ProListProductForecastClassCommon"
                                        // onClick={() => SetSelectedProduct_ManageReports(17, 1)}
                                        >
                                            Aasdf
                                        </li>
                                        <li id="lblProduct_ProductForecast_ManageReports_18"
                                            className="list-group-item ProListProductForecastClassCommon"
                                        // onClick={() => SetSelectedProduct_ManageReports(18, 1)}
                                        >
                                            Test H1 Product
                                        </li>
                                        <li id="lblProduct_ProductForecast_ManageReports_19"
                                            className="list-group-item ProListProductForecastClassCommon"
                                        // onClick={() => SetSelectedProduct_ManageReports(19, 1)}
                                        >
                                            Testing Proooo
                                        </li>
                                        <li id="lblProduct_ProductForecast_ManageReports_20"
                                            className="list-group-item ProListProductForecastClassCommon"
                                        // onClick={() => SetSelectedProduct_ManageReports(20, 1)}
                                        >
                                            Product T
                                        </li>
                                        <li id="lblProduct_ProductForecast_ManageReports_21"
                                            className="list-group-item ProListProductForecastClassCommon"
                                        // onClick={() => SetSelectedProduct_ManageReports(21, 1)}
                                        >
                                            Test HH Pro
                                        </li>
                                        <li id="lblProduct_ProductForecast_ManageReports_22"
                                            className="list-group-item ProListProductForecastClassCommon"
                                        // onClick={() => SetSelectedProduct_ManageReports(22, 1)}
                                        >
                                            Pro TTTT 222
                                        </li>
                                        <li id="lblProduct_ProductForecast_ManageReports_23"
                                            className="list-group-item ProListProductForecastClassCommon"
                                        // onClick={() => SetSelectedProduct_ManageReports(23, 1)}
                                        >
                                            Veg Curry 2
                                        </li>
                                        <li id="lblProduct_ProductForecast_ManageReports_24"
                                            className="list-group-item ProListProductForecastClassCommon"
                                        // onClick={() => SetSelectedProduct_ManageReports(24, 1)}
                                        >
                                            Grapes Juice
                                        </li>
                                        <li id="lblProduct_ProductForecast_ManageReports_25"
                                            className="list-group-item ProListProductForecastClassCommon"
                                        // onClick={() => SetSelectedProduct_ManageReports(25, 1)}
                                        >
                                            Grapes Juice 2
                                        </li>
                                        <li id="lblProduct_ProductForecast_ManageReports_26"
                                            className="list-group-item ProListProductForecastClassCommon"
                                        // onClick={() => SetSelectedProduct_ManageReports(26, 1)}
                                        >
                                            Paneer Pakoda
                                        </li>
                                        <li id="lblProduct_ProductForecast_ManageReports_32"
                                            className="list-group-item ProListProductForecastClassCommon"
                                        // onClick={() => SetSelectedProduct_ManageReports(32, 1)}
                                        >
                                            Product 5
                                        </li>
                                        <li id="lblProduct_ProductForecast_ManageReports_33"
                                            className="list-group-item ProListProductForecastClassCommon"
                                        // onClick={() => SetSelectedProduct_ManageReports(33, 1)}
                                        >
                                            Arpan
                                        </li>
                                        <li id="lblProduct_ProductForecast_ManageReports_34"
                                            className="list-group-item ProListProductForecastClassCommon"
                                        // onClick={() => SetSelectedProduct_ManageReports(34, 1)}
                                        >
                                            Rahul
                                        </li>
                                        <li id="lblProduct_ProductForecast_ManageReports_48"
                                            className="list-group-item ProListProductForecastClassCommon"
                                        // onClick={() => SetSelectedProduct_ManageReports(48, 1)}
                                        >
                                            Product 999
                                        </li>
                                        <li id="lblProduct_ProductForecast_ManageReports_49"
                                            className="list-group-item ProListProductForecastClassCommon"
                                        // onClick={() => SetSelectedProduct_ManageReports(49, 1)}
                                        >
                                            Pro 8800
                                        </li>
                                        <li id="lblProduct_ProductForecast_ManageReports_50"
                                            className="list-group-item ProListProductForecastClassCommon"
                                        // onClick={() => SetSelectedProduct_ManageReports(50, 1)}
                                        >
                                            New Test Product
                                        </li>
                                        {/* Additional items go here... */}
                                    </ul>
                                </div>
                            </div>

                            {/* Modal Bottom */}
                            <div className="modal-bottom plus_modal_bottom">
                                <button id="btnCancel_ProductForecast_ManageReports_Modal" type="button" className="cstm_model_plusbtn_1 btn btn-danger" data-dismiss="modal" style={{ display: 'none' }}></button>
                                <button type="button" className="cstm_model_plusbtn_1 btn btn-danger" onClick={() => handleCloseModal()}>
                                    Cancel
                                </button>
                                <button id="btnSubmit_ProductForecast_ManageReports_Modal" type="button" className="cstm_model_plusbtn_1 btn btn-success" style={{ display: 'none' }}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <EmailModal />
        </>
    )
}

export default Product