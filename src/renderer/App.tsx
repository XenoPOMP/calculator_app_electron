import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './assets/components/pages/MainPage/MainPage';

export default function App() {
  return (
    <Router>
      <MainPage />
    </Router>
  );
}
