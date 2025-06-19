import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
        <nav className="bg-white p-4 shadow-md">
          <ul className="flex justify-center space-x-8">
            <li>
              <Link to="/" className="text-gray-800 font-bold hover:text-purple-600 transition duration-300">Main Page</Link>
            </li>
            <li>
              <Link to="/home" className="text-gray-800 font-bold hover:text-purple-600 transition duration-300">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Main() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          สวัสดี! (Hello World!)
        </h1>
        <p className="text-gray-600 text-center mb-6">
          นี่คือเว็บแอปพลิเคชัน React กับ Tailwind CSS
        </p>
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-6 rounded-full hover:shadow-lg transform hover:scale-105 transition duration-300">
            เริ่มต้นใช้งาน
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
