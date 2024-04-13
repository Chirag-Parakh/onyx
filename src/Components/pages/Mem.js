import React from 'react'
import '../../App.css'
import { SiMinds } from "react-icons/si";
import { GiTeamDowngrade } from "react-icons/gi";
import { MdCardMembership } from "react-icons/md";
import { MdEventSeat } from "react-icons/md";
import { SiFuturelearn } from "react-icons/si";

function Mem() {
  return (
    <div className='mem_box'> 
     <div className='mem_heading'>What are the benefits of becoming an <span className='green'>ONYX</span> MEMBER?</div>
     <div className='Mem_benifits'>
      <div className="Bennifits"> <span className='Benifit_logo'><SiMinds /></span> Development of entrepreneurial mindset by being a part of E-cell.</div>
      <div className="Bennifits"><span className='Benifit_logo'><SiFuturelearn /></span>Chance to learn from real-world entrepreneurs.</div>
      <div className="Bennifits"><span className='Benifit_logo'><MdEventSeat /></span>Free access to all our events and discussions.</div>
      <div className="Bennifits"><span className='Benifit_logo'><GiTeamDowngrade /></span>A chance to join the core team.</div>
      <div className="Bennifits"><span className='Benifit_logo'><MdCardMembership /></span>Lifetime membership.</div>
     </div>
    </div>
  );
}

export default Mem;