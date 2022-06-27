import React from "react";
import Header from "./Header";
import SortTable from "./SortTable";

const Holdings = () => {
  return (
    <div>
      <Header />
      <main id="main" className="main">
        <div className="pagetitle"></div>
        <section className="section dashboard">
          <div className="row">
            <div className="col-12">
              <div className="card top-selling overflow-auto">
                <div className="card-body pb-0">
                  <h5 className="card-title">Token Holdings</h5>
                  <SortTable />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Holdings;
