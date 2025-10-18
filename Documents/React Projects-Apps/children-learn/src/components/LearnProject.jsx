import { useState } from "react";
import { motion } from "framer-motion";
import "./LearnProject.css";

const Quest = [
  {
    question: "GOAT",
    options: ["G", "O", "A", "T"],
  },
  {
    question: "LION",
    options: ["L", "I", "O", "N"],
  },
];

const LearnProject = () => {
  const [CurrentQuest, setCurrentQuest] = useState(0);
  const [Answer, setAnswer] = useState("");
  const [Move, setMove] = useState(Array(Quest[0].options.length).fill(false));

  const handleMove = (index, letter) => {
    // Prevent clicking the same letter twice
    if (Move[index]) return;

    // Move only the clicked one upward
    setMove((prev) => prev.map((item, i) => (i === index ? true : item)));

    // Add letter to top input
    setAnswer((prev) => prev + letter);
  };

  // ✅ Check if user spelled the word right
  if (Answer.length === Quest[CurrentQuest].question.length) {
    if (Answer === Quest[CurrentQuest].question) {
      alert("✅ You spelled it right!");
    } else if (Answer !== Quest[CurrentQuest].question) {
      alert("❌ Try again!");
      window.location.reload();
    } else {
      alert("🎉 You’ve completed all questions!");
      window.location.reload();
    }
  }

  const handleNext = () => {
    if (CurrentQuest < Quest.length - 1) {
      const next = CurrentQuest + 1;
      setCurrentQuest(next);
      setAnswer("");
      setMove(Array(Quest[next].options.length).fill(false));
    } else {
      alert("🎉 You’ve completed all questions!");
    }
  };

  return (
    <>
      <div className="container">
        <h2>
          Question {CurrentQuest + 1}: {Quest[CurrentQuest].question}
        </h2>

        {/* Top box showing formed word */}
        <input type="text" value={Answer} readOnly className="questionInput" />

        <div className="game">
          {Quest[CurrentQuest].options.map((optionAll, index) => (
            <motion.input
              key={index}
              type="text"
              value={optionAll}
              readOnly
              className="optionBtn"
              onClick={() => handleMove(index, optionAll)}
              animate={{
                y: Move[index] ? -120 : 0, // move upward if clicked
                opacity: Move[index] ? 0 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 10,
              }}
            />
          ))}
        </div>

        {/* Show Next button when all letters are chosen */}
        {Answer.length === Quest[CurrentQuest].options.length && (
          <button onClick={handleNext} className="nextBtn">
            Next ➡️
          </button>
        )}
      </div>
    </>
  );
};

export default LearnProject;
