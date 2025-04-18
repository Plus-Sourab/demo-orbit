import React, { useState } from "react";

const TotalSalesCards: React.FC = () => {
  const [salesFilter, setSalesFilter] = useState<number>(1);

  const handleSalesFilter = (filter: number) => {
    setSalesFilter(filter);
    console.log(`Filter set to ${filter}`);
  };

  return (
    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-sm-12">
      <div className="LoaderDiv_DashboardRestaurantCommonClass">
        <div className="row ">
          <div
            className="wrapper-tab wraps_dashbords"
            style={{ padding: "23px" }}
          >
            <div className="wrapper-btn-bx">
              <div className="btn-bx text-end pr-3">
                <div className="btn-group">
                  <button 
                    type="button"
                    className="btn btn-white dropdown-toggle focus:outline-none focus:border-0"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"></path>
                      <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z"></path>
                      <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z"></path>
                    </svg>
                  </button>

                  <div className="dropdown-menu">
                    <a
                      id="optFilteration_Day_SalesReport"
                      className={`dropdown-item ${
                        salesFilter === 1 ? "active" : ""
                      }`}
                      href="#"
                      onClick={() => handleSalesFilter(1)}
                    >
                      Day
                    </a>
                    <a
                      id="optFilteration_Week_SalesReport"
                      className={`dropdown-item ${
                        salesFilter === 2 ? "active" : ""
                      }`}
                      href="#"
                      onClick={() => handleSalesFilter(2)}
                    >
                      Week
                    </a>
                    <a
                      id="optFilteration_Month_SalesReport"
                      className={`dropdown-item ${
                        salesFilter === 3 ? "active" : ""
                      }`}
                      href="#"
                      onClick={() => handleSalesFilter(3)}
                    >
                      Month
                    </a>
                  </div>
                </div>
              </div>

              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link w-100"
                    id="SalesTab_1_SalesReport"
                    data-toggle="tab"
                    data-target="#SalesTabBody_1_SalesReport"
                    type="button"
                    role="tab"
                    aria-controls="SalesTabBody_1_SalesReport"
                    aria-selected="false"
                  >
                    Today
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link w-100 active"
                    id="SalesTab_2_SalesReport"
                    data-toggle="tab"
                    data-target="#SalesTabBody_2_SalesReport"
                    type="button"
                    role="tab"
                    aria-controls="SalesTabBody_2_SalesReport"
                    aria-selected="true"
                  >
                    Yesterday
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link w-100"
                    id="SalesTab_3_SalesReport"
                    data-toggle="tab"
                    data-target="#SalesTabBody_3_SalesReport"
                    type="button"
                    role="tab"
                    aria-controls="SalesTabBody_3_SalesReport"
                    aria-selected="false"
                  >
                    Last Thursday
                  </button>
                </li>
              </ul>
              <div>
                {/* Tab Content */}
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade"
                    id="SalesTabBody_1_SalesReport"
                    role="tabpanel"
                    aria-labelledby="SalesTab_1_SalesReport"
                  >
                    <div className="total-bx">
                      <div className="total-tab1">
                        <div className="under-table flex items-center">
                          <div className="t1">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6"
                            >
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                                  stroke="#000000"
                                  strokeWidth="1.5"
                                ></path>
                                <path
                                  d="M17 12.6667C17 16.9333 13.4444 18 11.6667 18C10.1111 18 7 16.9333 7 12.6667C7 10.8109 8.06292 9.63276 8.95593 9.03976C9.36421 8.76864 9.87201 8.94193 9.89841 9.43131C9.95616 10.5021 10.7814 11.3622 11.4205 10.5011C12.0054 9.71299 12.2941 8.64273 12.2941 8.00001C12.2941 7.05323 13.2525 6.45159 14.0008 7.03166C15.4593 8.16231 17 10.0558 17 12.6667Z"
                                  stroke="#000000"
                                  strokeWidth="1.5"
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <div className="t1">
                            <p>Total Sale</p>
                          </div>
                          <div className="t1">
                            <span id="lblSaleCount_1_SalesReport">0</span>
                          </div>
                        </div>
                        <h2 id="lblSaleAmount_1_SalesReport">$0</h2>
                      </div>
                      <div className="total-tab1">
                        <div className="under-table flex items-center">
                          <div className="t1">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6"
                            >
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                                  stroke="#000000"
                                  strokeWidth="1.5"
                                ></path>
                                <path
                                  d="M17 12.6667C17 16.9333 13.4444 18 11.6667 18C10.1111 18 7 16.9333 7 12.6667C7 10.8109 8.06292 9.63276 8.95593 9.03976C9.36421 8.76864 9.87201 8.94193 9.89841 9.43131C9.95616 10.5021 10.7814 11.3622 11.4205 10.5011C12.0054 9.71299 12.2941 8.64273 12.2941 8.00001C12.2941 7.05323 13.2525 6.45159 14.0008 7.03166C15.4593 8.16231 17 10.0558 17 12.6667Z"
                                  stroke="#000000"
                                  strokeWidth="1.5"
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <div className="t1">
                            <p>Profit</p>
                          </div>
                          <div className="t1">
                            <span></span>
                          </div>
                        </div>
                        <h2 id="lblProfitAmount_1_SalesReport">$0</h2>
                      </div>
                      <div className="total-tab1">
                        <div className="under-table flex items-center">
                          <div className="t1">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6"
                            >
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                                  stroke="#000000"
                                  strokeWidth="1.5"
                                ></path>
                                <path
                                  d="M17 12.6667C17 16.9333 13.4444 18 11.6667 18C10.1111 18 7 16.9333 7 12.6667C7 10.8109 8.06292 9.63276 8.95593 9.03976C9.36421 8.76864 9.87201 8.94193 9.89841 9.43131C9.95616 10.5021 10.7814 11.3622 11.4205 10.5011C12.0054 9.71299 12.2941 8.64273 12.2941 8.00001C12.2941 7.05323 13.2525 6.45159 14.0008 7.03166C15.4593 8.16231 17 10.0558 17 12.6667Z"
                                  stroke="#000000"
                                  strokeWidth="1.5"
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <div className="t1">
                            <p>Voids</p>
                          </div>
                          <div className="t1">
                            <span id="lblVoidsCount_1_SalesReport">0</span>
                          </div>
                        </div>
                        <h2 id="lblVoidsAmount_1_SalesReport">$0</h2>
                      </div>
                      <div className="total-tab1">
                        <div className="under-table flex items-center">
                          <div className="t1">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6"
                            >
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                                  stroke="#000000"
                                  strokeWidth="1.5"
                                ></path>
                                <path
                                  d="M17 12.6667C17 16.9333 13.4444 18 11.6667 18C10.1111 18 7 16.9333 7 12.6667C7 10.8109 8.06292 9.63276 8.95593 9.03976C9.36421 8.76864 9.87201 8.94193 9.89841 9.43131C9.95616 10.5021 10.7814 11.3622 11.4205 10.5011C12.0054 9.71299 12.2941 8.64273 12.2941 8.00001C12.2941 7.05323 13.2525 6.45159 14.0008 7.03166C15.4593 8.16231 17 10.0558 17 12.6667Z"
                                  stroke="#000000"
                                  strokeWidth="1.5"
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <div className="t1">
                            <p>Reprints</p>
                          </div>
                          <div className="t1">
                            <span id="lblReprintsCount_1_SalesReport">0</span>
                          </div>
                        </div>
                        <h2 id="lblReprintsAmount_1_SalesReport">$0</h2>
                      </div>
                    </div>
                  </div>

                  {/* On Select Yesterday show below  */}
                  <div
                    className="tab-pane fade active show"
                    id="SalesTabBody_2_SalesReport"
                    role="tabpanel"
                    aria-labelledby="SalesTab_2_SalesReport"
                  >
                    <div className="total-bx">
                      <div className="total-tab1">
                        <div className="under-table">
                          <div className="t1">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                                  stroke="#000000"
                                  strokeWidth="1.5"
                                ></path>
                                <path
                                  d="M17 12.6667C17 16.9333 13.4444 18 11.6667 18C10.1111 18 7 16.9333 7 12.6667C7 10.8109 8.06292 9.63276 8.95593 9.03976C9.36421 8.76864 9.87201 8.94193 9.89841 9.43131C9.95616 10.5021 10.7814 11.3622 11.4205 10.5011C12.0054 9.71299 12.2941 8.64273 12.2941 8.00001C12.2941 7.05323 13.2525 6.45159 14.0008 7.03166C15.4593 8.16231 17 10.0558 17 12.6667Z"
                                  stroke="#000000"
                                  strokeWidth="1.5"
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <div className="t1">
                            <p>Total Sale</p>
                          </div>
                          <div className="t1">
                            <span id="lblSaleCount_2_SalesReport">3</span>
                          </div>
                        </div>
                        <h2 id="lblSaleAmount_2_SalesReport">$645</h2>
                      </div>
                      <div className="total-tab1">
                        <div className="under-table">
                          <div className="t1">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                                  stroke="#000000"
                                  strokeWidth="1.5"
                                ></path>
                                <path
                                  d="M17 12.6667C17 16.9333 13.4444 18 11.6667 18C10.1111 18 7 16.9333 7 12.6667C7 10.8109 8.06292 9.63276 8.95593 9.03976C9.36421 8.76864 9.87201 8.94193 9.89841 9.43131C9.95616 10.5021 10.7814 11.3622 11.4205 10.5011C12.0054 9.71299 12.2941 8.64273 12.2941 8.00001C12.2941 7.05323 13.2525 6.45159 14.0008 7.03166C15.4593 8.16231 17 10.0558 17 12.6667Z"
                                  stroke="#000000"
                                  strokeWidth="1.5"
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <div className="t1">
                            <p>Profit</p>
                          </div>
                          <div className="t1">
                            <span></span>
                          </div>
                        </div>
                        <h2 id="lblProfitAmount_2_SalesReport">$170.87</h2>
                      </div>
                      <div className="total-tab1">
                        <div className="under-table">
                          <div className="t1">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                                  stroke="#000000"
                                  strokeWidth="1.5"
                                ></path>
                                <path
                                  d="M17 12.6667C17 16.9333 13.4444 18 11.6667 18C10.1111 18 7 16.9333 7 12.6667C7 10.8109 8.06292 9.63276 8.95593 9.03976C9.36421 8.76864 9.87201 8.94193 9.89841 9.43131C9.95616 10.5021 10.7814 11.3622 11.4205 10.5011C12.0054 9.71299 12.2941 8.64273 12.2941 8.00001C12.2941 7.05323 13.2525 6.45159 14.0008 7.03166C15.4593 8.16231 17 10.0558 17 12.6667Z"
                                  stroke="#000000"
                                  strokeWidth="1.5"
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <div className="t1">
                            <p>Voids</p>
                          </div>
                          <div className="t1">
                            <span id="lblVoidsCount_2_SalesReport">0</span>
                          </div>
                        </div>
                        <h2 id="lblVoidsAmount_2_SalesReport">$0</h2>
                      </div>
                      <div className="total-tab1">
                        <div className="under-table">
                          <div className="t1">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                                  stroke="#000000"
                                  strokeWidth="1.5"
                                ></path>
                                <path
                                  d="M17 12.6667C17 16.9333 13.4444 18 11.6667 18C10.1111 18 7 16.9333 7 12.6667C7 10.8109 8.06292 9.63276 8.95593 9.03976C9.36421 8.76864 9.87201 8.94193 9.89841 9.43131C9.95616 10.5021 10.7814 11.3622 11.4205 10.5011C12.0054 9.71299 12.2941 8.64273 12.2941 8.00001C12.2941 7.05323 13.2525 6.45159 14.0008 7.03166C15.4593 8.16231 17 10.0558 17 12.6667Z"
                                  stroke="#000000"
                                  strokeWidth="1.5"
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <div className="t1">
                            <p>Refunds</p>
                          </div>
                          <div className="t1">
                            <span id="lblVoidsCount_2_SalesReport">0</span>
                          </div>
                        </div>
                        <h2 id="lblVoidsAmount_2_SalesReport">$0</h2>
                      </div>
                    </div>
                  </div>
                  {/* On Last Thrusday show below  */}
                  <div
                    className="tab-pane fade"
                    id="SalesTabBody_3_SalesReport"
                    role="tabpanel"
                    aria-labelledby="SalesTab_3_SalesReport"
                  >
                    <div className="total-bx">
                      <div className="total-tab1">
                        <div className="under-table">
                          <div className="t1">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                                  stroke="#000000"
                                  strokeWidth="1.5"
                                ></path>
                                <path
                                  d="M17 12.6667C17 16.9333 13.4444 18 11.6667 18C10.1111 18 7 16.9333 7 12.6667C7 10.8109 8.06292 9.63276 8.95593 9.03976C9.36421 8.76864 9.87201 8.94193 9.89841 9.43131C9.95616 10.5021 10.7814 11.3622 11.4205 10.5011C12.0054 9.71299 12.2941 8.64273 12.2941 8.00001C12.2941 7.05323 13.2525 6.45159 14.0008 7.03166C15.4593 8.16231 17 10.0558 17 12.6667Z"
                                  stroke="#000000"
                                  strokeWidth="1.5"
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <div className="t1">
                            <p>Total Sale</p>
                          </div>
                          <div className="t1">
                            <span id="lblSaleCount_3_SalesReport">1</span>
                          </div>
                        </div>
                        <h2 id="lblSaleAmount_3_SalesReport">$90</h2>
                      </div>
                      <div className="total-tab1">
                        <div className="under-table">
                          <div className="t1">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                                  stroke="#000000"
                                  strokeWidth="1.5"
                                ></path>
                                <path
                                  d="M17 12.6667C17 16.9333 13.4444 18 11.6667 18C10.1111 18 7 16.9333 7 12.6667C7 10.8109 8.06292 9.63276 8.95593 9.03976C9.36421 8.76864 9.87201 8.94193 9.89841 9.43131C9.95616 10.5021 10.7814 11.3622 11.4205 10.5011C12.0054 9.71299 12.2941 8.64273 12.2941 8.00001C12.2941 7.05323 13.2525 6.45159 14.0008 7.03166C15.4593 8.16231 17 10.0558 17 12.6667Z"
                                  stroke="#000000"
                                  strokeWidth="1.5"
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <div className="t1">
                            <p>Profit</p>
                          </div>
                          <div className="t1">
                            <span></span>
                          </div>
                        </div>
                        <h2 id="lblProfitAmount_3_SalesReport">$28.26</h2>
                      </div>
                      <div className="total-tab1">
                        <div className="under-table">
                          <div className="t1">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                                  stroke="#000000"
                                  strokeWidth="1.5"
                                ></path>
                                <path
                                  d="M17 12.6667C17 16.9333 13.4444 18 11.6667 18C10.1111 18 7 16.9333 7 12.6667C7 10.8109 8.06292 9.63276 8.95593 9.03976C9.36421 8.76864 9.87201 8.94193 9.89841 9.43131C9.95616 10.5021 10.7814 11.3622 11.4205 10.5011C12.0054 9.71299 12.2941 8.64273 12.2941 8.00001C12.2941 7.05323 13.2525 6.45159 14.0008 7.03166C15.4593 8.16231 17 10.0558 17 12.6667Z"
                                  stroke="#000000"
                                  strokeWidth="1.5"
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <div className="t1">
                            <p>Voids</p>
                          </div>
                          <div className="t1">
                            <span id="lblVoidsCount_3_SalesReport">0</span>
                          </div>
                        </div>
                        <h2 id="lblVoidsAmount_3_SalesReport">$0</h2>
                      </div>
                      <div className="total-tab1">
                        <div className="under-table">
                          <div className="t1">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                                  stroke="#000000"
                                  strokeWidth="1.5"
                                ></path>
                                <path
                                  d="M17 12.6667C17 16.9333 13.4444 18 11.6667 18C10.1111 18 7 16.9333 7 12.6667C7 10.8109 8.06292 9.63276 8.95593 9.03976C9.36421 8.76864 9.87201 8.94193 9.89841 9.43131C9.95616 10.5021 10.7814 11.3622 11.4205 10.5011C12.0054 9.71299 12.2941 8.64273 12.2941 8.00001C12.2941 7.05323 13.2525 6.45159 14.0008 7.03166C15.4593 8.16231 17 10.0558 17 12.6667Z"
                                  stroke="#000000"
                                  strokeWidth="1.5"
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <div className="t1">
                            <p>Returns</p>
                          </div>
                          <div className="t1">
                            <span id="lblReturnCount_3_SalesReport">0</span>
                          </div>
                        </div>
                        <h2 id="lblReturnAmount_3_SalesReport">$0</h2>
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
  );
};

export default TotalSalesCards;
