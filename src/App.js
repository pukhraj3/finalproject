import "./App.css";
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "uuid/v4";
import Fab from '@mui/material/Fab'; 
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import Checkbox from '@mui/material/Checkbox';
import TextInput from "./TextInput";
// import "./TextInput.css";
// import OppositeContentTimeline from "./Timeline";
import { Input, TextField } from "@mui/material";
import { ResetTvRounded } from "@mui/icons-material";




const itemsFromBackend = [
  { id: uuid(), content: "Water Plants" },
  { id: uuid(), content: "Walk Dog" },
  { id: uuid(), content: "HW5" },
  { id: uuid(), content: "Charge Crystals" },
  { id: uuid(), content: "Eat Dinner" }
];

const columnsFromBackend = {
  [uuid()]: {
    items: itemsFromBackend
  },
  [uuid()]: {
    items: []
  }
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

function App() {
  const[popUp, setPopUp] = useState(false)
  // const [task, setTask] = useState([]);

  function click(){
    setPopUp(true)
  }
  
  function close(){
    setPopUp(false)
  }

  function create(text) {
    newTask(text);
  }
  
  function newTask(text) {
  setPopUp(false)   
    if (!text()) return;
      const newTask1 = {
        id: uuid(), content: text,  
      };
    create(newTask1);
        
    function TextInput(props) {
    const [text, setText] = useState("");
    }
  
    function onKeyPress(e) {
      if (e.key === "Enter") {
        create();
      }
    }
  }


  // draggable component
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%", }}>
        {/* title headers */}
        <div className="timetable-header"> SCHEDULE </div>
        <div className="task-header"> TO-DO
        {/* pop-up screen button */}
          <Fab color="white" aria-label="add" onClick={click}>
            <AddIcon />
          </Fab>
        </div>
        {/* pop-up code with background blur, text input, close button, new task button */}
        {popUp===true &&
        <div className="popUp">             
          <div className="task-popUp"> 
            <div className="popUp-header">
              {/* close pop-up */}
              <IconButton aria-label="add" onClick={close}>
                  <CloseIcon />
              </IconButton>
            </div>
            {/* text field for new task input */}
            <div className="popUp-textfield">
              <TextField id="outlined-basic" label="New Task" variant="outlined"> 
                <TextInput onClick={()=>create()}/>
              </TextField>
              {/* button to create new task */}
              <IconButton aria-label="add" onClick={()=>create()}>
                <CheckIcon />
              </IconButton>
            </div>
          </div>
        </div>}
          
      {/* more draggable code - drag & drop interaction */}
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
              key={columnId}
            >
              <h2>{column.name}</h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "#B2C3A7"
                            : "#90A583",
                          padding: 20,
                          width: 680,
                          minHeight: 550,
                          borderRadius: 40
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      padding: 20,
                                      margin: "30px 50px 10px 50px",
                                      minHeight: "50px",
                                      backgroundColor: snapshot.isDragging
                                        ? "#c89f9c"
                                        : "beige",
                                      color: "#1B2F33",
                                      fontWeight: "bold",
                                      ...provided.draggableProps.style
                                    }}
                                  >
                                    {item.content}
                                    <Checkbox/>
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default App;
