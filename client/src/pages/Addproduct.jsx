import React, { useState } from "react";

const AddProduct = () => {
  const [sku, setSku] = useState("");
  const [title, setTitle] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const [currency, setCurrency] = useState("");
  const [discount, setDiscount] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [sizeOptions, setSizeOptions] = useState([]);
  const [featureOptions, setFeatureOptions] = useState([]);
  const [colorOptions, setColorOptions] = useState([]);
  const [rulingOption, setRulingOption] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:2000/products/add-product",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sku,
            title,
            price: {
              base: basePrice,
              currency,
              discount,
            },
            quantity,
            options: {
              size: sizeOptions,
              features: featureOptions,
              colors: colorOptions,
              ruling: rulingOption,
              images: imageUrls,
            },
            categories,
          }),
        }
      );

      if (response.ok) {
        const savedProduct = await response.json();
        console.log(savedProduct);
      } else {
        console.error("Failed to save product");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>SKU:</label>
          <input
            type="text"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
          />
        </div>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Base Price:</label>
          <input
            type="number"
            value={basePrice}
            onChange={(e) => setBasePrice(e.target.value)}
          />
        </div>
        <div>
          <label>Currency:</label>
          <input
            type="text"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
        </div>
        <div>
          <label>Discount:</label>
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div>
          <label>Size Options:</label>
          <input
            type="text"
            value={sizeOptions}
            onChange={(e) => setSizeOptions(e.target.value)}
          />
        </div>
        <div>
          <label>Feature Options:</label>
          <input
            type="text"
            value={featureOptions}
            onChange={(e) => setFeatureOptions(e.target.value)}
          />
        </div>
        <div>
          <label>Color Options:</label>
          <input
            type="text"
            value={colorOptions}
            onChange={(e) => setColorOptions(e.target.value.split(","))}
          />
        </div>
        <div>
          <label>Ruling Option:</label>
          <input
            type="text"
            value={rulingOption}
            onChange={(e) => setRulingOption(e.target.value.split(","))}
          />
        </div>
        <div>
          <label>Image URLs:</label>
          <input
            type="text"
            value={imageUrls}
            onChange={(e) => setImageUrls(e.target.value.split(","))}
          />
        </div>
        <div>
          <label>Categories:</label>
          <input
            type="text"
            value={categories}
            onChange={(e) => setCategories(e.target.value.split(","))}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
