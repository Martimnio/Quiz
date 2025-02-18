"use client"
import Link from "next/link"; // Para Next.js (Se for Vite, use <a> com href direto)

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Quiz Bíblico</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/pages/easy" className="card">
          <div className="p-6 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition">
            <h2 className="text-2xl font-bold">Fácil</h2>
            <p>Teste seus conhecimentos com perguntas simples.</p>
          </div>
        </Link>
        <Link href="/pages/medium" className="card">
          <div className="p-6 bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition">
            <h2 className="text-2xl font-bold">Médio</h2>
            <p>Desafie-se com perguntas mais difíceis.</p>
          </div>
        </Link>
        <Link href="/pages/hard" className="card">
          <div className="p-6 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition">
            <h2 className="text-2xl font-bold">Difícil</h2>
            <p>Somente para os especialistas!</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
