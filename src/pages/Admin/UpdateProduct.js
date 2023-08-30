// all imports
import React from "react";
import { Button, message, Popconfirm } from "antd";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Modal, Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
const { Option } = Select;

const UpdateProduct = () => {
  // use states
  const navigate = useNavigate();
  const params = useParams();
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
  const [id, setId] = useState("");
  console.log(category, "here is selected category");

  // get single product according to slug
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  const confirm = (e) => {
    console.log(e);
    message.success("Click on Yes");
  };
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v/products/getProduct/${params.slug}`
      );
      setName(data.product.name);
      setId(data.product._id);
      setDescription(data.product.description);
      setPrice(data.product.price);
      setQuantity(data.product.quantity);
      setCategory(data.product.category._id);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while geting single product");
    }
  };
  useEffect(() => {
    getSingleProduct();
    //eslint-disable-next-line
  }, []);
  // get all categeries
  const getAllcategory = async () => {
    try {
      const { data } = await axios.get("/api/v/category/get-category");
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

  const handleUpdate = async (e) => {
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
      photo && productData.append("photo", photo); // Make sure `photo` is a valid File object
      productData.append("category", category);
      productData.append("shipping", shipping);
      const response = await axios.put(
        `/api/v/products/update-product/${id}`,
        productData,
        config
      );

      const data = response.data; // Use `response.data` instead of destructuring

      if (data?.success) {
        toast.success(`${name} is Updated Successfully`);
        // Clear input fields
        // setName("");
        // setDescription("");
        // setPrice("");
        // setQuantity("");
        // setPhoto("");
        // setCategory("");
        // setShipping("");

        // Navigate to the desired location
        console.log("done =====");
        navigate("/dashboard/admin/products");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while handle update");
    }
  };

  useEffect(() => {
    getAllcategory();
  }, []);

  //   delete product
  //delete a product
  const handleDelete = async () => {
    try {
    //   let answer = window.prompt("Are You Sure want to delete this product ? ");
    //   if (!answer) return;
      const { data } = await axios.delete(
        `/api/v/products/delete-product/${id}`
      );
      toast.success("Product DEleted Succfully");
      navigate("/dashboard/admin/products");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in delete handle");
    }
  };
  return (
    <Layout title={"Dashboard - Create Products"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 controloverflow">
            <h1>Update Product</h1>
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
                value={category}
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
                  {photo ? (
                    <div>
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
                  ) : (
                    <div>
                      <div className="preview_popup">
                        <img
                          src={`/api/v/products/getProduct-photo/${id}`}
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
                </div>
              )}

              <div className="">
                <input
                  type="text"
                  placeholder="Write a name"
                  value={name}
                  className="form-control cutomsFor_product_form"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="">
                <textarea
                  // type="text"
                  value={description}
                  placeholder="Write a Description"
                  className="form-control cutomsFor_product_form"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="">
                <input
                  type="number"
                  placeholder="Write a Price "
                  value={price}
                  className="form-control cutomsFor_product_form"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="">
                <input
                  type="number"
                  placeholder="Write a Quantity"
                  value={quantity}
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
                  value={shipping ? "yes" : "No"}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="design_product_button">
                <button className="mb-3 button-86 " onClick={handleUpdate}>
                  Update Product
                </button>

                <Popconfirm
                  title="Delete the Category"
                  description="Are you sure to delete this Category Permanently !"
                  onConfirm={handleDelete} // Corrected
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <button className="mb-3 button-86 ">Delete Product</button>
                </Popconfirm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateProduct;
