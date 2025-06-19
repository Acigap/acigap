import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './Home';
import Transfer from './pages/Transfer';
import History from './pages/History';
import TransactionDetail from './pages/TransactionDetail';
import Store from './pages/Store';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-[var(--background)]">
          <nav className="backdrop-blur-md bg-[var(--neutral-1)]/70 sticky top-0 z-50 border-b border-[var(--border)]">
            <div className="max-w-5xl mx-auto">
              <ul className="flex justify-center space-x-8 py-3">
                <li>
                  <Link 
                    to="/" 
                    className="text-[var(--neutral-10)] font-medium hover:text-[var(--primary-green)] transition-colors duration-200 text-sm"
                  >
                    โอนเงิน
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/history" 
                    className="text-[var(--neutral-10)] font-medium hover:text-[var(--primary-green)] transition-colors duration-200 text-sm"
                  >
                    ประวัติ
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/store" 
                    className="text-[var(--neutral-10)] font-medium hover:text-[var(--primary-green)] transition-colors duration-200 text-sm"
                  >
                    Store
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/home" 
                    className="text-[var(--neutral-10)] font-medium hover:text-[var(--primary-green)] transition-colors duration-200 text-sm"
                  >
                    Home
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <main className="max-w-5xl mx-auto p-6">
            <Routes>
              <Route path="/" element={<Transfer />} />
              <Route path="/history" element={<History />} />
              <Route path="/transaction/:id" element={<TransactionDetail />} />
              <Route path="/store" element={<Store />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
