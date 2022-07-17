import type { NextPage } from 'next';
import { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Card, Title, Description } from '@atom';
import {
  ButtonBack,
  Input,
  InputTextArea,
  Button,
  Option,
  Shipment,
  Payment,
  CheckBox,
} from '@molecule';
import { Steps, Summary, DeliveryStep, PaymentStep, FinishStep } from '@organism';

const Home: NextPage = () => {
  return (
    <Card>
      <Steps stepsList={['Delivery', 'Peyment', 'Finish']} activeStep={1} />

      <ButtonBack />
      {/* <ButtonBack text="Back to delivery" /> */}
      <div className="w-full h-fit flex space-x-30 mt-22">
        <div className="flex-grow">
          {/* STEP 1 */}
          <DeliveryStep />
          {/* STEP 1 */}

          {/* STEP 2 */}
          {/* <PaymentStep /> */}
          {/* STEP 2 */}

          {/* STEP 3 */}
          <FinishStep />
          {/* STEP 3 */}
        </div>
        <div className="flex-none w-fit">
          <Summary />
        </div>
      </div>
    </Card>
  );
};

export default Home;
