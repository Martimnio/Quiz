"use client"
import Link from "next/link"; // Para Next.js (Se for Vite, use <a> com href direto)

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-black">Jogos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/quiz" className="card">
          <div className="p-6 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition">
            <h2 className="text-2xl font-bold">Quiz Bíblico</h2>
            <p>Teste seus conhecimentos com perguntas simples.</p>
          </div>
        </Link>
        <Link href="/cards" className="card">
          <div className="p-6 bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition">
            <h2 className="text-2xl font-bold">Cards bíblicos</h2>
            <p>Desafie-se com os cards de personagens da Bíblia.</p>
          </div>
        </Link>
        <Link href="/qualText" className="card">
          <div className="p-6 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition">
            <h2 className="text-2xl font-bold">Qual é o texto?</h2>
            <p>Teste sua memória com os textos da Bíblia.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
