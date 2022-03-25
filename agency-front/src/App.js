import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";

import PlanTrip from "./views/plantrip";
import PlanTripCreate from "./views/plantrip/Create";


import RentRV from "./views/rentrv/index";
import RentRVCreate from "./views/rentrv/Create";

import BuyRV from "./views/buyrv/index";
import BuyRVCreate from "./views/buyrv/Create";

import ContactUs from "./views/contactus/index";
import ContactusCreate from "./views/contactus/Create";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./style.css"

function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Routes>

          <Route path="/" element={Home} />


          <Route>
            <Route path="/plantrip" element={<PlanTrip />} />
            <Route path="/plantrip-create" element={<PlanTripCreate />} />
            <Route path="/plantrip-update/:id" element={<PlanTripCreate />} />
          </Route>

          <Route>
            <Route path="/rentrv" element={<RentRV />} />
            <Route path="/rentrv-create" element={<RentRVCreate />} />
            <Route path="/rentrv-Update/:id" element={<RentRVCreate />} />
          </Route>

          <Route>
            <Route path="/buyrv" element={<BuyRV />} />
            <Route path="/buyrv-Create" element={<BuyRVCreate />} />
            <Route path="/buyrv-Update/:id" element={<BuyRVCreate />} />
          </Route>

          <Route>
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/contactus-create" element={<ContactusCreate />} />
          <Route path="/contactus-Update/:id" element={<ContactusCreate />} />
        </Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
