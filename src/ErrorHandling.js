import React,{useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Advisory from './Advisory';



function ER() {




  const APP_ID = 'feaaeb2e';
  const APP_KEY= '36dd3313e18aceaf1eb36129b0c4efce';

  const [data, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('UK');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

 
  useEffect(() =>{
    const fetchItems = async () => {
        setLoading(true);
        setError(false);


        try {

      const response = await fetch(
  //`https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/delayindex/rest/v1/json/region/Asia?appId=${APP_ID}&appKey=${APP_KEY}&classification=5&score=3`
  `https://coronavirus-19-api.herokuapp.com/countries/${query}`);

  
    const data = await response.json();
       console.log(data);
      setItems(data);

    } catch (error) {
        setError(true);
      }
      setLoading(false);

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
          {
        error && <div style={{color: `red`}}>some error occurred, while fetching api</div>
      }

          </form>

          {
      loading && <div style={{color: `green`}}><h1>Fetching Covid-19 details for "<strong>{query}</strong>"</h1></div>
    }


        

          

        <h1>Name: {data.country}</h1>
        <h2>Cases:{data.cases}</h2>
        <h2>Cases today:{data.todayCases}</h2>
        <h2>Deaths:{data.deaths}</h2>
        <h2>Deaths today:{data.todayDeaths}</h2>
        <h2>Recovered:{data.recovered}</h2>
        <h2>Active:{data.active}</h2>
        <h2>Critical:{data.critical}</h2>
        <h2>First case:{data.firstCase}</h2>

        <p><b>Information from www.worldometers.info</b></p>

     




              
    </div>
    
 )
}

export default ER;
