import colorP from "./assets/colour-palette.svg";

import lato from "./assets/LATO.svg";

export default function Mockup() {
  return (
    <>
      <h2 id="mockup">Mockups</h2>
      <h3 className="text h1-font">Color</h3>
      <p className="p1">
        To choose a colour for the food cart searched for warm colours. After
        many
        <br /> considerations settled on this colour palette.
      </p>
      <img className="color-palatte" src={colorP} alt="color-palette" />
      <h3 className="text h1-font">Font</h3>
      <img
        style={{
          marginTop: "30px",
          marginBottom: "30px",
        }}
        src={lato}
        alt="lato"
      />
      <p className="p1">
        Lato is perhaps the most unique and interesting sans-serif font. Lato
        supports a
        <br /> wide range of font weights, making it suitable for usage with
        various types <br />
        of typography.
      </p>

      <h3 className="text h1-font">High Fidility Prototype</h3>
      <div className="rectangle-box">
        <div className="page-pic flexible">
          <p className="p1">
            The final hi-fi prototype is clear flow from the splash
            screen,home,menu to completing the order.It also meet user needs for
            a pickup or dine in option as well as more customization.
          </p>
          <p className="p1">View the prototype :</p>
        </div>
        <div className="mockup-iframe">
          <iframe
            title="figma_file"
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="80%"
            height="644"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FL5Eue1DAdZu6rlFOr3Ritb%2FNORRUKU%3Fpage-id%3D343%253A133%26node-id%3D385%253A1267%26viewport%3D256%252C510%252C0.33%26scaling%3Dscale-down%26starting-point-node-id%3D385%253A1267"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
