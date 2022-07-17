import React, { FC } from 'react';
import { ScButtonBack, ScButtonBackIcon, ScButtonBackText } from './styled';

interface IButtonBackProps {
  text?: string;
  onClick?: () => void;
}

export const ButtonBack: FC<IButtonBackProps> = ({ text, onClick }) => {
  return (
    <ScButtonBack onClick={onClick}>
      <ScButtonBackIcon>arrow_back</ScButtonBackIcon>
      <ScButtonBackText>{text ? text : 'Back to cart'}</ScButtonBackText>
    </ScButtonBack>
  );
};
