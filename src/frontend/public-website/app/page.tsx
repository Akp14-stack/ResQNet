import Hero from "./components/Hero";
import DisasterCards from "./components/DisasterCards";
import DosAndDonts from "./components/DosAndDonts";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <DisasterCards />
      <DosAndDonts />
      <AboutUs />
    </main>
  );
}
