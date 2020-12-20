import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import jwtDecode from "jwt-decode";
import LocalStorageService from "./services/localStorageService";
import "./App.css";
import { EditOutlined } from "@ant-design/icons";

export default function Profile() {
  const [profile, setProfile] = useState([]);
  const [disabled,setDisabled]= useState(1)
  const [userID, setUserID] = useState(true);
  const fetchProfile = async () => {
    const httpResponse = await axios.get("http://localhost:8000/accounts");
    setProfile(httpResponse.data);
  };
  useEffect(() => {
    fetchProfile();
    const token = LocalStorageService.getToken();
    if (token) {
      const user = jwtDecode(token);
      setUserID(user.id);
    }
  }, []);

  return (
    <div>
      <Navbar />
      {profile
        .filter((profile) => profile.id == userID)
        .map((profile) => (
          <div key={profile.id}>
            <div className="pcontent">
              <div className="wrapper">
                <div className="L-wrapper-top">
                  <img src={profile.avatar} alt="Avatar" className="avatar" />
                  <div className="P-text">{profile.firstname}</div>
                  <div className="P-m-text">Change Picture</div>
                </div>
                <div className="L-wrapper-bot">
                  <div className="P-text">Manage My Account</div>
                  <div className="P-text">My Orders</div>
                  <div className="P-text">My Reviews</div>
                </div>
                <div className="R-wrapper">
                  <div className="hprofile">Personal Profile</div>
                  <form action="">
                    Firstname : <EditOutlined   />
                    <input
                      type="text"
                      disabled={false}
                      value={profile.firstname}
                    ></input>
                  </form>
                  <form action="">
                    Lastname : <EditOutlined />
                    <input
                      type="text"
                      disabled={disabled}
                      value={profile.lastname}
                    ></input>
                  </form>
                  <form action="">
                    Phone Number : <EditOutlined />
                    <input
                      type="text"
                      disabled={disabled}
                      value={profile.phone}
                    ></input>
                  </form>
                  <form action="">
                    Address : <EditOutlined />
                    <input
                      type="text"
                      disabled={disabled}
                      value="Address"
                    ></input>
                  </form>
                  <button className="button">Submit</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      <Footer />
    </div>
  );
}
