import Accordion from "./Accordion";

const Footer = () => {
  return (
    <footer>
      <Accordion />

      <div className="copyright block md:hidden text-center">
        <p>
          <i className="bi bi-c-circle"></i>
          Freaky Fashion
        </p>
      </div>

      <nav className="endmenu hidden md:flex flex-col items-center py-6 bg-neutral-500">
        <div className="flex justify-around w-full">
          <ul>
            <li>Shopping</li>
            <li>Vinterjackor</li>
            <li>Pufferjackor</li>
            <li>Kappa</li>
            <li>Trenchcoats</li>
          </ul>
          <ul>
            <li>Mina Sidor</li>
            <li>Mina Ordrar</li>
            <li>Mitt Konto</li>
          </ul>
          <ul>
            <li>Kundtjänst</li>
            <li>Returpolicy</li>
            <li>Integritetspolicy</li>
          </ul>
        </div>
        <div className="copyright2 text-center mt-4">
          <p>
            <i className="bi bi-c-circle"></i>
            Freaky Fashion
          </p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
