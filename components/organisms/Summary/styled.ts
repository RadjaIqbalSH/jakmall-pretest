import tw from 'twin.macro';

export const ScSummaryContainer = tw.div`w-full md:w-300 min-h-550 flex flex-col justify-between border-l-2 border-orange-500 pl-20 pt-20 border-opacity-20`;
export const ScSummaryTop = tw.div`flex-grow w-full h-fit flex flex-col`;
export const ScSummaryBottom = tw.div`w-full flex-none h-fit pt-13`;
export const ScSummaryBillContainer = tw.div`flex flex-col space-y-13`;
export const ScSummaryBill = tw.div`flex items-center justify-between`;
export const ScSummaryBillLabel = tw.div`text-black-900 text-opacity-60`;
export const ScSummaryBillDescription = tw.div`text-black-900 font-bold`;
export const ScSummaryPriceContainer = tw.div`flex items-center justify-between mt-24 mb-10`;
export const ScSummaryPriceLabel = tw.div`text-24 text-orange-500 font-bold`;
export const ScSummaryPriceLabel2 = tw.div`font-bold mr-4 text-black-900 text-opacity-60`;
export const ScSummaryPriceDescription = tw.div`text-24 text-orange-500 font-bold`;
