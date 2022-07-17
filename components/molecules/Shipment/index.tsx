import React, { useState } from 'react';
import { Title } from '@atom/Title';
import { Option } from '@molecule/Option';
import { ScShipmentContainer, ScShipment } from './styled';

const example = [
  {
    id: 1,
    title: 'GO-SEND',
    number: '15,000',
    deliveryEstimate: 'today',
    value: 15000,
  },
  {
    id: 2,
    title: 'JNE',
    number: '9,000',
    deliveryEstimate: '2 days',
    value: 9000,
  },
  {
    id: 3,
    title: 'Personal Courier',
    number: '29,000',
    deliveryEstimate: '1 day',
    value: 29000,
  },
];

export const Shipment = () => {
  const [state, setState] = useState<number>(example[0].value);

  const handleShipment = (payload: number) => {
    setState(payload);
    console.log('handleShipment');
  };

  return (
    <ScShipmentContainer>
      <Title text="Shipment" size="large" />
      <ScShipment>
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
      </ScShipment>
    </ScShipmentContainer>
  );
};
