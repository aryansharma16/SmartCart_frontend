import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { Checkbox, Radio } from "antd";
import toast from "react-hot-toast";
import axios from "axios";
import { Prices } from "../components/Prices";
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setcategories] = useState([]);
  //  state to slect category
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);

  //   get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v/products/getProduct`);
      setProducts(data.products);
      console.log(products, "hii products home");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in Get All Products");
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  const getAllcategory = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v/category/get-category`);
      if (data?.success) {
        setcategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Somthing went Wrong in getting category");
    }
  };
  // filter by category
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      // value is true
      all.push(id); // to add the id of category
    } else {
      // value is false
      all = all?.filter((c) => c !== id); // to remove the id of unchecked
    }
    setChecked(all);
  };

  useEffect(() => {
    getAllcategory();
  }, []);
  return (
    <Layout title={"All Products | Best Offers"}>
      <div className="row">
        <div className="col-md-3">
          <h4 className="text-center">Filter By Category </h4>
          <div className="filter_home_page">
            {categories?.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
                className="white-checkbox-label" // Apply the CSS class to the checkbox label text
              >
                {c.name}
              </Checkbox>
            ))}
          </div>
          <h4 className="text-center">Filter By Prices </h4>
          <div className="filter_home_page">
            <Radio.Group
              className="Flex_the_radio_home"
              onChange={(e) => setRadio(e.target.value)}
            >
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio value={p.array} className="white-checkbox-label">{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          {JSON.stringify(radio, null, 4)}
        </div>

        <div className="col-md-9">
          <h1 className="text-center">All Products</h1>
          {JSON.stringify(checked, null, 4)}
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div
                className="card bg-dark text-white margin_products_card hover-card"
                style={{ width: "18rem" }}
              >
                <img
                  src={`${process.env.REACT_APP_API}/api/v/products/getProduct-photo/${p._id}`}
                  className="fix_the_img_home"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description}</p>
                  <div className="button-group-products22">
                    <button className="button-81" role="button">
                      Details
                    </button>
                    <button className="button-87" role="button">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
