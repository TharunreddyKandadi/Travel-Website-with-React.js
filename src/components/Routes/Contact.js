import Navbar from "../Navbar";
import Hero from "../Hero";
import pic1 from "../pics/d.jpg";
import Footer from "../Footer";
import ContactData from "../ContactData";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" img={pic1} title="Contact" btn="show1" />
      <ContactData />
      <Footer />
    </>
  );
}
export default Contact;
