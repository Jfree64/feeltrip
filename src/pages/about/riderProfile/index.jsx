import React from 'react';

function RiderProfile(props) {
    const riders = props.riders.map((rider) =>
      <div key={rider.id}>
        <h3>{rider.name}</h3>
        <p>{rider.bio}</p>
        <img class="riderImage" src={rider.img} alt=""/>
      </div>
    )

    return (
      <div>
        {riders}
      </div>
    )
}

export default RiderProfile;
