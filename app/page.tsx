import Section1 from "@/components/sections/home/Section1";
import Section2 from "@/components/sections/home/Section2";
import Section3 from "@/components/sections/home/Section3";

export default function Home() {
  return (
    <div>
      <div className="max-w-7xl relative px-4 m-auto">
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </div>
  );
}
