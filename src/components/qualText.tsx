import { useState } from "react";
import { texts } from "../app/texts";
import { motion } from "framer-motion";

const QualEOTEXTO = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState("");

  const currentQuestion = texts[currentIndex];

  const handleAnswer = (option: string) => {
    setSelectedOption(option);
    if (option === currentQuestion.correct) {
      setFeedback("✅ Resposta correta!");
    } else {
      setFeedback("❌ Resposta errada! Tente novamente.");
    }
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setFeedback("");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const previousQuestion = () => {
    setSelectedOption(null);
    setFeedback("");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + texts.length) % texts.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-3 bg-gradient-to-br from-[#106EBE] to-[#0E4A8A] text-white">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-8 font-sans text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Qual é o Texto?
      </motion.h1>
  
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="p-5 bg-white shadow-2xl rounded-xl w-full max-w-[350px] sm:max-w-[400px] text-center"
      >
        <p className="text-base sm:text-lg text-black font-semibold mb-6">
          {currentQuestion.verse}
        </p>
  
        <div className="flex flex-col space-y-4">
          {currentQuestion.options.map((option, index) => (
            <motion.button
              key={index}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg border transition transform hover:scale-105 text-sm sm:text-base ${
                selectedOption === option
                  ? option === currentQuestion.correct
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-black"
              }`}
              onClick={() => handleAnswer(option)}
              whileTap={{ scale: 0.95 }}
            >
              {option}
            </motion.button>
          ))}
        </div>
  
        {feedback && (
          <motion.p
            className="mt-6 text-lg font-bold text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {feedback}
          </motion.p>
        )}
  
        <div className="flex space-x-4 mt-6">
          <motion.button
            onClick={previousQuestion}
            className="px-5 py-2 sm:px-8 sm:py-3 text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition transform hover:scale-105 text-sm sm:text-base"
            whileTap={{ scale: 0.95 }}
          >
            Texto anterior
          </motion.button>
          <motion.button
            onClick={nextQuestion}
            className="px-5 py-2 sm:px-8 sm:py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition transform hover:scale-105 text-sm sm:text-base"
            whileTap={{ scale: 0.95 }}
          >
            Próximo texto
          </motion.button>
        </div>
      </motion.div>
  
      <motion.a
        href="../"
        className="mt-8 text-white hover:underline text-sm sm:text-base"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        Voltar para o início
      </motion.a>
    </div>
  );
  
};

export default QualEOTEXTO;