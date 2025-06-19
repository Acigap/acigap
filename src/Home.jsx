function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          หน้าหลัก (Home)
        </h1>
        <p className="text-gray-600 text-center mb-6">
          ยินดีต้อนรับสู่หน้าหลักของเว็บไซต์
        </p>
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-6 rounded-full hover:shadow-lg transform hover:scale-105 transition duration-300">
            ดูเพิ่มเติม
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;