import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function App() {


return (
  <div 
    className='App'>

    <div className="table-and-tasks">
      
      <div className="time-table">
        TODAY 
      </div>

      <div className="task-list">
        TO-DO
        <Fab color="white" aria-label="add">
          <AddIcon />
        </Fab>
      </div>

    </div>

  </div>
  );

}

