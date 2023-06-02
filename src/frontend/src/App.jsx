import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MovieDashboard from './pages/MovieDashboard';
import Layout from './components/Layout/Layout';

const App = () => {
  return <div id="dashboard">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard/:movieName" element={<MovieDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>;
};

export default App;