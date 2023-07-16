import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Auth from './pages/Auth';
import CreateRecipe from './pages/CreateRecipe';
import SavedRecipe from './pages/SavedRecipe';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/auth" element={<Auth/>} />
          <Route path="/create-recipe" element={<CreateRecipe/>} />
          <Route path="/saved-recipe" element={<SavedRecipe/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
