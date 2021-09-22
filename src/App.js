import { useState } from 'react'
import LoginForm from './components/LoginForm';
import LogOut from './components/LogOut';

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
        token ?
          <><h1>{`Logged as ${name}`}</h1> <LogOut setUserData={setUserData} /> </>
          : <LoginForm setUserData={setUserData} setIsLogged={setIsLogged} />
      }


    </>

  );
}

export default App;