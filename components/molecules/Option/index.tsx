import React, { ButtonHTMLAttributes, FC } from 'react';
import {
  ScOption,
  ScOptionDescription,
  ScOptionAlert,
  ScOptionTitle,
  ScOptionLabel,
} from './styled';

interface IOptionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
  title: string;
  number?: string;
  onClick?: () => void;
}

export const Option: FC<IOptionProps> = ({ active, title, number, onClick, ...restProps }) => {
  return (
    <ScOption active={active} onClick={onClick} {...restProps}>
      <ScOptionDescription className="w-full flex flex-col justify-start">
        <ScOptionTitle active={active} description={number ? true : false}>
          {title}
        </ScOptionTitle>
        {number && <ScOptionLabel active={active}>{number}</ScOptionLabel>}
      </ScOptionDescription>
      {active && <ScOptionAlert active={active}>check</ScOptionAlert>}
    </ScOption>
  );
};
