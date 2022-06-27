import React from "react";
import logo from "./../assets/img/logo.png";
import Formatic from "fortmatic";
import Web3 from "web3";
import "./../assets/css/Home.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { aspyrContext } from "../context/Context";

function Header() {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const { userState, userDispatch } = useContext(aspyrContext);

  const handleWalletConnect = async () => {
    setLoading(true);
    try {
      const fortmatic = new Formatic("pk_test_C7519DFF4B8CBA7E");
      const provider = await fortmatic.getProvider();
      const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      userDispatch({ type: "LOGIN", payload: account });
      setLoading(false);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      alert(error);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      {loading ? <div className="semiTransparenDiv"></div> : null}

      <nav class="navbar navbar-expand-sm navbar-light">
        <div class="container">
          <a className="navbar-brand" href="#">
            <img src={logo} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ">
              <li className="nav-item">
                <a
                  className="nav-link active mx-2"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link mx-2" href="#" aria-expanded="false">
                  Strategy
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  FAQ
                </a>
              </li>
              <li className="nav-item btn-sign-padding btn-sign">
                <a
                  className="nav-link"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                  onClick={handleWalletConnect}
                >
                  Sign Up
                </a>
              </li>
              <li className="nav-item btn-sign">
                <a className="nav-link" href="#" onClick={handleWalletConnect}>
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
