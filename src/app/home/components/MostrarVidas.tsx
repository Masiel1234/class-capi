'use client'; 

import { useVidas } from '@/app/home/context/VidasContext'

export default function MostrarVidas(){
  const { vidas, perderVida, reiniciarVidas } = useVidas();

  return (
    <div className="p-4 bg-white text-black rounded shadow-md max-w-sm">
      <h2 className="text-lg font-bold mb-2">❤️ Vidas: {vidas}</h2>
      <div className="flex gap-2">
        <button
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          onClick={perderVida}
        >
          Perder vida
        </button>
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          onClick={reiniciarVidas}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
};
