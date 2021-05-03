import React from 'react';

import pic from '../../image/creative-agency.PNG'
import pic1 from '../../image/drive.PNG'
import pic2 from '../../image/league.PNG'


const Projects = () => {
    return (
        <div className="mt-4">
             <div class="card-group">
  <div class="card m-3">
    <img class="card-pic-top" src={pic} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card m-3">
    <img class="card-pic-top" src={pic1} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card m-3">
    <img class="card-pic-top" src={pic2} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
          
        </div>
    );
};

export default Projects;