import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './assets/components/pages/MainPage/MainPage';
import Layout from './assets/components/Layout/Layout';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/settings'} element={<Layout title={'Settings'} />} />
      </Routes>
    </Router>
  );
}
