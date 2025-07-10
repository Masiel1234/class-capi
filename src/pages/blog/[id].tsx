import { useRouter } from "next/router";
import { useEffect } from "react";


export default function Loquesea(){
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
        const numerId = typeof id === 'string' ? Number(id) : Array.isArray(id) ? Number(id[0]) :NaN;
        const diccionario: Record<number,string> ={
            1: '/blog/category/pop',
            2: '/blog/category/rock',
            3: '/blog/category/k-pop',
        };
        const target = diccionario[numerId];
        if(target){
            router.replace(target);
            return;
        }
    })
    return <p className="p-8">Cargando...</p>
}