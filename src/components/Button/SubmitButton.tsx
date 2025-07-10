'use client';

import { useRouter } from 'next/navigation';
import { GoPlus } from 'react-icons/go';

interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'button' | 'add' | 'go';
}

const SubmitButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = 'button',
}) => {
  const router = useRouter();

  if (variant === 'add') {
    return (
      <button className="btn btn-add" onClick={onClick}>
        <GoPlus className="icon-arrow" />
      </button>
    );
  }

  if (variant === 'go') {
    return (
      <button  onClick={() => router.push('/blog/login')} >
        Login
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
