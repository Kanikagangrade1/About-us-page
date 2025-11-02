import React from "react";
import "./About.css";
import howItWorksImg from "../../assets/chessboard.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1 className="about-title">About PlayShatranj</h1>
        <p className="about-quote">"Every move shapes your mind."</p>

        <p>
          Welcome to <strong>PlayShatranj</strong> — a digital home for every chess lover.
          Our mission is to bring the timeless game of chess to life through smart design,
          modern technology, and a touch of community spirit.
        </p>

        <p>
          Whether you’re an absolute beginner or a seasoned strategist,
          PlayShatranj gives you a space to practice, challenge friends,
          and learn from every move. We believe chess isn’t just a game — 
          it’s a journey of focus, patience, and creative problem-solving.
        </p>

        <p>
          Our goal is simple — to make online chess feel human, elegant,
          and endlessly inspiring. Each board, each match, and each decision you make
          brings you one step closer to mastery.
        </p>

        <h2 className="section-title">Our Vision</h2>
        <p>
          To build a global community of thinkers and players who grow together,
          one move at a time.
        </p>

        <h2 className="section-title">How PlayShatranj Works</h2>
        <p>
          PlayShatranj integrates intelligent hardware with our web platform. Each square
          on the chessboard uses <strong>LDR sensors</strong> to detect movement, and an
          <strong> ESP32 microcontroller</strong> processes data in real time.
          A <strong>16-to-1 multiplexer</strong> manages multiple inputs, ensuring every move
          is tracked with accuracy and speed.
        </p>

        <div className="how-it-works">
          <img src={howItWorksImg} alt="How PlayShatranj Works" />
        </div>

        <h2 className="section-title">The Team Behind PlayShatranj</h2>
        <p>
          Created with passion by a team of developers, designers, and chess enthusiasts
          who believe that technology should make classic games more engaging and accessible
          for everyone.
        </p>

        <div className="thank-you">
          ♟️ Thank you for being part of our journey. <br />
          <strong>Play. Learn. Grow. PlayShatranj.</strong>
        </div>
      </div>
    </div>
  );
};

export default About;
