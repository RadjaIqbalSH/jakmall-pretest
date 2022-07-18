import React, { useState } from 'react';
import { Title } from '@atom/Title';
import { Option } from '@molecule/Option';
import { ScShipmentContainer, ScShipment } from './styled';

import { useSelector, useDispatch } from 'react-redux';
import { selectPayment, setShipment } from '@store/payment';

const example = [
  {
    id: 'GS',
    title: 'GO-SEND',
    number: '15,000',
    deliveryEstimate: 'today',
    value: 15000,
  },
  {
    id: 'JNE',
    title: 'JNE',
    number: '9,000',
    deliveryEstimate: '2 days',
    value: 9000,
  },
  {
    id: 'PC',
    title: 'Personal Courier',
    number: '29,000',
    deliveryEstimate: '1 day',
    value: 29000,
  },
];

export const Shipment = () => {
  const {
    data: { shipment },
  } = useSelector(selectPayment);
  const dispatch = useDispatch();

  const handleShipment = (payload: any) => {
    dispatch(
      setShipment({
        shipmentDescription: payload.title,
        shipmentFee: payload.value,
        shipmentId: payload.id,
        deleveryEsimate: payload.deliveryEstimate,
      }),
    );
  };

  return (
    <ScShipmentContainer>
      <Title text="Shipment" size="large" />
      <ScShipment>
        {example.map((e) => {
          return (
            <Option
              key={e.id}
              active={shipment.shipmentId === e.id}
              title={e.title}
              number={e.number}
              onClick={() => handleShipment(e)}
            />
          );
        })}
      </ScShipment>
    </ScShipmentContainer>
  );
};
