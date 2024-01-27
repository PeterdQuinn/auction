import React from 'react';
import FormLabel from './FormLabel';
import camelCase from 'camelcase';

export interface TextInputProps {
  autocomplete?: string;
  label: string;
  type: string;
}

const TextInout = ({ autocomplete, label, type }: TextInputProps) => {
  return (
    <>
      <FormLabel label={label} />
      <input
        autoComplete={autocomplete}
        className="input w-full max-w-xs"
        id={camelCase(label)}
        name={camelCase(label)}
        type={type}
        required
      />
    </>
  );
};
export default TextInout;
