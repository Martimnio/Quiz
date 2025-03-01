import { useState } from "react";
import { motion } from "framer-motion"; 
import { characters } from "@/app/characters";

let characterIndex = 0;

const BibleCard = () => {
  const [currentCharacter, setCurrentCharacter] = useState(characters[0]);
  const [showInstructions, setShowInstructions] = useState(true);
  const nextCharacter = () => {
    if (characterIndex == characters.length - 1) {
      characterIndex = 0;
      setCurrentCharacter(characters[characterIndex]);
    } else {
      characterIndex++;
      setCurrentCharacter(characters[characterIndex]);
    }
  };

  const previousCharacter = () => {
    if (characterIndex > 0) {
      characterIndex--;
      setCurrentCharacter(characters[characterIndex]);
    } else {
      characterIndex = characters.length - 1;
      setCurrentCharacter(characters[characterIndex]);
    }
  };

  const randomCharacter = () =>{
    characterIndex = Math.floor(Math.random() * characters.length-1)
    console.log(characterIndex)
    setCurrentCharacter(characters[characterIndex])
  };

  if (showInstructions) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-[#106EBE] to-[#0E4A8A] text-white">
        <motion.div
          className="p-4 sm:p-6 bg-gray-100 shadow-2xl rounded-xl w-full max-w-[350px] sm:max-w-[400px] text-center border-4 border-blue-900"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-black">Cards bíblicos</h2>
          <p className="text-gray-700 mb-4 text-left">
            Olá! Estes são os <strong>Cards Bíblicos</strong>, você pode usá-los de várias maneiras
          </p>
          <p className="text-gray-700 mb-4 text-left">
            No card bíblico aparecerá um personagem, e abaixo dele haverá 9 dicas. As três primeiras dicas são mais difíceis, as três do meio médias e as outras fáceis
          </p>
          <p className="text-gray-700 mb-4 text-left"><strong>Sugestão de jogo:</strong></p>
          <p className="text-gray-700 mb-4 text-left">
            Uma sugestão de jogo é a seguinte:<br></br> Um jogador usa o celular para dar as dicas, apenas ele vê qual é o personagem. Ele inicia com uma dica difícil, se alguém acertar de primeira ganha 20 pontos.
            <br></br><br></br>Caso seja necessário mais dicas a pontuação diminui para quem acertou. Para cada dica difícil -1 ponto, para cada dica média -3 pontos, e para cada dica fácil -5 pontos
            <br></br>Aproveite!
          </p>
          <motion.button
            onClick={() => setShowInstructions(false)} 
            className="px-8 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transition transform hover:scale-105"
            whileTap={{ scale: 0.95 }}
          >
            Começar
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-[#106EBE] to-[#0E4A8A] text-white">
      <motion.div
        key={currentCharacter.name}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 1 }}
        className="p-4 sm:p-6 bg-gray-100 shadow-2xl rounded-xl w-full max-w-[350px] sm:max-w-[400px] text-center border-4 border-blue-900"
      >
        <img
          src={`/personagens/${currentCharacter.image}`}
          alt={currentCharacter.name}
          className="w-full h-40 sm:h-52 object-cover rounded-lg mb-4"
        />
  
        <div className="text-gray-700 flex flex-col">
          <h2 className="text-2xl sm:text-3xl text-left font-bold mb-4 text-black">{currentCharacter.name}</h2>
          {currentCharacter.hints.slice(0).map((hint, index) => (
            <p key={index} className="mb-2 text-left text-sm sm:text-base">
              <strong className={`mr-1 ${index < 3 ? "text-black" : index < 6 ? "text-orange-600" : "text-green-600"}`}>
                Dica {index + 1}: 
              </strong> 
              {hint}
            </p>
          ))}
        {currentCharacter.author && (
          <p className="text-sm text-gray-600 mb-4 text-left">
            <strong>Autor:</strong> {currentCharacter.author}
          </p>
        )}
        </div>
      </motion.div>
  
      <div className="mt-6 flex space-x-4">
        <motion.button
          onClick={previousCharacter}
          className="px-6 py-3 sm:px-8 sm:py-4 text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition transform hover:scale-105 text-sm sm:text-base"
          whileTap={{ scale: 0.95 }}
        >
          Card Anterior
        </motion.button>
        <motion.button
          onClick={randomCharacter}
          className="px-6 py-3 sm:px-8 sm:py-4 text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 transition transform hover:scale-105 text-sm sm:text-base"
          whileTap={{ scale: 0.95 }}
        >
          Card Aleatório 
        </motion.button>

        <motion.button
          onClick={nextCharacter}
          className="px-6 py-3 sm:px-8 sm:py-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition transform hover:scale-105 text-sm sm:text-base"
          whileTap={{ scale: 0.95 }}
        >
          Próximo Card
        </motion.button>
      </div>
  
      <motion.a
        href="../"
        className="mt-6 text-white hover:underline text-sm sm:text-base"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        Voltar para o início
      </motion.a>
    </div>
  );
  
};

export default BibleCard;