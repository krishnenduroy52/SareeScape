import React, { useState } from "react";
import axios from "axios";

function registrationModel() {
  const [state, setState] = useState({
    fname: "",
    lname: "",
    email: "",
    hashedAndSaltedPassword: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    sstate: "",
    zip: "",
    shippingCountry: "",
    shippingStreet1: "",
    shippingStreet2: "",
    shippingCity: "",
    shippingState: "",
    shippingZip: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {
      fname,
      lname,
      email,
      hashedAndSaltedPassword,
      country,
      street1,
      street2,
      city,
      sstate,
      zip,
      shippingCountry,
      shippingStreet1,
      shippingStreet2,
      shippingCity,
      shippingState,
      shippingZip,
    } = state;

    const data = {
      fname,
      lname,
      email,
      hashedAndSaltedPassword,
      address: {
        country,
        street1,
        street2,
        city,
        state: sstate,
        zip,
      },
      shippingAddress: {
        country: shippingCountry,
        street1: shippingStreet1,
        street2: shippingStreet2,
        city: shippingCity,
        state: shippingState,
        zip: shippingZip,
      },
    };
    console.log(data);
    try {
      const response = await axios.post(
        "https://sareeapi.vercel.app/user/register",
        data
      );
      console.log(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        First name:
        <input
          type="text"
          value={state.fname}
          name="fname"
          onChange={(event) =>
            setState((prev) => ({
              ...prev,
              [event.target.name]: event.target.value,
            }))
          }
        />
      </label>
      <label>
        Last name:
        <input
          type="text"
          value={state.lname}
          name="lname"
          onChange={(event) =>
            setState((prev) => ({
              ...prev,
              [event.target.name]: event.target.value,
            }))
          }
        />
      </label>
      <label>
        Email Id:
        <input
          type="text"
          value={state.email}
          name="email"
          onChange={(event) =>
            setState((prev) => ({
              ...prev,
              [event.target.name]: event.target.value,
            }))
          }
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={state.hashedAndSaltedPassword}
          name="hashedAndSaltedPassword"
          onChange={(event) =>
            setState((prev) => ({
              ...prev,
              [event.target.name]: event.target.value,
            }))
          }
        />
      </label>
      <label>
        Country:
        <input
          type="text"
          value={state.country}
          name="country"
          onChange={(event) =>
            setState((prev) => ({
              ...prev,
              [event.target.name]: event.target.value,
            }))
          }
        />
      </label>
      <label>
        Street 1:
        <input
          type="text"
          value={state.street1}
          name="street1"
          onChange={(event) =>
            setState((prev) => ({
              ...prev,
              [event.target.name]: event.target.value,
            }))
          }
        />
      </label>
      <label>
        Street 2:
        <input
          type="text"
          value={state.street2}
          name="street2"
          onChange={(event) =>
            setState((prev) => ({
              ...prev,
              [event.target.name]: event.target.value,
            }))
          }
        />
      </label>
      <label>
        City:
        <input
          type="text"
          value={state.city}
          name="city"
          onChange={(event) =>
            setState((prev) => ({
              ...prev,
              [event.target.name]: event.target.value,
            }))
          }
        />
      </label>
      <label>
        State:
        <input
          type="text"
          value={state.sstate}
          name="sstate"
          onChange={(event) =>
            setState((prev) => ({
              ...prev,
              [event.target.name]: event.target.value,
            }))
          }
        />
      </label>
      <label>
        Zip:
        <input
          type="text"
          value={state.zip}
          name="zip"
          onChange={(event) =>
            setState((prev) => ({
              ...prev,
              [event.target.name]: event.target.value,
            }))
          }
        />
      </label>
      <h1>Shipping Address</h1>
      <label>
        Country:
        <input
          type="text"
          value={state.shippingCountry}
          name="shippingCountry"
          onChange={(event) =>
            setState((prev) => ({
              ...prev,
              [event.target.name]: event.target.value,
            }))
          }
        />
      </label>
      <label>
        Shipping street
        <input
          type="text"
          value={state.shippingStreet1}
          name="shippingStreet1"
          onChange={(event) =>
            setState((prev) => ({
              ...prev,
              [event.target.name]: event.target.value,
            }))
          }
        />
      </label>
      <label>
        Shipping street 2:
        <input
          type="text"
          value={state.shippingStreet2}
          name="shippingStreet2"
          onChange={(event) =>
            setState((prev) => ({
              ...prev,
              [event.target.name]: event.target.value,
            }))
          }
        />
      </label>
      <label>
        Shipping city:
        <input
          type="text"
          value={state.shippingCity}
          name="shippingCity"
          onChange={(event) =>
            setState((prev) => ({
              ...prev,
              [event.target.name]: event.target.value,
            }))
          }
        />
      </label>
      <label>
        Shipping state:
        <input
          type="text"
          value={state.shippingState}
          name="shippingState"
          onChange={(event) =>
            setState((prev) => ({
              ...prev,
              [event.target.name]: event.target.value,
            }))
          }
        />
      </label>
      <label>
        Shipping zip:
        <input
          type="text"
          value={state.shippingZip}
          name="shippingZip"
          onChange={(event) =>
            setState((prev) => ({
              ...prev,
              [event.target.name]: event.target.value,
            }))
          }
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default registrationModel;
