import React from "react";
import emailjs from "@emailjs/browser";
import logo from "./../assets/img/logo.png";
import call from "./../assets/img/call.png";
import mail from "./../assets/img/mail.png";
import address from "./../assets/img/address.png";
import social2 from "./../assets/img/social2.png";
import "./../assets/css/Home.css";

const Footer = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_d9rlatd",
        "template_azf9e1h",
        e.target,
        "Jly865lom_TX8CG6u"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <footer className="home-footer">
        <div className="container">
          <div className="row footer-margin">
            <div className="col-sm-4 contact">
              <img src={logo} />
              {/* <div className="d-flex mt-3">
                <div className="mx-2">
                  <img src={call} />
                </div>
                <div className="mx-2">
                  <small>Tel</small>
                  <p>832-498-5095</p>
                </div>
              </div> */}
              <div className="d-flex">
                <div className="mx-2">
                  <img src={mail} />
                </div>
                <div>
                  <small>Mail</small>
                  <p>support@tackapp.net</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="mx-2">
                  <img src={address} />
                </div>
                <div>
                  <small>Address</small>
                  <p>Austin, TX</p>
                </div>
              </div>
              <div className="mt-5 mx-2">
                <img src={social2} />
              </div>
            </div>
            <div className="col-sm-8 newsletter">
              <h3>Newsletter sign up</h3>
              <p>Want to know when I publish new stuff? </p>
              <div>
                <form onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        name="first_name"
                        placeholder="First name"
                        aria-label="First name"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        aria-label="Email"
                      />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        name="last_name"
                        placeholder="Last name"
                        aria-label="Last name"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        name="company"
                        placeholder="Company"
                        aria-label="Company"
                      />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col">
                      <textarea
                        type="text"
                        name="message"
                        className="form-control"
                        rows="4"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col">
                      <button type="submit" className="btn news-btn">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="text-center py-3 copyright">
            <p>Copyright: 2022</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
