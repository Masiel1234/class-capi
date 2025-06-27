import { useRouter } from "next/router";


export default function Loquesea(){
    const router = useRouter();
    const { id } = router.query;
    return(
        <div>
            hola usuario:{id}
        </div>
    )
}