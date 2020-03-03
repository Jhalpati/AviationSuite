import React,{useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';


function Item({match}) {

  const [items, setItems, item] = useState([]);
  const APP_ID = '544b084a';
  const APP_KEY= '5f2e41dee933f04c8eb95d74ef52b0e9';


  useEffect(() => {
    const fetchItems = async () => {
      const fetchItems = await fetch(`https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/airports/rest/v1/json/iata/${
        match.params.id
      }?appId=${APP_ID}&appKey=${APP_KEY}`)

      
  
      const items = await fetchItems.json();
      console.log(items.airports[0]);
      setItems(items.airports);
  
  
    };



  

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
          </div>
        ))}





 




        
        {/* {items.map(item => (
              <h1 key={item.name}>
                  <Link to={`/news/${item.name}`}>Link</Link>
              </h1>              
            ))}  */}
          



  
    </div>
  );
}

export default Item;
