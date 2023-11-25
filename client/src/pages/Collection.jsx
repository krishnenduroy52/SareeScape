import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../compnents/Navbar";
import Blacktagline from "../compnents/Announcement";
import Festivecollection from "../compnents/Festtivecollection";
import axios from "axios";

const Collection = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q");

  const [items, setItems] = useState("");
  useEffect(() => {
    axios
      .get(`https://sareeapi.vercel.app/products/q/${query}`)
      .then((response) => {
        // Handle the response data
        const products = response.data;
        setItems(products);
        console.log(products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(items);

  return (
    <div>
      {query && query == "silk" ? (
        <div className="container">
          <h1>PURE SILK SAREES ONLINE</h1>
          <p>
            BharatSthali brings you a massive selection of sarees in pure silk.
            Originating from South India, the south silk sarees are sourced
            directly from the artists and Weavers to bring you authentic
            traditional wedding sarees as well as the best value for your money.
          </p>
        </div>
      ) : query == "cotton" ? (
        <div className="container">
          <h1>PURE COTTON SAREES ONLINE</h1>
          <p>
            BharatSthali brings you a massive selection of sarees in pure silk.
            Originating from South India, the south silk sarees are sourced
            directly from the artists and Weavers to bring you authentic
            traditional wedding sarees as well as the best value for your money.
          </p>
        </div>
      ) : null}
      <div className="collection-container">
        {items &&
          items.map((item) => (
            <div key={item._id} className="festive-products">
              <a href="">
                <img src={`${item.options.images[0]}`} />
                <span className="sale">Sale</span>
                <div className="product-details">
                  <p>{item.title}</p>
                </div>
                <div className="product-price">
                  <div>
                    <span
                      className="money-sale"
                      doubly-currency-inr="684400"
                      doubly-currency={item.price.currency}
                    >
                      {item.price.base} {item.price.currency}
                    </span>
                    <span
                      className="money"
                      doubly-currency-inr="345000"
                      doubly-currency="INR"
                    >
                      {item.price.discount} {item.price.currency}
                    </span>
                  </div>
                  <span className="grid-product__price--savings">Save 20%</span>
                </div>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Collection;
