import React from 'react';
import Header from '../Components/Header';

export default function Profile() {
  const { email } = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      <Header title="Perfil" withSearch={ false } />
      <span data-testid="profile-email">{ email }</span>
      <button
        type="button"
        data-testid="profile-done-btn"
      >
        Receitas Feitas
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
      >
        Receitas Favoritas
      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
      >
        Sair
      </button>
    </div>
  );
}
