import React from "react";
import { useState, useEffect } from "react";
import {} from 'antd'
const CategoryForm = ({ hanldeSubmit, value, setValue }) => {

  return (
    <>
      <form onSubmit={hanldeSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter New Category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <button className=" button-86 ">Submit</button>
      </form>
    </>
  );
};

export default CategoryForm;
