import React from "react";
import multiplePizzas from "../assets/multiplePizzas.jpeg";
import '../styles/About.css'

const About = () => {
  return (
    <div className="about ">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${multiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Welcome to Pizzeria! Our mission is to deliver hot, fresh, and
          delicious pizzas right to your door. We use only the freshest,
          highest-quality ingredients to craft our hand-tossed pizzas, homemade
          sauces, and premium toppings. With fast, reliable delivery and a
          customizable menu, you can create your perfect pizza experience. Our
          app offers real-time tracking, exclusive offers, and easy ordering. We
          are committed to sustainability and community, sourcing responsibly
          and using eco-friendly practices. Download Pizzeria today and
          enjoy the best pizza in town with just a few taps!
        </p>
      </div>
    </div>
  );
};

export default About;
