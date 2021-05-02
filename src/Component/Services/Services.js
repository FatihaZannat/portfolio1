import React from 'react';
import {ProgressBar,Button} from 'react-bootstrap'

const Services = () => {
    return (
        <>
        <h2>My Skill</h2>

        <div style={{width:'75%', marginLeft:'70px'}}>
        <div className="progress" >
<div className="progress-bar bg-success" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">HTML</div>
 </div> <br/>
<div className="progress">
  <div className="progress-bar bg-info" role="progressbar" style={{width: '78%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">CSS</div>
</div><br/>
<div className="progress">
  <div className="progress-bar bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">JavaScript</div>
</div><br/>
<div className="progress">
  <div className="progress-bar bg-danger" role="progressbar" style={{width: '60%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">React</div>
</div>
        </div>
        </>
    );
};

export default Services;