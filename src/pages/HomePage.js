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
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  // getTotal count
  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v/products/product-count`
      );
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in Get All Products");
    }
  };
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v/products/product-list/${page}`
      );
      setLoading(false);

      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in Get All Products");
      setLoading(false);
    }
  };

  //   get all products according to page list
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const getAllcategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v/category/get-category`
      );
      if (data?.success) {
        setcategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Somthing went Wrong in getting category");
    }
  };

  // show products when the no filter is choosed

  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  // show prpducts when some filters is choosed

  useEffect(() => {
    if (checked.length || radio.length) filterProducts();
  }, [checked, radio]);
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
  // get filltered products
  const filterProducts = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v/products/product-filter`,
        { checked, radio }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTotal();
    getAllcategory();
  }, []);

  useEffect(() => {
    if (page === 0) return;
    loadMore();
  }, [page]);
  return (
    <Layout title={"All Products | Best Offers"}>
      <div className="row home_container_flex">
        <div className="col-md-3 filter_container">
          <h4 className="text-center color_filter_head">Filter By Category </h4>
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
          <h4 className="text-center color_filter_head">Filter By Prices </h4>
          <div className="filter_home_page">
            <Radio.Group
              className="Flex_the_radio_home"
              onChange={(e) => setRadio(e.target.value)}
            >
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio value={p.array} className="white-checkbox-label">
                    {p.name}
                  </Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="filter_home_page">
            <button class="button-73" onClick={() => window.location.reload()}>
              RESET FILTER
            </button>
          </div>
        </div>

        <div className="col-md-9  products_home_container">
          <h1 className="text-center">All Products {total}</h1>
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
                  <h5 className="card-title">{p.name.substring(0, 65)}.</h5>
                  <p className="card-text">{p.description}</p>
                  <p className="card-text-price">
                    <span>₹</span> {p.price}
                  </p>
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
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Loadmore"}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
