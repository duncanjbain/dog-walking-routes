import NavBar from "./NavBar";
import Footer from "./Footer";

const LayoutNoHero = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen mx-auto container md:container md:px-16 w-full">
      <NavBar />
      <main className="px-2 sm:px-0">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutNoHero;
