const EndIcons = () => {
  return (
    <div className="py-6 bg-neutral-400">
      <ul className="endicons flex flex-wrap justify-between items-center max-w-4xl mx-auto px-6 gap-8 text-gray-700">
        <li className="flex items-center gap-2 text-lg">
          <i className="bi bi-globe-europe-africa text-2xl"></i>
          <p>Gratis frakt och returer</p>
        </li>
        <li className="flex items-center gap-2 text-lg">
          <i className="bi bi-airplane-engines-fill text-2xl"></i>
          <p>Expressfrakt</p>
        </li>
        <li className="flex items-center gap-2 text-lg">
          <i className="bi bi-shield-shaded text-2xl"></i>
          <p>Säkra betalningar</p>
        </li>
        <li className="flex items-center gap-2 text-lg">
          <i className="bi bi-emoji-smile text-2xl"></i>
          <p>Nyheter varje dag</p>
        </li>
      </ul>
    </div>
  );
};

export default EndIcons;
