import React, { useState } from 'react';
import { api } from '../utils/api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((error) => {
        console.log(error);
      });

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
        <img className="profile__avatar" src={userAvatar} alt="Аватар" />

        <button
          className="profile__update-button"
          onClick={props.onEditAvatar}
        ></button>

        <h1 className="profile__title">{userName}</h1>

        <button
          className="profile__edit-button"
          type="button"
          aria-label="Редактировать профиль"
          onClick={props.onEditProfile}
        ></button>

        <p className="profile__subtitle">{userDescription}</p>

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
