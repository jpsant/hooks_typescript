import * as React from 'react';
import { User } from './UserDetails';
import '../stylesheets/UserContainer.scss';

const UserContainer: React.FC<User> = ({ name, username, email, phone, website }) => {
    return (
        <>
            <div className="userContainer">
                <span className="userContainer__child-element">
                    <h1>{name}</h1>
                </span>
                <span className="userContainer__child-element">
                    <h1>{username}</h1>
                </span>
                <span className="userContainer__child-element">
                    <h1>{email}</h1>
                </span>
                <span className="userContainer__child-element">
                    <h1>{phone}</h1>
                </span>
                <span className="userContainer__child-element">
                    <h1>{website}</h1>
                </span>
            </div>
        </>
    )
}

export default UserContainer;