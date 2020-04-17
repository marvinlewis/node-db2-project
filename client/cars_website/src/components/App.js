import React, { useEffect, useState } from 'react';
import CarForm from './CarForm';
import CarList from './CarList';
import './App.css';
import axios from "axios";



function App() {

  const [ data, setData ] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/cars')
    .then(res => {
      console.log(res)
      setData(res.data.data);
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <div className="App">
      <h1> Car Information </h1>
      <CarForm setData={setData}/>
      <CarList cars={data}/>
    </div>
  );
}

export default App;
