import React from 'react';
import SingleProject from './SingleProject';
import img from '../../image/creative-agency.PNG'
import img1 from '../../image/drive.PNG'
import img2 from '../../image/league.PNG'
import img3 from '../../image/pin.PNG'

const Projects = () => {
    return (
        <div className="mt-4">
             <div class="card-group">
  <div class="card m-3">
    <img class="card-img-top" src={img} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card m-3">
    <img class="card-img-top" src={img1} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card m-3">
    <img class="card-img-top" src={img2} alt="Card image cap"/>
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