import Header from "./Header";

function Hero() {
  return (
    <>
      <section>
        <Header />
        <div className="bg-[url('./assets/Landing_page_gif.gif')] bg-cover bg-center w-full h-[100vh] flex justify-center items-center flex-col gap-8">
            <p className="text-xl md:text-2xl text-slate-50 text-center px-4 md:px-0 mx-auto max-w-screen-md">
              USA’s TOP REAL-ESTATE COMPANY FOR MORE THAN 30 YEARS
            </p>
            <button className="p-4 outline-none border-2 border-slate-300 hover:border-white transition-colors duration-300 ease-in-out capitalize text-slate-50 text-xl text-center">
              find your dream home
            </button>
          </div>
      </section>
    </>
  );
}

export default Hero;
