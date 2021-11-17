import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Image } from 'react-bootstrap';
import AppContext from '../context/AppContext';
import logo from '../images/logo.png';

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
    <div className="d-flex flex-column bd-highlight mb-3">
      <Image src={ logo } width="120" alt="Logo" className="rounded mx-auto d-block" />
      <div className="d-flex flex-column bd-highlight mb-3">
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Login:</Form.Label>
            <Form.Control
              data-testid="email-input"
              type="email"
              name="email"
              placeholder="email@exemplo.com"
              defaultValue={ email }
              size="sm"
              onChange={ handleLoginInfos }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Senha:</Form.Label>
            <Form.Control
              data-testid="password-input"
              type="password"
              name="password"
              size="sm"
              placeholder="senha"
              onChange={ handleLoginInfos }
            />
            <Form.Text className="text-muted">
              A senha deve ter no mínimo 7 caracteres.
            </Form.Text>
          </Form.Group>
        </Form>
        <Button
          data-testid="login-submit-btn"
          type="button"
          disabled={ !isValid }
          onClick={ handleSubmit }
          size="lg"
          className="p-2 flex-fill bd-highlight"
          variant="primary"
        >
          Entrar
        </Button>
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
