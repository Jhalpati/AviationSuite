import React,{useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Advisory from './Advisory';


function CovidDetail({match}) {

  const [items, setItems, item] = useState([]);
  const APP_ID = 'feaaeb2e';
  const APP_KEY= '36dd3313e18aceaf1eb36129b0c4efce';


  useEffect(() => {
    const fetchItems = async () => {
      const fetchItems = await fetch(`https://coronavirus-19-api.herokuapp.com/countries/${match.params.countryName}`)

    
  
      const items = await fetchItems.json();
      console.log(items);
      setItems(items);
    }

  


  

    fetchItems();

    // fetchNews();
    
  
  },[]);




  return (
    <div className="airport-info">
        <h1>Name: {items.country}</h1>
        <h2>Cases:{items.cases}</h2>
        <h2>Cases today:{items.todayCases}</h2>
        <h2>Deaths:{items.deaths}</h2>
        <h2>Deaths today:{items.todayDeaths}</h2>
        <h2>Recovered:{items.recovered}</h2>
        <h2>Active:{items.active}</h2>
        <h2>Critical:{items.critical}</h2>
        <h2>First case:{items.firstCase}</h2>

        <p><b>Information from www.worldometers.info</b></p>


 



        {/* {items.map(data => (
          <div key={data.country}>

            <h2>Cases:{data.cases}</h2>
            <h3>Cases today:{data.todayCases}</h3>

          
             
          </div>
        ))} */}





 




        
          



  
    </div>
  );
}

export default CovidDetail;
