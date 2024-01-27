import camelCase from 'camelcase';
import { ReactNode } from 'react';

export interface FormLabelProps {
  label: string;
  children?: ReactNode;
}

const FormLabel = ({ label }: FormLabelProps) => {
  return (
    <label
      id={camelCase(label)}
      htmlFor={camelCase(label)}
      className="text-lg font-semibold leading-tight cursor-pointer"
    >
      {label}
    </label>
  );
};
export default FormLabel;
