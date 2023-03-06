import React from "react";
import Card from "../../components/Card/Card";
import Counter from "../../components/Counter/Counter";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./style.css";
class HomePage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="homePageWrapper">
          <h2> Home Page</h2>
          <section className="cardsSection">
            <Card
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
              title="ReactJS- ReactJS Basics2"
              body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
            />
            <Card
              src="https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"
              title="ReactJS- ReactJS Basics2"
              body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
            />
            <Card
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrS_KUGfAi6s6JuZOyZtAHg3sSuLkLMFB0xnkQR-uqBwwoe-nNvBmuhnTcavoRVyyV6iY&usqp=CAU"
              title="ReactJS- ReactJS Basics2"
              body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
            />
          </section>
          <section className="counterSection">
            <Counter />
          </section>
        </div>
        <Footer />
      </>
    );
  }
}
export default HomePage;
