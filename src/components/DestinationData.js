import pic from "./pics/e.jpg";
import pic1 from "./pics/f.jpg";
import pic2 from "./pics/g.jpg";
import pic3 from "./pics/h.jpg";
import "./DestinationDataStyles.css";
import { Component } from "react";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.cName}>
        <div className="dis-text">
          <h2>{this.props.title}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img alt="none" src={this.props.img1} />
          <img alt="none" src={this.props.img2} />
        </div>
      </div>
    );
  }
}
export default DestinationData;
