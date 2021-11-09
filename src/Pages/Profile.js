import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

export default function Profile({ history }) {
  const { email } = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')) : 'email não encontrado';

  function redirect(route) {
    history.push(route);
  }

  return (
    <div>
      <Header title="Perfil" withSearch={ false } />
      <span data-testid="profile-email">{ email }</span>
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ () => redirect('/receitas-feitas') }
      >
        Receitas Feitas
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ () => redirect('/receitas-favoritas') }
      >
        Receitas Favoritas
      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ () => {
          localStorage.clear();
          redirect('/');
        } }
      >
        Sair
      </button>
      <Footer />
    </div>
  );
}

Profile.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
