import { useState } from 'react';
import './App.css';
import Home from './Homepage/Home';
import Watchlist from './Watchlist/Watchlist';
import { Routes, Route } from 'react-router-dom';


function App() {

  const [arr, setArr] = useState([])

  const buttonHandler = (i) => {
    const addarr = JSON.parse(localStorage.getItem("watchArr")) || []
    addarr.push(arr[i])
    localStorage.setItem("watchArr", JSON.stringify(addarr));

  }

  return (
    <Routes>
      <Route path='' element={<Home setArr={setArr}
        arr={arr}
        add={buttonHandler} />}></Route>
      <Route path='watchlist' element={<Watchlist

      />}></Route>
    </Routes>
  );
}

export default App;
