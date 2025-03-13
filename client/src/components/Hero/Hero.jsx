const Hero = ()=>{
    return (
        <article className="hero flex items-center justify-between p-6 min-h-screen">
        <div className="text-section flex flex-col justify-center items-start md:w-1/2 md:pr-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center md:text-left">
            Lorem ipsum dolor</h1>
          <p className="text-lg text-gray-700 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            aliquid voluptatem voluptates perspiciatis, sunt incidunt debitis at
            natus possimus alias quaerat libero sed officiis numquam vel iure
            corporis ea corrupti!
          </p>
        </div>

        <div className="w-full md:w-1/2">
         <img src="../images/herobild.jpg" alt="Hero, bild på ett klädesplagg" />
         </div>
      </article>
)
}
  
export default Hero;
