import tw from "twin.macro";
import styled from "styled-components";

interface IScStep {
	isActive: boolean;
}

export const ScStep = tw.div`w-fit h-fit flex items-center`;
export const ScStepNumber = styled.div<IScStep>(({ isActive }) => [
	tw`w-30 h-30 rounded-full bg-orange-500 grid place-content-center mr-10 transition-all duration-500 ease-in-out`,
	isActive ? tw`bg-opacity-100 text-white` : tw`bg-opacity-20 text-orange-500`,
]);
export const ScStepLabel = tw.p`text-orange-500 text-16`;
export const ScStepIcon = tw.p`ml-22 text-24 leading-none font-mat text-orange-500`;
