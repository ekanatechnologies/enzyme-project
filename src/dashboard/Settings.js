import React from "react";
import Header from "./Header";
import avatar from "./../assets/img/avatar.png";
import iBtn from "./../assets/img/i-btn.png";

const Settings = () => {
  return (
    <div>
      <Header />
      <main id="main" className="main">
        <div className="pagetitle">
          <h2>Settings</h2>
        </div>
        <section className="section dashboard">
          <div className="row">
            <div className="col-xxl-12 col-md-12">
              <div className="card info-card sales-card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <img src={avatar} />
                        <div className="d-flex h60 px-3">
                          <button className="btn settings-btn mx-3">
                            + Upload new picture
                          </button>
                          <button className="btn settings-btn-2 mx-3">
                            Remove
                          </button>
                          <button className="btn settings-btn-2 mx-3">
                            Logout
                          </button>
                        </div>
                      </div>
                      <form>
                        <div className="mt-3 mb-3">
                          <div className="light-mode d-flex">
                            <p className="text-nowrap d-flex">
                              Display Name
                              <span>
                                <img src={iBtn} />
                              </span>
                            </p>
                          </div>
                          <input type="email" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <div className="light-mode d-flex">
                            <p className="text-nowrap d-flex">
                              Email
                              <span>
                                <img src={iBtn} />
                              </span>
                            </p>
                          </div>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <div className="light-mode d-flex">
                            <p className="text-nowrap d-flex">
                              Ethereum address
                              <span>
                                <img src={iBtn} />
                              </span>
                            </p>
                          </div>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <div className="light-mode d-flex">
                            <p className="text-nowrap d-flex">
                              Bio
                              <span>
                                <img src={iBtn} />
                              </span>
                            </p>
                          </div>
                          <textarea
                            className="form-control"
                            rows="5"
                          ></textarea>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-6 position-relative">
                      <div>
                        <div className="d-flex my-5 mx-5 justify-content-between">
                          <div className="light-mode d-flex">
                            <p className="text-nowrap d-flex">
                              Light Dark Mode
                              <span>
                                <img src={iBtn} />
                              </span>
                            </p>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </div>
                        <div className="d-flex mx-5 justify-content-between">
                          <div className="light-mode d-flex">
                            <p className="text-nowrap d-flex">
                              Notification
                              <span>
                                <img src={iBtn} />
                              </span>
                            </p>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDisabled"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-center help-btn ">
                        <button className="btn dash-btn">Help & Support</button>
                        <button className="btn dash-btn mx-3">
                          Submit Feedback
                        </button>
                        <button className="btn dash-btn">Invite Friends</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Settings;
