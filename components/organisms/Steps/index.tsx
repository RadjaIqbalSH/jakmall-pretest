import React, { FC } from "react";
import { Step } from "@atom";
import { ScSteps } from "./styled";

interface IStepsProps {
	stepsList: string[];
	activeStep: number;
}

export const Steps: FC<IStepsProps> = ({ stepsList, activeStep }) => {
	return (
		<ScSteps>
			{stepsList.map((value: string, index: number) => {
				return <Step key={index} active={index + 1 <= activeStep} number={(index + 1).toString()} label={value} icon={index !== stepsList.length - 1} />;
			})}
		</ScSteps>
	);
};
