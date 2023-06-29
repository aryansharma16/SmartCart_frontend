import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from "../components/Layout/Layout";

const CustomStyling = () => {
  const [cssData, setCssData] = useState('');
  const [defaultCSS, setDefaultCSS] = useState(1);

  useEffect(() => {
    if (defaultCSS === 1) {
      axios.get("/api/v/customcss/getcss") // Replace with the appropriate endpoint URL
        .then(response => {
          if (response.status === 200) {
            const data = response.data;
            if (data.success) {
              setCssData(data.cssplate);
            } else {
              console.log('Error:', data.message);
            }
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }else {
        setCssData({
            "success": true,
            "message": "Latest CSS retrieved successfully",
            "cssplate": ".btn {\n  display: inline-block;\n  padding: 10px 20px;\n  font-size: 16px;\n  text-align: center;\n  text-decoration: none;\n  background-color:green;\n  color: yellow;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.btn:hover {\n  background-color: red;\n}\n\n.btn:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);\n}\n"
          })
          
        setDefaultCSS(2)
    }
  }, [defaultCSS]);

  console.log(cssData, "here is the data");

  const createStyleElement = () => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = cssData;
    return styleElement;
  };

  useEffect(() => {
    if (cssData) {
      const styleElement = createStyleElement();
      document.head.appendChild(styleElement);

      return () => {
        document.head.removeChild(styleElement);
      };
    }
  }, [cssData]);

  return (
    <Layout title={"Home | SmartCart"}>
      <div className="home-page">
        <h1 className="home-page__title">Welcome to SmartCart</h1>
        <h3 className="home-page__title">Here you can see the changes of css</h3>
        <button className="btn">hello</button>





        <button className="btn" onClick={() => {
          setDefaultCSS(2);
          
        }}>back to default</button>
      </div>
    </Layout>
  );
};

export default CustomStyling;
