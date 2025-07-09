'use client';
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RedirectById() {
  const router = useRouter();

  useEffect(() => {
    const search = window.location.pathname.split("/").pop();
    const id = Number(search);
    
    const diccionario: Record<number, string> = {
      1: '/home/category/isekai',
      2: '/home/category/shonen',
      3: '/home/category/shojo',
    };

    const target = diccionario[id];
    if (target) {
      router.push(target);
    }
  }, []);

  return <p className="p-8">Cargando...</p>;
}
