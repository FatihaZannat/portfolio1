import React from 'react';
import pic from '../../image/creative-agency.PNG'
import pic1 from '../../image/drive.PNG'
import pic2 from '../../image/league.PNG'

const SingleProject = () => {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-80" src={pic} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-80" src={pic1} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-80" src={pic2} alt="Third slide"/>
    </div>
  </div>
</div>
<div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae enim </div>
        </div>
    );
};

export default SingleProject;