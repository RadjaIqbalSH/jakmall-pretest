import React, { FC } from "react";
import { ScStep, ScStepNumber, ScStepLabel, ScStepIcon } from "./styled";

interface IStepProps {
	active: boolean;
	number: string;
	label: string;
	icon?: boolean;
}

export const Step: FC<IStepProps> = ({ active, number, label, icon = true }) => {
	return (
		<ScStep>
			<ScStepNumber isActive={active}>{number}</ScStepNumber>
			<ScStepLabel>{label}</ScStepLabel>
			{icon && <ScStepIcon>keyboard_arrow_right</ScStepIcon>}
		</ScStep>
	);
};
