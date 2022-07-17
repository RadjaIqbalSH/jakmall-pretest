import React, { FC } from "react";
import { ScCard } from "./styled";

interface ICardProps {
	children: React.ReactNode;
}

export const Card: FC<ICardProps> = ({ children }) => {
	return <ScCard>{children}</ScCard>;
};
