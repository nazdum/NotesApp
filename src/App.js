import { useState } from 'react'
import LoginForm from './components/LoginForm';

const App = () => {


  const [isLogged, setIsLogged] = useState(false);

  const [userData, setUserData] = useState({ name: '', token: '' });
  const { name, token } = userData;

  return (

    <>

      {
        isLogged ? <h1>{`Logged as ${name} your token is: ${token}`}</h1> : <LoginForm setUserData={setUserData} setIsLogged={setIsLogged} />
      }


    </>

  );
}

export default App;