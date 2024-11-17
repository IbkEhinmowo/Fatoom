"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import "./App.css"; // Import your CSS file

export default function LoveDeclaration() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="container">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="heart-container"
      >
        <Heart className="heart-icon" />
      </motion.div>

      <h1 className="title">I Lob You, Fatoom!</h1>

      <p className="subtitle">
        Every moment with you is a treasure. You make my world brighter and my
        heart fuller.
      </p>

      <button onClick={() => setShowMessage(true)} className="special-button">
        Click for a Special Message ٩(＾◡＾)۶
      </button>

      {showMessage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="message-container"
        >
          <p className="message-text">
            You're not just my girlfriend, you're my best friend, my confidant,
            and my soulmate. I cherish every moment we spend together and I'm
            looking forward to many more. Thank you for being you and for loving
            meƪ(=ｘωｘ=ƪ) ❤️
          </p>
        </motion.div>
      )}
    </div>
  );
}
