import pic from "./pics/e.jpg";
import pic1 from "./pics/f.jpg";
import pic2 from "./pics/g.jpg";
import pic3 from "./pics/h.jpg";
import "./DestinationStyle.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="Destination">
      <h1> Popular Destinations</h1>
      <p> Tours give the opportunity to see a lot,within a time fram</p>
      <DestinationData
        cName="first-dis"
        title="Goa,India"
        text="Goa is a state on the southwestern coast of India. The location was recognized as the Konkan and geographically separated from the Deccan highlands with Western Ghats’ aid. It is encircled by Maharashtra’s Indian state toward the north and Karnataka toward the east and south, with the Arabian Sea shaping its western coast. With terraced hills, red churches, small rooftops, Panaji City stands as the Capital of Goa."
        img1={pic}
        img2={pic1}
      />
      <DestinationData
        cName="first-dis-reverse"
        title="Pondicherry,India"
        text="Pondicherry, officially known as Puducherry, and commonly referred to as just Pondy, is one of the seven Union Territories of India which is bounded by the southern state of Tamil Nadu. This former French colony is a perfect amalgamation of the traditional Indian sensibilities and French architecture, making it a dreamy escape that offers the best of both worlds."
        img1={pic2}
        img2={pic3}
      />
    </div>
  );
};
export default Destination;
