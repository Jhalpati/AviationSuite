import React,{useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Advisory from './Advisory';



function Airports() {




  const APP_ID = 'feaaeb2e';
  const APP_KEY= '36dd3313e18aceaf1eb36129b0c4efce';

  const [data, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('lhr');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

 
  useEffect(() =>{
    const fetchItems = async () => {
      setLoading(true);
      setError(false);

    
      try{
      const response = await fetch(
  //`https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/delayindex/rest/v1/json/region/Asia?appId=${APP_ID}&appKey=${APP_KEY}&classification=5&score=3`
        `https://yacdn.org/proxy/https://api.flightstats.com/flex/airports/rest/v1/json/iata/${query}?appId=${APP_ID}&appKey=${APP_KEY}`);
        

      
  
    const data = await response.json();
       console.log(data.airports);
      setItems(data.airports);
    
    }

    catch (error) {
      setError(true);
    }
    setLoading(false);
  
  }

      
    
  
    fetchItems();
  }, [query])

  



  const updateSearch = e => {
    setSearch(e.target.value);
 
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }



  return (
    <div>

        <form  onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} placeholder="Enter IATA code Ex: LHR" onChange={updateSearch}/>
          <button className="search-button" type="submit">Search</button>
          

          {/* {
        error && <div style={{color: `red`}}><h1>An error occurred, while fetching api</h1></div>
        }  */}

      </form>

        {        error && <div style={{color: `red`}}><h1>An error occurred, while fetching API</h1></div>
}
      
          {
      loading && <div style={{color: `green`}}><h1>Fetching Covid-19 details of"<strong>{query}</strong>"</h1></div>
          }



          
            {data.map(data => (
              <h1 key={data.fs}>
                  <Link to={`/Airports/${data.fs}`}>{data.iata}: {data.name}, {data.countryName}</Link>
              </h1>              
            ))} 



              
    </div>
    
 )
}

export default Airports;
