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
if(variant === 'return'){
  return(
<button onClick={() => history.back()}>
  <GoArrowLeft className="w-5 h-5" />
</button>
  );
};
  if (variant === 'add') {
    return (
      <button className="btn btn-add" onClick={onClick}>
        <GoPlus className="icon-arrow" />
      </button>
    );
  }

  if (variant === 'go') {
    return (
      <button className='bg-amber-400 text-white' onClick={() => to && router.push(to)}>
        {text}
      </button>
    );
  }

  return (
    <button type="submit" onClick={onClick}>
      {text}
    </button>
  );
};

export default SubmitButton;
