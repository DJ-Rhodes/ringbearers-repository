import {HashRouter, Route, Routes} from 'react-router-dom'
import MovieDashboard from './pages/MovieDashboard';
import Layout from './components/Layout/Layout';
import CharacterDashboard from "./pages/CharacterDashboard.jsx";
import BoardPage from "./pages/Board/Board.jsx";

const App = () => {
  return <div id="dashboard">
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<MovieDashboard />} />
          <Route path="/dashboard/:movieName" element={<MovieDashboard />} />
          <Route path="/character/" element={<CharacterDashboard />} />
          <Route path="/character/:characterName" element={<CharacterDashboard />} />
          <Route path="board" element={<BoardPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </div>;
};

export default App;