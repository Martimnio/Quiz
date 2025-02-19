import { useState } from "react";
import { motion } from "framer-motion"; // Biblioteca para animações
import {characters} from "@/app/characters";
let characterIndex = 0

const BibleCard = () => {
  const [currentCharacter, setCurrentCharacter] = useState(characters[0]);
  

  // Função para trocar para um personagem aleatório
  const nextCharacter = () => {
    if(characterIndex == characters.length-1){
      characterIndex = 0
      setCurrentCharacter(characters[characterIndex]);
    }
    else{
      characterIndex++;
      setCurrentCharacter(characters[characterIndex]);
    }
    
  };

  const previousCharacter = () => {
    if(characterIndex > 0){
      characterIndex--;
      setCurrentCharacter(characters[characterIndex]);
    }
    else{
      characterIndex = characters.length-1
      setCurrentCharacter(characters[characterIndex]);
    }
    
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <motion.div
        key={currentCharacter.name}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="p-6 bg-white shadow-xl rounded-lg w-96"
      >
        <img
          src={currentCharacter.image}
          alt={currentCharacter.name}
          className="w-full h-52 object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl text-black font-bold mb-3 text-center">{currentCharacter.name}</h2>

        <div className="text-gray-700 flex flex-col items-start">
          
          {currentCharacter.hints.slice(0).map((hint, index) => (
            <p key={index} className="mb-2">
              <strong className={`mr-1 ${index < 3 ? "text-black" : index >= 3 && index < 6? "text-orange-600" : "text-green-600"}`}>
        Dica {index + 1}: 
      </strong> 
              {hint}
            </p>
          ))}
        </div>
      
      </motion.div>
      <div>
        <button
          onClick={previousCharacter}
          className="mt-6 mr-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Card Anterior
        </button>
        <button
          onClick={nextCharacter}
          className="mt-6 ml-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Próximo Card
        </button>
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

export default BibleCard;
