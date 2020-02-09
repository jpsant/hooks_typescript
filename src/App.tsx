import * as React from 'react';

interface UserProps {}

interface User {
  matricula: number;
  nome: string,
  id_curso: number
}

const App: React.FC<UserProps> = () => {    //Criando o componente com Hooks e definindo seus props.

  const [user, setUsers] = React.useState<User[]>([]);    //Definindo seu State e definindo o objeto do tipo User.

  const getUsers = async () => {    //Realizando a Request
    let response = await fetch('http://cleanderson.ddns.net:8080/students');
    let users = await response.json();
    setUsers(users);
  }

  React.useEffect( () => { getUsers() }, [])  //ComponentDidMount do Hooks.

  return (
    <>
      <div>
        {user.map( (users) => {
          return console.log('Name: ' + users.nome + ', Email: ' + users.matricula);
        })}
      </div>
    </>
  );
}

export default App;
