import { BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import Root from "./pages/root"
import Home from "./pages/home"
import Profile from "./pages/profile";
import Journal from "./pages/journal";
import Reflection from "./pages/reflection";
import './App.css'

function App() {

  return (
    <>
      <Routes>
            <Route
              path=''
              element={<Root />}
            ></Route>
            <Route
              path='/home'
              element={<Home />}
            ></Route>
            <Route
              path='/profile'
              element={<Profile />}
            ></Route>
            <Route
              path='/reflection'
              element={<Reflection />}
            ></Route>
            <Route
              path='/journal'
              element={<Journal />}
            ></Route>
        </Routes>
    </>
  )
}

export default App
