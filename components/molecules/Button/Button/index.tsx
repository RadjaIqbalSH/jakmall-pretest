import React, { FC, ButtonHTMLAttributes } from 'react';
import { ScButton } from './styled';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label: string;
  onClick?: () => void;
}

export const Button: FC<IButtonProps> = ({ className, label, onClick, ...restProps }) => {
  return (
    <ScButton className={className} onClick={onClick} type="submit" {...restProps}>
      {label}
    </ScButton>
  );
};
