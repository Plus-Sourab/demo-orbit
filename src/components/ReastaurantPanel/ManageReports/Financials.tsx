import React, { useEffect, useRef, useState } from 'react'
import EmailModal from './EmailModal';
import HighchartsReact from 'highcharts-react-official';
import * as Highcharts from 'highcharts';
import DatePicker from 'react-datepicker';

type Props = {}

const Financials: React.FC = (props: Props) => {

    const [activeTab, setActiveTab] = useState<string>('financial_report');
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const cancelRef = useRef<HTMLButtonElement | null>(null);

    const handleDateModal = () => {
        buttonRef.current?.click();
    };

    const handleCloseModal = () => {
        cancelRef.current?.click();
    };

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

    // Define types for chart options if needed
    const options = {
        chart: {
            type: 'spline',
        },
        title: {
            text: 'yearly'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            title: {
                text: 'Months'
            }
        },
        yAxis: {
            title: {
                text: 'Income'
            },
            labels: {
                format: '{value}'
            },
            accessibility: {
                rangeDescription: 'Range: 0 to 3000.'
            },
            lineWidth: 2
        },
        legend: {
            enabled: true
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br/>',
            pointFormat: '{point.x}: {point.y}'
        },
        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },
        series: [
            {
                name: 'Income',
                color: '#FF5733',
                data: [0, 0, 0, 100, 3000, 1200, 1600, 2500, 300, 500, 2000, 0]
            }
        ]
    };

    const optionsColumn = {
        chart: {
            type: 'column',
        },
        title: {
            text: 'yearly'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            title: {
                text: 'Months'
            }
        },
        yAxis: {
            title: {
                text: 'Income'
            },
            labels: {
                format: '{value}'
            },
            accessibility: {
                rangeDescription: 'Range: 0 to 3000.'
            },
            lineWidth: 2
        },
        legend: {
            enabled: true
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br/>',
            pointFormat: '{point.x}: {point.y}'
        },
        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },
        series: [
            {
                name: 'Income',
                color: '#42ddf5',
                data: [0, 0, 0, 100, 3000, 1200, 1600, 2500, 300, 500, 2000, 0]
            }
        ]
    };

    const handleEmailModalOpen = () => {
        const button = document.getElementById("btn_SendPDFReportEmail_RestaurantReports_Modal") as HTMLButtonElement;
        button?.click();
        document.body.classList.add("modal-open");
        const modal = document.getElementById("SendPDFReportEmail_RestaurantReports_Modal") as HTMLElement;

        if (modal) {
            modal.style.display = "block";
        }
    };

    return (
        <>
            <div id="home" className="container-fluid">
                <div className="cgt-desc">
                    <div className="tabs_wraps-div">
                        <ul className="tabs clearfix">
                            <li>
                                <a
                                    id="tab_FinancialReport_ManageRestaurantReports"
                                    href="#financial_report"
                                    className={`FinancialReportDataClassCommon ${activeTab === 'financial_report' ? 'active' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveTab('financial_report');
                                    }}
                                >
                                    FINANCIAL REPORT
                                </a>
                            </li>
                            <li>
                                <a
                                    id="tab_FinancialCompression_ManageRestaurantReports"
                                    href="#financial_compression"
                                    className={`FinancialReportDataClassCommon ${activeTab === 'financial_compression' ? 'active' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveTab('financial_compression');
                                    }}
                                >
                                    FINANCIAL COMPARISON
                                </a>
                            </li>
                        </ul>
                        <span
                            id="FilterOptionsMenu_FinancialReport"
                            ref={dropdownRef}
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
                        <div
                            id="dllFilterGraphOption_FinancialReports_ManageReports"
                            className={`dropdown-content dropdownContent_FinancialReports ${isOpen ? 'show' : ''}`}
                        // onClick={()}
                        >
                            <a
                                id="optFilteration_Weekly_FinancialReports"
                                href="javascript:;"
                                className="optFilterationClass_FinancialReports"
                            // onClick={() => handleFilterClick('Weekly')}
                            >
                                Weekly
                            </a>
                            <a
                                id="optFilteration_Monthly_FinancialReports"
                                href="javascript:;"
                                className="optFilterationClass_FinancialReports"
                            // onClick={() => handleFilterClick('Monthly')}
                            >
                                Monthly
                            </a>
                            <a
                                id="optFilteration_Yearly_FinancialReports"
                                href="javascript:;"
                                className="optFilterationClass_FinancialReports"
                            >
                                Yearly
                            </a>
                            <a
                                id="optFilteration_CustomDates_FinancialReports"
                                className="optFilterationClass_FinancialReports"
                                onClick={handleDateModal}
                            >
                                Custom Dates
                            </a>
                        </div>
                    </div>
                    <div className="cgt-content">
                        <div id="financial_report" className={`tab ${activeTab === 'financial_report' ? 'active' : ''}`} style={{ display: activeTab === 'financial_compression' ? 'none' : 'block' }}>
                            <div
                                id="dllFilterGraphOption_FinancialReports_ManageReports"
                                className={`dropdown-content dropdownContent_FinancialReports ${isOpen ? 'show' : ''}`}
                            // onClick={()}
                            >
                                <a
                                    id="optFilteration_Weekly_FinancialReports"
                                    href="javascript:;"
                                    className="optFilterationClass_FinancialReports"
                                // onClick={() => handleFilterClick('Weekly')}
                                >
                                    Weekly
                                </a>
                                <a
                                    id="optFilteration_Monthly_FinancialReports"
                                    href="javascript:;"
                                    className="optFilterationClass_FinancialReports"
                                // onClick={() => handleFilterClick('Monthly')}
                                >
                                    Monthly
                                </a>
                                <a
                                    id="optFilteration_Yearly_FinancialReports"
                                    href="javascript:;"
                                    className="optFilterationClass_FinancialReports"
                                >
                                    Yearly
                                </a>
                                <a
                                    id="optFilteration_CustomDates_FinancialReports"
                                    className="optFilterationClass_FinancialReports"
                                    onClick={handleDateModal}
                                >
                                    Custom Dates
                                </a>
                            </div>
                            <div
                                className="col-md-12 col-lg-12"
                                id="lblSelectedFilterOption_FinancialReports_ManageReports"
                                style={{ paddingTop: '8px', paddingLeft: '55px', fontSize: '20px' }}
                            >
                                {/* {selectedFilter} */}
                            </div>
                            <div className="graph">
                                <HighchartsReact highcharts={Highcharts} options={options} />
                            </div>
                            <hr className="space_wraps" />
                            <div className="pdf_reports">
                                <div className="wrap_pdf">
                                    <p
                                        id="link_Send_FinancialReportPDF"
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
                                                Financial Report
                                            </h3>
                                            <p
                                                id="lblFilterValue_Financial_PDFReport_RestaurantReports"
                                                style={{ textAlign: 'center' }}
                                            >
                                                01 Jan 2024 00:00:00 to 05 Nov 2024 10:17:09
                                            </p>
                                            <div
                                                className="finacial_reprt-wraps"
                                                style={{
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    justifyContent: 'space-between',
                                                    width: '92%',
                                                    border: '1px solid',
                                                    borderRadius: '5px',
                                                    padding: '10px 30px',
                                                    marginBottom: '10px',
                                                }}
                                            >
                                                <div className="table-responsive wrap_left_table" style={{ width: '49%' }}>
                                                    <table style={{ width: '100%', lineHeight: 'inherit', textAlign: 'left' }}>
                                                        <tbody>
                                                            <tr className="heading">
                                                                <td style={{ background: 'transparent', borderBottom: '0px', fontWeight: 'bold', padding: '5px', verticalAlign: 'top', fontSize: '13px', color: '#000', textAlign: 'right' }}></td>
                                                                <td style={{ background: 'transparent', borderBottom: '0px', fontWeight: 'bold', padding: '5px', verticalAlign: 'top', fontSize: '13px', color: '#000', textAlign: 'right' }}>Quantity</td>
                                                                <td style={{ background: 'transparent', borderBottom: '0px', fontWeight: 'bold', padding: '5px', verticalAlign: 'top', fontSize: '13px', color: '#000', textAlign: 'right' }}>Amount</td>
                                                            </tr>

                                                            <tr id="gross_sale_tr" className="details">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>Gross Sales</td>
                                                                <td id="lblGrossSales_Quantity_FinancialPDFReport_RestaurantReports" className="FinancialPDFReportFieldCommonClass" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>7</td>
                                                                <td id="lblGrossSales_Amount_FinancialPDFReport_RestaurantReports" className="FinancialPDFReportFieldCommonClass" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>799.02</td>
                                                            </tr>

                                                            <tr className="details st_discount" id="st_discount5">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>Sub Total Discount 1</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>0</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>0.00</td>
                                                            </tr>

                                                            <tr className="details st_discount" id="st_discount6">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>Sub Total Discount 2</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>2</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>40.00</td>
                                                            </tr>

                                                            <tr className="details st_discount" id="st_discount7">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>Sub Total Discount 3</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>0</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>0.00</td>
                                                            </tr>

                                                            <tr className="details st_discount" id="st_discount8">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>Sub Total Discount 4</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>0</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>0.00</td>
                                                            </tr>

                                                            <tr className="details">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>Surcharges</td>
                                                                <td id="Order_Surcharges_Count_FinancialPDFReport_RestaurantReports" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>2</td>
                                                                <td id="Order_Surcharges_Amount_FinancialPDFReport_RestaurantReports" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>4.08</td>
                                                            </tr>

                                                            <tr id="promotions_tr" className="details">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>
                                                                    <p style={{ marginBottom: '0px' }} className="promotions_td_text">Promotions</p>
                                                                    <div style={{ fontSize: '13px', fontStyle: 'italic' }}>2 x PROMO20241</div>
                                                                    <div style={{ fontSize: '13px', fontStyle: 'italic' }}>2 x THRESHOLD</div>
                                                                </td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>4</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>4.00</td>
                                                            </tr>

                                                            <tr className="details item_discount" id="item_discount1">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>Item Discount 1</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>0</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>0.00</td>
                                                            </tr>

                                                            <tr className="details item_discount" id="item_discount2">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>Item Discount 2</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>0</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>0.00</td>
                                                            </tr>

                                                            <tr className="details item_discount" id="item_discount3">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>Family Discount</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>2</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>68.00</td>
                                                            </tr>

                                                            <tr className="details item_discount" id="item_discount4">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>Item Discount 4</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>2</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>20.00</td>
                                                            </tr>

                                                            <tr className="total_financial_sale">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>NETT Sales (incl. tax)</td>
                                                                <td></td>
                                                                <td id="lblNettSales_IncludeTax_FinancialPDFReport_RestaurantReports" className="FinancialPDFReportFieldCommonClass" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right', borderTop: '2px solid #000', fontWeight: 'bold' }}>547.10</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                </div>
                                                <div className="table-responsive wrap_right_table" style={{ width: '49%' }}>
                                                    <table cellPadding="0" cellSpacing="0" style={{ width: '100%', lineHeight: 'inherit', textAlign: 'left' }}>
                                                        <tbody>
                                                            <tr className="heading">
                                                                <td></td>
                                                                <td style={{ background: 'transparent', borderBottom: '0px', fontWeight: 'bold', padding: '5px', verticalAlign: 'top', fontSize: '13px', color: '#000', textAlign: 'right' }}>Quantity</td>
                                                                <td style={{ background: 'transparent', borderBottom: '0px', fontWeight: 'bold', padding: '5px', verticalAlign: 'top', fontSize: '13px', color: '#000', textAlign: 'right' }}>Amount</td>
                                                            </tr>
                                                            <tr className="details">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>Transactions</td>
                                                                <td id="lblTransactions_Count_FinancialPDFReport_RestaurantReports" className="FinancialPDFReportFieldCommonClass" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>5</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}></td>
                                                            </tr>
                                                            <tr className="details">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>Sales</td>
                                                                <td id="lblSales_Count_FinancialPDFReport_RestaurantReports" className="FinancialPDFReportFieldCommonClass" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>1</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}></td>
                                                            </tr>
                                                            <tr className="details">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>No-Sales</td>
                                                                <td id="lblNoSale_Count_FinancialPDFReport_RestaurantReports" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>0</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}></td>
                                                            </tr>
                                                            <tr className="details wrap_avrgae_sales">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>Average $ per Sale</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}></td>
                                                                <td id="lblAveragePerSale_FinancialPDFReport_RestaurantReports" className="FinancialPDFReportFieldCommonClass" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>$109.42</td>
                                                            </tr>
                                                            <tr className="details">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>Refunds</td>
                                                                <td id="lblTotalRefundCount_FinancialPDFReport_RestaurantReports" className="FinancialPDFReportFieldCommonClass" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>4</td>
                                                                <td id="lblTotalRefundAmount_FinancialPDFReport_RestaurantReports" className="FinancialPDFReportFieldCommonClass" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>$124.00</td>
                                                            </tr>
                                                            <tr className="details">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>Voids</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>0</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>0.00</td>
                                                            </tr>
                                                            <tr className="details">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>Void Entire Sales</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}></td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>0.00</td>
                                                            </tr>
                                                            <tr className="details">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>Cost of Sales (Excl. GST)</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}></td>
                                                                <td id="lblCostOfSales_FinancialPDFReport_RestaurantReports" className="FinancialPDFReportFieldCommonClass" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>$313.00</td>
                                                            </tr>
                                                            <tr className="details">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>$ Margin</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}></td>
                                                                <td id="lblMarginAmount_FinancialPDFReport_RestaurantReports" className="FinancialPDFReportFieldCommonClass" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>$0.00</td>
                                                            </tr>
                                                            <tr className="details">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>Gross Profit (%)</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}></td>
                                                                <td id="lblGrossProfitPercentage_FinancialPDFReport_RestaurantReports" className="FinancialPDFReportFieldCommonClass" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>0.00</td>
                                                            </tr>
                                                            <tr className="details wrap_tax-amounts">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right', paddingTop: '30px', textDecoration: 'underline' }}>
                                                                    <span className="wrap_underline">Tax Amounts</span>
                                                                </td>
                                                                <td></td>
                                                                <td></td>
                                                            </tr>
                                                            <tr className="details">
                                                                <td></td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}><strong>Amount</strong></td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}><strong>Sales (Excl. tax)</strong></td>
                                                            </tr>
                                                            <tr className="details">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>GST</td>
                                                                <td id="lblGST_TaxAmount_FinancialPDFReport_RestaurantReports" className="FinancialPDFReportFieldCommonClass" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>71.36</td>
                                                                <td id="lblGST_SalesAmount_FinancialPDFReport_RestaurantReports" className="FinancialPDFReportFieldCommonClass" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>475.74</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>
                                            <div className="amountes_trends_wraps" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: '92%', border: '1px solid', borderRadius: '5px', padding: '20px 30px', marginBottom: '10px' }}>
                                                <div className="amounts_left_wrasp" style={{ width: '40%' }}>
                                                    <p style={{ textAlign: 'right' }}>
                                                        <span style={{ textDecoration: 'underline', fontSize: '13px' }}>AMOUNTS TENDERED FOR SALES</span>
                                                    </p>
                                                    <table id="saleDataByTenderType" cellPadding="0" cellSpacing="0" style={{ width: '100%', lineHeight: 'inherit', textAlign: 'left' }}>
                                                        <tbody>
                                                            <tr className="details">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>Cash</td>
                                                                <td id="lblSales_Count_FinancialPDFReport_RestaurantReports" className="FinancialPDFReportFieldCommonClass" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>5</td>
                                                                <td id="lblSales_Amount_FinancialPDFReport_RestaurantReports" className="FinancialPDFReportFieldCommonClass" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>595.55</td>
                                                            </tr>
                                                            <tr className="details">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>EFTPOS</td>
                                                                <td id="lblSales_Count_FinancialPDFReport_RestaurantReports" className="FinancialPDFReportFieldCommonClass" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>3</td>
                                                                <td id="lblSales_Amount_FinancialPDFReport_RestaurantReports" className="FinancialPDFReportFieldCommonClass" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>75.55</td>
                                                            </tr>
                                                            <tr className="details">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>Online Payment</td>
                                                                <td id="lblSales_Count_FinancialPDFReport_RestaurantReports" className="FinancialPDFReportFieldCommonClass" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>0</td>
                                                                <td id="lblSales_Amount_FinancialPDFReport_RestaurantReports" className="FinancialPDFReportFieldCommonClass" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>0.00</td>
                                                            </tr>
                                                            <tr className="details amount_finalsales">
                                                                <td></td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right', borderTop: '2px solid', fontWeight: 'bold' }}></td>
                                                                <td id="lblTotalSales_Amount_2_FinancialPDFReport_RestaurantReports" className="FinancialPDFReportFieldCommonClass" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right', borderTop: '2px solid', fontWeight: 'bold' }}>671.10</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="amounts_right_wrasp" style={{ width: '40%' }}>
                                                    <p style={{ textAlign: 'right' }}>
                                                        <span style={{ textDecoration: 'underline', fontSize: '13px' }}>AMOUNTS TENDERED FOR REFUND</span>
                                                    </p>
                                                    <table id="refundDataByTenderType" cellPadding="0" cellSpacing="0" style={{ width: '100%', lineHeight: 'inherit', textAlign: 'left' }}>
                                                        <tbody>
                                                            <tr className="details">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>Cash</td>
                                                                <td id="lblSales_RefundCount_FinancialPDFReport_RestaurantReports" className="FinancialPDFReportFieldCommonClass" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>1</td>
                                                                <td id="lblSales_RefundAmount_FinancialPDFReport_RestaurantReports" className="FinancialPDFReportFieldCommonClass" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>90.00</td>
                                                            </tr>
                                                            <tr className="details">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>EFTPOS</td>
                                                                <td id="lblSales_RefundCount_FinancialPDFReport_RestaurantReports" className="FinancialPDFReportFieldCommonClass" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>3</td>
                                                                <td id="lblSales_RefundAmount_FinancialPDFReport_RestaurantReports" className="FinancialPDFReportFieldCommonClass" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>34.00</td>
                                                            </tr>
                                                            <tr className="details">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>Online Payment</td>
                                                                <td id="lblSales_RefundCount_FinancialPDFReport_RestaurantReports" className="FinancialPDFReportFieldCommonClass" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>0</td>
                                                                <td id="lblSales_RefundAmount_FinancialPDFReport_RestaurantReports" className="FinancialPDFReportFieldCommonClass" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>0.00</td>
                                                            </tr>
                                                            <tr className="details refund_amount_finalsales">
                                                                <td></td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right', borderTop: '2px solid', fontWeight: 'bold' }}></td>
                                                                <td id="lblTotalSales_RefundAmount_2_FinancialPDFReport_RestaurantReports" className="FinancialPDFReportFieldCommonClass" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right', borderTop: '2px solid', fontWeight: 'bold' }}>124.00</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="amountes_trends_wraps" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: '92%', border: '1px solid', borderRadius: '5px', padding: '20px 30px', marginBottom: '10px' }}>
                                                <div className="amounts_left_wrasp" style={{ width: '40%' }}>
                                                    <table id="tblMainDepartments_FinancialPDFReport_RestaurantReports" cellPadding="0" cellSpacing="0" style={{ width: '100%', lineHeight: 'inherit', textAlign: 'left' }}>
                                                        <tbody>
                                                            <tr className="details">
                                                                <td className="wrap_sales_category" style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>
                                                                    <span style={{ textDecoration: 'underline' }}>SALES CATEGORIES</span>
                                                                </td>
                                                            </tr>
                                                            <tr className="rowsDepartmentFinancialPDFReportCommonClass">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>Veg Recipes</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>420.00</td>
                                                            </tr>
                                                            <tr className="rowsDepartmentFinancialPDFReportCommonClass">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>Juice Recipes</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>11.55</td>
                                                            </tr>
                                                            <tr className="rowsDepartmentFinancialPDFReportCommonClass">
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>Main 2</td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right' }}>75.55</td>
                                                            </tr>
                                                            <tr className="rowsDepartmentFinancialPDFReportCommonClass">
                                                                <td></td>
                                                                <td style={{ padding: '5px', verticalAlign: 'top', paddingBottom: '2px', fontSize: '13px', textAlign: 'right', borderTop: '1px solid', fontWeight: 'bold' }}>507.10</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="dv_Download_FinancialReport_Section" className="text-center" style={{ padding: '20px' }}>
                                        <form action="/Reports/Download_Financial_ReportasPDF" method="post">
                                            <input type="hidden" name="hdn_FinancialReport_Html" />
                                            <button type="submit" id="btnDownload_FinancialReportPDF_RestaurantReports" className="btn btn-info btn_print">
                                                PDF Download
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="financial_compression" className={`tab ${activeTab === 'financial_compression' ? 'active' : ''}`} style={{ display: activeTab === 'financial_compression' ? 'block' : 'none' }}>
                            <div className="graph">
                                <figure className="highcharts-figure">
                                    <HighchartsReact highcharts={Highcharts} options={optionsColumn} />
                                </figure>
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
                                                        className="form-control datetimepickerClass datetimepicker-input w-7"
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
                                                        className="form-control datetimepickerClass datetimepicker-input"
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

export default Financials