import { Shipment, Payment } from '@molecule';
import { ScPaymentStepContainer } from './styled';
import { useSelector } from 'react-redux';
import { selectPayment } from '@store/payment';

export const PaymentStep = () => {
  const {
    data: { deliveryDetails },
  } = useSelector(selectPayment);

  return (
    <ScPaymentStepContainer>
      <Shipment />
      <Payment />
    </ScPaymentStepContainer>
  );
};
