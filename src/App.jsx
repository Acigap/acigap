import './App.css';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
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
