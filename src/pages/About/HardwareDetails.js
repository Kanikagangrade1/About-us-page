import React from "react";
import esp32 from "../../assets/esp32.png";
import ldr from "../../assets/ldr.png";
import mux from "../../assets/mux.png";
import tp4056 from "../../assets/tp4056.png";
import howItWorks from "../../assets/chessboard.png"; 
import "./HardwareDetails.css";

const HardwareDetails = () => {
  return (
    <div className="hardware-details">
      <h2>Hardware Components & Connections</h2>

      {/* How It Works Section */}
      <div className="hardware-section">
        <img
          src={howItWorks}
          alt="How It Works Diagram"
          className="hardware-image"
        />
        <p>
          The diagram illustrates how all hardware components interact in the PlayShatranj smart chessboard — 
          from sensors detecting piece movements to wireless data transfer handled by the ESP32.
        </p>
      </div>

      {/* ESP32 Section */}
      <div className="hardware-section">
        <h3>1. ESP32 Microcontroller</h3>
        <p>
          The ESP32 is the brain of the system. It processes inputs from the LDR
          sensors and communicates game data to the online platform through Wi-Fi.
        </p>
        <img src={esp32} alt="ESP32 Microcontroller" className="hardware-image" />
      </div>

      {/* LDR Section */}
      <div className="hardware-section">
        <h3>2. LDR Sensors</h3>
        <p>
          LDRs (Light Dependent Resistors) detect chess piece movement by monitoring light variations
          on each board square. When a piece covers or leaves a square, the sensor value changes,
          allowing accurate move tracking.
        </p>
        <img src={ldr} alt="ldr" className="ldr-image" />
      </div>

      {/* Multiplexer Section */}
      <div className="hardware-section">
        <h3>3. 16-to-1 Multiplexer</h3>
        <p>
          The multiplexer reduces the total number of I/O pins required by combining 
          multiple LDR outputs into fewer connections, simplifying circuit design.
        </p>
        <img src={mux} alt="16-to-1 Multiplexer" className="hardware-image" />
      </div>

      {/* TP4056 Section */}
      <div className="hardware-section">
        <h3>4. TP4056 Charging Module</h3>
        <p>
          The TP4056 safely charges the lithium battery that powers the chessboard.
          It provides overcharge, overcurrent, and short-circuit protection to ensure long-term reliability.
        </p>
        <img
          src={tp4056}
          alt="TP4056 Charging Module"
          className="hardware-image"
        />
      </div>
    </div>
  );
};

export default HardwareDetails;
