import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface User {
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string
}

interface IUserDetails extends RouteComponentProps<{ id: string }> { }

const UserDetails: React.FC<IUserDetails> = ({ history, match: { params: { id } } }) => {

    const [user, setUser] = React.useState<User>({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    });

    const getUserDetails = async () => {
        let r = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        let data = await r.json();

        setUser(data);
    }

    React.useEffect(() => { getUserDetails() }, [id]);

    return (
        <>
            <div>
                <h1>User details page!</h1>
            </div>
            <div>
                <h1>User information:</h1>
                <h2>Full name: {user.name}</h2>
                <h2>Username: {user.username}</h2>
                <h2>Email: {user.email}</h2>
                <h2>Phone: {user.phone}</h2>
                <h2>Website: {user.website}</h2>
            </div>
            <button onClick={() => history.goBack()} >Go back!</button>
        </>
    )
}

export default UserDetails;