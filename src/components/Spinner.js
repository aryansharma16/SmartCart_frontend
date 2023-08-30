const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the headers
          "X-User-Role": role, // Include the role in the headers
        },
      };
      const productData = new FormData();
      console.log(productData,'productData i here ')
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("category", category);
      const { data } = await axios.post(
        "/api/v/category/create-product",
        {
          productData,
        },
        config
      );

      if (data?.success) {
        toast.success(`${name} is created Successfully`);
        setName(""); // Clear the input field
        // navigate("/dashboard/admin/products");

      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong while handleCreate ");
    }
  };