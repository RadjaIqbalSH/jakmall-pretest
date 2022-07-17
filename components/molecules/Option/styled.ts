import tw from 'twin.macro';
import styled from 'styled-components';

interface IScOption {
  active: boolean;
}

interface IScOptionAlert {
  active: boolean;
}

interface IScOptionTitle {
  active: boolean;
  description: boolean;
}

interface IScOptionLabel {
  active: boolean;
}

export const ScOption = styled.button<IScOption>(({ active }) => [
  tw`w-full xl:w-180 h-60 px-15 flex items-center transition-all duration-500`,
  active ? tw`border-2 border-green-500 bg-green-500 bg-opacity-20` : tw`border-2 border-black-200`,
]);
export const ScOptionDescription = tw.div`w-full flex flex-col justify-start`;
export const ScOptionAlert = styled.div<IScOptionAlert>(({ active }) => [
  tw`font-mat text-18`,
  active ? tw`text-green-500` : tw`text-black-200`,
]);
export const ScOptionTitle = styled.p<IScOptionTitle>(({ active, description }) => [
  tw`w-fit font-medium`,
  !active && tw`text-black-900 text-opacity-60`,
  description ? tw`text-13` : tw`text-16`,
]);
export const ScOptionLabel = styled.p<IScOptionLabel>(({ active }) => [
  tw`w-fit text-16 font-bold`,
  !active && tw`text-black-300 text-opacity-60`,
]);
