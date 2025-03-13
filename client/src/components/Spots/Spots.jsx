const Spots = ()=>{
    return (
        <div className="spots flex justify-between px-6 py-4">
      {/* Första spoten */}
      <figure className="relative text-center">
        <img
          src="../../images/spotbyxor.jpg"
          alt="bild på produkt"
          className="w-full h-auto object-cover rounded-lg"
        />
        <figcaption className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
          Byxor
        </figcaption>
      </figure>

      {/* Andra spoten */}
      <figure className="relative text-center">
        <img
          src="../../images/spot4.jpg"
          alt="bild på produkt"
          className="w-full h-auto object-cover rounded-lg"
        />
        <figcaption className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
          Jackor
        </figcaption>
      </figure>

      {/* Tredje spoten */}
      <figure className="relative text-center">
        <img
          src="../../images/spotskort.jpg"
          alt="bild på produkt"
          className="w-full h-auto object-cover rounded-lg"
        />
        <figcaption className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
          Skor
        </figcaption>
      </figure>
    </div>
)
}
  
export default Spots;
