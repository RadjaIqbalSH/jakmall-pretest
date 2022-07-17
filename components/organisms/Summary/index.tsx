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
    <ScSummaryContainer className="w-fit min-h-460 flex flex-col justify-between border-l-2 border-orange-500 pl-20 pt-20">
      <ScSummaryTop className="flex-grow w-260 h-fit flex flex-col">
        <Title className="" text="Summary" size="medium" />
        <Description className="mt-10 mb-21" label1="10 items purchased" />
        <Description className="mb-21" label1="Delivery estimation" label2="today by GO-SEND" />
        <Description label1="Payment method" label2="Bank Transfer" underLine={false} />
      </ScSummaryTop>
      <ScSummaryBottom className="w-260 flex-none h-fit pt-13">
        <ScSummaryBillContainer className="flex flex-col space-y-13">
          <ScSummaryBill className="flex items-center justify-between">
            <ScSummaryBillLabel className="text-black-900 text-opacity-60">
              Cost of goods
            </ScSummaryBillLabel>
            <ScSummaryBillDescription className="text-black-900 font-bold">
              500,000
            </ScSummaryBillDescription>
          </ScSummaryBill>
          <ScSummaryBill className="flex items-center justify-between">
            <ScSummaryBillLabel className="text-black-900 text-opacity-60">
              Dropshipping Fee
            </ScSummaryBillLabel>
            <ScSummaryBillDescription className="text-black-900 font-bold">
              5,900
            </ScSummaryBillDescription>
          </ScSummaryBill>
          <ScSummaryBill className="flex items-center justify-between">
            <div className="flex">
              <ScSummaryPriceLabel2 className="font-bold mr-4 text-black-900 text-opacity-60">
                GO-SEND
              </ScSummaryPriceLabel2>
              <ScSummaryBillLabel className="text-black-900 text-opacity-60">
                shipment
              </ScSummaryBillLabel>
            </div>
            <ScSummaryBillDescription className="text-black-900 font-bold">
              500,000
            </ScSummaryBillDescription>
          </ScSummaryBill>
        </ScSummaryBillContainer>
        <ScSummaryPriceContainer className="flex items-center justify-between mt-24 mb-10">
          <ScSummaryPriceLabel className="text-24 text-orange-500 font-bold">
            Total
          </ScSummaryPriceLabel>
          <ScSummaryPriceDescription className="text-24 text-orange-500 font-bold">
            505,900
          </ScSummaryPriceDescription>
        </ScSummaryPriceContainer>
        <Button className="mt-20" label="Pay with e-Wallet" />
      </ScSummaryBottom>
    </ScSummaryContainer>
  );
};
