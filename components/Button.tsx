import camelCase from 'camelcase';

export interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return <button className="btn btn-info btn-wide">{label}</button>;
};
export default Button;
