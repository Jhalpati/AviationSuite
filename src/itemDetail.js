import React,{useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Advisory from './Advisory';


function Item({match}) {

  const [items, setItems, item] = useState([]);
  const APP_ID = 'feaaeb2e';
  const APP_KEY= '36dd3313e18aceaf1eb36129b0c4efce';


  useEffect(() => {
    const fetchItems = async () => {
      const fetchItems = await fetch(`https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/airports/rest/v1/json/iata/${
        match.params.id
      }?appId=${APP_ID}&appKey=${APP_KEY}`)

    
  
      const items = await fetchItems.json();
      console.log(items.airports[0]);
      setItems(items.airports);
    }

  


  

    fetchItems();

    // fetchNews();
    
  
  },[]);




  return (
    <div className="airport-info">
        {/* <h1>Name: {items.name}</h1>
        <h2>City:{items.city}, {items.countryName}</h2>
        <h3>Local time:{items.localTime}</h3>
        <Link to={`/news/${items.name}`}>News about: {items.name}</Link> */}
 



        {items.map(data => (
          <div key={data.fs}>
            <h1>Name: {data.name}</h1>
              <h2>City:{data.city}, {data.countryName}</h2>
            <h3>Local time:{data.localTime}</h3>
             <h2><Link to={`/news/${data.name}`}>News about: {data.name}</Link></h2>
             <h2><Link to={`/Advisory/${data.countryCode}/`} target="_blank">Covid-19 advisory for {data.countryName}</Link></h2>
             <h2><Link to={`/CovidDetail/${data.countryName}/`} >Covid-19 stats of {data.countryName}</Link></h2>
          
             
          </div>
        ))}





 




        
          



  
    </div>
  );
}

export default Item;
