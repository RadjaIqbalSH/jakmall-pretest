import React from 'react';
import { Title } from '@atom';
import { ButtonBack } from '@molecule';
import {
  ScFinishStepContainer,
  ScFinishStep,
  ScFinishStepOrderId,
  ScFinishStepDeliveryStatus,
} from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectPayment, resetState } from '@store/payment';

export const FinishStep = () => {
  const {
    data: { payment, shipment },
  } = useSelector(selectPayment);

  const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

  const generateString = (length: number) => {
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  };

  const dispatch = useDispatch();
  return (
    <ScFinishStepContainer>
      <ScFinishStep>
        <Title text="Thank you" size="large" />
        <ScFinishStepOrderId>Order ID : {generateString(5)}</ScFinishStepOrderId>
        <ScFinishStepDeliveryStatus>
          Your order will be delivered {shipment.deleveryEsimate} with{' '}
          {shipment.shipmentDescription}
        </ScFinishStepDeliveryStatus>
        <ButtonBack text="Go to homepage" onClick={() => dispatch(resetState())} />
      </ScFinishStep>
    </ScFinishStepContainer>
  );
};
