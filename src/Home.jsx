function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <iframe 
        src="https://v0-paywise-prd.vercel.app/"
        className="w-full h-full border-none"
        title="PayWise Application"
      />
    </div>
  );
}

export default Home;