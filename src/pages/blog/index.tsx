import Layout from '@/pages/blog/layout'
import Button from '@/components/Button/SubmitButton'
  
export default function Blog(){
    return(
        <Layout>
           <main className="p-8">
        <h1 className="text-3xl font-bold">Bienvenido al Blog</h1>
        <p className="mt-4 text-gray-600">
          Explora las últimas categorías y artículos sobre música.
        </p>
        <a href="anime"></a>
<Button text='login' variant='go' to="/blog/login" onClick={()=>{}}></Button>
      </main>
    </Layout>
    )
}