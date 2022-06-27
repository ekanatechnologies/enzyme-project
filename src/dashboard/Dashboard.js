import React from "react";
import Header from "./Header";
import baseChart from "./../assets/img/chart-icon.png";
import baseChart2 from "./../assets/img/chart-icon2.png";
import baseChart3 from "./../assets/img/chart-icon3.png";
import baseChart4 from "./../assets/img/chart-icon4.png";
import news1 from "./../assets/img/news-1.jpg";
import news2 from "./../assets/img/news-2.jpg";
import news3 from "./../assets/img/news-3.jpg";
import news4 from "./../assets/img/news-4.jpg";
import news5 from "./../assets/img/news-5.jpg";
import photo from "./../assets/img/userpic.png";
import Newsfeed from "./NewsFeed";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <main id="main" className="main">
        <div className="pagetitle"></div>
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
                        <div className="ps-2">
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
                        <div className="ps-2">
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
                        <div className="ps-2">
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
                        <div className="ps-2">
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

                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Aspyr Defi Fund (ADF)</h5>
                      <div id="reportsChart"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body pb-0">
                  <h5 className="card-title">News Feed</h5>
                  <Newsfeed />
                  {/* <div className="row">
                    <div className="col-lg-4">
                      <div class="card shadow-none">
                        <img className="newsimg" src={news1} alt="" />

                        <div class="card-body">
                          <span>HUB</span>
                          <h5 class="news-card-title">
                            Nihil blanditiis at in nihil autem
                          </h5>
                          <p class="news-card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Id tortor feugiat nulla ut eu, nullam ac.
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Id tortor feugiat nulla ut eu, nullam ac.{" "}
                          </p>
                          <hr />
                          <div className="d-flex">
                            <div>
                              <img src={photo} />
                            </div>

                            <div className="px-3">
                              <span className="news-auth">Ronald Richards</span>
                              <br />
                              <small className="news-small">May 16, 2022</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 left-dashed">
                      <div className="news">
                        <div className="post-item clearfix">
                          <img className="imgg" src={news1} alt="" />
                          <p className="text-muted">PRO RESEARCH</p>
                          <h4>
                            <a href="#">Nihil blanditiis at in nihil autem</a>
                          </h4>
                          <div className="d-flex mt-3">
                            <div>
                              <img src={photo} />
                            </div>

                            <div className="px-3">
                              <span className="news-auth">Ronald Richards</span>
                              <br />
                              <small className="news-small">May 16, 2022</small>
                            </div>
                          </div>
                        </div>

                        <div className="post-item clearfix">
                          <img className="imgg" src={news3} alt="" />
                          <p className="text-muted">PRO RESEARCH</p>
                          <h4>
                            <a href="#">
                              Id quia et et ut maxime similique occaecati ut
                            </a>
                          </h4>
                          <div className="d-flex mt-3">
                            <div>
                              <img src={photo} />
                            </div>

                            <div className="px-3">
                              <span className="news-auth">Ronald Richards</span>
                              <br />
                              <small className="news-small">May 16, 2022</small>
                            </div>
                          </div>
                        </div>
                        <div className="post-item clearfix">
                          <img className="imgg" src={news4} alt="" />
                          <p className="text-muted">PRO RESEARCH</p>
                          <h4>
                            <a href="#">Laborum corporis quo dara net para</a>
                          </h4>
                          <div className="d-flex mt-3">
                            <div>
                              <img src={photo} />
                            </div>

                            <div className="px-3">
                              <span className="news-auth">Ronald Richards</span>
                              <br />
                              <small className="news-small">May 16, 2022</small>
                            </div>
                          </div>
                        </div>
                        <div className="post-item clearfix">
                          <img className="imgg" src={news5} alt="" />
                          <p className="text-muted">PRO RESEARCH</p>
                          <h4>
                            <a href="#">
                              Et dolores corrupti quae illo quod dolor
                            </a>
                          </h4>
                          <div className="d-flex mt-3">
                            <div>
                              <img src={photo} />
                            </div>

                            <div className="px-3">
                              <span className="news-auth">Ronald Richards</span>
                              <br />
                              <small className="news-small">May 16, 2022</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 left-dashed">
                      <div className="news">
                        <div className="post-item clearfix">
                          <p className="text-muted">PRO RESEARCH</p>

                          <h4>
                            <a href="#">Nihil blanditiis at in nihil autem</a>
                          </h4>
                          <p>
                            Sit recusandae non aspernatur laboriosam. Quia enim
                            eligendi sed ut harum...
                          </p>
                        </div>

                        <div className="post-item clearfix">
                          <p className="text-muted">PRO RESEARCH</p>

                          <h4>
                            <a href="#">Quidem autem et impedit</a>
                          </h4>
                          <p>
                            Illo nemo neque maiores vitae officiis cum eum turos
                            elan dries werona nande...
                          </p>
                        </div>

                        <div className="post-item clearfix">
                          <p className="text-muted">PRO RESEARCH</p>
                          <h4>
                            <a href="#">
                              Id quia et et ut maxime similique occaecati ut
                            </a>
                          </h4>
                          <p>
                            Fugiat voluptas vero eaque accusantium eos.
                            Consequuntur sed ipsam et totam...
                          </p>
                        </div>

                        <div className="post-item clearfix">
                          <p className="text-muted">PRO RESEARCH</p>

                          <h4>
                            <a href="#">Laborum corporis quo dara net para</a>
                          </h4>
                          <p>
                            Qui enim quia optio. Eligendi aut asperiores enim
                            repellendusvel rerum cuder...
                          </p>
                        </div>

                        <div className="post-item clearfix">
                          <h4>
                            <a href="#">
                              Et dolores corrupti quae illo quod dolor
                            </a>
                          </h4>
                          <p>
                            Odit ut eveniet modi reiciendis. Atque cupiditate
                            libero beatae dignissimos eius...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
