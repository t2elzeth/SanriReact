import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  orders: []
};

const ordersAPI = axios.create({
  baseURL: "http://localhost:8000/api/CarOrder/",
  headers: {
    Authorization: `Token b731e4ce7c38adbb61e93cd74360530f2052dda3`
  }
});

export const fetchOrders = createAsyncThunk(
  "users/fetchByIdStatus",
  async () => {
    const response = await ordersAPI.get("");
    return response.data;
  }
);

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.orders = action.payload.map((order) => ({...order, price10: order.price * 0.1}));
    });
  }
});

export const ordersActions = ordersSlice.actions;

export default ordersSlice.reducer;