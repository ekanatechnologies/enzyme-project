import React from "react";
import Header from "./Header";
import hand from "./../assets/img/hand.png";
import protocal from "./../assets/img/protocal.png";
import btcBlue from "./../assets/img/btc-blue.png";
import incoming from "./../assets/img/incoming.png";
import check from "./../assets/img/check.png";

const Activity = () => {
  return (
    <div>
      <Header />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>The Activity Page</h1>
        </div>
        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body pb-0">
                  <div className="row activity">
                    <div className="col-md-5 position-relative">
                      <span className="date">4 apr 2022 16:34</span>
                      <h2>Swap</h2>
                      <div className="d-flex hand">
                        <div>
                          <img src={hand} />
                        </div>
                        <div className="px-1 mb-3">
                          <span>Aspyr - Defi Fund</span>
                          <br />
                          <span className="act-id">0x3456....ab95</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 act-bg mb-3 py-3 ">
                      <div className="d-flex justify-content-between">
                        <div className="protocal">Protocol</div>
                        <div className="d-flex">
                          <div>
                            <span>ParaSwap V5</span>
                            <br />
                            <span className="float-end stm">STM</span>
                          </div>
                          <div className="mx-2">
                            <img src={protocal} />
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <div className="protocal">Protocol</div>
                        <div className="d-flex">
                          <div>
                            <span>13,200 USDC</span>
                            <br />
                            <span className="float-end stm">$13,211.46</span>
                          </div>
                          <div className="mx-2">
                            <img src={btcBlue} />
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <div className="protocal">Protocol</div>
                        <div className="d-flex">
                          <div>
                            <span>7,456.456 1INCH</span>
                            <br />
                            <span className="float-end stm">$13,211.46</span>
                          </div>
                          <div className="mx-2">
                            <img src={incoming} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body pb-0">
                  <div className="row activity">
                    <div className="col-md-5 position-relative">
                      <span className="date">4 apr 2022 16:34</span>
                      <h2>Swap</h2>
                      <div className="d-flex hand">
                        <div>
                          <img src={hand} />
                        </div>
                        <div className="px-1 mb-3">
                          <span>Aspyr - Defi Fund</span>
                          <br />
                          <span className="act-id">0x3456....ab95</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 act-bg mb-3 py-3 ">
                      <div className="d-flex justify-content-between">
                        <div className="protocal">Protocol</div>
                        <div className="d-flex">
                          <div>
                            <span>ParaSwap V5</span>
                            <br />
                            <span className="float-end stm">STM</span>
                          </div>
                          <div className="mx-2">
                            <img src={protocal} />
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <div className="protocal">Protocol</div>
                        <div className="d-flex">
                          <div>
                            <span>13,200 USDC</span>
                            <br />
                            <span className="float-end stm">$13,211.46</span>
                          </div>
                          <div className="mx-2">
                            <img src={btcBlue} />
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <div className="protocal">Protocol</div>
                        <div className="d-flex">
                          <div>
                            <span>7,456.456 1INCH</span>
                            <br />
                            <span className="float-end stm">$13,211.46</span>
                          </div>
                          <div className="mx-2">
                            <img src={incoming} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body pb-0">
                  <div className="row activity">
                    <div className="col-md-5 position-relative">
                      <span className="date">4 apr 2022 16:34</span>
                      <h2>Swap</h2>
                      <div className="d-flex hand">
                        <div>
                          <img src={hand} />
                        </div>
                        <div className="px-1 mb-3">
                          <span>Aspyr - Defi Fund</span>
                          <br />
                          <span className="act-id">0x3456....ab95</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 act-bg mb-3 py-3 ">
                      <div className="d-flex justify-content-between">
                        <div className="protocal">Protocol</div>
                        <div className="d-flex">
                          <div>
                            <span>ParaSwap V5</span>
                            <br />
                            <span className="float-end stm">STM</span>
                          </div>
                          <div className="mx-2">
                            <img src={protocal} />
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <div className="protocal">Protocol</div>
                        <div className="d-flex">
                          <div>
                            <span>13,200 USDC</span>
                            <br />
                            <span className="float-end stm">$13,211.46</span>
                          </div>
                          <div className="mx-2">
                            <img src={btcBlue} />
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <div className="protocal">Protocol</div>
                        <div className="d-flex">
                          <div>
                            <span>7,456.456 1INCH</span>
                            <br />
                            <span className="float-end stm">$13,211.46</span>
                          </div>
                          <div className="mx-2">
                            <img src={incoming} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body pb-0">
                  <div className="d-flex justify-content-between">
                    <div>
                      <p>Depositors</p>
                    </div>
                    <div>
                      <img src={check} />
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <div>
                      <p>Depositors</p>
                    </div>
                    <div>
                      <img src={check} />
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <div>
                      <p>Depositors</p>
                    </div>
                    <div>
                      <img src={check} />
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <div>
                      <p>Depositors</p>
                    </div>
                    <div>
                      <img src={check} />
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <div>
                      <p>Depositors</p>
                    </div>
                    <div>
                      <img src={check} />
                    </div>
                  </div>
                  <div className="depositors-bg text-center py-4">
                    <div className="my-4">
                      <button className="btn select-btn">Select All</button>
                    </div>
                    <div className="my-2">
                      <button className="btn select-btn">Clear All</button>
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

export default Activity;
