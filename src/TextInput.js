import "./TextInput.css";
import { useState } from "react";
import Button from '@mui/material/Button';


function TextInput(props) {
  const [text, setText] = useState("");

  function create() {
    props.createTask(text);
    setText("");
  }
  function onKeyPress(e) {
    if (e.key === "Enter") {
      create();
    }
  }

  return (
    <div>
      <input
        className="text-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={onKeyPress}
      />
      <Button variant="contained" size="large" onClick={create}>
        Create Task
      </Button>
    </div>
  );
}

export default TextInput;