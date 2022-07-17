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

export const Summary = () => {
  return (
    <ScSummaryContainer>
      <ScSummaryTop>
        <Title className="" text="Summary" size="medium" />
        <Description className="mt-10 mb-21" label1="10 items purchased" />
        <Description className="mb-21" label1="Delivery estimation" label2="today by GO-SEND" />
        <Description label1="Payment method" label2="Bank Transfer" underLine={false} />
      </ScSummaryTop>
      <ScSummaryBottom>
        <ScSummaryBillContainer>
          <ScSummaryBill>
            <ScSummaryBillLabel>Cost of goods</ScSummaryBillLabel>
            <ScSummaryBillDescription>500,000</ScSummaryBillDescription>
          </ScSummaryBill>
          <ScSummaryBill>
            <ScSummaryBillLabel>Dropshipping Fee</ScSummaryBillLabel>
            <ScSummaryBillDescription>5,900</ScSummaryBillDescription>
          </ScSummaryBill>
          <ScSummaryBill>
            <div className="flex">
              <ScSummaryPriceLabel2>GO-SEND</ScSummaryPriceLabel2>
              <ScSummaryBillLabel>shipment</ScSummaryBillLabel>
            </div>
            <ScSummaryBillDescription>500,000</ScSummaryBillDescription>
          </ScSummaryBill>
        </ScSummaryBillContainer>
        <ScSummaryPriceContainer>
          <ScSummaryPriceLabel>Total</ScSummaryPriceLabel>
          <ScSummaryPriceDescription>505,900</ScSummaryPriceDescription>
        </ScSummaryPriceContainer>
        <Button className="mt-20" label="Continue to Payment" />
      </ScSummaryBottom>
    </ScSummaryContainer>
  );
};
