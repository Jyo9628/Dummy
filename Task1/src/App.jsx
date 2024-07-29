import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Counter  from './Counter'
import Display from './Display'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {


  return (
    <>
         <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Counter />}
                    />
                    <Route
                        exact
                        path="/Display"
                        element={<Display />}
                    />
                </Routes>
            </BrowserRouter>
        
    </>
  )
}

export default App
