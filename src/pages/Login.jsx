import React, { useState,
    // useEffect,
 } from 'react';
// import { useHistory } from 'react-router-dom';
import xpincLogo from '../images/xpincLogo.png'

export default function Login() {
  const [inputText, setInputText] = useState({
    email: '',
    password: '',
  });

  const [button, setButton] = useState({ isDisable: true });

//   useEffect(() => {
//     const validateLogin = () => {
//       const MAX_CHARACTER_LENGTH = 6;
//       const conditions = [
//         /^[a-z._-\d]{3,26}@[a-z]{3,16}\.[a-z]{2,3}$/i.test(inputText.email),
//         inputText.password.length > MAX_CHARACTER_LENGTH,
//       ];

//       setButton({ isDisable: conditions.includes(false) });
//     };
//     validateLogin();
//   }, [inputText]);

  const verifyLogin = () => {
    const minLength = 6;
    // Regex encontrado em https://stackoverflow.com/a/9204568 e explicação dele aqui https://tinyurl.com/yanwzcrs
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputText.password.length < minLength || !validEmail.test(inputText.email)) {
      setButton({
        isDisabled: true,
      });
    } else {
      setButton({
        isDisabled: false,
      });
    }
  }

  const handleChange = ({ name, value }) => {
    setInputText((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    verifyLogin()
  };

//   const { push } = useHistory();
  const handleClick = () => {
    // localStorage.setItem('mealsToken', '1');
    // localStorage.setItem('cocktailsToken', '1');
    // localStorage.setItem('user', JSON.stringify({ email: inputText.email }));
    // push('/foods');
    console.log('clicou!')
  };

  return (
    <div
    //  className={ styles.FormContainer }
     >
      <form
    //    className={ styles.Form }
       >
        <div
        //  className={ styles.TittleApp }
         >
          <img src={ xpincLogo } alt="Logo da XP Inc." />
        </div>
          <input
            type="text"
            name="email"
            onChange={ ({ target }) => handleChange(target) }
            value={ inputText.email }
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            onChange={ ({ target }) => handleChange(target) }
            value={ inputText.password }
            placeholder="Senha"
            autoComplete="off"
          />
        <button
          buttonName="Login"
          isDisabled={ button.isDisable }
          type="button"
          onClick={ handleClick }>
            Login
          </button>
      </form>
    </div>
  );
}
