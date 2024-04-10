import React from "react";
import '../../App.css';
import CBAsection from "../CBAsection";
import Cards from "../Cards";
import ParticleBg from '../ParticleBg'

function Home(){
    return(
        <div>
            {/* <ParticleBg id="particles" className="particles" /> */}
            <CBAsection/>
            <Cards/>
        </div>
    )
}

export default Home;