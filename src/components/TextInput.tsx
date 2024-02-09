import type { ComponentPropsWithoutRef } from 'react';
import FormLabel from './FormLabel';
import camelCase from 'camelcase';

// Cpncept o frest props based on:https://mortenbarklund.com/blog/react-typescript-props-spread/
export interface TextInputProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
  autocomplete?: string;
  type: 'text' | 'password' | 'email';
}

const TextInput = ({ label, ...rest }: TextInputProps) => {
  return (
    <>
      <FormLabel label={label} />
      <input
        className="input w-full max-w-xs"
        id={camelCase(label)}
        name={camelCase(label)}
        {...rest}
      />
    </>
  );
};
export default TextInput;
