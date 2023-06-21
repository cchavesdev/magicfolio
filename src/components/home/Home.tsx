import React from "react";
import { CardFinder } from "../cardFinder/CardFinder";

export const Home = () => {
  return (
    <div>
      <h1>Events</h1>
      <h2>Latest Added</h2>
      <CardFinder></CardFinder>
    </div>
  );
};
