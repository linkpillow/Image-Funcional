"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const acessarGaleria = () => {
    router.push("/galeria");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-50 p-6 relative overflow-hidden">
      <img
        src="/galinha.jpg"
        alt="Foto de perfil"
        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg mb-5 relative z-10"
      />
      <h1 className="text-3xl font-bold text-indigo-900 mb-4 relative z-10">
        🚀 Voo Espacial! 🪐
      </h1>

      {/* Elementos Espaciais Decorativos em Tons Pastel */}
      <div className="absolute top-10 left-10 w-12 h-12 rounded-full bg-[#D8B4FE] opacity-90 shadow-[2px_3px_0px_rgba(50,30,80,0.15)] rotate-12 flex items-center justify-center">
        <div className="absolute w-16 h-4 border-2 border-[#C084FC] rounded-full -rotate-12 opacity-80"></div>
      </div>

      <div className="absolute top-20 right-20 w-8 h-8 bg-[#FDE047] opacity-85 shadow-[2px_3px_0px_rgba(50,30,80,0.15)] rotate-45 flex items-center justify-center rounded-sm">
        <div className="absolute w-2 h-8 bg-[#FEF08A] rounded-full"></div>
      </div>

      <div className="absolute top-1/3 left-20 w-10 h-10 rounded-full bg-[#BAE6FD] opacity-85 shadow-[2px_3px_0px_rgba(50,30,80,0.15)] rotate-6">
        <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-[#E0F2FE] opacity-70"></div>
      </div>

      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-[#FDE047] opacity-80 shadow-[2px_3px_0px_rgba(50,30,80,0.15)] -rotate-6 rounded-sm"></div>

      <div className="absolute top-1/2 left-1/3 w-9 h-9 rounded-full bg-[#FECDD3] opacity-85 shadow-[2px_3px_0px_rgba(50,30,80,0.15)] rotate-12 flex items-center justify-center">
        <div className="absolute w-14 h-3 border-2 border-[#FDA4AF] rounded-full rotate-45 opacity-80"></div>
      </div>

      <div className="absolute top-1/2 right-10 w-11 h-11 rounded-full bg-[#DDD6FE] opacity-85 shadow-[2px_3px_0px_rgba(50,30,80,0.15)] -rotate-12">
        <div className="absolute top-2 left-3 w-3 h-2 rounded-full bg-[#C4B5FD] opacity-80"></div>
      </div>

      <div className="absolute bottom-20 left-16 w-7 h-7 bg-[#FEF08A] opacity-85 shadow-[2px_3px_0px_rgba(50,30,80,0.15)] rotate-6 rounded-sm"></div>

      <div className="absolute bottom-10 right-20 w-9 h-9 rounded-full bg-[#A7F3D0] opacity-80 shadow-[2px_3px_0px_rgba(50,30,80,0.15)] -rotate-6">
        <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#D1FAE5] opacity-70"></div>
      </div>

      <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-[#FDE047] opacity-80 shadow-[2px_3px_0px_rgba(50,30,80,0.15)] rotate-12 rounded-sm"></div>

      <div className="absolute bottom-1/4 right-1/3 w-7 h-7 rounded-full bg-[#FED7AA] opacity-85 shadow-[2px_3px_0px_rgba(50,30,80,0.15)] -rotate-12"></div>

      <div className="absolute top-16 left-1/2 w-5 h-5 bg-[#FEF08A] opacity-80 shadow-[2px_3px_0px_rgba(50,30,80,0.15)] rotate-6 rounded-sm"></div>

      <div className="absolute bottom-16 right-1/2 w-10 h-10 rounded-full bg-[#BAE6FD] opacity-80 shadow-[2px_3px_0px_rgba(50,30,80,0.15)] rotate-12"></div>

      {/* Botão corrigido usando a referência da função corretamente */}
      <button
        onClick={acessarGaleria}
        className="relative z-10 px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
      >
        Acesse a galeria
      </button>
    </div>
  );
}