import { useState, useEffect } from "react";
import { questions } from "@/app/questions";
import { motion } from "framer-motion"; // Biblioteca para animações

interface Question {
  question: string;
  answer: string;
}

interface QuizProps {
  difficulty: "easy" | "medium" | "hard";
}

const Quiz: React.FC<QuizProps> = ({ difficulty }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setCurrentQuestion(questions[difficulty][currentQuestionIndex]);
    setShowAnswer(false);
  }, [difficulty, currentQuestionIndex]);

  const nextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex < questions[difficulty].length - 1 ? prevIndex + 1 : 0
    );
  };

  const previousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : questions[difficulty].length - 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-[#106EBE] to-[#0E4A8A] text-white">
      <motion.h1
        className="text-4xl font-bold mb-8 font-sans"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Nível: {difficulty.toUpperCase()}
      </motion.h1>

      {currentQuestion && (
        <motion.div
          key={currentQuestionIndex} 
          className="mt-6 p-8 bg-white shadow-2xl rounded-xl w-full max-w-[350px] sm:max-w-[400px] text-center text-black"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-2xl font-bold mb-6">{currentQuestion.question}</p>
          {showAnswer ? (
            <motion.p
              className="mt-3 text-lg text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {currentQuestion.answer}
            </motion.p>
          ) : (
            <motion.button
              onClick={() => setShowAnswer(true)}
              className="mt-4 px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transition transform hover:scale-105"
              whileTap={{ scale: 0.95 }}
            >
              Mostrar Resposta
            </motion.button>
          )}
        </motion.div>
      )}

      <div className="mt-8 flex space-x-6">
        <motion.button
          onClick={previousQuestion}
          className="px-8 py-4 text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition transform hover:scale-105"
          whileTap={{ scale: 0.95 }}
        >
          Pergunta anterior
        </motion.button>
        <motion.button
          onClick={nextQuestion}
          className="px-8 py-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
          whileTap={{ scale: 0.95 }}
        >
          Próxima Pergunta
        </motion.button>
      </div>

      <motion.a
        href="../"
        className="mt-8 text-white hover:underline"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        Voltar para o início
      </motion.a>
    </div>
  );
};

export default Quiz;