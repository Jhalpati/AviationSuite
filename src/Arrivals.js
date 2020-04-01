import React,{useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';




function Arrivals() {


  useEffect(() => {
      fetchItems();
  },[]);

  const APP_ID = 'feaaeb2e';
  const APP_KEY= '36dd3313e18aceaf1eb36129b0c4efce';

  const [data, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('lhr');

 
  useEffect(() =>{
    fetchItems();
  }, [query])
  
  //https://aboutreact.com/react-native-get-current-date-time/
  var date = new Date().getDate(); //Current Date
  var month = new Date().getMonth() + 1; //Current Month
  var year = new Date().getFullYear();
  var hours = new Date().getHours(); //Current Hours



  const fetchItems = async () => {
    const response = await fetch(
//`https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/delayindex/rest/v1/json/region/Asia?appId=${APP_ID}&appKey=${APP_KEY}&classification=5&score=3`
      `https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/${query}/arr/${year}/${month}/${date}/${hours}?appId=544b084a&appKey=5f2e41dee933f04c8eb95d74ef52b0e9&utc=false&numHours=1&maxFlights=10` );
   
//Remember to change the date

    
  const data = await response.json();
    console.log(data);
    setItems(data.flightStatuses);
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
    <div className="arrivals">

        <form  onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} placeholder="Enter an IATA code Ex: LHR" onChange={updateSearch}/>
          <button className="search-button" type="submit">Search</button>
          </form>
          <h1>Latest arrivals at {query}</h1>

          


{/* <Link to={`/news/${data.carrierFsCode+data.flightNumber}`}> */}

          

    </div>
 )
}

export default Arrivals;
