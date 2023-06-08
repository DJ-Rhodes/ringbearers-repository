import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MovieDashboard from './pages/MovieDashboard';
import Layout from './components/Layout/Layout';
import CharacterDashboard from "./pages/CharacterDashboard.jsx";

const App = () => {
  return <div id="dashboard">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard/:movieName" element={<MovieDashboard />} />
          <Route path="/character/:characterName" element={<CharacterDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>;
};

export default App;