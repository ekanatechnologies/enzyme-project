import React, { useState } from "react";
import MockData from "./MockData.json";
import star from "./../assets/img/star.png";
import btc from "./../assets/img/btc-icon.png";
import up from "./../assets/img/triangle-up.png";

const SortTable = () => {
  const [data, setData] = useState(MockData);
  const [order, setOrder] = useState("ASC");
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );

      setData(sorted);
      setOrder("ASC");
    }
  };
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div style={{ float: "right" }}>
        <input
          className="form-control my-3"
          style={{ width: "20rem" }}
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      <table className="table table-borderless holdings sortTable">
        <thead>
          <tr>
            <th></th>
            <th onClick={() => sorting("ASSETS")}>
              ASSETS<i class="bi bi-caret-down-fill"></i>
            </th>
            <th onClick={() => sorting("BALANCE")}>
              BALANCE <i class="bi bi-caret-down-fill"></i>
            </th>
            <th onClick={() => sorting("FIELD4")}></th>
            <th onClick={() => sorting("CHANGE")}>
              CHANGE 24H <i class="bi bi-caret-down-fill"></i>
            </th>
            <th onClick={() => sorting("VALUE")}>
              VALUE <i class="bi bi-caret-down-fill"></i>
            </th>
            <th onClick={() => sorting("ALLOCATION")}>
              ALLOCATION <i class="bi bi-caret-down-fill"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.ASSETS.toLowerCase().includes(
                  searchTerm.toLocaleLowerCase()
                ) ||
                val.BALANCE.toLowerCase().includes(
                  searchTerm.toLocaleLowerCase()
                ) ||
                val.FIELD4.toLowerCase().includes(
                  searchTerm.toLocaleLowerCase()
                ) ||
                val.CHANGE.toLowerCase().includes(
                  searchTerm.toLocaleLowerCase()
                ) ||
                val.VALUE.toLowerCase().includes(
                  searchTerm.toLocaleLowerCase()
                ) ||
                val.ALLOCATION.toLowerCase().includes(
                  searchTerm.toLocaleLowerCase()
                )
              ) {
                return val;
              }
            })
            .map((d) => (
              <tr>
                <td scope="row">
                  <img src={star} alt="" />
                </td>
                <td>
                  <div className="d-flex">
                    <div className="px-2">
                      <img src={d.ICON} alt="" />
                    </div>
                    <div>
                      <b>{d.ASSETS}</b>
                      <br />
                      <small>{d.NAME}</small>
                    </div>
                  </div>
                </td>
                <td>{d.BALANCE}</td>
                <td>${d.FIELD4}</td>
                <td className="fwbold">
                  <img src={up} />
                  {d.CHANGE}%
                </td>
                <td>${d.VALUE}</td>
                <td>{d.ALLOCATION}%</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortTable;
