// Importing required modules, components & files
import React, { useState, useEffect } from "react";
import style from "./news.module.css";
import { Link } from "react-router-dom";

// News funtion starts here
function News({ match }) {
  // useEffect hook is used for state management
  useEffect(() => {
    fetchNews();
  }, []);

  const [item, setItem] = useState([]);

  const fetchNews = async () => {
    // fetch() is used to make a request to the API
    const fetchNews = await fetch(
      // Proxy was used to make this API call
      `https://yacdn.org/proxy/https://newsapi.org/v2/everything?q=${match.params.id}&apiKey=6e257f34188c4b608d5558758b35bf2f`
    );

    // Response received is stored as const item
    const item = await fetchNews.json();
    // Sets response as item.articles
    setItem(item.articles);
  };

  // return() allows data to be rendered
  return (
    <div className={style.news}>
      <h1>Latest headlines about {match.params.id}</h1>
      {/* An array was received in response, so a loop with map was created for each element of the array */}
      {item.map((data) => (
        <React.Fragment key={data.id}>
          <h2>
            {data.title} |{" "}
            <a target="_blank" href={data.url}>
              Read more
            </a>
          </h2>
          <img src={data.urlToImage} width="40%" />
          <br></br>
          <figcaption>
            <i>Photo by &copy; {data.source.name}</i>
          </figcaption>
        </React.Fragment>
      ))}
    </div>
  );
}
// News is exported to App.js
export default News;
