import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import "./App.css"
import { useState,useEffect} from 'react';
import axios from 'axios';
import Home from './components/Home';

import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import React from 'react';




export const AppContext = React.createContext({})

function App() {

const [tyrs, setTyrs] = useState([])



useEffect (()=>{
  async function axiosData(){
    const tyrsData = await axios.get('https://641c550b1a68dc9e4606b90d.mockapi.io/hell')
   
    setTyrs(tyrsData.data)
   
  }
  axiosData();
},[])


  return (
    <div>

      <Router>
        <Header/>
          <Routes>

            
          
          <Route path='/'
              element={
                <Home
                  item={tyrs}
                />
              }
            />
           

        </Routes>
      </Router> 

      <Footer/>
    </div>
  );
}

export default App;


