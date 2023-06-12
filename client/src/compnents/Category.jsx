import React from "react";

const Category = () => {
  return (
    <div className="category-sarees">
      <h2>CHOOSE YOUR SAREE ONLINE</h2>
      <div className="category-wrap">
        <div className="category-card">
          <a href="/collection?q=linen">
            <img src="https://cdn.shopify.com/s/files/1/0560/2227/0115/products/DSC8157_360x.jpg?v=1634036896" />
            <span>LINEN SAREES</span>
          </a>
        </div>
        <div className="category-card">
          <a href="/collection?q=banarasia">
            <img src="https://cdn.shopify.com/s/files/1/0560/2227/0115/collections/DSC4339_b16c422e-84ca-4f54-a437-5b03682870e3_360x.jpg?v=1624790741" />
            <span>BANARASI SAREES</span>
          </a>
        </div>
        <div className="category-card">
          <a href="/collection?q=silk">
            <img src="https://cdn.shopify.com/s/files/1/0560/2227/0115/products/DSC9245_360x.jpg?v=1640605074" />
            <span>BRIDAL SILK SAREES</span>
          </a>
        </div>
        <div className="category-card">
          <a href="/collection?q=handloom">
            <img src="https://cdn.shopify.com/s/files/1/0560/2227/0115/files/1_bd8a74ef-915e-40c6-86df-8095e7ede581_360x.jpg?v=1683576276" />
            <span>HANDLOOM SILKS</span>
          </a>
        </div>
        <div className="category-card">
          <a href="/">
            <img src="https://cdn.shopify.com/s/files/1/0560/2227/0115/products/1_685fd821-06a8-4a8e-8ac2-e01fdc7271a3_360x.jpg?v=1624811988" />
            <span>LINEN SAREES</span>
          </a>
        </div>
        <div className="category-card">
          <a href="/">
            <img src="https://cdn.shopify.com/s/files/1/0560/2227/0115/files/1_bd8a74ef-915e-40c6-86df-8095e7ede581_360x.jpg?v=1683576276" />
            <span>BANARASI SAREES</span>
          </a>
        </div>
        <div className="category-card">
          <a href="/">
            <img src="https://cdn.shopify.com/s/files/1/0560/2227/0115/products/final-1_a145b1f8-7fab-45e8-9fc0-5f4f8544ec10_360x.jpg?v=1653207389" />
            <span>BRIDAL SILK SAREES</span>
          </a>
        </div>
        <div className="category-card">
          <a href="/">
            <img src="https://cdn.shopify.com/s/files/1/0560/2227/0115/collections/7_360x.jpg?v=1651986211" />
            <span>HANDLOOM SILKS</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Category;
