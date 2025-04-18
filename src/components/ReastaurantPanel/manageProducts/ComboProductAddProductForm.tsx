import React, { useState } from 'react';

const ComboProductAddProductForm: React.FC = () => {
  const [productData, setProductData] = useState({
    productNumber: '',
    sellingPrice: '',
    productName: '',
    cost: '',
    description: '',
    mainDepartment: '',
    subDepartment: '',
    barcode: '',
    productImage: null,
    barcodeImage: null,
    recommended: false,
    featuredProduct: false,
    forceSelling: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductData({
      ...productData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    setProductData({
      ...productData,
      [fieldName]: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send productData to the server)
    console.log('Product data submitted:', productData);
  };

  const showBarcodeImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Handle barcode image preview logic
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductData({
          ...productData,
          barcodeImage: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const showProductImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Handle product image preview logic
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductData({
          ...productData,
          productImage: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const [description, setDescription] = useState('');
  const [mainDepartment, setMainDepartment] = useState('0');
  const [subDepartment, setSubDepartment] = useState('0');
  const [barcode, setBarcode] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [barcodeImage, setBarcodeImage] = useState(null);
  const [recommended, setRecommended] = useState(false);
  const [featuredProduct, setFeaturedProduct] = useState(false);
  const [forceSelling, setForceSelling] = useState(false);

  const handleImageChange = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="tab-pane active" id="AddUpdateProduct_tab">
      <div className="main_deapt" style={{ margin: '20px 5px 0px', borderRadius: '10px' }}>
        <form onSubmit={handleSubmit} className="new_customer-wrap">
          <input type="hidden" id="hdn_PId" value="332" />
          <input type="hidden" id="hdn_DefaultOpenSection_AddUpdateProduct" value="0" />

          {/* Product Number */}
          <div className="row custom_add_pro_rpw">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="form-group aline_input mb-0">
                <label htmlFor="txtProductNumber_ProductForm">PRODUCT NO.</label>
                <input
                  type="text"
                  className="form-control IsNumeric"
                  id="txtProductNumber_ProductForm"
                  name="productNumber"
                  value={productData.productNumber}
                  readOnly
                />
              </div>
            </div>

            {/* Selling Price */}
            <div className="col-12 col-md-6 col-lg-6">
              <div className="form-group aline_input mb-0">
                <label htmlFor="txtSellingPrice_ProductForm">SELLING PRICE</label>
                <input
                  type="text"
                  className="form-control IsDecimal"
                  id="txtSellingPrice_ProductForm"
                  name="sellingPrice"
                  value={productData.sellingPrice}
                  onChange={handleChange}
                />
                <div id="sellingPrice_error_ProductForm" className="errorsClass2"></div>
              </div>
            </div>
          </div>

          {/* Product Name and Cost */}
          <div className="row custom_add_pro_rpw">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="form-group aline_input mb-0">
                <label htmlFor="txtProductName_ProductForm">NAME <span className="requiredFieldClass">*</span></label>
                <input
                  type="text"
                  className="form-control"
                  id="txtProductName_ProductForm"
                  name="productName"
                  value={productData.productName}
                  onChange={handleChange}
                />
                <div id="txtProductName_error_ProductForm" className="errorsClass2"></div>
              </div>
            </div>

            {/* Cost */}
            <div className="col-12 col-md-6 col-lg-6">
              <div className="form-group aline_input mb-0">
                <label htmlFor="txtCost_ProductForm">COST</label>
                <input
                  type="text"
                  className="form-control IsDecimal"
                  id="txtCost_ProductForm"
                  name="cost"
                  value={productData.cost}
                  onChange={handleChange}
                />
                <div id="txtCost_error_ProductForm" className="errorsClass2"></div>
              </div>
            </div>
          </div>




 {/* Description and Departments */}
          <div className="row custom_add_pro_rpw">
      <div className="col-12 col-md-6 col-lg-6">
        <div className="row row-gap">
          <div className="col-12">
            <div className="form-group aline_input mb-0">
              <label htmlFor="txtDescription_ProductForm">DESCRIPTION</label>
              <div className="d-flex flex-column">
                <textarea
                  className="form-control textareaFieldStyle"
                  id="txtDescription_ProductForm"
                  name="txtDescription_ProductForm"
                  style={{ height: '85px' }}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <div id="txtDescription_error_ProductForm" className="errorsClass2"></div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group aline_input mb-0">
              <label htmlFor="ddlMainDepartment_ProductForm">
                MAIN DEPARTMENT <span className="requiredFieldClass">*</span>
              </label>
              <div className="d-flex flex-column">
                <div className="select_box add_pro_sel">
                  <select
                    className="form-control"
                    id="ddlMainDepartment_ProductForm"
                    name="ddlMainDepartment_ProductForm"
                    value={mainDepartment}
                    onChange={(e) => setMainDepartment(e.target.value)}
                  >
                    <option value="0">Select Main Department</option>
                    <option value="1">Chicken Recipes</option>
                    <option value="2">Veg Recipes</option>
                    <option value="3">New Recipes</option>
                    {/* Additional options */}
                  </select>
                </div>
                <div id="ddlMainDepartment__error_ProductForm" className="errorsClass2"></div>
              </div>
              <a href="javascript:void(0);">ADD NEW</a>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group aline_input mb-0">
              <label htmlFor="ddlSubDepartment_ProductForm">
                SUB DEPARTMENT <span className="requiredFieldClass">*</span>
              </label>
              <div className="d-flex flex-column">
                <div className="select_box add_pro_sel">
                  <select
                    className="form-control"
                    id="ddlSubDepartment_ProductForm"
                    name="ddlSubDepartment_ProductForm"
                    value={subDepartment}
                    onChange={(e) => setSubDepartment(e.target.value)}
                  >
                    <option value="0">Select</option>
                    <option value="137">sada</option>
                  </select>
                </div>
                <div id="ddlSubDepartment_error_ProductForm" className="errorsClass2"></div>
              </div>
              <a href="javascript:void(0);">ADD NEW</a>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group aline_input wrap_costs mb-0" style={{ width: '101%' }}>
              <label htmlFor="txtBarcode_ProductForm">BARCODE</label>
              <div className="d-flex flex-column">
                <input
                  type="text"
                  className="form-control mb-1"
                  id="txtBarcode_ProductForm"
                  name="txtBarcode_ProductForm"
                  disabled
                  value={barcode}
                  onChange={(e) => setBarcode(e.target.value)}
                />
                <div id="txtBarcode_error_ProductForm" className="errorsClass2"></div>
                <div>
                  {barcodeImage && <img src={barcodeImage} style={{ width: '100%' }} alt="Barcode Preview" />}
                  <input
                    className="d-none"
                    type="file"
                    accept="image/*"
                    id="fileBarcodeImage_ProductForm"
                    onChange={(e) => handleImageChange(e, setBarcodeImage)}
                  />
                </div>
              </div>
              <a href="javascript:void(0);" onClick={() => setBarcodeImage(null)}>
                REMOVE
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-6">
        <div className="row row-gap">
          <div className="col-12">
            <div className="checkform">
              <label className="switch round_wraps product_option_style">
                <input
                  type="checkbox"
                  checked={recommended}
                  onChange={() => setRecommended(!recommended)}
                />
                <span className="slider round" style={{ top: '-5px' }}></span>
              </label>
              <label>Recommended</label>
              <br />
              <label className="switch round_wraps product_option_style">
                <input
                  type="checkbox"
                  checked={featuredProduct}
                  onChange={() => setFeaturedProduct(!featuredProduct)}
                />
                <span className="slider round" style={{ top: '-5px' }}></span>
              </label>
              <label> Featured Product</label>
              <br />
              <label className="switch round_wraps product_option_style">
                <input
                  type="checkbox"
                  checked={forceSelling}
                  onChange={() => setForceSelling(!forceSelling)}
                />
                <span className="slider round" style={{ top: '-5px' }}></span>
              </label>
              <label>Force Selling</label>
              <br />
            </div>
          </div>
          <div className="col-12">
            <div className="upload_files-warps">
              <div className="upload-btn-wrapper">
                <button className="btn p-1">
                  {productImage && <img src={productImage} style={{ width: '100%' }} alt="Product Preview" />}
                </button>
                <input
                  type="file"
                  accept="image/*"
                  id="fileProductImage_ProductForm"
                  onChange={(e) => handleImageChange(e, setProductImage)}
                />
              </div>
              <div className="add_delete-warsp" style={{ paddingLeft: '26px' }}>
                <p className="buttons_wraps_add">
                  <button type="button" className="add_button_pro ProductPageBtnCommanClass" onClick={() => setProductImage(null)}>
                    ADD
                  </button>
                </p>
                <p className="buttons_wraps_delete">
                  <button type="button" className="add_button_pro ProductPageBtnCommanClass" onClick={() => setProductImage(null)}>
                    DELETE
                  </button>
                </p>
              </div>
            </div>
            <div id="fileProductImage_error_ProductForm" className="errorsClass2"></div>
          </div>
        </div>
      </div>
    </div>

        
          {/* Submit Button */}
          <div className="col-12">
      <div className="text-end">
        <a href="/Restaurant/ManageProducts/">
          <button type="button" className="ml-2 btm_button_pro btm_button_pro_sm ProductPageBtnCommanClass">
            BACK
          </button>
        </a>
        <button
          type="button"
          className="btm_button_pro btm_button_pro_sm ProductPageBtnCommanClass"
          // onClick={handleInsertUpdateProduct}
          style={{ marginRight: '20px' }}
        >
          SAVE
        </button>
      </div>
    </div>
        </form>
      </div>
    </div>
  );
};

export default ComboProductAddProductForm;
