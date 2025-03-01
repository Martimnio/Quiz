"use client"
import Link from "next/link"; 
import { motion } from "framer-motion"; 

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-[#106EBE] to-[#0E4A8A]">
      <h1 className="text-4xl font-bold mb-8 text-white font-sans">Quiz Bíblico</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl px-4">
        <Link href="/pages/easy" className="card transform transition-transform hover:scale-105">
          <div className="p-8 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl shadow-2xl hover:shadow-3xl transition-all">
            <h2 className="text-2xl font-bold">Fácil</h2>
            <p>Teste seus conhecimentos com perguntas simples.</p>
          </div>
        </Link>
        <Link href="/pages/medium" className="card transform transition-transform hover:scale-105">
          <div className="p-8 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-xl shadow-2xl hover:shadow-3xl transition-all">
            <h2 className="text-2xl font-bold">Médio</h2>
            <p>Desafie-se com perguntas mais difíceis.</p>
          </div>
        </Link>
        <Link href="/pages/hard" className="card transform transition-transform hover:scale-105">
          <div className="p-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl shadow-2xl hover:shadow-3xl transition-all">
            <h2 className="text-2xl font-bold">Difícil</h2>
            <p>Somente para os especialistas!</p>
          </div>
        </Link>
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
}
