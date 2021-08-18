const Hero = () => {
  return (
    <div
      className="w-auto bg-cover bg-center flex items-end h-52 md:h-64 xl:h-96 mb-4 lg:mb-8"
      style={{backgroundImage: `url('/images/hero.jpg')` }}
    >
      <div className="flex items-center justify-between h-18 md:h-20 xl:h-32 w-full bg-yellow-400 bg-opacity-70">
        <div className="text-left flex flex-row items-center justify-between w-full p-2 xl:p-4">
          <h1 className="text-green-900 text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold w-2/3 mx-2">
            Explore the great outdoors with mans best friend!
          </h1>
          <button className="px-2 py-2 xl:px-2 xl:py-2 bg-green-900 text-yellow-400 text-base xl:text-2xl font-bold rounded hover:bg-green-800 focus:outline-none focus:bg-green-800">
            Find a walk
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
