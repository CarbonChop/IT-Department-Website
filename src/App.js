import React from 'react';
import { Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import FacultyPage from './pages/FacultyPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
      <BrowserRouter basename="/it-department-website"></BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/faculty" element={<FacultyPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </>
  );
}

export default App;
