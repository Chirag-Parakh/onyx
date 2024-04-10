import React from "react";
import CardItem1 from "./CardItem1";
import './Cards1.css'
import contacts from "../contacts";
// import styled from "styled-components"; 

function createCard(contact) {
  return (
    <CardItem1
      key={contact.id}
      desi={contact.desi}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

const customStyle={
    color: "#0e3d4a",
   
}

// const StyledText = styled.h1` 
//     font-family: "Monsterrat", sans-serif; 
//     font-size: 30px; 
// `; 

function Cards1() {
  return (
    <div>
      <h1 className="heading" style={customStyle}>TEAM ONYX(2023-24)</h1>
      {contacts.map(createCard)}

      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default Cards1;
