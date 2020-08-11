import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/19878139?s=460&u=278a6f44f49af3c8edb13a811f7654dfe6e89341&v=4" alt="Rafael Fachinelli"/>
        <div>
          <strong>Rafael Fachinelli</strong>
          <span>Educação Física</span>
        </div>
      </header>
      <p>
        Biografia teste para o proffy.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 54,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;