import React, { FC } from 'react';
import {
  ScDescriptionWrapper,
  ScDescriptionLabel1,
  ScDescriptionLabel2,
  ScDescriptionUderline,
} from './styled';

interface IDescription {
  className?: string;
  label1: string;
  label2?: string;
  underLine?: boolean;
}

export const Description: FC<IDescription> = ({ className, label1, label2, underLine = true }) => {
  return (
    <ScDescriptionWrapper className={className}>
      {label2 ? (
        <>
          <ScDescriptionLabel1 type="primary">{label1}</ScDescriptionLabel1>
          <ScDescriptionLabel2>{label2}</ScDescriptionLabel2>
        </>
      ) : (
        <ScDescriptionLabel1 type="scondary">{label1}</ScDescriptionLabel1>
      )}
      {underLine && <ScDescriptionUderline></ScDescriptionUderline>}
    </ScDescriptionWrapper>
  );
};
