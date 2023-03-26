import {Box, Typograpy,Modal, TextField, Button} from "@mui/material";
import {useState} from "react";
import CardList from "./CardList";

function Todo() {
    const[todo, setTodo] = useState([]);

    function handleAdd(){
        setTodo([...todo, "new task"])
    }
  return (
    <div>
        <div
        style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }}
        >
        <div>
            <h1 style={{color: "#fefffb", fontSize: "60px"}}>Incoming</h1>
        </div>
        <div
        style={{
            padding: "20px 30px",
            backgroundColor: "#b0a3f5",
            fontSize: "50px",
            borderRadius: "10px",
            color: "white",
            fontWeight: "bold", 
        }}
        >
        {todo.length}
        </div>
        </div>
        <div
        style={{
             padding: "20px",
            background: "#fefffe",
            width: "500px",
            borderRadius: "10px",
            margin: "20px 0px",
            fontSize: "25px",
            color: "#7b7b7b"
        }}
        onClick={handleAdd}
        >
        + Add New Tasks
        </div>
        {todo.map((item)=>{
            return <CardList task={item}/>
        })}
    </div>
  )
}

const addNewTaskBarStyle = {
    padding: "20px",
    background: "#fefffe",
    width:{xs:"300px", md:"50px"},
    borderRadius:"10px",
    margin: "20px 0px",
    fontSize:"25px",
    color: "#7b7b7b",
    display: "flex",
    alignItems: "center",
    justifyContent:"center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
};

const wwrapperTodoListStyle = {
    display:"flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
};

const wrapperHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems:"center",
};

export default Todo