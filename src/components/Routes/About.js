import Navbar from "../Navbar";
import Hero from "../Hero";
import pic1 from "../pics/b.jpg";
import Footer from "../Footer";
import AboutData from "../AboutData";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" img={pic1} title="About" btn="show1" />
      <AboutData />
      <Footer />
    </>
  );
}
export default About;
