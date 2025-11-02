import React from 'react';
import './HowItWorks.css';
import chessboardImage from '../../assets/chessboard.png'; // make sure this path is correct

const HowItWorks = () => {
  return (
    <div className="howitworks-container">
      <h1 className="howitworks-title">How <span>PlayShatranj</span> Works ♟️</h1>
      <p className="howitworks-subtitle">
        Bridging the gap between traditional chess and modern technology.
      </p>

      <div className="howitworks-content">
        <div className="howitworks-text">
          <p>
            PlayShatranj integrates intelligent hardware with our web platform.
            Each square on the chessboard uses <strong>LDR sensors</strong> to detect
            movement, and an <strong>ESP32 microcontroller</strong> processes data in real time.
            A <strong>16-to-1 multiplexer</strong> efficiently manages multiple inputs, ensuring
            every move is tracked with accuracy and speed.
          </p>
          <p>
            The physical moves are then mirrored digitally, creating a seamless
            fusion of real-world chess with online gameplay. It’s like your
            chessboard is alive — every move you make, PlayShatranj knows.
          </p>

          <a href="/about" className="howitworks-readmore">← Back to About</a>
        </div>

        <div className="howitworks-image">
          <img src={chessboardImage} alt="PlayShatranj Hardware Diagram" />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
