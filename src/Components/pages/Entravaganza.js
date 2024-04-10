import React from 'react'
import ParticleBg from '../ParticleBg'
import '../Entravaganz.css'


function Entravaganza() {
    return (
        <div className='Entravaganza_Main'>
            <div className='ParticleBg'>
                <ParticleBg id="particles" className="particles" />
            </div>
            <div className='Entravaganza_Heading'>
                Entravaganza
            </div>
            {/* Entravaganza_Schedule_box */}
            <div className='Entravaganza_Schedule_Box'>
                <div className='Entravaganza_Schedule_heading'>Events Schedule</div>
                {/* Schedule 17 April 17th, 2024 */}
                <div className='Events_box'>
                    <div className='Event_flowline'>
                        <span className='Event_circle'></span>
                        <span className='Event_line'></span>
                    </div>
                    <div className=''>
                        <h3>April 17th, 202</h3>
                        <div className=''>
                            <span>INAUGURATION</span>
                            <span>South Campus</span>
                        </div>
                        <div>
                            <span>Flash Mob</span>
                            <span>North Campus</span>
                        </div>
                        <div>
                            <span>B-Plan</span>
                            <span>North Campuc</span>
                            
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Entravaganza
