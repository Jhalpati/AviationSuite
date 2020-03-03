import React,{useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';



function Shop() {




  const APP_ID = '544b084a';
  const APP_KEY= '5f2e41dee933f04c8eb95d74ef52b0e9';

  const [data, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('GB');

 
  useEffect(() =>{
    const fetchItems = async () => {
      const response = await fetch(
  //`https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/delayindex/rest/v1/json/region/Asia?appId=${APP_ID}&appKey=${APP_KEY}&classification=5&score=3`
        `https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/airports/rest/v1/json/iata/${query}?appId=${APP_ID}&appKey=${APP_KEY}`);
        
      
    
  
    const data = await response.json();
       console.log(data.airports);
      setItems(data.airports);


      
    };
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
          </form>

          
            {data.map(data => (
              <h1 key={data.fs}>
                  <Link to={`/shop/${data.fs}`}>{data.iata}: {data.name}, {data.countryName}</Link>
              </h1>              
            ))} 


          

    </div>
 )
}

export default Shop;
