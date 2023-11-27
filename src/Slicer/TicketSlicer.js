import { createSlice } from "@reduxjs/toolkit";
import Data from "../data.json";
const initialState = {
  seatCount: 0,
  seatActive: true,
  seatsBooked: [],
  ticketPrice: 0,
  payActive: false,
  baseAmt: 0,
  taxAmt: 0,
  charityAmt: 0,
  screenId: 0,
  screenName: "",
  movieName: "",
  time: "",
  timeArr: [],
  bookDate:0,
  paySuccess:false,
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
      if (state.seatsBooked.length < state.seatCount)
        if (!state.seatsBooked.includes(action.payload))
          state.seatsBooked.push(action.payload);
      state.ticketPrice = 0;
      state.seatsBooked.forEach((list) => {
        if (list.slice(-1) === "b") return (state.ticketPrice += 60.0);
        if (list.slice(-1) === "e") return (state.ticketPrice += 179.0);
      });
      console.log(state.ticketPrice);
    },
    changePayActive(state, action) {
      state.payActive = true;
      state.baseAmt = state.seatsBooked.length * 30;
      state.taxAmt = Math.round(state.baseAmt * 0.18);
      state.charityAmt = state.seatsBooked.length;
    },
    changeMovie(state, action) {
      state.movieName = action.payload;

    },
    addCharityAmt(state, action) {
      state.charityAmt = state.seatsBooked.length;
    },
    removeCharityAmt(state, action) {
      state.charityAmt = 0;
    },
    selectShow(state, action) {
      state.screenId = action.payload;
      let { data } = Data;
      let movie = data.find((list) => state.movieName === list.title);
      let arr = state.screenId.split("-");
      state.time = arr[1];
      let theater = movie.theatersList.find(
        (list) => arr[0] === list.theaterId
      );
      state.screenName = theater.theaterName;
      state.timeArr = theater.timings;
    },
    ChangeDate(state,action){
      state.bookDate=action.payload;
    },
    changePaySuccess(state,action){
      state.paySuccess = true;
    }
  },
});
export const {
  countSeat,
  toggleSeat,
  addSeat,
  addCharityAmt,
  removeCharityAmt,
  changePayActive,
  selectShow,
  changeMovie,ChangeDate,
  changePaySuccess
} = ticketSlicer.actions;
export default ticketSlicer.reducer;
