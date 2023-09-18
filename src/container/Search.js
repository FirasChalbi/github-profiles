import React, { useState } from 'react';
import "./search.css";

function Search() {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (username) {
            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                } else {
                    console.error('Error fetching user data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <div className='body'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Github Username" onChange={e => setUsername(e.target.value)} required={true} />
                <button type="submit">Search</button>
            </form>
            {user && (
                <div className='info'>
                    <img src={user.avatar_url} width="70" height="70" alt="User Avatar" />
                    <div>
                        Name: {user.login} <br/> Followers: {user.followers} <br/> Repositories count: {user.public_repos}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Search;
