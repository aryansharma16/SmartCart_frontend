import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { NavLink, Link, useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  // to get all the products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v/products/getProduct`);
      if (data?.success) {
        setProducts(data?.products);
      }
    } catch (error) {
      console.log(error);
      toast.error("Somthing went Wrong in getting Products");
    }
  };
  //lifecyle method
  useEffect(() => {
    getAllProducts();
  }, []);
  console.log(products, "here is the products list ");
  return (
    <Layout title={"Dashboard - Create Products"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 controloverflow">
            <h1>All Products list</h1>
            <div className="flex_card_container">
              {products.map((p) => (
                <Link
                  className="product-link"
                  to={`/dashboard/admin/products/${p.slug}`}
                  key={p._id}
                >
                  <div className="card bg-dark text-white ">
                    <img
                      src={`/api/v/products/getProduct-photo/${p._id}`}
                      className="fix_the_img_home"
                      alt={p.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">{p.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
