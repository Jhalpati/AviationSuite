import React from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';






class UI extends React.Component {
    
    render() {
      return (
        <div>
          <div>
            <form>
                <TextField id="outlined-basic" label="Origin" variant="outlined"></TextField>
                <span>&nbsp;&nbsp;</span>
                <TextField id="outlined-basic" label="Destination" variant="outlined"></TextField>
            </form>
              </div>
              <span>&nbsp;&nbsp;</span>


            <div>
            <Button variant="contained" color="primary" >
            Search
            </Button>
            </div>
          
        </div>
      );
    }
  }

  
  
  export default UI;

