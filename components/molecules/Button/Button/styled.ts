import tw from 'twin.macro';
import styled from 'styled-components';

interface IScButton {
  className: string | undefined;
}

export const ScButton = styled.button<IScButton>(({ className }) => [
  tw`w-260 h-60 bg-orange-500 text-white text-18 font-medium transition-all hover:bg-opacity-80`,
  className,
]);
