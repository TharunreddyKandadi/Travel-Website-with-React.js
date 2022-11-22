import Navbar from "../Navbar";
import Hero from "../Hero";
import pic from "../pics/a.jpg";
import Destination from "../Destination";
import Trip from "../Trip";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        img={pic}
        title="Your Journey Your Wish"
        text="Choose Your Destination"
        btntext="Travel plan"
        url="/"
        btn="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;
