import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="px-0 py-4">
      <div className="mainmenu flex items-center justify-between w-full">
        <div className="logo">
          <img src="../../images/Freaky Fashion2.png" alt="logga" />
        </div>
        <div className="menucontainer flex items-center gap-1 flex-1 max-w-2xl w-full">
          <div className="searchbar w-auto">
            <SearchBar />
          </div>
          <ul className="icons flex items-center gap-4 flex-shrink-0 ml-auto">
            <li>
              <a href="#">
                <i className="bi bi-heart-fill"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-basket"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nav className="w-full bg-stone-400 p-3">
        <ul className="topmenu flex flex-row gap-x-6 w-full">
          <li>
            <a href="#">Nyheter</a>
          </li>
          <li>
            <a href="#">Topplista</a>
          </li>
          <li>
            <a href="#">Rea</a>
          </li>
          <li>
            <a href="#">Kampanjer</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
