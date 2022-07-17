import React, { FC, InputHTMLAttributes, useRef, useState } from 'react';
import { ScInputContainer, ScInput, ScInputLabel, ScInputField, ScAlert } from './styled';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: FC<IInputProps> = ({ label, ...restProps }) => {
  const [value, setValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const input = useRef<HTMLInputElement>(null);
  const [focus, setFocus] = useState<boolean>(false);
  const handleFocus = () => {
    setFocus(true);
    input.current!.focus();
  };

  const handleBlur = () => {
    if (!isFocused) setIsFocused(true);
    if (value) return;
    setFocus(false);
  };

  return (
    <ScInputContainer isFocused={isFocused} isValid={isValid} onClick={handleFocus}>
      <ScInput>
        <ScInputLabel isFocused={isFocused} focus={focus} isValid={isValid}>
          {label}
        </ScInputLabel>

        <ScInputField
          ref={input}
          type="text"
          focus={focus}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleBlur}
          {...restProps}
        />
      </ScInput>
      {isFocused && <ScAlert isValid={isValid}>{isValid ? 'check' : 'clear'}</ScAlert>}
    </ScInputContainer>
  );
};
