import React,{useState, useEffect} from 'react';
import style from './news.module.css';
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
        `https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?q=${match.params.id}&apiKey=6e257f34188c4b608d5558758b35bf2f`);
  
        const item = await fetchNews.json();
        console.log(item.articles);
        setItem(item.articles);
        // setItem(item.articles[0],[1],[2]);

        
        
    }
    
  






  

  
  




  return (
    <div className={style.news}>
      {/* <h1>{item.title}</h1>
      <h3>Author: {item.author} | Date published: {item.publishedAt}</h3>
    
      <p>{item.description}</p>
      <a target="_blank" href={item.url}></a>
      <a target="_blank" href={item.url}>Read more</a>
      
      <img src={item.urlToImage}  width="50%"></img> */}
            <h1>Latest headlines about {match.params.id}</h1>
      {item.map(data => (
        
    <React.Fragment>

      <h2 key={data.title}>{data.title} | <a target="_blank" href={data.url}>Read more</a>
      </h2>  
      <img src={data.urlToImage} width="30%"/>
      

      </React.Fragment>

              
              
               
            
              
              
        ))} 

      



        
    </div>

    
  );
}

export default News;
