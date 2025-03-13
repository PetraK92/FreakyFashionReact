const Footer = ()=>{
    return (
<footer>
<div className="accordion block md:hidden" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        Shopping
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <ul className="jacketlist">
          <li>Vinterjackor</li>
          <li>Pufferjackor</li>
          <li>Kappor</li>
          <li>Trenchcoats</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
        Mina Sidor
      </button>
    </h2>
    <div
      id="collapseTwo"
      className="accordion-collapse collapse"
      aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
        voluptates autem minus, excepturi unde voluptatem dolorum
        assumenda nemo doloribus inventore consectetur ipsum consequatur
        at blanditiis vitae nam totam illo est!
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
      >
        Kundtjänst
      </button>
    </h2>
    <div
      id="collapseThree"
      className="accordion-collapse collapse"
      aria-labelledby="headingThree"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Reprehenderit ad nam dolorem repellendus, quod voluptas laborum! A
        nesciunt provident, nemo quod porro dolor laborum recusandae quas
        ad facilis ducimus assumenda.
      </div>
    </div>
  </div>
</div>
<div className="copyright block md:hidden">
  <p>
    <i className="bi bi-c-circle"></i>
    Freaky Fashion
  </p>
</div>
<nav className="endmenu hidden md:flex flex-col items-center py-6 bg-stone-500">
  <div className= "flex justify-around w-full">
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
)
}
  
export default Footer;
