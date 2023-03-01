import React from "react";
import "./style.css";
class Card extends React.Component {
  render() {
    const { src, title, body } = this.props;
    return (
      <>
        <div className="card">
          <img src={src} className="cardImage" alt="" />
          <div className="cardContent">
            <h3 className="cardTitle">{title}</h3>
            <p className="cardBody">{body}</p>
          </div>
        </div>
      </>
    );
  }
}
export default Card;
