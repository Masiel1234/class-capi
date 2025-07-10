import React from 'react';
import { GetServerSideProps } from 'next';
import Button from '@/components/Button/SubmitButton'
interface Pregunta {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface Props {
  preguntas: Pregunta[];
}


export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    'https://opentdb.com/api.php?amount=50&category=31&difficulty=medium&type=multiple'
  );
  const data = await res.json();

  return {
    props: {
      preguntas: data.results,
    },
  };
};

const AnimeTrivia: React.FC<Props> = ({ preguntas }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Preguntas de Anime</h1>
      <ul className="space-y-4">
        {preguntas.map((pregunta, index) => (
          <li key={index} className="border rounded-lg p-4 shadow-md bg-white">
            <h2 className="font-semibold text-lg mb-2">
              {decodeURIComponent(pregunta.question)}
            </h2>
            <ul className="list-disc ml-5">
              {[...pregunta.incorrect_answers, pregunta.correct_answer]
                .sort(() => Math.random() - 0.5)
                .map((opcion, idx) => (
                  <li key={idx}>{decodeURIComponent(opcion)}</li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
      <Button  text='' variant='add'/>
    </div>
  );
};



export default AnimeTrivia;
