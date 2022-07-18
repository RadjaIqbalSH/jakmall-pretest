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
import { useSelector, useDispatch } from 'react-redux';
import { selectPayment, setDropshipperFee } from '@store/payment';

export const DeliveryStep = () => {
  const { step, data } = useSelector(selectPayment);
  const dispatch = useDispatch();
  return (
    <ScDeliveryStepContainer>
      <ScDeliveryStepTop>
        <Title text="Delivery details" size="large" />
        <CheckBox
          label="Send as dropshipper"
          value={(payload) =>
            payload ? dispatch(setDropshipperFee(5900)) : dispatch(setDropshipperFee(0))
          }
        />
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
