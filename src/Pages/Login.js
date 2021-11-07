import React from 'react';

export default function Login() {
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
              defaultValue="E-mail"
            />
          </label>
          <label htmlFor="password">
            <input
              data-testid="password-input"
              type="password"
              name="password"
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
