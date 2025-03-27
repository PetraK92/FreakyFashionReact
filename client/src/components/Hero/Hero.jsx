const Hero = ({ title, description, imageUrl }) => {
  return (
    <article className="hero flex flex-col lg:flex-row-reverse items-center justify-between p-6 min-h-screen">
      <div className="w-full lg:w-1/2">
        <img src={imageUrl} alt={title} className="w-full h-auto" />
      </div>
      <div className="text-section flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 lg:pr-12 lg:pl-20 text-center lg:text-left">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-lg text-gray-700">{description}</p>
      </div>
    </article>
  );
};

export default Hero;
