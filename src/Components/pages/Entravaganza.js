import React from 'react'
import ParticleBg from '../ParticleBg'
import '../Entravaganz.css'
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";

function Entravaganza() {
    return (
        <div className='Entravaganza_Main'>
            <div className='ParticleBg'>
                <ParticleBg id="particles" className="particles" />
            </div>
            <div className='Entravaganza_Heading'>
                Entravaganza
            </div>
            <div className='Entravaganza_Description'>
            Entravaganza by Onyx, our college's entrepreneurship club, is a dynamic 7-day event showcasing innovation and creativity. From E'fest's inauguration to insightful talks, idea generation workshops, and intercollegiate challenges, culminating in a grand panel discussion and an enriching E-Tour, it's a celebration of entrepreneurial spirit and collaborative learning.
            </div>
            {/* Entravaganza_Schedule_box */}
            <div className='Entravaganza_Schedule_Box'>
                {/* <div className='Entravaganza_Schedule_heading'>Events Schedule</div> */}
                {/* Schedule April 17th, 2024 */}
                <div className='Events_box'>
                    <div className='Empty_box'></div>
                    <div className='Event_flowline'>
                        <span className='Event_circle'></span>
                        <span className='Event_line'></span>
                    </div>
                    <div className='Event_box_right '>
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
                </div>
                {/*  Schedule April 18, 2024 */}
                <div className='Events_box'>
                    <div className='Event_box_left'>
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
                    <div className='Event_flowline'>
                        <span className='Event_circle'></span>
                        <span className='Event_line'></span>
                    </div>
                    <div className='Empty_box'></div>
                </div>
                {/* Schedule April 19, 2024 */}
                <div className='Events_box'>
                    <div className='Empty_box'></div>
                    <div className='Event_flowline'>
                        <span className='Event_circle'></span>
                        <span className='Event_line'></span>
                    </div>
                    <div className='Event_box_right '>
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
                </div>
                {/*  Schedule April 20, 2024 */}
                <div className='Events_box'>
                    <div className='Event_box_left'>
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
                    <div className='Event_flowline'>
                        <span className='Event_circle'></span>
                        <span className='Event_line'></span>
                    </div>
                    <div className='Empty_box'></div>
                </div>
                {/* Schedule April 22nd, 2024 */}
                <div className='Events_box'>
                    <div className='Empty_box'></div>
                    <div className='Event_flowline'>
                        <span className='Event_circle'></span>
                        <span className='Event_line'></span>
                    </div>
                    <div className='Event_box_right '>
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
                </div>
                {/*  Schedule April 23, 2024 */}
                <div className='Events_box'>
                    <div className='Event_box_left'>
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
                    <div className='Event_flowline'>
                        <span className='Event_circle'></span>
                        <span className='Event_line'></span>
                    </div>
                    <div className='Empty_box'></div>
                </div>
            </div>
        </div>
    )
}

export default Entravaganza
