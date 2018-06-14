import React from 'react';
import { NavLink } from 'react-router-dom';

function RiderProfile(props) {
    const riders = props.riders.map((rider) =>
      <div key={rider.id}>
        <h3>{rider.name}</h3>
        <p>{rider.bio}</p>
        <img src={rider.img} />
      </div>
    )

    return (
      <div>
        {riders}
      </div>
    )
}

export default RiderProfile;
