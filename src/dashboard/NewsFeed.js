import React, { useState } from "react";
import axios from "axios";
function Newsfeed() {
  const [news, setNews] = useState([]);

  const fetchNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines/?category=business&apiKey=cd2832b96ac6446fb725bc5a0630c4dc"
      )
      .then((response) => {
        console.log(response);
        setNews(response.data.articles);
      });
  };
  fetchNews();
  return (
    <>
      <div className="container">
        <div className="row">
          {news.map((value, index) => {
            return (
              <div key={index} className="col-sm-4">
                <div className="card">
                  <img
                    src={value.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Newsfeed;
