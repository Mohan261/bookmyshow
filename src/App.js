import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MoviesSec from "./components/MoviesSec";
import BookTicket from "./components/BookTicket";
import Bookmyshow from "./components/Bookmyshow";
import SeatLayout from "./components/SeatLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/bookmyshow" element={<Bookmyshow />}>
          <Route path="home" element={<MoviesSec />} />
          <Route path="book/:id" element={<BookTicket />} />
          <Route path="book/:id/seat" element={<SeatLayout />} />
        </Route>
        <Route path="/*" element={<MoviesSec />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
