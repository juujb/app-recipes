import React, { useState } from 'react';

const LOGIN_STATE = {
  email: '',
  password: '',
};

export default function Login() {
  const [loginInfo, setInfos] = useState(LOGIN_STATE);

  const { email } = loginInfo;

  const handleLoginInfos = ({ target: { name, value } }) => {
    setInfos({
      ...loginInfo,
      [name]: value,
    });
    if (name === 'email') {
      localStorage.setItem(name, value);
    }
  };

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
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
