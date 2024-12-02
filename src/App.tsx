import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Terminal from './components/Terminal';
import LandingPage from './components/LandingPage';
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';
import Documentation from './components/page/Documentation';
import TerminalPage from './components/page/TerminalPage';
import AboutMe from './components/page/AboutMe';
import Tech from './components/page/Tech';
import Projects from './components/page/Projects';
import ProtectedRoute from './hooks/ProtectedRoute';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Nav />}
      <Routes>
        <Route path="/" element={<Terminal />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/terminal" element={<TerminalPage />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
      {location.pathname !== "/" && <Footer />}
    </>
  );
};

export default App;
