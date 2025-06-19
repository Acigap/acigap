import { Button } from "./components/ui/button";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-8">
      <div className="apple-card p-12 max-w-2xl w-full text-center space-y-8">
        <h1 className="text-6xl font-semibold text-[#1d1d1f] tracking-tight">
          หน้าหลัก
        </h1>
        <p className="text-xl text-[#86868b] max-w-md mx-auto leading-relaxed">
          ยินดีต้อนรับสู่หน้าหลักของเว็บไซต์
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Button size="lg">ดูเพิ่มเติม</Button>
          <Button variant="secondary" size="lg">ย้อนกลับ</Button>
        </div>
      </div>
    </div>
  );
}

export default Home;