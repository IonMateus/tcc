"use client";

import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-[radial-gradient(ellipse_at_top,_#0b0b0b_0%,_#111111_40%,_#1a1a1a_70%,_#0f1115_100%)] text-white px-8 py-12">
      <header className="fixed top-0 left-0 w-full z-50 bg-zinc-900 bg-opacity-90 backdrop-blur-sm shadow-md flex justify-between items-center px-8 py-4 text-white">
        <a href="../">
          <h1 className="text-3xl font-bold tracking-tight">Undengue-Vision</h1>
        </a>
        <nav className="flex gap-8 text-base font-medium">
          <a href="../" className="hover:underline">Home</a>
          <a href="" className="hover:underline text-blue-400">Sobre</a>
          <a href="" className="hover:underline">Testar</a>
        </nav>
      </header>

      <main className="pt-28 flex flex-col items-center">
        <section className="text-center flex flex-col items-center justify-center gap-6 mb-8">
          <h2 className="text-5xl sm:text-6xl font-bold leading-tight">Game</h2>
          <p className="max-w-xl text-zinc-300 text-base sm:text-lg">Mosquito Game</p>
        </section>

        {/* Aqui o `<iframe>` que carrega o jogo estático */}
        <div className="w-full flex justify-center">
          <iframe
            src="/game/index.html"
            className="w-[1200px] h-[700px] border-4 border-zinc-700 rounded-md shadow-lg"
            allowFullScreen
            title="Jogo Contra Dengue"
          />
        </div>
      </main>

      <footer className="bg-zinc-900 text-zinc-400 text-center py-6 mt-12 border-t border-zinc-700">
        <a
          href="https://github.com/ionmateus/tcc"
          target="_blank"
          className="underline hover:text-white"
        >
          GitHub do Projeto
        </a>
      </footer>
    </div>
  );
}
