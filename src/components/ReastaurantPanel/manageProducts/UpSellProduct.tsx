import React, { useState } from "react";
import { Link } from "react-router-dom";

const UpSellProduct: React.FC = () => {
  const [upsellProducts, setUpsellProducts] = useState([
    {
      id: 249,
      name: "HOT SPICY CHK BONELESS",
      price: 100,
      img: "../../Content/ImageUploads/ProductImages/d0c30767bbd6.jpg",
      selected: true,
      disabled: true,
    },
    {
      id: 252,
      name: "ORIGINAL FRIED CHICKEN BOWL",
      price: 1000,
      img: "../../Content/ImageUploads/ProductImages/d0c30767bbd6.jpg",
      selected: true,
      disabled: true,
    },
    {
      id: 255,
      name: "HOT SPICY CHICKEN BOWL",
      price: 17.99,
      img: "../../Content/ImageUploads/ProductImages/d0c30767bbd6.jpg",
      selected: false,
      disabled: false,
    },
    {
      id: 256,
      name: "HONEY SOY CHICKEN BOWL",
      price: 100,
      img: "../../Content/ImageUploads/ProductImages/d0c30767bbd6.jpg",
      selected: false,
      disabled: false,
    },
  ]);

  const [crossSellOptions, setCrossSellOptions] = useState([
    { id: 252, name: "ORIGINAL FRIED CHICKEN BOWL" },
    { id: 255, name: "HOT SPICY CHICKEN BOWL" },
    { id: 256, name: "HONEY SOY CHICKEN BOWL" },
    { id: 257, name: "ORIGINAL FRIED CHICKEN COMBO" },
  ]);
  const handleCheckboxChange = (productId: number) => {
    setCheckedProducts((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  const handleUpsellSelectChange = (
    productId: number,
    upsellId: number | ""
  ) => {
    setSelectedUpsells((prevState) => ({
      ...prevState,
      [productId]: upsellId,
    }));
  };

  const handleAddProducts = () => {
    // Your AddProductsToUpsellTable function logic here
  };

  const handleRemoveProducts = () => {
    // Your RemoveProductsFromUpsellTable function logic here
  };

  const handleSubmit = () => {
    // Your LinkUpsellByProduct function logic here
  };

  return (
    <div
      id="contentWrapper_RestaurantLayout"
      className="content-wrapper pt-5 min-h-screen"
    >
      <div className="top_area_row">
        <div className="row align-items-center">
          <div className="col-12 col-md-4 col-lg-4">
            <nav>
              <div className="main_nav_bread">
                <ol className="breadcrumb pl-3">
                  <li className="breadcrumb-item nav_bread_one">
                    <Link className="fs-6 fw-bold" to="/manage-products">
                      Products
                    </Link>
                  </li>
                  <li className="breadcrumb-icon">
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </li>
                  <li className="breadcrumb-item nav_bread_two">
                    <span className="fs-6 fw-bold">Upsell By Product</span>
                  </li>
                </ol>
              </div>
            </nav>
          </div>
        </div>

        <div className="wrap_tabs-products sidebar_ul-nav_tabs">
          <div className="tab-content">
            <div className="upsell-cross-main">
              <div className="row">
                <div className="col-md-6">
                  <div className="upsell-cross-inner upsell-cross-inner-2">
                    <div className="upsell-cross-overflow">
                      <h3>Product List</h3>
                      <div className="cross-scroll" id="cross-scroll-upsell">
                        <table className="table" id="product_list_table">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th className="text-center" scope="col">
                                Photo
                              </th>
                              <th className="text-center" scope="col">
                                Name
                              </th>
                              <th className="text-center" scope="col">
                                Price
                              </th>
                            </tr>
                          </thead>
                          <tbody className="upsell_table_body">
                            {upsellProducts.map((product, index) => (
                              <tr key={product.id}>
                                <td>
                                  <input
                                    type="checkbox"
                                    className="form-check-input productCheck"
                                    id={`productCheck${index}`}
                                    checked={product.selected}
                                    disabled={product.disabled}
                                  />
                                </td>
                                <td className="text-center">
                                  <img
                                    src={product.img}
                                    alt={product.name}
                                    width="50"
                                    height="50"
                                  />
                                </td>
                                <td className="text-center">{product.name}</td>
                                <td className="text-center">
                                  ${product.price}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="upsell-cross-inner upsell-cross-inner-2">
                    <div className="upsell-cross-overflow">
                      <h3>Item Upsell / Cross Sell</h3>
                      <div className="cross-scroll" id="cross-scroll-upsell">
                        <table className="table" id="upsell_by_product_list">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th className="text-center" scope="col">
                                Name
                              </th>
                              <th className="text-center" scope="col">
                                Price
                              </th>
                              <th className="text-center" scope="col">
                                Upsell Product
                              </th>
                            </tr>
                          </thead>
                          <tbody className="upsell_table_body">
                            {upsellProducts.map((product, index) => (
                              <tr
                                key={`upsell-${product.id}`}
                                id={`R${index}`}
                                className="upsellRows"
                                data-id={product.id}
                              >
                                <td>
                                  <input
                                    type="checkbox"
                                    className="form-check-input upsellProductCheck"
                                    id={`upsellProductCheck${index}`}
                                    data-id={product.id}
                                  />
                                </td>
                                <td className="text-center">{product.name}</td>
                                <td className="text-center">
                                  ${product.price}
                                </td>
                                <td className="w-100">
                                  <select className="form-control upsellByProductListDropdown">
                                    <option>Select</option>
                                    {crossSellOptions.map((option) => (
                                      <option key={option.id} value={option.id}>
                                        {option.name}
                                      </option>
                                    ))}
                                  </select>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Product List */}

                {/* Item Upsell / Cross Sell */}
              </div>

              <div className="btn-upsel mt-4">
                <div className="row">
                  <div className="col-6 col-md-6">
                    <button>
                      <Link
                        className="text-light"
                        to="/Restaurant/ManageProducts"
                      >
                        Exit
                      </Link>
                    </button>
                    <button
                      className="products-add-btn"
                      onClick={handleAddProducts}
                      disabled
                    >
                      Add
                    </button>
                  </div>
                  <div
                    className="col-12 col-md-6"
                    style={{ textAlign: "right" }}
                  >
                    <button
                      className="upsell_remove_btn"
                      onClick={handleRemoveProducts}
                    >
                      Remove
                    </button>
                    <button
                      className="upsell-submit-btn"
                      id="submit_UpsellByProductData"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
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

export default UpSellProduct;
