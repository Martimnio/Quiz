import { useState } from "react";
import {texts} from "../app/texts"
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
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl text-black font-bold mb-6">Qual é o Texto?</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 w-96 text-center">
        <p className="text-lg text-black font-semibold mb-4">{currentQuestion.verse}</p>
        <div className="flex flex-col space-y-2">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`px-4 text-black py-2 rounded-lg border transition ${
                selectedOption === option
                  ? option === currentQuestion.correct
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
        {feedback && <p className="mt-4 text-lg font-bold">{feedback}</p>}
        <div className="flex">
          <button
            onClick={previousQuestion}
            className="mt-6 mr-1 px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Texto anterior
          </button>
          <button
            onClick={nextQuestion}
            className="mt-6 ml-1 px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Próximo texto
          </button>
        </div>
        
      </div>
      <motion.a
        href="../"
        className="mt-6 text-blue-600 hover:underline"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        Voltar para o início
      </motion.a>
    </div>
  );
};

export default QualEOTEXTO;
