import React from "react";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./style.css";
class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="aboutPageWrapper">
          <h2> About Page</h2>
          <Button />
        </div>
        <Footer />
      </div>
    );
  }
}

export default AboutPage;
