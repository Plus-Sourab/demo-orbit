import React from 'react'

const POSmenu: React.FC = () => {

    const opneColorPickerModal = () => {
        const button = document.getElementById('ShowingColorPickerPopup_POSMenuSetup');
        if (button) {
            button.click();
        }
    }

    return (<>
        <div className="pos-menu-main">
            <div className="row">
                <div className="col-md-4 pr-0">
                    <div className="pos-left">
                        <div className="pos-cate-butns">
                            <button> Dine In</button>
                            <button>Take Away</button>
                            <button>Tables</button>
                            <button>Order no</button>
                            <button>Park Sale</button>
                            <button>Banking Report</button>
                            <button>Customer Name</button>
                            <button>No Sale</button>
                            <button>Surcharge + 15%</button>
                        </div>
                        <div className="pos-table1">
                            <table className="table">
                                <thead className="table-light">
                                    <tr>
                                        <th scope="col" id="BindSubdepartmentName">Sub 2</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody id="BindProductListBySubdepartmentId_POSMenuSetup">
                                    <tr className="itemClass_POSMenuSetup trCommonClass" id="LeftSideProductId_34" data-val="34" onClick="SelectProductFromProductList(34,9,1,29)">
                                        <td>Rahul</td>
                                        <td className="text-right">$0</td>
                                    </tr>
                                    <tr className="itemClass_POSMenuSetup trCommonClass" id="LeftSideProductId_48" data-val="48" onClick="SelectProductFromProductList(48,9,1,30)">
                                        <td>Product 999</td>
                                        <td className="text-right">$50.55</td>
                                    </tr>
                                    <tr className="itemClass_POSMenuSetup trCommonClass" id="LeftSideProductId_49" data-val="49" onClick="SelectProductFromProductList(49,9,1,31)">
                                        <td>Pro 8800</td>
                                        <td className="text-right">$66.88</td>
                                    </tr></tbody>
                            </table>
                        </div>
                        <div className="pos-nav">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a className="nav-item nav-link buttonTabClickCommonClass" id="nav-home-tab" data-toggle="tab" href="#nav-home" data-id="1" role="tab" aria-controls="nav-home" aria-selected="false">Button settings</a>
                                    <a className="nav-item nav-link buttonTabClickCommonClass" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" data-id="2" role="tab" aria-controls="nav-profile" aria-selected="false">Color &amp; Image</a>
                                    <a className="nav-item nav-link buttonTabClickCommonClass active" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" data-id="3" role="tab" aria-controls="nav-contact" aria-selected="true">Fonts</a>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <div className="switch-1">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p>Setup Button</p>
                                            </div>
                                            <div className="col-md-6">
                                                <div>
                                                    <label className="switch round_wraps">
                                                        <input className="buttonSettingCommonClass" type="checkbox" id="SetupButton_POSMenuSetup_1" name="modifiyProductsRadioBtn" value="1" onchange="SelectButton_POSMenuSetup(1);" />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="switch-1">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p>Move Button</p>
                                            </div>
                                            <div className="col-md-6">
                                                <div>
                                                    <label className="switch round_wraps">
                                                        <input className="buttonSettingCommonClass" type="checkbox" id="SetupButton_POSMenuSetup_2" name="modifiyProductsRadioBtn" value="2" onchange="SelectButton_POSMenuSetup(2);" />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="switch-1">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p>Copy Button</p>
                                            </div>
                                            <div className="col-md-6">
                                                <div>
                                                    <label className="switch round_wraps">
                                                        <input className="buttonSettingCommonClass" type="checkbox" id="SetupButton_POSMenuSetup_3" name="modifiyProductsRadioBtn" value="3" onchange="SelectButton_POSMenuSetup(3);" />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="switch-1">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p>Copy Style</p>
                                            </div>
                                            <div className="col-md-6">
                                                <div>
                                                    <label className="switch round_wraps">
                                                        <input className="buttonSettingCommonClass" type="checkbox" id="SetupButton_POSMenuSetup_4" name="modifiyProductsRadioBtn" value="4" onchange="SelectButton_POSMenuSetup(4);" />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <div className="color-radio">
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" data-option="#default-color" type="radio" checked="" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                            <label className="form-check-label" htmlFor="inlineRadio1">Menu Color<i className="input-helper"></i></label>
                                        </div>
                                        <div className="form-check form-check-inline d-none">
                                            <input className="form-check-input" data-option="#color-option" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                            <label className="form-check-label" htmlFor="inlineRadio2">Auto color<i className="input-helper"></i></label>
                                        </div>
                                    </div>
                                    <div className="color-wrapper">
                                        <div className="color-flex">
                                            <div className="menu-btn-radio d-none" id="color-option">
                                                <button style={{ backgroundColor: "#5650BC" }}></button>
                                                <button style={{ backgroundColor: "#fd8d21" }}></button>
                                                <button style={{ backgroundColor: "#222222" }}></button>
                                                <button style={{ backgroundColor: "#e45827" }}></button>
                                            </div>
                                            <div className="choose-btn-radio text-center" id="default-color" >

                                                <img src="../../Content/Images/colorPickerImage.png" height="90px" width="90px" style={{ cursor: "pointer" }} onClick={opneColorPickerModal} />
                                                <p>Select Colour</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade active show" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                    <div className="font-up">
                                        <div className="color-flex">
                                            <a href="javascript:;" id="DecreaseFontSizeButton_POSMenuSetup" onClick="DecreaseFontSizeButton();">-</a> <span>A</span>
                                            <a href="javascript:;" id="IncreaseFontSizeButton_POSMenuSetup" className=" font-active" onClick="IncreaseFontSizeButton();">+</a>
                                        </div>
                                    </div>

                                </div>
                                <a href="/Restaurant/MenuSetup">
                                    <button className="tab-save">Save &amp; Exit</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="pos-right">
                        <div className="tab-content ui-droppable" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><div className="row"><div className="col"><div className="modify-inner d-flex disabled-div" data-val="0" id="ParentIdProduct_0"><a href="">+</a></div></div><div className="col"><div className="modify-inner filled" data-val="1" id="ParentIdProduct_1" pro-id="55" background-color="" image-status="0"><span title="Delete" onClick="DeleteProductFromContainer(55,9)">-</span>

                                <div className="modify-position">
                                    <p className="m-0 pb-1" font-size="14" style={{ fontSize: "14px" }}>Rahul</p>

                                </div></div></div><div className="col"><div className="modify-inner filled" data-val="2" id="ParentIdProduct_2" pro-id="56" background-color="" image-status="0"><span title="Delete" onClick="DeleteProductFromContainer(56,9)">-</span>

                                    <div className="modify-position">
                                        <p className="m-0 pb-1" font-size="14" style={{ fontSize: "14px" }}>Product 999</p>

                                    </div></div></div><div className="col"><div className="modify-inner filled" data-val="3" id="ParentIdProduct_3" pro-id="57" background-color="" image-status="0"><span title="Delete" onClick="DeleteProductFromContainer(57,9)">-</span>

                                        <div className="modify-position">
                                            <p className="m-0 pb-1" font-size="14" style={{ fontSize: "14px" }}>Pro 8800</p>

                                        </div></div></div><div className="col"><div className="modify-inner" data-val="4" id="ParentIdProduct_4"></div></div></div><div className="row"><div className="col"><div className="modify-inner" data-val="5" id="ParentIdProduct_5"></div></div><div className="col"><div className="modify-inner" data-val="6" id="ParentIdProduct_6"></div></div><div className="col"><div className="modify-inner" data-val="7" id="ParentIdProduct_7"></div></div><div className="col"><div className="modify-inner" data-val="8" id="ParentIdProduct_8"></div></div><div className="col"><div className="modify-inner" data-val="9" id="ParentIdProduct_9"></div></div></div><div className="row"><div className="col"><div className="modify-inner" data-val="10" id="ParentIdProduct_10"></div></div><div className="col"><div className="modify-inner" data-val="11" id="ParentIdProduct_11"></div></div><div className="col"><div className="modify-inner" data-val="12" id="ParentIdProduct_12"></div></div><div className="col"><div className="modify-inner" data-val="13" id="ParentIdProduct_13"></div></div><div className="col"><div className="modify-inner" data-val="14" id="ParentIdProduct_14"></div></div></div><div className="row"><div className="col"><div className="modify-inner" data-val="15" id="ParentIdProduct_15"></div></div><div className="col"><div className="modify-inner" data-val="16" id="ParentIdProduct_16"></div></div><div className="col"><div className="modify-inner" data-val="17" id="ParentIdProduct_17"></div></div><div className="col"><div className="modify-inner" data-val="18" id="ParentIdProduct_18"></div></div><div className="col"><div className="modify-inner" data-val="19" id="ParentIdProduct_19"></div></div></div><div className="row"><div className="col"><div className="modify-inner" data-val="20" id="ParentIdProduct_20"></div></div><div className="col"><div className="modify-inner" data-val="21" id="ParentIdProduct_21"></div></div><div className="col"><div className="modify-inner" data-val="22" id="ParentIdProduct_22"></div></div><div className="col"><div className="modify-inner" data-val="23" id="ParentIdProduct_23"></div></div><div className="col"><div className="modify-inner" data-val="24" id="ParentIdProduct_24"></div></div></div><div className="row"><div className="col"><div className="modify-inner" data-val="25" id="ParentIdProduct_25"></div></div><div className="col"><div className="modify-inner" data-val="26" id="ParentIdProduct_26"></div></div><div className="col"><div className="modify-inner" data-val="27" id="ParentIdProduct_27"></div></div><div className="col"><div className="modify-inner" data-val="28" id="ParentIdProduct_28"></div></div><div className="col"><div className="modify-inner" data-val="29" id="ParentIdProduct_29"></div></div></div><div className="row"><div className="col"><div className="modify-inner" data-val="30" id="ParentIdProduct_30"></div></div><div className="col"><div className="modify-inner" data-val="31" id="ParentIdProduct_31"></div></div><div className="col"><div className="modify-inner" data-val="32" id="ParentIdProduct_32"></div></div><div className="col"><div className="modify-inner" data-val="33" id="ParentIdProduct_33"></div></div><div className="col"><div className="modify-inner" data-val="34" id="ParentIdProduct_34"></div></div></div><div className="row"><div className="col"><div className="modify-inner" data-val="35" id="ParentIdProduct_35"></div></div><div className="col"><div className="modify-inner" data-val="36" id="ParentIdProduct_36"></div></div><div className="col"><div className="modify-inner" data-val="37" id="ParentIdProduct_37"></div></div><div className="col"><div className="modify-inner" data-val="38" id="ParentIdProduct_38"></div></div><div className="col"><div className="modify-inner" data-val="39" id="ParentIdProduct_39"></div></div></div><div className="row"><div className="col"><div className="modify-inner" data-val="40" id="ParentIdProduct_40"></div></div><div className="col"><div className="modify-inner" data-val="41" id="ParentIdProduct_41"></div></div><div className="col"><div className="modify-inner" data-val="42" id="ParentIdProduct_42"></div></div><div className="col"><div className="modify-inner" data-val="43" id="ParentIdProduct_43"></div></div><div className="col"><div className="modify-inner" data-val="44" id="ParentIdProduct_44"></div></div></div><div className="row"><div className="col"><div className="modify-inner" data-val="45" id="ParentIdProduct_45"></div></div><div className="col"><div className="modify-inner" data-val="46" id="ParentIdProduct_46"></div></div><div className="col"><div className="modify-inner" data-val="47" id="ParentIdProduct_47"></div></div><div className="col"><div className="modify-inner" data-val="48" id="ParentIdProduct_48"></div></div><div className="col"><div className="modify-inner" data-val="49" id="ParentIdProduct_49"></div></div></div><div className="row"><div className="col"><div className="modify-inner" data-val="50" id="ParentIdProduct_50"></div></div><div className="col"><div className="modify-inner" data-val="51" id="ParentIdProduct_51"></div></div><div className="col"><div className="modify-inner" data-val="52" id="ParentIdProduct_52"></div></div><div className="col"><div className="modify-inner" data-val="53" id="ParentIdProduct_53"></div></div><div className="col"><div className="modify-inner" data-val="54" id="ParentIdProduct_54"></div></div></div><div className="row"><div className="col"><div className="modify-inner" data-val="55" id="ParentIdProduct_55"></div></div><div className="col"><div className="modify-inner" data-val="56" id="ParentIdProduct_56"></div></div><div className="col"><div className="modify-inner" data-val="57" id="ParentIdProduct_57"></div></div><div className="col"><div className="modify-inner" data-val="58" id="ParentIdProduct_58"></div></div><div className="col"><div className="modify-inner" data-val="59" id="ParentIdProduct_59"></div></div></div><div className="row"><div className="col"><div className="modify-inner" data-val="60" id="ParentIdProduct_60"></div></div><div className="col"><div className="modify-inner" data-val="61" id="ParentIdProduct_61"></div></div><div className="col"><div className="modify-inner" data-val="62" id="ParentIdProduct_62"></div></div><div className="col"><div className="modify-inner" data-val="63" id="ParentIdProduct_63"></div></div><div className="col"><div className="modify-inner" data-val="64" id="ParentIdProduct_64"></div></div></div><div className="row"><div className="col"><div className="modify-inner" data-val="65" id="ParentIdProduct_65"></div></div><div className="col"><div className="modify-inner" data-val="66" id="ParentIdProduct_66"></div></div><div className="col"><div className="modify-inner" data-val="67" id="ParentIdProduct_67"></div></div><div className="col"><div className="modify-inner" data-val="68" id="ParentIdProduct_68"></div></div><div className="col"><div className="modify-inner" data-val="69" id="ParentIdProduct_69"></div></div></div><div className="row"><div className="col"><div className="modify-inner" data-val="70" id="ParentIdProduct_70"></div></div><div className="col"><div className="modify-inner" data-val="71" id="ParentIdProduct_71"></div></div><div className="col"><div className="modify-inner" data-val="72" id="ParentIdProduct_72"></div></div><div className="col"><div className="modify-inner" data-val="73" id="ParentIdProduct_73"></div></div><div className="col"><div className="modify-inner" data-val="74" id="ParentIdProduct_74"></div></div></div><div className="row"><div className="col"><div className="modify-inner" data-val="75" id="ParentIdProduct_75"></div></div><div className="col"><div className="modify-inner" data-val="76" id="ParentIdProduct_76"></div></div><div className="col"><div className="modify-inner" data-val="77" id="ParentIdProduct_77"></div></div><div className="col"><div className="modify-inner" data-val="78" id="ParentIdProduct_78"></div></div><div className="col"><div className="modify-inner" data-val="79" id="ParentIdProduct_79"></div></div></div><div className="row"><div className="col"><div className="modify-inner" data-val="80" id="ParentIdProduct_80"></div></div><div className="col"><div className="modify-inner" data-val="81" id="ParentIdProduct_81"></div></div><div className="col"><div className="modify-inner" data-val="82" id="ParentIdProduct_82"></div></div><div className="col"><div className="modify-inner" data-val="83" id="ParentIdProduct_83"></div></div><div className="col"><div className="modify-inner" data-val="84" id="ParentIdProduct_84"></div></div></div><div className="row"><div className="col"><div className="modify-inner" data-val="85" id="ParentIdProduct_85"></div></div><div className="col"><div className="modify-inner" data-val="86" id="ParentIdProduct_86"></div></div><div className="col"><div className="modify-inner" data-val="87" id="ParentIdProduct_87"></div></div><div className="col"><div className="modify-inner" data-val="88" id="ParentIdProduct_88"></div></div><div className="col"><div className="modify-inner" data-val="89" id="ParentIdProduct_89"></div></div></div><div className="row"><div className="col"><div className="modify-inner" data-val="90" id="ParentIdProduct_90"></div></div><div className="col"><div className="modify-inner" data-val="91" id="ParentIdProduct_91"></div></div><div className="col"><div className="modify-inner" data-val="92" id="ParentIdProduct_92"></div></div><div className="col"><div className="modify-inner" data-val="93" id="ParentIdProduct_93"></div></div><div className="col"><div className="modify-inner" data-val="94" id="ParentIdProduct_94"></div></div></div><div className="row"><div className="col"><div className="modify-inner" data-val="95" id="ParentIdProduct_95"></div></div><div className="col"><div className="modify-inner" data-val="96" id="ParentIdProduct_96"></div></div><div className="col"><div className="modify-inner" data-val="97" id="ParentIdProduct_97"></div></div><div className="col"><div className="modify-inner" data-val="98" id="ParentIdProduct_98"></div></div><div className="col"><div className="modify-inner" data-val="99" id="ParentIdProduct_99"></div></div></div><div className="row"><div className="col"><div className="modify-inner" data-val="100" id="ParentIdProduct_100"></div></div><div className="col"><div className="modify-inner" data-val="101" id="ParentIdProduct_101"></div></div><div className="col"><div className="modify-inner" data-val="102" id="ParentIdProduct_102"></div></div><div className="col"><div className="modify-inner" data-val="103" id="ParentIdProduct_103"></div></div><div className="col"><div className="modify-inner" data-val="104" id="ParentIdProduct_104"></div></div></div><div className="row"><div className="col"><div className="modify-inner" data-val="105" id="ParentIdProduct_105"></div></div><div className="col"><div className="modify-inner" data-val="106" id="ParentIdProduct_106"></div></div><div className="col"><div className="modify-inner" data-val="107" id="ParentIdProduct_107"></div></div><div className="col"><div className="modify-inner" data-val="108" id="ParentIdProduct_108"></div></div><div className="col"><div className="modify-inner" data-val="109" id="ParentIdProduct_109"></div></div></div><div className="row"><div className="col"><div className="modify-inner" data-val="110" id="ParentIdProduct_110"></div></div><div className="col"><div className="modify-inner" data-val="111" id="ParentIdProduct_111"></div></div><div className="col"><div className="modify-inner" data-val="112" id="ParentIdProduct_112"></div></div><div className="col"><div className="modify-inner" data-val="113" id="ParentIdProduct_113"></div></div><div className="col"><div className="modify-inner" data-val="114" id="ParentIdProduct_114"></div></div></div><div className="row"><div className="col"><div className="modify-inner" data-val="115" id="ParentIdProduct_115"></div></div><div className="col"><div className="modify-inner" data-val="116" id="ParentIdProduct_116"></div></div><div className="col"><div className="modify-inner" data-val="117" id="ParentIdProduct_117"></div></div><div className="col"><div className="modify-inner" data-val="118" id="ParentIdProduct_118"></div></div><div className="col"><div className="modify-inner" data-val="119" id="ParentIdProduct_119"></div></div></div></div>

                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>

                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>

                            <div className="tab-pane fade" id="pills-bawerages" role="tabpanel" aria-labelledby="pills-bawerages-tab">...</div>

                            <div className="tab-pane fade" id="pills-test" role="tabpanel" aria-labelledby="pills-test-tab">...</div>
                        </div>
                        <div className="scrollable-container mt-2 overflow-x-scroll">
                            <ul className="nav nav-pills" id="ListEvenSubdepartment_POSMenuSetup" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass active" id="pills-home-tab_9" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(9,'Sub 2');" role="tab" aria-controls="pills-home" title="Sub 2" aria-selected="true">Sub 2</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_45" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(45,'Paneer Recipes');" role="tab" aria-controls="pills-home" title="Paneer Recipes" aria-selected="true">Paneer Recipe...</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_53" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(53,'Fast Food');" role="tab" aria-controls="pills-home" title="Fast Food" aria-selected="true">Fast Food</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_1" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(1,'22 Banana Shake');" role="tab" aria-controls="pills-home" title="22 Banana Shake" aria-selected="true">22 Banana Sha...</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_5" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(5,'Banana Shake 2299900');" role="tab" aria-controls="pills-home" title="Banana Shake 2299900" aria-selected="true">Banana Shake ...</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_11" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(11,'Sub 3');" role="tab" aria-controls="pills-home" title="Sub 3" aria-selected="true">Sub 3</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_14" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(14,'gggg');" role="tab" aria-controls="pills-home" title="gggg" aria-selected="true">gggg</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_13" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(13,'sssss');" role="tab" aria-controls="pills-home" title="sssss" aria-selected="true">sssss</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_22" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(22,'Sub 1');" role="tab" aria-controls="pills-home" title="Sub 1" aria-selected="true">Sub 1</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_51" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(51,'subb');" role="tab" aria-controls="pills-home" title="subb" aria-selected="true">subb</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_56" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(56,'Testing new respices testing this rep');" role="tab" aria-controls="pills-home" title="Testing new respices testing this rep" aria-selected="true">Testing new r...</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_58" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(58,'Desserts 24444');" role="tab" aria-controls="pills-home" title="Desserts 24444" aria-selected="true">Desserts 2444...</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_60" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(60,'Special Juices T');" role="tab" aria-controls="pills-home" title="Special Juices T" aria-selected="true">Special Juice...</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_62" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(62,'v1');" role="tab" aria-controls="pills-home" title="v1" aria-selected="true">v1</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_64" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(64,'sub-1-101');" role="tab" aria-controls="pills-home" title="sub-1-101" aria-selected="true">sub-1-101</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_66" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(66,'S-1-102');" role="tab" aria-controls="pills-home" title="S-1-102" aria-selected="true">S-1-102</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_68" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(68,'sub-4-102');" role="tab" aria-controls="pills-home" title="sub-4-102" aria-selected="true">sub-4-102</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_72" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(72,'Sub Test');" role="tab" aria-controls="pills-home" title="Sub Test" aria-selected="true">Sub Test</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_75" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(75,'Chiken champ');" role="tab" aria-controls="pills-home" title="Chiken champ" aria-selected="true">Chiken champ</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_77" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(77,'vvv2');" role="tab" aria-controls="pills-home" title="vvv2" aria-selected="true">vvv2</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_82" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(82,'Sub 1000');" role="tab" aria-controls="pills-home" title="Sub 1000" aria-selected="true">Sub 1000</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_84" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(84,'asdfa');" role="tab" aria-controls="pills-home" title="asdfa" aria-selected="true">asdfa</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_89" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(89,'Sweets');" role="tab" aria-controls="pills-home" title="Sweets" aria-selected="true">Sweets</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_88" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(88,'Coffee');" role="tab" aria-controls="pills-home" title="Coffee" aria-selected="true">Coffee</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_131" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(131,'Test VG');" role="tab" aria-controls="pills-home" title="Test VG" aria-selected="true">Test VG</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_133" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(133,'Sub 501-1');" role="tab" aria-controls="pills-home" title="Sub 501-1" aria-selected="true">Sub 501-1</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_135" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(135,'Sub 502-1');" role="tab" aria-controls="pills-home" title="Sub 502-1" aria-selected="true">Sub 502-1</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_137" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(137,'sada');" role="tab" aria-controls="pills-home" title="sada" aria-selected="true">sada</a>
                                </li></ul>
                            <ul className="nav nav-pills" id="ListOddSubdepartment_POSMenuSetup" role="tablist">

                                <li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_12" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(12,'Suger Free Juice');" role="tab" aria-controls="pills-home" title="Suger Free Juice" aria-selected="true">Suger Free Ju...</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_7" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(7,'Rolls &amp; Champs');" role="tab" aria-controls="pills-home" title="Rolls &amp; Champs" aria-selected="true">Rolls &amp; Champ...</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_6" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(6,'Veg Food');" role="tab" aria-controls="pills-home" title="Veg Food" aria-selected="true">Veg Food</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_55" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(55,'testing juice resp this is');" role="tab" aria-controls="pills-home" title="testing juice resp this is" aria-selected="true">testing juice...</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_8" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(8,'Special Juices');" role="tab" aria-controls="pills-home" title="Special Juices" aria-selected="true">Special Juice...</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_10" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(10,'Sub 22');" role="tab" aria-controls="pills-home" title="Sub 22" aria-selected="true">Sub 22</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_15" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(15,'kkkk 222');" role="tab" aria-controls="pills-home" title="kkkk 222" aria-selected="true">kkkk 222</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_16" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(16,'veg food 22222');" role="tab" aria-controls="pills-home" title="veg food 22222" aria-selected="true">veg food 2222...</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_23" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(23,'M1 Sub 2');" role="tab" aria-controls="pills-home" title="M1 Sub 2" aria-selected="true">M1 Sub 2</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_54" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(54,'New Sub 1');" role="tab" aria-controls="pills-home" title="New Sub 1" aria-selected="true">New Sub 1</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_57" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(57,'Sub Dept');" role="tab" aria-controls="pills-home" title="Sub Dept" aria-selected="true">Sub Dept</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_59" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(59,'Veg           Food');" role="tab" aria-controls="pills-home" title="Veg           Food" aria-selected="true">Veg          ...</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_61" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(61,'Special Juices T2');" role="tab" aria-controls="pills-home" title="Special Juices T2" aria-selected="true">Special Juice...</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_63" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(63,'j2');" role="tab" aria-controls="pills-home" title="j2" aria-selected="true">j2</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_65" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(65,'sub-1-102');" role="tab" aria-controls="pills-home" title="sub-1-102" aria-selected="true">sub-1-102</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_67" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(67,'Sub-3-102');" role="tab" aria-controls="pills-home" title="Sub-3-102" aria-selected="true">Sub-3-102</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_71" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(71,'Desserts 222');" role="tab" aria-controls="pills-home" title="Desserts 222" aria-selected="true">Desserts 222</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_74" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(74,'Sub 880');" role="tab" aria-controls="pills-home" title="Sub 880" aria-selected="true">Sub 880</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_76" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(76,'VVV');" role="tab" aria-controls="pills-home" title="VVV" aria-selected="true">VVV</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_79" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(79,'Mango Juice Special');" role="tab" aria-controls="pills-home" title="Mango Juice Special" aria-selected="true">Mango Juice S...</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_83" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(83,'Dept 1111');" role="tab" aria-controls="pills-home" title="Dept 1111" aria-selected="true">Dept 1111</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_86" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(86,'New Dept 20001 22222');" role="tab" aria-controls="pills-home" title="New Dept 20001 22222" aria-selected="true">New Dept 2000...</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_87" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(87,'Dept VV');" role="tab" aria-controls="pills-home" title="Dept VV" aria-selected="true">Dept VV</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_129" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(129,'sb');" role="tab" aria-controls="pills-home" title="sb" aria-selected="true">sb</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_132" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(132,'Sss testing');" role="tab" aria-controls="pills-home" title="Sss testing" aria-selected="true">Sss testing</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_134" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(134,'Sub 501-2');" role="tab" aria-controls="pills-home" title="Sub 501-2" aria-selected="true">Sub 501-2</a>
                                </li><li className="nav-item">
                                    <a className="nav-link subdepartmentCommonClass" id="pills-home-tab_136" data-toggle="pill" href="javascript:;" onClick="GetAndBindProductsListBySubdepartmentId(136,'Sub 502-2');" role="tab" aria-controls="pills-home" title="Sub 502-2" aria-selected="true">Sub 502-2</a>
                                </li></ul>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        <div className="modal fade dine-in-pop" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered mt-0" role="document">
                <div className="modal-content">
                    <div className="modal-header justify-content-center p-2">
                        <h5 className="modal-title" id="exampleModalLongTitle">Replace Width</h5>
                    </div>
                    <div className="modal-body">
                        <div className="replace-width-sec">
                            <div className="row">
                                <div className="col-10">
                                    <div className="form-group row">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Dine In" />
                                        </div>
                                        <label for="inputPassword" className="col-6 col-form-label">(Dine In)</label>
                                    </div>
                                </div>
                                <div className="col-2 text-right">
                                    <div>
                                        <label className="switch round_wraps">
                                            <input id="chkSunday_RestaurantTiming_SoftwareSetting" type="checkbox" onchange="RestaurantDayStatus_Change(1);" checked="" />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10">
                                    <div className="form-group row">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Take Away" />
                                        </div>
                                        <label for="inputPassword" className="col-6 col-form-label">(Take Away)</label>
                                    </div>
                                </div>
                                <div className="col-2 text-right">
                                    <div>
                                        <label className="switch round_wraps">
                                            <input id="chkSunday_RestaurantTiming_SoftwareSetting" type="checkbox" onchange="RestaurantDayStatus_Change(1);" checked="" />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10">
                                    <div className="form-group row">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Tables" />
                                        </div>
                                        <label for="inputPassword" className="col-6 col-form-label">(Tables)</label>
                                    </div>
                                </div>
                                <div className="col-2 text-right">
                                    <div>
                                        <label className="switch round_wraps">
                                            <input id="chkSunday_RestaurantTiming_SoftwareSetting" type="checkbox" onchange="RestaurantDayStatus_Change(1);" checked="" />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10">
                                    <div className="form-group row">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Order no" />
                                        </div>
                                        <label for="inputPassword" className="col-6 col-form-label">(Ordr no)</label>
                                    </div>
                                </div>
                                <div className="col-2 text-right">
                                    <div>
                                        <label className="switch round_wraps">
                                            <input id="chkSunday_RestaurantTiming_SoftwareSetting" type="checkbox" onchange="RestaurantDayStatus_Change(1);" checked="" />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10">
                                    <div className="form-group row">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Park Sale" />
                                        </div>
                                        <label for="inputPassword" className="col-6 col-form-label">(Park Sale)</label>
                                    </div>
                                </div>
                                <div className="col-2 text-right">
                                    <div>
                                        <label className="switch round_wraps">
                                            <input id="chkSunday_RestaurantTiming_SoftwareSetting" type="checkbox" onchange="RestaurantDayStatus_Change(1);" checked="" />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10">
                                    <div className="form-group row">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Banking Report" />
                                        </div>
                                        <label for="inputPassword" className="col-6 col-form-label">(Banking Report)</label>
                                    </div>
                                </div>
                                <div className="col-2 text-right">
                                    <div>
                                        <label className="switch round_wraps">
                                            <input id="chkSunday_RestaurantTiming_SoftwareSetting" type="checkbox" onchange="RestaurantDayStatus_Change(1);" checked="" />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10">
                                    <div className="form-group row">
                                        <div className="col-6">
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Customer Name" />
                                        </div>
                                        <label for="inputPassword" className="col-6 col-form-label">(Customer Name  )</label>
                                    </div>
                                </div>
                                <div className="col-2 text-right">
                                    <div>
                                        <label className="switch round_wraps">
                                            <input id="chkSunday_RestaurantTiming_SoftwareSetting" type="checkbox" onchange="RestaurantDayStatus_Change(1);" checked="" />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Save</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>

        <button type="button" id="ShowingColorPickerPopup_POSMenuSetup" className="btn d-none" data-toggle="modal" data-target="#exampleModalCenter1"></button>
        <div className="modal fade color-pick-model" id="exampleModalCenter1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">

                    <div className="modal-body">
                        <p style={{ marginTop: "-29px" }}>Choose color</p>
                        <div className="color-pick-center">

                            <input type="text" id="txtColorName_colorPicker" className="form-control colorpicker-element" style={{ marginTop: "9px" }} data-colorpicker-id="1" data-bs-original-title="" title="" />

                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" id="CancelBtnColorPickerPopup_POSMenuSetup" data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary" onClick="AddUpdateBackgroundColor_POSMenuSetup();">Ok</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default POSmenu