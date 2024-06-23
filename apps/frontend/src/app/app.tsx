import HomePage from './pages/home/Home.page';
import NotFoundPage from './pages/not-found/NotFound.page';
import './styles/global.scss';
import './wdyr';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
