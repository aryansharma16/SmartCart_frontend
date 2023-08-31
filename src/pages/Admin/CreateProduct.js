// all imports
import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Modal, Select } from "antd";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const CreateProduct = () => {
  // use states
  const navigate = useNavigate()
  const [categories, setCatgeries] = useState([]);
  const [category, setCategory] = useState("");
  const [previewVisible, setPreviewVisible] = useState(false); // State to track the visibility of the preview
  const token = JSON.parse(localStorage.getItem("token"));
  const role = localStorage.getItem("role");
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  console.log(category,'here is selected category')
  // get all categeries
  const getAllcategory = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v/category/get-category`);
      if (data.success) {
        setCatgeries(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Somthing went Wrong in getting category");
    }
  };
  const togglePreview = () => {
    setPreviewVisible(!previewVisible);
  };

  // create product function
  
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "X-User-Role": role,
        },
      };
  
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo); // Make sure `photo` is a valid File object
      productData.append("category", category);
      productData.append("shipping", shipping);
      const response = await axios.post(`${process.env.REACT_APP_API}/api/v/products/create-product`, productData, config);
  
      const data = response.data; // Use `response.data` instead of destructuring
  
      if (data?.success) {
        toast.success(`${name} is created Successfully`);
        // Clear input fields
        setName("");
        setDescription("");
        setPrice("");
        setQuantity("");
        setPhoto("");
        setCategory("");
        setShipping("");
  
        // Navigate to the desired location
        console.log('done =====')
        navigate("/dashboard/admin/products");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while handleCreate");
    }
  };
  
  useEffect(() => {
    getAllcategory();
  }, []);
  return (
    <Layout title={"Dashboard - Create Products"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 controloverflow">
            <h1>Create Product</h1>
            <div className="m-1">
              <Select
                bordered={false}
                placeholder="Select The Category"
                size="large"
                showSearch
                className="form-select mb-3 custom_category_select"
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {categories?.map((c) => (
                  <Option
                    key={c._id}
                    value={c._id}
                    className="custom_options_select"
                  >
                    {c.name}
                  </Option>
                ))}
              </Select>
              <div className="flex_the_image_preview">
                <div className="photo_select_adjust">
                  <label className="button-54 col-md-12">
                    {photo ? photo.name : "Upload Photo"}
                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      onChange={(e) => setPhoto(e.target.files[0])}
                      hidden
                    />
                  </label>
                </div>
                <div className="adjust_view_button">
                  <button
                    onClick={togglePreview}
                    class="button-48"
                    role="button"
                  >
                    <span class="text">Preview</span>
                  </button>
                </div>
              </div>
              {previewVisible && (
                <div className="overlay">
                  <div className="preview_popup">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt={`${photo.name} photo`}
                      className="im img-responsive custom_image_preview"
                    />
                  </div>
                  <button className="cross-button" onClick={togglePreview}>
                    <span className="cross-line cross-line-1"></span>
                    <span className="cross-line cross-line-2"></span>
                  </button>
                </div>
              )}
              <div className="">
                <input
                  type="text"
                  placeholder="Write a name"
                  className="form-control cutomsFor_product_form"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="">
                <textarea
                  // type="text"
                  placeholder="Write a Description"
                  className="form-control cutomsFor_product_form"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="">
                <input
                  type="number"
                  placeholder="Write a Price "
                  className="form-control cutomsFor_product_form"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="">
                <input
                  type="number"
                  placeholder="Write a Quantity"
                  className="form-control cutomsFor_product_form"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <Select
                  bordered={false}
                  placeholder="Select Shipping "
                  size="large"
                  showSearch
                  className="form-select mb-3 custom_category_select"
                  onChange={(value) => {
                    setShipping(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <button className="mb-3 button-86 " onClick={handleCreate}>
                Create Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;
