import Splach from "../assets/spalcha.jpg"

export const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img 
        className="absolute inset-0 w-full h-full object-cover" 
        src={Splach} 
        alt="Hero background" 
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      <div className="relative z-10 flex flex-col justify-end h-full px-10 md:px-20 pb-20">
        <h2 className="text-emerald-400 font-bold mb-2 tracking-widest uppercase text-sm">
          FEATURED TONIGHT
        </h2>

        <h1 className="text-white text-5xl md:text-7xl font-black leading-tight uppercase">
          L'âme de la musique <br /> 
          <span className="text-yellow-500">bat</span> à Mawazin
        </h1>

        <p className="text-gray-200 mt-4 max-w-lg text-lg">
          Explore the magic of Rabat's stages with the world's biggest artists.
        </p>

        <div className="mt-8">
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-all uppercase text-sm">
            Buy Tickets
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;



