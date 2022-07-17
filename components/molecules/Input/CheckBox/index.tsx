import { useEffect, useState } from 'react';
import { ScCheckBoxContainer, ScCheckBox, ScCheckBoxIcon, ScCheckBoxLabel } from './styled';

interface ICheckBoxProps {
  label: string;
  value: (payload: boolean) => void;
}

export const CheckBox = ({ label, value }: ICheckBoxProps) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    value(checked);
  }, [checked]);
  return (
    <ScCheckBoxContainer onClick={() => setChecked(!checked)}>
      <ScCheckBox>{checked && <ScCheckBoxIcon>check</ScCheckBoxIcon>}</ScCheckBox>
      <ScCheckBoxLabel>{label}</ScCheckBoxLabel>
    </ScCheckBoxContainer>
  );
};
