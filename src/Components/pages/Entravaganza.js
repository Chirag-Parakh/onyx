import React from 'react'
import ParticleBg from '../ParticleBg'
import '../Entravaganz.css'
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import pic1 from '../images/1.jpeg';
import pic2 from '../images/2.jpeg';
import pic3 from '../images/3.jpeg';
import pic4 from '../images/4.jpeg';
import pic5 from '../images/5.jpeg';
import pic6 from '../images/6.jpeg';
import pic7 from '../images/7.jpeg';
import pic8 from '../images/8.jpeg';
import pic9 from '../images/9.jpeg';
import pic10 from '../images/10.jpeg';
import pic11 from '../images/11.jpeg';
import pic12 from '../images/12.jpeg';
import pic13 from '../images/13.jpeg';
import pic14 from '../images/14.jpeg';
import pic16 from '../images/16.jpeg';
import pic17 from '../images/17.jpeg';
import pic18 from '../images/18.jpeg';
import pic19 from '../images/19.jpeg';
import pic20 from '../images/20.jpeg';
import pic21 from '../images/21.jpeg';
import pic22 from '../images/22.jpeg';
import pic23 from '../images/23.jpeg';
import pic24 from '../images/24.jpeg';
import pic25 from '../images/25.jpeg';
import exinous from '../images/Exinous.webp'
import nie from '../images/nie.svg.png'

function Entravaganza() {
    const images = []
    return (
        <div className='Entravaganza_Main'>
            {/* <div className='ParticleBg'>
                <ParticleBg id="particles" className="particles" />
            </div> */}
            <div className='Entravaganza_Heading'>
                Entravaganza
            </div>
            <div className='Entravaganza_Description'>
                Entravaganza by Onyx, our college's entrepreneurship club, is a dynamic 7-day event showcasing innovation and creativity. From E'fest's inauguration to insightful talks, idea generation workshops, and intercollegiate challenges, culminating in a grand panel discussion and an enriching E-Tour, it's a celebration of entrepreneurial spirit and collaborative learning.
            </div>
            <div className='Sponsors_box'>
                <div className='Sponsers_heading'>Associates</div>
                <div className='Sponsers_logos'>
                    <div className='Sponsers_box'> 
                        <img src={nie} alt="" className='Sponser_logo' />
                    </div>
                    <div className='Sponsers_box'>
                        <img src={exinous} alt="" className='Sponser_logo' />
                    </div>
                </div>
            </div>
            {/* Entravaganza_Schedule_box */}
            <div className='Entravaganza_Schedule_Box'>
                <div className='Entravaganza_Schedule_heading'>Events Schedule</div>
                {/* Schedule April 17th, 2024 */}
                <div className='Events_box'>
                    <div className='Event_box_left '>
                        <h3 className='Event_Date'>April 17, 2024</h3>
                        <div className='SubEvent_box'>
                            <span className='SubEvent_heading'>INAUGURATION</span>
                            <span className='SubEvent_venue'>
                                <span className='SubEvent_venue_icon' ><FaMapMarkedAlt /></span>
                                NIE South Campus
                            </span>
                            <span className='SubEvent_Time'> <span className='SubEvent_venue_icon'>
                                <MdOutlineAccessTime />
                            </span>11:30 AM</span>
                        </div >
                        <div className='SubEvent_box'>
                            <span className='SubEvent_heading'>FLASH MOB</span>
                            <span className='SubEvent_venue'>
                                <span className='SubEvent_venue_icon' ><FaMapMarkedAlt /></span>
                                NIE North Campus
                            </span>
                            <span className='SubEvent_Time'> <span className='SubEvent_venue_icon'>
                                <MdOutlineAccessTime />
                            </span>01:00 PM</span>
                        </div>
                        <div className='SubEvent_box'>
                            <span className='SubEvent_heading'>B-PLAN</span>
                            <span className='SubEvent_venue'>
                                <span className='SubEvent_venue_icon' ><FaMapMarkedAlt /></span>
                                NIE North Campuc
                            </span>
                            <span className='SubEvent_Time'> <span className='SubEvent_venue_icon'>
                                <MdOutlineAccessTime />
                            </span>02:30 PM</span>
                        </div>
                    </div>
                    <div className='Event_flowline'>
                        <span className='Event_circle'></span>
                        <span className='Event_line'></span>
                    </div>

                    <div className='Empty_box'></div>
                </div>
                {/*  Schedule April 18, 2024 */}
                <div className='Events_box'>
                    <div className='Empty_box'></div>
                    <div className='Event_flowline'>
                        <span className='Event_circle'></span>
                        <span className='Event_line'></span>
                    </div>
                    <div className='Event_box_right'>
                        <h3 className='Event_Date'>April 18, 2024</h3>
                        <div className='SubEvent_box'>
                            <span className='SubEvent_heading'>IDEA GENERATION WORKSHOP</span>
                            <span className='SubEvent_venue'>
                                <span className='SubEvent_venue_icon' ><FaMapMarkedAlt /></span>
                                NIE South Campus
                            </span>
                            <span className='SubEvent_Time'><span className='SubEvent_venue_icon'>
                                <MdOutlineAccessTime />
                            </span>11:30 AM</span>
                        </div >
                    </div>


                </div>
                {/* Schedule April 19, 2024 */}
                <div className='Events_box'>
                    <div className='Event_box_left '>
                        <h3 className='Event_Date'>April 19, 2024</h3>
                        <div className='SubEvent_box'>
                            <span className='SubEvent_heading'>INTERCOLLEGIENT EVENT</span>
                            <span className='SubEvent_venue'>
                                <span className='SubEvent_venue_icon' ><FaMapMarkedAlt /></span>
                                NIE South Campus
                            </span>
                            <span className='SubEvent_Time'> <span className='SubEvent_venue_icon'>
                                <MdOutlineAccessTime />
                            </span>11:30 AM</span>
                        </div >
                    </div>
                    <div className='Event_flowline'>
                        <span className='Event_circle'></span>
                        <span className='Event_line'></span>
                    </div>
                    <div className='Empty_box'></div>
                </div>
                {/*  Schedule April 20, 2024 */}
                <div className='Events_box'>
                    <div className='Empty_box'></div>
                    <div className='Event_flowline'>
                        <span className='Event_circle'></span>
                        <span className='Event_line'></span>
                    </div>
                    <div className='Event_box_right'>
                        <h3 className='Event_Date'>April 20, 2024</h3>
                        <div className='SubEvent_box'>
                            <span className='SubEvent_heading'>TALK WITH BOSCH EXECUTIVE</span>
                            <span className='SubEvent_venue'>
                                <span className='SubEvent_venue_icon' ><FaMapMarkedAlt /></span>
                                NIE South Campus
                            </span>
                            <span className='SubEvent_Time'> <span className='SubEvent_venue_icon'>
                                <MdOutlineAccessTime />
                            </span>11:30 AM</span>
                        </div >
                    </div>


                </div>
                {/* Schedule April 22nd, 2024 */}
                <div className='Events_box'>

                    <div className='Event_box_left '>
                        <h3 className='Event_Date'>April 22 , 2024</h3>
                        <div className='SubEvent_box'>
                            <span className='SubEvent_heading'>B-GYAAN + PANEL DISCUSSION</span>
                            <span className='SubEvent_venue'>
                                <span className='SubEvent_venue_icon' ><FaMapMarkedAlt /></span>
                                NIE South Campus
                            </span>
                            <span className='SubEvent_Time'><span className='SubEvent_venue_icon'>
                                <MdOutlineAccessTime />
                            </span>11:30 AM</span>
                        </div >
                    </div>
                    <div className='Event_flowline'>
                        <span className='Event_circle'></span>
                        <span className='Event_line'></span>
                    </div>
                    <div className='Empty_box'></div>

                </div>
                {/*  Schedule April 23, 2024 */}
                <div className='Events_box'>
                    <div className='Empty_box'></div>
                    <div className='Event_flowline'>
                        <span className='Event_circle'></span>
                        <span className='Event_line'></span>
                    </div>

                    <div className='Event_box_right'>
                        <h3 className='Event_Date'>April 23 , 2024</h3>
                        <div className='SubEvent_box'>
                            <span className='SubEvent_heading'>E-TOUR</span>
                            <span className='SubEvent_venue'>
                                <span className='SubEvent_venue_icon' ><FaMapMarkedAlt /></span>
                                NIE South Campus
                            </span>
                            <span className='SubEvent_Time'>
                                <span className='SubEvent_venue_icon'>
                                    <MdOutlineAccessTime />
                                </span>
                                11:30 AM
                            </span>
                        </div >
                    </div>

                </div>
            </div>
            <div className='Entravaganza_gallery_container'>
                <div className='Entravaganza_gallery_Heading'><span className='Event_circle'></span> Gallery <span className='Event_circle'></span></div>
                <div className='Entravaganza_gallery'>
                    <img src={pic1} alt="/" className='Entravaganza_pic' />
                    <img src={pic2} alt="/" className='Entravaganza_pic' />
                    <img src={pic3} alt="/" className='Entravaganza_pic' />
                    <img src={pic4} alt="/" className='Entravaganza_pic' />
                    <img src={pic5} alt="/" className='Entravaganza_pic' />
                    <img src={pic6} alt="/" className='Entravaganza_pic' />
                    <img src={pic7} alt="/" className='Entravaganza_pic' />
                    <img src={pic8} alt="/" className='Entravaganza_pic' />
                    <img src={pic9} alt="/" className='Entravaganza_pic' />
                    <img src={pic10} alt="/" className='Entravaganza_pic' />
                    <img src={pic11} alt="/" className='Entravaganza_pic' />
                    <img src={pic12} alt="/" className='Entravaganza_pic' />
                    <img src={pic13} alt="/" className='Entravaganza_pic' />
                    <img src={pic14} alt="/" className='Entravaganza_pic' />
                    <img src={pic16} alt="/" className='Entravaganza_pic' />
                    <img src={pic17} alt="/" className='Entravaganza_pic' />
                    <img src={pic18} alt="/" className='Entravaganza_pic' />
                    <img src={pic19} alt="/" className='Entravaganza_pic' />
                    <img src={pic20} alt="/" className='Entravaganza_pic' />
                    <img src={pic21} alt="/" className='Entravaganza_pic' />
                    <img src={pic22} alt="/" className='Entravaganza_pic' />
                    <img src={pic23} alt="/" className='Entravaganza_pic' />
                    <img src={pic24} alt="/" className='Entravaganza_pic' />
                    <img src={pic25} alt="/" className='Entravaganza_pic' />
                </div>
            </div>
        </div>
    )
}

export default Entravaganza
