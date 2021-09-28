import React, { useEffect, useState } from 'react';
import './Friends.css'
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setfriend] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setfriend(data))
    }, [])
    return (
        <div style={{margin:'10px'}}>
            <h2>I have {friends.length} friends</h2>
            <div className="friends-container">
                {
                    friends.map(friend => <Friend
                        key={friend.id} friend={friend}></Friend>)
                }
            </div>

        </div>
    );
};

export default Friends;