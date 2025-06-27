import { useRouter } from "next/router";
import Layout from "./layout";
export default function Blog(){
    const router = useRouter();
    const go = (id:number) => {
        router.push(`blog/post/${id}`)}
    return(
        <Layout>        <div>
            <button className="bg-amber-950"onClick={()=> go(1)}>pagina 1</button>
            <button onClick={()=> go(1)}>pagina 2</button>
        </div>
        </Layout>

    )
}
