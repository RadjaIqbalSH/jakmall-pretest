import React, { useState } from 'react';
import { Title } from '@atom/Title';
import { Option } from '@molecule/Option';
import { ScPaymentContainer, ScPayment } from './styled';

const example = [
  {
    id: 1,
    title: 'e-Wallet',
    number: '1,500,000 left',
    value: 'e-Wallet',
  },
  {
    id: 2,
    title: 'Transfer',
    value: 'Bank transfer',
  },
  {
    id: 3,
    title: 'Virtual Account',
    value: 'Virtual ACcount Transfer',
  },
];

export const Payment = () => {
  const [state, setState] = useState<string>(example[0].value);

  const handleShipment = (payload: string) => {
    setState(payload);
    console.log('handleShipment');
  };

  return (
    <ScPaymentContainer>
      <Title text="Payment" size="large" />
      <ScPayment>
        {example.map(({ id, title, number, value }) => {
          return (
            <Option
              key={id}
              active={value === state}
              title={title}
              number={number}
              onClick={() => handleShipment(value)}
            />
          );
        })}
      </ScPayment>
    </ScPaymentContainer>
  );
};
