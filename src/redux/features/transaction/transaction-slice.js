import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import transactionService from "./transaction-serivce";

export const getTransfers = createAsyncThunk(
  "transactions/getTransfers",
  async (thunkAPI) => {
    try {
      const delivered = await transactionService.getTransfers();
      console.log(delivered, "delivered request");
      return delivered;
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const createTransfer = createAsyncThunk(
  "transactions/createTransfer",
  async (requestData, thunkAPI) => {
    try {
      const delivered = await transactionService.createTransfer(requestData);
      console.log(delivered, "delivered request");
      return delivered;
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const sendOtp = createAsyncThunk(
  "transactions/sendOtp",
  async (accountNo, thunkAPI) => {
    try {
      const delivered = await transactionService.sendOtp(accountNo);
      console.log(delivered, "delivered request");
      return delivered;
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "transactions/verifyOtp",
  async (otp, thunkAPI) => {
    try {
      const delivered = await transactionService.verifyOtp(otp);
      console.log(delivered, "delivered request");
      return delivered;
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const sendCot = createAsyncThunk(
  "transactions/sendCot",
  async (accountNo, thunkAPI) => {
    try {
      const delivered = await transactionService.sendCot(accountNo);
      console.log(delivered, "delivered request");
      return delivered;
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const verifyCot = createAsyncThunk(
  "transactions/verifyCot",
  async (cot, thunkAPI) => {
    try {
      const delivered = await transactionService.verifyCot(cot);
      console.log(delivered, "delivered request");
      return delivered;
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const transactionSlice = createSlice({
  name: "transactions",
  initialState: {
    transactions: {},
    gettingTransactions: false,
    getTransactionsSuccess: false,
    getTransactionsError: false,
    getTransactionsMessage: "",

    // create transfers
    creatingTransfer: false,
    createTransferSuccess: false,
    createTransferError: false,
    createTransferMessage: "",

    //otp
    sendingOtp: false,
    sentOtpSuccess: false,
    sendOtpError: false,
    otpMessage: "",

    // verify otp
    verifyingOtp: false,
    verifyOtpSuccess: false,
    verifyOtpError: false,
    verifyOtpMessage: "",

    //cot
    sendingCot: false,
    sentCotSuccess: false,
    sendCotError: false,
    cotMessage: "",

    // verify cot
    verifyingCot: false,
    verifyCotSuccess: false,
    verifyCotError: false,
    verifyCotMessage: "",
  },
  reducers: {
    clearTransactions: (state) => {
      state.transactions = {};
      state.gettingTransactions = false;
      state.getTransactionsSuccess = false;
      state.getTransactionsError = false;

      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTransfers.pending, (state) => {
        state.gettingTransactions = true;
      })
      .addCase(getTransfers.fulfilled, (state, { payload }) => {
        console.log("got here");
        state.gettingTransactions = false;
        state.getTransactionsSuccess = true;
        state.transactions = payload;
        console.log(state.transactions, "transactions");
      })
      .addCase(getTransfers.rejected, (state, { payload }) => {
        console.log("getTransfers");
        state.gettingTransactions = false;
        state.getTransactionsError = true;
        state.getTransactionsMessage = payload;
      })
      .addCase(createTransfer.pending, (state, action) => {
        state.creatingTransfer = true;
      })
      .addCase(createTransfer.fulfilled, (state, action) => {
        state.creatingTransfer = false;
        state.createTransferSuccess = true;
        state.createTransferMessage = action.payload;
      })
      .addCase(createTransfer.rejected, (state, action) => {
        state.creatingTransfer = false;
        state.createTransferError = true;
        state.createTransferMessage = action.payload;
      })
      .addCase(sendOtp.pending, (state, action) => {
        state.sendingOtp = true;
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        state.sendingOtp = false;
        state.sentOtpSuccess = true;
        state.otpMessage = action.payload;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.sendingOtp = false;
        state.sendOtpError = true;
        state.otpMessage = action.payload;
      })
      .addCase(verifyOtp.pending, (state, action) => {
        state.verifyingOtp = true;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.verifyingOtp = false;
        state.verifyOtpSuccess = true;
        state.verifyOtpMessage = action.payload;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.verifyingOtp = false;
        state.verifyOtpSuccess = false;
        state.verifyOtpError = true;
        state.verifyOtpMessage = action.payload;
      })
      .addCase(sendCot.pending, (state, action) => {
        state.sendingCot = true;
      })
      .addCase(sendCot.fulfilled, (state, action) => {
        state.sendingCot = false;
        state.sentCotSuccess = true;
        state.cotMessage = action.payload;
      })
      .addCase(sendCot.rejected, (state, action) => {
        state.sendingCot = false;
        state.sendCotError = true;
        state.cotMessage = action.payload;
      })
      .addCase(verifyCot.pending, (state, action) => {
        state.verifyingCot = true;
      })
      .addCase(verifyCot.fulfilled, (state, action) => {
        state.verifyingCot = false;
        state.verifyCotSuccess = true;
        state.verifyCotMessage = action.payload;
      })
      .addCase(verifyCot.rejected, (state, action) => {
        state.verifyingCot = false;
        state.verifyCotError = true;
        state.verifyCotMessage = action.payload;
      });
  },
});

export const { clearTransactions } = transactionSlice.actions;
export const transactionSelector = (state) => state.transactions;
