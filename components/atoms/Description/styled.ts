import tw from 'twin.macro';
import styled from 'styled-components';

interface IScDescriptionLabel1 {
  type: 'primary' | 'scondary';
}
interface IScDescriptionWrapper {
  className: string | undefined;
}

export const ScDescriptionWrapper = styled.div<IScDescriptionWrapper>(({ className }) => [
  tw`w-fit h-fit`,
  className,
]);
export const ScDescriptionLabel1 = styled.p<IScDescriptionLabel1>(({ type }) => [
  type === 'primary' ? tw`text-14 text-black-900` : tw`pb-21 text-14 text-black-900 opacity-60`,
]);
export const ScDescriptionLabel2 = tw.p`text-green-500 font-medium pb-21`;
export const ScDescriptionUderline = tw.div`w-80 border-b-1 border-black-200`;
