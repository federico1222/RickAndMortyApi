import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form/Form";
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import Episodes from "./components/Episodes/Episodes";
import Card from "./components/Card/Card";


import "./App.css";
import React from "react";

function App() {
  return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/RickAndMortyApi" element={<Home />}></Route>
          <Route path="/Form" element={<Form />}></Route>
          <Route path="/SearchBar" element={<SearchBar />}></Route>
          <Route path="/AllEpisodes" element={<Episodes />}></Route>
          <Route path="/:id" element={<Card />}></Route>
        </Routes>
      </div>
  );
}

export default App;
