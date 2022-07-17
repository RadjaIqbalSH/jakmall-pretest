import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState, AppThunk } from '..';

export const PaymentSlice = createSlice({
  name: 'payment',

  initialState: {
    // data: {
    //   editorsChoise: [],
    //   latestArticle: [],
    //   latestReview: [],
    // },
    data: {
      orderId: '',
      purcheseItems: '',
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
    },
  },

  reducers: {
    setProductData: (state: any, action: any) => {
      // state.data.editorsChoise = action.payload[`editor's choice`];
      // state.data.latestArticle = action.payload[`latest articles`];
      // state.data.latestReview = action.payload[`latest review`];
    },
    setDeliveryDetails: (state: any, action: any) => {
      state.data.deliveryDetails = action.payload;
    },
  },

  // extraReducers: {
  //   [HYDRATE]: (state, action) => {
  //     if (!action.payload.product.data) {
  //       return state;
  //     }

  //     state.data.editorsChoise = action.payload.product.data.editorsChoise;
  //     state.data.latestArticle = action.payload.product.data.latestArticle;
  //     state.data.latestReview = action.payload.product.data.latestReview;
  //   },
  // },
});

export const { setProductData } = PaymentSlice.actions;

export const selectPayment = (state: AppState) => state.payment;

export const fetchProduct = (): AppThunk => async (dispatch) => {
  // const response = await getData();
  // dispatch(setProductData(response));
};

export default PaymentSlice.reducer;
