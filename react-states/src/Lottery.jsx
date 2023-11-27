import React, { useState } from "react";
import "./Lottery.css";
import { generateTicket } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

const Lottery = ({ n, winCondition }) => {
  const [ticket, setTicket] = useState(generateTicket(n));
  const isWinning = winCondition(ticket);

  const buyTicket = () => {
    setTicket(generateTicket(3));
  };
  return (
    <div>
      <h1>Lottery Game!</h1>
      <div>
        <Ticket ticket={ticket} />
      </div>
      <br />
      <Button action={buyTicket} />
      <h3>
        {isWinning
          ? "Cogratulations! You won the lottery"
          : "You lose the lottery"}
      </h3>
    </div>
  );
};

export default Lottery;
