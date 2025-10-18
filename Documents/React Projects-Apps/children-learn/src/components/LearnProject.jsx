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
  {
    question: "FISH",
    options: ["F", "I", "S", "H"],
  },
  {
    question: "BIRD",
    options: ["B", "I", "R", "D"],
  },
  {
    question: "FROG",
    options: ["F", "R", "O", "G"],
  },
  {
    question: "DUCK",
    options: ["D", "U", "C", "K"],
  },
  {
    question: "BEAR",
    options: ["B", "E", "A", "R"],
  },
  {
    question: "ONYX",
    options: ["O", "N", "Y", "X"],
  },
  {
    question: "ZINC",
    options: ["Z", "I", "N", "C"],
  },
  {
    question: "MUTE",
    options: ["M", "U", "T", "E"],
  },
  {
    question: "HAZE",
    options: ["H", "A", "Z", "E"],
  },
  {
    question: "WOLF",
    options: ["W", "O", "L", "F"],
  },
  {
    question: "DEER",
    options: ["D", "E", "E", "R"],
  },
  {
    question: "COW",
    options: ["C", "O", "W"],
  },
  {
    question: "DOG",
    options: ["D", "O", "G"],
  },
  {
    question: "CAT",
    options: ["C", "A", "T"],
  },
  {
    question: "VOID",
    options: ["V", "O", "I", "D"],
  },
  {
    question: "EMBER",
    options: ["E", "M", "B", "E", "R"],
  },
  {
    question: "CRYPT",
    options: ["C", "R", "Y", "P", "T"],
  },
  {
    question: "PLUSH",
    options: ["P", "L", "U", "S", "H"],
  },
  {
    question: "TWIG",
    options: ["T", "W", "I", "G"],
  },
  {
    question: "QUILL",
    options: ["Q", "U", "I", "L", "L"],
  },
  {
    question: "PIG",
    options: ["P", "I", "G"],
  },
  {
    question: "ANT",
    options: ["A", "N", "T"],
  },
  {
    question: "BAT",
    options: ["B", "A", "T"],
  },
  {
    question: "RAT",
    options: ["R", "A", "T"],
  },
  {
    question: "HEN",
    options: ["H", "E", "N"],
  },
  {
    question: "FOX",
    options: ["F", "O", "X"],
  },
  {
    question: "CROW",
    options: ["C", "R", "O", "W"],
  },
  {
    question: "SWAN",
    options: ["S", "W", "A", "N"],
  },
  {
    question: "MOON",
    options: ["M", "O", "O", "N"],
  },
  {
    question: "KING",
    options: ["K", "I", "N", "G"],
  },
  {
    question: "FIRE",
    options: ["F", "I", "R", "E"],
  },
  {
    question: "WIND",
    options: ["W", "I", "N", "D"],
  },
  {
    question: "JAZZ",
    options: ["J", "A", "Z", "Z"],
  },
  {
    question: "CODE",
    options: ["C", "O", "D", "E"],
  },
  {
    question: "QUIZ",
    options: ["Q", "U", "I", "Z"],
  },
  {
    question: "MATH",
    options: ["M", "A", "T", "H"],
  },
  {
    question: "VIBE",
    options: ["V", "I", "B", "E"],
  },
  {
    question: "RHYME",
    options: ["R", "H", "Y", "M", "E"],
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
