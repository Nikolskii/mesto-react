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

  function handleCardClick(card) {
    const isLiked = card.likes.some((like) => like._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((cards) => cards.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
            <Card
              onCardClick={props.onCardClick}
              onCardLike={handleCardClick}
              onCardDelete={handleCardDelete}
              card={card}
              key={card._id}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
