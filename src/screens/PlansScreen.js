import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db from "../firebase";
import "./PlansScreen.css";

function PlansScreen() {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);
  const [subscription, setSubscription] = useState(null);

  
 

  return (
    <div className="plansScreen">
      <br />
     <p>Plans</p>
    </div>
  );
}

export default PlansScreen;