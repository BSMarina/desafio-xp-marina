import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/user';
import xpincLogo from '../../images/xpincLogo.png';

export default function Login() {
  const [inputText, setInputText] = useState({
    email: '',
    password: '',
  });

  const [button, setButton] = useState({ isDisable: true });

  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    const validateLogin = () => {
      const MAX_CHARACTER_LENGTH = 6;
      const conditions = [
        /^[a-z._-\d]{3,26}@[a-z]{3,16}\.[a-z]{2,3}$/i.test(inputText.email),
        inputText.password.length > MAX_CHARACTER_LENGTH,
      ];

      setButton({ isDisable: conditions.includes(false) });
    };
    validateLogin();
  }, [inputText]);


  const handleChange = ({ name, value }) => {
    setInputText((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = () => {
    const { email } = inputText;
    dispatch(login(email))
    navigate('/carteira')
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
          disabled={ button.isDisable }
          type="button"
          onClick={ handleClick }>
            Login
          </button>
      </form>
    </div>
  );
}