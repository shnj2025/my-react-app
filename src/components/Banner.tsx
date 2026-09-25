import bannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-4 py-12 md:py-20 text-center md:text-left">
      <div className="max-w-xl">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="mt-6 text-gray-600 text-base md:text-lg">
          Explore frontend, backend, database, and tooling options, <br className="hidden md:block" />
          compare them side by side, and put together the stack that fits your <br className="hidden md:block" />
          next project.
        </p>

        

        <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
          <button className="bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90">
            Explore Technologies
          </button>
          <button className="border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-50">
            Learn More
          </button>
        </div>
      </div>

      <div>
        <img src={bannerImg} alt="Development stack illustration" className="w-[280px] md:w-[420px]" />
      </div>
    </div>
  );
};

export default Banner;