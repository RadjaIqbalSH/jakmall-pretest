import tw from 'twin.macro';
import styled from 'styled-components';

interface IScInputContainer {
  isValid: boolean;
  isFocused: boolean;
}

interface IScInputLabel {
  focus: boolean;
  isValid: boolean;
  isFocused: boolean;
}

interface IScInputField {
  focus: boolean;
}

interface IScAlert {
  isValid: boolean;
}

export const ScInputContainer = styled.div<IScInputContainer>(({ isValid, isFocused }) => [
  tw`w-full h-60 px-15 flex items-center border-1 bg-white transition-all cursor-text`,
  isFocused ? (isValid ? tw`border-green-500` : tw`border-orange-500`) : tw`border-black-200`,
]);

export const ScInput = tw.div`w-full h-fit flex flex-col`;

export const ScInputLabel = styled.label<IScInputLabel>(({ focus, isValid, isFocused }) => [
  tw`transition-all duration-300`,
  focus ? tw`text-13` : tw`text-16`,
  isFocused
    ? isValid
      ? tw`text-green-500 text-opacity-80`
      : tw`text-orange-500 text-opacity-40`
    : tw`text-black-200`,
]);

export const ScInputField = styled.input<IScInputField>(({ focus }) => [
  tw`w-full text-16 font-bold appearance-none outline-none bg-white transition-height duration-300`,
  focus ? tw`h-24` : tw`h-0`,
]);

export const ScAlert = styled.label<IScAlert>(({ isValid }) => [
  tw`font-mat`,
  isValid ? tw`text-green-500` : tw`text-orange-500`,
]);
