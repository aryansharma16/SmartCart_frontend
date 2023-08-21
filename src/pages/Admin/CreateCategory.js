import React from "react";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import CategoryForm from "../../components/Form/CategoryForm";

const CreateCategory = () => {
  const [categories, setCatgeries] = useState([]);
  const [name, setName] = useState("");
  const token = JSON.parse(localStorage.getItem("token"));
  const role = localStorage.getItem("role");
  const hanldeSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the headers
          "X-User-Role": role, // Include the role in the headers
        },
      };

      const { data } = await axios.post(
        "/api/v/category/create-category",
        {
          name,
        },
        config
      );

      if (data.success) {
        toast.success(`${name} is created Successfully`);
        getAllcategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong while handleSubmit ");
    }
  };

  const getAllcategory = async () => {
    try {
      const { data } = await axios.get("/api/v/category/get-category");
      if (data.success) {
        setCatgeries(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Somthing went Wrong in getting category");
    }
  };
  useEffect(() => {
    getAllcategory();
  }, []);
  return (
    <Layout title={"Dashboard - Create Category"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 controloverflow">
            <h1 className="manage_category_heading">Manage Category </h1>
            <div className="p-3 w-50">
              <CategoryForm
                hanldeSubmit={hanldeSubmit}
                value={name}
                setValue={setName}
              />
            </div>
            <div>
              <table className="table table-striped table-hover table-dark custom_table_category">
                <thead>
                  <tr>
                    <th scope="col">S.no</th>
                    <th scope="col">Name</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {categories?.map((c, index) => (
                    <tr key={c._id}>
                      <td>{index + 1}</td>
                      <td>{c.name}</td>

                      <td>
                        <button className="button-32">Edit</button>
                        <button className="button-33">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
