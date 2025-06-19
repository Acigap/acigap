import { Button } from "./components/ui/button";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-8">
      <div className="card p-12 max-w-2xl w-full text-center space-y-8">
        <h1 className="text-6xl font-semibold text-[var(--foreground)] tracking-tight">
          หน้าหลัก
        </h1>
        <p className="text-xl text-[var(--muted-foreground)] max-w-md mx-auto leading-relaxed">
          ยินดีต้อนรับสู่หน้าหลักของเว็บไซต์
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Button variant="default" size="lg">ดูเพิ่มเติม</Button>
          <Button variant="secondary" size="lg">ย้อนกลับ</Button>
        </div>
      </div>
    </div>
  );
}

export default Home;