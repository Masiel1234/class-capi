'use client';

import React from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input: React.FC<InputFieldProps> = ({ label, type, id, value, onChange, error }) => {

  return (
    <div className="group">
      <label
        htmlFor={id}
        className="label"
      >
      </label>

      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="input"/>

      {error && (
        <p className="error-messages">{error}</p>
      )}
    </div>
  );
};

export default Input;
