function ImagePopup() {
  return (
    <section
      className="popup popup_purpose_open-image"
      aria-label="Большое изображение"
    >
      <div className="popup__container-image">
        <figure className="popup__figure">
          <img className="popup__image" src="#" alt="alt" />
          <figcaption className="popup__caption"></figcaption>
        </figure>

        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть"
        ></button>
      </div>
    </section>
  );
}

export default ImagePopup;
