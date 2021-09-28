import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './FriendDetails.css'

const FriendDetails = () => {
    const { friendId } = useParams()
    const [friendDetails, setFriendDetails] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriendDetails(data))
    }, [])
    return (
        <div className="friend-details">
            <h3>I am {friendDetails?.name}</h3>
            <p>Email: {friendDetails?.email}</p>
            <p>Call me: {friendDetails?.phone}</p>
            <p>Visit me: {friendDetails?.website}</p>
            <fieldset style={{
                border: '1px dotted tomato',
                borderRadius: '5px',
                margin: '30px'
            }}>
                <legend>Address</legend>
                <address style={{ lineHeight: '10px' }}>
                    <p>City: {friendDetails?.address?.city}</p>
                    <p>Zip-Code: {friendDetails?.address?.zipcode}</p>
                    <p>Suit: {friendDetails?.address?.suite}</p>
                </address>
            </fieldset>
            <Link to="/friends">
                <button className="btn">Friends</button>
            </Link>
        </div>
    );
};

export default FriendDetails;