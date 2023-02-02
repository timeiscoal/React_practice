import { useState , useEffect} from "react";

// 컨포넌트가 사라지거나 없어 질때의 반응 또한 만들 수 있다. return () => 
function Hello(){
  function byFn(){
    console.log("bye :(")
  }

  function effectFn(){
    console.log("Create :)");
    return byFn
  }
  useEffect(effectFn,[])
  return <h1>Hello</h1>
}

function App() {
  const [showing,setShowing] = useState(false);
  const onClick=()=>{
    setShowing((prev)=>!prev)
  }

  return (
    <div>

    <h1>Hello World</h1>

    {showing ? <Hello /> : null}  
    <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    
    </div>

    
  );
}

export default App;
