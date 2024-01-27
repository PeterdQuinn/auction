import camelCase from 'camelcase';
import { ReactNode } from 'react';

export interface FormLabelProps {
  label: string;
  children?: ReactNode;
}

const FormLabel = ({ label, children }: FormLabelProps) => {
  return (
    <label
      id={camelCase(label)}
      htmlFor={camelCase(label)}
      className="text-lg font-semibold leading-tight cursor-pointer me-4 flex gap-4 align-middle"
    >
      {label}
      {children}
    </label>
  );
};
export default FormLabel;
