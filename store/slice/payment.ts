import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState, AppThunk } from '..';

const initialState = () => {
  return {
    data: {
      orderId: '',
      purcheseItems: '10',
      cost: 500000,
      dropshipperFee: 0,
      deliveryDetails: {
        name: '',
        phoneNumber: '',
        deliveryAddress: '',
        isDropshipper: false,
        dropshipperName: '',
        dropshipperPhoneNumber: '',
      },
      shipment: {
        shipmentDescription: 'GO-SEND',
        shipmentFee: 15000,
        shipmentId: 'GS',
        deleveryEsimate: 'today',
      },
      payment: {
        id: 'EW',
        payment: 'e-Wallet',
        paymentDescription: 'e-Wallet',
      },
    },
    step: 1,
  };
};

export const PaymentSlice = createSlice({
  name: 'payment',

  initialState: initialState(),

  reducers: {
    setIncrementStep: (state: any) => {
      state.step += 1;
    },
    setDecrementStep: (state: any) => {
      state.step -= 1;
    },
    resetStep: (state: any) => {
      state.step = 1;
    },
    setDeliveryDetails: (state: any, action: any) => {
      state.data.deliveryDetails = action.payload;
    },
    setShipment: (state: any, action: any) => {
      state.data.shipment.shipmentId = action.payload.shipmentId;
      state.data.shipment.shipmentDescription = action.payload.shipmentDescription;
      state.data.shipment.shipmentFee = action.payload.shipmentFee;
      state.data.shipment.deleveryEsimate = action.payload.deleveryEsimate;
      console.log(action.payload.shi);
    },
    setPayment: (state: any, action: any) => {
      state.data.payment.id = action.payload.id;
      state.data.payment.payment = action.payload.payment;
      state.data.payment.paymentDescription = action.payload.paymentDescription;
    },
    setDropshipperFee: (state: any, action: any) => {
      state.data.dropshipperFee = action.payload;
    },
    resetState: (state: any) => {
      Object.assign(state, initialState());
    },
  },

  // extraReducers: {
  //   [HYDRATE]: (state, action) => {
  //   },
  // },
});

export const {
  setIncrementStep,
  setDecrementStep,
  resetStep,
  setDeliveryDetails,
  setShipment,
  setPayment,
  setDropshipperFee,
  resetState,
} = PaymentSlice.actions;

export const selectPayment = (state: AppState) => state.payment;

export const fetchPayment = (): AppThunk => async (dispatch) => {
  // const data = await window.localStorage.setItem('temporary-state', JSON.stringify(data));.
};

export default PaymentSlice.reducer;
