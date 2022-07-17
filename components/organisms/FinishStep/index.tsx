import React from 'react';
import { Title } from '@atom';
import { ButtonBack } from '@molecule';
import {
  ScFinishStepContainer,
  ScFinishStep,
  ScFinishStepOrderId,
  ScFinishStepDeliveryStatus,
} from './styled';

export const FinishStep = () => {
  return (
    <ScFinishStepContainer>
      <ScFinishStep>
        <Title text="Thank you" size="large" />
        <ScFinishStepOrderId>Order ID : XXKYB</ScFinishStepOrderId>
        <ScFinishStepDeliveryStatus>
          Your order will be delivered today with GO-SEND
        </ScFinishStepDeliveryStatus>
        <ButtonBack text="Go to homepage" />
      </ScFinishStep>
    </ScFinishStepContainer>
  );
};
