import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CreatedUser from "./components/CreatedUser";
import EditUser from "./components/EditUser";
import ListUser from "./components/ListUser";
import "./App.css";

function App() {
  return <div className="app">
    <h4>yooooo</h4>
    
    <BrowserRouter>
    <nav>
      <ul >
      <li>
        <Link to="/">List Users</Link>
      </li>
      <li>
        <Link to="user/create">Create Users</Link>
      </li>
    </ul> 
    </nav>
    <Routes>
      <Route index element={<ListUser />}/>
      <Route path="user/create"  element={<CreatedUser />}/>
      <Route path="user/:id/edit"  element={<EditUser />}/>
      
    </Routes>
   
    </BrowserRouter>
  </div>;
}

export default App;
