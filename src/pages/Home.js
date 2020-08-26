import React from "react";
import { useLocation, useParams } from "react-router-dom";

function Home() {
  const location = useLocation();

  return <h1>HOME</h1>;
}

export default Home;
