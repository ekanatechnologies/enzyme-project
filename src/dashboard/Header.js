import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/img/logo.png";
import bell from "./../assets/img/bell.png";
import eth from "./../assets/img/eth.png";
import downArrow from "./../assets/img/down-arrow.png";
import profile from "./../assets/img/profile.png";
import icon from "./../assets/img/icon.png";
import icon2 from "./../assets/img/icon2.png";
import icon3 from "./../assets/img/icon3.png";
import icon4 from "./../assets/img/icon4.png";
import icon5 from "./../assets/img/icon5.png";
import { useContext } from "react";
import { aspyrContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
  const {
    userState: { user },
  } = useContext(aspyrContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    // if (!user) {
    //   navigate("/");
    // }
  }, [user]);

  return (
    <div>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <a href="#" className="logo d-flex align-items-center">
            <img src={logo} alt="" />
          </a>
          {/* <i className="bi bi-list toggle-sidebar-btn"></i> */}
        </div>

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item dropdown">
              <a
                className="nav-link nav-icon pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img src={bell} />
                {/* <span className="badge bg-primary badge-number">4</span> */}
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                  You have 2 new notifications
                  <a href="#">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-check-circle text-success"></i>
                  <div>
                    <h4>Sit rerum fuga</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>2 hrs. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-info-circle text-primary"></i>
                  <div>
                    <h4>Dicta reprehenderit</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>4 hrs. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                  <a href="#">Show all notifications</a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link nav-icon pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <div className="eth">
                  <img src={eth} />
                  <span>Ethereum</span>
                  <img src={downArrow} />
                </div>
                {/* <span className="badge bg-success badge-number">3</span> */}
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                <li className="message-item">
                  <div>
                    <h4 className="text-nowrap">Polygon (coming soon)</h4>
                  </div>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <div className="eth">
                  <span>USD ($)</span>
                  <img src={downArrow} />
                </div>
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <i className="bi bi-person"></i>
                    <span>EURO (€)</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <i className="bi bi-question-circle"></i>
                    <span>LB (£)</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-4"
                href="#"
                data-bs-toggle="dropdown"
              >
                <div className="eth">
                  <img src={profile} />
                  {user ? (
                    <span>{user.substring(0, 15)}...</span>
                  ) : (
                    <>
                      <span>Login</span>
                      <img src={downArrow} />
                    </>
                  )}
                </div>
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>ETH - 0x8jonon</h6>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>

      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/dashboard"
              activeClassName="active"
            >
              <img src={icon} />
              <span className="px-3">Overview</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/activity"
              activeClassName="active"
            >
              <img src={icon2} />
              <span className="px-3">Activity</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/holdings"
              activeClassName="active"
            >
              <img src={icon3} />
              <span className="px-3">Holdings</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/methodology"
              activeClassName="active"
            >
              <img src={icon4} />
              <span className="px-3">Methodology</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/settings"
              activeClassName="active"
            >
              <img src={icon5} />
              <span className="px-3">Settings</span>
            </NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Header;
