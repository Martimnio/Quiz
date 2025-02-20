"use client"
import Link from "next/link"; 

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-[#106EBE] to-[#0E4A8A]">
      <h1 className="text-4xl font-bold mb-8 text-white font-sans">Jogos Bíblicos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl px-4">
        <Link href="/quiz" className="card transform transition-transform hover:scale-105">
          <div className="p-8 bg-green-500 text-white rounded-xl shadow-2xl hover:shadow-3xl transition-all">
            <h2 className="text-2xl font-bold mb-4">Quiz Bíblico</h2>
            <p className="text-lg">Teste seus conhecimentos com perguntas simples.</p>
          </div>
        </Link>
        <Link href="/cards" className="card transform transition-transform hover:scale-105">
          <div className="p-8 bg-yellow-600 text-white rounded-xl shadow-2xl hover:shadow-3xl transition-all">
            <h2 className="text-2xl font-bold mb-4">Cards bíblicos</h2>
            <p className="text-lg">Desafie-se com os cards de personagens da Bíblia.</p>
          </div>
        </Link>
        <Link href="/qualText" className="card transform transition-transform hover:scale-105">
          <div className="p-8 bg-blue-600 text-white rounded-xl shadow-2xl hover:shadow-3xl transition-all">
            <h2 className="text-2xl font-bold mb-4">Qual é o texto?</h2>
            <p className="text-lg">Teste sua memória e decore os textos da Bíblia.</p>
          </div>
        </Link>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4">
          <p className="text-white">®Pedro Soares - <a href="https://pesoares.com.br/">Clique aqui para meu site pessoal</a></p>
        </div>
      </div>
    </div>

  );
}