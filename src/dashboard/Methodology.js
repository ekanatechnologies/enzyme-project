import React from "react";
import Header from "./Header";
import baseChart from "./../assets/img/chart-icon.png";
import baseChart2 from "./../assets/img/chart-icon2.png";
import baseChart3 from "./../assets/img/chart-icon3.png";
import baseChart4 from "./../assets/img/chart-icon4.png";
import btcIcon from "./../assets/img/btc-icon.png";
import etherium from "./../assets/img/etherium.png";
import tokenbox from "./../assets/img/tokenbox.png";
import steem from "./../assets/img/steem.png";
import ribble from "./../assets/img/ribble.png";
import ubex from "./../assets/img/ubex.png";

const Methodology = () => {
  return (
    <div>
      <Header />
      <main id="main" className="main">
        <div className="pagetitle">
          <h4>Stats</h4>
        </div>
        <section className="section dashboard">
          <div className="row">
            <div className="col-xxl-12 col-md-12">
              <div className="card info-card sales-card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="d-flex align-items-center pdi-text">
                        <img className="px-2" src={btcIcon} />
                        <h2>Defi Pulse Index (DPI)</h2>
                      </div>
                      <p className="pdi-p">
                        The DeFi Pulse Index (DPI) is a capitalization-weighted
                        index that tracks the performance of decentralized
                        financial assets across the market.
                      </p>
                    </div>
                    <div className="col-md-4 d-flex pdi">
                      <div className="pdi-border px-3">
                        <p>CURRENT PRICE</p>
                        <b>$104.7</b>
                        <br />
                        <button className="btn dash-btn pdi-btn mt-3">
                          BUY
                        </button>
                      </div>
                      <div className="text-center px-3">
                        <p>CHANGE</p>
                        <b style={{ color: "#199F40" }}>0.06%</b>
                        <br />
                        <button className="btn mt-3 pdi-btn">BUY</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="pagetitle">
          <h4>Stats</h4>
        </div>
        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-xxl-3 col-md-3">
                  <div className="card info-card sales-card">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center justify-content-center">
                          <img src={baseChart} />
                        </div>
                        <div className="ps-3">
                          <span className="text-muted small pt-2 ps-1">
                            Balance
                          </span>
                          <h6>
                            $2,300<span>(+5%)</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-md-3">
                  <div className="card info-card sales-card">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center justify-content-center">
                          <img src={baseChart2} />
                        </div>
                        <div className="ps-3">
                          <span className="text-muted small pt-2 ps-1">
                            Profit or Loss
                          </span>
                          <h6>
                            $327<span>(+20%)</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-md-3">
                  <div className="card info-card sales-card">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center justify-content-center">
                          <img src={baseChart3} />
                        </div>
                        <div className="ps-3">
                          <span className="text-muted small pt-2 ps-1">
                            Numbers of shares
                          </span>
                          <h6>
                            $23<span>(-15%)</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-md-3">
                  <div className="card info-card sales-card">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center justify-content-center">
                          <img src={baseChart4} />
                        </div>
                        <div className="ps-3">
                          <span className="text-muted small pt-2 ps-1">
                            Return Since Inception
                          </span>
                          <h6>
                            $33<span>(+100%)</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pagetitle">
                  <h4>Underlying Tokens</h4>
                </div>

                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-xxl-3 col-md-3">
                          <div className="card cardd info-card sales-card">
                            <div className="card-body">
                              <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center justify-content-center">
                                  <img src={btcIcon} />
                                </div>
                                <div className="ps-3">
                                  <span className="text-muted small pt-2 ps-1">
                                    Bitcoin
                                  </span>
                                  <h6>
                                    $33<span>(+100%)</span>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-3 col-md-3">
                          <div className="card cardd info-card sales-card">
                            <div className="card-body">
                              <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center justify-content-center">
                                  <img src={etherium} />
                                </div>
                                <div className="ps-3">
                                  <span className="text-muted small pt-2 ps-1">
                                    Ethereum
                                  </span>
                                  <h6>
                                    $33<span>(+100%)</span>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-3 col-md-3">
                          <div className="card cardd info-card sales-card">
                            <div className="card-body">
                              <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center justify-content-center">
                                  <img src={steem} />
                                </div>
                                <div className="ps-3">
                                  <span className="text-muted small pt-2 ps-1">
                                    Steem
                                  </span>
                                  <h6>
                                    $33<span>(+100%)</span>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-3 col-md-3">
                          <div className="card cardd info-card sales-card">
                            <div className="card-body">
                              <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center justify-content-center">
                                  <img src={tokenbox} />
                                </div>
                                <div className="ps-3">
                                  <span className="text-muted small pt-2 ps-1">
                                    Tokenbox
                                  </span>
                                  <h6>
                                    $33<span>(+100%)</span>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-3 col-md-3">
                          <div className="card cardd info-card sales-card">
                            <div className="card-body">
                              <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center justify-content-center">
                                  <img src={ribble} />
                                </div>
                                <div className="ps-3">
                                  <span className="text-muted small pt-2 ps-1">
                                    Ripple
                                  </span>
                                  <h6>
                                    $33<span>(+100%)</span>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-3 col-md-3">
                          <div className="card cardd info-card sales-card">
                            <div className="card-body">
                              <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center justify-content-center">
                                  <img src={ubex} />
                                </div>
                                <div className="ps-3">
                                  <span className="text-muted small pt-2 ps-1">
                                    Ubex
                                  </span>
                                  <h6>
                                    $33<span>(+100%)</span>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pagetitle">
              <h4>About</h4>
            </div>
            <div className="col-lg-12 about">
              <div className="card">
                <div className="card-body pb-0">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          What is me3?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>{" "}
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Is me3 available yet?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          The DeFi Pulse Index is a digital asset index designed
                          to track tokens’ performance within the Decentralized
                          Finance industry. The index is weighted based on the
                          value of each token’s circulating supply. The DeFi
                          Pulse Index aims to track projects in Decentralized
                          Finance that have significant usage and show a
                          commitment to ongoing maintenance and development.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          What can I use me3 for?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the third item's accordion body.
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
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

export default Methodology;
