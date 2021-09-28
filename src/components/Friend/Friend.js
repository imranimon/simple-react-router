import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const { id, name, email, website, address, phone } = props.friend
    const history = useHistory()
    const handleFriendClick = ()=>{
        history.push(`/friend/${id}`)
    }
    return (
        <div className="friend">
            <h3>I am {name}</h3>
            <p>Email: {email}</p>
            <p>Call me: {phone}</p>
            <p>Visit me: {website}</p>
            <fieldset style={{
                border: '1px dotted tomato',
                borderRadius: '5px',
                margin: '20px 20px 0 20px'
            }}>
                <legend>Address</legend>
                <address style={{ lineHeight: '10px' }}>
                    <p>City: {address.city}</p>
                    <p>Zip-Code: {address.zipcode}</p>
                    <p>Suit: {address.suite}</p>
                </address>
            </fieldset>
            <div>
                <Link className="link" to={`/friend/${id}`} >Visit ME</Link>
                <br />
                <Link to={`/friend/${id}`}>
                    <button className="btn">Visit Me</button>
                </Link>
                <br/>
                <button onClick={handleFriendClick} className="btn">Visit Me</button>
            </div>

        </div>
    );
};

export default Friend;