import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Stats from './page/Stats';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </BrowserRouter>
  );
}
