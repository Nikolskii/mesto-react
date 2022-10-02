function PopupWithForm(props) {
  return (
    <section
      className={`popup popup_purpose_${props.name} ${
        props.isOpen && 'popup_opened'
      }`}
      aria-label={props.title}
    >
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>

        <form
          className={`form form_purpose_${props.name}`}
          name={props.name}
          novalidate
        >
          {props.children}
        </form>

        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
      </div>
    </section>
  );
}

export default PopupWithForm;
