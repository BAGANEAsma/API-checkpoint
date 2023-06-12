
import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios'
function App() {
  const[useList,setList]=useState()
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(response=>setList(response.data))
  })
  return (
    <div className="App">
      {useList && useList.map(e=><h1>{e.name}</h1>)}
    </div>
  );
}

export default App;
