'use client';
import { useState, useEffect } from 'react';

export default function Contador() {
  const [contador, setContador] = useState(0);
  useEffect(() => {
    const intervalo = setInterval(() => {
      setContador((prevContador) => prevContador + 1);
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">Contador: {contador}</h1>
    </div>
  );
}
