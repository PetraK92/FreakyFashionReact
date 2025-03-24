import { useState } from "react";

const Accordion = () => {
  // Hanterar tillståndet för vilken sektion som är öppen
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    // Om samma sektion klickas på igen, stänger vi den. Annars öppnar vi den.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion block md:hidden">
      {/* Accordion Item 1 */}
      <div className="border-b">
        <h2 className="accordion-header">
          <button
            className={`w-full text-left p-4 ${
              openIndex === 0 ? "bg-gray-200" : "bg-gray-100"
            } border-b`}
            onClick={() => toggleAccordion(0)}
          >
            Shopping
          </button>
        </h2>
        {openIndex === 0 && (
          <div className="accordion-body p-4 bg-gray-100">
            <ul>
              <li>Vinterjackor</li>
              <li>Pufferjackor</li>
              <li>Kappor</li>
              <li>Trenchcoats</li>
            </ul>
          </div>
        )}
      </div>

      {/* Accordion Item 2 */}
      <div className="border-b">
        <h2 className="accordion-header">
          <button
            className={`w-full text-left p-4 ${
              openIndex === 1 ? "bg-gray-200" : "bg-gray-100"
            } border-b`}
            onClick={() => toggleAccordion(1)}
          >
            Mina Sidor
          </button>
        </h2>
        {openIndex === 1 && (
          <div className="accordion-body p-4 bg-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            voluptates autem minus, excepturi unde voluptatem dolorum assumenda
            nemo doloribus inventore consectetur ipsum consequatur at blanditiis
            vitae nam totam illo est!
          </div>
        )}
      </div>

      {/* Accordion Item 3 */}
      <div className="border-b">
        <h2 className="accordion-header">
          <button
            className={`w-full text-left p-4 ${
              openIndex === 2 ? "bg-gray-200" : "bg-gray-100"
            } border-b`}
            onClick={() => toggleAccordion(2)}
          >
            Kundtjänst
          </button>
        </h2>
        {openIndex === 2 && (
          <div className="accordion-body p-4 bg-gray-100">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit ad nam dolorem repellendus, quod voluptas laborum! A
            nesciunt provident, nemo quod porro dolor laborum recusandae quas ad
            facilis ducimus assumenda.
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
