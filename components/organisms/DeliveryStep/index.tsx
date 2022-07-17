import React from 'react';
import { Title } from '@atom';
import { CheckBox, Input, InputTextArea } from '@molecule';
import {
  ScDeliveryStepContainer,
  ScDeliveryStepTop,
  ScDeliveryStepBody,
  ScDeliveryStepBodyLeft,
  ScDeliveryStepBodyRight,
} from './styled';

export const DeliveryStep = () => {
  return (
    <ScDeliveryStepContainer>
      <ScDeliveryStepTop>
        <Title text="Delivery details" size="large" />
        <CheckBox label="Send as dropshipper" value={() => {}} />
      </ScDeliveryStepTop>
      <ScDeliveryStepBody>
        <ScDeliveryStepBodyLeft>
          <Input label="Name" />
          <Input label="Phone Number" />
          <InputTextArea label="Delivery Address" />
        </ScDeliveryStepBodyLeft>
        <ScDeliveryStepBodyRight className="flex-none w-2/5 h-fit flex flex-col space-y-10">
          <Input label="Dropshipper name" />
          <Input label="Dropshipper phone number" />
        </ScDeliveryStepBodyRight>
      </ScDeliveryStepBody>
    </ScDeliveryStepContainer>
  );
};
