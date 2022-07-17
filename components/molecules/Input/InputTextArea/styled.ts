import tw from 'twin.macro';
import styled from 'styled-components';

interface IScTextAreaContainer {
  isFocused: boolean;
  isValid: boolean;
}

interface IScTextAreaLabel {
  focus: boolean;
  isValid: boolean;
  isFocused: boolean;
}
interface IScTextAreaAlert {
  isValid: boolean;
}
interface IScTextAreaLimit {
  isValid: boolean;
  isFocused: boolean;
}

export const ScTextAreaContainer = styled.div<IScTextAreaContainer>(({ isFocused, isValid }) => [
  tw`w-full min-h-120 px-15 py-10 border-1 flex flex-col justify-between`,
  isFocused ? (isValid ? tw`border-green-500` : tw`border-orange-500`) : tw`border-black-200`,
]);
export const ScTextAreaBoxLimit = tw.div`flex items-center justify-center`;
export const ScTextAreaBox = tw.div`w-full h-full flex flex-col`;
export const ScTextAreaLabel = styled.label<IScTextAreaLabel>(({ focus, isFocused, isValid }) => [
  tw`transition-all duration-300`,
  focus ? tw`text-13` : tw`text-16`,
  isFocused
    ? isValid
      ? tw`text-green-500 text-opacity-80`
      : tw`text-orange-500 text-opacity-40`
    : tw`text-black-200`,
]);
export const ScTextAreaField = tw.textarea`w-full resize-none text-16 font-bold appearance-none outline-none`;
export const ScTextAreaAlert = styled.span<IScTextAreaAlert>(({ isValid }) => [
  tw`w-fit font-mat`,
  isValid ? tw`text-green-500` : tw`text-orange-500`,
]);
export const ScTextAreaLimit = styled.p<IScTextAreaLimit>(({ isFocused, isValid }) => [
  tw`w-fit ml-auto text-13`,
  isFocused
    ? isValid
      ? tw`text-green-500 text-opacity-80`
      : tw`text-orange-500 text-opacity-40`
    : tw`text-black-200`,
]);
