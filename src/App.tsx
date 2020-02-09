import * as React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Users from './components/Users';
import UserDetails from './components/UserDetails';

interface UserProps { }


const App: React.FC<UserProps> = () => {    //Criando o componente com Hooks e definindo seus props.

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Users}/>
          <Route exact path="/users/:id" component={UserDetails}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
