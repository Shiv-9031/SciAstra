import React from "react";
import { Layout } from "../../component/Layout.jsx";
import image from "../../images/web-developer.png";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../../component/Spinner.jsx";

export const Register = () => {
  const [payload, setPayload] = React.useState({
    name: "",
    userName: "",
    email: "",
    password: " ",
    confirmpassword: "",
    phone: "",
    gender: "",
  });
  const navigate = useNavigate();
  const [loading, setloading] = React.useState(false);
  const sendInput = async () => {
    try {
      if (payload.password === payload.confirmpassword) {
        setloading(true);
        var response = await axios.post(
          // "http://localhost:8080/api/v1/user/register",
          "https://payinstacard.onrender.com/api/v1/user/register",
          { ...payload, confirmpassword: undefined }
        );
      } else {
        toast("password is not same");
      }

      //navigate
      if (response.data.success) {
        setloading(false);
        toast(response.data.message);
        navigate("/login");
      }
    } catch (e) {
      toast(e);
    }
  };

  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <Layout>
          <div className="register-main-container">
            <div className="left-container">
              <img src={image} alt="developer" />
            </div>
            <div className="right-container">
              <div className="title">Registration</div>
              <div className="user-container">
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Full Name</span>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      onChange={(e) =>
                        setPayload({ ...payload, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">UserName</span>
                    <input
                      type="text"
                      placeholder="Enter your username"
                      required
                      onChange={(e) =>
                        setPayload({ ...payload, userName: e.target.value })
                      }
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Email</span>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      onChange={(e) =>
                        setPayload({ ...payload, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">phone number</span>
                    <input
                      type="number"
                      placeholder="Enter your phone number"
                      required
                      onChange={(e) =>
                        setPayload({ ...payload, phone: e.target.value })
                      }
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Password</span>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      required
                      onChange={(e) =>
                        setPayload({ ...payload, password: e.target.value })
                      }
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Confirmed Password</span>
                    <input
                      type="password"
                      placeholder="re-enter your password"
                      required
                      onChange={(e) =>
                        setPayload({
                          ...payload,
                          confirmpassword: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="gender-details">
                  <span className="gender-title">Gender</span>
                  <div className="gender-category">
                    <span className="category">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={(e) =>
                          setPayload({ ...payload, gender: e.target.value })
                        }
                        required
                      />
                      <label>Male</label>
                    </span>
                    <span className="category">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={(e) =>
                          setPayload({ ...payload, gender: e.target.value })
                        }
                        required
                      />
                      <label>Female</label>
                    </span>
                    <span className="category">
                      <input
                        type="radio"
                        name="gender"
                        value="prefer not to say"
                        onChange={(e) =>
                          setPayload({ ...payload, gender: e.target.value })
                        }
                        required
                      />
                      <label>Prefer not to say</label>
                    </span>
                  </div>
                </div>
                <div className="button">
                  <input type="submit" value={"Register"} onClick={sendInput} />
                </div>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};
