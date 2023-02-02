import { useState } from "react";



function App() {

  // todo
  const [toDo, setToDo] = useState("")
  // todo list
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {event.preventDefault(); 
    if (toDo ===""){
      return;
    };
    setToDo("");
    setToDos((currentArray)=> [toDo , ...currentArray]);
  };

  return (
    <div>
      <h1>My To Do list : {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input  onChange={onChange} value={toDo}  type="text" placeholder="Write your to do" />
        
        <button>Add To Do List</button>


      </form>
      <hr/>
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>

    </div>

    
  );
}
// toDos.map((item,index) => <li key={index}>{item}</li>)
// toDos라는 array를 가져와 map의 첫번째 argument로 변형한 후에 retrun해준다.
// 반대로 나오게 하고 싶으면 reverse()

export default App;
