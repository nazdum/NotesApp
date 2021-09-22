import { useState } from 'react'
import LoginForm from './components/LoginForm';

const App = () => {


  const [isLogged, setIsLogged] = useState(false);

  const [userData, setUserData] = useState({
    name: window.localStorage.getItem('RealNameOfUser'),
    token: window.localStorage.getItem('PersonalAccessToken')
  });
  const { name, token } = userData;


  return (

    <>

      {
        token ? <h1>{`Logged as ${name}`}</h1>
          : <LoginForm setUserData={setUserData} setIsLogged={setIsLogged} />
      }


    </>

  );
}

export default App;