const Hero = () => {
  return (
    <article className="hero flex flex-col lg:flex-row-reverse items-center justify-between p-6 min-h-screen">
      <div className="w-full lg:w-1/2">
        <img
          src="../images/herobild.jpg"
          alt="Hero, bild på ett klädesplagg"
          className="w-full h-auto"
        />
      </div>
      <div className="text-section flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 lg:pr-12 text-center lg:text-left">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Lorem ipsum dolor
        </h1>
        <p className="text-lg text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aliquid
          voluptatem voluptates perspiciatis, sunt incidunt debitis at natus
          possimus alias quaerat libero sed officiis numquam vel iure corporis
          ea corrupti!
        </p>
      </div>
    </article>
  );
};

export default Hero;
