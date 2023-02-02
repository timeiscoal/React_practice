import { useState , useEffect} from "react";

// useEffect  첫번째 argument는 한번만 실행되는 녀석을 넣어준다.
// useEffect 두번째 argument는 첫번째 argument가 실행되는 조건을 넣어준다 두 번째 argument에서 이벤트가 발생하면 첫번째 argument가 실행된다.. and &&

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const counting = () => setValue((counters)=>counters+1)
  const onChange= (event) =>{setKeyword(event.target.value)};
  console.log("restart");
  const iRunOnlyOnce = ()=>{
    console.log("only_one");
  }

  useEffect(iRunOnlyOnce, [])
  useEffect(() =>{
    if (keyword !== "" && keyword.length > 5)
    {console.log("Serch For" , keyword)
  }
    }
    , [keyword]
    )
  
  
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Serch Here!" />
      <h2>{counter}</h2>
      <button onClick={counting}>  click me</button> 

    </div>
  );
}

export default App;
