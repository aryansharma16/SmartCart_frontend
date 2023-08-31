import React from "react";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import CategoryForm from "../../components/Form/CategoryForm";
import { Modal } from "antd";
import { Button, message, Popconfirm } from "antd";

const CreateCategory = () => {
  const [categories, setCatgeries] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const token = JSON.parse(localStorage.getItem("token"));
  const role = localStorage.getItem("role");
  const totalCategorues = categories.length;
  console.log(categories, "here is yhe total catees");

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
        `${process.env.REACT_APP_API}/api/v/category/create-category`,
        {
          name,
        },
        config
      );

      if (data.success) {
        toast.success(`${name} is created Successfully`);
        setName(""); // Clear the input field

        getAllcategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong while handleSubmit ");
    }
  };
  const confirm = (e) => {
    console.log(e);
    message.success("Click on Yes");
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  const getAllcategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v/category/get-category`
      );
      if (data?.success) {
        setCatgeries(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Somthing went Wrong in getting category");
    }
  };
  useEffect(() => {
    getAllcategory();
  }, []);

  // update submit/ edit
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(e);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the headers
          "X-User-Role": role, // Include the role in the headers
        },
      };

      const { data } = await axios.put(
        `${process.env.REACT_APP_API}/api/v/category/update-category/${selected._id}`,
        {
          name: updatedName,
        },
        config
      );

      if (data.success) {
        toast.success(`${updatedName} is Updated Successfully`);
        getAllcategory();
        setSelected(null);
        setVisible(false);
        getAllcategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("somthing went wrong");
    }
  };

  // delete the category
  const handleDelete = async (pId) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the headers
          "X-User-Role": role, // Include the role in the headers
        },
      };

      const { data } = await axios.delete(
        `${process.env.REACT_APP_API}/api/v/category/delete-category/${pId}`,

        config
      );

      if (data.success) {
        toast.success(`Category is delte is Deleted`);

        getAllcategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("somthing went wrong");
    }
  };
  return (
    <Layout title={"Dashboard - Create Category"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 controloverflow">
            <h1 className="manage_category_heading">
              Manage Category{" "}
              <span className="total_categories_count">
                ({totalCategorues})
              </span>
            </h1>
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
                        <button
                          className="button-32"
                          onClick={() => {
                            setVisible(true);
                            setUpdatedName(c.name);
                            setSelected(c);
                          }}
                        >
                          Edit
                        </button>

                        <Popconfirm
                          title="Delete the Category"
                          description="Are you sure to delete this Category Permanently !"
                          onConfirm={() => handleDelete(c._id)}
                          onCancel={cancel}
                          okText="Yes"
                          cancelText="No"
                        >
                          <Button className="button-33">Delete</Button>
                        </Popconfirm>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Modal
              onCancel={() => setVisible(false)}
              footer={null}
              visible={visible}
            >
              <CategoryForm
                value={updatedName}
                setValue={setUpdatedName}
                hanldeSubmit={handleUpdateSubmit}
              />
            </Modal>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
