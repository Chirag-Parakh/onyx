import React from "react";

function Detail(props) {
  return <div className="info">
  <h1>{props.name}</h1>
  <p >{props.detailInfo}</p></div>;
}

export default Detail;
