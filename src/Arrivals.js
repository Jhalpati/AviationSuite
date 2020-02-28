import React,{useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';



function Arrivals() {


  useEffect(() => {
      fetchItems();
  },[]);

  const APP_ID = '544b084a';
  const APP_KEY= '5f2e41dee933f04c8eb95d74ef52b0e9';

  const [data, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('LHR');

 
  useEffect(() =>{
    fetchItems();
  }, [query])
  

  const fetchItems = async () => {
    const response = await fetch(
//`https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/delayindex/rest/v1/json/region/Asia?appId=${APP_ID}&appKey=${APP_KEY}&classification=5&score=3`
      `https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/${query}/arr/2020/2/28/17?appId=544b084a&appKey=5f2e41dee933f04c8eb95d74ef52b0e9&utc=false&numHours=1&maxFlights=10` );
   
//Remember to change the date

  const data = await response.json();
    console.log(data.flightStatuses);
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
    <div>

        <form  onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} placeholder="Enter an IATA code Ex: LHR" onChange={updateSearch}/>
          <button className="search-button" type="submit">Search</button>
          </form>
          
            {data.map(data => (
              <h1 key={data.flightId}>
                <Link to={`/airlines/${data.flightNumber}`}></Link> 
                {data.carrierFsCode}{data.flightNumber} - {data.departureAirportFsCode}: {data.arrivalAirportFsCode} | Aircraft type: {data.flightEquipment.actualEquipmentIataCode }
              </h1>              
              
            ))} 

{/* <Link to={`/news/${data.carrierFsCode+data.flightNumber}`}> */}

          

    </div>
 )
}

export default Arrivals;
