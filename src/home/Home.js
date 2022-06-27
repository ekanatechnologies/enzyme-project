import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import frame from "./../assets/img/frame.png";
import pinkMark from "./../assets/img/pink-mark.png";
import man1 from "./../assets/img/man1.png";
import man2 from "./../assets/img/man2.png";
import man3 from "./../assets/img/man3.png";
import social from "./../assets/img/social.png";
import left from "./../assets/img/left.png";
import our17 from "./../assets/img/17.png";
import our18 from "./../assets/img/18.png";
import our19 from "./../assets/img/19.png";
import our20 from "./../assets/img/20.png";
import arrow from "./../assets/img/arrow.png";
import circle from "./../assets/img/circle.png";
import amFrame from "./../assets/img/am-frame.png";
import amFrame2 from "./../assets/img/am-frame2.png";
import amFrame3 from "./../assets/img/am-frame3.png";
import amFrame4 from "./../assets/img/am-frame4.png";
import ygFrame from "./../assets/img/yg-frame.png";
import ygFrame2 from "./../assets/img/yg-frame2.png";
import ygFrame3 from "./../assets/img/yg-frame3.png";
import ygFrame4 from "./../assets/img/yg-frame4.png";
import frameRec from "./../assets/img/frame-rec.png";

import "./../assets/css/Home.css";

function Home() {
  return (
    <>
      <Header />
      <div className="container-fluid topBar">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 d-flex align-items-center banner-text text-start">
              <div>
                <h1>The smart and easy way to invest in crypto</h1>
                <p>We help our clients invest in crypto like a pro.</p>
                {/* <p className="join">Join the waitlist</p> */}
                <div className="d-flex banner-input">
                  <img className="img-pos" src={arrow} />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="email"
                  />
                  <button className="btn btn-sign-up text-nowrap">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 banner-img">
              <img src={frame} width="100%" />
            </div>
          </div>
        </div>
      </div>

      {/* The next generation of asset management section */}

      <div className="container-fluid next-gen-bg">
        <div className="next-gen-circle">
          <img src={circle} />
        </div>
        <div className="container">
          <div className="text-center">
            <h2 className="next-gen">
              The next generation of <span>asset management</span>
            </h2>
            <p className="next-gen-p text-center">
              Cryptocurrencies and blockchain technology have ushered in a new
              era of financial revolution. This new asset <br />
              class and technology is the foundation of the next financial
              infrastructure.
            </p>
          </div>
          <div className="container">
            <div
              id="carouselExampleDark"
              class="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="2000">
                  <div className="row asset-management mt-5">
                    <div className="col-sm-5 d-flex align-items-center">
                      <div className="am-text-all">
                        <span className="bg-text">Non-Custodial</span>
                        <h2>Non-Custodial</h2>
                        <div className="d-flex am-text">
                          <div className="am-pink">
                            <img src={pinkMark} />
                          </div>
                          <div>
                            <p>
                              Clients have full control of their assets and
                              funds.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-7">
                      <img src={amFrame} width="100%" />
                    </div>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <div className="row asset-management2 mt-3">
                    <div className="col-sm-7">
                      <img src={amFrame2} width="100%" />
                    </div>
                    <div className="col-sm-5 d-flex align-items-center">
                      <div className="am-text-all2">
                        <span className="bg-text2">Permissoinless</span>
                        <h2>Permissoinless</h2>
                        <div className="d-flex am-text2">
                          <div className="am-pink">
                            <img src={pinkMark} width="100%" />
                          </div>
                          <div>
                            <p>
                              Clients can access products and the
                              <br /> platform from anywhere in the world.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <div className="row asset-management mt-5">
                    <div className="col-sm-5 d-flex align-items-center">
                      <div className="am-text-all">
                        <span className="bg-text">Transparent</span>
                        <h2>Transparent</h2>
                        <div className="d-flex am-text">
                          <div className="am-pink">
                            <img src={pinkMark} />
                          </div>
                          <div>
                            <p>
                              Clients have full control of their assets and
                              funds.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-sm-7"
                      style={{ backgroundRepeat: " no-repeat" }}
                    >
                      <img src={amFrame3} width="100%" />
                    </div>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <div className="row asset-management2 mt-5">
                    <div className="col-sm-7">
                      <img src={amFrame4} width="100%" />
                    </div>
                    <div className="col-sm-5 d-flex align-items-center">
                      <div className="am-text-all2">
                        <span className="bg-text2">Programatic</span>
                        <h2>Programatic</h2>
                        <div className="d-flex am-text2">
                          <div className="am-pink">
                            <img src={pinkMark} />
                          </div>
                          <div>
                            <p>
                              Smart contracts protect clients.
                              <br />
                              Managers can only act within a<br />
                              confined set of rules.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}

      <div className="container ourTeamD">
        <div className="row">
          <div className="col-sm-4 our-team-text">
            <h2>
              Our <span className="ourTeam">Team</span>
            </h2>
            <p className="p1">
              We are your personal
              <br /> investment team.{" "}
            </p>
            <p className="p2">
              Were here to help you invest in crypto and grow your capital over
              a 3-5 year horizon and beyond. As your investment team, we
              research, vet, and help manage your investments. We update you
              each time a token is bought or sold for your portfolio. Our
              mission is to empower, educate, and help you grow your wealth.{" "}
            </p>
            <img src={social} />
            <div className="d-flex position-relative">
              <div className="left-arrow">
                <img src={left} />
              </div>
            </div>
          </div>
          <div className="col-sm-2 our-team1">
            <div>
              <span className="two">02</span>
              <span className="five">/05</span>
            </div>
            <div className="man-img">
              <img src={man1} width="100%" />
            </div>
          </div>
          <div className="col-sm-2 emily-div">
            <span className="emily">Emily Moady</span>

            <div className="man-img2">
              <img src={man2} width="100%" />
            </div>
          </div>
          <div className="col-sm-4 third-img">
            <div className="man-img3">
              <img src={man3} width="100%" />
            </div>
          </div>
        </div>
      </div>

      {/* Our approach section  */}

      <div className="container-fluid our-approach">
        <div className="container mt-5">
          <div className="text-center">
            <h2>
              Our <span>approach</span>
            </h2>
            <div className=" d-flex justify-content-center">
              <p className="ourApproach">
                We are technology forward. All transactions occur on the
                blockchain, compliance, accounting, and investment management
                services are rendered programmatically and at a dramatically
                reduced cost.
              </p>
            </div>
            <div className="row ourApro">
              <div className="col-sm-3">
                <img src={our17} width="100%" />
              </div>
              <div className="col-sm-3">
                <img src={our18} width="100%" />
              </div>
              <div className="col-sm-3">
                <img src={our19} width="100%" />
              </div>
              <div className="col-sm-3">
                <img src={our20} width="100%" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="text-center">
            <h2 className="next-gen">
              Let us be<span> your guide </span>
            </h2>
            <p className="next-gen-p">Grow your wealth with peace of mind.</p>
          </div>
          <div className="container">
            <div
              id="guideCarousel"
              class="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="2000">
                  <div className="row your-guide mt-5">
                    <div className="col-sm-5 d-flex align-items-center">
                      <div className="yg-text-all">
                        <span className="bg-text">Security</span>
                        <h2>Security</h2>
                        <div className="yg-text">
                          <p>
                            We utilize multi-signature wallets provided by
                            Gnosis Safe, an advanced wallet solution that sets
                            the industry-wide, highest security standards.
                          </p>
                          <p>
                            It is the only formally verified smart
                            contract-based wallet solution and helps eliminate
                            operational risk. In addition, any and every update
                            to the smart contracts utilized go through careful
                            audits by external security experts.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-sm-7"
                      style={{ backgroundRepeat: " no-repeat" }}
                    >
                      <img src={ygFrame} width="100%" />
                    </div>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <div className="row your-guide2 mt-5">
                    <div className="col-sm-7">
                      <img src={ygFrame2} width="100%" />
                    </div>
                    <div className="col-sm-5 d-flex align-items-center">
                      <div className="yg-text-all2">
                        <span className="bg-text2">Insurance</span>
                        <h2>Insurance</h2>
                        <div className="yg-text2">
                          <div>
                            <p>
                              Client's have access to Unslashed a decentralized
                              insurance protocol covering all common risks for
                              crypto assets. This protocol enables almost
                              instant liquidity to insurance buyers and risk
                              underwriters, ensures constant collateralization,
                              and guarantees transparency through an unbiased
                              claims process.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <div className="row your-guide mt-5">
                    <div className="col-sm-5 d-flex align-items-center">
                      <div className="yg-text-all">
                        <span className="bg-text">Compliance</span>
                        <h2>Compliance</h2>
                        <div className="yg-text">
                          <p>
                            We focus on compliance, ensuring our products are
                            designed to comply with the latest investor
                            protections and regulations.
                          </p>
                          <p>
                            Aspyr Finance is an MSB registered with FinCen and
                            an investment adviser registered with the US
                            Securities and Exchange Commission.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-sm-7"
                      style={{ backgroundRepeat: " no-repeat" }}
                    >
                      <img src={ygFrame3} width="100%" />
                    </div>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <div className="row your-guide2 mt-3">
                    <div className="col-sm-7">
                      <img src={ygFrame4} width="100%" />
                    </div>
                    <div className="col-sm-5 d-flex align-items-center">
                      <div className="yg-text-all2">
                        <span className="bg-text2">24/7 support</span>
                        <h2>24/7 support</h2>
                        <div className="yg-text2">
                          <p>
                            We focus on compliance, ensuring our products are
                            designed to comply with the latest investor
                            protections and regulations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#guideCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#guideCarousel"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ section */}

      <div className="container-fluid last-bg">
        <div className="container mt-5">
          <p className="faqq">FAQ</p>
          <p className="f-ques-bg text-center">Frequently asked questions</p>
          <h2 className="f-ques text-center">
            Frequently<span> asked questions</span>
          </h2>
          <div className="row accord-tab">
            <div className="col-sm-6">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      I’VE SEEN OTHER APPS THAT SERVE SIMILAR PURPOSES. WHAT
                      MAKES YOURS THE BEST?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Enter the Answer to your Question here. Be thoughtful with
                      your answer, write clearly, and consider adding examples.
                      This can help your visitors get the help they need quickly
                      and easily.
                    </div>
                  </div>
                </div>
                <div className="accordion-item  mb-3">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      IT ALL SOUNDS GREAT, BUT WHAT DOES THIS APP ACTUALLY DO?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Enter the Answer to your Question here. Be thoughtful with
                      your answer, write clearly, and consider adding examples.
                      This can help your visitors get the help they need quickly
                      and easily.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      HOW OFTEN ARE THERE UPDATES TO THE APP?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Enter the Answer to your Question here. Be thoughtful with
                      your answer, write clearly, and consider adding examples.
                      This can help your visitors get the help they need quickly
                      and easily.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="flush-headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      I’VE SEEN OTHER APPS THAT SERVE SIMILAR PURPOSES. WHAT
                      MAKES YOURS THE BEST?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingFour"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Enter the Answer to your Question here. Be thoughtful with
                      your answer, write clearly, and consider adding examples.
                      This can help your visitors get the help they need quickly
                      and easily.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Strategy Section */}

        <div className="container">
          <div className="text-center">
            <h2 className="our-strategy">
              Our<span> Strategy</span>
            </h2>
            <p className="ourStrategy">
              We recommend clients invest in a strategy that aligns with their
              personal interests and investment goals
            </p>
          </div>
          <div className="row strategy pb-5 d-flex align-items-center ">
            <div className="col-sm-6 strategyP">
              <div>
                <span className="forerunner-bg">Forerunner</span>
                <h2 className="forerunner">Forerunner</h2>
                <div className="d-flex">
                  <div className="mx-mark">
                    <img src={pinkMark} />
                  </div>
                  <div>
                    <p className="forerunner-text">
                      Our cryptocurrency strategy, we invest in 10-15 tokens on
                      the long side. These are crypto projects vetted through
                      deep fundamental research by our Portfolio Manager and
                      Research team. The Forerunner portfolio is updated when
                      the Portfolio Manager sees a better risk/reward
                      opportunity than an existing portfolio holding(s). The
                      Forerunner strategy is long-term focused with low
                      turnover, which means typically only a few tokens change
                      each quarter.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 strategy-img">
              <img src={frameRec} width="100%" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
