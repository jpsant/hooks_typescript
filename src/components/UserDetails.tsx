import * as React from 'react';
import { RouteComponentProps, useParams } from 'react-router-dom';

import UsersContainer from './UserContainer';

export interface User {
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string
}

interface IUserDetails extends RouteComponentProps<{ id: string }> { }

const UserDetails: React.FC<IUserDetails> = ({ history }) => {

    const { id } = useParams();

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
                <UsersContainer name={user.name} username={user.username} email={user.email} phone={user.phone} website={user.website} />
            </div>
            <button onClick={() => history.goBack()} >Go back!</button>
        </>
    )
}

export default UserDetails;