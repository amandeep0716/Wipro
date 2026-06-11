import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react'

function Body(){
    // SetState Hook
    // First attribute is a variable
    // Second is a Set function
    // const [title,setTitle] = useState(" ")
    const[temptitle,setTempTitle] = useState(" ")
    // const [task,setTask] = useState(" ")
    const [tempTask,setTempTask] = useState(" ")
    const[todoMap,setTodoMap] = useState(new Map());
    const[todo,setTodo]=useState({
        title:"",
        task:""
    })
    
    const handleClick=(event)=>{
        const mydata = {
            title:temptitle,
            task:tempTask
            }
        let myMap = new Map();// one object -> latest
        myMap = todoMap;
        myMap.set(todoMap.size+1,mydata)
      
        setTodoMap(myMap) // complete object with the new one
       
        setTempTask(" ")
        setTempTitle(" ")
        event.preventDefault();
        
        
    }
   
    const handleChange=(event)=>{
        if(event.target.id === "title"){
            setTempTitle(event.target.value)
        }
        else{
            setTempTask(event.target.value)
        }      
        event.preventDefault();
    }
    const name = "Todo List"
    return(
        <div>
            <h1>Welcome {name}</h1>
              
            <TextField id="title" label="Title" variant="standard" value = {temptitle} onChange={handleChange}  />
            <TextField id="task" label="Task" variant="standard" value={tempTask} onChange={handleChange} />
            <Button variant="outlined" onClick = {handleClick}>Submit</Button>
            {[...todoMap.entries()].map(([key,value])=>(
                <div>
                    <p>{value.title}</p>
                    <p>{value.task}</p>
                </div>
            ))}
                      
        </div>
    )
}
export default Body;