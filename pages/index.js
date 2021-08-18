import NavBar from "../components/NavBar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="container mx-auto w-full lg:w-2/3">
      <NavBar />
      <Hero />
    </div>
  );
}
