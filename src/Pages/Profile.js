import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import imgProfile from '../images/avatar_profile.svg';
import '../styles/PageProfile.css';

export default function Profile({ history }) {
  const { email } = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')) : 'email não encontrado';

  function redirect(route) {
    history.push(route);
  }

  return (
    <div className="container-profile">
      <Header title="Perfil" withSearch={ false } />
      <div className="main-profile">
        <div>
          <img src={ imgProfile } alt="Imagem de Perfil" className="image-profile" />
        </div>
        <div>
          <span className="email-profile" data-testid="profile-email">{ email }</span>
        </div>
        <div>
          <Button
            type="button"
            data-testid="profile-done-btn"
            onClick={ () => redirect('/receitas-feitas') }
          >
            Receitas Feitas
          </Button>
        </div>
        <div>
          <Button
            type="button"
            data-testid="profile-favorite-btn"
            onClick={ () => redirect('/receitas-favoritas') }
          >
            Receitas Favoritas
          </Button>
        </div>
        <div>
          <Button
            type="button"
            data-testid="profile-logout-btn"
            className="btn-logout"
            onClick={ () => {
              localStorage.clear();
              redirect('/');
            } }
          >
            Sair
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

Profile.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
