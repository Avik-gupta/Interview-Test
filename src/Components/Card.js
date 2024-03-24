import React, { useState, useEffect } from "react";
import axios from "axios";
import Card1 from "./Data";


const UserProfileCard = () => {
  const [userData, setUserData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://gist.githubusercontent.com/pandemonia/21703a6a303e0487a73b2610c8db41ab/raw/82e3ef99cde5b6e313922a5ccce7f38e17f790ac/twubric.json"
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleRemove = (data) => {
    setUserData((prevData) => prevData.filter((item) => item !== data));
  };

  return (
    <div>
      <Card1 userData={userData} handleRemove={handleRemove} />
    </div>
  );
};

export default UserProfileCard;
