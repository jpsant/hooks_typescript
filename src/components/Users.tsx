import * as React from 'react';
import { Link } from 'react-router-dom';

interface UserProps { }

export interface User {
  id: number;
  name: string,
  email: string,
}

const App: React.FC<UserProps> = () => {    //Criando o componente com Hooks e definindo seus props.

  const [user, setUsers] = React.useState<User[]>([]);    //Definindo seu State e definindo o objeto do tipo User.

  const getUsers = async () => {    //Realizando a Request
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await response.json();
    setUsers(users);
  }


  React.useEffect(() => { getUsers() }, [])  //ComponentDidMount do Hooks.

  return (
    <>
      <div>
        {user.map((users) => {
          return (
            <div key={users.id}>
              <h1>Nome: {users.name}</h1>
              <h2>Email: {users.email}</h2>
              <Link to={`/users/${users.id}`}> Mais detalhes</Link>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default App;
