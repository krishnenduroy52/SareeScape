import React, { useEffect, useState } from "react";
import "../Profilepage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function profilepage() {
  const [userData, setUserData] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedData, setEditedData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const userId = localStorage.getItem("sareelocalstorage");
    if (userId) {
      fetchUserData(userId);
    } else {
      navigate("/account");
    }
  }, []);

  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(
        `https://sareeapi.vercel.app/user/details/${userId}`
      );
      const data = response.data.user;
      setUserData(data);
    } catch (error) {
      console.error("Error retrieving user data:", error);
    }
  };

  const handleEdit = () => {
    setIsEditMode(true);
    setEditedData({
      username: userData.username,
      email: userData.email,
      phoneNumber: userData.phoneNumber,
      gender: userData.gender,
      age: userData.age,
    });
  };

  const handelLogout = () => {
    localStorage.removeItem("sareelocalstorage");
    window.location.href = "/";
  };

  const handleSave = async () => {
    try {
      // Perform save operation or API call with editedData
      const response = await fetch(
        `https://sareeapi.vercel.app/user/${userData._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedData),
        }
      );

      if (response.ok) {
        // Update the userData state and exit edit mode
        setUserData(editedData);
        setIsEditMode(false);
        console.log("Data saved successfully");
      } else {
        console.error("Error saving user data:", response.statusText);
      }
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section>
      {userData && <div>user id: {userData._id}</div>}
      <div onClick={handelLogout} className="logout-button">
        Log Out
      </div>
    </section>
  );
}
