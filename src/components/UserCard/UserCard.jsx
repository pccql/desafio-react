import React from 'react';

import './styles.css';

function UserCard({ name, photo, companies, socialNetworks, repositoriesNumber, bio, location }) {
  return (
    <>
      <div className="user-container">
        <h2>{name}</h2>
        <img src={photo} alt="Foto usuário" width="150px" />
        <div className="data" >
          <p>Bio: {bio}</p>
          <p>Location: {location}</p>
          <p>Number of Public Repositories: {repositoriesNumber}</p>
          <p>Companies: {companies}</p>
          <p>Twitter: @{socialNetworks}</p>
        </div>
      </div>
    </>
  );
}

export default UserCard;
