import React, { useState, useEffect} from 'react';
import './App.css';
import Lista from './Lista';

function App() {

  const [lista, setLista] = useState([])
  const [searchTerm, setSearchTerm] = useState("");




  useEffect(()=>{
    loadData()
  },[]) 

  const handleChange = (e) => {
    const filtro = lista.filter(item => {
      return (item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
      item.body.toLowerCase().includes(e.target.value.toLowerCase())) 
    });
    console.log("test: ", filtro);
    setSearchTerm(e.target.value);
    setLista(filtro);
    console.log(e.target.value)
  }


  const loadData = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const dati = await response.json()
    setLista(dati)
    console.log(dati)
  }


  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
  
      <Lista oggetto={lista}/>
    
    </div>
  );
}

export default App;
