import camelCase from 'camelcase';

export interface FormLabelProps {
  label: string;
}

const Button = ({ label }: FormLabelProps) => {
  return <button className="btn btn-secondary">{label}</button>;
};
export default Button;
