import React, { FC, TextareaHTMLAttributes, useRef, useState } from 'react';
import {
  ScTextAreaContainer,
  ScTextAreaBoxLimit,
  ScTextAreaBox,
  ScTextAreaLabel,
  ScTextAreaField,
  ScTextAreaAlert,
  ScTextAreaLimit,
} from './styled';

interface IInputTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  // onChange?: (pyload: string) => void;
}

export const InputTextArea: FC<IInputTextAreaProps> = ({ label, ...restProps }) => {
  const [value, setValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const textArea = useRef<HTMLTextAreaElement>(null);
  const [focus, setFocus] = useState<boolean>(false);
  const handleFocus = () => {
    setFocus(true);
    textArea.current!.focus();
  };

  const handleBlur = () => {
    if (!isFocused) setIsFocused(true);
    if (value) return;
    setFocus(false);
  };
  return (
    <ScTextAreaContainer isFocused={isFocused} isValid={isValid} onClick={handleFocus}>
      <ScTextAreaBoxLimit>
        <ScTextAreaBox>
          <ScTextAreaLabel focus={focus} isFocused={isFocused} isValid={isValid}>
            {label}
          </ScTextAreaLabel>
          <ScTextAreaField
            ref={textArea}
            onBlur={handleBlur}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={2}
            maxLength={120}
          ></ScTextAreaField>
        </ScTextAreaBox>
        {isFocused && (
          <ScTextAreaAlert isValid={isValid}>{isValid ? 'check' : 'clear'}</ScTextAreaAlert>
        )}
      </ScTextAreaBoxLimit>
      <ScTextAreaLimit isFocused={isFocused} isValid={isValid}>
        {value.length}/120
      </ScTextAreaLimit>
    </ScTextAreaContainer>
  );
};
