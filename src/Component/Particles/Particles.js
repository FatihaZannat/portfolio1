import React from 'react';
import Particles from 'react-particles-js'

const Particle = () => {
    return (
        <div>
             <Particles 
            
            params={{
               particles: {
                 number: {
                   value: 30,
                   density: {
                     enable:true,
                     value_area: 900
                   }
                 }
               }
            }} />
        </div>
    );
};

export default Particle;