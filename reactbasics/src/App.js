import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import NewComponent from "./components/NewComponent";
import NewClassComponent from "./components/NewClassComponent";
import PropComponent from "./components/PropComponent"; // Corrected import path

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/new">New component</Link></li>
            <li><Link to="/class">New class component</Link></li>
            <li><Link to="/props">New Props component</Link></li>
          </ul>
        </nav>
        <h1>Hello Isocrates</h1>
      </div>
      <Routes>
        <Route path="/new" element={<NewComponent />} />
        <Route path="/class" element={<NewClassComponent />} />
        <Route path="/props" element={<PropComponent />} />
        <Route path="/" element={<Navigate to="/new" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
