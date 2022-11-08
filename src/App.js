import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./Payment";
import Orders from "./Orders";
import Paypage from "./Paypage";

import Womens from "./Womens";
import Mens from "./Mens";
import Childs from "./Childs";

const promise = loadStripe(
  "pk_test_51LhbKrSAh0wFZyVWukxGWc9OQRCveIX7k9CZd3L7g6RuJv0ozNjFGNpBuQQfh4vGmXd0Nt0rAxxNfJRErg8RtBkS00A9AnSVp0"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
return (
  <div className="app">
    <Router>
      <Routes>
      <Route path="/orders"
        element = {<><Orders/></>} 
      />
      <Route path="/login"
        element = {<><Login/></>} 
      />
      <Route path="/" element={<><Header/><Home/></>}/>
      <Route path="/checkout" element={<><Header/><Checkout/></>}/>
      <Route path="/payment"
        element={<><Header/><Elements stripe={promise}>
        <Payment />
      </Elements></>}
        />
      <Route path="/paypage"
        element={<><Header/><Elements stripe={promise}>
        <Paypage />
      </Elements></>}
        />
      <Route path="/womens" element={<><Header/><Womens/></>}/>
      <Route path="/mens" element={<><Header/><Mens/></>}/>
      <Route path="/childs" element={<><Header/><Childs/></>}/>
      </Routes>
    </Router> 
  </div>
);
}
export default App;