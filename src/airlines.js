import React,{useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';



function Airlines() {


  useEffect(() => {
      fetchItems();
  },[]);

  const APP_ID = 'feaaeb2e';
  const APP_KEY= '36dd3313e18aceaf1eb36129b0c4efce';

  const [data, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('BA');
  const [loading, setLoading] = useState(true);



 
  useEffect(() =>{
    fetchItems();
  }, [query])
  

  const fetchItems = async () => {
    const response = await fetch(
//`https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/delayindex/rest/v1/json/region/Asia?appId=${APP_ID}&appKey=${APP_KEY}&classification=5&score=3`
      `https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/airlines/rest/v1/json/iata/${query}?appId=${APP_ID}&appKey=${APP_KEY}` );
   
    // componentDidMount(){
    //   axios.get
    // }

  const data = await response.json();
     console.log(data.airlines);
    setItems(data.airlines);
    setLoading(false);
  }; 

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
          <input className="search-bar" type="text" value={search} placeholder="Enter an airline code Ex: BA" onChange={updateSearch}/>
          <button className="search-button" type="submit" >
          
            
            Search</button>
          </form>
 
            {data.map(data => (
              <h2 key={data.fs}>
                  <Link to={`/airlines/${data.fs}`}>{data.iata}: {data.name}</Link>
                  
              </h2 >              
              
            ))} 
          

    </div>
 )
}

export default Airlines;
