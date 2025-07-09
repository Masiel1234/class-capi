
export default function Peticion(){
    
   const res = fetch('https://jsonplaceholder.typicode.com/posts')
      res.then((res) => (console.log('Status:', res.status), res.json()))
      .then(json => console.log(json))

  return (
    <div className="bg-black text-white p-4"> <h1 className="text-3xl font-bold text-amber-400 mb-4 text-center">Peticiones</h1></div>
  )
}
