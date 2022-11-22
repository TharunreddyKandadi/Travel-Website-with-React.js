import "./ContactData.css";

function ContactData() {
  return (
    <div className="Contact-Container">
      <h1>Send a Message to us</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Send a Message</button>
      </form>
    </div>
  );
}
export default ContactData;
