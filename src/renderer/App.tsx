import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './assets/components/Layout/Layout';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
      </Routes>
    </Router>
  );
}
