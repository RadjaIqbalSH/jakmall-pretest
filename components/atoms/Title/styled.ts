import tw from 'twin.macro';
import styled from 'styled-components';

interface IScTitle {
  size: 'medium' | 'large';
  className?: string;
}

export const ScTitle = styled.h1<IScTitle>(({ className, size }) => [
  tw`font-bold font-monts text-orange-500 `,
  className && className,
  size === 'medium' && tw`text-24`,
  size === 'large' && tw`text-36 relative z-10`,
]);

export const ScTitleUnderline = tw.div`w-300 h-8 bg-black-100 absolute bottom-10 -z-10`;
