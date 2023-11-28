import React from "react";
import TicketNum from "./TicketNum";
import "./Ticket.css";

const Ticket = ({ ticket }) => {
  return (
    <div className="ticket">
      <h2>Ticket Number</h2>
      {ticket.map((val, idx) => (
        <TicketNum num={val} key={idx} />
      ))}
    </div>
  );
};

export default Ticket;
