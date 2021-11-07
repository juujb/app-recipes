import React, { useState } from 'react';

const LOGIN_STATE = {
  email: '',
  password: '',
};

export default function Login() {
  const [loginInfo, setInfos] = useState(LOGIN_STATE);

  const { email, password } = loginInfo;

  const handleLoginInfos = ({ target: { name, value } }) => {
    setInfos({
      ...loginInfo,
      [name]: value,
    });
    if (name === 'email') {
      localStorage.setItem(name, value);
    }
  };

  const handleSubmit = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
  };

  const handleValidation = (em, senha) => {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const regexPassord = /^[a-zA-Z0-9 ]{7,20}$/;
    return regexEmail.test(String(em)) && regexPassord.test(String(senha));
  };

  const isValid = handleValidation(email, password);

  return (
    <div>
      <h1>Login</h1>
      <div>
        <form>
          <label htmlFor="email">
            <input
              data-testid="email-input"
              type="email"
              name="email"
              defaultValue={ email }
              onChange={ handleLoginInfos }
            />
          </label>
          <label htmlFor="password">
            <input
              data-testid="password-input"
              type="password"
              name="password"
              onChange={ handleLoginInfos }
            />
          </label>
        </form>
        <button
          data-testid="login-submit-btn"
          type="button"
          disabled={ !isValid }
          onClick={ handleSubmit }
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
