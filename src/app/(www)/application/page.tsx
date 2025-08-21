import ApplicationHero from "@/components/application/hero";
import ApplicationSection from "@/components/application/section";
import ApplicationPrice from "@/components/application/price";

export default function Application() {
  return (
    <main className="w-full relative flex flex-col pt-6">
      <ApplicationHero />
      <ApplicationSection />
      <ApplicationPrice/>
    </main>
  );
}