import React, { useState, useEffect } from 'react';
import { api } from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../../src/contexts/CurrentUserContext';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <img
          className="profile__avatar"
          src={currentUser.avatar}
          alt="Аватар"
        />

        <button
          className="profile__update-button"
          onClick={props.onEditAvatar}
        ></button>

        <h1 className="profile__title">{currentUser.name}</h1>

        <button
          className="profile__edit-button"
          type="button"
          aria-label="Редактировать профиль"
          onClick={props.onEditProfile}
        ></button>

        <p className="profile__subtitle">{currentUser.about}</p>

        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить фотографию"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="elements" aria-label="Места">
        {cards.map((card) => {
          return (
            <Card onCardClick={props.onCardClick} data={card} key={card._id} />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
