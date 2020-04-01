import React, { Component } from 'react';
import axios from 'axios';

export default class Loader extends Component {
   constructor(props) {
      super(props);
      this.state = this.state = {name:'',company:'',
         loading: false
       }
      }
       componentDidMount() 
       {  
         axios.get(`https://jsonplaceholder.typicode.com/users/`)
           .then(response => {
             console.log(response.data);
             this.setState({
               
              
               name:response.data.name,
               company:response.data.company,
              //  blog: response.data.blog,
              //  avatar:response.data.avatar_url,
               loading: false
             });
           })
           .catch(error => {
             console.log(error);
           });
       }

   render()
   {
    let data;
    if (this.state.loading) {
      data = <img src={ require('./giphy.gif') } />
    } else {
      data = <div>
                <br/>
                 Name: {this.state.name}
                <br/>


            </div> 
    }
      return(
      <div>
            {data}
       </div>
      )
   }
}