import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header"> Swat&#39;s React CRUD App</h2>
       
        <Routes>
          <Route exact path="/Create" element={<Create />} />
          <Route exact path="/Read" element={<Read />} />
          <Route path="/Update" element={<Update />} />
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
