import React,{useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';


function News({ match }) {

  useEffect(() => {
    fetchNews();
    console.log(match);



  },[]);

  console.log(match);
  const [item, setItem] = useState([]);
  const APP_ID = '544b084a';
  const APP_KEY= '5f2e41dee933f04c8eb95d74ef52b0e9';
  



 
    const fetchNews = async () => {
      const fetchNews = await fetch(
        `http://newsapi.org/v2/everything?q=${match.params.id}&apiKey=6e257f34188c4b608d5558758b35bf2f`);
  
        const item = await fetchNews.json();
        console.log(item.articles[0],[1]);
        setItem(item.articles[0],[1]);

        
        
    }
    
  






  

  
  




  return (
    <div>
      <h1>{item.title}</h1>
      <h2>{item.author}</h2>
      <p>{item.description}</p>
      
      <img src={item.urlToImage}></img>

        
    </div>
  );
}

export default News;
