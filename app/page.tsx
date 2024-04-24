import Section1 from "@/components/sections/home/Section1";
import Section2 from "@/components/sections/home/Section2";

export default function Home() {
  return (
    <div>
      <div className="max-w-7xl relative pl-24 max-[500px]:pl-10 max-md:pl-16 pr-4 m-auto">
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
}
