import React,{useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Advisory from './Advisory';
import {Card, CssBaseline, Container, CardContent, Typography, Grid, makeStyles} from '@material-ui/core';
import styles from './CovidDetails.module.css'; 

const useStyles = makeStyles({
  root: {
    minWidth: 100,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

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


  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="airport-info">


        

        


 



        {/* {items.map(data => (
          <div key={data.country}>

            <h2>Cases:{data.cases}</h2>
            <h3>Cases today:{data.todayCases}</h3>

          
             
          </div>
        ))} */}





 




      <div className={styles.container}>
      <Card className={classes.root}>
      <CardContent>
        <Typography variant="h1" >Name: {items.country}</Typography>
        <Typography variant="h3">Cases:{items.cases}</Typography>
        <Typography variant="h3">Cases today:{items.todayCases}</Typography>
        <Typography variant="h3">Deaths:{items.deaths}</Typography>
        <Typography variant="h3">Deaths today:{items.todayDeaths}</Typography>
        <Typography variant="h3">Recovered:{items.recovered}</Typography>
        <Typography variant="h3">Active:{items.active}</Typography>
        <Typography variant="h3">Critical:{items.Critical}</Typography>
        <Typography variant="h3">First Case:{items.firstCase}</Typography>
        <Typography variant="h5">Information from www.worldometers.info</Typography>

        </CardContent>

    </Card>
      
      </div>
        
          



  
    </div>

  );
}

export default CovidDetail;
