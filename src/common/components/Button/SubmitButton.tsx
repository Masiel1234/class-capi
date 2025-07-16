'use client';

import { useRouter } from 'next/navigation';
import { GoPlus } from 'react-icons/go';
import { GoArrowLeft } from 'react-icons/go';


interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'button' | 'add' | 'go' | 'return';
  to?: string;
}

const SubmitButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = 'button',
  to
}) => {

  const router = useRouter();
  let btnELement: React.ReactElement = <></>;

  switch (variant) {
    case "return":
      btnELement =
        <button onClick={() => history.back()}>
          {text}
          <GoArrowLeft className="btn-return" />
        </button>
      break;

    case "add":
      btnELement =
        <button className="btn btn-add" onClick={onClick}>
          {text}
          <GoPlus className="icon-plus" />
        </button>
      break;

    case "go":
      btnELement =
        <button className='btn-go' onClick={() => to && router.push(to)}>
          {text}
        </button>
  }



  return btnELement;
};

export default SubmitButton;
