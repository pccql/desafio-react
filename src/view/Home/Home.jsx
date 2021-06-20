import React, { useEffect, useRef, useState } from 'react';
import api from '../../services/api';

import UserCard from '../../components/'

import './styles.css';

function Home() {
  const [name, setName] = useState('');
  
  const [makeRequest, setMakeRequest] = useState(false);
  const [NameRequest, setNameRequest] = useState();
  
  const [photo, setPhoto] = useState();
  const [companies, setCompanies] = useState();
  const [socialNetworks, setSocialNetworks] = useState();
  const [repositoriesNumber, setRepositoriesNumber] = useState();
  const [bio, setBio] = useState();
  const [location, setLocation] = useState();


  const inputRef = useRef();

  const getUser = async () => {

    const res = await api.get(`users/${name}`);
    console.log(res.data);

    setNameRequest(res.data.name);
    setPhoto(res.data.avatar_url)
    setBio(res.data.bio);

    setCompanies(res.data.company);

    setRepositoriesNumber(res.data.public_repos);
    setSocialNetworks(res.data.twitter_username);

    setLocation(res.data.location)

    }
  return (
    <>
      <div className="input-button-container">
        <input
          type="text"
          placeholder="Escreva um username do GitHub"
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => {setMakeRequest(true); getUser()}} >ENTER</button>
      </div>

      {makeRequest && (
        <UserCard name={NameRequest} photo={photo} companies={companies} socialNetworks={socialNetworks}
        location={location} bio={bio} repositoriesNumber={repositoriesNumber}/>
      )}
      
    </>
  );
}

export default Home;