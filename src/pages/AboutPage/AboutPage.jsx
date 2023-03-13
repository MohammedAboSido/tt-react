import React from "react";
import Button from "../../components/Button/Button";
import "./style.css";
class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <div className="aboutPageWrapper">
          <h2> About Page</h2>
          <Button />
        </div>
      </div>
    );
  }
}

export default AboutPage;
