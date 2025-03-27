import { Link } from "react-router";

const Spots = () => {
  return (
    <div className="spots hidden lg:flex justify-between px-6 py-4">
      <figure className="relative text-center">
        <img
          src="../../images/spotbyxor.jpg"
          alt="bild på produkt"
          className="w-full h-auto object-cover rounded-lg"
        />
        <figcaption className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
          <Link>Byxor</Link>
        </figcaption>
      </figure>

      <figure className="relative text-center">
        <img
          src="../../images/spot4.jpg"
          alt="bild på produkt"
          className="w-full h-auto object-cover rounded-lg"
        />
        <figcaption className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
          <Link>Jackor</Link>
        </figcaption>
      </figure>

      <figure className="relative text-center">
        <img
          src="../../images/spotskort.jpg"
          alt="bild på produkt"
          className="w-full h-auto object-cover rounded-lg"
        />
        <figcaption className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
          <Link>Skor</Link>
        </figcaption>
      </figure>
    </div>
  );
};

export default Spots;
