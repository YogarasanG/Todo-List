import React, { useState } from "react";
import { FaTrash,FaPlus,FaEdit} from 'react-icons/fa';
import Key from './Key';
import "./todoList.css";

function TodoList() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
 
  const handleClick = () => {
    if (value.length !== 0) {
      const newList = [...list, value];
      setList(newList);
    } else {
      alert("Please Enter Your Task");
    }
    setValue("");
  };

  const handleDelete = () => {
    setList([]);
    setValue("");
  };

  const handleDelTask = (index) => {
    const delList = [...list];
    delList.splice(index, 1);
    setList(delList);
  };

  const handleEdit = (index,newText)=>{
    const updatedTasks = [...list];
    updatedTasks[index] = newText;
    setList(updatedTasks);
  }

  return (
    <div className="listing">
     
      <div className="plans">
        <h3 className="create">Create Your List : )</h3>
        <input
          type="text"
          required
          placeholder="Enter your Task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") handleClick(); }} 
        />
        <button onClick={() => handleClick()}> <FaPlus size={15} color="red"/> Add</button>
        <button onClick={handleDelete}><FaTrash size={15} color="red"/> Clear All Task</button>
      </div>
      <div className="list">
        {list.map((task,index) => {
          return (
            <div className="list" key={index}>         
              {task}
              {/* <div className="btns"> */}
              <button onClick={()=>handleEdit(index, prompt('Edit Task', task))}><FaEdit size={20} color="red"/> Edit</button>
              <button onClick={() => handleDelTask(index)}><FaTrash size={15} color="red"/> Delete</button>
              {/* </div> */}
            </div>
          );
        })}
      </div> <hr />
      <div className="quote">
        <h4>
          "Embrace the power of a to-do list; it transforms chaos into clarity,
          dreams into plans, and intentions into accomplishments, guiding you on
          the path to success with purposeful direction."
        </h4>
      </div>
      <Key/>
    </div>
  );
}

export default TodoList;
