import React from 'react';
import { CurrentUserContext } from '../../src/contexts/CurrentUserContext';

function Card({ data, onCardClick }) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = data.owner._id === currentUser._id;

  const cardDeleteButtonClassName = `element__delete ${
    isOwn ? 'element__delete_visible' : 'element__delete_hidden'
  }`;

  const isLikes = data.likes.some((like) => like._id === currentUser._id);

  const cardLikeButtonClassName = `element__like ${
    isLikes ? 'element__like_active' : ''
  }`;

  function handleClick() {
    onCardClick(data);
  }

  return (
    <article className="element">
      <img
        className="element__image"
        src={data.link}
        alt={data.name}
        onClick={handleClick}
      />

      <h2 className="element__title">{data.name}</h2>

      <button
        className={cardDeleteButtonClassName}
        type="button"
        aria-label="Удалить"
      ></button>

      <button
        className={cardLikeButtonClassName}
        type="button"
        aria-label="Нравится"
      ></button>

      <p className="element__like-counter">{data.likes.length}</p>
    </article>
  );
}

export default Card;
