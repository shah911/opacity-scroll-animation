import Charater from "@/components/Character";
import Word from "@/components/Word";

export default function Home() {
  return (
    <div className="w-[95%] mx-auto">
      <div className="min-h-[600px] h-screen" />
      <Word />
      <div className="min-h-[600px] h-screen" />
      <Charater />
      <div className="min-h-[600px] h-screen" />
    </div>
  );
}
