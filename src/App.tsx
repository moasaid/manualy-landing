import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Index from './pages/Index';
import Tasks from './pages/Tasks';
import Onboarding from './pages/Onboarding';
import Home from './pages/Home';
import Settings from './pages/Settings';
import TaskCards from './components/TaskCards';

function App() {
  // Add smooth scrolling behavior
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/app" element={<Tasks />}>
          <Route index element={<Navigate to="/app/home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="tasks" element={<TaskCards />} />
          <Route path="manuals" element={<div>Manuals Page</div>} />
          <Route path="agent" element={<div>Agent Page</div>} />
          <Route path="schedule" element={<div>Schedule Page</div>} />
          <Route path="members" element={<div>Members Page</div>} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;