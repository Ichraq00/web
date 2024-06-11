import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
  useNavigate,
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Books1 from "./components/Books/Books1";
import MyLibrary from "./components/Library/MyLibrary";
import ContactHours from "./components/Contact/ContactHours";
import BookDetails0 from './components/Books/BookDetails0';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/books" element={<Books1 />} />
          <Route exact path="/my-library" element={<MyLibrary />} />
          <Route exact path="/contacthours" element={<ContactHours />} />
          <Router>
            <div className="App">
                <Switch>
                    <Route path="/books" component={Books} />
                    <Route path="/book/:bookId" component={BookDetails0} />
                </Switch>
            </div>
        </Router>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
