import React, {useState} from 'react';
import "./search.css";

function Search() {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState({})
    fetch(`https://api.github.com/users/${username}`)
    //.then((response) => setUser(response))
    .then((user) => user.json())
    .then((user) => setUser(user));

    const handleSubmit = (e) => {
        e.preventDefault();
      };
    
    console.log(username);
  return (
    <div className='body'>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Github Username" onChange={e => setUsername(e.target.value)} required={true} />
        <button type="submit" >Search</button>
    </form>
    <div className='info'>
    <img src={user.avatar_url} width="70" height="70" ></img>
    <div>
      Name: {user.login} <br/> Followers: {user.followers} <br/> Repositories count: {user.public_repos}
    </div>
    </div>
    </div>

    
  )
}

export default Search