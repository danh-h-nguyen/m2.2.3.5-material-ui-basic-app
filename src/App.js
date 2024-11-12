import React from "react";
import "./App.css";
import SearchAppBar from "./components/SearchAppBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  // Users can see 5 job postings on their screen with the job title, skills required and description. (ok)
  // Users can see a responsive navigation bar. (ok)
  // Users can browse the website on both desktop and mobile devices. (ok)
  // Users can see (non-functioning) pagination buttons. (ok)
  // Users can see no more than 4 skills for each job. (ok)
  // Users can use the pagination buttons and see different pages. (ok)
  // Users can see a dark theme.
  return (
    <div>
      <SearchAppBar></SearchAppBar>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
