import type { NextPage } from 'next';
import { Card } from '@atom';
import { ButtonBack } from '@molecule';
import { Steps, Summary, DeliveryStep, PaymentStep, FinishStep } from '@organism';
import { useSelector, useDispatch } from 'react-redux';
import { selectPayment, setDecrementStep, resetStep } from '@store/payment';

const Home: NextPage = () => {
  const { step } = useSelector(selectPayment);
  const dispatch = useDispatch();
  return (
    <Card>
      <Steps stepsList={['Delivery', 'Peyment', 'Finish']} activeStep={step} />
      {step === 1 ? (
        <ButtonBack onClick={() => dispatch(resetStep())} />
      ) : (
        step === 2 && (
          <ButtonBack text="Back to delivery" onClick={() => dispatch(setDecrementStep())} />
        )
      )}

      <div className="w-full h-fit flex flex-col md:flex-row space-y-30 md:space-x-30 mt-22">
        <div className="flex-grow">
          {/* STEP 1 */}
          {step === 1 && <DeliveryStep />}
          {/* STEP 1 */}

          {/* STEP 2 */}
          {step === 2 && <PaymentStep />}
          {/* STEP 2 */}

          {/* STEP 3 */}
          {step === 3 && <FinishStep />}
          {/* STEP 3 */}
        </div>
        <div className="flex-none w-full md:w-fit">
          <Summary />
        </div>
      </div>
    </Card>
  );
};

export default Home;
