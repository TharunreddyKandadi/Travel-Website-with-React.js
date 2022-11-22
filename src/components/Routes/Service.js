import Navbar from "../Navbar";
import Hero from "../Hero";
import pic1 from "../pics/c.jpg";
import Footer from "../Footer";
import Trip from "../Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" img={pic1} title="Service" btn="show1" />
      <Trip />
      <Footer />
    </>
  );
}
export default Service;
