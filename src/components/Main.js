import profileAvatar from '../images/profile-avatar.jpg';

function Main() {
  function handleEditAvatarClick() {
    document
      .querySelector('.popup_purpose_update-avatar')
      .classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    document
      .querySelector('.popup_purpose_edit-profile')
      .classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document
      .querySelector('.popup_purpose_add-card')
      .classList.add('popup_opened');
  }

  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar" src={profileAvatar} alt="Аватар" />
        <button
          className="profile__update-button"
          onClick={handleEditAvatarClick}
        ></button>
        <h1 className="profile__title">Жак-Ив Кусто</h1>
        <button
          className="profile__edit-button"
          type="button"
          aria-label="Редактировать профиль"
          onClick={handleEditProfileClick}
        ></button>
        <p className="profile__subtitle">Исследователь океана</p>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить фотографию"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section className="elements" aria-label="Места"></section>
    </main>
  );
}

export default Main;
