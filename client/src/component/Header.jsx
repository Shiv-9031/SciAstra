import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { menu_data } from "./menu-list";

export const Header = ({ children }) => {
  const [loguser, setLoguser] = useState("");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoguser(user);
    }
  }, []);

  return (
    <div className="page-content">
      <div className="header-main">
        <div className="header-logo">
          <Link to="/">SciAstra Education Private Limited</Link>
        </div>
        <div className="search-bar"></div>
        <div className="header-item-list">
          <ul>
            <li className="header-item">
              <Link to="/">Home</Link>
            </li>

            {!loguser ? (
              menu_data.map((data, index) => {
                return (
                  <li className="header-item" key={index}>
                    <Link to={data.link}>{data.element}</Link>
                  </li>
                );
              })
            ) : (
              <>
                <li className="header-item">
                  <Link to="/">{loguser.user.name}</Link>
                </li>

                <li className="header-item">
                  <a
                    href="https://github.com/Shiv-9031/SciAstra/tree/master"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Project Link
                  </a>
                </li>
                <li className="header-item">
                  <button onClick={logout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      {/*-------------------- main body---------------- */}

      {children}
    </div>
  );
};
