import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function CardItem1(props) {
  return (
    // <div className="bod">
    <div className="card">
      <div className="top">
        <h3 className="des">{props.desi}</h3>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        
        <Detail name={props.name} detailInfo={props.email} />
      </div>
    </div>
    // </div>
  );
}

export default CardItem1;
