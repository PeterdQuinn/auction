import camelCase from 'camelcase';

export interface ButtonProps {
  label: string;
  color: 'neutral' | 'primary' | 'secondary' | 'accent' | 'ghost';
  isWide: boolean;
}

const Button = ({ label, color }: ButtonProps) => {
  return <button className={`btn btn-{color} btn-wide`}>{label}</button>;
};
export default Button;
