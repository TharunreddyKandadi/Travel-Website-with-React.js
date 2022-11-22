import "./TripStyles.css";
import TripData from "./TripData";
import pic from "./pics/i.jpg";
import pic1 from "./pics/j.jpg";
import pic2 from "./pics/k.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You Can Discover Unique Destinations Using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={pic}
          heading="Kerala,India"
          text="Head south of Goa, and you'll trade beaches for tranquil backwaters in Kerala. Nothing beats the experience of hopping aboard a traditional thatched-top houseboat in Alleppey . You'll enjoy freshly cooked Indian cuisine on the water and breathtakingly beautiful natural sights and wildlife."
        />
        <TripData
          image={pic1}
          heading="Andaman Islands,India"
          text="Andaman Islands are the go-to place in India if you're looking for a classic beach vacation. They'll treat you to powder-white sand beaches flanked by coconut palms, pastel-streaked sunsets, the turquoise waters of the Andaman Sea, and dense jungle landscapes. No postcard could possibly capture the majesty of this gorgeous destination."
        />
        <TripData
          image={pic2}
          heading="Taj Mahal,India"
          text="If there was just one symbol to represent all of India, it would be the Taj Mahal. The monument inspires millions of tourists to make the trip to Agra every year, waking up before dawn to see magnificent structure radiate at sunrise. But Agra tops the list of the best places to visit in India for reasons that go beyond India's most famous attraction."
        />
      </div>
    </div>
  );
}
export default Trip;
