import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField'

export default function App() {
  
  const[popUp, setPopUp] = useState(false)
  function click(){
    setPopUp(true)
  }
  return (
    <div 
      className='App'>

      <div className="table-and-tasks">
        
        <div className="time-table">
          TODAY 
        </div>

        <div className="task-list">
          TO-DO
          <Fab color="white" aria-label="add" onClick={click}>
            <AddIcon />
          </Fab>
        </div>

        {popUp===true &&
        <div className="popUp"> 
          <div className="task-popUp"> 
              <TextField required id="outlined-required" label="Required" defaultValue="New Task"
              />
          </div>
        </div>}

      </div>

    </div>
    );
  }

{/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}

  
// // component call app
// function App() {
//   const height = use100vh();
  
//   function createCard(task) {
//     const newCard = {
//       task: task,

//     }
//   }
// }