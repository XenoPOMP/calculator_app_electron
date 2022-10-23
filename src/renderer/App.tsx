import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './assets/components/Layout/Layout';
import MainPage from './assets/components/pages/MainPage/MainPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </Router>
  );
}
