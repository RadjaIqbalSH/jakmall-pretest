import { Title, Description } from '@atom';
import { Button } from '@molecule';
import {
  ScSummaryContainer,
  ScSummaryTop,
  ScSummaryBottom,
  ScSummaryBillContainer,
  ScSummaryBill,
  ScSummaryBillLabel,
  ScSummaryPriceLabel2,
  ScSummaryBillDescription,
  ScSummaryPriceContainer,
  ScSummaryPriceLabel,
  ScSummaryPriceDescription,
} from './styled';

import { useSelector, useDispatch } from 'react-redux';
import { selectPayment, setIncrementStep } from '@store/payment';

export const Summary = () => {
  const { step, data } = useSelector(selectPayment);
  const dispatch = useDispatch();
  return (
    <ScSummaryContainer>
      <ScSummaryTop>
        <Title className="" text="Summary" size="medium" />
        {step >= 2 && (
          <>
            <Description className="mt-10 mb-21" label1={`${data.purcheseItems} items purchased`} />
            <Description
              className="mb-21"
              label1="Delivery estimation"
              label2={`${data.shipment.deleveryEsimate} by ${data.shipment.shipmentDescription}`}
            />
          </>
        )}
        {step === 3 && (
          <Description
            label1="Payment method"
            label2={data.payment.paymentDescription}
            underLine={false}
          />
        )}
      </ScSummaryTop>
      <ScSummaryBottom>
        <ScSummaryBillContainer>
          <ScSummaryBill>
            <ScSummaryBillLabel>Cost of goods</ScSummaryBillLabel>
            <ScSummaryBillDescription>
              {data.cost?.toLocaleString('id-ID')}
            </ScSummaryBillDescription>
          </ScSummaryBill>
          <ScSummaryBill>
            <ScSummaryBillLabel>Dropshipping Fee</ScSummaryBillLabel>
            <ScSummaryBillDescription>
              {data.dropshipperFee.toLocaleString('id-ID')}
            </ScSummaryBillDescription>
          </ScSummaryBill>
          {step >= 2 && (
            <ScSummaryBill>
              <div className="flex">
                <ScSummaryPriceLabel2>{data.shipment.shipmentDescription}</ScSummaryPriceLabel2>
                <ScSummaryBillLabel>shipment</ScSummaryBillLabel>
              </div>
              <ScSummaryBillDescription>
                {data.shipment.shipmentFee?.toLocaleString('id-ID')}
              </ScSummaryBillDescription>
            </ScSummaryBill>
          )}
        </ScSummaryBillContainer>
        <ScSummaryPriceContainer>
          <ScSummaryPriceLabel>Total</ScSummaryPriceLabel>
          <ScSummaryPriceDescription>
            {(
              data.cost +
              data.dropshipperFee +
              (step >= 2 ? data.shipment.shipmentFee : 0)
            )?.toLocaleString('id-ID')}
          </ScSummaryPriceDescription>
        </ScSummaryPriceContainer>
        {step !== 3 && (
          <Button
            className="mt-20"
            label={step === 1 ? 'Continue to Payment' : `Pay with ${data.payment.payment}`}
            onClick={() => dispatch(setIncrementStep())}
          />
        )}
      </ScSummaryBottom>
    </ScSummaryContainer>
  );
};
