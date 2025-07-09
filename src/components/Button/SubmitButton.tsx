'use client'

interface ButtonProps{
  text: string
}



export default function SubmitButton ({text}:ButtonProps ):React.ReactElement   {
    
    return(
    <>
    <div>
    <button
      type="submit"> 
       hola
    </button>
  </div>
  </>
    );
  
};

