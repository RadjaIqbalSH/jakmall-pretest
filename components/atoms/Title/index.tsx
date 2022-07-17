import React, { FC } from 'react';
import { ScTitleUnderline, ScTitle } from './styled';

interface ITitleProps {
  text: string;
  className?: string;
  size: 'medium' | 'large';
}

export const Title: FC<ITitleProps> = ({ text, className, size }) => {
  return (
    <ScTitle className={className} size={size}>
      {text}
      {size === 'large' && <ScTitleUnderline />}
    </ScTitle>
  );
};
