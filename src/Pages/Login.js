import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

export default function Login({ history }) {
  const { loginInfo, handleLoginInfos } = useContext(AppContext);

  const { email, password } = loginInfo;

  const handleSubmit = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/comidas');
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

Login.propTypes = {
  history: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.func,
  ]).isRequired,
};
