function Card({ data }) {
  return (
    <article className="element">
      <img className="element__image" src={data.link} alt={data.name} />

      <h2 className="element__title">{data.name}</h2>

      <button
        className="element__delete"
        type="button"
        aria-label="Удалить"
      ></button>

      <button
        className="element__like"
        type="button"
        aria-label="Нравится"
      ></button>

      <p className="element__like-counter">{data.likes.length}</p>
    </article>
  );
}

export default Card;
