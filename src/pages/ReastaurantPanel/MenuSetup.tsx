import React from 'react';
import { Link } from 'react-router-dom'
import "../../assets/CSS/menusetup.css";

type Props = {}

const MenuSetup: React.FC = (props: Props) => {
    return (
        <div id="contentWrapper_RestaurantLayout" className="content-wrapper">
            <div className="background_menus-color">
                <div className="menus_wraps-items">
                    <div className="col-md-12 col-lg-12 col-sm-12">
                        <div className="row justify-content-center">
                            <div className="col-md-3 col-lg-3 col-sm-6 position-relative d-none">
                                <div id="selected_WebMenuTypeName" className="p-0"></div>
                                <div className="menus_wraps-items-options">
                                    <a href="javascript:;" onclick="ShowSetWebMenuTypeModal();">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19.798" viewBox="0 0 20 19.798">
                                            <g id="pencil-square" transform="translate(-2.25 -1.124)">
                                                <path id="Path_12697" data-name="Path 12697" d="M24.705,3.091a.683.683,0,0,1,0,.964L23.281,5.481,20.551,2.75l1.424-1.425a.683.683,0,0,1,.965,0L24.705,3.09Zm-2.39,3.353L19.585,3.714l-9.3,9.3a.683.683,0,0,0-.165.268l-1.1,3.3a.342.342,0,0,0,.431.431l3.3-1.1a.683.683,0,0,0,.268-.164l9.3-9.3Z" transform="translate(-2.655)"></path>
                                                <path id="Path_12698" data-name="Path 12698" d="M2.25,19.317A2.048,2.048,0,0,0,4.3,21.365H19.317a2.048,2.048,0,0,0,2.048-2.048V11.125a.683.683,0,1,0-1.365,0v8.192a.683.683,0,0,1-.683.683H4.3a.683.683,0,0,1-.683-.683V4.3A.683.683,0,0,1,4.3,3.615h8.875a.683.683,0,0,0,0-1.365H4.3A2.048,2.048,0,0,0,2.25,4.3Z" transform="translate(0 -0.443)" fill-rule="evenodd"></path>
                                            </g>
                                        </svg>
                                    </a>

                                </div>
                                <a href="/Restaurant/ManageWebMenu" className="active">
                                    <div className="items-wraps_etc">
                                        <p className="item_name">WEB MENU</p>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-3 col-lg-3 col-sm-6 menu_setup_commonClass">
                                <Link to="/pos-menu" className="active">
                                    <div className="items-wraps_etc">
                                        <p className="item_name">POS MENU</p>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-md-3 col-lg-3 col-sm-6 ml-5 menu_setup_commonClass">
                                <Link to="/kios-menu" className="active">
                                    <div className="items-wraps_etc">
                                        <p className="item_name">KIOSK MENU</p>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-md-3 col-lg-3 col-sm-6 d-none">
                                <a href="#" className="non-active">
                                    <div className="items-wraps_etc">
                                        <p className="item_name">DISPLAY</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuSetup