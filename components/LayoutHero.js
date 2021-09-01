import NavBar from "./NavBar";
import Hero from "./Hero";
import Footer from "./Footer";

const LayoutHero = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen mx-auto container md:container md:px-16 w-full">
      <NavBar />
      <Hero />
      <main className="px-2 sm:px-0">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutHero;
