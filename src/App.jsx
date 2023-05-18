
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/Login'
import Alert from './components/alert/Alert';
import { useState } from 'react';
function App() {

  const [alertMessage, setAlertMessage] = useState('')
  const [alertType, setAlertType] = useState('')

  const validateLogin = (user) => {
   
    const validEmail = "josselin@gmail.com"
    const validPassword = "123123"
    console.log('user', user);

    if (user.email == validEmail && user.password == validPassword) {
      setAlertMessage('Login exitoso')
      setAlertType('success')
    } else {
      setAlertMessage('Usuario o contraseña invalidos')
      setAlertType('danger')
    }
  }
  return (

    <div className="container" class="container">
      <div class="login">
        <Login onSubmit={validateLogin} />
        <Alert message={alertMessage} type={alertType} />
      </div>
    </div>

  );
}

export default App;
