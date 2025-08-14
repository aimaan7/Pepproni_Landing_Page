import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AboutUs from './AboutUs';
import TermsPage from './TermsPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
