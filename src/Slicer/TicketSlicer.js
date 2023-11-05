import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seatCount: 0,
  seatActive: true,
  seatsBooked: [],
};
const ticketSlicer = createSlice({
  name: "ticketbook",
  initialState,
  reducers: {
    countSeat(state, action) {
      state.seatCount = action.payload;
    },
    toggleSeat(state, action) {
      state.seatActive = !state.seatActive;
    },
    addSeat(state, action) {
      state.seatsBooked.push(action.payload);
    },
  },
});
export const { countSeat, toggleSeat } = ticketSlicer.actions;
export default ticketSlicer.reducer;
