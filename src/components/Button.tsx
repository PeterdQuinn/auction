import camelCase from 'camelcase';

export interface ButtonProps {
  label: string;
  color: 'neutral' | 'primary' | 'secondary' | 'accent' | 'ghost';
  isWide?: boolean;
}

const Button = ({ label, color, isWide }: ButtonProps) => {
  const buttonClasses = `btn btn-${color}${isWide ? ' btn-wide' : ''}`;
  return <button className={buttonClasses}>{label}</button>;
};
export default Button;
