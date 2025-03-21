import { Link, NavLink } from "react-router";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="px-0 py-4">
      <div className="mainmenu flex items-center justify-between w-full">
        <div className="logo">
          <Link to="/">
            <img src="../../images/Freaky Fashion2.png" alt="logga" />
          </Link>
        </div>
        <div className="menucontainer flex items-center gap-1 flex-1 max-w-2xl w-full">
          <div className="searchbar w-auto">
            <SearchBar />
          </div>
          <ul className="icons flex items-center gap-4 flex-shrink-0 ml-auto">
            <li>
              <Link to="#">
                <i className="bi bi-heart-fill"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="bi bi-basket"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <nav className="w-full bg-stone-400 p-3">
        <ul className="topmenu flex flex-row gap-x-6 w-full">
          <li>
            <NavLink to="#">
              <p>Nyheter</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <p>Topplista</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <p>Rea</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <p>Kampanjer</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
