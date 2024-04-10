import React from 'react'
import ParticleBg from '../ParticleBg'
import '../Entravaganz.css'

function Entravaganza() {
  return (
    <div className='Entravaganza_Main'>
        <div className='ParticleBg'>
        <ParticleBg id="particles" className="particles"/>
        </div>
        <div className='Entravaganza_Heading'>
        Entravaganza
        </div>
        {/* Entravaganza_Schedule_box */}
        <div className='Entravaganza_Schedule_Box'>
            <div className='Entravaganza_Schedule_heading'>Events Schedule</div>
            {/* Schedule 17 April 17th, 2024 */}
            <div>
                <span className='Event_circle'></span>
                <span className='Event_line'></span>
                <div>
                    <h3>INAUGURATION & B PLAN</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Entravaganza
