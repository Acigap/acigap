import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[var(--background)]">
        <nav className="backdrop-blur-md bg-[var(--neutral-1)]/70 sticky top-0 z-50 border-b border-[var(--border)]">
          <div className="max-w-5xl mx-auto">
            <ul className="flex justify-center space-x-8 py-3">
              <li>
                <Link 
                  to="/" 
                  className="text-[var(--neutral-10)] font-medium hover:text-[var(--primary-blue)] transition-colors duration-200 text-sm"
                >
                  Main Page
                </Link>
              </li>
              <li>
                <Link 
                  to="/home" 
                  className="text-[var(--neutral-10)] font-medium hover:text-[var(--primary-blue)] transition-colors duration-200 text-sm"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <main className="max-w-5xl mx-auto p-6">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Main() {
  return (
    <div className="card w-full h-[calc(100vh-64px)] overflow-hidden shadow-lg">
      <iframe 
        src="https://v0-paywise-prd.vercel.app/"
        className="w-full h-full border-none"
        title="PayWise Application"
      />
    </div>
  );
}

export default App;
