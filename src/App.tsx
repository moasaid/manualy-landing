import React, { useState } from 'react';
import Index from './pages/Index';
import Inapp from './pages/Inapp';
import Onboarding from './pages/Onboarding';

function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'app' | 'onboarding'>('landing');

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

  if (currentView === 'app') {
    return <Inapp onNavigateToLanding={() => setCurrentView('landing')} />;
  }

  if (currentView === 'onboarding') {
    return <Onboarding onComplete={() => setCurrentView('app')} />;
  }

  return (
    <Index 
      onNavigateToApp={() => setCurrentView('app')}
      onNavigateToOnboarding={() => setCurrentView('onboarding')}
    />
  );
}

export default App;