import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./Slicer/TicketSlicer";

const store= configureStore({
    reducer:{
        ticketbook:ticketReducer
    }
})
export default store;