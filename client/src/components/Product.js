import React, { useState, useEffect } from "react";
import axios from "axios";

import SingleProduct from "./SingleProduct";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const { data: products } = await axios(
          "https://wild-express.herokuapp.com/api/v1/products"
        );

        setProducts(products);
      } catch (err) {
        console.error(err.message);
      }
    }
    getProducts();
  }, [product]);

  const onClick = async (idProduct) => {
    console.log("onclick parent");
    console.log(idProduct);

    const filteredProducts = products.filter(
      (product) => product._id !== idProduct
    );

    setProducts(filteredProducts);

    const { data } = await axios.delete(
      `https://wild-express.herokuapp.com/api/v1/products/${idProduct}`
    );

    console.log(data);
  };

  const onUpdate = async (idProduct) => {
    console.log("onUpdate parent");
    console.log(idProduct);

    const { data: product } = await axios.put(
      `https://wild-express.herokuapp.com/api/v1/products/${idProduct}`,
      formData
    );

    setProduct(product);
  };

  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    desc: "",
    color: "",
  });

  function handleChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target.name === "price" ? parseInt(e.target.value) : e.target.value,
    }));
  }

  async function handleSubmit(e, operation) {
    e.preventDefault();

    if (!operation) {
      // add a product
      try {
        const { data: product } = await axios.post(
          "https://wild-express.herokuapp.com/api/v1/products",
          formData
        );

        setProduct(product);
        return;
      } catch (err) {
        console.err(err.message);
        return;
      }
    }

    // //update a product
    // console.log("update with : ", formData);
    // try {
    //   const { data: product } = await axios.update(
    //     `https://wild-express.herokuapp.com/api/v1/products`,
    //     formData
    //   );

    //   setProduct(product);
    //   return;
    // } catch (err) {
    //   console.err(err.message);
    //   return;
    // }
  }
  return (
    <>
      <h1>Create a product</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">
          Name :{" "}
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </label>
        <label>
          Price :{" "}
          <input
            type="number"
            name="price"
            onChange={handleChange}
            value={formData.price}
          />
        </label>
        <label>Desc</label>
        <input
          type="text"
          name="desc"
          onChange={handleChange}
          value={formData.desc}
        />
        <label>
          Color :
          <input
            type="text"
            name="color"
            onChange={handleChange}
            value={formData.color}
          />
        </label>
        <button>Valider</button>
      </form>

      <h2>Update a product</h2>
      <form
        onSubmit={(e) => handleSubmit(e, "update")}
        style={{ marginBottom: "2rem" }}
      >
        <label htmlFor="Name">
          Name :{" "}
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </label>
        <label>
          Price :{" "}
          <input
            type="number"
            name="price"
            onChange={handleChange}
            value={formData.price}
          />
        </label>
        <label>Desc</label>
        <input
          type="text"
          name="desc"
          onChange={handleChange}
          value={formData.desc}
        />
        <label>
          Color :
          <input
            type="text"
            name="color"
            onChange={handleChange}
            value={formData.color}
          />
        </label>
        <button>Valider</button>
      </form>
      {/* {product && <>
                <p>Name : {product.name}</p>
                <p>Price : {product.price}</p>
                <p>Desc : {product.desc}</p>
                <p>Color : {product.color}</p>
            </>} */}

      {products &&
        products.map((product) => (
          <SingleProduct
            onClick={onClick}
            onUpdate={onUpdate}
            product={product}
          />
        ))}
    </>
  );
};

export default Product;
