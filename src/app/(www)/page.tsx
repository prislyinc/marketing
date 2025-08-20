import Hero from "@/components/home/hero";
import Resources from "@/components/home/resources";

export default function Home() {
  return (
    <main className="w-full relative flex flex-col pt-6">
      <Hero />
      <Resources />
    </main>
  );
}